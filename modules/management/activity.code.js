System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image", "lodash@4.17.21"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_4 = _pragmateUi100Beta7Form;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_7 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_8 = _pragmateUi100Beta7Collapsible;
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
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_19 = _pragmateUi100Beta7FormReactSelect;
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
    }, function (_lodash) {
      dependency_27 = _lodash;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/form', dependency_4], ['react', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/collapsible', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26], ['lodash', dependency_27]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 2347768452,
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
            const onBlur = activity.save;
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
            })))));
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
        hash: 1789629564,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          var _materials = require("./materials");
          function AdvancedFields() {
            const {
              texts
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title)))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced"
            }))))));
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
        hash: 91690501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          function ContentTheoryActivity({}) {
            const {
              texts,
              activity,
              store,
              saveActivity
            } = (0, _context.useActivityContext)();
            const [, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([activity], () => setUpdated({}));
            const toggleView = view => {
              if (view === 'specs' && activity.specs.empty()) {
                setView('empty');
                return;
              }
              setView(view);
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const onChange = event => {
              activity.set({
                description: event.currentTarget.value
              });
            };
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.Textarea, {
              label: texts.activities.description.label,
              name: "description",
              variant: "floating",
              placeholder: texts.activities.description.placeholder,
              value: activity.description,
              onChange: onChange
            }), React.createElement(_form2.SpecsForm, {
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
            }, React.createElement(_form2.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article
      *************************************************************/

      ims.set('./activities/content-theory/materials/article', {
        hash: 4019914665,
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
            const cls = `tab-container ${fetching ? ' is-fetching' : ''}`;
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
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
        hash: 4229091980,
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
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              required: true,
              title: materialTexts.refinement.title,
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
        hash: 3210392964,
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
        hash: 775623520,
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
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.contentTheory.materials.title), _react.default.createElement("div", {
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
        hash: 2379374794,
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
              notes
            }) => {
              try {
                const data = await activity.materials.generate('article', notes);
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

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 367046360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form2 = require("../specs/manual/form");
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
            const onBlur = activity.save;
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
            })))));
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
        hash: 2198781521,
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
        hash: 3821545880,
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
                question: event.target.value,
                options: answers
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
        hash: 2262903222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
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
            const onBlur = activity.save;
            const onCancel = () => {
              activity.specs.revert();
              setView('specs');
            };
            const changeView = () => setView('specs');
            const finalView = activity.specs.empty() && view === 'specs' ? 'empty' : view;
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
        hash: 551076203,
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
              className: "activity__section-header"
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
        hash: 2925245183,
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
            const onBlur = activity.save;
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
        hash: 3598479935,
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
              texts,
              activity,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
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
      INTERNAL MODULE: ./activities/specs/manual/dynamic/field
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/field', {
        hash: 2865166735,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomDynamicField = CustomDynamicField;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _form = require("pragmate-ui/form");
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
              onRemove,
              value
            } = (0, _dynamicField.useDynamicFieldContext)();
            const fields = Object.keys(data.fields);
            const values = specs[name] ? specs[name] : [];
            const defaultValues = {};
            const fieldTexts = texts.specs[name];
            const onBlur = event => {
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
                variant: "floating",
                onBlur: onBlur
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, _react.default.createElement("header", {
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
        hash: 430174846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _context = require("../../../../context");
          var _field = require("./field");
          function DynamicContainer({
            name,
            data
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
            const defaultValues = {};
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
              fields: Object.keys(data),
              value: values,
              name: name,
              onBlur: onBlur,
              onChange: onChange
            }, _react.default.createElement("section", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, fieldTexts.label), _react.default.createElement("div", {
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
        hash: 1333424901,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsForm = SpecsForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _dynamic = require("./dynamic");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function SpecsForm({
            type = 'agent'
          }) {
            const {
              texts,
              activity,
              store,
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
              const {
                label,
                placeholder
              } = texts.specs[name];
              const attrs = {
                label,
                placeholder,
                value: specs[name] ?? ''
              };
              if (typeof structure[name] === 'object' && structure[name].type !== 'array') {
                const Field = fieldTypes[structure[name].type];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  variant: "floating",
                  name: name,
                  ...attrs,
                  onChange: onChange,
                  onBlur: saveActivity
                });
              }
              if (typeof structure[name] === 'string') {
                const Field = fieldTypes[structure[name]];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange,
                  variant: "floating",
                  onBlur: saveActivity
                });
              }
              const Field = fieldTypes[structure[name].type];
              return _react.default.createElement(Field, {
                onChange: onChange,
                variant: "floating",
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
        hash: 766580479,
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
              activity,
              store
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
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange
                });
              }
              if (typeof specs.structure[name] === 'string') {
                const Field = fieldTypes[specs.structure[name]];
                return _react.default.createElement(Field, {
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange
                });
              }
              const Field = fieldTypes[specs.structure[name].type];
              return _react.default.createElement(Field, {
                variant: "floating",
                key: `${name}-${index}`,
                name: name,
                data: specs.structure[name],
                ...attrs
              });
            });
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "activity__section-header"
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
        hash: 145476041,
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
              className: "activity__section-header"
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
        hash: 1328952424,
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
            const onBlur = activity.save;
            const toggleView = view => setView(view);
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
        hash: 320771109,
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
        hash: 3413587927,
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
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _progress = require("./progress");
          var _toast = require("pragmate-ui/toast");
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
            };
            const onGnerate = specs => activity.generate(specs);
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            const test = async () => {
              try {
                if (!activity.readyToTest) {
                  _toast.toast.warning(texts.activities.test.warning);
                  return;
                }
                const response = await store.testActivity(activity.id);
                _routing.routing.pushState(`/assignments/${store.model.id}/${activity.type}/${activity.id}/chat/${response.activity.chat.id}?type=draft`);
                console.log(response);
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
              className: "flex-container flex-vertical-center gap-1"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "eye",
              className: "circle test-action-button",
              onClick: test
            }), _react.default.createElement(_ui.AIButton, {
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
              onGenerate: onGnerate
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./header/index
      ******************************/

      ims.set('./header/index', {
        hash: 66967748,
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
        hash: 3346310253,
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
            const state = value ? 'completed' : 'pending';
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
            }, name), _react.default.createElement("span", {
              className: "state"
            }, texts.progress.states[state])));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./header/progress
      *********************************/

      ims.set('./header/progress', {
        hash: 115624348,
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
              name: "picture"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              spec: true,
              name: "general"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              spec: true,
              name: "agent"
            }), _react.default.createElement(_progressItem.ProgressItem, {
              spec: true,
              name: "advanced"
            }))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1552168236,
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
          var _context = require("./context");
          var _multipleChoice = require("./activities/multiple-choice");
          var _spoken = require("./activities/spoken");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIk1hdGVyaWFsc1ZpZXciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiYWR2YW5jZWQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJhY3Rpb24iLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsIm1vZGFsIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJhY3Rpb25zIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsInNob3ciLCJvbkNhbmNlbCIsIl9hZHZhbmNlZEZpZWxkcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eSIsInN0b3JlIiwic2F2ZUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHMiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJvbkNvbnN1bWUiLCJ0YWJzIiwiZGF0YXNldCIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwib25DcmVhdGUiLCJhZGQiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGVNYXRlcmlhbCIsInNldFRpbWVvdXQiLCJkeXNsZXhpYSIsInN5bnRoZXNpcyIsIkRlYmF0ZUFjdGl2aXR5IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJkZWxldGVNb2RhbCIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9xdWVzdGlvbnMiLCJfY29udGV4dDIiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpbmRleCIsIm9wdGlvbnMiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwib25SZW1vdmUiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0IiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRmllbGQiLCJEeW5hbWljSWNvbkJ1dHRvbiIsIl9maWVsZCIsImhhc093blByb3BlcnR5Iiwid2FybiIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsImFycmF5IiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwicm91dGluZyIsImJhY2siLCJvbkduZXJhdGUiLCJ0b2dnbGVTdWdnZXN0aW9ucyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfcHJvZ3Jlc3MiLCJfdG9hc3QiLCJ0ZXN0IiwicmVhZHlUb1Rlc3QiLCJ0b2FzdCIsIndhcm5pbmciLCJ0ZXN0QWN0aXZpdHkiLCJwdXNoU3RhdGUiLCJjaGF0IiwiREVGQVVMVF9FUlJPUiIsIkFjdGl2aXR5UHJvZ3Jlc3MiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfaW1hZ2UiLCJzZXRTaG93IiwiZW4iLCJlcyIsIkltYWdlIiwiYWx0IiwiUHJvZ3Jlc3NJdGVtIiwic3BlYyIsIm9iaiIsInZhbGlkYXRlRGF0YSIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInByb2dyZXNzIiwic3RhdGVzIiwiX3Byb2dyZXNzSXRlbSIsInRvdGFsIiwicHJvZ3Jlc3NEYXRhIiwidmFsaWQiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfYnJlYWRjcnVtYiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2NvbnRleHQudHMiLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIvYnJlYWRjcnVtYi50c3giLCIvdHMvaGVhZGVyL2luZGV4LnRzeCIsIi90cy9oZWFkZXIvbGFuZ3VhZ2UudHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy1pdGVtLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0s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