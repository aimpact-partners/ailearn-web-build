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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2dhbGxlcnkiLCJBcnRpY2xlRm9ybSIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsImFydGljbGUiLCJjb250ZW50Iiwic2V0IiwidGFyZ2V0Iiwib25TYXZlIiwiY29uc29sZSIsInRyYWNlIiwic2F2ZSIsIm9uQ2xvc2UiLCJGb3JtIiwib25TdWJtaXQiLCJXaWtpRWRpdG9yIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiaW5pdGlhbENvbnRlbnQiLCJsb2FkZXJzIiwiaW1hZ2UiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhcmFjdGVyQ291bnRlciIsIm1heExlbmd0aCIsIndhcm5pbmdUaHJlc2hvbGQiLCJlcnJvclRocmVzaG9sZCIsImNoYXJhY3RlcnMiLCJHYWxsZXJ5TW9kYWwiLCJfbWFya2Rvd24iLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVQcmV2aWV3Iiwib25FZGl0Iiwib25EZWxldGUiLCJyZXZlcnQiLCJjbGVhciIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsIl9jbHN4IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInJlbWFpbmluZyIsImNsc0NoYXJhY3RlcnMiLCJfdXNlVXBsb2FkZXIiLCJoYW5kbGVDbG9zZSIsInJlc29sdmUiLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJmaWxlcyIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXNlVXBsb2FkZXIiLCJtdWx0aXBsZSIsInZhbGlkYXRvciIsInByb2Nlc3NvciIsIm1heFNpemUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJyZWYiLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb2xvciIsIlN0cmluZyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImZpbGUiLCJrZXkiLCJpZCIsIm1hcmdpblJpZ2h0IiwicHJldmlld1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiX2VtcHR5QXJ0aWNsZSIsIl9hcnRpY2xlUHJldmlldyIsIl9hcnRpY2xlRm9ybSIsIkFydGljbGVUYWIiLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1zIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJzaXplIiwiY2FuQmVDcmVhdGVkIiwiZW1wdHlUZXh0IiwiYXVkaW8iLCJlbXB0eU1hdGVyaWFsIiwidHlwZXMiLCJub0F1ZGlvIiwicGFyYW1zIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJmb3JFYWNoIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInZhbHVlcyIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInNldENvbnRlbnQiLCJvbkNsaWNrQ2FuY2VsIiwidXBkYXRlZCIsIm9uTW9kYWxDYW5jZWwiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInRvZ2dsZU1hbnVhbCIsImUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkV4ZXJjaXNlQWN0aXZpdHkiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eSIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9jb250ZXh0MiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3Iiwic2V0RXJyb3JzIiwic2V0Q29uZmlybSIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvbnRleHRWYWx1ZSIsImNhbmNlbENoYW5nZXMiLCJ1bnB1Ymxpc2hlZCIsIlByb3ZpZGVyIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIkl0ZW0iLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9hY3Rpb25zIiwiX3F1ZXN0aW9uIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvbkJpbmRlciIsImdldERhdGEiLCJvblJlb3JkZXIiLCJvcmRlckxhYmVsIiwic2F2ZVJlb3JkZXJpbmciLCJyZW9yZGVyQXR0cnMiLCJtdWx0aXBsZWNob2ljZSIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRHluYW1pY0ljb25CdXR0b24iLCJwb3NpdGlvbiIsImhhc093blByb3BlcnR5IiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwibGF6eUluaXQiLCJEeW5hbWljQnV0dG9uIiwiRHluYW1pY0ZpZWxkIiwiU3BlY3NGaWVsZCIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJfYWlCdXR0b24iLCJzZXROb3RlcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfdG9hc3QiLCJfcHJvZ3Jlc3MiLCJfcHJldmlldyIsIkVkaXRvclRvb2xiYXIiLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJ0ZXN0QWN0aXZpdHkiLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsImRhdGUiLCJEYXRlIiwibm93IiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJzZXRTaG93IiwiZW50cmllcyIsImxhbmdDb2RlIiwibGFuZ0RhdGEiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJwcm9ncmVzc0l0ZW1zIiwicHJvZ3Jlc3NGaWVsZHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9leGVyY2lzZSIsIl9mcmVlQ29udmVyc2F0aW9uIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9lZGl0b3JUb29sYmFyIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNwb2tlbiIsIndyaXR0ZW4iLCJkZWJhdGUiLCJleGVyY2lzZSIsImRlZmluZVByb3BlcnR5IiwiX2NoYXQiLCJBY3Rpdml0eUNvbnRyb2wiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlDb21wb25lbnRWaWV3IiwiQ2hhdENvbnRyb2wiLCJhY3Rpdml0eURhdGEiLCJBc3Nlc3NtZW50QWN0aXZpdHlQcmV2aWV3IiwiX2FjdGl2aXR5Q29udHJvbCIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9hcnRpY2xlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvYXJ0aWNsZS1wcmV2aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2NoYXJhY3Rlci1jb3VudGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2dhbGxlcnktbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvdXNlLXVwbG9hZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci9lZGl0b3ItdG9vbGJhci50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvcHJldmlldy9hY3Rpdml0eS1jb250cm9sLnRzeCIsIi90cy9wcmV2aWV3L2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ByZXZpZXcvaW5kZXgudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FJOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGEsT0FBUUosS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQU0sRUFDdERmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0UsUUFBUSxDQUFRLENBQ3JELENBQ0QsRUFDTmhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxVQUFVO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdkMsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBQyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXVCLGVBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVNLFNBQVV5QixxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFckIsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ29CLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU1MLElBQUksR0FBR3JCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FDdkRILE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUVELElBQUFOLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMsRUFBRTBCLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFBWCxNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQUVFLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFFdEQsT0FDQ1YsS0FBQSxDQUFBYixhQUFBLENBQUFhLEtBQUEsQ0FBQVosUUFBQSxRQUNDWSxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQXFCLEdBQ3BDVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBVyxjQUFjLE9BQUcsRUFDbEJaLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZ0IsTUFBQSxDQUFBVSxhQUFhO2NBQUNqQixJQUFJLEVBQUMsVUFBVTtjQUFDa0IsSUFBSSxFQUFDO1lBQWEsRUFBRyxFQUNwRGQsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3RDLENBQ0QsQ0FDRyxFQUNWRyxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTJCLEdBQzdDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CVyxLQUFBLENBQUFiLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3RCLEtBQUssQ0FBTSxFQUNoRE8sS0FBQSxDQUFBYixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCTixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDckIsUUFBUSxFQUN6Q00sS0FBQSxDQUFBYixhQUFBLENBQUNXLE1BQUEsQ0FBQWtCLE9BQU87Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUM0QixJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3hDLENBQ0YsQ0FDRSxFQUNUakIsS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUyxPQUFHLENBQ1IsRUFDTkssS0FBQSxDQUFBYixhQUFBLENBQUNlLGVBQUEsQ0FBQXBCLGNBQWMsT0FBRyxDQUNiLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUMsTUFBQSxHQUFBdkMsT0FBQTtVQUtNLFNBQVV3QyxlQUFlQSxDQUFDO1lBQUVDO1VBQVUsQ0FBRTtZQUM3QyxPQUNDMUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQUcsS0FBSyxPQUFHLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBM0MsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTJDLFFBQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBNEMsVUFBQSxHQUFBNUMsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsTUFBTXVDLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQ2xDQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FDbENDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFDekJDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztjQUMvQk4sS0FBSyxDQUFDRSxhQUFhLENBQUNHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQVUsQ0FBQztjQUM3Q2hELFFBQVEsQ0FBQ2lELFNBQVMsQ0FBQ1IsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztZQUM5QyxDQUFDO1lBRUQsT0FDQ3hELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxVQUFBLENBQUFZLGFBQWEsT0FBRyxFQUNqQnpELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtQyxRQUFBLENBQUFjLG1CQUFtQixPQUFHLEVBQ3ZCMUQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FJOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGEsT0FBUUosS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQU0sRUFDdERmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0UsUUFBUSxDQUFRLENBQ3JELENBQ0QsRUFDTmhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxVQUFVO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdkMsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBbkIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFnQk0sU0FBVTRELGFBQWFBLENBQUM7WUFDN0JsRCxTQUFTO1lBQ1RtRCxRQUFRLEdBQUcsS0FBSztZQUNoQkMsT0FBTyxHQUFHLFNBQVM7WUFDbkJ4QixJQUFJO1lBQ0p5QixPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsRUFBRSxHQUFHLFFBQVE7WUFDYkMsUUFBUTtZQUNScEQsS0FBSztZQUNMcUQsV0FBVztZQUNYQyxNQUFNLEdBQUcsUUFBUTtZQUNqQkM7VUFBUSxDQUNzQjtZQUM5QixNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUd4RSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0MsTUFBTSxDQUFDNEMsS0FBSyxFQUFFcEUsS0FBSyxDQUFDLEdBQUcsSUFBQWdCLE1BQUEsQ0FBQXFELFFBQVEsRUFBQywyQkFBMkIsQ0FBQztZQUU1RCxJQUFJLENBQUNELEtBQUssRUFBRTtZQUVaMUQsS0FBSyxHQUFHQSxLQUFLLElBQUlWLEtBQUssQ0FBQ3NFLEtBQUssQ0FBQ04sTUFBTSxDQUFDLENBQUN0RCxLQUFLO1lBQzFDcUQsV0FBVyxHQUFHQSxXQUFXLElBQUkvRCxLQUFLLENBQUNzRSxLQUFLLENBQUNOLE1BQU0sQ0FBQyxDQUFDRCxXQUFXO1lBRTVELE1BQU1RLFVBQVUsR0FBR0EsQ0FBQSxLQUFNSixPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQ3ZDLE1BQU1NLGFBQWEsR0FBRzlCLEtBQUssSUFBRztjQUM3QkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCRixVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUQsTUFBTUcsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixNQUFNZCxRQUFRLEVBQUU7Y0FDaEJXLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFDRCxNQUFNSSxPQUFPLEdBQUdkLEVBQUUsS0FBSyxNQUFNLEdBQUc5QyxNQUFBLENBQUE2RCxhQUFhLEdBQUdyQixXQUFBLENBQUFzQixNQUFNO1lBQ3RELE9BQ0NsRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsT0FBTztjQUNQckUsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCd0QsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCTCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJDLE9BQU8sRUFBRUEsT0FBTztjQUNoQnhCLElBQUksRUFBRUEsSUFBSTtjQUNWeEIsS0FBSyxFQUFFaUQsT0FBTztjQUNkbUIsT0FBTyxFQUFFTjtZQUFhLEdBRXJCUCxRQUFRLENBQ0EsRUFDVEMsSUFBSSxJQUNKdkUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FDWkMsVUFBVSxFQUFFO2dCQUNYQyxLQUFLLEVBQUVqRixLQUFLLENBQUNrRixPQUFPLENBQUNDLE9BQU87Z0JBQzVCekIsT0FBTyxFQUFFO2VBQ1Q7Y0FDRDBCLFNBQVMsRUFBRTtnQkFDVkgsS0FBSyxFQUFFakYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDRyxNQUFNO2dCQUMzQjNCLE9BQU8sRUFBRSxTQUFTO2dCQUNsQkksUUFBUSxFQUFFO2VBQ1Y7Y0FDRHdCLElBQUk7Y0FDSlosU0FBUyxFQUFFQSxTQUFTO2NBQ3BCYSxRQUFRLEVBQUVoQjtZQUFVLEdBRXBCNUUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS00sS0FBSyxDQUFNLEVBQ2hCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxZQUFJMkQsV0FBVyxDQUFLLENBQ2YsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUZBLElBQUEvQyxNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUVNLFNBQVU0RixxQkFBcUJBLENBQUMsRUFBRTtZQUN2QyxNQUFNO2NBQ0x4RixLQUFLLEVBQUU7Z0JBQ05PLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO29CQUFFd0IsS0FBSyxFQUFFaEM7a0JBQUs7Z0JBQUU7Y0FDMUIsQ0FDRDtjQUNEQztZQUFRLENBQ1IsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLElBQUFjLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ3hGLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUVqRSxPQUNDZ0IsS0FBQSxDQUFBYixhQUFBLENBQUFhLEtBQUEsQ0FBQVosUUFBQSxRQUNDWSxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQXFCLEdBQ3BDVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBVyxjQUFjLE9BQUcsRUFDbEJaLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZ0IsTUFBQSxDQUFBVSxhQUFhO2NBQUNqQixJQUFJLEVBQUMsVUFBVTtjQUFDa0IsSUFBSSxFQUFDO1lBQWEsRUFBRyxFQUNwRGQsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3RDLENBQ0QsQ0FDRyxFQUNWRyxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTJCLEdBQzdDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CVyxLQUFBLENBQUFiLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsYUFBS0osS0FBSyxDQUFDVSxLQUFLLENBQU0sRUFDdEJPLEtBQUEsQ0FBQWIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4Qk4sS0FBSyxDQUFDVyxRQUFRLEVBQ2ZNLEtBQUEsQ0FBQWIsYUFBQSxDQUFDVyxNQUFBLENBQUFrQixPQUFPO2NBQUMzQixTQUFTLEVBQUMsY0FBYztjQUFDNEIsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFFVGpCLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVMsT0FBRyxDQUNSLEVBQ05LLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZSxlQUFBLENBQUFwQixjQUFjLE9BQUcsQ0FDYixDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQWdCLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUVNLFNBQVU4RixVQUFVQSxDQUFDO1lBQUV2QyxLQUFLO1lBQUVqQjtVQUFJLENBQUU7WUFDekMsTUFBTTtjQUFFbEMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBUWhELE1BQU11QyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDRSxhQUFhLENBQUNDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUVDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztjQUMvR04sS0FBSyxDQUFDRSxhQUFhLENBQUNHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFVBQVUsQ0FBQztjQUU3Q2hELFFBQVEsQ0FBQ2lELFNBQVMsQ0FBQ1IsS0FBSyxDQUFDRSxhQUFhLENBQUMrQyxPQUFPLENBQUN4QyxLQUFLLENBQUM7WUFDdEQsQ0FBQztZQUVELE1BQU15QyxLQUFLLEdBQWM7Y0FDeEJ6QyxLQUFLO2NBQ0xqQixJQUFJO2NBQ0p4QixLQUFLLEVBQUVWLEtBQUssQ0FBQ08sVUFBVSxDQUFDc0YsUUFBUSxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQzdELElBQUksQ0FBQyxDQUFDeEI7YUFDdEQ7WUFFRCxJQUFJc0YsWUFBWSxHQUFHLG9CQUFvQjdDLEtBQUssS0FBS2xELFFBQVEsQ0FBQzRGLFFBQVEsRUFBRUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxFQUFFLEVBQUU7WUFDL0YsSUFBSTNDLEtBQUssS0FBS2xELFFBQVEsQ0FBQzRGLFFBQVEsRUFBRUMsTUFBTSxFQUFFRixLQUFLLENBQUN0RixTQUFTLEdBQUcsUUFBUTtZQUVuRSxPQUNDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUUwRixZQUFZO2NBQUVsQixPQUFPLEVBQUVyQyxRQUFRO2NBQUEsY0FBY1U7WUFBSyxHQUNqRXhELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQTZELGFBQWE7Y0FBQSxHQUFLZ0I7WUFBSyxFQUFJLEVBRTVCakcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQTBDLFdBQVc7Y0FBQzNGLFNBQVMsRUFBQztZQUFJLEdBQUVOLEtBQUssQ0FBQ08sVUFBVSxDQUFDc0YsUUFBUSxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQzdELElBQUksQ0FBQyxDQUFDNkIsV0FBVyxDQUFlLENBQ2pHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFwRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0csS0FBQSxHQUFBdEcsT0FBQTtVQUVNLFNBQVV5RCxtQkFBbUJBLENBQUE7WUFDbEMsTUFBTTtjQUFFckQsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFtQixHQUNyQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTZCLEdBQzNDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGEsT0FBUUosS0FBSyxDQUFDTyxVQUFVLENBQUNzRixRQUFRLENBQUNDLE1BQU0sQ0FBQ3BGLEtBQUssQ0FBTSxFQUNwRGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNzRixRQUFRLENBQUNDLE1BQU0sQ0FBQy9CLFdBQVcsQ0FBUSxDQUN0RCxDQUNELEVBQ05wRSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBd0IsR0FDdENYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM4RixLQUFBLENBQUFSLFVBQVU7Y0FBQ3ZDLEtBQUssRUFBQyxxQkFBcUI7Y0FBQ2pCLElBQUksRUFBQztZQUFtQixFQUFHLEVBQ25FdkMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQVIsVUFBVTtjQUFDdkMsS0FBSyxFQUFDLHFCQUFxQjtjQUFDakIsSUFBSSxFQUFDO1lBQW1CLEVBQUcsRUFDbkV2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEYsS0FBQSxDQUFBUixVQUFVO2NBQUN2QyxLQUFLLEVBQUMsa0JBQWtCO2NBQUNqQixJQUFJLEVBQUM7WUFBZ0IsRUFBRyxDQUN4RCxDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQXFCLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUcsaUJBQUEsR0FBQXZHLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBd0csT0FBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUF5RyxLQUFBLEdBQUF6RyxPQUFBO1VBRUEsSUFBQTBHLFFBQUEsR0FBQTFHLE9BQUE7VUFLTSxTQUFVMkcsV0FBV0EsQ0FBQztZQUFFaEI7VUFBUSxDQUFxQjtZQUMxRCxNQUFNO2NBQUV2RixLQUFLO2NBQUV3RyxLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU1FLGFBQWEsR0FBRzFHLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUztZQUNuRCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDaEUsTUFBTSxDQUFDdUYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFVLEtBQUssQ0FBQztZQUM5RCxNQUFNLENBQUN5RixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHdkgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQTZCLElBQUksQ0FBQztZQUM5RSxNQUFNO2NBQUUyRixPQUFPLEVBQUVDO1lBQU8sQ0FBRSxHQUFHbkgsUUFBUSxDQUFDMkcsU0FBUyxJQUFJLEVBQUU7WUFFckQsTUFBTW5FLFFBQVEsR0FBSUMsS0FBNkMsSUFBVTtjQUN4RXpDLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDO2dCQUFFRixPQUFPLEVBQUV6RSxLQUFLLENBQUM0RSxNQUFNLENBQUNuRTtjQUFLLENBQUUsQ0FBQztZQUN4RCxDQUFDO1lBRUQsTUFBTW9FLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQTBCO2NBQ3hDUCxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCUSxPQUFPLENBQUNDLEtBQUssQ0FBQyxFQUFFLEVBQUVMLE9BQU8sQ0FBQztjQUUxQm5ILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDO2dCQUFFRixPQUFPLEVBQUVDO2NBQU8sQ0FBRSxDQUFDO2NBQzVDLE1BQU1uSCxRQUFRLENBQUN5SCxJQUFJLEVBQUU7Y0FDckJWLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJ6QixRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTW9DLE9BQU8sR0FBR0EsQ0FBQSxLQUFXO2NBQzFCVCxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2hCSixZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxPQUNDbkgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBOEgsSUFBSTtjQUFDdEgsU0FBUyxFQUFDLDhCQUE4QjtjQUFDdUgsUUFBUSxFQUFFTjtZQUFNLEdBQzlENUgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0csT0FBQSxDQUFBMEIsVUFBVTtjQUNWL0YsSUFBSSxFQUFDLFNBQVM7Y0FDZGdHLFdBQVcsRUFBRXJCLGFBQWEsQ0FBQ3NCLElBQUksQ0FBQ2IsT0FBTyxDQUFDWSxXQUFXO2NBQ25ERSxjQUFjLEVBQUViLE9BQU87Y0FDdkIzRSxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJ5RixPQUFPLEVBQUU7Z0JBQ1JDLEtBQUssRUFBRUEsQ0FBQSxLQUFLO2tCQUNYLE1BQU1DLFFBQVEsR0FBRyxJQUFJL0IsS0FBQSxDQUFBZ0MsY0FBYyxFQUFFO2tCQUNyQ25CLFVBQVUsQ0FBQ2tCLFFBQVEsQ0FBQztrQkFDcEJ0QixZQUFZLENBQUMsSUFBSSxDQUFDO2tCQUVsQixPQUFPc0IsUUFBUTtnQkFDaEI7O1lBQ0EsRUFDQSxDQUNHLENBQ0EsRUFFUHpJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQytGLGlCQUFBLENBQUFtQyxnQkFBZ0I7Y0FDaEJsQixPQUFPLEVBQUVBLE9BQU87Y0FDaEJtQixTQUFTLEVBQUUsSUFBSTtjQUNmQyxnQkFBZ0IsRUFBRSxJQUFJO2NBQ3RCQyxjQUFjLEVBQUUsSUFBSTtjQUNwQnhELEtBQUssRUFBRWpGLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDOEI7WUFBVSxFQUM5QyxFQUNGL0ksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ0MsT0FBTyxFQUFFUyxRQUFRO2NBQUU3QixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO2NBQUNMLFFBQVEsRUFBRXNEO1lBQVEsR0FDdEVOLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ0csTUFBTSxDQUNuQixFQUNUMUYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUV5QyxNQUFNO2NBQUU5RCxRQUFRLEVBQUVzRDtZQUFRLEdBQzNETixXQUFXLENBQUN2QixPQUFPLENBQUN3QyxJQUFJLENBQ2pCLENBQ0QsRUFDUmIsU0FBUyxJQUFJbEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tHLFFBQUEsQ0FBQXFDLFlBQVk7Y0FBQ2hCLE9BQU8sRUFBRUEsT0FBTztjQUFFVixPQUFPLEVBQUVBLE9BQU87Y0FBRWhILFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ3BGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakZBLElBQUEySSxTQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBaUosY0FBQSxHQUFBakosT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQU1NLFNBQVVrSixjQUFjQSxDQUFDO1lBQUVDO1VBQU0sQ0FBd0I7WUFDOUQsTUFBTTtjQUFFdkMsS0FBSztjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNO2NBQUV1RztZQUFXLENBQUUsR0FBR0QsS0FBSztZQUU3QixNQUFNd0MsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBMEI7Y0FDMUMvSSxRQUFRLENBQUMyRyxTQUFTLENBQUNxQyxNQUFNLEVBQUU7Y0FDM0JoSixRQUFRLENBQUMyRyxTQUFTLENBQUNzQyxLQUFLLEVBQUU7Y0FDMUJqSixRQUFRLENBQUN5SCxJQUFJLEVBQUU7WUFDaEIsQ0FBQztZQUVELE9BQ0MvSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaENYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN3SSxTQUFBLENBQUFPLFFBQVE7Y0FBQy9CLE9BQU8sRUFBRW5ILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ087WUFBTyxFQUFJLENBQzVDLEVBRU54SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBOEIsR0FDL0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUMzQyxJQUFJLEVBQUMsTUFBTTtjQUFDNEMsT0FBTyxFQUFFaUUsTUFBTTtjQUFFckYsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtZQUFBLEdBQzdEMkMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDa0UsSUFBSSxDQUNqQixFQUNUekosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lJLGNBQUEsQ0FBQXJGLGFBQWE7Y0FBQ3RCLElBQUksRUFBQyxRQUFRO2NBQUMwQixRQUFRLEVBQUVvRixRQUFRO2NBQUV0RixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO1lBQUEsR0FDekUyQyxXQUFXLENBQUN2QixPQUFPLENBQUNtRSxNQUFNLENBQ1osQ0FDUixDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUExSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEosS0FBQSxHQUFBMUosT0FBQTtVQVVNLFNBQVUwSSxnQkFBZ0JBLENBQUM7WUFDaENsQixPQUFPO1lBQ1BtQixTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsY0FBYztZQUNkeEQ7VUFBSyxDQUNtQjtZQUN4QixNQUFNc0UsYUFBYSxHQUFHbkMsT0FBTyxFQUFFb0MsTUFBTSxJQUFJLENBQUM7WUFDMUMsTUFBTUMsU0FBUyxHQUFHbEIsU0FBUyxHQUFHZ0IsYUFBYTtZQUUzQyxNQUFNRyxhQUFhLEdBQUcsSUFBQUosS0FBQSxDQUFBbkosT0FBSSxFQUFDLHVCQUF1QixFQUFFO2NBQ25ELFlBQVksRUFBRW9KLGFBQWEsR0FBR2QsY0FBYztjQUM1QyxjQUFjLEVBQUVjLGFBQWEsR0FBR2YsZ0JBQWdCLElBQUllLGFBQWEsSUFBSWQ7YUFDckUsQ0FBQztZQUVGLE9BQ0M5SSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUVvSjtZQUFhLEdBQzNCekUsS0FBSyxFLEtBQUd3RSxTQUFTLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQTlKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBRUEsSUFBQStKLFlBQUEsR0FBQS9KLE9BQUE7VUFPTSxTQUFVK0ksWUFBWUEsQ0FBQztZQUFFaEIsT0FBTztZQUFFVjtVQUFPLENBQXNCO1lBQ3BFLE1BQU0yQyxXQUFXLEdBQUdBLENBQUEsS0FBVztjQUM5QjNDLE9BQU8sRUFBRTRDLE9BQU8sRUFBRTtjQUNsQmxDLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxNQUFNO2NBQUVtQyxVQUFVO2NBQUVDLFdBQVc7Y0FBRUMsS0FBSztjQUFFQyxTQUFTO2NBQUVDLFFBQVE7Y0FBRUM7WUFBTSxDQUFFLEdBQUcsSUFBQVIsWUFBQSxDQUFBUyxXQUFXLEVBQUM7Y0FDbkZDLFFBQVEsRUFBRSxJQUFJO2NBQ2RDLFNBQVMsRUFBRSxPQUFPO2NBQ2xCQyxTQUFTLEVBQUUsT0FBTztjQUNsQnhFLE9BQU8sRUFBRTtnQkFBRXlFLE9BQU8sRUFBRTtjQUFDO2FBQ3JCLENBQUM7WUFFRixPQUNDN0ssTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQW1ILEtBQUs7Y0FBQ25GLElBQUk7Y0FBQ2hGLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQ3FILE9BQU8sRUFBRWlDLFdBQVc7Y0FBRWMsYUFBYSxFQUFFO1lBQUssR0FDckYvSyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYSxHQUMzQlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZ0NBQXlCLENBQ3BCLEVBQ05ULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVF1SyxHQUFHLEVBQUViO1lBQWdELG1CQUF3QixFQUNyRm5LLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQ0N1SyxHQUFHLEVBQUVaLFdBQThDO2NBQ25EYSxLQUFLLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQUVDLE9BQU8sRUFBRSxFQUFFO2dCQUFFQyxTQUFTLEVBQUU7Y0FBRTtZQUFFLHFCQUczRCxFQUVMZCxTQUFTLElBQUl0SyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxZLGVBQWU4SixRQUFRLEUsSUFBTSxFQUMxQ0MsTUFBTSxJQUFJeEssTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBR3dLLEtBQUssRUFBRTtnQkFBRUksS0FBSyxFQUFFO2NBQUs7WUFBRSxHQUFHQyxNQUFNLENBQUNkLE1BQU0sQ0FBQyxDQUFLLEVBRTNEeEssTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dLLEtBQUssRUFBRTtnQkFBRU0sT0FBTyxFQUFFLE1BQU07Z0JBQUVDLFFBQVEsRUFBRSxNQUFNO2dCQUFFSixTQUFTLEVBQUU7Y0FBRTtZQUFFLEdBQzlEZixLQUFLLENBQUNvQixHQUFHLENBQUNDLElBQUksSUFDZDFMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtrTCxHQUFHLEVBQUVELElBQUksQ0FBQ0UsRUFBRTtjQUFFWCxLQUFLLEVBQUU7Z0JBQUVZLFdBQVcsRUFBRTtjQUFFO1lBQUUsR0FDM0NILElBQUksQ0FBQ0ksVUFBVSxHQUNmOUwsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FDQ3NMLEdBQUcsRUFBRUwsSUFBSSxDQUFDSSxVQUFVO2NBQ3BCRSxHQUFHLEVBQUVOLElBQUksQ0FBQ3RKLElBQUk7Y0FDZDZJLEtBQUssRUFBRTtnQkFBRWdCLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxNQUFNLEVBQUUsR0FBRztnQkFBRUMsU0FBUyxFQUFFO2NBQU87WUFBRSxFQUNyRCxHQUVGbk0sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FDQ3dLLEtBQUssRUFBRTtnQkFDTmdCLEtBQUssRUFBRSxHQUFHO2dCQUNWQyxNQUFNLEVBQUUsR0FBRztnQkFDWEUsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCYixPQUFPLEVBQUUsTUFBTTtnQkFDZmMsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCQyxjQUFjLEVBQUUsUUFBUTtnQkFDeEJqQixLQUFLLEVBQUU7O1lBQ1AsZ0JBSUYsRUFDRHJMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUd3SyxLQUFLLEVBQUU7Z0JBQUVzQixRQUFRLEVBQUU7Y0FBRTtZQUFFLEdBQUdiLElBQUksQ0FBQ3RKLElBQUksQ0FBSyxDQUU1QyxDQUFDLENBQ0csQ0FDRCxDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVBLElBQUFmLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBdU0sYUFBQSxHQUFBdk0sT0FBQTtVQUNBLElBQUF3TSxlQUFBLEdBQUF4TSxPQUFBO1VBQ0EsSUFBQXlNLFlBQUEsR0FBQXpNLE9BQUE7VUFFTSxTQUFVME0sVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUVyTTtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3pDLE1BQU0sQ0FBQ3FNLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUc3TSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFFMUQsTUFBTWlMLE1BQU0sR0FBR0EsQ0FBQSxLQUFZRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1lBRTdDLElBQUF2TCxNQUFBLENBQUF5RSxRQUFRLEVBQUN4RixRQUFRLENBQUMyRyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWpELElBQUksQ0FBQzJGLE1BQU0sSUFBSSxDQUFDdE0sUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEVBQUU7Y0FDM0MsT0FBT3hILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMrTCxhQUFBLENBQUFPLG9CQUFvQjtnQkFBQzNLLElBQUksRUFBQyxTQUFTO2dCQUFDNEssUUFBUSxFQUFFRjtjQUFNLEVBQUk7O1lBR2pFLElBQUksQ0FBQ0YsTUFBTSxJQUFJdE0sUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEVBQUU7Y0FDMUMsT0FBT3hILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnTSxlQUFBLENBQUF0RCxjQUFjO2dCQUFDQyxNQUFNLEVBQUUwRDtjQUFNLEVBQUk7O1lBRzFDLE9BQU85TSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaU0sWUFBQSxDQUFBOUYsV0FBVztjQUFDaEIsUUFBUSxFQUFFa0g7WUFBTSxFQUFJO1VBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBeEwsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQWdOLFNBQUEsR0FBQWhOLE9BQUE7VUFIQTs7VUFnQkE7OztVQUdNLFNBQVV3SyxXQUFXQSxDQUFDM0ksS0FBcUI7WUFDaEQsTUFBTXFJLFVBQVUsR0FBRzdJLEtBQUssQ0FBQzRMLE1BQU0sQ0FBcUIsSUFBSSxDQUFDO1lBQ3pELE1BQU05QyxXQUFXLEdBQUc5SSxLQUFLLENBQUM0TCxNQUFNLENBQXFCLElBQUksQ0FBQztZQUUxRDtZQUNBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEdBQUc3TCxLQUFLLENBQUNPLFFBQVEsQ0FBQyxNQUFNLElBQUlvTCxTQUFBLENBQUFHLFFBQVEsQ0FBQ3RMLEtBQUssQ0FBQyxDQUFDO1lBQzVELE1BQU0rRSxLQUFLLEdBQUcsSUFBQXhGLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ3FILFFBQVEsQ0FBQztZQUVoQztZQUNBN0wsS0FBSyxDQUFDK0wsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDbEQsVUFBVSxDQUFDbUQsT0FBTyxFQUFFO2NBRXpCSCxRQUFRLENBQUNJLE1BQU0sQ0FBQ3BELFVBQVUsQ0FBQ21ELE9BQU8sRUFBRWxELFdBQVcsQ0FBQ2tELE9BQU8sSUFBSUUsU0FBUyxDQUFDO2NBQ3JFLE9BQU8sTUFBTUwsUUFBUSxDQUFDTSxPQUFPLEVBQUU7WUFDaEMsQ0FBQyxFQUFFLENBQUNOLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTU8sS0FBSyxHQUFHN0csS0FBSyxDQUFDd0QsS0FBSyxDQUFDc0QsS0FBSztZQUMvQixNQUFNcEQsUUFBUSxHQUFHMUQsS0FBSyxDQUFDd0QsS0FBSyxDQUFDc0QsS0FBSyxHQUFHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUVoSCxLQUFLLENBQUN3RCxLQUFLLENBQUN5RCxLQUFLLENBQUNqRSxNQUFNLEdBQUdoRCxLQUFLLENBQUN3RCxLQUFLLENBQUNzRCxLQUFLLEdBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUU3RyxPQUFPO2NBQ054RCxVQUFVO2NBQ1ZDLFdBQVc7Y0FDWCtDLFFBQVE7Y0FDUjlDLEtBQUssRUFBRXhELEtBQUssQ0FBQ3dELEtBQUssQ0FBQ3lELEtBQUs7Y0FDeEJ0RCxNQUFNLEVBQUUzRCxLQUFLLENBQUMyRCxNQUFNO2NBQ3BCRixTQUFTLEVBQUV6RCxLQUFLLENBQUNPLFFBQVE7Y0FDekJtRCxRQUFRO2NBQ1JtRDthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERBLElBQUExTixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUdBLElBQUErTixhQUFBLEdBQUEvTixPQUFBO1VBRU0sU0FBVWdPLHVCQUF1QkEsQ0FBQyxFQUFvQztZQUMzRSxNQUFNO2NBQ0w1TixLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU07Y0FBRTJOO1lBQWEsQ0FBRSxHQUFHLElBQUFGLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFDOUMsTUFBTUMsVUFBVSxHQUFHRixhQUFhO1lBRWhDLE9BQ0NsTyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBTSxTQUFTO2NBQ1QxTixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCMk4sSUFBSSxFQUFFak8sS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNoQixLQUFLO2NBQ2xDcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQztZQUFXLEdBRS9DcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBUSxRQUFRO2NBQUNwSixPQUFPLEVBQUVpSixVQUFVO2NBQUVySyxPQUFPLEVBQUM7WUFBUyxHQUM5QytDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FDbkIsQ0FDTixDQUNLLENBQ1Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQW5OLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUdBLElBQUF3TyxLQUFBLEdBQUF4TyxPQUFBO1VBRU0sU0FBVXlPLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUVwTyxRQUFRO2NBQUVELEtBQUs7Y0FBRXdHO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU0sQ0FBQ29PLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUd0TixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzBILE1BQU0sQ0FBQztZQUVyRSxJQUFBdE4sTUFBQSxDQUFBWSxTQUFTLEVBQ1IsQ0FBQzNCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQyxFQUNwQixNQUFLO2NBQ0oySCxTQUFTLENBQUM7Z0JBQUUsR0FBR3RPLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzBIO2NBQU0sQ0FBRSxDQUFDO1lBQzVDLENBQUMsRUFDRCxnQkFBZ0IsQ0FDaEI7WUFFRCxPQUNDck4sS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ1csS0FBQSxDQUFBYixhQUFBLENBQUNnTyxLQUFBLENBQUFJLHNCQUFzQjtjQUFDM04sSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUN6Q0ksS0FBQSxDQUFBYixhQUFBLENBQUNnTyxLQUFBLENBQUFJLHNCQUFzQjtjQUFDM04sSUFBSSxFQUFDO1lBQVUsRUFBRyxDQUNyQztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBNk0sR0FBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFpSixjQUFBLEdBQUFqSixPQUFBO1VBQ0EsSUFBQStOLGFBQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUdPLE1BQU00TyxzQkFBc0IsR0FBR0EsQ0FBQztZQUFFM047VUFBSSxDQUFFLEtBQUk7WUFDbEQsTUFBTTtjQUFFMkYsS0FBSztjQUFFdkcsUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU07Y0FBRThIO1lBQU0sQ0FBRSxHQUFHck8sUUFBUSxDQUFDMkcsU0FBUztZQUNyQyxNQUFNO2NBQUVpSCxhQUFhO2NBQUU5RyxRQUFRO2NBQUUwSDtZQUFXLENBQUUsR0FBRyxJQUFBZCxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBRXJFLE1BQU1ZLEdBQUcsR0FBRyxDQUFDLENBQUN6TyxRQUFRLENBQUMyRyxTQUFTLENBQUMwSCxNQUFNLEdBQUd6TixJQUFJLENBQUM7WUFDL0MsTUFBTThOLGNBQWMsR0FBR2pNLEtBQUssSUFBRztjQUM5Qm1MLGFBQWEsQ0FBQyxDQUFDbkwsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxNQUFNNkYsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsT0FBT3lGLFdBQVcsQ0FBQyxDQUFDNU4sSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUVELE1BQU0rTixJQUFJLEdBQUczTyxRQUFRLENBQUMyRyxTQUFTLENBQUMvRixJQUFJLENBQUMsRUFBRTJJLE1BQU07WUFDN0MsTUFBTXFGLFlBQVksR0FBR0QsSUFBSSxHQUFHLENBQUMsSUFBSUEsSUFBSSxJQUFJLElBQUk7WUFFN0MsTUFBTUUsU0FBUyxHQUNkRixJQUFJLEtBQUssQ0FBQyxJQUFJQSxJQUFJLEtBQUt6QixTQUFTLEdBQzdCbk4sS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUNtSSxLQUFLLENBQUNDLGFBQWEsR0FDakRoUCxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQ21JLEtBQUssQ0FBQ3hHLFNBQVM7WUFDakQsT0FDQzVJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpQixHQUMvQlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUNxSSxLQUFLLENBQUNwTyxJQUFJLENBQUMsQ0FBTSxFQUNuRCxDQUFDNk4sR0FBRyxHQUNKL08sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDRXdPLFlBQVksR0FDWmxQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUF3QixHQUN0Q04sS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUNtSSxLQUFLLENBQUNHLE9BQU8sQ0FDdEMsR0FFUHZQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUF5QixHQUN4Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQTBDLFdBQVc7Y0FBQ2tKLE1BQU0sRUFBRTtnQkFBRXRPLElBQUksRUFBRWIsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUNtSSxLQUFLLENBQUNsTyxJQUFJO2NBQUM7WUFBRSxHQUN0RWlPLFNBQVMsQ0FDRyxDQUVmLENBQ0MsR0FDQSxJQUFJLENBQ0gsRUFDTm5QLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUMvQm9PLEdBQUcsR0FDSC9PLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUEyQyxHQUN6RFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQTBCLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFZixNQUFNLENBQUN6TixJQUFJLENBQUMsQ0FBQ3dPO1lBQUcsRUFBSSxFQUN0QzFQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5SSxjQUFBLENBQUFyRixhQUFhO2NBQ2JsRCxTQUFTLEVBQUMsUUFBUTtjQUNsQnFELE9BQU8sRUFBRThDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ21FLE1BQU07Y0FDbkNuSCxJQUFJLEVBQUMsUUFBUTtjQUNiMkIsRUFBRSxFQUFDLE1BQU07Y0FDVEQsUUFBUSxFQUFFb0YsUUFBUTtjQUNsQnZGLFFBQVEsRUFBRXNELFFBQVE7Y0FDbEJyRCxPQUFPLEVBQUM7WUFBUyxFQUNoQixDQUNHLEdBRU4vRCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBUSxRQUFRO2NBQ1J6SyxRQUFRLEVBQUUsQ0FBQ29MLFlBQVk7Y0FDdkI5SCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEI1RCxLQUFLLEVBQUV0QyxJQUFJO2NBQ1hpRSxPQUFPLEVBQUU2SixjQUFjO2NBQ3ZCakwsT0FBTyxFQUFDO1lBQVMsR0FFaEIrQyxXQUFXLENBQUN2QixPQUFPLENBQUNpSixRQUFRLENBRTlCLENBQ0ksQ0FDRDtVQUVSLENBQUM7VUFBQ21CLE9BQUEsQ0FBQWQsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUVGLElBQUF4TixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQTJQLEtBQUEsR0FBQTNQLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ00sU0FBVTRQLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQ0x2UCxRQUFRO2NBQ1J1RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ3FNLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUc3TSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsTUFBTSxDQUFDdUYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDRyxRQUFRLENBQUM7WUFDM0UsTUFBTTtjQUFFdUg7WUFBTSxDQUFFLEdBQUdyTyxRQUFRLENBQUMyRyxTQUFTO1lBQ3JDLElBQUE1RixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzRGLFNBQVMsQ0FBQyxLQUFLLENBQUM7Y0FDaEJ4RixXQUFXLENBQUMvRyxRQUFRLENBQUMyRyxTQUFTLENBQUNHLFFBQVEsQ0FBQztZQUN6QyxDQUFDLENBQUM7WUFFRixNQUFNMEcsS0FBSyxHQUFHLENBQUMsQ0FBQ2EsTUFBTSxHQUFHbUIsTUFBTSxDQUFDQyxJQUFJLENBQUNwQixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2pELE1BQU10RixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCaEMsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNL0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDK0ksWUFBWSxFQUFFO2NBRXZDM0ksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FDQ3JILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21QLEtBQUEsQ0FBQUssSUFBSTtjQUFDdFAsU0FBUyxFQUFDLGVBQWU7Y0FBQ21OLEtBQUssRUFBRUEsS0FBSztjQUFFb0MsT0FBTyxFQUFFekIsS0FBQSxDQUFBSSxzQkFBc0I7Y0FBRTNLLEVBQUUsRUFBQztZQUFLLEVBQUcsRSxJQUNyRixFQUNObEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQThCLEdBQy9DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDM0MsSUFBSSxFQUFDLFFBQVE7Y0FBQzRDLE9BQU8sRUFBRWtFLFFBQVE7Y0FBRXRGLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7WUFBQSxHQUNqRTJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ21FLE1BQU0sQ0FDbkIsQ0FDRCxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFxRSxHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQStOLGFBQUEsR0FBQS9OLE9BQUE7VUFFTSxTQUFVOE0sb0JBQW9CQSxDQUFDO1lBQUUzSyxJQUFJO1lBQUU0SztVQUFRLENBQUU7WUFDdEQsTUFBTTtjQUNMMU0sUUFBUTtjQUNSRCxLQUFLO2NBQ0x3RyxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTXdHLGFBQWEsR0FBRzFHLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUztZQUNuRCxNQUFNLENBQUNtSixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyUSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxHQUFHeU8sT0FBTyxDQUFDLEdBQUd0USxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQzVELE1BQU07Y0FBRWlGLFdBQVc7Y0FBRWtKO1lBQWUsQ0FBRSxHQUFHLElBQUF2QyxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBQzdELE1BQU1xQyxXQUFXLEdBQUdBLENBQUEsS0FBTUgsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU10TSxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUN4RCxRQUFRLENBQUNTO1lBQUssQ0FBRTtZQUU5QyxJQUFBTSxNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ0ksV0FBVyxDQUFDL0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDRyxRQUFRLENBQUM7Y0FDeENrSixPQUFPLENBQUNoUSxRQUFRLENBQUMyRyxTQUFTLENBQUM3RSxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixPQUNDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQU0sU0FBUztjQUNUMU4sU0FBUyxFQUFDLGlCQUFpQjtjQUMzQjJOLElBQUksRUFBRWpPLEtBQUssQ0FBQ08sVUFBVSxDQUFDbUIsS0FBSyxDQUFDaEIsS0FBSztjQUNsQ3FELFdBQVcsRUFBRS9ELEtBQUssQ0FBQ08sVUFBVSxDQUFDbUIsS0FBSyxDQUFDcUM7WUFBVyxHQUUvQ3BFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFtQixHQUNqQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRTZIO1lBQVEsR0FDbERsRyxXQUFXLENBQUN2QixPQUFPLENBQUNxSCxNQUFNLENBQ25CLEVBQ1Q1TSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBUSxRQUFRO2NBQUNwSixPQUFPLEVBQUVxTCxXQUFXO2NBQUV6TSxPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUtEO1lBQVEsR0FDNURnRCxXQUFXLENBQUN2QixPQUFPLENBQUNpSixRQUFRLENBQ25CLENBQ04sQ0FHSyxFQUNYNEIsZUFBZSxJQUNmcFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBQLFdBQUEsQ0FBQU0sdUJBQXVCO2NBQ3ZCOUssSUFBSSxFQUFFeUssZUFBZTtjQUNyQk0sUUFBUTtjQUNSQyxTQUFTLEVBQUU5SixLQUFLLENBQUMrSixLQUFLLENBQUNDLFlBQVk7Y0FDbkM5UCxLQUFLLEVBQUVnRyxhQUFhLENBQUMrSixVQUFVLENBQUMvUCxLQUFLO2NBQ3JDZ1EsU0FBUyxFQUFFelEsUUFBUSxDQUFDeVEsU0FBUztjQUM3QjNNLFdBQVcsRUFBRTJDLGFBQWEsQ0FBQytKLFVBQVUsQ0FBQzFNLFdBQVc7Y0FDakQ0RCxPQUFPLEVBQUV3SSxXQUFXO2NBQ3BCcEMsVUFBVSxFQUFFbUM7WUFBZSxFQUU1QixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNURBLElBQUF2USxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUdBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBNEMsVUFBQSxHQUFBNUMsT0FBQTtVQUVNLFNBQVUrUSxhQUFhQSxDQUFDO1lBQUU1TyxJQUFJO1lBQUU0SztVQUFRLENBQUU7WUFDL0MsTUFBTTtjQUNMMU0sUUFBUTtjQUNSRCxLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQzZQLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUN1RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUMyRyxTQUFTLENBQUNHLFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUdrSixPQUFPLENBQUMsR0FBR3RRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDMkcsU0FBUyxDQUFDN0UsSUFBSSxDQUFDLENBQUM7WUFDNUQsTUFBTW9PLFdBQVcsR0FBR0EsQ0FBQSxLQUFNSCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFFOUQsSUFBQS9PLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMyRyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDSSxXQUFXLENBQUMvRyxRQUFRLENBQUMyRyxTQUFTLENBQUNHLFFBQVEsQ0FBQztjQUN4Q2tKLE9BQU8sQ0FBQ2hRLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLE1BQU0wQixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUN4RCxRQUFRLENBQUNTLEtBQUssSUFBSSxDQUFDVCxRQUFRLENBQUMyRyxTQUFTLEVBQUVPO1lBQU8sQ0FBRTtZQUU5RSxPQUNDeEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQU0sU0FBUztjQUNUMU4sU0FBUyxFQUFDLGlCQUFpQjtjQUMzQjJOLElBQUksRUFBRWpPLEtBQUssQ0FBQ08sVUFBVSxDQUFDbUIsS0FBSyxDQUFDaEIsS0FBSztjQUNsQ3FELFdBQVcsRUFBRS9ELEtBQUssQ0FBQ08sVUFBVSxDQUFDbUIsS0FBSyxDQUFDcUM7WUFBVyxHQUUvQ3BFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFtQixHQUNqQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRTZIO1lBQVEsR0FDbERsRyxXQUFXLENBQUN2QixPQUFPLENBQUNxSCxNQUFNLENBQ25CLEVBQ1Q1TSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBUSxRQUFRO2NBQUNwSixPQUFPLEVBQUVxTCxXQUFXO2NBQUV6TSxPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUtEO1lBQVEsR0FDNURnRCxXQUFXLENBQUN2QixPQUFPLENBQUNpSixRQUFRLENBQ25CLENBQ04sQ0FFSyxFQUNYNEIsZUFBZSxJQUFJcFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29DLFVBQUEsQ0FBQW9PLHlCQUF5QjtjQUFDL1AsSUFBSSxFQUFFa0IsSUFBSTtjQUFFNEYsT0FBTyxFQUFFd0k7WUFBVyxFQUFJLENBQ2pGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUF4USxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrUSxXQUFBLEdBQUFsUSxPQUFBO1VBQ0EsSUFBQWlSLEtBQUEsR0FBQWpSLE9BQUE7VUFDQSxJQUFBa1IsUUFBQSxHQUFBbFIsT0FBQTtVQUNBLElBQUFtUixLQUFBLEdBQUFuUixPQUFBO1VBQ0EsSUFBQW9SLE9BQUEsR0FBQXBSLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQStOLGFBQUEsR0FBQS9OLE9BQUE7VUFFTSxTQUFVcVIsYUFBYUEsQ0FBQztZQUFFM0wsSUFBSTtZQUFFcUM7VUFBTyxDQUFFO1lBQzlDLE1BQU07Y0FBRTNILEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNd0csYUFBYSxHQUFHMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUMwUCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHeFIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsU0FBUyxDQUFDO1lBQzdELE1BQU0yTyxXQUFXLEdBQUdBLENBQUEsS0FBTXJKLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsTUFBTTtjQUFFdUs7WUFBUyxDQUFFLEdBQUcsSUFBQXpELGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFFMUMsSUFBQTlNLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ3hGLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQztZQUU1QixJQUFJLENBQUN0QixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1nTCxTQUFTLEdBQUdBLENBQUEsS0FBSyxDQUFFLENBQUM7WUFDMUIsTUFBTWUsSUFBSSxHQUFHLEVBQUU7WUFDZixNQUFNNU8sUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEJ5TyxhQUFhLENBQUN6TyxLQUFLLENBQUNFLGFBQWEsQ0FBQytDLE9BQU8sQ0FBQzVELElBQUksQ0FBQztZQUNoRCxDQUFDO1lBRURzUCxJQUFJLENBQUNDLElBQUksQ0FDUjNSLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5USxLQUFBLENBQUFVLEdBQUc7Y0FBQ2pHLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ3ZKLElBQUksRUFBQztZQUFTLEdBQzFDMkUsYUFBYSxDQUFDdUksS0FBSyxDQUFDOUgsT0FBTyxDQUN2QixDQUNOO1lBRUQsSUFBSWxILFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ08sT0FBTyxFQUFFO2NBQy9Cc0ksTUFBTSxDQUFDQyxJQUFJLENBQUNoSixhQUFhLENBQUN1SSxLQUFLLENBQUMsQ0FBQ3VDLE9BQU8sQ0FBQzNRLElBQUksSUFBRztnQkFDL0MsSUFBSUEsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDeEJ3USxJQUFJLENBQUNDLElBQUksQ0FDUjNSLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5USxLQUFBLENBQUFVLEdBQUc7a0JBQUN4UCxJQUFJLEVBQUVsQixJQUFJO2tCQUFFeUssR0FBRyxFQUFFeks7Z0JBQUksR0FDeEI2RixhQUFhLENBQUN1SSxLQUFLLENBQUNwTyxJQUFJLENBQUMsQ0FDckIsQ0FDTjtjQUNGLENBQUMsQ0FBQzs7WUFFSCxPQUNDbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQW1ILEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRXBGLElBQUk7Y0FBQ2hGLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ3FILE9BQU8sRUFBRUE7WUFBTyxHQUN2RmhJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE9BQUEsQ0FBQXVRLG9CQUFvQixPQUFHLEVBQ3hCOVIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lRLEtBQUEsQ0FBQWEsYUFBYTtjQUFDQyxNQUFNLEVBQUUsQ0FBQztjQUFFclIsU0FBUyxFQUFDLHVCQUF1QjtjQUFDbUMsUUFBUSxFQUFFQTtZQUFRLEdBQzdFOUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lRLEtBQUEsQ0FBQWUsSUFBSTtjQUFDdFIsU0FBUyxFQUFDO1lBQVksR0FBRStRLElBQUksQ0FBUSxFQUUxQzFSLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5USxLQUFBLENBQUFnQixLQUFLLFFBQ0xsUyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFEsUUFBQSxDQUFBeEUsVUFBVTtjQUFDM0UsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDaENoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsS0FBQSxDQUFBZSxZQUFZO2NBQUMvUCxJQUFJLEVBQUM7WUFBVyxFQUFHLEVBQ2pDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJRLEtBQUEsQ0FBQWUsWUFBWTtjQUFDL1AsSUFBSSxFQUFDO1lBQVUsRUFBRyxFQUNoQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUM0USxPQUFBLENBQUEzQyxrQkFBa0IsT0FBRyxDQUNmLENBQ08sRUFFaEIxTyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFAsV0FBQSxDQUFBaUMsZUFBZTtjQUNmek0sSUFBSSxFQUFFdUIsU0FBUztjQUNmd0osUUFBUTtjQUNSM1AsS0FBSyxFQUFFZ0csYUFBYSxDQUFDK0osVUFBVSxDQUFDL1AsS0FBSztjQUNyQ3FELFdBQVcsRUFBRTJDLGFBQWEsQ0FBQytKLFVBQVUsQ0FBQzFNLFdBQVc7Y0FDakQ0RCxPQUFPLEVBQUV3SSxXQUFXO2NBQ3BCRyxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJ2QyxVQUFVLEVBQUVxRCxTQUFTLENBQUNGLFVBQVU7WUFBQyxFQUNoQyxDQUNLLENBQ047VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUEsSUFBQXZSLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVU2UixvQkFBb0JBLENBQUMsRUFBRTtZQUN0QyxNQUFNO2NBQUV6UjtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXRDLE1BQU13RyxhQUFhLEdBQUcxRyxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVM7WUFFbkQsT0FDQ2pILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS3NHLGFBQWEsQ0FBQ2hHLEtBQUssQ0FBTSxDQUN0QjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBLElBQUE2QyxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTJQLEtBQUEsR0FBQTNQLE9BQUE7VUFFTSxTQUFVd0QsYUFBYUEsQ0FBQyxFQUFFO1lBQy9CLE1BQU07Y0FBRXBEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdEMsTUFBTSxDQUFDMkcsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNd1EsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJsTCxZQUFZLENBQUMsSUFBSSxDQUFDO2NBQ2xCbUwsVUFBVSxDQUFDQyxRQUFRLENBQUNwUCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM4SCxLQUFLLENBQUN1SCxRQUFRLEdBQUcsUUFBUTtZQUNwRSxDQUFDO1lBRUQsTUFBTXhLLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCYixZQUFZLENBQUMsS0FBSyxDQUFDO2NBQ25CbUwsVUFBVSxDQUFDQyxRQUFRLENBQUNwUCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM4SCxLQUFLLENBQUN1SCxRQUFRLEdBQUcsTUFBTTtZQUNsRSxDQUFDO1lBQ0QsT0FDQ3hTLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGtCQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGEsT0FBUUosS0FBSyxDQUFDMkcsYUFBYSxDQUFDQyxTQUFTLENBQUNsRyxLQUFLLENBQU0sRUFDakRmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDM0MsSUFBSSxFQUFDLEtBQUs7Y0FBQzRDLE9BQU8sRUFBRWtOLFFBQVE7Y0FBRXRPLE9BQU8sRUFBQztZQUFNLEdBQ2xEMUQsS0FBSyxDQUFDMkcsYUFBYSxDQUFDakYsS0FBSyxDQUFDd0QsT0FBTyxDQUFDakMsR0FBRyxDQUM5QixDQUNKLENBQ0UsRUFDVHRELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtUCxLQUFBLENBQUE2QyxZQUFZO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzNCLEVBQ1RuTCxTQUFTLElBQUlsSCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFtUixhQUFhO2NBQUMzTCxJQUFJLEVBQUV1QixTQUFTO2NBQUVjLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ2hFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUE1RyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxTQUFTeVMsWUFBWUEsQ0FBQ3BFLElBQUksRUFBRTFGLFNBQVM7WUFDcEMsT0FBTzBGLElBQUksQ0FBQ3pFLE1BQU0sR0FBR2pCLFNBQVMsR0FBRzBGLElBQUksQ0FBQ3FFLFNBQVMsQ0FBQyxDQUFDLEVBQUUvSixTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcwRixJQUFJO1VBQzdFO1VBRU0sU0FBVW1FLFlBQVlBLENBQUM7WUFBRUo7VUFBUSxDQUFFO1lBQ3hDLE1BQU07Y0FBRXhMLEtBQUs7Y0FBRXhHLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV2RCxNQUFNO2NBQUV1RztZQUFXLENBQUUsR0FBR0QsS0FBSztZQUM3QixNQUFNLENBQUN0QyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHeEUsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLE1BQU0rQyxVQUFVLEdBQUdBLENBQUEsS0FBTUosT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQztZQUV2QyxNQUFNUSxTQUFTLEdBQUdoQyxLQUFLLElBQUc7Y0FDekJBLEtBQUssQ0FBQytCLGVBQWUsRUFBRTtjQUN2QnhFLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ3NDLEtBQUssRUFBRTtjQUMxQmpKLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtjQUNmbkQsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE1BQU1PLE9BQU8sR0FBR3BDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCRixVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUQsTUFBTTtjQUFFN0QsS0FBSztjQUFFcUQ7WUFBVyxDQUFFLEdBQUcvRCxLQUFLLENBQUMyRyxhQUFhLENBQUNDLFNBQVMsQ0FBQzJMLFdBQVc7WUFDeEUsT0FDQzVTLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0VKLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ08sT0FBTyxHQUMxQnhILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDLGdDQUFnQztjQUFDd0UsT0FBTyxFQUFFa047WUFBUSxHQUMvREssWUFBWSxDQUFDcFMsUUFBUSxDQUFDMkcsU0FBUyxDQUFDTyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQzdDeEgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBeVIsVUFBVTtjQUFDbFMsU0FBUyxFQUFDLFFBQVE7Y0FBQzRCLElBQUksRUFBQyxRQUFRO2NBQUM0QyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUM1RCxDQUNELEdBRU5uRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDbEYsS0FBSyxDQUFRLENBQzdDLENBRVAsRUFDQXdDLElBQUksSUFDSnZFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQUNPLElBQUk7Y0FBQ1osU0FBUyxFQUFFQSxTQUFTO2NBQUVhLFFBQVEsRUFBRWhCO1lBQVUsR0FDNUQ1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUMsZUFBZTtjQUFDd0UsT0FBTyxFQUFFUDtZQUFVLEVBQUksRUFDdEQ1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS00sS0FBSyxDQUFNLEVBQ2hCZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxZQUFJMkQsV0FBVyxDQUFLLENBQ2YsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUFSLFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVU2UyxrQkFBa0JBLENBQUM7WUFDbEMxUSxJQUFJO1lBQ0p3RCxRQUFRO1lBQ1JvQztVQUFPLENBTVA7WUFDQSxNQUFNO2NBQUUrSyxNQUFNO2NBQUV6UyxRQUFRO2NBQUVELEtBQUs7Y0FBRXdHO1lBQUssQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQy9ELE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBQzdCLE1BQU0sQ0FBQ21NLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2pULE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUM0RixPQUFPLEVBQUV5TCxVQUFVLENBQUMsR0FBR2xULE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDa1IsTUFBTSxDQUFDOUwsU0FBUyxHQUFHN0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVFLE1BQU0sQ0FBQ2dGLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTWlCLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCbVEsVUFBVSxDQUFDblEsS0FBSyxDQUFDNEUsTUFBTSxDQUFDbkUsS0FBSyxDQUFDO1lBQy9CLENBQUM7WUFFRCxNQUFNMlAsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSUosTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CSCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUVEck4sUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU1iLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVcsQ0FBRSxDQUFDO1lBQ2hDLE1BQU1zTyxhQUFhLEdBQUdBLENBQUEsS0FBTUosa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1yTCxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCUCxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCL0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDUyxHQUFHLENBQUM7Z0JBQUUsQ0FBQ3RGLElBQUksR0FBR3FGO2NBQU8sQ0FBRSxDQUFDO2NBQzNDLE1BQU1uSCxRQUFRLENBQUN5SCxJQUFJLENBQUM7Z0JBQUUsQ0FBQzNGLElBQUksR0FBR3FGO2NBQU8sQ0FBRSxDQUFDO2NBQ3hDSixXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCVyxPQUFPLEVBQUU7WUFDVixDQUFDO1lBRUQsTUFBTStCLGFBQWEsR0FBRyx3QkFDckJ0QyxPQUFPLENBQUNvQyxNQUFNLEdBQUcsSUFBSSxHQUFJcEMsT0FBTyxDQUFDb0MsTUFBTSxHQUFHLElBQUksR0FBRyxhQUFhLEdBQUcsZUFBZSxHQUFJLEVBQ3JGLEVBQUU7WUFFRixPQUNDN0osTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBOEgsSUFBSTtjQUFDdEgsU0FBUyxFQUFDLDhCQUE4QjtjQUFDdUgsUUFBUSxFQUFFTjtZQUFNLEdBQzlENUgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFtVCxRQUFRO2NBQ1J4USxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJWLElBQUksRUFBRUEsSUFBSTtjQUNWb0IsS0FBSyxFQUFFaUUsT0FBTztjQUNkVyxXQUFXLEVBQUUvSCxLQUFLLENBQUN1TSxNQUFNLENBQUN4SyxJQUFJLENBQUMsQ0FBQ21SO1lBQVEsRUFDdkMsQ0FDRyxFQUNOdlQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFFb0o7WUFBYSxHQUMzQjFKLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDOEIsVUFBVSxFLEtBQUcsSUFBSSxHQUFHdEIsT0FBTyxDQUFDb0MsTUFBTSxDQUM1RCxDQUNBLEVBQ1A3SixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBNkIsR0FDOUNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNDLE9BQU8sRUFBRWdPLGFBQWE7Y0FBRXBQLE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7WUFBQSxHQUN4RDJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ0csTUFBTSxDQUNuQixFQUNUMUYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUV5QyxNQUFNO2NBQUU5RCxRQUFRLEVBQUUsQ0FBQzJELE9BQU8sSUFBSUw7WUFBUSxHQUN2RU4sV0FBVyxDQUFDdkIsT0FBTyxDQUFDd0MsSUFBSSxDQUNqQixDQUNELEVBQ1JpTCxlQUFlLElBQ2ZoVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBeUIsWUFBWTtjQUFDTCxTQUFTLEVBQUVBLFNBQVM7Y0FBRWEsUUFBUSxFQUFFeU47WUFBYSxHQUMxRHJULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQU1xRyxXQUFXLENBQUN2QixPQUFPLENBQUNHLE1BQU0sQ0FBTyxDQUV4QyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUVBLElBQUExRixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0osU0FBQSxHQUFBaEosT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBdVQsTUFBQSxHQUFBdlQsT0FBQTtVQUNBLElBQUF3VCxtQkFBQSxHQUFBeFQsT0FBQTtVQUdBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFpSixjQUFBLEdBQUFqSixPQUFBO1VBRU0sU0FBVWtTLFlBQVlBLENBQUM7WUFBRS9QO1VBQUksQ0FBRTtZQUNwQyxNQUFNO2NBQUV5RSxLQUFLO2NBQUV2RyxRQUFRO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdkQsTUFBTTtjQUFFdUc7WUFBVyxDQUFFLEdBQUdELEtBQUs7WUFDN0IsTUFBTSxDQUFDK0YsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzdNLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUM2UixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHM1QsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUMyRyxTQUFTLENBQUM3RSxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNd1IsY0FBYyxHQUFHQSxDQUFBLEtBQU0vRyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU1nSCxZQUFZLEdBQUdBLENBQUEsS0FBTWhILFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7WUFDN0MsTUFBTSxDQUFDeEYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFBUixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQzBNLFdBQVcsQ0FBQ3JULFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQzdFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztZQUVGLElBQUl3SyxNQUFNLEVBQUUsT0FBTzVNLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNnVCxtQkFBQSxDQUFBWCxrQkFBa0I7Y0FBQzFRLElBQUksRUFBRUEsSUFBSTtjQUFFNEYsT0FBTyxFQUFFNkwsWUFBWTtjQUFFak8sUUFBUSxFQUFFaU87WUFBWSxFQUFJO1lBQ3BHLElBQUksQ0FBQ0gsUUFBUSxFQUFFLE9BQU8xVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK1MsTUFBQSxDQUFBeEMsYUFBYTtjQUFDNU8sSUFBSSxFQUFFQSxJQUFJO2NBQUU0SyxRQUFRLEVBQUU2RztZQUFZLEVBQUk7WUFFM0UsTUFBTXhLLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCaEMsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQi9HLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUc7Y0FBRSxDQUFFLENBQUM7Y0FDdEM5QixRQUFRLENBQUN5SCxJQUFJLENBQUM7Z0JBQUUsQ0FBQzNGLElBQUksR0FBRztjQUFFLENBQUUsQ0FBQztjQUM3QmlGLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUNELE9BQ0NySCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBbUIsR0FDckNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN3SSxTQUFBLENBQUFPLFFBQVE7Y0FBQy9CLE9BQU8sRUFBRWlNO1lBQVEsRUFBSSxDQUN0QixFQUNWMVQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStDLEdBQ2hFWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDM0MsSUFBSSxFQUFDLE1BQU07Y0FBQzRDLE9BQU8sRUFBRXlPLGNBQWM7Y0FBRTlQLFFBQVEsRUFBRXNELFFBQVE7Y0FBRXJELE9BQU8sRUFBQyxTQUFTO2NBQUNJLFFBQVE7WUFBQSxHQUN6RjJDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2tFLElBQUksQ0FDakIsRUFDVHpKLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5SSxjQUFBLENBQUFyRixhQUFhO2NBQUNJLFFBQVEsRUFBRW9GLFFBQVE7Y0FBRTlHLElBQUksRUFBQyxRQUFRO2NBQUN1QixRQUFRLEVBQUVzRCxRQUFRO2NBQUVyRCxPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO1lBQUEsR0FDN0YyQyxXQUFXLENBQUN2QixPQUFPLENBQUNtRSxNQUFNLENBQ1osQ0FDUixDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUExSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVa08sa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRTdOO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDekMsTUFBTSxDQUFDNkcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNcU0sYUFBYSxHQUFHLE1BQUFBLENBQU9KLEtBQUssR0FBR04sU0FBUyxLQUFJO2NBQ2pELElBQUk7Z0JBQ0huRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNL0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDaUgsYUFBYSxDQUFDSixLQUFLLENBQUM7ZUFDN0MsQ0FBQyxPQUFPZ0csQ0FBQyxFQUFFO2dCQUNYak0sT0FBTyxDQUFDa00sR0FBRyxDQUFDRCxDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUek0sV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU15SCxXQUFXLEdBQUcsTUFBQUEsQ0FBT2hCLEtBQUssR0FBR04sU0FBUyxLQUFJO2NBQy9DLElBQUk7Z0JBQ0huRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNL0csUUFBUSxDQUFDMkcsU0FBUyxDQUFDNkgsV0FBVyxDQUFDaEIsS0FBSyxDQUFDO2VBQzNDLENBQUMsT0FBT2dHLENBQUMsRUFBRTtnQkFDWGpNLE9BQU8sQ0FBQ2tNLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDO2VBQ2QsU0FBUztnQkFDVHpNLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNa0osZUFBZSxHQUFHLE1BQUFBLENBQU87Y0FBRXlELEtBQUs7Y0FBRWpEO1lBQVMsQ0FBRSxLQUFJO2NBQ3RELElBQUk7Z0JBQ0gsTUFBTWtELElBQUksR0FBRyxNQUFNM1QsUUFBUSxDQUFDMkcsU0FBUyxDQUFDdUgsUUFBUSxDQUFDLFNBQVMsRUFBRXdGLEtBQUssRUFBRWpELFNBQVMsQ0FBQztlQUMzRSxDQUFDLE9BQU8rQyxDQUFDLEVBQUU7Z0JBQ1hqTSxPQUFPLENBQUNrTSxHQUFHLENBQUNELENBQUMsQ0FBQzs7WUFFaEIsQ0FBQztZQUVELE1BQU1JLGdCQUFnQixHQUFHLE1BQUFBLENBQU9oVCxJQUFJLEVBQUU4UyxLQUFLLEtBQUk7Y0FDOUMzTSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU0vRyxRQUFRLENBQUMyRyxTQUFTLENBQUN1SCxRQUFRLENBQUN0TixJQUFJLEVBQUU4UyxLQUFLLENBQUM7Y0FFOUNHLFVBQVUsQ0FBQyxNQUFLO2dCQUNmOU0sV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQztZQUNELE9BQU87Y0FDTjZHLGFBQWE7Y0FDYnFDLGVBQWU7Y0FDZjJELGdCQUFnQjtjQUNoQjlNLFFBQVE7Y0FDUkMsV0FBVztjQUNYeUgsV0FBVztjQUNYMkMsU0FBUyxFQUFFO2dCQUNWOUMsTUFBTSxFQUFFVCxhQUFhO2dCQUNyQjFHLE9BQU8sRUFBRStJLGVBQWU7Z0JBQ3hCbUQsUUFBUSxFQUFFUSxnQkFBZ0I7Z0JBQzFCRSxRQUFRLEVBQUVGLGdCQUFnQjtnQkFDMUJHLFNBQVMsRUFBRUg7O2FBRVo7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQWxVLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFaEQsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FJOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFNLEVBQ25EZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFFBQVEsQ0FBUSxDQUNyRCxDQUNELEVBQ05oQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsVUFBVTtjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3ZDLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQUMsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFTSxTQUFVcVUsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVqVSxLQUFLO2NBQUVDLFFBQVE7Y0FBRWlVO1lBQVksQ0FBRSxHQUFHLElBQUFyVSxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU0sQ0FBQ29CLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1XLFVBQVUsR0FBR2YsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNbUIsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUcsYUFBYSxFQUFFO2dCQUFFYixJQUFJO2dCQUFFb0I7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RGxELFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1nUixNQUFNLEdBQUdBLENBQUEsS0FBTWxVLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUNwQyxNQUFNL0YsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUVsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBRVZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixFQUNOSyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2UsZUFBQSxDQUFBcEIsY0FBYyxPQUFHLENBQ2IsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUF1RCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVXdVLGtCQUFrQkEsQ0FBQztZQUFFOU8sSUFBSTtZQUFFcUM7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQ1osUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNO2NBQ0x2QixRQUFRO2NBQ1JELEtBQUssRUFBRTtnQkFBRU8sVUFBVSxFQUFFUDtjQUFLLENBQUU7Y0FDNUJ3RyxLQUFLLEVBQUU7Z0JBQ05DLFdBQVcsRUFBRTtrQkFBRXZCO2dCQUFPO2NBQUU7WUFDeEIsQ0FDRCxHQUFHLElBQUFyRixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLElBQUksQ0FBQ29GLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTVosU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNIc0MsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTS9HLFFBQVEsQ0FBQ29VLFlBQVksRUFBRTtnQkFDN0IxTSxPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU84TCxDQUFDLEVBQUU7Z0JBQ1hqTSxPQUFPLENBQUM4TSxLQUFLLENBQUNiLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUek0sV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0NySCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBeUIsWUFBWTtjQUNaTyxJQUFJO2NBQ0pxQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJqRCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJNLFVBQVUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFQyxPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUN0Q0MsU0FBUyxFQUFFO2dCQUFFSCxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0c7Y0FBTSxDQUFFO2NBQ3BDRSxRQUFRLEVBQUVvQztZQUFPLEdBRWpCaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDdVMsV0FBVyxDQUFDN1IsS0FBSyxDQUFNLEVBQ2xDZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSixLQUFLLENBQUN1UyxXQUFXLENBQUN4TyxXQUFXLENBQUssQ0FDeEIsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQSxJQUFBcEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUVoRCxPQUNDUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0MsR0FDaERYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUk5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQU0sRUFDbkRmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0UsUUFBUSxDQUFRLENBQ3JELENBQ0QsRUFDTmhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxVQUFVO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdkMsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBQyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXVCLGVBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVjLFNBQVUyVSxnQkFBZ0JBLENBQUE7WUFDdkMsTUFBTTtjQUFFdlUsS0FBSztjQUFFQyxRQUFRO2NBQUVpVTtZQUFZLENBQUUsR0FBRyxJQUFBclUsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUM5RCxNQUFNLENBQUNvQixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTixLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNVyxVQUFVLEdBQUdmLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTW1CLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVHLGFBQWEsRUFBRTtnQkFBRWIsSUFBSTtnQkFBRW9CO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RsRCxRQUFRLENBQUNvSCxHQUFHLENBQUM7Z0JBQUUsQ0FBQ3RGLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNZ1IsTUFBTSxHQUFHQSxDQUFBLEtBQU1sVSxRQUFRLENBQUN5SCxJQUFJLEVBQUU7WUFDcEMsTUFBTS9GLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU1MLElBQUksR0FBR3JCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FDdkRILE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUVELElBQUFOLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMsRUFBRTBCLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFBWCxNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDM0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQUVFLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFFdEQsT0FDQ1YsS0FBQSxDQUFBYixhQUFBLENBQUFhLEtBQUEsQ0FBQVosUUFBQSxRQUNDWSxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBVyxjQUFjLE9BQUcsRUFFbEJaLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDZ0IsTUFBQSxDQUFBVSxhQUFhO2NBQUNqQixJQUFJLEVBQUMsVUFBVTtjQUFDa0IsSUFBSSxFQUFDO1lBQWEsRUFBRyxFQUNwRGQsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUztjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxNQUFNLEVBQUU7WUFBSyxFQUFJLENBQ3RDLENBQ0QsQ0FDRyxFQUVWRyxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTJCLEdBQzdDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CVyxLQUFBLENBQUFiLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3RCLEtBQUssQ0FBTSxFQUNoRE8sS0FBQSxDQUFBYixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCTixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDckIsUUFBUSxFQUN6Q00sS0FBQSxDQUFBYixhQUFBLENBQUNXLE1BQUEsQ0FBQWtCLE9BQU87Y0FBQzNCLFNBQVMsRUFBQyxjQUFjO2NBQUM0QixJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3hDLENBQ0YsQ0FDRSxFQUNUakIsS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQWMsU0FBUyxPQUFHLENBQ1IsRUFDTkssS0FBQSxDQUFBYixhQUFBLENBQUNlLGVBQUEsQ0FBQXBCLGNBQWMsT0FBRyxDQUNiLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBRCxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNFUsUUFBQSxHQUFBNVUsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsTUFBTTZVLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFNVUsS0FBQSxDQUFBNlUsS0FBSztZQUNaekIsUUFBUSxFQUFFcFQsS0FBQSxDQUFBbVQsUUFBUTtZQUNsQjJCLEtBQUssRUFBRTlVLEtBQUEsQ0FBQStVLEtBQUs7WUFDWkMsUUFBUSxFQUFFaFYsS0FBQSxDQUFBaVYsUUFBUTtZQUNsQkMsTUFBTSxFQUFFbFYsS0FBQSxDQUFBbVYsTUFBTTtZQUNkQyxLQUFLLEVBQUVWLFFBQUEsQ0FBQVc7V0FDUDtVQUVLLFNBQVVyVCxhQUFhQSxDQUFDc1QsS0FBSztZQUNsQyxNQUFNO2NBQUVwVixLQUFLO2NBQUVDLFFBQVE7Y0FBRWlVO1lBQVksQ0FBRSxHQUFHLElBQUFyVSxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU07Y0FBRTZCLElBQUk7Y0FBRWxCLElBQUk7Y0FBRXdVLEtBQUs7Y0FBRXZVLE1BQU07Y0FBRXFDO1lBQUssQ0FBRSxHQUFHaVMsS0FBSztZQUVsRCxNQUFNLENBQUNFLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc1VixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFaEQsTUFBTTtjQUFFeUQsS0FBSztjQUFFOEMsV0FBVztjQUFFckg7WUFBSyxDQUFFLEdBQUdWLEtBQUssQ0FBQ08sVUFBVSxDQUFDd0IsSUFBSSxDQUFDO1lBQzVELE1BQU0sQ0FBQ3lULGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBRzlWLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDdkIsUUFBUSxDQUFDOEIsSUFBSSxDQUFDLENBQUM7WUFFeEUsSUFBQWYsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFLE1BQUs7Y0FDMUJ3VixnQkFBZ0IsQ0FBQ3hWLFFBQVEsQ0FBQzhCLElBQUksQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQztZQUNGLE1BQU1vUyxNQUFNLEdBQUdBLENBQUEsS0FBTWxVLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUNwQyxNQUFNakYsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIrUyxnQkFBZ0IsQ0FBQy9TLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTyxLQUFLLENBQUM7Y0FDM0MsTUFBTTtnQkFBRXBCLElBQUk7Z0JBQUVvQjtjQUFLLENBQUUsR0FBR1QsS0FBSyxDQUFDRSxhQUFhO2NBQzNDM0MsUUFBUSxDQUFDb0gsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBRUQsSUFBSSxDQUFDbkQsS0FBSyxDQUFDTyxVQUFVLENBQUN3QixJQUFJLENBQUMsRUFBRTtjQUM1QnlGLE9BQU8sQ0FBQ2tPLElBQUksQ0FBQyxnREFBZ0QzVCxJQUFJLEVBQUUsQ0FBQztjQUNwRSxPQUFPLElBQUk7O1lBR1osTUFBTTZELEtBQUssR0FBRztjQUFFWCxLQUFLO2NBQUU4QyxXQUFXO2NBQUU1RSxLQUFLLEVBQUVxUztZQUFhLENBQUU7WUFFMUQ7WUFFQSxNQUFNRyxLQUFLLEdBQUdsQixVQUFVLENBQUM1VCxJQUFJLENBQUM7WUFDOUIsT0FDQ2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0VVLE1BQU0sR0FBR25CLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtNLEtBQUssQ0FBTSxHQUFHLElBQUksRUFDakNmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1VixLQUFLO2NBQ0xySyxHQUFHLEVBQUUsR0FBR3ZKLElBQUksaUJBQWlCO2NBQzdCMkIsT0FBTyxFQUFDLFVBQVU7Y0FDbEJ1QixLQUFLLEVBQUVBLEtBQUs7Y0FDWmxELElBQUksRUFBRUEsSUFBSTtjQUFBLEdBQ042RCxLQUFLO2NBQ1RuRCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEIwUixNQUFNLEVBQUVBO1lBQU0sRUFDYixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBLElBQUF4VSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQyxHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBSTlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBTSxFQUNuRGYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDRSxRQUFRLENBQVEsQ0FDckQsQ0FDRCxFQUNOaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFjLFNBQVM7Y0FBQ0MsSUFBSSxFQUFDLFVBQVU7Y0FBQ0MsTUFBTSxFQUFFO1lBQUssRUFBSSxDQUN2QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFDLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNCLE9BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBRWMsU0FBVWdXLHdCQUF3QkEsQ0FBQTtZQUMvQyxNQUFNO2NBQUU1VixLQUFLO2NBQUVDLFFBQVE7Y0FBRWlVO1lBQVksQ0FBRSxHQUFHLElBQUFyVSxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQzlELE1BQU0sQ0FBQ29CLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1XLFVBQVUsR0FBR2YsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNbUIsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUcsYUFBYSxFQUFFO2dCQUFFYixJQUFJO2dCQUFFb0I7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RGxELFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1nUixNQUFNLEdBQUdBLENBQUEsS0FBTWxVLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUNwQyxNQUFNL0YsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUVsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRCxDQUNHLEVBRVZHLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0JXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixFQUNOSyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2UsZUFBQSxDQUFBcEIsY0FBYyxPQUFHLENBQ2IsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQU1PLE1BQU1pVyxxQkFBcUIsR0FBQXZHLE9BQUEsQ0FBQXVHLHFCQUFBLEdBQUdsVyxNQUFBLENBQUFRLE9BQUssQ0FBQzJWLGFBQWEsQ0FBQyxFQUE2QixDQUFDO1VBQ2hGLE1BQU1DLHdCQUF3QixHQUFHQSxDQUFBLEtBQU1wVyxNQUFBLENBQUFRLE9BQUssQ0FBQzZWLFVBQVUsQ0FBQ0gscUJBQXFCLENBQUM7VUFBQ3ZHLE9BQUEsQ0FBQXlHLHdCQUFBLEdBQUFBLHdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1B0RixJQUFBeFMsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQWNNLFNBQVVxVyx3QkFBd0JBLENBQUM7WUFBRWxVLElBQUk7WUFBRU0sVUFBVTtZQUFFb0IsUUFBUTtZQUFFeVMsZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDOUcsTUFBTTtjQUNMbFcsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTXlNLFFBQVEsR0FBR0EsQ0FBQSxLQUFNdEssVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUV6QyxPQUNDMUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxFQUM1QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFDSSxRQUFRO2NBQUNnQixPQUFPLEVBQUU2SDtZQUFRLEdBQy9DM00sS0FBSyxDQUFDbVcsY0FBYyxDQUFDalIsT0FBTyxDQUFDa1IsV0FBVyxDQUNqQyxDQUNKLENBQ0UsRUFDVHpXLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDTyxVQUFVLENBQUNtQixLQUFLLENBQUNxQyxXQUFXLENBQVEsQ0FDNUMsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBUixXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThOLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXlXLFNBQUEsR0FBQXpXLE9BQUE7VUFDQSxJQUFBMFcsVUFBQSxHQUFBMVcsT0FBQTtVQUVNLFNBQVUyVyx3QkFBd0JBLENBQUM7WUFBRWhSLFFBQVE7WUFBRWlSO1VBQVUsQ0FBRTtZQUNoRSxNQUFNLENBQUN6UCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FDTGtSLE1BQU07Y0FDTjFTLEtBQUs7Y0FDTHdHLEtBQUs7Y0FDTHZHLFFBQVE7Y0FDUnVHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDaUssTUFBTSxFQUFFc00sU0FBUyxDQUFDLEdBQUc5VyxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTW1KLEdBQUcsR0FBR2hMLE1BQUEsQ0FBQVEsT0FBSyxDQUFDME0sTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNLENBQUMxSCxPQUFPLEVBQUV1UixVQUFVLENBQUMsR0FBRy9XLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNK0YsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QlAsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNO2dCQUFFMlA7Y0FBUyxDQUFFLEdBQUdqRSxNQUFNLENBQUNqUixLQUFLO2NBRWxDLE1BQU1tVixNQUFNLEdBQUcsRUFBRTtjQUVqQkQsU0FBUyxDQUFDbkYsT0FBTyxDQUFDLENBQUNxRixRQUFRLEVBQUV4QixLQUFLLEtBQUk7Z0JBQ3JDLElBQUksQ0FBQ3dCLFFBQVEsRUFBRUEsUUFBUSxJQUFJLENBQUNBLFFBQVEsRUFBRTlRLE9BQU8sQ0FBQ3lELE1BQU0sSUFBSXNOLEtBQUssQ0FBQ0QsUUFBUSxFQUFFRSxhQUFhLENBQUMsRUFBRTtrQkFDdkZILE1BQU0sQ0FBQ3RGLElBQUksQ0FBQytELEtBQUssQ0FBQztrQkFDbEI7O2dCQUVELE1BQU0yQixPQUFPLEdBQUdILFFBQVEsQ0FBQzlRLE9BQU8sQ0FBQ2tSLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUMvVCxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUNsRSxJQUFJNlQsT0FBTyxDQUFDeE4sTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDdkJvTixNQUFNLENBQUN0RixJQUFJLENBQUMrRCxLQUFLLENBQUM7O2NBRXBCLENBQUMsQ0FBQztjQUVGLElBQUl1QixNQUFNLENBQUNwTixNQUFNLEVBQUU7Z0JBQ2xCaU4sU0FBUyxDQUFDRyxNQUFNLENBQUM7Z0JBQ2pCNVAsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEI7O2NBR0QsTUFBTS9HLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtjQUNyQlYsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNsQndQLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRDdXLE1BQUEsQ0FBQVEsT0FBSyxDQUFDNk0sU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDN0MsTUFBTSxDQUFDWCxNQUFNLEVBQUU7Y0FDcEIsTUFBTTJOLFNBQVMsR0FBR3hNLEdBQUcsQ0FBQ3NDLE9BQU87Y0FDN0JrSyxTQUFTLENBQUNDLGdCQUFnQixDQUFDLG1DQUFtQyxDQUFDLENBQUM1RixPQUFPLENBQUMsQ0FBQzBGLElBQUksRUFBRTdCLEtBQUssS0FBSTtnQkFDdkYsSUFBSSxDQUFDbEwsTUFBTSxDQUFDa04sUUFBUSxDQUFDaEMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCNkIsSUFBSSxDQUFDblUsU0FBUyxDQUFDRSxHQUFHLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3JDaVUsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBSztrQkFDckNKLElBQUksQ0FBQ25VLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QyxDQUFDLENBQUM7Z0JBQ0ZpUCxVQUFVLENBQUNzRixRQUFRLENBQUM7a0JBQUVDLEdBQUcsRUFBRSxDQUFDO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQVEsQ0FBRSxDQUFDO2dCQUNuRDtjQUNELENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDdE4sTUFBTSxDQUFDLENBQUM7WUFFWixNQUFNdU4sWUFBWSxHQUFHO2NBQ3BCdk4sTUFBTTtjQUNOc007YUFDQTtZQUNELE1BQU1sUyxVQUFVLEdBQUdBLENBQUEsS0FBTW1TLFVBQVUsQ0FBQyxDQUFDdlIsT0FBTyxDQUFDO1lBQzdDLE1BQU13UyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJLENBQUMxWCxRQUFRLENBQUMyWCxXQUFXLEVBQUU7Z0JBQzFCclMsUUFBUSxFQUFFO2dCQUNWOztjQUVEaEIsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE9BQ0M1RSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVcsU0FBQSxDQUFBUixxQkFBcUIsQ0FBQ2dDLFFBQVE7Y0FBQzFVLEtBQUssRUFBRXVVO1lBQVksR0FDbEQvWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxPQUFBLENBQUE0VyxXQUFXLE9BQUcsRUFFZm5ZLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVN1SyxHQUFHLEVBQUVBLEdBQUc7Y0FBRXJLLFNBQVMsRUFBQztZQUF5QyxHQUVyRVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQXFLLGFBQWE7Y0FBQ3pELEtBQUssRUFBRW5LLE1BQU0sQ0FBQ1gsTUFBTSxHQUFHeEosS0FBSyxDQUFDbUssTUFBTSxDQUFDNk4sY0FBYyxHQUFHO1lBQUUsRUFBSSxFQUMxRXJZLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrVyxVQUFBLENBQUEyQixvQkFBb0I7Y0FBQzlOLE1BQU0sRUFBRUEsTUFBTTtjQUFFc00sU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDOUQ5VyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBbUQsR0FDcEVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO2NBQUNnQixPQUFPLEVBQUU2UztZQUFhLEdBQ3ZEbFIsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRXlDLE1BQU07Y0FBRTlELFFBQVEsRUFBRSxDQUFDLENBQUMwRyxNQUFNLENBQUNYLE1BQU0sSUFBSXpDO1lBQVEsR0FDOUVOLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3dDLElBQUksQ0FDakIsQ0FDRCxDQUNBLENBQ3NCLEVBRWhDdkMsT0FBTyxJQUNQeEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQXlCLFlBQVk7Y0FBQ08sSUFBSTtjQUFDWixTQUFTLEVBQUVhLFFBQVE7Y0FBRUEsUUFBUSxFQUFFaEI7WUFBVSxHQUMzRDVFLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ21XLGNBQWMsQ0FBQzlRLE1BQU0sQ0FBQzNFLEtBQUssQ0FBTSxFQUM1Q2YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsWUFBSUosS0FBSyxDQUFDbVcsY0FBYyxDQUFDOVEsTUFBTSxDQUFDdEIsV0FBVyxDQUFLLENBRWpELENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2R0EsSUFBQXBFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFzWSxZQUFBLEdBQUF0WSxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVdVksY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVuWTtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3RDLElBQUk7Y0FBRWdGO1lBQU8sQ0FBRSxHQUFHbEYsS0FBSyxDQUFDbVcsY0FBYztZQUN0QyxNQUFNO2NBQUVpQztZQUFPLENBQUUsR0FBRyxJQUFBRixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE9BQ0MxWSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMEQsR0FDNUVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFDb0IsT0FBTyxFQUFFc1Q7WUFBTyxHQUNyQ2xULE9BQU8sQ0FBQ2tSLFdBQVcsQ0FDWixDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQXpXLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQXNZLFlBQUEsR0FBQXRZLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVMFksb0JBQW9CQSxDQUFDO1lBQUU3VSxRQUFRO1lBQUU4VSxLQUFLO1lBQUVDO1VBQU0sQ0FBRTtZQUMvRCxNQUFNO2NBQ0x4WSxLQUFLLEVBQUU7Z0JBQUVtVyxjQUFjLEVBQUVuVztjQUFLO1lBQUUsQ0FDaEMsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU07Y0FBRWtZO1lBQU8sQ0FBRSxHQUFHLElBQUFGLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFDM0MsTUFBTXZULE9BQU8sR0FBR3BDLEtBQUssSUFBRztjQUN2QixJQUFJLENBQUM4VixNQUFNLEVBQUU7Z0JBQ1osT0FBT0QsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FFbkJILE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDelksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQXlCLEdBQzNDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkUsS0FBSyxFQUFFVixLQUFLLENBQUNrRixPQUFPLENBQUN1VCxTQUFTO2NBQUUzVCxPQUFPLEVBQUVBLE9BQU87Y0FBRXJCLFFBQVEsRUFBRUE7WUFBUSxHQUMxRXpELEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ3VULFNBQVMsQ0FDaEIsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBOVksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThZLE9BQUEsR0FBQTlZLE9BQUE7VUFDQSxJQUFBd08sS0FBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUErWSxPQUFBLEdBQUEvWSxPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFFTSxTQUFVZ1osa0JBQWtCQSxDQUFDO1lBQUU3UixRQUFRO1lBQUV6QixJQUFJO1lBQUV1VCxPQUFPO1lBQUVwVyxRQUFRO1lBQUVnQjtVQUFRLENBQUU7WUFDakYsTUFBTSxDQUFDcVYsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3BaLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUvQyxJQUFJdUYsUUFBUSxFQUFFO2NBQ2IsT0FDQ3BILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUF5VixPQUFPO2dCQUFDckgsTUFBTTtnQkFBQ2pPLE9BQU8sRUFBQztjQUFTLEVBQUcsQ0FDL0I7O1lBSVIsT0FDQy9ELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzWSxPQUFPLENBQUNiLFFBQVE7Y0FDaEI5VixJQUFJLEVBQUMsa0JBQWtCO2NBQ3ZCekIsU0FBUyxFQUFDLGtDQUFrQztjQUM1QzZDLEtBQUssRUFBRTBWLE9BQU87Y0FDZEksSUFBSSxFQUFFN0ssS0FBQSxDQUFBOEsseUJBQXlCO2NBQy9CelcsUUFBUSxFQUFFQTtZQUFRLEdBRWpCLENBQUM2QyxJQUFJLElBQUl3VCxLQUFLLEtBQUtuWixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1ksT0FBTyxDQUFDOUksSUFBSTtjQUFDdFAsU0FBUyxFQUFDO1lBQWMsRUFBRyxFQUM3RFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VZLE9BQUEsQ0FBQUwsb0JBQW9CO2NBQUNFLE1BQU0sRUFBRWxULElBQUksSUFBSXdULEtBQUs7Y0FBRXJWLFFBQVEsRUFBRUEsUUFBUTtjQUFFOFUsS0FBSyxFQUFFUTtZQUFRLEVBQUksQ0FDbEU7VUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFwWixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF1WixTQUFBLEdBQUF2WixPQUFBO1VBQ0EsSUFBQXNZLFlBQUEsR0FBQXRZLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBeVcsU0FBQSxHQUFBelcsT0FBQTtVQUVNLFNBQVVzWix5QkFBeUJBLENBQUM5RCxLQUFLO1lBQzlDLE1BQU07Y0FBRWdFO1lBQVMsQ0FBRSxHQUFHLElBQUFELFNBQUEsQ0FBQUUsUUFBUSxFQUFDakUsS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFDM0MsTUFBTTtjQUFFaUUsT0FBTztjQUFFblcsS0FBSyxHQUFHO1lBQUUsQ0FBRSxHQUFHaVMsS0FBSyxDQUFDalMsS0FBSztZQUMzQyxNQUFNO2NBQUV1UCxNQUFNO2NBQUU2RyxTQUFTO2NBQUVDO1lBQVUsQ0FBRSxHQUFHLElBQUF0QixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQ2pFLE1BQU07Y0FBRTVCO1lBQVMsQ0FBRSxHQUFHLElBQUFKLFNBQUEsQ0FBQU4sd0JBQXdCLEdBQUU7WUFDaEQsTUFBTTtjQUNML1YsS0FBSyxFQUFFO2dCQUFFbVcsY0FBYyxFQUFFblc7Y0FBSyxDQUFFO2NBQ2hDQztZQUFRLENBQ1IsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU11WixHQUFHLEdBQUcsa0NBQWtDSCxPQUFPLEdBQUcseUJBQXlCLEdBQUcsRUFBRSxFQUFFO1lBQ3hGLE1BQU03VyxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QjBTLEtBQUssQ0FBQ3NFLFFBQVEsQ0FBQztnQkFBRXZXLEtBQUssRUFBRVQsS0FBSyxDQUFDNEUsTUFBTSxDQUFDbkUsS0FBSztnQkFBRW1XLE9BQU8sRUFBRSxDQUFDLENBQUNBO2NBQU8sQ0FBRSxDQUFDO1lBQ2xFLENBQUM7WUFDRCxNQUFNSyxVQUFVLEdBQUdBLENBQUEsS0FBTUgsVUFBVSxDQUFDcEUsS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFDaEQsTUFBTXVFLGFBQWEsR0FBR2xYLEtBQUssSUFBRztjQUM3QixNQUFNbVgsS0FBSyxHQUFHQSxDQUFDM0MsSUFBSSxFQUFFN0IsS0FBSyxLQUFJO2dCQUM3QixPQUFPQSxLQUFLLEtBQUtELEtBQUssQ0FBQ0MsS0FBSyxHQUFHO2tCQUFFLEdBQUc2QixJQUFJO2tCQUFFb0MsT0FBTyxFQUFFLENBQUNBO2dCQUFPLENBQUUsR0FBRztrQkFBRSxHQUFHcEMsSUFBSTtrQkFBRW9DLE9BQU8sRUFBRTtnQkFBSyxDQUFFO2NBQzVGLENBQUM7Y0FDRCxNQUFNMUYsSUFBSSxHQUFHbEIsTUFBTSxDQUFDdEgsR0FBRyxDQUFDeU8sS0FBSyxDQUFDO2NBQzlCTixTQUFTLENBQUMzRixJQUFJLENBQUM7Y0FDZjtjQUNBO2NBQ0E2QyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUVELE9BQ0M5VyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBaUQsR0FDL0RYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFXLEdBQUU4VSxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDLEUsSUFBUSxFQUVuRDFWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQTZVLEtBQUs7Y0FDTDlULElBQUksRUFBQyxNQUFNO2NBQ1hzQyxLQUFLLEVBQUVBLEtBQUs7Y0FDWmlXLFNBQVMsRUFBRUEsU0FBUztjQUNwQjNXLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnNGLFdBQVcsRUFBRS9ILEtBQUssQ0FBQzZZLE9BQU8sQ0FBQzlRO1lBQVcsRUFDckMsRUFDRnBJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFlLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUF5UixVQUFVO2NBQ1Z0USxJQUFJLEVBQUMsY0FBYztjQUNuQjVCLFNBQVMsRUFBRW1aLEdBQUc7Y0FDZC9ZLEtBQUssRUFBRVYsS0FBSyxDQUFDa0YsT0FBTyxDQUFDNFUsV0FBVztjQUNoQ2hWLE9BQU8sRUFBRThVO1lBQWEsRUFDckIsRUFDRmphLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXlSLFVBQVU7Y0FDVnRRLElBQUksRUFBQyxRQUFRO2NBQ2I1QixTQUFTLEVBQUMsMEJBQTBCO2NBQ3BDSSxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ21FLE1BQU07Y0FDM0J2RSxPQUFPLEVBQUU2VTtZQUFVLEVBQ2xCLENBQ08sQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBaGEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFDQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUFzWSxZQUFBLEdBQUF0WSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVW1hLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFOVosUUFBUTtjQUFFRCxLQUFLO2NBQUUwUyxNQUFNO2NBQUVsTTtZQUFLLENBQUUsR0FBRyxJQUFBM0csUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUUvRCxNQUFNO2NBQUV1QjtZQUFLLENBQUUsR0FBRyxJQUFBeVcsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUN6QyxJQUFJO2NBQUVuVDtZQUFPLENBQUUsR0FBR2xGLEtBQUssQ0FBQ21XLGNBQWM7WUFDdEMsTUFBTSxDQUFDdFAsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR25ILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNMk8sV0FBVyxHQUFHQSxDQUFBLEtBQU1ySixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDO1lBQ2xELE1BQU1rSCxVQUFVLEdBQUcsTUFBQUEsQ0FBTztjQUFFNEY7WUFBSyxDQUFFLEtBQUk7Y0FDdEMsSUFBSTtnQkFDSCxNQUFNdkwsUUFBUSxHQUFHLE1BQU1uSSxRQUFRLENBQUN3QixLQUFLLENBQUMwTSxRQUFRLENBQUN3RixLQUFLLEVBQUU7a0JBQUVxRyxPQUFPLEVBQUV0SCxNQUFNLENBQUNqUixLQUFLLENBQUN1WTtnQkFBTyxDQUFFLENBQUM7Z0JBQ3hGLE1BQU1yRCxTQUFTLEdBQUd2TyxRQUFRLENBQUN1TyxTQUFTLENBQUN2TCxHQUFHLENBQUMsQ0FBQztrQkFBRXlMLFFBQVE7a0JBQUU5USxPQUFPO2tCQUFFa1U7Z0JBQWMsQ0FBRSxNQUFNO2tCQUNwRnBELFFBQVE7a0JBQ1I5USxPQUFPO2tCQUNQZ1IsYUFBYSxFQUFFa0Q7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVIeFksS0FBSyxDQUFDdUYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDdkJpTCxVQUFVLENBQUM2QixVQUFVLENBQUMsTUFBSztrQkFDMUJyUyxLQUFLLENBQUN1RixXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUN4Qi9HLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztvQkFBRXNQLFNBQVMsRUFBRSxDQUFDLEdBQUdqRSxNQUFNLENBQUNqUixLQUFLLENBQUNrVixTQUFTLEVBQUUsR0FBR0EsU0FBUztrQkFBQyxDQUFFLENBQUM7Z0JBQzdFLENBQUMsRUFBRSxHQUFHLENBQUM7ZUFDUCxDQUFDLE9BQU9yQyxLQUFLLEVBQUU7Z0JBQ2Y5TSxPQUFPLENBQUNrTSxHQUFHLENBQUNZLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE9BQ0MzVSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBc0QsR0FDeEVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQ3hLLE9BQU8sRUFBQyxNQUFNO2NBQUNvQixPQUFPLEVBQUVxTDtZQUFXLEdBQzNDakwsT0FBTyxDQUFDZ1YsaUJBQWlCLENBQ2hCLEVBQ1h2YSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFAsV0FBQSxDQUFBaUMsZUFBZTtjQUNmek0sSUFBSSxFQUFFdUIsU0FBUztjQUNmc1QsS0FBSyxFQUFFM1QsS0FBSyxDQUFDK0osS0FBSyxDQUFDNEosS0FBSztjQUN4QkMsT0FBTyxFQUFFNVQsS0FBSyxDQUFDK0osS0FBSyxDQUFDNkosT0FBTztjQUM1QjlKLFNBQVMsRUFBRTlKLEtBQUssQ0FBQytKLEtBQUssQ0FBQ0MsWUFBWTtjQUNuQzdJLE9BQU8sRUFBRXdJLFdBQVc7Y0FDcEIxSixXQUFXLEVBQUVELEtBQUssQ0FBQ0MsV0FBVztjQUM5Qi9GLEtBQUssRUFBRVYsS0FBSyxDQUFDbVcsY0FBYyxDQUFDa0UsY0FBYyxDQUFDM1osS0FBSztjQUNoRDRaLFlBQVksRUFBRXRhLEtBQUssQ0FBQ21XLGNBQWMsQ0FBQ2tFLGNBQWMsQ0FBQ3RXLFdBQVc7Y0FDN0RnSyxVQUFVLEVBQUVBO1lBQVUsRUFDckIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBbUssWUFBQSxHQUFBdFksT0FBQTtVQUNNLFNBQVV5WixRQUFRQSxDQUFDaEUsS0FBSztZQUM3QixNQUFNO2NBQUUrQyxPQUFPO2NBQUVtQyxJQUFJO2NBQUVmLFVBQVU7Y0FBRS9MO1lBQUssQ0FBRSxHQUFHLElBQUF5SyxZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBRXBFLE1BQU1tQyxLQUFLLEdBQUduRixLQUFLLElBQUc7Y0FDckJwRCxVQUFVLENBQUM2QixVQUFVLENBQUMsTUFBTXlHLElBQUksQ0FBQ3ROLE9BQU8sQ0FBQ29JLEtBQUssQ0FBQyxFQUFFdlMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDMFgsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLENBQUM7WUFDRCxNQUFNcEIsU0FBUyxHQUFHMVcsS0FBSyxJQUFHO2NBQ3pCLE1BQU1TLEtBQUssR0FBR1QsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQ3NYLElBQUksRUFBRTtjQUU5QyxJQUFJL1gsS0FBSyxDQUFDNEksR0FBRyxLQUFLLEtBQUssRUFBRTtnQkFDeEI7Z0JBQ0EsSUFBSTVJLEtBQUssQ0FBQ2dZLFFBQVEsSUFBSXJGLEtBQUssR0FBRyxDQUFDLEVBQUU7a0JBQ2hDLElBQUksQ0FBQ2xTLEtBQUssRUFBRTtvQkFDWHFXLFVBQVUsQ0FBQ25FLEtBQUssQ0FBQzs7a0JBRWxCbUYsS0FBSyxDQUFDbkYsS0FBSyxHQUFHLENBQUMsQ0FBQztrQkFDaEIzUyxLQUFLLENBQUNpWSxjQUFjLEVBQUU7a0JBQ3RCOztnQkFFRDtnQkFDQSxJQUFJdEYsS0FBSyxHQUFHNUgsS0FBSyxDQUFDakUsTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDN0JnUixLQUFLLENBQUNuRixLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQjs7Z0JBRUQzUyxLQUFLLENBQUNpWSxjQUFjLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ3hYLEtBQUssRUFBRTtnQkFDWmlWLE9BQU8sRUFBRTtnQkFFVG5HLFVBQVUsQ0FBQzZCLFVBQVUsQ0FBQyxNQUFLO2tCQUMxQjBHLEtBQUssQ0FBQ25GLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7O2NBR04sSUFBSTNTLEtBQUssQ0FBQzRJLEdBQUcsS0FBSyxXQUFXLElBQUksQ0FBQ25JLEtBQUssRUFBRTtnQkFDeENULEtBQUssQ0FBQ2lZLGNBQWMsRUFBRTtnQkFFdEIsSUFBSWpZLEtBQUssQ0FBQ2dZLFFBQVEsSUFBSXJGLEtBQUssR0FBRyxDQUFDLEVBQUU7a0JBQ2hDLElBQUksQ0FBQ2xTLEtBQUssRUFBRTtvQkFDWHFXLFVBQVUsQ0FBQ25FLEtBQUssQ0FBQztvQkFDakJtRixLQUFLLENBQUNuRixLQUFLLEdBQUcsQ0FBQyxDQUFDOztrQkFHakIzUyxLQUFLLENBQUNpWSxjQUFjLEVBQUU7a0JBQ3RCOztnQkFFRCxJQUFJdEYsS0FBSyxHQUFHLENBQUMsRUFBRW1FLFVBQVUsQ0FBQ25FLEtBQUssQ0FBQzs7WUFFbEMsQ0FBQztZQUNELE9BQU87Y0FBRStEO1lBQVMsQ0FBRTtVQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQXpaLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQThZLE9BQUEsR0FBQTlZLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBZ2IsUUFBQSxHQUFBaGIsT0FBQTtVQUNBLElBQUFpYixTQUFBLEdBQUFqYixPQUFBO1VBRU0sU0FBVXFZLG9CQUFvQkEsQ0FBQztZQUFFOU4sTUFBTTtZQUFFc007VUFBUyxDQUFFO1lBQ3pELE1BQU07Y0FBRS9ELE1BQU07Y0FBRXpTO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFakQsTUFBTSxDQUFDNkcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNaUIsUUFBUSxHQUFHQSxDQUFDO2NBQUVHLGFBQWEsRUFBRTBFO1lBQU0sQ0FBRSxLQUFJO2NBQzlDLE1BQU1xUCxTQUFTLEdBQUdyUCxNQUFNLENBQUNuRSxLQUFLLENBQUNpSSxHQUFHLENBQUM4TCxJQUFJLEtBQUs7Z0JBQzNDTCxRQUFRLEVBQUVLLElBQUksQ0FBQ0wsUUFBUTtnQkFDdkI5USxPQUFPLEVBQUVtUixJQUFJLENBQUNuUixPQUFPO2dCQUNyQmdSLGFBQWEsRUFBRUcsSUFBSSxDQUFDSDtlQUNwQixDQUFDLENBQUM7Y0FFSDlXLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRXNQLFNBQVMsRUFBRSxDQUFDLEdBQUdBLFNBQVM7Y0FBQyxDQUFFLENBQUM7WUFDbEQsQ0FBQztZQUVELElBQUk1UCxRQUFRLEVBQ1gsT0FDQ3BILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUF5VixPQUFPO2NBQUNySCxNQUFNO2NBQUNqTyxPQUFPLEVBQUM7WUFBUyxFQUFHLENBQy9CO1lBRVIsT0FDQy9ELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzWSxPQUFPLENBQUNiLFFBQVE7Y0FDaEI5VixJQUFJLEVBQUMsV0FBVztjQUNoQitZLFlBQVksRUFBRTtnQkFBRWpFLFFBQVEsRUFBRTtjQUFFLENBQUU7Y0FDOUJrRSxTQUFTO2NBQ1Q5QixJQUFJLEVBQUU0QixTQUFBLENBQUFHLG1CQUFtQjtjQUN6QjdYLEtBQUssRUFBRXVQLE1BQU0sQ0FBQ2pSLEtBQUssQ0FBQ2tWLFNBQVM7Y0FDN0JsVSxRQUFRLEVBQUVBO1lBQVEsR0FFbEI5QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1ksT0FBTyxDQUFDOUksSUFBSTtjQUFDdFAsU0FBUyxFQUFDO1lBQXFDLEVBQUcsRUFDaEVYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN3YSxRQUFBLENBQUF6QyxjQUFjLE9BQUcsQ0FDQTtVQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXhZLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFDQSxJQUFBdVosU0FBQSxHQUFBdlosT0FBQTtVQUNBLElBQUFxYixRQUFBLEdBQUFyYixPQUFBO1VBQ0EsSUFBQXNZLFlBQUEsR0FBQXRZLE9BQUE7VUFFQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUF5RyxLQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBSEE7O1VBS00sU0FBVW9iLG1CQUFtQkEsQ0FBQzVGLEtBQUs7WUFDeEMsTUFBTTtjQUFFZ0U7WUFBUyxDQUFFLEdBQUcsSUFBQUQsU0FBQSxDQUFBRSxRQUFRLEVBQUNqRSxLQUFLLENBQUNDLEtBQUssQ0FBQztZQUMzQyxNQUFNO2NBQ0xyVixLQUFLLEVBQUU7Z0JBQUVtVyxjQUFjLEVBQUVuVztjQUFLLENBQUU7Y0FDaENDLFFBQVE7Y0FDUnlTLE1BQU07Y0FDTmxNO1lBQUssQ0FDTCxHQUFHLElBQUEzRyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQzJHLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduSCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTTJPLFdBQVcsR0FBR0EsQ0FBQSxLQUFNckosWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUNsRCxNQUFNcVUsY0FBYyxHQUFHQSxDQUFDblYsT0FBTyxFQUFFZ1IsYUFBYyxLQUFJO2NBQ2xELE1BQU1vRSxZQUFZLEdBQUdwRSxhQUFhLElBQUkzQixLQUFLLENBQUNqUyxLQUFLLENBQUM0VCxhQUFhO2NBQy9ELE9BQU9oUixPQUFPLENBQUNxRixHQUFHLENBQUMsQ0FBQ2dRLE1BQU0sRUFBRS9GLEtBQUssTUFBTTtnQkFBRWxTLEtBQUssRUFBRWlZLE1BQU07Z0JBQUU5QixPQUFPLEVBQUVqRSxLQUFLLEtBQUs4RjtjQUFZLENBQUUsQ0FBQyxDQUFDO1lBQzVGLENBQUM7WUFDRCxNQUFNdkgsSUFBSSxHQUFHd0IsS0FBSyxDQUFDalMsS0FBSyxFQUFFNEMsT0FBTyxHQUFHbVYsY0FBYyxDQUFDOUYsS0FBSyxDQUFDalMsS0FBSyxDQUFDNEMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUM1RSxNQUFNLENBQUM4UyxPQUFPLEVBQUV3QyxVQUFVLENBQUMsR0FBRzFiLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDb1MsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRCxNQUFNO2NBQUU0RjtZQUFVLENBQUUsR0FBRyxJQUFBdEIsWUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUU5QyxNQUFNNVYsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIwUyxLQUFLLENBQUNzRSxRQUFRLENBQUM7Z0JBQ2QzQyxhQUFhLEVBQUUzQixLQUFLLENBQUNqUyxLQUFLLENBQUM0VCxhQUFhO2dCQUN4Q0YsUUFBUSxFQUFFblUsS0FBSyxDQUFDNEUsTUFBTSxDQUFDbkUsS0FBSztnQkFDNUI0QyxPQUFPLEVBQUU4UyxPQUFPLENBQUN6TixHQUFHLENBQUM4TCxJQUFJLElBQUlBLElBQUksQ0FBQy9ULEtBQUs7ZUFDdkMsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNbVksU0FBUyxHQUFHQSxDQUFDO2NBQUUxWSxhQUFhLEVBQUU7Z0JBQUVPLEtBQUssRUFBRTBWO2NBQU87WUFBRSxDQUFFLEtBQUk7Y0FDM0QsTUFBTTBDLGtCQUFrQixHQUFHMUMsT0FBTyxDQUFDMkMsU0FBUyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ25DLE9BQU8sQ0FBQztjQUN0RSxNQUFNdkMsYUFBYSxHQUFHd0Usa0JBQWtCLEtBQUssQ0FBQyxDQUFDLEdBQUdwTyxTQUFTLEdBQUdvTyxrQkFBa0I7Y0FDaEYsTUFBTUcsUUFBUSxHQUFHO2dCQUFFN0UsUUFBUSxFQUFFMVQsS0FBSztnQkFBRTRDLE9BQU8sRUFBRThTLE9BQU8sQ0FBQ3pOLEdBQUcsQ0FBQzhMLElBQUksSUFBSUEsSUFBSSxDQUFDL1QsS0FBSyxDQUFDO2dCQUFFNFQ7Y0FBYSxDQUFFO2NBRTdGM0IsS0FBSyxDQUFDc0UsUUFBUSxDQUFDZ0MsUUFBUSxDQUFDO1lBQ3pCLENBQUM7WUFFRCxNQUFNdlksS0FBSyxHQUFHaVMsS0FBSyxDQUFDalMsS0FBSyxFQUFFMFQsUUFBUSxJQUFJLEVBQUU7WUFDekMsTUFBTThDLFVBQVUsR0FBR2pYLEtBQUssSUFBRztjQUMxQkEsS0FBSyxDQUFDK0IsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1nSixLQUFLLEdBQUcrTCxVQUFVLENBQUNwRSxLQUFLLENBQUNDLEtBQUssQ0FBQztjQUNyQ3BWLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRXNQLFNBQVMsRUFBRWxKO2NBQUssQ0FBRSxDQUFDO1lBQ3pDLENBQUM7WUFDRCxNQUFNLENBQUMxRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1tYSxlQUFlLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ2xDLE1BQU0xVSxPQUFPLEdBQUcsSUFBSVosS0FBQSxDQUFBZ0MsY0FBYyxFQUFFO2NBQ3BDOEgsV0FBVyxFQUFFO2NBQ2IyRCxVQUFVLENBQUMsTUFBSztnQkFDZjdNLE9BQU8sQ0FBQzRDLE9BQU8sRUFBRTtjQUNsQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1IsT0FBTzVDLE9BQU87WUFDZixDQUFDO1lBQ0QsTUFBTTJVLGlCQUFpQixHQUFHLE1BQUFBLENBQU87Y0FBRWpJO1lBQUssQ0FBRSxLQUFJO2NBQzdDLE1BQU1rRCxRQUFRLEdBQUcsTUFBTTVXLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ2thLGVBQWUsQ0FBQztnQkFBRWhJLEtBQUs7Z0JBQUVrRCxRQUFRLEVBQUUxVCxLQUFLO2dCQUFFa1MsS0FBSyxFQUFFRCxLQUFLLENBQUNDO2NBQUssQ0FBRSxDQUFDO2NBRXJHck8sV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQmlMLFVBQVUsQ0FBQzZCLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQjtnQkFDQXVILFVBQVUsQ0FBQ0gsY0FBYyxDQUFDckUsUUFBUSxDQUFDOVEsT0FBTyxFQUFFOFEsUUFBUSxDQUFDRSxhQUFhLENBQUMsQ0FBQztnQkFFcEUvUCxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBRUQsTUFBTTtjQUFFbVQsS0FBSztjQUFFQyxPQUFPO2NBQUU1SjtZQUFZLENBQUUsR0FBR2hLLEtBQUssQ0FBQytKLEtBQUs7WUFFcEQsT0FDQzVRLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFrQyxHQUNwRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJDLEdBSXpEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUFFOFUsS0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxFLElBQVEsRUFDbkQxVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE2VSxLQUFLO2NBQ0w1TSxXQUFXLEVBQUUvSCxLQUFLLENBQUMyVyxTQUFTLENBQUM1TyxXQUFXO2NBQ3hDaEcsSUFBSSxFQUFDLFVBQVU7Y0FDZm9CLEtBQUssRUFBRUEsS0FBSyxJQUFJLEVBQUU7Y0FDbEJWLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjJXLFNBQVMsRUFBRUE7WUFBUyxFQUNuQixFQUNGelosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWUsR0FDakNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFtTyxpQkFBaUI7Y0FDakIzWixJQUFJLEVBQUMsU0FBUztjQUNkNUIsU0FBUyxFQUFDLFFBQVE7Y0FDbEJtRCxRQUFRLEVBQUUsQ0FBQ04sS0FBSyxJQUFJQSxLQUFLLEtBQUssRUFBRTtjQUNoQzJCLE9BQU8sRUFBRTZXLGVBQWU7Y0FDeEJqYixLQUFLLEVBQUVWLEtBQUssQ0FBQ2tGLE9BQU8sQ0FBQ3lXO1lBQWUsRUFDbkMsRUFDRmhjLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXlSLFVBQVU7Y0FBQ3RRLElBQUksRUFBQyxRQUFRO2NBQUM1QixTQUFTLEVBQUMsUUFBUTtjQUFDd0UsT0FBTyxFQUFFNlUsVUFBVTtjQUFFalosS0FBSyxFQUFFVixLQUFLLENBQUNrRixPQUFPLENBQUNtRTtZQUFNLEVBQUksQ0FDeEYsQ0FDTCxFQUNOMUosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZhLFFBQUEsQ0FBQXJDLGtCQUFrQjtjQUNsQjdSLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnRELFFBQVEsRUFBRSxDQUFDMlIsS0FBSyxDQUFDalMsS0FBSztjQUN0Qm1DLElBQUksRUFBRXVULE9BQU8sRUFBRXJQLE1BQU07Y0FDckJxUCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJwVyxRQUFRLEVBQUU2WTtZQUFTLEVBQ2xCLEVBQ0YzYixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFAsV0FBQSxDQUFBaUMsZUFBZTtjQUNmb0ksS0FBSyxFQUFFQSxLQUFLO2NBQ1pDLE9BQU8sRUFBRUEsT0FBTztjQUNoQjlKLFNBQVMsRUFBRUUsWUFBWTtjQUN2Qi9KLFdBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFXO2NBQzlCbkIsSUFBSSxFQUFFdUIsU0FBUztjQUNmYyxPQUFPLEVBQUV3SSxXQUFXO2NBQ3BCelAsS0FBSyxFQUFFVixLQUFLLENBQUM4YixZQUFZLENBQUNwYixLQUFLO2NBQy9CNFosWUFBWSxFQUFFdGEsS0FBSyxDQUFDOGIsWUFBWSxDQUFDL1gsV0FBVztjQUM1Q2dLLFVBQVUsRUFBRTZOO1lBQWlCLEVBQzVCLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzSEEsSUFBQWpjLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFtYyxZQUFBLEdBQUFuYyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVW9jLG9CQUFvQkEsQ0FBQztZQUFFaEMsT0FBTztZQUFFaUM7VUFBWSxDQUFFO1lBQzdELE1BQU07Y0FDTHpWLEtBQUs7Y0FDTHhHLEtBQUssRUFBRTtnQkFBRW1XLGNBQWMsRUFBRW5XLEtBQUs7Z0JBQUVtSztjQUFNLENBQUU7Y0FDeENsSztZQUFRLENBQ1IsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0rVyxNQUFNLEdBQUdDLElBQUksSUFBSUEsSUFBSSxDQUFDclcsSUFBSSxLQUFLLGdCQUFnQjtZQUNyRCxNQUFNdUssR0FBRyxHQUFHOEwsSUFBSSxLQUFLO2NBQUUvVCxLQUFLLEVBQUUrVCxJQUFJLENBQUMzTCxFQUFFO2NBQUV0RyxLQUFLLEVBQUVpUyxJQUFJLENBQUN4VztZQUFLLENBQUUsQ0FBQztZQUUzRCxNQUFNcUYsT0FBTyxHQUFHUyxLQUFLLENBQUMrSixLQUFLLENBQUNoUSxVQUFVLENBQUNrTixLQUFLLENBQUN3SixNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDN0wsR0FBRyxDQUFDQSxHQUFHLENBQUM7WUFDcEUsSUFBSTBQLFlBQVksR0FBRztjQUFFM1gsS0FBSyxFQUFFLEVBQUU7Y0FBRThCLEtBQUssRUFBRWpGLEtBQUssQ0FBQ2dhLE9BQU8sQ0FBQ2tDO1lBQVcsQ0FBRTtZQUVsRSxNQUFNelosUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEJ6QyxRQUFRLENBQUN3QixLQUFLLENBQUM0RixHQUFHLENBQUM7Z0JBQUUyUyxPQUFPLEVBQUV0WCxLQUFLLENBQUM0RSxNQUFNLENBQUNuRTtjQUFLLENBQUUsQ0FBQztjQUNuRCxJQUFJVCxLQUFLLENBQUM0RSxNQUFNLENBQUNuRSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUM5QixNQUFNNlcsT0FBTyxHQUFHeFQsS0FBSyxDQUFDK0osS0FBSyxDQUFDaFEsVUFBVSxDQUFDNGIsR0FBRyxDQUFDelosS0FBSyxDQUFDNEUsTUFBTSxDQUFDbkUsS0FBSyxDQUFDO2dCQUM5RCxJQUFJLENBQUM2VyxPQUFPLENBQUNwVCxTQUFTLENBQUNPLE9BQU8sRUFBRTtrQkFDL0I4VSxZQUFZLENBQUMsQ0FBQzlSLE1BQU0sQ0FBQ2lTLG1CQUFtQixDQUFDLENBQUM7a0JBRTFDOzs7Y0FHRkgsWUFBWSxDQUFDLEVBQUUsQ0FBQztjQUNoQmhjLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRTJTLE9BQU8sRUFBRXRYLEtBQUssQ0FBQzRFLE1BQU0sQ0FBQ25FO2NBQUssQ0FBRSxDQUFDO1lBQ3BELENBQUM7WUFFRCxPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZ0JBQVFKLEtBQUssQ0FBQ2dhLE9BQU8sQ0FBQy9VLEtBQUssQ0FBUyxFQUNwQ3RGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyYixZQUFBLENBQUFNLFdBQVc7Y0FBQ2xaLEtBQUssRUFBRTZXLE9BQU87Y0FBRWpVLE9BQU8sRUFBRSxDQUFDK1UsWUFBWSxFQUFFLEdBQUcvVSxPQUFPLENBQUM7Y0FBRXRELFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ3RGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUF6QixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFzQixPQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVULE1BQUEsR0FBQXZULE9BQUE7VUFDQSxJQUFBMGMsTUFBQSxHQUFBMWMsT0FBQTtVQUNBLElBQUF1QyxNQUFBLEdBQUF2QyxPQUFBO1VBRU0sU0FBVTJjLHNCQUFzQkEsQ0FBQTtZQUNyQyxNQUFNO2NBQUV2YyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDb0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN2QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTVcsVUFBVSxHQUFHZixJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1tQixRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFRyxhQUFhLEVBQUU7Z0JBQUViLElBQUk7Z0JBQUVvQjtjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEbEQsUUFBUSxDQUFDb0gsR0FBRyxDQUFDO2dCQUFFLENBQUN0RixJQUFJLEdBQUdvQjtjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTWdSLE1BQU0sR0FBR0EsQ0FBQSxLQUFNbFUsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO1lBQ3BDLE1BQU1uQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQnRGLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3dILE1BQU0sRUFBRTtjQUN2QjFILE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDakIsQ0FBQztZQUNELE1BQU1pVixVQUFVLEdBQUdBLENBQUEsS0FBTWpWLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDekMsTUFBTWliLFNBQVMsR0FBR3ZjLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLElBQUlKLElBQUksS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHQSxJQUFJLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBR0EsSUFBSTtZQUN6RyxNQUFNbWIsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUJsYixPQUFPLENBQUN0QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBR0osSUFBSSxLQUFLLE9BQU8sR0FBRyxPQUFPLEdBQUdBLElBQUksQ0FBQztZQUM5RSxDQUFDO1lBQ0QsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFZ2IsYUFBYSxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDckcsSUFBQXpiLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUMsRUFBRXdjLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztZQUUxRCxPQUNDeGIsS0FBQSxDQUFBYixhQUFBLENBQUFhLEtBQUEsQ0FBQVosUUFBQSxRQUNDWSxLQUFBLENBQUFiLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DVyxLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQXFCLEdBQ3BDVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ2MsT0FBQSxDQUFBVyxjQUFjLE9BQUcsRUFDbEJaLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYSxHQUMzQlcsS0FBQSxDQUFBYixhQUFBLENBQUNOLEtBQUEsQ0FBQW1ULFFBQVE7Y0FDUmhPLEtBQUssRUFBRWpGLEtBQUssQ0FBQ08sVUFBVSxDQUFDd0QsV0FBVyxDQUFDa0IsS0FBSztjQUN6Q3ZCLE9BQU8sRUFBQyxVQUFVO2NBQ2xCM0IsSUFBSSxFQUFDLGFBQWE7Y0FDbEJVLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjBSLE1BQU0sRUFBRUEsTUFBTTtjQUNkcE0sV0FBVyxFQUFFL0gsS0FBSyxDQUFDTyxVQUFVLENBQUN3RCxXQUFXLENBQUNnRSxXQUFXO2NBQ3JENUUsS0FBSyxFQUFFbEQsUUFBUSxDQUFDOEQ7WUFBVyxFQUMxQixDQUNHLENBQ0QsRUFFTjlDLEtBQUEsQ0FBQWIsYUFBQSxDQUFDbUQsV0FBQSxDQUFBbVosb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVILFNBQVM7Y0FDcEJ6VyxPQUFPLEVBQUU7Z0JBQ1J0RSxLQUFLLEVBQUVSLEtBQUEsQ0FBQWIsYUFBQSxDQUFDK0IsTUFBQSxDQUFBeWEsbUJBQW1CO2tCQUFDcmIsT0FBTyxFQUFFQTtnQkFBTyxFQUFJO2dCQUNoRHlHLElBQUksRUFBRS9HLEtBQUEsQ0FBQWIsYUFBQSxDQUFDa2MsTUFBQSxDQUFBL0Ysd0JBQXdCO2tCQUFDaFIsUUFBUSxFQUFFQSxRQUFRO2tCQUFFaVIsVUFBVSxFQUFFQTtnQkFBVTtlQUMxRTtjQUNEek8sV0FBVyxFQUFFOUcsS0FBQSxDQUFBYixhQUFBLENBQUMrUyxNQUFBLENBQUE4Qyx3QkFBd0I7Z0JBQUNsVSxJQUFJLEVBQUU5QixRQUFRLENBQUNZLElBQUk7Z0JBQUV3QixVQUFVLEVBQUVBO2NBQVU7WUFBSSxFQUNyRixDQUNHLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBdEIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQVFPLE1BQU1pZCxjQUFjLEdBQUdBLENBQUM7WUFBRTNGLElBQUksRUFBRXVFLE1BQU07WUFBRTFFLGFBQWE7WUFBRTFCO1VBQUssQ0FBVSxLQUFJO1lBQ2hGLE1BQU1uVCxJQUFJLEdBQUdtVCxLQUFLLEtBQUswQixhQUFhLEdBQUcsT0FBTyxHQUFHLE9BQU87WUFDeEQsTUFBTTBDLEdBQUcsR0FBRyx1Q0FBdUN2WCxJQUFJLEtBQUssT0FBTyxHQUFHLG1CQUFtQixHQUFHLGtCQUFrQixFQUFFO1lBQ2hILE9BQ0N2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFJRSxTQUFTLEVBQUVtWjtZQUFHLEdBQ2pCOVosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQWdCLEdBQUU0QixJQUFJLEtBQUssT0FBTyxJQUFJdkMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBK2IsSUFBSTtjQUFDNWEsSUFBSSxFQUFFQSxJQUFJO2NBQUU1QixTQUFTLEVBQUM7WUFBUyxFQUFHLENBQVEsRUFDdEdYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFvQixHQUFFbWIsTUFBTSxDQUFRLENBQ2hEO1VBRVAsQ0FBQztVQUFDbk0sT0FBQSxDQUFBdU4sY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRixJQUFBbGQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFDQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUdBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQWFNLFNBQVVrWSxXQUFXQSxDQUFDO1lBQUU3VCxRQUFRO1lBQUVSLFFBQVE7WUFBRXlTLGVBQWUsR0FBRztVQUFFLENBQW9CO1lBQ3pGLE1BQU07Y0FDTGxXLEtBQUs7Y0FDTEMsUUFBUTtjQUNSdUcsS0FBSztjQUNMQSxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQzZQLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNb0UsS0FBSyxHQUFHO2NBQUVuQyxRQUFRLEVBQUUsQ0FBQ3hELFFBQVEsQ0FBQzhjLFFBQVEsSUFBSXRaO1lBQVEsQ0FBRTtZQUMxRCxNQUFNdVosVUFBVSxHQUFHQSxDQUFBLEtBQU1oTixrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFFN0QsTUFBTWhDLFVBQVUsR0FBRzRGLEtBQUssSUFBRztjQUMxQixPQUFPMVQsUUFBUSxDQUFDd0IsS0FBSyxDQUFDME0sUUFBUSxDQUFDd0YsS0FBSyxFQUFFO2dCQUFFLEdBQUd1QztjQUFlLENBQUUsQ0FBQztZQUM5RCxDQUFDO1lBRUQsT0FDQ3ZXLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDZixLQUFLLENBQU0sRUFDNUJmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBUSxRQUFRO2NBQUEsR0FBS3RJLEtBQUs7Y0FBRWQsT0FBTyxFQUFFa1ksVUFBVTtjQUFFdFosT0FBTyxFQUFDLE1BQU07Y0FBQ3VaLE1BQU0sRUFBRTtZQUFLLEdBQ3BFeFcsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixDQUNOLENBQ0UsRUFDUmxLLFFBQVEsRUFDUjhMLGVBQWUsSUFDZnBRLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxXQUFBLENBQUFpQyxlQUFlO2NBQ2Z6TSxJQUFJLEVBQUV5SyxlQUFlO2NBQ3JCb0ssS0FBSyxFQUFFM1QsS0FBSyxDQUFDK0osS0FBSyxDQUFDNEosS0FBSztjQUN4QjdKLFNBQVMsRUFBRTlKLEtBQUssQ0FBQytKLEtBQUssQ0FBQ0MsWUFBWTtjQUNuQzdJLE9BQU8sRUFBRXFWLFVBQVU7Y0FDbkJ0YyxLQUFLLEVBQUVWLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ3hjLEtBQUs7Y0FDekI0WixZQUFZLEVBQUV0YSxLQUFLLENBQUNrZCxNQUFNLENBQUNuWixXQUFXO2NBQ3RDZ0ssVUFBVSxFQUFFQTtZQUFVLEVBRXZCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQXBPLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXVkLFlBQUEsR0FBQXZkLE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUEyUCxLQUFBLEdBQUEzUCxPQUFBO1VBRU0sU0FBVWdkLG1CQUFtQkEsQ0FBQztZQUFFcmI7VUFBTyxDQUFFO1lBQzlDLE1BQU07Y0FBRW1SLE1BQU07Y0FBRXpTLFFBQVE7Y0FBRW1kLFFBQVE7Y0FBRTVXLEtBQUs7Y0FBRXhHO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDekUsTUFBTW1kLFdBQVcsR0FBRzdXLEtBQUssQ0FBQ0MsV0FBVyxDQUFDdkIsT0FBTztZQUM3QyxNQUFNLENBQUNvWSxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc1ZCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDZ2MsV0FBVyxFQUFFQyxVQUFVLENBQUMsR0FBRzlkLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNrYyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHaGUsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUNrUixNQUFNLENBQUNqUixLQUFLLENBQUNrVixTQUFTLENBQUM7WUFDaEUsTUFBTWlILGFBQWEsR0FBR0EsQ0FBQSxLQUFNSCxVQUFVLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO1lBQ3BELE1BQU0sQ0FBQ0ssVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR25lLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNdWMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTXRjLEtBQUssR0FBR3hCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3VjLE9BQU8sRUFBRTtjQUN0Q1osUUFBUSxDQUFDO2dCQUFFM2I7Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUFULE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRXNjLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztZQUV4RCxNQUFNNU4sV0FBVyxHQUFHQSxDQUFBLEtBQU1vTixrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDOUQsTUFBTTFYLEtBQUssR0FBRztjQUFFZCxPQUFPLEVBQUVxTCxXQUFXO2NBQUUxTSxRQUFRLEVBQUV4RCxRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssSUFBSXpCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ2xGO1lBQUssQ0FBRTtZQUNsRyxNQUFNcUgsTUFBTSxHQUFHckcsS0FBSyxJQUFJbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN2QyxNQUFNMGMsU0FBUyxHQUFHdmIsS0FBSyxJQUFJK2EsVUFBVSxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUVuRCxNQUFNVSxVQUFVLEdBQUcsQ0FBQ1YsV0FBVyxHQUFHSCxXQUFXLENBQUNLLEtBQUssR0FBR0wsV0FBVyxDQUFDM1YsSUFBSTtZQUN0RSxNQUFNeVcsY0FBYyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQ0wsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNuQixNQUFNN2QsUUFBUSxDQUFDd0IsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO2dCQUFFc1AsU0FBUyxFQUFFK0c7Y0FBSyxDQUFFLENBQUM7Y0FDOUMsTUFBTXpkLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtjQUNyQm9XLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDcEJGLGFBQWEsRUFBRTtZQUNoQixDQUFDO1lBQ0QsTUFBTVEsWUFBWSxHQUFHO2NBQ3BCdFosT0FBTyxFQUFFMFksV0FBVyxHQUFHVyxjQUFjLEdBQUdGLFNBQVM7Y0FDakR4YSxRQUFRLEVBQUd4RCxRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssSUFBSXpCLFFBQVEsQ0FBQzJHLFNBQVMsQ0FBQ2xGLEtBQUssSUFBS21jO2FBQ2hFO1lBRUQsT0FDQ2xlLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFzQixHQUNwQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNYLE1BQU0sQ0FBQ3VkLGNBQWMsQ0FBTSxFQUM1QzFlLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQyxHQUM3QyxDQUFDa2QsV0FBVyxJQUNaN2QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ25CLE9BQU8sRUFBQyxNQUFNO2NBQUNvQixPQUFPLEVBQUVpRSxNQUFNO2NBQUU3RyxJQUFJLEVBQUM7WUFBUSxHQUNuRG1iLFdBQVcsQ0FBQ2pVLElBQUksQ0FFbEIsRUFDRHpKLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUswYSxZQUFZO2NBQUVsYyxJQUFJLEVBQUM7WUFBTSxHQUNsRGdjLFVBQVUsQ0FDSCxFQUNSLENBQUNWLFdBQVcsSUFDWjdkLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUtrQyxLQUFLO2NBQUUxRCxJQUFJLEVBQUM7WUFBUSxHQUM3Q21iLFdBQVcsQ0FBQ2hVLE1BQU0sQ0FFcEIsQ0FDSSxDQUNFLEVBQ1QxSixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVAsS0FBQSxDQUFBK08sa0JBQWtCO2NBQUNaLEtBQUssRUFBRUEsS0FBSztjQUFFQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRVksVUFBVSxFQUFFZixXQUFXO2NBQUUvUSxNQUFNLEVBQUVtUjtZQUFhLEVBQUksQ0FDbkcsRUFDTmplLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMrYyxZQUFBLENBQUEvSSxrQkFBa0I7Y0FBQzlPLElBQUksRUFBRWdZLGVBQWU7Y0FBRTNWLE9BQU8sRUFBRXdJO1lBQVcsRUFBSSxDQUNqRTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFQSxJQUFBeFEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJQLEtBQUEsR0FBQTNQLE9BQUE7VUFDQSxJQUFBNGUsYUFBQSxHQUFBNWUsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE2ZSxpQkFBQSxHQUFBN2UsT0FBQTtVQUVNLFNBQVUwZSxrQkFBa0JBLENBQUM7WUFBRVosS0FBSztZQUFFQyxRQUFRO1lBQUVZLFVBQVU7WUFBRTlSO1VBQU0sQ0FBRTtZQUN6RSxNQUFNO2NBQUVpRyxNQUFNO2NBQUV6UyxRQUFRO2NBQUVtZCxRQUFRO2NBQUVwZCxLQUFLO2NBQUV3RztZQUFLLENBQUUsR0FBRyxJQUFBM0csUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV6RSxNQUFNK2QsU0FBUyxHQUFHdkwsTUFBTSxJQUFHO2NBQzFCaUwsUUFBUSxDQUFDakwsTUFBTSxDQUFDO2NBQ2hCLE1BQU1qUixLQUFLLEdBQUc7Z0JBQUUsR0FBR2lSLE1BQU0sQ0FBQ2pSO2NBQUssQ0FBRTtjQUNqQ0EsS0FBSyxDQUFDa1YsU0FBUyxHQUFHLENBQUMsR0FBRytHLEtBQUssQ0FBQztjQUU1QnpkLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQzVGLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBRUQsSUFBSThjLFVBQVUsRUFBRTtjQUNmLE9BQ0M1ZSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb2UsYUFBQSxDQUFBRSxPQUFPLENBQUNDLEtBQUs7Z0JBQUNqTSxNQUFNLEVBQUVnTCxLQUFLO2dCQUFFTyxTQUFTLEVBQUVBLFNBQVM7Z0JBQUUzZCxTQUFTLEVBQUM7Y0FBZSxHQUMzRW9kLEtBQUssQ0FBQ3RTLEdBQUcsQ0FBQ3lMLFFBQVEsSUFBRztnQkFDckIsT0FDQ2xYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNvZSxhQUFBLENBQUFFLE9BQU8sQ0FBQ3pGLElBQUk7a0JBQUMzTixHQUFHLEVBQUV1TCxRQUFRLENBQUNBLFFBQVE7a0JBQUUxVCxLQUFLLEVBQUUwVDtnQkFBUSxHQUNwRGxYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNxZSxpQkFBQSxDQUFBRyxnQkFBZ0I7a0JBQUNoTCxJQUFJLEVBQUVpRCxRQUFRO2tCQUFFaFQsRUFBRSxFQUFDLEtBQUs7a0JBQUNrWCxTQUFTO2dCQUFBLEVBQUcsQ0FDekM7Y0FFakIsQ0FBQyxDQUFDLENBQ2EsQ0FDZDs7WUFJTCxPQUFPcGIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21QLEtBQUEsQ0FBQUssSUFBSTtjQUFDdFAsU0FBUyxFQUFDLGVBQWU7Y0FBQ21OLEtBQUssRUFBRWlGLE1BQU0sQ0FBQ2pSLEtBQUssQ0FBQ2tWLFNBQVM7Y0FBRTlHLE9BQU8sRUFBRTRPLGlCQUFBLENBQUFHO1lBQWdCLEVBQUk7VUFDcEc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUE3ZCxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTJQLEtBQUEsR0FBQTNQLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBaWYsWUFBQSxHQUFBamYsT0FBQTtVQUNBLElBQUFxYixRQUFBLEdBQUFyYixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFPTSxTQUFVZ2YsZ0JBQWdCQSxDQUFDO1lBQUVoTCxJQUFJO1lBQUUvUCxFQUFFLEdBQUcsSUFBSTtZQUFFa1gsU0FBUyxHQUFHO1VBQUssQ0FBVTtZQUM5RSxNQUFNLENBQUMrRCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHcGYsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU07Y0FBRXhCO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFdEMsTUFBTXlFLE9BQU8sR0FBR2QsRUFBRTtZQUNsQixNQUFNbWIsUUFBUSxHQUFHQSxDQUFBLEtBQU0sQ0FBQ0YsVUFBVTtZQUVsQyxPQUNDbmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VFLE9BQU87Y0FBQ3JFLFNBQVMsRUFBQztZQUFnQixHQUNsQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3llLFlBQUEsQ0FBQUksb0JBQW9CO2NBQUNELFFBQVEsRUFBRUE7WUFBUSxHQUN2Q3JmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN5ZSxZQUFBLENBQUFLLGlCQUFpQixRQUNqQnZmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQ0NULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFtWixvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRTVCLFNBQVM7Y0FDcEJvRSxPQUFPO2NBQ1BwWixPQUFPLEVBQUU7Z0JBQ1JxWixJQUFJLEVBQUV6ZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUErYixJQUFJO2tCQUFDeGMsU0FBUyxFQUFDLGdCQUFnQjtrQkFBQzRCLElBQUksRUFBQztnQkFBTSxFQUFHO2dCQUNyRG1kLEtBQUssRUFBRTFmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQStiLElBQUk7a0JBQUN4YyxTQUFTLEVBQUMsZ0JBQWdCO2tCQUFDNEIsSUFBSSxFQUFDO2dCQUFjOztZQUMzRCxFQUNBLEVBRUZ2QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBb0IsR0FBRXNULElBQUksQ0FBQ2lELFFBQVEsQ0FBUSxDQUN2RCxDQUNjLEVBQ3BCbFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3llLFlBQUEsQ0FBQVMsa0JBQWtCLFFBQ2xCM2YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQW1aLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQy9JLElBQUksQ0FBQzdOLE9BQU8sRUFBRXlELE1BQU07Y0FDakN6RCxPQUFPLEVBQUU7Z0JBQ1JxWixJQUFJLEVBQ0h6ZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVAsS0FBQSxDQUFBSyxJQUFJO2tCQUNKbkMsS0FBSyxFQUFFbUcsSUFBSSxDQUFDN04sT0FBTztrQkFDbkJ0RSxLQUFLLEVBQUU7b0JBQUVzVixhQUFhLEVBQUVuRCxJQUFJLENBQUNtRDtrQkFBYSxDQUFFO2tCQUM1Q2xILE9BQU8sRUFBRW9MLFFBQUEsQ0FBQTRCO2dCQUFjLEVBRXhCO2dCQUNEd0MsS0FBSyxFQUFFMWYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7a0JBQUtFLFNBQVMsRUFBQztnQkFBc0IsR0FBRU4sS0FBSyxDQUFDbVcsY0FBYyxDQUFDb0osWUFBWTs7WUFDL0UsRUFDQSxDQUNrQixDQUNDLENBQ2Q7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQXpmLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFxQixLQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVTRmLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFOU0sTUFBTTtjQUFFMVMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhELE9BQ0NlLEtBQUEsQ0FBQWIsYUFBQSxDQUFBYSxLQUFBLENBQUFaLFFBQUEsUUFDQ1ksS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCVyxLQUFBLENBQUFiLGFBQUEsZ0JBQVFKLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2lQLFNBQVMsQ0FBQ3pMLEtBQUssQ0FBUyxFQUM1Q2hFLEtBQUEsQ0FBQWIsYUFBQSxDQUFDTixLQUFBLENBQUFtVCxRQUFRO2NBQ1JsUixJQUFJLEVBQUMsV0FBVztjQUNoQmdHLFdBQVcsRUFBRS9ILEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ2lQLFNBQVMsQ0FBQzNJLFdBQVc7Y0FDOUM1RSxLQUFLLEVBQUV1UCxNQUFNLENBQUNqUixLQUFLLEVBQUVpUDtZQUFTLEVBQzdCLENBQ0csQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBNVEsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVTZmLGdCQUFnQkEsQ0FBQztZQUFFMWQ7VUFBSSxDQUFFO1lBQ3hDLE1BQU07Y0FBRTJRLE1BQU07Y0FBRTFTLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4RCxNQUFNdUMsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUcsYUFBYSxFQUFFO2dCQUFFYixJQUFJO2dCQUFFb0I7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RGxELFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1nUixNQUFNLEdBQUdBLENBQUEsS0FBTWxVLFFBQVEsQ0FBQ3lILElBQUksRUFBRTtZQUVwQyxNQUFNdkUsS0FBSyxHQUFHbEQsUUFBUSxDQUFDd0IsS0FBSyxDQUFDTSxJQUFJLENBQUMsSUFBSS9CLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLENBQUNnRyxXQUFXO1lBRW5FLE9BQ0NwSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYSxHQUMzQlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBT3NmLE9BQU8sRUFBQztZQUFFLEdBQUUxZixLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDa0QsS0FBSyxDQUFTLEVBQ25EdEYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBbVQsUUFBUTtjQUFDeFEsUUFBUSxFQUFFQSxRQUFRO2NBQUUwUixNQUFNLEVBQUVBLE1BQU07Y0FBRXRULElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUVBLElBQUk7Y0FBRW9CLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ3JGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUF4RCxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVK2YsV0FBV0EsQ0FBQztZQUFFekk7VUFBSSxDQUE2QztZQUM5RSxPQUNDdlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBWSxHQUFFNFcsSUFBSSxDQUFDblYsSUFBSSxFLEtBQVksRSxLQUFDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBTzhXLElBQUksQ0FBQy9ULEtBQUssQ0FBUSxDQUMxRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUF4RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMlAsS0FBQSxHQUFBM1AsT0FBQTtVQUNBLElBQUFnZ0IsWUFBQSxHQUFBaGdCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQWlnQixZQUFBLEdBQUFqZ0IsT0FBQTtVQUNNLFNBQVVrZ0IscUJBQXFCQSxDQUFDO1lBQUUvZCxJQUFJO1lBQUU2UjtVQUFJLENBQUU7WUFDbkQsTUFBTTtjQUNMM1QsUUFBUSxFQUFFO2dCQUFFd0I7Y0FBSyxDQUFFO2NBQ25CekI7WUFBSyxDQUNMLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUN1TSxNQUFNLEVBQUVzVCxTQUFTLENBQUMsR0FBR3BnQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTXdkLFFBQVEsR0FBR0EsQ0FBQSxLQUFNZSxTQUFTLENBQUMsQ0FBQ3RULE1BQU0sQ0FBQztZQUN6QyxNQUFNZ0IsS0FBSyxHQUFHaE0sS0FBSyxDQUFDTSxJQUFJLENBQUMsRUFBRXFKLEdBQUcsQ0FBQyxDQUFDOEwsSUFBSSxFQUFFN0IsS0FBSyxLQUFJO2NBQzlDLE1BQU0sQ0FBQzJLLFNBQVMsRUFBRTdjLEtBQUssQ0FBQyxHQUFHc00sTUFBTSxDQUFDQyxJQUFJLENBQUNqTyxLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ21lLE1BQU0sQ0FBQztjQUNwRSxPQUFPO2dCQUFFbmUsSUFBSSxFQUFFbVYsSUFBSSxDQUFDOEksU0FBUyxDQUFDO2dCQUFFN2MsS0FBSyxFQUFFK1QsSUFBSSxDQUFDL1QsS0FBSztjQUFDLENBQUU7WUFDckQsQ0FBQyxDQUFDO1lBRUYsT0FDQ3hELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUF3RCxHQUN6RVgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQ2tELEtBQUssQ0FBTSxFQUNsQ3RGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQStiLElBQUk7Y0FBQzVhLElBQUksRUFBQyxNQUFNO2NBQUM1QixTQUFTLEVBQUMsZ0JBQWdCO2NBQUN3RSxPQUFPLEVBQUVrYTtZQUFRLEVBQUksQ0FDMUQsRUFDVHJmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFtWixvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRWxRLE1BQU07Y0FDakIwUyxPQUFPO2NBQ1BwWixPQUFPLEVBQUU7Z0JBQ1JxWixJQUFJLEVBQUV6ZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeWYsWUFBQSxDQUFBTSxlQUFlO2tCQUFDNWEsUUFBUSxFQUFFeVosUUFBUTtrQkFBRWpkLElBQUksRUFBRUEsSUFBSTtrQkFBRW1WLElBQUksRUFBRXpWLEtBQUssQ0FBQ00sSUFBSTtnQkFBQyxFQUFJO2dCQUM1RXNkLEtBQUssRUFBRTFmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtUCxLQUFBLENBQUFLLElBQUk7a0JBQUN0UCxTQUFTLEVBQUMsc0JBQXNCO2tCQUFDbU4sS0FBSyxFQUFFQSxLQUFLO2tCQUFFb0MsT0FBTyxFQUFFK1AsWUFBQSxDQUFBRDtnQkFBVzs7WUFDaEYsRUFDQSxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFwYyxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBa0JNLFNBQVV3Z0IsVUFBVUEsQ0FBQztZQUFFcmUsSUFBSTtZQUFFTSxVQUFVO1lBQUVvQixRQUFRO1lBQUV5UyxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUNoRyxNQUFNO2NBQ0xsVyxLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXhCLE1BQU15TSxRQUFRLEdBQUdBLENBQUEsS0FBTXRLLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFFM0MsT0FDQzFDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDZixLQUFLLENBQU0sRUFDNUJmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQ0ksUUFBUTtjQUFDZ0IsT0FBTyxFQUFFNkg7WUFBUSxHQUMvQ2xHLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3FILE1BQU0sQ0FDbkIsQ0FDSixDQUNFLEVBQ1Q1TSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMkIsR0FDekNYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUE4QixHQUFFTixLQUFLLENBQUNPLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBUSxDQUNyRixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUFwRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFhTSxTQUFVa1ksV0FBV0EsQ0FBQztZQUFFN1QsUUFBUTtZQUFFUixRQUFRO1lBQUV5UyxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUN6RixNQUFNO2NBQUVsVztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRXRDLE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDZixLQUFLLENBQU0sQ0FDcEIsRUFDUnVELFFBQVEsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBdEUsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTRVLFFBQUEsR0FBQTVVLE9BQUE7VUFDQSxJQUFBK1ksT0FBQSxHQUFBL1ksT0FBQTtVQUNBLElBQUF5Z0IsUUFBQSxHQUFBemdCLE9BQUE7VUFPTSxTQUFVdWdCLGVBQWVBLENBQUM7WUFBRTVhLFFBQVE7WUFBRXhELElBQUk7WUFBRW1WO1VBQUksQ0FBeUI7WUFDOUUsTUFBTTtjQUNMalgsUUFBUSxFQUFFO2dCQUFFd0I7Y0FBSztZQUFFLENBQ25CLEdBQUcsSUFBQTVCLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTTtjQUFFMmQsVUFBVTtjQUFFM1k7WUFBTyxDQUFFLEdBQUcsSUFBQW1iLFFBQUEsQ0FBQUMsT0FBTyxFQUFDL2EsUUFBUSxDQUFDO1lBQ2pELE9BQ0M1RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUNDVixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1UsUUFBQSxDQUFBVyxnQkFBZ0I7Y0FBQ3BULElBQUksRUFBRUEsSUFBSTtjQUFFNlIsSUFBSSxFQUFFblMsS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSTtZQUFDLEVBQUksRUFDN0RwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVksT0FBQSxDQUFBNEgsZ0JBQWdCO2NBQUNoWixNQUFNLEVBQUVyQyxPQUFPLENBQUNxQyxNQUFNO2NBQUVoQyxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0ssUUFBUTtjQUFFc1ksVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDOUY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQWxlLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVU0Z0IsbUJBQW1CQSxDQUFBO1lBQ2xDLE1BQU07Y0FBRXhnQjtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3RDLE9BQ0NQLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDeUIsS0FBSyxDQUFDaVAsU0FBUyxDQUFDaFAsS0FBSyxDQUFRLENBQ3JDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQStlLGFBQUEsR0FBQTdnQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxNQUFNNlUsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUU1VSxLQUFBLENBQUE2VSxLQUFLO1lBQ1p6QixRQUFRLEVBQUVwVCxLQUFBLENBQUFtVCxRQUFRO1lBQ2xCMkIsS0FBSyxFQUFFOVUsS0FBQSxDQUFBK1UsS0FBSztZQUNaQyxRQUFRLEVBQUVoVixLQUFBLENBQUFpVixRQUFRO1lBQ2xCQyxNQUFNLEVBQUVsVixLQUFBLENBQUFtVjtXQUNSO1VBWUssU0FBVXlMLGtCQUFrQkEsQ0FBQztZQUFFM2UsSUFBSTtZQUFFNlIsSUFBSTtZQUFFeUIsS0FBSztZQUFFNVM7VUFBUSxDQUFzQztZQUNyRyxNQUFNO2NBQ0x4QyxRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLLENBQUU7Y0FDbkJ4QixRQUFRO2NBQ1JEO1lBQUssQ0FDTCxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTtjQUFFaUQ7WUFBSyxDQUFFLEdBQUcsSUFBQXNkLGFBQUEsQ0FBQUUsc0JBQXNCLEdBQUU7WUFDMUMsTUFBTSxDQUFDNU4sT0FBTyxFQUFFNk4sVUFBVSxDQUFDLEdBQUdqaEIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELE1BQU0wZSxNQUFNLEdBQUd6USxNQUFNLENBQUNDLElBQUksQ0FBQ2tFLElBQUksQ0FBQ3NNLE1BQU0sQ0FBQztZQUN2QyxJQUFBbGYsTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFLE1BQU0yZ0IsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLE1BQU1sTyxNQUFNLEdBQUdqUixLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHTixLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFN0MsTUFBTThlLGFBQWEsR0FBRyxFQUFFO1lBQ3hCLE1BQU1DLFVBQVUsR0FBRzlnQixLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQztZQUVwQyxNQUFNb1MsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkJsVSxRQUFRLENBQUN5SCxJQUFJLENBQUM7Z0JBQUVqRyxLQUFLLEVBQUU7a0JBQUVNLElBQUksRUFBRW9CO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQzFDLENBQUM7WUFFRCxNQUFNNGQsTUFBTSxHQUFHYixNQUFNLENBQUM5VSxHQUFHLENBQUMsQ0FBQ3JKLElBQUksRUFBRWlmLENBQUMsS0FBSTtjQUNyQyxJQUFJamYsSUFBSSxLQUFLLGFBQWEsRUFBRSxPQUFPLElBQUk7Y0FDdkMsTUFBTTRULEtBQUssR0FBR2xCLFVBQVUsQ0FBQ2IsSUFBSSxDQUFDc00sTUFBTSxDQUFDbmUsSUFBSSxDQUFDLENBQUM7Y0FDM0MsTUFBTTZELEtBQUssR0FBRztnQkFDYlgsS0FBSyxFQUFFNmIsVUFBVSxDQUFDL2UsSUFBSSxDQUFDLENBQUNrRCxLQUFLO2dCQUM3QjhDLFdBQVcsRUFBRStZLFVBQVUsQ0FBQy9lLElBQUksQ0FBQyxDQUFDZ0csV0FBVztnQkFDekNoRyxJQUFJO2dCQUNKNlIsSUFBSSxFQUFFN1IsSUFBSTtnQkFDVm9CLEtBQUssRUFBRXVQLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQyxHQUFHdFQsSUFBSSxDQUFDLElBQUk7ZUFDaEM7Y0FFRDhlLGFBQWEsQ0FBQzllLElBQUksQ0FBQyxHQUFHLEVBQUU7Y0FFeEIsT0FDQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1VixLQUFLO2dCQUFBLEdBQ0QvUCxLQUFLO2dCQUNUbkMsUUFBUSxFQUFFeEQsUUFBUSxDQUFDOEcsUUFBUTtnQkFDM0J0RSxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCNkksR0FBRyxFQUFFLEdBQUd2SixJQUFJLElBQUlpZixDQUFDLEVBQUU7Z0JBQ25CMWdCLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQzVCb0QsT0FBTyxFQUFDLFVBQVU7Z0JBQ2xCeVEsTUFBTSxFQUFFQTtjQUFNLEVBQ2I7WUFFSixDQUFDLENBQUM7WUFFRixPQUNDeFUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDRTBnQixNQUFNLEVBQ1BwaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTRDLEdBQzdEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcWdCLGFBQUEsQ0FBQVEsaUJBQWlCO2NBQUMzZ0IsU0FBUyxFQUFDLFFBQVE7Y0FBQzBELE1BQU0sRUFBQyxRQUFRO2NBQUM5QixJQUFJLEVBQUMsUUFBUTtjQUFDbVQsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDNUUsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBb0wsYUFBQSxHQUFBN2dCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBdVQsTUFBQSxHQUFBdlQsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBRU0sU0FBVXVWLGdCQUFnQkEsQ0FBQztZQUFFcFQsSUFBSTtZQUFFNlIsSUFBSTtZQUFFc047VUFBUSxDQUFFO1lBQ3hELE1BQU07Y0FDTGpoQixRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLLENBQUU7Y0FDbkJ4QixRQUFRO2NBQ1JELEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsSUFBSSxDQUFDMFQsSUFBSSxDQUFDdU4sY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2NBQ25DM1osT0FBTyxDQUFDa08sSUFBSSxDQUFDLHdDQUF3QzNULElBQUksRUFBRSxDQUFDO2NBQzVELE9BQU8sSUFBSTs7WUFHWixNQUFNMlEsTUFBTSxHQUFHalIsS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBR04sS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRTdDLE1BQU0rZSxVQUFVLEdBQUc5Z0IsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUM7WUFFcEMsTUFBTVUsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRVM7Y0FBSyxDQUFFLEdBQUdULEtBQUssQ0FBQ0UsYUFBYTtjQUNyQ25CLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7Y0FDNUIsSUFBSVQsS0FBSyxDQUFDWCxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QjlCLFFBQVEsQ0FBQ3lILElBQUksRUFBRTs7WUFFakIsQ0FBQztZQUVELE1BQU15TSxNQUFNLEdBQUd6UixLQUFLLElBQUl6QyxRQUFRLENBQUN5SCxJQUFJLEVBQUU7WUFDdkM7WUFFQSxPQUNDL0gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcWdCLGFBQUEsQ0FBQVcscUJBQXFCO2NBQ3JCQyxRQUFRO2NBQ1JsZSxLQUFLLEVBQUV1UCxNQUFNO2NBQ2IzUSxJQUFJLEVBQUVBLElBQUk7Y0FDVm9TLE1BQU0sRUFBRUEsTUFBTTtjQUNkMVIsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCZixLQUFLLEVBQUV5UixNQUFBLENBQUFxTjtZQUFtQixHQUUxQjdnQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGFBQ0U4Z0IsUUFBUSxHQUFHdmhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU84Z0IsUUFBUSxFLEtBQVUsR0FBRyxJQUFJLEVBQzNDSixVQUFVLENBQUM3YixLQUFLLENBQ2IsRUFDTHRGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcWdCLGFBQUEsQ0FBQWEsYUFBYTtjQUFDNWQsT0FBTyxFQUFDLE1BQU07Y0FBQ00sTUFBTSxFQUFDLEtBQUs7Y0FBQzlCLElBQUksRUFBQztZQUFLLEdBQ25EdUUsV0FBVyxDQUFDdkIsT0FBTyxDQUFDakMsR0FBRyxDQUNULENBQ1gsQ0FDRyxFQUNWdEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FnQixhQUFBLENBQUFjLFlBQVksUUFDWjVoQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0IsTUFBQSxDQUFBc2Ysa0JBQWtCO2NBQUMzZSxJQUFJLEVBQUVBLElBQUk7Y0FBRTZSLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2hDLENBQ1YsQ0FDaUIsQ0FDbkI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREEsSUFBQTlULEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE0VSxRQUFBLEdBQUE1VSxPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFFQSxNQUFNNlUsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUU1VSxLQUFBLENBQUE2VSxLQUFLO1lBQ1p6QixRQUFRLEVBQUVwVCxLQUFBLENBQUFtVCxRQUFRO1lBQ2xCMkIsS0FBSyxFQUFFOVUsS0FBQSxDQUFBK1UsS0FBSztZQUNaQyxRQUFRLEVBQUVoVixLQUFBLENBQUFpVixRQUFRO1lBQ2xCQyxNQUFNLEVBQUVsVixLQUFBLENBQUFtVixNQUFNO1lBQ2RDLEtBQUssRUFBRVYsUUFBQSxDQUFBVztXQUNQO1VBRUssU0FBVXFNLFVBQVVBLENBQUNwTSxLQUFLO1lBQy9CLE1BQU07Y0FBRXBWLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaVU7WUFBWSxDQUFFLEdBQUcsSUFBQXJVLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTTtjQUFFNkIsSUFBSTtjQUFFbEIsSUFBSTtjQUFFd1UsS0FBSztjQUFFdlUsTUFBTTtjQUFFcUMsS0FBSztjQUFFK2QsUUFBUTtjQUFFakI7WUFBUyxDQUFFLEdBQUc3SyxLQUFLO1lBQ3ZFLE1BQU07Y0FBRTNUO1lBQUssQ0FBRSxHQUFHeEIsUUFBUTtZQUUxQixNQUFNO2NBQUVnRixLQUFLO2NBQUU4QyxXQUFXO2NBQUVySDtZQUFLLENBQUUsR0FBR1YsS0FBSyxDQUFDeUIsS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLEVBQUVrRCxLQUFLLEdBQUdnYixTQUFTLENBQUNsZSxJQUFJLENBQUMsRUFBRWtELEtBQUssR0FBR2xELElBQUksQ0FBQztZQUN6RyxNQUFNLENBQUN5VCxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUc5VixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQztZQUVyRSxJQUFBZixNQUFBLENBQUFZLFNBQVMsRUFBQyxDQUFDSCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCZ1UsZ0JBQWdCLENBQUNoVSxLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQztZQUNGLE1BQU1VLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCK1MsZ0JBQWdCLENBQUMvUyxLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDO2NBQzNDLE1BQU07Z0JBQUVwQixJQUFJO2dCQUFFb0I7Y0FBSyxDQUFFLEdBQUdULEtBQUssQ0FBQ0UsYUFBYTtjQUMzQzNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDdEMsQ0FBQztZQUVELElBQUksQ0FBQ25ELEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEVBQUU7Y0FDdkJ5RixPQUFPLENBQUNrTyxJQUFJLENBQUMsZ0RBQWdEM1QsSUFBSSxFQUFFLENBQUM7Y0FDcEUsT0FBTyxJQUFJOztZQUdaLE1BQU02RCxLQUFLLEdBQUc7Y0FBRVgsS0FBSztjQUFFOEMsV0FBVztjQUFFNUUsS0FBSyxFQUFFcVM7WUFBYSxDQUFFO1lBRTFEO1lBRUEsTUFBTUcsS0FBSyxHQUFHbEIsVUFBVSxDQUFDNVQsSUFBSSxDQUFDO1lBRTlCLE9BQ0NsQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNFVSxNQUFNLEdBQ05uQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBTSxHQUNwQlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsYUFDRThnQixRQUFRLEdBQUd2aEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsZUFBTzhnQixRQUFRLEUsS0FBVSxHQUFHLElBQUksRUFDM0N4Z0IsS0FBSyxDQUNGLENBQ0EsR0FDSCxJQUFJLEVBQ1JmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1VixLQUFLO2NBQUNqUyxPQUFPLEVBQUMsVUFBVTtjQUFDM0IsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FBTTZELEtBQUs7Y0FBRW5ELFFBQVEsRUFBRUEsUUFBUTtjQUFFMFIsTUFBTSxFQUFFRDtZQUFZLEVBQUksQ0FDeEY7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEsSUFBQXZVLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVTJnQixnQkFBZ0JBLENBQUM7WUFBRTFDLFVBQVU7WUFBRXRZLFFBQVE7WUFBRWdDO1VBQU0sQ0FBRTtZQUNoRSxNQUFNO2NBQ0xmLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsT0FDQ1AsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQXNDLEdBQ3ZEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0ksUUFBUTtjQUFDZ0IsT0FBTyxFQUFFUyxRQUFRO2NBQUU5QixRQUFRLEVBQUVvYTtZQUFVLEdBQ3hFcFgsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLFNBQVM7Y0FBQ29CLE9BQU8sRUFBRXlDLE1BQU07Y0FBRTlELFFBQVEsRUFBRW9hO1lBQVUsR0FDN0RwWCxXQUFXLENBQUN2QixPQUFPLENBQUN3QyxJQUFJLENBQ2pCLENBQ0Q7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTVILEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE0VSxRQUFBLEdBQUE1VSxPQUFBO1VBRUEsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFFQSxNQUFNNlUsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUU1VSxLQUFBLENBQUE2VSxLQUFLO1lBQ1p6QixRQUFRLEVBQUVwVCxLQUFBLENBQUFtVCxRQUFRO1lBQ2xCMkIsS0FBSyxFQUFFOVUsS0FBQSxDQUFBK1UsS0FBSztZQUNaQyxRQUFRLEVBQUVoVixLQUFBLENBQUFpVixRQUFRO1lBQ2xCQyxNQUFNLEVBQUVsVixLQUFBLENBQUFtVixNQUFNO1lBQ2RDLEtBQUssRUFBRVYsUUFBQSxDQUFBVztXQUNQO1VBRUssU0FBVXZVLFNBQVNBLENBQUM7WUFBRUMsSUFBSSxHQUFHLE9BQU87WUFBRUMsTUFBTSxHQUFHO1VBQUksQ0FBRTtZQUMxRCxNQUFNO2NBQUVkLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaVU7WUFBWSxDQUFFLEdBQUcsSUFBQXJVLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTTtjQUFFdUI7WUFBSyxDQUFFLEdBQUd4QixRQUFRO1lBQzFCLE1BQU1nZ0IsU0FBUyxHQUFHeGUsS0FBSyxDQUFDd2UsU0FBUyxDQUFDcGYsSUFBSSxDQUFDO1lBQ3ZDLE1BQU1xZixNQUFNLEdBQUd6USxNQUFNLENBQUNDLElBQUksQ0FBQ3VRLFNBQVMsQ0FBQztZQUVyQyxNQUFNeGQsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRVgsSUFBSTtnQkFBRW9CO2NBQUssQ0FBRSxHQUFHVCxLQUFLLENBQUNFLGFBQWE7Y0FDM0MzQyxRQUFRLENBQUN3QixLQUFLLENBQUM0RixHQUFHLENBQUM7Z0JBQUUsQ0FBQ3RGLElBQUksR0FBR29CO2NBQUssQ0FBRSxDQUFDO1lBQ3RDLENBQUM7WUFFRCxNQUFNc2UsS0FBSyxHQUFHdkIsTUFBTSxDQUFDakosTUFBTSxDQUFDbFYsSUFBSSxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUNzVixRQUFRLENBQUN0VixJQUFJLENBQUMsQ0FBQztZQUNoRixNQUFNZ2YsTUFBTSxHQUFHVSxLQUFLLENBQUNyVyxHQUFHLENBQUMsQ0FBQ3JKLElBQUksRUFBRXNULEtBQUssS0FBSTtjQUN4QyxJQUFJLENBQUNyVixLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQyxFQUFFO2dCQUN2QnlGLE9BQU8sQ0FBQ2tPLElBQUksQ0FBQyxnREFBZ0QzVCxJQUFJLEVBQUUsQ0FBQzs7Y0FHckU7Y0FFQSxJQUNDLE9BQU9rZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsS0FBSyxRQUFRLElBQ2xDLE9BQU9rZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUlrZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ2xCLElBQUksS0FBSyxPQUFRLEVBQ3hFO2dCQUNELE9BQ0NsQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0IsTUFBQSxDQUFBb2dCLFVBQVU7a0JBQ1Z2QixTQUFTLEVBQUVBLFNBQVM7a0JBQ3BCaUIsUUFBUSxFQUFFakIsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLENBQUNtZixRQUFRO2tCQUNsQzVWLEdBQUcsRUFBRSxHQUFHdkosSUFBSSxJQUFJc1QsS0FBSyxFQUFFO2tCQUN2QnZVLE1BQU0sRUFBRUEsTUFBTTtrQkFDZHVVLEtBQUssRUFBRUEsS0FBSztrQkFDWnhVLElBQUksRUFBRW9mLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxDQUFDbEIsSUFBSTtrQkFDMUJrQixJQUFJLEVBQUVBO2dCQUFJLEVBQ1Q7O2NBSUosTUFBTTRULEtBQUssR0FBR2xCLFVBQVUsQ0FBQ3dMLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxDQUFDbEIsSUFBSSxDQUFDO2NBRTlDLE1BQU07Z0JBQUVvRSxLQUFLO2dCQUFFOEM7Y0FBVyxDQUFFLEdBQUcvSCxLQUFLLENBQUN5QixLQUFLLENBQUNNLElBQUksQ0FBQztjQUNoRCxNQUFNNkQsS0FBSyxHQUFHO2dCQUFFWCxLQUFLO2dCQUFFOEMsV0FBVztnQkFBRTVFLEtBQUssRUFBRTFCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLElBQUk7Y0FBRSxDQUFFO2NBRTlELE9BQ0NwQyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVYsS0FBSztnQkFDTGxULFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJpQixPQUFPLEVBQUMsVUFBVTtnQkFDbEJ3ZCxRQUFRLEVBQUVqQixTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQ21mLFFBQVE7Z0JBQ2xDNVYsR0FBRyxFQUFFLEdBQUd2SixJQUFJLElBQUlzVCxLQUFLLEVBQUU7Z0JBQ3ZCdFQsSUFBSSxFQUFFQSxJQUFJO2dCQUNWNlIsSUFBSSxFQUFFcU0sU0FBUyxDQUFDbGUsSUFBSSxDQUFDO2dCQUNyQm9TLE1BQU0sRUFBRUQsWUFBWTtnQkFBQSxHQUNoQnRPO2NBQUssRUFDUjtZQUVKLENBQUMsQ0FBQztZQUVGLE9BQU9qRyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQSxRQUFHMGdCLE1BQU0sQ0FBSTtVQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQWpoQixLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNFUsUUFBQSxHQUFBNVUsT0FBQTtVQUVBLE1BQU02VSxVQUFVLEdBQUc7WUFDbEJDLEtBQUssRUFBRTVVLEtBQUEsQ0FBQTZVLEtBQUs7WUFDWnpCLFFBQVEsRUFBRXBULEtBQUEsQ0FBQW1ULFFBQVE7WUFDbEIyQixLQUFLLEVBQUU5VSxLQUFBLENBQUErVSxLQUFLO1lBQ1pDLFFBQVEsRUFBRWhWLEtBQUEsQ0FBQWlWLFFBQVE7WUFDbEJDLE1BQU0sRUFBRWxWLEtBQUEsQ0FBQW1WLE1BQU07WUFDZEMsS0FBSyxFQUFFVixRQUFBLENBQUFXO1dBQ1A7VUFFSyxTQUFVMUMsa0JBQWtCQSxDQUFDLEVBQUU7WUFDcEMsTUFBTTtjQUFFelMsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELE1BQU07Y0FBRXVCO1lBQUssQ0FBRSxHQUFHeEIsUUFBUTtZQUMxQixNQUFNaWdCLE1BQU0sR0FBR3pRLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDak8sS0FBSyxDQUFDd2UsU0FBUyxDQUFDO1lBQzNDLE1BQU14ZCxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNO2dCQUFFWCxJQUFJO2dCQUFFb0I7Y0FBSyxDQUFFLEdBQUdULEtBQUssQ0FBQ0UsYUFBYTtjQUMzQzNDLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztnQkFBRSxDQUFDdEYsSUFBSSxHQUFHb0I7Y0FBSyxDQUFFLENBQUM7WUFDdEMsQ0FBQztZQUVELE1BQU00ZCxNQUFNLEdBQUdiLE1BQU0sQ0FBQzlVLEdBQUcsQ0FBQyxDQUFDckosSUFBSSxFQUFFc1QsS0FBSyxLQUFJO2NBQ3pDLElBQUksQ0FBQ3JWLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCeUYsT0FBTyxDQUFDa08sSUFBSSxDQUFDLGdEQUFnRDNULElBQUksRUFBRSxDQUFDOztjQUVyRSxNQUFNO2dCQUFFa0QsS0FBSztnQkFBRThDO2NBQVcsQ0FBRSxHQUFHL0gsS0FBSyxDQUFDeUIsS0FBSyxDQUFDTSxJQUFJLENBQUM7Y0FDaEQsTUFBTTZELEtBQUssR0FBRztnQkFBRVgsS0FBSztnQkFBRThDLFdBQVc7Z0JBQUU1RSxLQUFLLEVBQUUxQixLQUFLLENBQUNNLElBQUksQ0FBQyxJQUFJO2NBQUUsQ0FBRTtjQUU5RCxJQUFJLE9BQU9OLEtBQUssQ0FBQ3dlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSU4sS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLENBQUNsQixJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN4RixNQUFNOFUsS0FBSyxHQUFHbEIsVUFBVSxDQUFDaFQsS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLENBQUNsQixJQUFJLENBQUM7Z0JBQ3BELE9BQ0NsQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVYsS0FBSztrQkFDTHJWLFNBQVMsRUFBQyxrQkFBa0I7a0JBQzVCZ0wsR0FBRyxFQUFFLEdBQUd2SixJQUFJLElBQUlzVCxLQUFLLEVBQUU7a0JBQ3ZCdFQsSUFBSSxFQUFFQSxJQUFJO2tCQUFBLEdBQ042RCxLQUFLO2tCQUNUbkQsUUFBUSxFQUFFQTtnQkFBUSxFQUNqQjs7Y0FHSjtjQUNBLE1BQU1rVCxLQUFLLEdBQUdsQixVQUFVLENBQUNoVCxLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsQ0FBQztjQUMvQyxPQUNDcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VWLEtBQUs7Z0JBQUNyVixTQUFTLEVBQUMsa0JBQWtCO2dCQUFDZ0wsR0FBRyxFQUFFLEdBQUd2SixJQUFJLElBQUlzVCxLQUFLLEVBQUU7Z0JBQUV0VCxJQUFJLEVBQUVBLElBQUk7Z0JBQUEsR0FBTTZELEtBQUs7Z0JBQUVuRCxRQUFRLEVBQUVBO2NBQVEsRUFBSTtZQUU1RyxDQUFDLENBQUM7WUFFRixPQUNDOUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FDQ1QsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxDQUNwQixFQUNUZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQU0yZ0IsTUFBTSxDQUFPLENBQ2QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQSxJQUFBcGhCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVBOzs7OztVQUtNLFNBQVUwZ0IsT0FBT0EsQ0FBQ2plLFVBQVU7WUFDakMsTUFBTSxDQUFDd2IsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR25lLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNO2NBQ0x4QixLQUFLO2NBQ0xDLFFBQVE7Y0FDUnVHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTXFILE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsSUFBSTtnQkFDSHVXLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE1BQU03ZCxRQUFRLENBQUN5SCxJQUFJLEVBQUU7Z0JBQ3JCb1csYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDcEJ6YixVQUFVLENBQUMsT0FBTyxDQUFDO2VBQ25CLENBQUMsT0FBT29SLENBQUMsRUFBRTtnQkFDWGpNLE9BQU8sQ0FBQzhNLEtBQUssQ0FBQ2IsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBQ0QsTUFBTWlPLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2NBQ3pCLE1BQU1oUixTQUFTLEdBQUd6USxRQUFRLENBQUN3QixLQUFLLENBQUNpUCxTQUFTO2NBQzFDelEsUUFBUSxDQUFDd0IsS0FBSyxDQUFDd0gsTUFBTSxFQUFFO2NBQ3ZCaEosUUFBUSxDQUFDb0gsR0FBRyxDQUFDO2dCQUFFcUo7Y0FBUyxDQUFFLENBQUM7Y0FFM0JyTyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxPQUFPO2NBQUV3YixVQUFVO2NBQUVDLGFBQWE7Y0FBRTVZLE9BQU8sRUFBRTtnQkFBRXFDLE1BQU07Z0JBQUVoQyxRQUFRLEVBQUVtYztjQUFZO1lBQUUsQ0FBRTtVQUNsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQS9oQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBK2hCLGFBQUEsR0FBQS9oQixPQUFBO1VBQ0EsSUFBQWdpQixTQUFBLEdBQUFoaUIsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQXVkLFlBQUEsR0FBQXZkLE9BQUE7VUFDTSxTQUFVMEMsS0FBS0EsQ0FBQTtZQUNwQixNQUFNLENBQUNnYixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUc1ZCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTtjQUNMdkIsUUFBUTtjQUNSQSxRQUFRLEVBQUU7Z0JBQUV3QjtjQUFLLENBQUU7Y0FDbkJ6QixLQUFLO2NBQ0x3RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU1pUSxXQUFXLEdBQUdBLENBQUEsS0FBTW9OLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNMUosSUFBSSxHQUFHblMsS0FBSyxDQUFDb2dCLGFBQWEsRUFBRTtZQUNsQyxNQUFNM0IsTUFBTSxHQUFHelEsTUFBTSxDQUFDQyxJQUFJLENBQUNqTyxLQUFLLENBQUN3ZSxTQUFTLENBQUM7WUFDM0MsTUFBTXJhLEtBQUssR0FBRztjQUFFZCxPQUFPLEVBQUVxTCxXQUFXO2NBQUUxTSxRQUFRLEVBQUV4RCxRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUs7WUFBRSxDQUFFO1lBRXhFLE1BQU1xZixNQUFNLEdBQUdiLE1BQU0sQ0FBQzlVLEdBQUcsQ0FBQyxDQUFDckosSUFBSSxFQUFFc1QsS0FBSyxLQUFJO2NBQ3pDLElBQUksT0FBTzVULEtBQUssQ0FBQ3dlLFNBQVMsQ0FBQ2xlLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSU4sS0FBSyxDQUFDd2UsU0FBUyxDQUFDbGUsSUFBSSxDQUFDLENBQUNsQixJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN4RixPQUFPbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3doQixTQUFBLENBQUFuQyxnQkFBZ0I7a0JBQUNuVSxHQUFHLEVBQUUsR0FBR3ZKLElBQUksSUFBSXNULEtBQUssRUFBRTtrQkFBRXRULElBQUksRUFBRUE7Z0JBQUksRUFBSTs7Y0FHakUsT0FBT3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN1aEIsYUFBQSxDQUFBN0IscUJBQXFCO2dCQUFDeFUsR0FBRyxFQUFFLEdBQUd2SixJQUFJLElBQUlzVCxLQUFLLEVBQUU7Z0JBQUV0VCxJQUFJLEVBQUVBLElBQUk7Z0JBQUU2UixJQUFJLEVBQUVBO2NBQUksRUFBSTtZQUNsRixDQUFDLENBQUM7WUFFRixPQUNDalUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTZCLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN5QixLQUFLLENBQUNmLEtBQUssQ0FBTSxFQUM1QmYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdDLEdBQzlDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUQsV0FBQSxDQUFBc0IsTUFBTTtjQUFDbkIsT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLa0MsS0FBSztjQUFFMUQsSUFBSSxFQUFDO1lBQVEsR0FDN0N1RSxXQUFXLENBQUN2QixPQUFPLENBQUNtRSxNQUFNLENBQ25CLENBQ0osQ0FDRSxFQUNSMFgsTUFBTSxFQUNQcGhCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMrYyxZQUFBLENBQUEvSSxrQkFBa0I7Y0FBQzlPLElBQUksRUFBRWdZLGVBQWU7Y0FBRTNWLE9BQU8sRUFBRXdJO1lBQVcsRUFBSSxDQUNqRTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBcFAsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0IsT0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBRU0sU0FBVWtpQixjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRTloQixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDb0IsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN2QixRQUFRLENBQUN3QixLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFbEYsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTUwsSUFBSSxHQUFHckIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTztjQUN2REgsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBQU4sTUFBQSxDQUFBWSxTQUFTLEVBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxFQUFFMEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDO1lBQ2pELElBQUFYLE1BQUEsQ0FBQVksU0FBUyxFQUFDLENBQUMzQixRQUFRLENBQUN3QixLQUFLLENBQUMsRUFBRUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDVixLQUFBLENBQUFiLGFBQUEsQ0FBQWEsS0FBQSxDQUFBWixRQUFBLFFBQ0NZLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBcUIsR0FDbkNXLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NXLEtBQUEsQ0FBQWIsYUFBQSxDQUFDYyxPQUFBLENBQUFXLGNBQWMsT0FBRyxFQUNsQlosS0FBQSxDQUFBYixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QlcsS0FBQSxDQUFBYixhQUFBLENBQUNnQixNQUFBLENBQUFVLGFBQWE7Y0FBQ2pCLElBQUksRUFBQyxVQUFVO2NBQUNrQixJQUFJLEVBQUM7WUFBYSxFQUFHLEVBQ3BEZCxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE1BQU0sRUFBRTtZQUFLLEVBQUksQ0FDdEMsQ0FDRyxDQUNMLEVBQ05HLEtBQUEsQ0FBQWIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NXLEtBQUEsQ0FBQWIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJXLEtBQUEsQ0FBQWIsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdEIsS0FBSyxDQUFNLEVBQ2hETyxLQUFBLENBQUFiLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJOLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxRQUFRLENBQUN3QixLQUFLLENBQUNyQixRQUFRLEVBQ3pDTSxLQUFBLENBQUFiLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQzRCLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1RqQixLQUFBLENBQUFiLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVyxLQUFBLENBQUFiLGFBQUEsQ0FBQ04sS0FBQSxDQUFBYyxTQUFTLE9BQUcsQ0FDUixDQUNELENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQWpCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTJELFdBQUEsR0FBQTNELE9BQUE7VUFDQSxJQUFBbWlCLE9BQUEsR0FBQW5pQixPQUFBO1VBQ0EsSUFBQW9pQixXQUFBLEdBQUFwaUIsT0FBQTtVQUNPO1VBQVUsU0FBVXNPLFFBQVFBLENBQUM7WUFBRWpLLFFBQVE7WUFBRWEsT0FBTztZQUFFbVksTUFBTSxHQUFHLElBQUk7WUFBRSxHQUFHN0g7VUFBSyxDQUFFO1lBQ2pGLE1BQU02TSxXQUFXLEdBQUdoRixNQUFNLEdBQUcsTUFBTStFLFdBQUEsQ0FBQUUsWUFBWSxDQUFDQyxhQUFhLENBQUNyZCxPQUFPLENBQUMsR0FBR0EsT0FBTztZQUNoRixPQUNDbkYsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXNCLE1BQU07Y0FBQSxHQUFLdVEsS0FBSztjQUFFbFQsSUFBSSxFQUFFbkIsTUFBQSxDQUFBcWhCLEtBQUssQ0FBQ0MsT0FBTztjQUFFdmQsT0FBTyxFQUFFbWQ7WUFBVyxHQUMxRGhlLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVcWUsWUFBWUEsQ0FBQztZQUFFcmUsUUFBUTtZQUFFYSxPQUFPO1lBQUVtWSxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUc3SDtVQUFLLENBQUU7WUFDckYsTUFBTTZNLFdBQVcsR0FBR2hGLE1BQU0sR0FBRyxNQUFNK0UsV0FBQSxDQUFBRSxZQUFZLENBQUNDLGFBQWEsQ0FBQ3JkLE9BQU8sQ0FBQyxHQUFHQSxPQUFPO1lBQ2hGLE9BQ0NuRixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMmhCLE9BQUEsQ0FBQXZQLFVBQVU7Y0FBQSxHQUFLNEMsS0FBSztjQUFFbFQsSUFBSSxFQUFFbkIsTUFBQSxDQUFBcWhCLEtBQUssQ0FBQ0MsT0FBTztjQUFFdmQsT0FBTyxFQUFFbWQ7WUFBVyxHQUM5RGhlLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBWCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVTJpQixrQkFBa0JBLENBQUM7WUFBRWpkLElBQUk7WUFBRXFDO1VBQU8sQ0FBRTtZQUNuRCxNQUFNO2NBQ0xuQixLQUFLO2NBQ0x4RyxLQUFLO2NBQ0x3aUIsU0FBUztjQUNUaGMsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixJQUFJLENBQUNvRixJQUFJLEVBQUUsT0FBTyxLQUFLO1lBQ3ZCLE1BQU1aLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCOGQsU0FBUyxFQUFFO2NBQ1hoYyxLQUFLLENBQUNpYyxZQUFZLENBQUN0VixTQUFTLENBQUM7Y0FDN0J4RixPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsT0FDQ2hJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQ1pPLElBQUk7Y0FDSjVFLEtBQUssRUFBRVYsS0FBSyxDQUFDc0UsS0FBSyxDQUFDZSxNQUFNLENBQUMzRSxLQUFLO2NBQy9CdU4sSUFBSSxFQUFFak8sS0FBSyxDQUFDc0UsS0FBSyxDQUFDZSxNQUFNLENBQUN0QixXQUFXO2NBQ3BDNEQsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCcEMsUUFBUSxFQUFFb0MsT0FBTztjQUNqQjNDLFVBQVUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFd0IsV0FBVyxDQUFDdkIsT0FBTyxDQUFDQztjQUFPLENBQUU7Y0FDbERDLFNBQVMsRUFBRTtnQkFBRUgsS0FBSyxFQUFFd0IsV0FBVyxDQUFDdkIsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDaERYLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2dCQUNmQSxTQUFTLEVBQUU7Y0FDWjtZQUFDLEVBQ0E7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQXBCLE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVd1Usa0JBQWtCQSxDQUFDO1lBQUU5TyxJQUFJO1lBQUVxQztVQUFPLENBQUU7WUFDbkQsTUFBTSxDQUFDWixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FDTHhCLEtBQUssRUFBRTtnQkFBRU8sVUFBVSxFQUFFUDtjQUFLLENBQUU7Y0FDNUJDLFFBQVE7Y0FDUnVHLEtBQUssRUFBRTtnQkFDTkMsV0FBVyxFQUFFO2tCQUFFdkI7Z0JBQU87Y0FBRTtZQUN4QixDQUNELEdBQUcsSUFBQXJGLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsSUFBSSxDQUFDb0YsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNWixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hzQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQlcsT0FBTyxFQUFFO2dCQUNUMUgsUUFBUSxDQUFDd0IsS0FBSyxDQUFDeUgsS0FBSyxFQUFFO2dCQUN0QixNQUFNakosUUFBUSxDQUFDeUgsSUFBSSxFQUFFO2VBQ3JCLENBQUMsT0FBTytMLENBQUMsRUFBRTtnQkFDWGpNLE9BQU8sQ0FBQzhNLEtBQUssQ0FBQ2IsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1R6TSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQ3JILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQ1pPLElBQUk7Y0FDSnFDLE9BQU8sRUFBRUEsT0FBTztjQUNoQmpELFNBQVMsRUFBRUEsU0FBUztjQUNwQk0sVUFBVSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0M7Y0FBTyxDQUFFO2NBQ3RDQyxTQUFTLEVBQUU7Z0JBQUVILEtBQUssRUFBRUMsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDcENFLFFBQVEsRUFBRW9DO1lBQU8sR0FFakJoSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUN1UyxXQUFXLENBQUM3UixLQUFLLENBQU0sRUFDbENmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLFlBQUlKLEtBQUssQ0FBQ3VTLFdBQVcsQ0FBQ3hPLFdBQVcsQ0FBSyxDQUN4QixDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUEySixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBOGlCLFFBQUEsR0FBQTlpQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFFQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNNLFNBQVUraUIsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FDTDFpQixRQUFRO2NBQ1J1RyxLQUFLO2NBQ0x4RyxLQUFLO2NBQ0wwUyxNQUFNO2NBQ05sTSxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ3lTLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR2pULE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUN1TyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyUSxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTW9oQixNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJbFEsTUFBTSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ25CSCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCOztjQUdEcE0sS0FBSyxDQUFDaWMsWUFBWSxDQUFDdFYsU0FBUyxDQUFDO2NBQzdCdVYsUUFBQSxDQUFBRyxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFFRCxNQUFNQyxTQUFTLEdBQUd0aEIsS0FBSyxJQUFHO2NBQ3pCO1lBQUEsQ0FDQTtZQUNELE1BQU1pRCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QmtPLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnBNLEtBQUssQ0FBQ2ljLFlBQVksQ0FBQ3RWLFNBQVMsQ0FBQztjQUM3QnVWLFFBQUEsQ0FBQUcsT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDZixDQUFDO1lBQ0QsTUFBTUUsaUJBQWlCLEdBQUdBLENBQUEsS0FBTWhULGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUNwRSxNQUFNaUQsYUFBYSxHQUFHQSxDQUFBLEtBQU1KLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDalQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUF5UixVQUFVO2NBQ1YxTixPQUFPLEVBQUU4ZCxNQUFNO2NBQ2ZsaUIsS0FBSyxFQUFFK0YsV0FBVyxDQUFDdkIsT0FBTyxDQUFDNGQsSUFBSTtjQUMvQjVnQixJQUFJLEVBQUMsV0FBVztjQUNoQjVCLFNBQVMsRUFBQyxRQUFRO2NBQ2xCb0QsT0FBTyxFQUFDO1lBQVMsRUFDaEIsRUFDRi9ELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQ3hLLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUVrZTtZQUFpQixHQUNwRHZjLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FDbkIsRUFFVndFLGVBQWUsSUFDZmhULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUF5QixZQUFZO2NBQUNMLFNBQVMsRUFBRUEsU0FBUztjQUFFYSxRQUFRLEVBQUV5TjtZQUFhLEdBQzFEclQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsY0FBTUosS0FBSyxDQUFDdU0sTUFBTSxDQUFDbEgsTUFBTSxDQUFPLENBRWpDLEVBQ0EwSyxlQUFlLElBQ2ZwUSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFAsV0FBQSxDQUFBTSx1QkFBdUI7Y0FDdkI5SyxJQUFJLEVBQUV5SyxlQUFlO2NBQ3JCTSxRQUFRO2NBQ1JLLFNBQVMsRUFBRXpRLFFBQVEsQ0FBQ3lRLFNBQVM7Y0FDN0IvSSxPQUFPLEVBQUVxYixpQkFBaUI7Y0FDMUJqVixVQUFVLEVBQUVnVjtZQUFTLEVBRXRCLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RUEsSUFBQXBqQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQXFqQixTQUFBLEdBQUFyakIsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUErTixhQUFBLEdBQUEvTixPQUFBO1VBRU0sU0FBVWdSLHlCQUF5QkEsQ0FBQztZQUFFL1AsSUFBSTtZQUFFOEc7VUFBTyxDQUFFO1lBQzFELE1BQU07Y0FDTDNILEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFeEIsTUFBTSxDQUFDeVQsS0FBSyxFQUFFdVAsUUFBUSxDQUFDLEdBQUd2akIsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU07Y0FBRXFTLGdCQUFnQjtjQUFFOU07WUFBUSxDQUFFLEdBQUcsSUFBQTRHLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFDM0QsTUFBTXFWLE1BQU0sR0FBRztjQUNkMWdCLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQndnQixRQUFRLENBQUN4Z0IsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0QyQixPQUFPLEVBQUUsTUFBTXBDLEtBQUssSUFBRztnQkFDdEIsTUFBTW1SLGdCQUFnQixDQUFDaFQsSUFBSSxFQUFFOFMsS0FBSyxDQUFDO2dCQUNuQ2hNLE9BQU8sRUFBRTtjQUNWO2FBQ0E7WUFFRCxPQUNDaEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tELE1BQUEsQ0FBQW1ILEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRXBGLElBQUk7Y0FBQ2hGLFNBQVMsRUFBQyw2QkFBNkI7Y0FBQ3FILE9BQU8sRUFBRUE7WUFBTyxHQUN6RmhJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGlCQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNrZCxNQUFNLENBQUNyYyxJQUFJLENBQUMsQ0FBQ0gsS0FBSyxDQUFNLEVBQ25DZixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNrZCxNQUFNLENBQUNyYyxJQUFJLENBQUMsQ0FBQ2tELFdBQVcsQ0FBUSxDQUNyQyxFQUNUcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBOEgsSUFBSSxRQUNKakksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBbVQsUUFBUTtjQUNSaE8sS0FBSyxFQUFFakYsS0FBSyxDQUFDa2QsTUFBTSxDQUFDaEssUUFBUSxDQUFDak8sS0FBSztjQUNsQ2xELElBQUksRUFBQyxPQUFPO2NBQ1oyQixPQUFPLEVBQUMsVUFBVTtjQUNsQlAsS0FBSyxFQUFFd1EsS0FBSztjQUNabFIsUUFBUSxFQUFFMGdCLE1BQU0sQ0FBQzFnQixRQUFRO2NBQ3pCc0YsV0FBVyxFQUFFL0gsS0FBSyxDQUFDa2QsTUFBTSxDQUFDaEssUUFBUSxDQUFDbkw7WUFBVyxFQUM3QyxFQUNGcEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWdCLEdBQ2pDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNmlCLFNBQUEsQ0FBQS9VLFFBQVE7Y0FBQ3hLLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUVxZSxNQUFNLENBQUNyZTtZQUFPLEdBQ2pEMkIsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixDQUNILENBQ0gsRUFFUHhPLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUEwVixnQkFBZ0I7Y0FBQ3JjLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUFwSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQXFqQixTQUFBLEdBQUFyakIsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQVFNLFNBQVV5akIscUJBQXFCQSxDQUFDO1lBQUUxYixPQUFPO1lBQUV1TyxlQUFlLEdBQUc7VUFBRSxDQUFFO1lBQ3RFLE1BQU07Y0FDTGxXLEtBQUs7Y0FDTEMsUUFBUTtjQUNSeVMsTUFBTTtjQUNOMEssUUFBUTtjQUNSNVcsS0FBSyxFQUFFO2dCQUFFQztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBNUcsUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUN4QixNQUFNLENBQUM2RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckgsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ21TLEtBQUssRUFBRXVQLFFBQVEsQ0FBQyxHQUFHdmpCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUM4UyxLQUFLLEVBQUVnUCxRQUFRLENBQUMsR0FBRzNqQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTJoQixNQUFNLEdBQUc7Y0FDZDFnQixRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakJ3Z0IsUUFBUSxDQUFDeGdCLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTyxLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNEMkIsT0FBTyxFQUFFLE1BQU1wQyxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hzRSxXQUFXLENBQUMsSUFBSSxDQUFDO2tCQUVqQixNQUFNb0IsUUFBUSxHQUFHLE1BQU1uSSxRQUFRLENBQUN3QixLQUFLLENBQUMwTSxRQUFRLENBQUN3RixLQUFLLEVBQUU7b0JBQUUsR0FBR3VDO2tCQUFlLENBQUUsQ0FBQztrQkFFN0U7a0JBQ0EsSUFBSTlOLFFBQVEsQ0FBQ2tNLEtBQUssRUFBRTtvQkFDbkIsTUFBTWlQLFFBQVEsR0FBR0EsQ0FBQ2pQLEtBQUssRUFBRTRMLE1BQU0sR0FBRyxFQUFFLEtBQUk7c0JBQ3ZDLE1BQU01VSxHQUFHLEdBQUd0TCxLQUFLLENBQUNtSyxNQUFNLEdBQUdtSyxLQUFLLENBQUMsR0FBR0EsS0FBSyxHQUFHLFNBQVM7c0JBQ3JELElBQUksQ0FBQyxDQUFDNEwsTUFBTSxDQUFDMVcsTUFBTSxFQUFFO3dCQUNwQixPQUFPeEosS0FBSyxDQUFDbUssTUFBTSxDQUFDbUIsR0FBRyxDQUFDLEdBQUcsSUFBSTRVLE1BQU0sRUFBRTs7c0JBRXhDLE9BQU9sZ0IsS0FBSyxDQUFDbUssTUFBTSxDQUFDbUIsR0FBRyxDQUFDO29CQUN6QixDQUFDO29CQUVEZ1ksUUFBUSxDQUFDQyxRQUFRLENBQUNuYixRQUFRLENBQUNrTSxLQUFLLEVBQUVsTSxRQUFRLENBQUM4WCxNQUFNLENBQUMsQ0FBQztvQkFDbkRsWixXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNsQjs7a0JBRUQsTUFBTXZGLEtBQUssR0FBR3hCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQ3VjLE9BQU8sRUFBRTtrQkFFdEM7a0JBQ0FaLFFBQVEsQ0FBQztvQkFBRTNiO2tCQUFLLENBQUUsQ0FBQztrQkFDbkI7a0JBQ0FxUyxVQUFVLENBQUMsTUFBSztvQkFDZjlNLFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ1IsQ0FBQyxPQUFPeU0sQ0FBQyxFQUFFO2tCQUNYak0sT0FBTyxDQUFDOE0sS0FBSyxDQUFDLEVBQUUsRUFBRWIsQ0FBQyxFQUFFQSxDQUFDLENBQUMrUCxPQUFPLENBQUM7a0JBQy9CRixRQUFRLENBQUMsU0FBUyxDQUFDOztjQUVyQjthQUNBO1lBRUQsT0FDQzNqQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBbUgsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFcEYsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLGNBQWM7Y0FBQ3FILE9BQU8sRUFBRUE7WUFBTyxHQUMxRWhJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGlCQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNrZCxNQUFNLENBQUN4YyxLQUFLLENBQU0sRUFDN0JmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ25aLFdBQVcsQ0FBUSxDQUMvQixFQUNUcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBOEgsSUFBSSxRQUNKakksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQXFLLGFBQWE7Y0FBQy9YLEtBQUssRUFBRUEsS0FBSztjQUFFc1UsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDN0MzVSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUFtVCxRQUFRO2NBQ1JoTyxLQUFLLEVBQUVqRixLQUFLLENBQUNrZCxNQUFNLENBQUNoSyxRQUFRLENBQUNqTyxLQUFLO2NBQ2xDbEQsSUFBSSxFQUFDLE9BQU87Y0FDWm9CLEtBQUssRUFBRXdRLEtBQUs7Y0FDWmxSLFFBQVEsRUFBRTBnQixNQUFNLENBQUMxZ0IsUUFBUTtjQUN6QnNGLFdBQVcsRUFBRS9ILEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ2hLLFFBQVEsQ0FBQ25MO1lBQVcsRUFDN0MsQ0FDSSxFQUVQcEksTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNmlCLFNBQUEsQ0FBQS9VLFFBQVE7Y0FBQ3hLLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUVxZSxNQUFNLENBQUNyZTtZQUFPLEdBQ2pEMkIsV0FBVyxDQUFDdkIsT0FBTyxDQUFDaUosUUFBUSxDQUNuQixDQUNILEVBQ1R4TyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc04sR0FBQSxDQUFBMFYsZ0JBQWdCO2NBQUNyYyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBOE4sR0FBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUFxakIsU0FBQSxHQUFBcmpCLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVNmpCLGVBQWVBLENBQUM7WUFBRTVpQixJQUFJO1lBQUU4RztVQUFPLENBQUU7WUFDaEQsTUFBTTtjQUNMM0gsS0FBSztjQUNMQyxRQUFRO2NBQ1J1RyxLQUFLLEVBQUU7Z0JBQUVDO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUE1RyxRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQzZHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdySCxNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDa1IsTUFBTSxFQUFFNkcsU0FBUyxDQUFDLEdBQUc1WixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQztjQUMxQ2tpQixZQUFZLEVBQUUsRUFBRTtjQUNoQkMsV0FBVyxFQUFFLEtBQUs7Y0FDbEI5aUI7YUFDQSxDQUFDO1lBRUYsTUFBTXNpQixNQUFNLEdBQUc7Y0FDZDFnQixRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakI2VyxTQUFTLENBQUM7a0JBQ1QsR0FBRzdHLE1BQU07a0JBQ1QsQ0FBQ2hRLEtBQUssQ0FBQ0UsYUFBYSxDQUFDYixJQUFJLEdBQUdXLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTztpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRDJCLE9BQU8sRUFBRSxNQUFNcEMsS0FBSyxJQUFHO2dCQUN0QnNFLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU0vRyxRQUFRLENBQUN3QixLQUFLLENBQUMwTSxRQUFRLENBQUN1RSxNQUFNLENBQUNnUixZQUFZLENBQUM7Z0JBQ2xEL2IsT0FBTyxFQUFFO2dCQUVUbU0sVUFBVSxDQUFDLE1BQUs7a0JBQ2Y5TSxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0NySCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBbUgsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFcEYsSUFBSTtjQUFDaEYsU0FBUyxFQUFDLGNBQWM7Y0FBQ3FILE9BQU8sRUFBRUE7WUFBTyxHQUMxRWhJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEtBQUEsQ0FBQThILElBQUksUUFDSmpJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGlCQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNrZCxNQUFNLENBQUN4YyxLQUFLLENBQU0sRUFDN0JmLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ2tkLE1BQU0sQ0FBQ25aLFdBQVcsQ0FBUSxDQUMvQixFQUVUcEUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBbVQsUUFBUTtjQUNSaE8sS0FBSyxFQUFFakYsS0FBSyxDQUFDa2QsTUFBTSxDQUFDaEssUUFBUSxDQUFDak8sS0FBSztjQUNsQ2xELElBQUksRUFBQyxjQUFjO2NBQ25Cb0IsS0FBSyxFQUFFdVAsTUFBTSxDQUFDZ1IsWUFBWTtjQUMxQmpoQixRQUFRLEVBQUUwZ0IsTUFBTSxDQUFDMWdCLFFBQVE7Y0FDekJzRixXQUFXLEVBQUUvSCxLQUFLLENBQUNrZCxNQUFNLENBQUNoSyxRQUFRLENBQUNuTDtZQUFXLEVBQzdDLENBQ0ksRUFFUHBJLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRFgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZpQixTQUFBLENBQUEvVSxRQUFRO2NBQUN4SyxPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFcWUsTUFBTSxDQUFDcmU7WUFBTyxHQUNqRDJCLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FDbkIsQ0FDSCxFQUNUeE8sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQTBWLGdCQUFnQjtjQUFDcmMsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQXBILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFtYyxZQUFBLEdBQUFuYyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVWdrQixhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRTVqQixLQUFLO2NBQUV3RyxLQUFLO2NBQUUrUyxTQUFTO2NBQUV0WjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2xFLE1BQU15QyxRQUFRLEdBQUc7Y0FBRVEsS0FBSyxFQUFFLEVBQUU7Y0FBRThCLEtBQUssRUFBRWpGLEtBQUssQ0FBQzZqQixTQUFTLENBQUM3TyxNQUFNLENBQUNqTjtZQUFXLENBQUU7WUFDekUsTUFBTSxDQUFDK2IsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3BrQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQ3ZCLFFBQVEsQ0FBQzZqQixRQUFRLENBQUM7WUFDakUsTUFBTXJoQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCcWhCLFdBQVcsQ0FBQ3JoQixLQUFLLENBQUNFLGFBQWEsQ0FBQ08sS0FBSyxDQUFDO2NBQ3RDLE1BQU1sRCxRQUFRLENBQUNvSCxHQUFHLENBQUM7Z0JBQUV5YyxRQUFRLEVBQUVwaEIsS0FBSyxDQUFDRSxhQUFhLENBQUNPO2NBQUssQ0FBRSxDQUFDO2NBQzNELE1BQU1xRCxLQUFLLENBQUNrQixJQUFJLEVBQUU7WUFDbkIsQ0FBQztZQUNELE1BQU0zQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNxRixHQUFHLENBQUM4TCxJQUFJLEtBQUs7Y0FBRS9ULEtBQUssRUFBRStULElBQUk7Y0FBRWpTLEtBQUssRUFBRWpGLEtBQUssQ0FBQzZqQixTQUFTLENBQUMzTSxJQUFJO1lBQUMsQ0FBRSxDQUFDLENBQUM7WUFDekYsTUFBTXpULFFBQVEsR0FBRztjQUFFdWdCLFVBQVUsRUFBRXhkLEtBQUssQ0FBQ3lkO1lBQUssQ0FBRTtZQUU1QyxPQUNDdGtCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU9zZixPQUFPLEVBQUM7WUFBRSxHQUFFMWYsS0FBSyxDQUFDNmpCLFNBQVMsQ0FBQzdPLE1BQU0sQ0FBQy9QLEtBQUssQ0FBUyxFQUN4RHRGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMyYixZQUFBLENBQUFNLFdBQVc7Y0FDWGxaLEtBQUssRUFBRWxELFFBQVEsQ0FBQzZqQixRQUFRO2NBQ3hCL2hCLElBQUksRUFBQyxVQUFVO2NBQ2ZnRSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ0RCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkZ0I7WUFBUSxFQUNYLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQTlELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFtYyxZQUFBLEdBQUFuYyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ00sU0FBVXNrQixjQUFjQSxDQUFDO1lBQUV4UixNQUFNO1lBQUU2RztVQUFTLENBQUU7WUFDbkQsTUFBTTtjQUFFdFosUUFBUTtjQUFFdUc7WUFBSyxDQUFFLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsSUFBSTRhLFlBQVksR0FBRztjQUFFM1gsS0FBSyxFQUFFLEVBQUU7Y0FBRThCLEtBQUssRUFBRTtZQUFRLENBQUU7WUFDakQsTUFBTWMsT0FBTyxHQUFHLEVBQUU7WUFDbEJTLEtBQUssQ0FBQytKLEtBQUssQ0FBQ2hRLFVBQVUsQ0FBQ2tOLEtBQUssQ0FBQytELE9BQU8sQ0FBQ3dQLENBQUMsSUFBRztjQUN4QyxJQUFJQSxDQUFDLENBQUN6VixFQUFFLEtBQUt0TCxRQUFRLENBQUNzTCxFQUFFLEVBQUU7Y0FDMUIsSUFBSXlWLENBQUMsQ0FBQ3pWLEVBQUUsS0FBS21ILE1BQU0sQ0FBQ2pSLEtBQUssQ0FBQzBpQixVQUFVLEVBQUVySixZQUFZLEdBQUc7Z0JBQUUzWCxLQUFLLEVBQUU2ZCxDQUFDLENBQUN6VixFQUFFO2dCQUFFdEcsS0FBSyxFQUFFK2IsQ0FBQyxDQUFDdGdCO2NBQUssQ0FBRTtjQUNwRnFGLE9BQU8sQ0FBQ3VMLElBQUksQ0FBQztnQkFBRW5PLEtBQUssRUFBRTZkLENBQUMsQ0FBQ3pWLEVBQUU7Z0JBQUV0RyxLQUFLLEVBQUUrYixDQUFDLENBQUN0Z0I7Y0FBSyxDQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsTUFBTTBqQixZQUFZLEdBQUd4USxJQUFJLElBQUc7Y0FDM0IyRixTQUFTLENBQUM3RyxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRWpSLEtBQUssRUFBRTtrQkFBRSxHQUFHaVIsTUFBTSxDQUFDalIsS0FBSztrQkFBRTBpQixVQUFVLEVBQUV2USxJQUFJLENBQUN0TSxNQUFNLENBQUNuRTtnQkFBSztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7WUFFRCxPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBT3NmLE9BQU8sRUFBQyxFQUFFO2NBQUNwZixTQUFTLEVBQUM7WUFBVyxHLHNDQUV0Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJiLFlBQUEsQ0FBQU0sV0FBVztjQUFDNVosUUFBUSxFQUFFMmhCLFlBQVk7Y0FBRXRKLFlBQVksRUFBRUEsWUFBWTtjQUFFL1UsT0FBTyxFQUFFLENBQUMrVSxZQUFZLEVBQUUsR0FBRy9VLE9BQU87WUFBQyxFQUFJLENBQ2pHO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFwRyxNQUFBLEdBQUFDLE9BQUE7VUFrQk8sTUFBTXlrQixlQUFlLEdBQUEvVSxPQUFBLENBQUErVSxlQUFBLEdBQUcxa0IsTUFBQSxDQUFBUSxPQUFLLENBQUMyVixhQUFhLENBQUMsRUFBNkIsQ0FBQztVQUMxRSxNQUFNNVYsa0JBQWtCLEdBQUdBLENBQUEsS0FBTVAsTUFBQSxDQUFBUSxPQUFLLENBQUM2VixVQUFVLENBQUNxTyxlQUFlLENBQUM7VUFBQy9VLE9BQUEsQ0FBQXBQLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CMUUsSUFBQWEsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUE4TixHQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQWtRLFdBQUEsR0FBQWxRLE9BQUE7VUFDQSxJQUFBOGlCLFFBQUEsR0FBQTlpQixPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMGtCLE1BQUEsR0FBQTFrQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJrQixTQUFBLEdBQUEza0IsT0FBQTtVQUNBLElBQUE0a0IsUUFBQSxHQUFBNWtCLE9BQUE7VUFFTSxTQUFVNmtCLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUNMeGtCLFFBQVE7Y0FDUnVHLEtBQUs7Y0FDTHhHLEtBQUs7Y0FDTHdHLEtBQUssRUFBRTtnQkFBRUM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQTVHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDeVMsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHalQsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQ3VPLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3JRLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUNrakIsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHaGxCLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUNxYyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbmUsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU11TSxVQUFVLEdBQUd0TSxLQUFLLElBQUl4QixRQUFRLENBQUNrTyxRQUFRLENBQUMxTSxLQUFLLENBQUM7WUFFcEQsTUFBTWlELFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCa08sa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCcE0sS0FBSyxDQUFDaWMsWUFBWSxDQUFDdFYsU0FBUyxDQUFDO2NBQzdCdVYsUUFBQSxDQUFBRyxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFFRCxNQUFNRSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNaFQsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQ3BFLE1BQU1pRCxhQUFhLEdBQUdBLENBQUEsS0FBTUosa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1nUyxJQUFJLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZCLElBQUk7Z0JBQ0hELGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDdEI3RyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUVuQixJQUFJLENBQUM3ZCxRQUFRLENBQUM0a0IsV0FBVyxFQUFFO2tCQUMxQlAsTUFBQSxDQUFBUSxLQUFLLENBQUNDLE9BQU8sQ0FBQy9rQixLQUFLLENBQUNPLFVBQVUsQ0FBQ3FrQixJQUFJLENBQUNHLE9BQU8sQ0FBQztrQkFDNUM7O2dCQUdELElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDMU4sUUFBUSxDQUFDcFgsUUFBUSxDQUFDWSxJQUFJLENBQUMsRUFBRTtrQkFDbEUsTUFBTTJGLEtBQUssQ0FBQ3dlLHNCQUFzQixDQUFDL2tCLFFBQVEsQ0FBQ3NMLEVBQUUsQ0FBQztpQkFDL0MsTUFBTTtrQkFDTixNQUFNL0UsS0FBSyxDQUFDeWUsWUFBWSxDQUFDaGxCLFFBQVEsQ0FBQ3NMLEVBQUUsQ0FBQzs7Z0JBR3RDMEcsVUFBVSxDQUFDQyxRQUFRLENBQUNwUCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM4SCxLQUFLLENBQUN1SCxRQUFRLEdBQUcsUUFBUTtnQkFDbkUyTCxhQUFhLENBQUMsS0FBSyxDQUFDO2VBQ3BCLENBQUMsT0FBT3JLLENBQUMsRUFBRTtnQkFDWDZRLE1BQUEsQ0FBQVEsS0FBSyxDQUFDeFEsS0FBSyxDQUFDOU4sS0FBSyxDQUFDQyxXQUFXLENBQUMwRCxNQUFNLENBQUMrYSxhQUFhLENBQUM7O1lBRXJELENBQUM7WUFFRCxNQUFNQyxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QmxULFVBQVUsQ0FBQ0MsUUFBUSxDQUFDcFAsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOEgsS0FBSyxDQUFDdUgsUUFBUSxHQUFHLE1BQU07Y0FFakV3UyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDeEIsQ0FBQztZQUNELE9BQ0NobEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBK0IsR0FDN0NYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21rQixTQUFBLENBQUFhLGdCQUFnQixPQUFHLEVBQ3BCemxCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QyxHQUN6RCxDQUFDLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUMrVyxRQUFRLENBQUNwWCxRQUFRLENBQUNZLElBQUksQ0FBQyxJQUMxRGxCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQXNrQixTQUFTO2NBQ1Q1aEIsUUFBUSxFQUFFb2EsVUFBVSxJQUFJLENBQUM1ZCxRQUFRLENBQUM0a0IsV0FBVztjQUM3QzNpQixJQUFJLEVBQUMsY0FBYztjQUNuQndCLE9BQU8sRUFBQyxXQUFXO2NBQ25CcEQsU0FBUyxFQUFDLDJCQUEyQjtjQUNyQ3dFLE9BQU8sRUFBRThmO1lBQUksR0FFWnBlLEtBQUssQ0FBQ0MsV0FBVyxDQUFDdkIsT0FBTyxDQUFDK2YsWUFBWSxDQUV4QyxFQUNEdGxCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixHQUFBLENBQUFRLFFBQVE7Y0FBQ3hLLE9BQU8sRUFBQyxTQUFTO2NBQUNvQixPQUFPLEVBQUVrZTtZQUFpQixHQUNwRHZjLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ2lKLFFBQVEsQ0FDbkIsQ0FDTixDQUNELENBQ0QsQ0FDRCxFQUNMdVcsYUFBYSxJQUFJL2tCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNva0IsUUFBQSxDQUFBYyxlQUFlO2NBQUMzZCxPQUFPLEVBQUV3ZDtZQUFTLEVBQUksRUFDeER4UyxlQUFlLElBQ2ZoVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0QsTUFBQSxDQUFBeUIsWUFBWTtjQUFDTCxTQUFTLEVBQUVBLFNBQVM7Y0FBRWEsUUFBUSxFQUFFeU47WUFBYSxHQUMxRHJULE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLGNBQU1xRyxXQUFXLENBQUN2QixPQUFPLENBQUNHLE1BQU0sQ0FBTyxDQUV4QyxFQUNBMEssZUFBZSxJQUNmcFEsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBQLFdBQUEsQ0FBQU0sdUJBQXVCO2NBQ3ZCOUssSUFBSSxFQUFFeUssZUFBZTtjQUNyQk0sUUFBUTtjQUNSM1AsS0FBSyxFQUFFVixLQUFLLENBQUNrZCxNQUFNLENBQUN4YyxLQUFLO2NBQ3pCcUQsV0FBVyxFQUFFL0QsS0FBSyxDQUFDa2QsTUFBTSxDQUFDblosV0FBVztjQUNyQy9ELEtBQUssRUFBRUEsS0FBSyxDQUFDa2QsTUFBTTtjQUNuQnhNLFNBQVMsRUFBRXpRLFFBQVEsQ0FBQ3lRLFNBQVM7Y0FDN0J6USxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJzbEIsV0FBVyxFQUFFdGxCLFFBQVEsQ0FBQ1ksSUFBSSxLQUFLLGlCQUFpQjtjQUNoRE4sVUFBVSxFQUFFaUcsS0FBSyxDQUFDK0osS0FBSyxDQUFDaFEsVUFBVTtjQUNsQ29ILE9BQU8sRUFBRXFiLGlCQUFpQjtjQUMxQjFTLFNBQVMsRUFBRTlKLEtBQUssQ0FBQytKLEtBQUssQ0FBQ0MsWUFBWTtjQUNuQ3pDLFVBQVUsRUFBRUE7WUFBVSxFQUV2QixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0dBLElBQUF5WCxXQUFBLEdBQUE1bEIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNmxCLFNBQUEsR0FBQTdsQixPQUFBO1VBRU87VUFBVSxTQUFVaUMsY0FBY0EsQ0FBQyxFQUFFO1lBQzNDLE1BQU07Y0FBRTVCLFFBQVE7Y0FBRUQsS0FBSztjQUFFa1U7WUFBWSxDQUFFLEdBQUcsSUFBQXJVLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDOUQsTUFBTTZOLFVBQVUsR0FBRzJYLElBQUksSUFBSXpsQixRQUFRLENBQUMwbEIsZUFBZSxDQUFDRCxJQUFJLENBQUM7WUFDekQsTUFBTWpNLEdBQUcsR0FBRywwREFBMER4WixRQUFRLENBQUNZLElBQUksRUFBRTtZQUNyRixNQUFNK2tCLE9BQU8sR0FBRztjQUNmbGEsR0FBRyxFQUFFekwsUUFBUSxDQUFDMmxCLE9BQU87Y0FDckJDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxHQUFHO2FBQ2Q7WUFDRCxJQUFBL2tCLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ3hGLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFFckUsTUFBTStsQixVQUFVLEdBQUdKLE9BQU8sQ0FBQ2xhLEdBQUcsR0FBRyxHQUFHa2EsT0FBTyxDQUFDbGEsR0FBRyxJQUFJb2EsSUFBSSxDQUFDQyxHQUFHLEVBQUUsRUFBRSxHQUFHNVksU0FBUztZQUMzRSxNQUFNMUssUUFBUSxHQUFHQyxLQUFLLElBQUl6QyxRQUFRLENBQUNvSCxHQUFHLENBQUM7Y0FBRTNHLEtBQUssRUFBRWdDLEtBQUssQ0FBQ0UsYUFBYSxDQUFDTztZQUFLLENBQUUsQ0FBQztZQUU1RSxPQUNDeEQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBRS9DWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxTQUFTLEVBQUVtWjtZQUFHLEdBQ3JCOVosTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29sQixXQUFBLENBQUFTLFVBQVU7Y0FDVnZsQixLQUFLLEVBQUVWLEtBQUssQ0FBQzRsQixPQUFPLENBQUNsbEIsS0FBSztjQUMxQnFELFdBQVcsRUFBRS9ELEtBQUssQ0FBQzRsQixPQUFPLENBQUM3aEIsV0FBVztjQUN0Q21pQixXQUFXLEVBQUVqbUIsUUFBUSxDQUFDa21CLGtCQUFrQjtjQUN4Q0MsTUFBTSxFQUFDLFVBQVU7Y0FDakJSLE9BQU8sRUFBRUksVUFBVTtjQUNuQnBYLElBQUksRUFBQyxJQUFJO2NBQ1RiLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGcE8sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixLQUFBLENBQUE2VSxLQUFLO2NBQ0xyVSxTQUFTLEVBQUMsd0JBQXdCO2NBQ2xDeUIsSUFBSSxFQUFDLE9BQU87Y0FDWm9CLEtBQUssRUFBRWxELFFBQVEsQ0FBQ1MsS0FBSyxHQUFHVCxRQUFRLENBQUNTLEtBQUssR0FBRyxFQUFFO2NBQzNDK0IsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCc0YsV0FBVyxFQUFFL0gsS0FBSyxDQUFDZ0ksSUFBSSxDQUFDdEgsS0FBSztjQUM3QnlULE1BQU0sRUFBRUQ7WUFBWSxFQUNuQixDQUNHLEVBQ052VSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUFDRixJQUFJLEVBQUU5QixRQUFRLENBQUNZO1lBQUksRUFBSSxFLEtBQUViLEtBQUssQ0FBQ2lQLEtBQUssQ0FBQ2hQLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDLENBQ3ZELENBQ0QsRUFDTmxCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FsQixTQUFBLENBQUFZLGdCQUFnQixPQUFHLENBQ2YsQ0FDRSxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUExbUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1jLFlBQUEsR0FBQW5jLE9BQUE7VUFDQSxJQUFBeUcsS0FBQSxHQUFBekcsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVV5bUIsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRXJtQixLQUFLO2NBQUV3RyxLQUFLO2NBQUUrUyxTQUFTO2NBQUV0WjtZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2xFLE1BQU07Y0FBRXVHO1lBQVcsQ0FBRSxHQUFHRCxLQUFLO1lBRTdCO1lBQ0EsTUFBTThmLGtCQUFrQixHQUFHLENBQUMsR0FBR2pnQixLQUFBLENBQUF3ZCxTQUFTLENBQUMwQyxTQUFTLENBQUM3VyxJQUFJLEVBQUUsQ0FBQztZQUUxRCxNQUFNL00sUUFBUSxHQUFHO2NBQUVRLEtBQUssRUFBRSxFQUFFO2NBQUU4QixLQUFLLEVBQUVqRixLQUFLLENBQUM2akIsU0FBUyxDQUFDN08sTUFBTSxDQUFDak47WUFBVyxDQUFFO1lBQ3pFLE1BQU0sQ0FBQytiLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdwa0IsTUFBQSxDQUFBUSxPQUFLLENBQUNxQixRQUFRLENBQUN2QixRQUFRLENBQUM2akIsUUFBUSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQ3hlLElBQUksRUFBRWtoQixPQUFPLENBQUMsR0FBRzdtQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDdUYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3JILE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNaUIsUUFBUSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUM5QnFoQixXQUFXLENBQUNyaEIsS0FBSyxDQUFDRSxhQUFhLENBQUNPLEtBQUssQ0FBQztZQUN2QyxDQUFDO1lBRUQ7WUFDQSxNQUFNNEMsT0FBTyxHQUFHVSxXQUFXLEVBQUVvZCxTQUFTLEdBQ25DcFUsTUFBTSxDQUFDZ1gsT0FBTyxDQUFDaGdCLFdBQVcsQ0FBQ29kLFNBQVMsQ0FBQyxDQUNwQzVNLE1BQU0sQ0FBQyxDQUFDLENBQUN5UCxRQUFRLENBQUMsS0FBS0osa0JBQWtCLENBQUNqUCxRQUFRLENBQUNxUCxRQUFRLENBQUMsQ0FBQyxDQUM3RHRiLEdBQUcsQ0FBQyxDQUFDLENBQUNzYixRQUFRLEVBQUVDLFFBQVEsQ0FBQyxNQUFNO2NBQy9CeGpCLEtBQUssRUFBRXVqQixRQUFRO2NBQ2Z6aEIsS0FBSyxFQUFHMGhCLFFBQWdCLENBQUM1a0I7YUFDekIsQ0FBQyxDQUFDLEdBQ0gsRUFBRTtZQUVMLE1BQU13RixNQUFNLEdBQUcsTUFBTTdFLEtBQUssSUFBRztjQUM1QnNFLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIvRyxRQUFRLENBQUN5SCxJQUFJLENBQUM7Z0JBQUVvYztjQUFRLENBQUUsQ0FBQztjQUUzQjljLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJ3ZixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU14SixVQUFVLEdBQUdBLENBQUEsS0FBTXdKLE9BQU8sQ0FBQyxDQUFDbGhCLElBQUksQ0FBQztZQUV2QyxPQUNDM0YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQVQsTUFBQSxDQUFBUSxPQUFBLENBQUFFLFFBQUEsUUFDQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0IsT0FBTztjQUNQNkMsT0FBTyxFQUFFa1ksVUFBVTtjQUNuQmpiLElBQUksRUFBRSxhQUFhOUIsUUFBUSxDQUFDNmpCLFFBQVEsRUFBRTtjQUN0Q3BqQixLQUFLLEVBQUUsR0FBR1QsUUFBUSxDQUFDNmpCLFFBQVEsV0FBVztjQUN0Q3hqQixTQUFTLEVBQUM7WUFBMkQsRUFDcEUsRUFDRGdGLElBQUksSUFDSjNGLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNrRCxNQUFBLENBQUFtSCxLQUFLO2NBQUNuRixJQUFJO2NBQUNxQyxPQUFPLEVBQUVxVjtZQUFVLEdBQzlCcmQsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sS0FBQSxDQUFBOEgsSUFBSTtjQUFDQyxRQUFRLEVBQUVOO1lBQU0sR0FDckI1SCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFPc2YsT0FBTyxFQUFDO1lBQUUsR0FBRTFmLEtBQUssQ0FBQzZqQixTQUFTLENBQUM3TyxNQUFNLENBQUMvUCxLQUFLLENBQVMsRUFDeER0RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMmIsWUFBQSxDQUFBTSxXQUFXO2NBQUNsWixLQUFLLEVBQUUyZ0IsUUFBUTtjQUFFL2hCLElBQUksRUFBQyxVQUFVO2NBQUNnRSxPQUFPLEVBQUVBLE9BQU87Y0FBRXRELFFBQVEsRUFBRUE7WUFBUSxFQUFJLEVBQ3RGOUMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJYLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFDb0IsT0FBTyxFQUFFeUMsTUFBTTtjQUFFOUQsUUFBUSxFQUFFc0Q7WUFBUSxHQUMzRFAsS0FBSyxDQUFDQyxXQUFXLENBQUN2QixPQUFPLENBQUN3QyxJQUFJLENBQ3ZCLENBQ0osQ0FDQSxDQUVSLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRUEsSUFBQS9ILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBZU0sU0FBVWduQixZQUFZQSxDQUFDO1lBQUU3a0IsSUFBSTtZQUFFOGtCLFFBQVEsR0FBRyxLQUFLO1lBQUVDLElBQUksR0FBRztVQUFLLENBQXNCO1lBQ3hGLE1BQU07Y0FBRTdtQixRQUFRO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDaEQsTUFBTTZtQixHQUFHLEdBQUdELElBQUksR0FBRzdtQixRQUFRLENBQUN3QixLQUFLLEdBQUd4QixRQUFRO1lBQzVDLE1BQU0wSyxHQUFHLEdBQUdoTCxNQUFBLENBQUFRLE9BQUssQ0FBQzBNLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTTFKLEtBQUssR0FBR2xELFFBQVEsQ0FBQyttQixZQUFZLENBQUNqbEIsSUFBSSxDQUFDO1lBRXpDLE1BQU0sQ0FBQ2tMLE9BQU8sRUFBRWdhLFVBQVUsQ0FBQyxHQUFHdG5CLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUFDMkIsS0FBSyxDQUFDO1lBRW5ELE1BQU1zVyxHQUFHLEdBQUcsaUJBQWlCdFcsS0FBSyxHQUFHLDRCQUE0QixHQUFHLEVBQUUsRUFBRTtZQUN4RSxJQUFJK2pCLEtBQUssR0FBRy9qQixLQUFLLEdBQUcsV0FBVyxHQUFHLFNBQVM7WUFFM0MsSUFBSTBqQixRQUFRLElBQUksQ0FBQzFqQixLQUFLLEVBQUUrakIsS0FBSyxHQUFHLFVBQVU7WUFDMUMsSUFBQWxtQixNQUFBLENBQUFZLFNBQVMsRUFDUixDQUFDbWxCLEdBQUcsQ0FBQyxFQUNMLE1BQUs7Y0FDSixNQUFNNWpCLEtBQUssR0FBRzJqQixJQUFJLEdBQUc3bUIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDdWxCLFlBQVksQ0FBQ2psQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM5QixRQUFRLENBQUM4QixJQUFJLENBQUM7Y0FDekUsSUFBSW9CLEtBQUssRUFBRXdILEdBQUcsQ0FBQ3NDLE9BQU8sQ0FBQ2xLLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsS0FDN0QwSCxHQUFHLENBQUNzQyxPQUFPLENBQUNsSyxTQUFTLENBQUNDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztjQUM5RGlrQixVQUFVLENBQUM5akIsS0FBSyxDQUFDO1lBQ2xCLENBQUMsRUFDRCxHQUFHcEIsSUFBSSxVQUFVLENBQ2pCO1lBRUQsSUFBSStrQixJQUFJLElBQUksQ0FBQzdtQixRQUFRLENBQUN3QixLQUFLLENBQUN3ZSxTQUFTLENBQUNsZSxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUk7WUFFeEQsT0FDQ3BDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBRW1aLEdBQUc7Y0FBRTlPLEdBQUcsRUFBRUE7WUFBRyxHQUMzQmhMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFPLEdBQUVOLEtBQUssQ0FBQ2tLLFFBQVEsQ0FBQ2dXLE1BQU0sQ0FBQ25lLElBQUksQ0FBQyxDQUFRLEVBQzVEcEMsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQU8sR0FBRU4sS0FBSyxDQUFDa0ssUUFBUSxDQUFDaWQsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBUSxDQUN6RCxDQUNIO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUFsbUIsTUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF3bkIsYUFBQSxHQUFBeG5CLE9BQUE7VUFFTSxTQUFVd2xCLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUVwbEIsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ2hELE1BQU1vTixLQUFLLEdBQUdyTixRQUFRLENBQUNvbkIsWUFBWTtZQUNuQyxNQUFNLENBQUN0VSxPQUFPLEVBQUU2TixVQUFVLENBQUMsR0FBR2poQixNQUFBLENBQUFRLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTThsQixLQUFLLEdBQUdoYSxLQUFLLENBQUMySixNQUFNLENBQUNDLElBQUksSUFBSSxDQUFDLENBQUNBLElBQUksQ0FBQztZQUUxQyxJQUFBbFcsTUFBQSxDQUFBWSxTQUFTLEVBQ1IsQ0FBQzNCLFFBQVEsRUFBRUEsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLEVBQzFCLE1BQUs7Y0FDSm1mLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDZixDQUFDLEVBQ0QsUUFBUSxDQUNSO1lBRUQsTUFBTTJHLGFBQWEsR0FBR3RuQixRQUFRLENBQUN1bkIsY0FBYyxDQUFDcGMsR0FBRyxDQUFDLENBQUM7Y0FBRXJKLElBQUk7Y0FBRThrQjtZQUFRLENBQUUsS0FDcEVsbkIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2duQixhQUFBLENBQUFSLFlBQVk7Y0FBQ3RiLEdBQUcsRUFBRXZKLElBQUk7Y0FBRUEsSUFBSSxFQUFFQSxJQUFJO2NBQUU4a0IsUUFBUSxFQUFFQTtZQUFRLEVBQ3ZELENBQUM7WUFFRixPQUNDbG5CLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUFULE1BQUEsQ0FBQVEsT0FBQSxDQUFBRSxRQUFBLFFBQ0NWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCWCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBYSxHQUFFTixLQUFLLENBQUNrSyxRQUFRLENBQUNqRixLQUFLLENBQVEsRUFDM0R0RixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBYyxHQUM1QmduQixLQUFLLENBQUM5ZCxNQUFNLEUsS0FBRzhELEtBQUssQ0FBQzlELE1BQU0sQ0FDdEIsQ0FDRixFQUNON0osTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQW9CLEdBQUVpbkIsYUFBYSxDQUFNLENBQ2xELENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQXZtQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQTZuQixlQUFBLEdBQUE3bkIsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThuQixjQUFBLEdBQUE5bkIsT0FBQTtVQUNBLElBQUErbkIsY0FBQSxHQUFBL25CLE9BQUE7VUFDQSxJQUFBZ29CLE9BQUEsR0FBQWhvQixPQUFBO1VBQ0EsSUFBQWlvQixTQUFBLEdBQUFqb0IsT0FBQTtVQUNBLElBQUFrb0IsaUJBQUEsR0FBQWxvQixPQUFBO1VBQ0EsSUFBQW1vQixlQUFBLEdBQUFub0IsT0FBQTtVQUNBLElBQUFvb0IsT0FBQSxHQUFBcG9CLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcW9CLGNBQUEsR0FBQXJvQixPQUFBO1VBR087VUFBWSxTQUFVc29CLGtCQUFrQkEsQ0FBQztZQUFFMWhCLEtBQUs7WUFBRXZHO1VBQVEsQ0FBRTtZQUNsRSxNQUFNLENBQUN5UyxNQUFNLEVBQUU2RyxTQUFTLENBQUMsR0FBRzVaLE1BQUEsQ0FBQVEsT0FBSyxDQUFDcUIsUUFBUSxDQUF3QnZCLFFBQVEsQ0FBQzRoQixhQUFhLEVBQUUsQ0FBQztZQUMzRixNQUFNLENBQUNzRyxVQUFVLEVBQUVub0IsS0FBSyxDQUFDLEdBQUcsSUFBQWdCLE1BQUEsQ0FBQXFELFFBQVEsRUFBQ29qQixlQUFBLENBQUFXLE1BQVksQ0FBQ0MsU0FBUyxDQUFDO1lBQzVELE1BQU07Y0FBRXhuQjtZQUFJLENBQUUsR0FBR1osUUFBUTtZQUV6QixJQUFBZSxNQUFBLENBQUFZLFNBQVMsRUFDUixDQUFDM0IsUUFBUSxDQUFDLEVBQ1YsTUFBSztjQUNKc1osU0FBUyxDQUFDO2dCQUFFLEdBQUd0WixRQUFRLENBQUM0aEIsYUFBYTtjQUFFLENBQUUsQ0FBQztZQUMzQyxDQUFDLEVBQ0QsUUFBUSxDQUNSO1lBRUQsSUFBSSxDQUFDc0csVUFBVSxFQUFFLE9BQU94b0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQXlWLE9BQU87Y0FBQ3JILE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFDakQsTUFBTXVDLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2NBQ3pCalUsUUFBUSxDQUFDeUgsSUFBSSxFQUFFO1lBQ2hCLENBQUM7WUFDRCxNQUFNdkUsS0FBSyxHQUFHO2NBQUVxRCxLQUFLO2NBQUV2RyxRQUFRO2NBQUVELEtBQUs7Y0FBRTBTLE1BQU07Y0FBRTZHLFNBQVM7Y0FBRXJGO1lBQVksQ0FBRTtZQUV6RSxPQUNDdlUsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsUUFBQSxDQUFBd2tCLGVBQWUsQ0FBQ3hNLFFBQVE7Y0FBQzFVLEtBQUssRUFBRUE7WUFBSyxHQUNyQ3hELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFvQixHQUNsQ1gsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZuQixjQUFBLENBQUF4RCxhQUFhLE9BQUcsRUFDakI5a0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ELFdBQUEsQ0FBQW1aLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFOWIsSUFBSTtjQUNma0YsT0FBTyxFQUFFO2dCQUNSLGlCQUFpQixFQUFFcEcsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJuQixlQUFBLENBQUF4TCxzQkFBc0IsT0FBRztnQkFDN0MrTCxNQUFNLEVBQUUzb0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRuQixPQUFBLENBQUFsRyxjQUFjLE9BQUc7Z0JBQzFCLGNBQWMsRUFBRW5pQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNG5CLE9BQUEsQ0FBQWxHLGNBQWMsT0FBRztnQkFDbEN5RyxPQUFPLEVBQUU1b0IsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRuQixPQUFBLENBQUFsRyxjQUFjLE9BQUc7Z0JBQzNCMEcsTUFBTSxFQUFFN29CLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUN3bkIsT0FBQSxDQUFBM1QsY0FBYyxPQUFHO2dCQUMxQndVLFFBQVEsRUFBRTlvQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeW5CLFNBQUEsQ0FBQTFuQixPQUFnQixPQUFHO2dCQUM5QixnQkFBZ0IsRUFBRVIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NuQixjQUFBLENBQUFybUIscUJBQXFCLE9BQUc7Z0JBQzNDLGdCQUFnQixFQUFFMUIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VuQixjQUFBLENBQUFuaUIscUJBQXFCLE9BQUc7Z0JBQzNDLG1CQUFtQixFQUFFN0YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBuQixpQkFBQSxDQUFBM25CLE9BQXdCO2VBQzlDO2NBQ0Q0SCxXQUFXLEVBQUVwSSxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVCxNQUFBLENBQUFRLE9BQUEsQ0FBQUUsUUFBQTtZQUF3QixFQUNwQyxDQUNHLENBQ29CO1VBRTdCOzs7Ozs7Ozs7OztVQ3hEQTs7VUFFQW9QLE1BQUEsQ0FBQWlaLGNBQUEsQ0FBQXBaLE9BQUE7WUFDQW5NLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBd2xCLEtBQUEsR0FBQS9vQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVncEIsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVwaUIsS0FBSztjQUFFdkc7WUFBUSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxrQkFBa0IsR0FBRTtZQUNoRCxJQUFBYyxNQUFBLENBQUF5RSxRQUFRLEVBQUNlLEtBQUssQ0FBQ3FpQixhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZQUVsRTtZQUNBLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDeFIsUUFBUSxDQUFDcFgsUUFBUSxDQUFDWSxJQUFJLENBQUMsRUFBRTtjQUNsRSxNQUFNOEQsT0FBTyxHQUFHNkIsS0FBSyxDQUFDc2lCLHFCQUFxQjtjQUMzQyxPQUFPN25CLEtBQUEsQ0FBQWIsYUFBQSxDQUFDdUUsT0FBTztnQkFBQzZCLEtBQUssRUFBRUEsS0FBSyxDQUFDcWlCO2NBQWEsRUFBSTs7WUFHL0M7WUFDQTtZQUVBLE9BQU81bkIsS0FBQSxDQUFBYixhQUFBLENBQUN1b0IsS0FBQSxDQUFBSSxXQUFXO2NBQUN2aUIsS0FBSyxFQUFFQSxLQUFLLENBQUNxaUIsYUFBYTtjQUFBLEdBQU1yaUIsS0FBSyxDQUFDd2lCO1lBQVksRUFBSTtVQUMzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQWhvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVcXBCLHlCQUF5QkEsQ0FBQTtZQUN4QyxNQUFNO2NBQUV6aUI7WUFBSyxDQUFFLEdBQUcsSUFBQTNHLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFDdEMsSUFBQWMsTUFBQSxDQUFBeUUsUUFBUSxFQUFDZSxLQUFLLENBQUNxaUIsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLENBQUM7WUFFbEUsTUFBTWxrQixPQUFPLEdBQUc2QixLQUFLLENBQUNzaUIscUJBQXFCO1lBRTNDLE9BQU83bkIsS0FBQSxDQUFBYixhQUFBLENBQUN1RSxPQUFPO2NBQUM2QixLQUFLLEVBQUVBLEtBQUssQ0FBQ3FpQjtZQUFhLEVBQUk7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQTduQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQThOLEdBQUEsR0FBQTlOLE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBb2lCLFdBQUEsR0FBQXBpQixPQUFBO1VBRUEsSUFBQXNwQixnQkFBQSxHQUFBdHBCLE9BQUE7VUFJTSxTQUFVMGxCLGVBQWVBLENBQUM7WUFBRTNkO1VBQU8sQ0FBRTtZQUMxQyxNQUFNO2NBQUVuQixLQUFLO2NBQUV2RztZQUFRLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBRWhELElBQUFjLE1BQUEsQ0FBQXlFLFFBQVEsRUFBQ2UsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDbEYsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sS0FBSyxDQUFDTyxRQUFRLENBQUN3Z0IsV0FBQSxDQUFBRSxZQUFZLENBQUMzUixLQUFLLENBQUM2SixPQUFPLEVBQUUrTyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDMUcsSUFBQW5vQixNQUFBLENBQUFZLFNBQVMsRUFDUixDQUFDb2dCLFdBQUEsQ0FBQUUsWUFBWSxDQUFDM1IsS0FBSyxDQUFDLEVBQ3BCLE1BQU1oUCxPQUFPLENBQUN5Z0IsV0FBQSxDQUFBRSxZQUFZLENBQUMzUixLQUFLLEVBQUU2SixPQUFPLEVBQUUrTyxTQUFTLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFDbEYsZ0JBQWdCLENBQ2hCO1lBRUQ7WUFDQSxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFLO2NBQzlCLElBQUk5bkIsSUFBSSxLQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUU7Y0FDakMsT0FBTyw2Q0FBNkM7WUFDckQsQ0FBQztZQUVELE9BQ0NMLEtBQUEsQ0FBQWIsYUFBQSxDQUFDa0QsTUFBQSxDQUFBbUgsS0FBSztjQUFDbkYsSUFBSTtjQUFDaEYsU0FBUyxFQUFFOG9CLGlCQUFpQixFQUFFO2NBQUV6aEIsT0FBTyxFQUFFQTtZQUFPLEdBQzNEMUcsS0FBQSxDQUFBYixhQUFBLENBQUNtRCxXQUFBLENBQUFtWixvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRXJiLElBQUk7Y0FDZnlFLE9BQU8sRUFBRTtnQkFDUnFVLE9BQU8sRUFDTm5aLEtBQUEsQ0FBQWIsYUFBQSxDQUFDc04sR0FBQSxDQUFBMmIsa0JBQWtCO2tCQUNsQi9ZLFNBQVMsRUFBRTlKLEtBQUssQ0FBQytKLEtBQUssQ0FBQ0MsWUFBWTtrQkFDbkM3SSxPQUFPLEVBQUVBLE9BQU87a0JBQ2hCcEMsUUFBUSxFQUFFb0MsT0FBTztrQkFDakJsQixXQUFXLEVBQUV1YixXQUFBLENBQUFFLFlBQVksQ0FBQ3piO2dCQUFXLEVBRXRDO2dCQUNEeEcsUUFBUSxFQUFFdUcsS0FBSyxDQUFDcWlCLGFBQWEsR0FBRzVuQixLQUFBLENBQUFiLGFBQUEsQ0FBQzhvQixnQkFBQSxDQUFBTixlQUFlLE9BQUcsR0FBRzNuQixLQUFBLENBQUFiLGFBQUEsQ0FBQ3NOLEdBQUEsQ0FBQTBWLGdCQUFnQjtrQkFBQzlYLEdBQUcsRUFBQyxXQUFXO2tCQUFDdkUsUUFBUTtnQkFBQTtlQUNoRztjQUNEZ0IsV0FBVyxFQUFFOUcsS0FBQSxDQUFBYixhQUFBLENBQUNzTixHQUFBLENBQUEwVixnQkFBZ0I7Z0JBQUM5WCxHQUFHLEVBQUMsV0FBVztnQkFBQ3ZFLFFBQVE7Y0FBQTtZQUFHLEVBQ3pELENBQ0s7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQXBILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEyRCxXQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVTBwQixVQUFVQSxDQUFDO1lBQzFCckYsS0FBSyxHQUFHLEtBQUs7WUFDYnhnQixRQUFRO1lBQ1JHO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRThPLE1BQU07Y0FBRTBLLFFBQVE7Y0FBRXBkLEtBQUs7Y0FBRXdHLEtBQUs7Y0FBRXZHO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssa0JBQWtCLEdBQUU7WUFFekUsTUFBTXFILE1BQU0sR0FBRyxNQUFNN0UsS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUMrQixlQUFlLEVBQUU7Y0FDdkI7Ozs7O2NBTUEsSUFBSSxDQUFDd2YsS0FBSyxFQUFFO2dCQUNYLE1BQU16ZCxLQUFLLENBQUMrSixLQUFLLENBQUNoUSxVQUFVLENBQUM2SyxHQUFHLENBQUMrUSxHQUFHLENBQUNsYyxRQUFRLENBQUNzTCxFQUFFLENBQUMsQ0FBQ2xFLEdBQUcsQ0FBQ3FMLE1BQU0sQ0FBQztnQkFDN0QsTUFBTXpTLFFBQVEsQ0FBQ29ILEdBQUcsQ0FBQ3FMLE1BQU0sQ0FBQztnQkFDMUJsTSxLQUFLLENBQUNrQixJQUFJLEVBQUU7Z0JBQ1owVixRQUFRLENBQUM7a0JBQUVySyxPQUFPLEVBQUU7Z0JBQUssQ0FBRSxDQUFDOztjQUc3QixJQUFJblAsUUFBUSxFQUFFQSxRQUFRLEVBQUU7WUFDekIsQ0FBQztZQUNELE1BQU1nQyxLQUFLLEdBQUc7Y0FBRW5DLFFBQVEsRUFBRSxDQUFDaVAsTUFBTSxDQUFDSyxPQUFPLElBQUl0UCxRQUFRO2NBQUVxQixPQUFPLEVBQUV5QztZQUFNLENBQUU7WUFFeEUsT0FDQzVILE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtRCxXQUFBLENBQUFzQixNQUFNO2NBQUNuQixPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUtrQztZQUFLLEdBQ2pDWSxLQUFLLENBQUNDLFdBQVcsQ0FBQ3ZCLE9BQU8sQ0FBQ3dDLElBQUksQ0FDdkI7VUFFWCIsImlnbm9yZUxpc3QiOltdfQ==System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/editor", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-app@0.7.0/modules/draft/gallery.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "clsx@2.1.1", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/modules/management/refinament.code", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/dynamic-list", "pragmate-ui@1.0.8/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/dynamic-field", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/components/cover-image.code", "@aimpact/ailearn-app@0.7.0/assignments/chat"], function (_export, _context3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX2xheW91dHMiLCJfbWF0ZXJpYWxzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJNYXRlcmlhbHNWaWV3IiwiTGF5b3V0Q2hhdFNlbGVjdGlvbiIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiQ29uZmlybUJ1dHRvbiIsImRpc2FibGVkIiwidmFyaWFudCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidXNlU3RvcmUiLCJMYXlvdXRJY29uIiwiZGF0YXNldCIsImF0dHJzIiwic2V0dGluZ3MiLCJsYXlvdXQiLCJvcHRpb25zIiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9jaGFyYWN0ZXJDb3VudGVyIiwiX2VkaXRvciIsIl9jb3JlIiwiX2dhbGxlcnkiLCJBcnRpY2xlRm9ybSIsInN0b3JlIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJwcm9taXNlIiwic2V0UHJvbWlzZSIsImFydGljbGUiLCJjb250ZW50Iiwic2V0IiwidGFyZ2V0Iiwib25TYXZlIiwiY29uc29sZSIsInRyYWNlIiwic2F2ZSIsIm9uQ2xvc2UiLCJGb3JtIiwib25TdWJtaXQiLCJXaWtpRWRpdG9yIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiaW5pdGlhbENvbnRlbnQiLCJsb2FkZXJzIiwiaW1hZ2UiLCJyZXNwb25zZSIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhcmFjdGVyQ291bnRlciIsIm1heExlbmd0aCIsIndhcm5pbmdUaHJlc2hvbGQiLCJlcnJvclRocmVzaG9sZCIsImNoYXJhY3RlcnMiLCJHYWxsZXJ5TW9kYWwiLCJfbWFya2Rvd24iLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVQcmV2aWV3Iiwib25FZGl0Iiwib25EZWxldGUiLCJyZXZlcnQiLCJjbGVhciIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsIl9jbHN4IiwiY29udGVudExlbmd0aCIsImxlbmd0aCIsInJlbWFpbmluZyIsImNsc0NoYXJhY3RlcnMiLCJfdXNlVXBsb2FkZXIiLCJoYW5kbGVDbG9zZSIsInJlc29sdmUiLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJmaWxlcyIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXNlVXBsb2FkZXIiLCJtdWx0aXBsZSIsInZhbGlkYXRvciIsInByb2Nlc3NvciIsIm1heFNpemUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJyZWYiLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb2xvciIsIlN0cmluZyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImZpbGUiLCJrZXkiLCJpZCIsIm1hcmdpblJpZ2h0IiwicHJldmlld1VybCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiX2VtcHR5QXJ0aWNsZSIsIl9hcnRpY2xlUHJldmlldyIsIl9hcnRpY2xlRm9ybSIsIkFydGljbGVUYWIiLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGUiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1zIiwiX3VpIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJzaXplIiwiY2FuQmVDcmVhdGVkIiwiZW1wdHlUZXh0IiwiYXVkaW8iLCJlbXB0eU1hdGVyaWFsIiwidHlwZXMiLCJub0F1ZGlvIiwicGFyYW1zIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwidGFicyIsInB1c2giLCJUYWIiLCJmb3JFYWNoIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwiUmVmaW5lbWVudE1vZGFsIiwib25DcmVhdGUiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInZhbHVlcyIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInNldENvbnRlbnQiLCJvbkNsaWNrQ2FuY2VsIiwidXBkYXRlZCIsIm9uTW9kYWxDYW5jZWwiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInRvZ2dsZU1hbnVhbCIsImUiLCJsb2ciLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZU1hdGVyaWFsIiwic2V0VGltZW91dCIsImR5c2xleGlhIiwic3ludGhlc2lzIiwiRGViYXRlQWN0aXZpdHkiLCJzYXZlQWN0aXZpdHkiLCJvbkJsdXIiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsIkV4ZXJjaXNlQWN0aXZpdHkiLCJfZHluYW1pYyIsImZpZWxkVHlwZXMiLCJpbnB1dCIsIklucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsIkR5bmFtaWNDb250YWluZXIiLCJwcm9wcyIsImluZGV4IiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsIndhcm4iLCJGaWVsZCIsIkZyZWVDb252ZXJzYXRpb25BY3Rpdml0eSIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9jb250ZXh0MiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3Iiwic2V0RXJyb3JzIiwic2V0Q29uZmlybSIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsIml0ZW0iLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvbnRleHRWYWx1ZSIsImNhbmNlbENoYW5nZXMiLCJ1bnB1Ymxpc2hlZCIsIlByb3ZpZGVyIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIkl0ZW0iLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0Iiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsImdlbmVyYXRlUXVlc3Rpb25zIiwib3duZXIiLCJjcmVkaXRzIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9hY3Rpb25zIiwiX3F1ZXN0aW9uIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwicHJlcGFyZWQiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwicmVmaW5lIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvbkJpbmRlciIsImdldERhdGEiLCJvblJlb3JkZXIiLCJvcmRlckxhYmVsIiwic2F2ZVJlb3JkZXJpbmciLCJyZW9yZGVyQXR0cnMiLCJtdWx0aXBsZWNob2ljZSIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwiT2JqZWN0aXZlRmllbGQiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiRW1wdHlTcGVjcyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIk1hbnVhbEZvcm1Gb290ZXIiLCJFbXB0eUR5bmFtaWNDb250ZW50IiwiX2R5bmFtaWNGaWVsZCIsIkN1c3RvbUR5bmFtaWNGaWVsZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRHluYW1pY0ljb25CdXR0b24iLCJwb3NpdGlvbiIsImhhc093blByb3BlcnR5IiwiRHluYW1pY0ZpZWxkQ29udGFpbmVyIiwibGF6eUluaXQiLCJEeW5hbWljQnV0dG9uIiwiRHluYW1pY0ZpZWxkIiwiU3BlY3NGaWVsZCIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJfYWlCdXR0b24iLCJzZXROb3RlcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiTGFuZ3VhZ2VGaWVsZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfdG9hc3QiLCJfcHJvZ3Jlc3MiLCJfcHJldmlldyIsIkVkaXRvclRvb2xiYXIiLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBc3Nlc3NtZW50QWN0aXZpdHkiLCJ0ZXN0QWN0aXZpdHkiLCJERUZBVUxUX0VSUk9SIiwiY2xvc2VUZXN0IiwiQWN0aXZpdHlQcm9ncmVzcyIsIkFwcEJ1dHRvbiIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsImRhdGUiLCJEYXRlIiwibm93IiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJzZXRTaG93IiwiZW50cmllcyIsImxhbmdDb2RlIiwibGFuZ0RhdGEiLCJQcm9ncmVzc0l0ZW0iLCJvcHRpb25hbCIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJwcm9ncmVzc0l0ZW1zIiwicHJvZ3Jlc3NGaWVsZHMiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9leGVyY2lzZSIsIl9mcmVlQ29udmVyc2F0aW9uIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9lZGl0b3JUb29sYmFyIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNwb2tlbiIsIndyaXR0ZW4iLCJkZWJhdGUiLCJleGVyY2lzZSIsImRlZmluZVByb3BlcnR5IiwiX2NoYXQiLCJBY3Rpdml0eUNvbnRyb2wiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlDb21wb25lbnRWaWV3IiwiQ2hhdENvbnRyb2wiLCJhY3Rpdml0eURhdGEiLCJBc3Nlc3NtZW50QWN0aXZpdHlQcmV2aWV3IiwiX2FjdGl2aXR5Q29udHJvbCIsImF2YWlsYWJsZSIsImdldE1vZGFsQ2xhc3NOYW1lIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS9hcnRpY2xlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvYXJ0aWNsZS1wcmV2aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2NoYXJhY3Rlci1jb3VudGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2dhbGxlcnktbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvdXNlLXVwbG9hZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2V4ZXJjaXNlL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9leGVyY2lzZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9mcmVlLWNvbnZlcnNhdGlvbi9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZnJlZS1jb252ZXJzYXRpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci9lZGl0b3ItdG9vbGJhci50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvcHJldmlldy9hY3Rpdml0eS1jb250cm9sLnRzeCIsIi90cy9wcmV2aWV3L2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ByZXZpZXcvaW5kZXgudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYs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