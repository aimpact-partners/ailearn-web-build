System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/form', dependency_4], ['react', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/collapsible', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tabs', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/dynamic-list', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26]]);
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
        hash: 2590786469,
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
        hash: 3737843126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _react = require("react");
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
        hash: 344491556,
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
        hash: 4163355509,
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
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIk1hdGVyaWFsc1ZpZXciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiYWR2YW5jZWQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJhY3Rpb24iLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsIm1vZGFsIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJhY3Rpb25zIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsInNob3ciLCJvbkNhbmNlbCIsIl9hZHZhbmNlZEZpZWxkcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eSIsInN0b3JlIiwic2F2ZUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHMiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJvbkNvbnN1bWUiLCJ0YWJzIiwiZGF0YXNldCIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwib25DcmVhdGUiLCJhZGQiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGVNYXRlcmlhbCIsInNldFRpbWVvdXQiLCJkeXNsZXhpYSIsInN5bnRoZXNpcyIsIkRlYmF0ZUFjdGl2aXR5IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJkZWxldGVNb2RhbCIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9xdWVzdGlvbnMiLCJfY29udGV4dDIiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpbmRleCIsIm9wdGlvbnMiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkZpZWxkIiwiRHluYW1pY0ljb25CdXR0b24iLCJfZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJsYXp5SW5pdCIsIkR5bmFtaWNCdXR0b24iLCJEeW5hbWljRmllbGQiLCJhcnJheSIsInRvTWFwIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwib25HbmVyYXRlIiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInNldE5vdGVzIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJMYW5ndWFnZUZpZWxkIiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3Byb2dyZXNzIiwiX3RvYXN0IiwidGVzdCIsInJlYWR5VG9UZXN0IiwidG9hc3QiLCJ3YXJuaW5nIiwidGVzdEFjdGl2aXR5IiwicHVzaFN0YXRlIiwiY2hhdCIsIkRFRkFVTFRfRVJST1IiLCJBY3Rpdml0eVByb2dyZXNzIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlByb2dyZXNzSXRlbSIsInNwZWMiLCJvYmoiLCJ2YWxpZGF0ZURhdGEiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJwcm9ncmVzcyIsInN0YXRlcyIsIl9wcm9ncmVzc0l0ZW0iLCJ0b3RhbCIsInByb2dyZXNzRGF0YSIsInZhbGlkIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiX2JyZWFkY3J1bWIiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwiZGViYXRlIiwic3Bva2VuIiwiZGVmaW5lUHJvcGVydHkiLCJTYXZlQnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2JyZWFkY3J1bWIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJvZ3Jlc3MtaXRlbS50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6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