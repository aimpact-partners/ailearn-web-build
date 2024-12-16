System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form/react-select", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/dynamic-field", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "lodash@4.17.21", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_1 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_2 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_3 = _pragmateUi100Beta7Form;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_7 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ModulesManagementRefinamentCode) {
      dependency_9 = _aimpactAilearnApp031ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_11 = _pragmateUi100Beta7PerfectScrollbar;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_14 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7DynamicList) {
      dependency_16 = _pragmateUi100Beta7DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_17 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_18 = _pragmateUi100Beta7FormReactSelect;
    }, function (_framerMotion2) {
      dependency_19 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsDynamicField) {
      dependency_20 = _aimpactAilearnApp031ComponentsDynamicField;
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_lodash) {
      dependency_24 = _lodash;
    }, function (_pragmateUi100Beta7Image) {
      dependency_25 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['pragmate-ui/form', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/collapsible', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/perfect-scrollbar', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/dynamic-list', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23], ['lodash', dependency_24], ['pragmate-ui/image', dependency_25]]);
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
        hash: 3879083817,
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
              saveActivity();
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
        hash: 913373611,
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
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_form.Textarea, {
              name: "description",
              onChange: onChange,
              onBlur: onBlur,
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
        hash: 3068516802,
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
                onChange: onChange,
                key: `${name}-${i}`,
                variant: "floating",
                onBlur: onBlur
              });
            });
            if (!values.length) values.push(defaultValues);
            console.log(99, name);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h6", null, texts.specs[name].label, " ", index + 1), _react.default.createElement(_dynamicField.DynamicIconButton, {
              className: "circle",
              action: "remove",
              icon: "delete",
              index: index
            })), output);
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/index
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/index', {
        hash: 923500207,
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
              className: "section__label"
            }, _react.default.createElement("h6", null, fieldTexts.label), _react.default.createElement("div", {
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

      /****************************
      INTERNAL MODULE: ./breadcrumb
      ****************************/

      ims.set('./breadcrumb', {
        hash: 57089000,
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
          var _context = require("./context");
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
            };
            const onGnerate = specs => activity.generate(specs);
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "page-container"
            }, _react.default.createElement("div", {
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
            }, globalTexts.actions.generate))), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 654159545,
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
          var _context = require("./context");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              saveActivity
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3146115548,
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
          var _breadcrumb = require("./breadcrumb");
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
            (0, _hooks.useBinder)([activity], () => setValues({
              ...activity.getProperties()
            }), 'properties.changed');
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

      /**************************
      INTERNAL MODULE: ./language
      **************************/

      ims.set('./language', {
        hash: 1603135645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityLanguage = ActivityLanguage;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("./context");
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
        "im": "./header",
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
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./header').ActivityHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2Zvcm0iLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9mb3JtMiIsIkNoYXJhY3RlclRhbGtBY3Rpdml0eSIsInRleHRzIiwiYWN0aXZpdHkiLCJ1c2VBY3Rpdml0eUNvbnRleHQiLCJ2aWV3Iiwic2V0VmlldyIsInVzZVN0YXRlIiwic3BlY3MiLCJlbXB0eSIsInRvZ2dsZVZpZXciLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwib25MaXN0ZW4iLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsIlRleHRhcmVhIiwidmFyaWFudCIsImxhYmVsIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwic2VjdGlvbnMiLCJhZ2VudCIsInRpdGxlIiwic3VidGl0bGUiLCJBcHBJY29uIiwiaWNvbiIsIl9yZWFjdCIsIl9zcGVjcyIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJTcGVjcyIsIl9jb2xsYXBzaWJsZSIsIl9tYXRlcmlhbHMiLCJBZHZhbmNlZEZpZWxkcyIsIk1hdGVyaWFsc1ZpZXciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiYWR2YW5jZWQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJhY3Rpb24iLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsIm1vZGFsIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ29uZmlybSIsIkNvbnRyb2wiLCJBcHBJY29uQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJhY3Rpb25zIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsInNob3ciLCJvbkNhbmNlbCIsIl9hZHZhbmNlZEZpZWxkcyIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eSIsInN0b3JlIiwic2F2ZUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwidmFsdWVzIiwiZ2xvYmFsVGV4dHMiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtYW51YWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJ0YXJnZXQiLCJvbkRlbGV0ZSIsImNsZWFyIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHMiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdWkiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJnZW5lcmF0b3IiLCJvbkNvbnN1bWUiLCJ0YWJzIiwiZGF0YXNldCIsInB1c2giLCJUYWIiLCJrZXkiLCJmb3JFYWNoIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTWF0ZXJpYWxzSGVhZGVyTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiTWF0ZXJpYWxQYW5lIiwib25DcmVhdGUiLCJhZGQiLCJNYXRlcmlhbExpc3QiLCJ0cnVuY2F0ZVRleHQiLCJzdWJzdHJpbmciLCJJY29uQnV0dG9uIiwiTWFudWFsTWF0ZXJpYWxGb3JtIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25Nb2RhbENhbmNlbCIsInRleHRhcmVhIiwiX2VtcHR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsInVuZGVmaW5lZCIsImUiLCJjb25zb2xlIiwibG9nIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGVNYXRlcmlhbCIsInNldFRpbWVvdXQiLCJkeXNsZXhpYSIsInN5bnRoZXNpcyIsIkRlYmF0ZUFjdGl2aXR5IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJkZWxldGVNb2RhbCIsIk11bHRpcGxlQ2hvaWNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRRdWVzdGlvbiIsIl9xdWVzdGlvbnMiLCJfY29udGV4dDIiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpbmRleCIsIm9wdGlvbnMiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwibW9kZWwiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwibW9kYWxRdWVzdGlvbnMiLCJkZXNjcmlwY3Rpb24iLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsInJlZmluZSIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsImVtcHR5T3B0aW9ucyIsIk9iamVjdGl2ZUZpZWxkIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIkVtcHR5U3BlY3MiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwib25SZW1vdmUiLCJ1c2VEeW5hbWljRmllbGRDb250ZXh0IiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJpIiwiRmllbGQiLCJEeW5hbWljSWNvbkJ1dHRvbiIsIl9maWVsZCIsImhhc093blByb3BlcnR5Iiwid2FybiIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsImFycmF5IiwidG9NYXAiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX3JvdXRpbmciLCJCcmVhZENydW1iSGVhZGVyIiwib25CYWNrIiwiZWRpdEFjdGl2aXR5Iiwib25HbmVyYXRlIiwicm91dGluZyIsImJhY2siLCJ0b2dnbGVTdWdnZXN0aW9ucyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJhcmdzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJfYnJlYWRjcnVtYiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsInNldFNob3ciLCJlbiIsImVzIiwiSW1hZ2UiLCJhbHQiLCJTYXZlQnV0dG9uIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvY2hhcmFjdGVyLXRhbGsvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2xhbmd1YWdlLnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFFTSxTQUFVTyxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHVCxLQUFLLENBQUNVLFFBQVEsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTUMsVUFBVSxHQUFHTCxJQUFJLElBQUlDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ3hDLE1BQU1NLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RFgsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTUUsTUFBTSxHQUFHYixRQUFRLENBQUNjLElBQUk7WUFDNUIsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTWIsSUFBSSxHQUFHRixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FDdkRILE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUVELElBQUFWLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDLEVBQUVlLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFBdkIsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUNLLEtBQUssQ0FBQyxFQUFFVSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE9BQ0NyQixLQUFBLENBQUF1QixhQUFBLENBQUF2QixLQUFBLENBQUF3QixRQUFBLFFBQ0N4QixLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDckIsT0FBQSxDQUFBd0IsY0FBYyxPQUFHLEVBQ2xCMUIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCWixJQUFJLEVBQUMsYUFBYTtjQUNsQmEsS0FBSyxFQUFFeEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNGLEtBQUs7Y0FDekNWLE1BQU0sRUFBRUEsTUFBTTtjQUNkTCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJrQixXQUFXLEVBQUUzQixLQUFLLENBQUN5QixVQUFVLENBQUNDLFdBQVcsQ0FBQ0MsV0FBVztjQUNyRGYsS0FBSyxFQUFFWCxRQUFRLENBQUN5QjtZQUFXLEVBQzFCLEVBQ0YvQixLQUFBLENBQUF1QixhQUFBLENBQUNwQixNQUFBLENBQUE4QixTQUFTO2NBQUNwQixVQUFVLEVBQUVBLFVBQVU7Y0FBRXFCLElBQUksRUFBQztZQUFTLEVBQUcsQ0FDL0MsQ0FDRCxDQUNHLEVBQ1ZsQyxLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUEyQixHQUM3Q3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLEtBQUEsQ0FBQXVCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0ssUUFBUSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUNoRHJDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQVUsR0FDeEJwQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDRSxRQUFRLEVBQ3pDdEMsS0FBQSxDQUFBdUIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBMkMsT0FBTztjQUFDZCxTQUFTLEVBQUMsY0FBYztjQUFDZSxJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3hDLENBQ0YsQ0FDRSxFQUNUeEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLENBQUNwQixNQUFBLENBQUE4QixTQUFTO2NBQUNwQixVQUFVLEVBQUVBO1lBQVUsRUFBSSxDQUNoQyxDQUNELENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBNEIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUE2QyxNQUFBLEdBQUE3QyxPQUFBO1VBS00sU0FBVThDLGVBQWVBLENBQUM7WUFBRTlCO1VBQVUsQ0FBRTtZQUM3QyxPQUNDNEIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDbUIsTUFBQSxDQUFBRyxLQUFLLE9BQUcsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFKLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBaUQsWUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFrRCxVQUFBLEdBQUFsRCxPQUFBO1VBRU0sU0FBVW1ELGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFM0M7WUFBSyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV0QyxPQUNDa0MsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDd0IsVUFBQSxDQUFBRSxhQUFhLE9BQUcsRUFDakJSLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBTyxHQUNyQmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUIsWUFBQSxDQUFBSSxvQkFBb0IsUUFDcEJULE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUIsWUFBQSxDQUFBSyxpQkFBaUIsUUFDakJWLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ2lCLFFBQVEsQ0FBQ2YsS0FBSyxDQUFNLENBQzlDLENBQ0UsQ0FDVSxFQUVwQkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1QixZQUFBLENBQUFPLGtCQUFrQixRQUNsQlosTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBa0MsU0FBUztjQUFDQyxJQUFJLEVBQUM7WUFBVSxFQUFHLENBQ3hCLENBQ2MsQ0FDQyxDQUNsQixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUFPLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBZ0JNLFNBQVUyRCxhQUFhQSxDQUFDO1lBQzdCL0IsU0FBUztZQUNUZ0MsUUFBUSxHQUFHLEtBQUs7WUFDaEI3QixPQUFPLEdBQUcsU0FBUztZQUNuQlksSUFBSTtZQUNKa0IsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLEVBQUUsR0FBRyxRQUFRO1lBQ2JDLFFBQVE7WUFDUnhCLEtBQUs7WUFDTE4sV0FBVztZQUNYK0IsTUFBTSxHQUFHLFFBQVE7WUFDakJDO1VBQVEsQ0FDc0I7WUFDOUIsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHeEIsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLE1BQU0sQ0FBQ3dELEtBQUssRUFBRTdELEtBQUssQ0FBQyxHQUFHLElBQUFQLE1BQUEsQ0FBQXFFLFFBQVEsRUFBQywyQkFBMkIsQ0FBQztZQUU1RCxJQUFJLENBQUNELEtBQUssRUFBRTtZQUVaN0IsS0FBSyxHQUFHQSxLQUFLLElBQUloQyxLQUFLLENBQUMrRCxLQUFLLENBQUNOLE1BQU0sQ0FBQyxDQUFDekIsS0FBSztZQUMxQ04sV0FBVyxHQUFHQSxXQUFXLElBQUkxQixLQUFLLENBQUMrRCxLQUFLLENBQUNOLE1BQU0sQ0FBQyxDQUFDL0IsV0FBVztZQUU1RCxNQUFNc0MsVUFBVSxHQUFHQSxDQUFBLEtBQU1KLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFDdkMsTUFBTU0sYUFBYSxHQUFHQyxLQUFLLElBQUc7Y0FDN0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCSCxVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUQsTUFBTUksU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixNQUFNZCxRQUFRLEVBQUU7Y0FDaEJVLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFDRCxNQUFNSyxPQUFPLEdBQUdkLEVBQUUsS0FBSyxNQUFNLEdBQUdoRSxNQUFBLENBQUErRSxhQUFhLEdBQUdwQixXQUFBLENBQUFxQixNQUFNO1lBQ3RELE9BQ0NuQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtRCxPQUFPO2NBQ1BqRCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJvQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJKLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjdCLE9BQU8sRUFBRUEsT0FBTztjQUNoQlksSUFBSSxFQUFFQSxJQUFJO2NBQ1ZILEtBQUssRUFBRXFCLE9BQU87Y0FDZG1CLE9BQU8sRUFBRVA7WUFBYSxHQUVyQlAsUUFBUSxDQUNBLEVBQ1RDLElBQUksSUFDSnZCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDK0IsTUFBQSxDQUFBd0IsWUFBWTtjQUNaQyxVQUFVLEVBQUU7Z0JBQ1hsRCxLQUFLLEVBQUV4QixLQUFLLENBQUMyRSxPQUFPLENBQUNDLE9BQU87Z0JBQzVCckQsT0FBTyxFQUFFO2VBQ1Q7Y0FDRHNELFNBQVMsRUFBRTtnQkFDVnJELEtBQUssRUFBRXhCLEtBQUssQ0FBQzJFLE9BQU8sQ0FBQ0csTUFBTTtnQkFDM0J2RCxPQUFPLEVBQUUsU0FBUztnQkFDbEJpQyxRQUFRLEVBQUU7ZUFDVjtjQUNEdUIsSUFBSTtjQUNKWCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJZLFFBQVEsRUFBRWhCO1lBQVUsR0FFcEI1QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLYyxLQUFLLENBQU0sRUFDaEJJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxZQUFJUSxXQUFXLENBQUssQ0FDZixDQUVQLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRkEsSUFBQW5DLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUVBLElBQUF5RixlQUFBLEdBQUF6RixPQUFBO1VBRU0sU0FBVTBGLHFCQUFxQkEsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU07Y0FBRWxGLEtBQUs7Y0FBRUMsUUFBUTtjQUFFa0YsS0FBSztjQUFFQztZQUFZLENBQUUsR0FBRyxJQUFBeEYsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUNyRSxNQUFNLEdBQUdFLE9BQU8sQ0FBQyxHQUFHVCxLQUFLLENBQUNVLFFBQVEsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDOUUsTUFBTSxHQUFHOEUsVUFBVSxDQUFDLEdBQUcxRixLQUFLLENBQUNVLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDekMsSUFBQVosTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUMsRUFBRSxNQUFNb0YsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLE1BQU03RSxVQUFVLEdBQUdMLElBQUksSUFBRztjQUN6QixJQUFJQSxJQUFJLEtBQUssT0FBTyxJQUFJRixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7Z0JBQy9DSCxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNoQjs7Y0FHREEsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsTUFBTWEsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTWIsSUFBSSxHQUFHRixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FDdkRILE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELElBQUFWLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDLEVBQUVlLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFBdkIsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUNLLEtBQUssQ0FBQyxFQUFFVSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBRXRELE1BQU1QLFFBQVEsR0FBR3lELEtBQUssSUFBRztjQUN4QmpFLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFYSxXQUFXLEVBQUV3QyxLQUFLLENBQUN4RCxhQUFhLENBQUNFO2NBQUssQ0FBRSxDQUFDO2NBQ3hEd0UsWUFBWSxFQUFFO1lBQ2YsQ0FBQztZQUVELE9BQ0N6RixLQUFBLENBQUF1QixhQUFBLENBQUF2QixLQUFBLENBQUF3QixRQUFBLFFBQ0N4QixLQUFBLENBQUF1QixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUMvQ3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFFO1lBQWdCLEdBQy9CekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDckIsT0FBQSxDQUFBd0IsY0FBYyxPQUFHLEVBQ2xCMUIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRixLQUFLO2NBQ3pDYixJQUFJLEVBQUMsYUFBYTtjQUNsQlksT0FBTyxFQUFDLFVBQVU7Y0FDbEJJLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXO2NBQ3JEZixLQUFLLEVBQUVYLFFBQVEsQ0FBQ3lCLFdBQVc7Y0FDM0JqQixRQUFRLEVBQUVBO1lBQVEsRUFDakIsRUFDRmQsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDQyxJQUFJLEVBQUM7WUFBUyxFQUFHLENBQ3ZCLENBQ0QsQ0FDRyxFQUNWbEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDaERyQyxLQUFBLENBQUF1QixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCcEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDSyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxFQUN6Q3RDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ2QsU0FBUyxFQUFDLGNBQWM7Y0FBQ2UsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVHhDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUyxPQUFHLENBQ1IsRUFFTmpDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQytELGVBQUEsQ0FBQXRDLGNBQWMsT0FBRyxDQUNiLENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pFQSxJQUFBUCxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTBELFdBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBOEYsU0FBQSxHQUFBOUYsT0FBQTtVQUVBLElBQUErRixhQUFBLEdBQUEvRixPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWdHLGNBQUEsR0FBQWhHLE9BQUE7VUFDTSxTQUFVaUcsVUFBVUEsQ0FBQztZQUFFQztVQUFPLENBQUU7WUFDckMsTUFBTTtjQUFFMUYsS0FBSztjQUFFbUYsS0FBSztjQUFFUSxNQUFNO2NBQUUxRjtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQy9ELE1BQU07Y0FBRTBGO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBQzdCLE1BQU1VLGFBQWEsR0FBRzdGLEtBQUssQ0FBQzhGLGFBQWEsQ0FBQ0MsU0FBUztZQUNuRCxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc3RCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQ3NGLE1BQU0sQ0FBQ0ksU0FBUyxFQUFFRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQzdFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUNnRyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHbEUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1rRyxZQUFZLEdBQUdBLENBQUEsS0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztZQUM3QyxNQUFNNUYsUUFBUSxHQUFHeUQsS0FBSyxJQUFHO2NBQ3hCK0IsVUFBVSxDQUFDL0IsS0FBSyxDQUFDc0MsTUFBTSxDQUFDNUYsS0FBSyxDQUFDO1lBQy9CLENBQUM7WUFDRCxJQUFBbkIsTUFBQSxDQUFBd0IsU0FBUyxFQUNSLENBQUNoQixRQUFRLENBQUM4RixTQUFTLENBQUMsRUFDcEIsTUFBSztjQUNKRSxVQUFVLENBQUNoRyxRQUFRLENBQUM4RixTQUFTLENBQUNHLE9BQU8sQ0FBQztZQUN2QyxDQUFDLEVBQ0QsaUJBQWlCLENBQ2pCO1lBRUQsTUFBTU8sUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQnhHLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ1csS0FBSyxFQUFFO2NBQzFCekcsUUFBUSxDQUFDYyxJQUFJLEVBQUU7WUFDaEIsQ0FBQztZQUNELE1BQU00RixhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQkosWUFBWSxFQUFFO1lBQ2YsQ0FBQztZQUNELE1BQU1LLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekJSLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJuRyxRQUFRLENBQUM4RixTQUFTLENBQUNsRixHQUFHLENBQUM7Z0JBQUVxRixPQUFPLEVBQUVGO2NBQU8sQ0FBRSxDQUFDO2NBQzVDLE1BQU0vRixRQUFRLENBQUNjLElBQUksRUFBRTtjQUNyQnFGLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJHLFlBQVksRUFBRTtZQUNmLENBQUM7WUFDRCxJQUFJLENBQUNGLE1BQU0sSUFBSSxDQUFDcEcsUUFBUSxDQUFDOEYsU0FBUyxDQUFDRyxPQUFPLEVBQUU7Y0FDM0MsT0FBTzlELE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDcUUsYUFBQSxDQUFBc0Isb0JBQW9CO2dCQUFDbEcsSUFBSSxFQUFDLFNBQVM7Z0JBQUNtRyxRQUFRLEVBQUVQO2NBQVksRUFBSTs7WUFFdkUsSUFBSSxDQUFDRixNQUFNLElBQUlwRyxRQUFRLENBQUM4RixTQUFTLENBQUNHLE9BQU8sRUFBRTtjQUMxQyxPQUNDOUQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtnQkFBS0UsU0FBUyxFQUFDO2NBQWtCLEdBQ2hDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvRSxTQUFBLENBQUF5QixRQUFRO2dCQUFDZixPQUFPLEVBQUUvRixRQUFRLENBQUM4RixTQUFTLENBQUNHO2NBQU8sRUFBSSxDQUM1QyxFQUVOOUQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2dCQUFRRSxTQUFTLEVBQUM7Y0FBOEIsR0FDL0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Z0JBQUNwQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ3FDLE9BQU8sRUFBRStCLFlBQVk7Z0JBQUVoRixPQUFPLEVBQUMsU0FBUztnQkFBQ2lDLFFBQVE7Y0FBQSxHQUNuRW9DLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3FDLElBQUksQ0FDakIsRUFDVDVFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc0UsY0FBQSxDQUFBckMsYUFBYTtnQkFBQ2hCLElBQUksRUFBQyxRQUFRO2dCQUFDbUIsUUFBUSxFQUFFbUQsUUFBUTtnQkFBRWxGLE9BQU8sRUFBQyxTQUFTO2dCQUFDaUMsUUFBUTtjQUFBLEdBQ3pFb0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTSxDQUNaLENBQ1IsQ0FDUDs7WUFJTCxNQUFNQyxHQUFHLEdBQUcsaUJBQWlCZixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUM3RCxNQUFNZ0IsYUFBYSxHQUFHLHdCQUNyQm5CLE9BQU8sQ0FBQ29CLE1BQU0sR0FBRyxJQUFJLEdBQUlwQixPQUFPLENBQUNvQixNQUFNLEdBQUcsSUFBSSxHQUFHLGFBQWEsR0FBRyxlQUFlLEdBQUksRUFDckYsRUFBRTtZQUNGLE9BQ0NoRixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUEySCxJQUFJO2NBQUNqRyxTQUFTLEVBQUMsOEJBQThCO2NBQUNrRyxRQUFRLEVBQUVWO1lBQU0sR0FDOUR4RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXFCLEdBQ25DZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JiLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkUsSUFBSSxFQUFDLFNBQVM7Y0FDZHlDLFFBQVEsRUFBRStDLFFBQVE7Y0FDbEJ2RixLQUFLLEVBQUVvRixPQUFPO2NBQ2RyRSxXQUFXLEVBQUVrRSxhQUFhLENBQUMwQixJQUFJLENBQUNyQixPQUFPLENBQUN2RTtZQUFXLEVBQ2xELENBQ0csRUFDTlMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBRStGO1lBQWEsR0FDM0JuSCxLQUFLLENBQUM4RixhQUFhLENBQUNDLFNBQVMsQ0FBQ3lCLFVBQVUsRSxLQUFHLElBQUksR0FBR3hCLE9BQU8sQ0FBQ29CLE1BQU0sQ0FDNUQsQ0FDQSxFQUVQaEYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDQyxPQUFPLEVBQUVtQyxhQUFhO2NBQUVwRixPQUFPLEVBQUMsU0FBUztjQUFDaUMsUUFBUTtjQUFDSixRQUFRLEVBQUUrQztZQUFRLEdBQzNFUCxXQUFXLENBQUNqQixPQUFPLENBQUNHLE1BQU0sQ0FDbkIsRUFDVDFDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDaEQsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lELE9BQU8sRUFBRW9DLE1BQU07Y0FBRXhELFFBQVEsRUFBRStDO1lBQVEsR0FDM0RQLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQzVELElBQUksQ0FDakIsQ0FDRCxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakdBLElBQUFxQixNQUFBLEdBQUE1QyxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRUEsSUFBQWlJLEdBQUEsR0FBQWpJLE9BQUE7VUFHQSxJQUFBa0ksYUFBQSxHQUFBbEksT0FBQTtVQUVNLFNBQVVtSSx1QkFBdUJBLENBQUMsRUFBb0M7WUFDM0UsTUFBTTtjQUNMM0gsS0FBSztjQUNMbUYsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNO2NBQUUwSDtZQUFhLENBQUUsR0FBRyxJQUFBRixhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBQzlDLE1BQU1DLFVBQVUsR0FBR0YsYUFBYTtZQUVoQyxPQUNDeEYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUcsR0FBQSxDQUFBTSxTQUFTO2NBQ1QzRyxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCNEcsSUFBSSxFQUFFaEksS0FBSyxDQUFDeUIsVUFBVSxDQUFDbEIsS0FBSyxDQUFDeUIsS0FBSztjQUNsQ04sV0FBVyxFQUFFMUIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDbEIsS0FBSyxDQUFDbUI7WUFBVyxHQUUvQ1UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFtQixHQUNqQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUcsR0FBQSxDQUFBUSxRQUFRO2NBQUN6RCxPQUFPLEVBQUVzRCxVQUFVO2NBQUV2RyxPQUFPLEVBQUM7WUFBUyxHQUM5Q3FFLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDTixDQUNLLENBQ1Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQXpJLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUdBLElBQUEySSxLQUFBLEdBQUEzSSxPQUFBO1VBRU0sU0FBVTRJLGtCQUFrQkEsQ0FBQTtZQUNqQyxNQUFNO2NBQUVuSSxRQUFRO2NBQUVELEtBQUs7Y0FBRW1GO1lBQUssQ0FBRSxHQUFHLElBQUF2RixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU0sQ0FBQ21JLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUczSSxLQUFLLENBQUNVLFFBQVEsQ0FBQ0osUUFBUSxDQUFDOEYsU0FBUyxDQUFDc0MsTUFBTSxDQUFDO1lBRXJFLElBQUE1SSxNQUFBLENBQUF3QixTQUFTLEVBQ1IsQ0FBQ2hCLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQyxFQUNwQixNQUFLO2NBQ0p1QyxTQUFTLENBQUM7Z0JBQUUsR0FBR3JJLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ3NDO2NBQU0sQ0FBRSxDQUFDO1lBQzVDLENBQUMsRUFDRCxnQkFBZ0IsQ0FDaEI7WUFFRCxPQUNDMUksS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaEN6QixLQUFBLENBQUF1QixhQUFBLENBQUNpSCxLQUFBLENBQUFJLHNCQUFzQjtjQUFDMUcsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUN6Q2xDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ2lILEtBQUEsQ0FBQUksc0JBQXNCO2NBQUMxRyxJQUFJLEVBQUM7WUFBVSxFQUFHLENBQ3JDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUE0RixHQUFBLEdBQUFqSSxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBZ0csY0FBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFrSSxhQUFBLEdBQUFsSSxPQUFBO1VBR08sTUFBTStJLHNCQUFzQixHQUFHQSxDQUFDO1lBQUUxRztVQUFJLENBQUUsS0FBSTtZQUNsRCxNQUFNO2NBQUVzRCxLQUFLO2NBQUVsRixRQUFRO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDdkQsTUFBTTtjQUFFMEY7WUFBVyxDQUFFLEdBQUdULEtBQUs7WUFDN0IsTUFBTTtjQUFFa0Q7WUFBTSxDQUFFLEdBQUdwSSxRQUFRLENBQUM4RixTQUFTO1lBQ3JDLE1BQU07Y0FBRTZCLGFBQWE7Y0FBRXpCLFFBQVE7Y0FBRXFDO1lBQVcsQ0FBRSxHQUFHLElBQUFkLGFBQUEsQ0FBQUcsa0JBQWtCLEdBQUU7WUFFckUsTUFBTVksR0FBRyxHQUFHLENBQUMsQ0FBQ3hJLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ3NDLE1BQU0sR0FBR3hHLElBQUksQ0FBQztZQUMvQyxNQUFNNkcsY0FBYyxHQUFHeEUsS0FBSyxJQUFHO2NBQzlCMEQsYUFBYSxDQUFDLENBQUMxRCxLQUFLLENBQUN4RCxhQUFhLENBQUNFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxNQUFNNkYsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsT0FBTytCLFdBQVcsQ0FBQyxDQUFDM0csSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU04RyxZQUFZLEdBQUcsQ0FBQzFJLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ2xFLElBQUksQ0FBQyxFQUFFdUYsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJO1lBRW5FLE9BQ0NoRixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGNBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzhGLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDNkMsS0FBSyxDQUFDL0csSUFBSSxDQUFDLENBQU0sRUFDbkQsQ0FBQzRHLEdBQUcsR0FDSnJHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0V3SCxZQUFZLEdBQ1p2RyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDcEIsS0FBSyxDQUFDOEYsYUFBYSxDQUFDQyxTQUFTLENBQUM4QyxLQUFLLENBQUNDLE9BQU8sQ0FDdEMsR0FFUDFHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBeUIsR0FDdkNwQixLQUFLLENBQUM4RixhQUFhLENBQUNDLFNBQVMsQ0FBQzhDLEtBQUssQ0FBQ0UsU0FBUyxDQUUvQyxDQUNDLEdBQ0EsSUFBSSxDQUNILEVBQ04zRyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDRXVILEdBQUcsR0FDSHJHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMkMsR0FDekRnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQXVCLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFWixNQUFNLENBQUN4RyxJQUFJLENBQUMsQ0FBQ29IO1lBQUcsRUFBSSxFQUN0QzdHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc0UsY0FBQSxDQUFBckMsYUFBYTtjQUNiL0IsU0FBUyxFQUFDLFFBQVE7Y0FDbEJpQyxPQUFPLEVBQUV1QyxXQUFXLENBQUNqQixPQUFPLENBQUNzQyxNQUFNO2NBQ25DOUUsSUFBSSxFQUFDLFFBQVE7Y0FDYm9CLEVBQUUsRUFBQyxNQUFNO2NBQ1RELFFBQVEsRUFBRW1ELFFBQVE7Y0FDbEJyRCxRQUFRLEVBQUUrQyxRQUFRO2NBQ2xCNUUsT0FBTyxFQUFDO1lBQVMsRUFDaEIsQ0FDRyxHQUVOYSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQVEsUUFBUTtjQUNSN0UsUUFBUSxFQUFFLENBQUN1RixZQUFZO2NBQ3ZCeEMsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCdkYsS0FBSyxFQUFFaUIsSUFBSTtjQUNYMkMsT0FBTyxFQUFFa0UsY0FBYztjQUN2Qm5ILE9BQU8sRUFBQztZQUFTLEdBRWhCcUUsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUU5QixDQUNJLENBQ0Q7VUFFUixDQUFDO1VBQUNnQixPQUFBLENBQUFYLHNCQUFBLEdBQUFBLHNCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFRixJQUFBOUksTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQTJKLEtBQUEsR0FBQTNKLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVBLElBQUEySSxLQUFBLEdBQUEzSSxPQUFBO1VBQ0EsSUFBQTBELFdBQUEsR0FBQTFELE9BQUE7VUFDTSxTQUFVNEosc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FDTG5KLFFBQVE7Y0FDUmtGLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDbUcsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2xFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRCxNQUFNLENBQUM4RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNKLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDO1lBQzNFLE1BQU07Y0FBRWtDO1lBQU0sQ0FBRSxHQUFHcEksUUFBUSxDQUFDOEYsU0FBUztZQUNyQyxJQUFBdEcsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUM4RixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDTyxTQUFTLENBQUMsS0FBSyxDQUFDO2NBQ2hCRixXQUFXLENBQUNuRyxRQUFRLENBQUM4RixTQUFTLENBQUNJLFFBQVEsQ0FBQztZQUN6QyxDQUFDLENBQUM7WUFFRixNQUFNa0QsS0FBSyxHQUFHLENBQUMsQ0FBQ2hCLE1BQU0sR0FBR2lCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbEIsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNqRCxNQUFNNUIsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQkwsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNbkcsUUFBUSxDQUFDOEYsU0FBUyxDQUFDeUQsWUFBWSxFQUFFO2NBRXZDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FDQ2hFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpSSxLQUFBLENBQUFNLElBQUk7Y0FBQ3JJLFNBQVMsRUFBQyxlQUFlO2NBQUNpSSxLQUFLLEVBQUVBLEtBQUs7Y0FBRUssT0FBTyxFQUFFdkIsS0FBQSxDQUFBSSxzQkFBc0I7Y0FBRWhGLEVBQUUsRUFBQztZQUFLLEVBQUcsRSxJQUNyRixFQUNObkIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE4QixHQUMvQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDcEMsSUFBSSxFQUFDLFFBQVE7Y0FBQ3FDLE9BQU8sRUFBRWlDLFFBQVE7Y0FBRWxGLE9BQU8sRUFBQyxTQUFTO2NBQUNpQyxRQUFRO1lBQUEsR0FDakVvQyxXQUFXLENBQUNqQixPQUFPLENBQUNzQyxNQUFNLENBQ25CLENBQ0QsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBUSxHQUFBLEdBQUFqSSxPQUFBO1VBQ0EsSUFBQW1LLFdBQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQWtJLGFBQUEsR0FBQWxJLE9BQUE7VUFFTSxTQUFVcUgsb0JBQW9CQSxDQUFDO1lBQUVsRyxJQUFJO1lBQUVtRztVQUFRLENBQUU7WUFDdEQsTUFBTTtjQUNMN0csUUFBUTtjQUNSRCxLQUFLO2NBQ0xtRixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFoRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0yRixhQUFhLEdBQUc3RixLQUFLLENBQUM4RixhQUFhLENBQUNDLFNBQVM7WUFDbkQsTUFBTSxDQUFDNkQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHekgsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sR0FBR3lKLE9BQU8sQ0FBQyxHQUFHMUgsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNKLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ3BGLElBQUksQ0FBQyxDQUFDO1lBQzVELE1BQU07Y0FBRXlGLFdBQVc7Y0FBRTJEO1lBQWUsQ0FBRSxHQUFHLElBQUFyQyxhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBQzdELE1BQU1tQyxXQUFXLEdBQUdBLENBQUEsS0FBTUgsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELE1BQU14RyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUNuRCxRQUFRLENBQUMrQjtZQUFLLENBQUU7WUFFOUMsSUFBQXZDLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDOEYsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ0ssV0FBVyxDQUFDbkcsUUFBUSxDQUFDOEYsU0FBUyxDQUFDSSxRQUFRLENBQUM7Y0FDeEMyRCxPQUFPLENBQUM3SixRQUFRLENBQUM4RixTQUFTLENBQUNwRixJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixPQUNDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUcsR0FBQSxDQUFBTSxTQUFTO2NBQ1QzRyxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCNEcsSUFBSSxFQUFFaEksS0FBSyxDQUFDeUIsVUFBVSxDQUFDbEIsS0FBSyxDQUFDeUIsS0FBSztjQUNsQ04sV0FBVyxFQUFFMUIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDbEIsS0FBSyxDQUFDbUI7WUFBVyxHQUUvQ1UsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFtQixHQUNqQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDaEQsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lDLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRXNDO1lBQVEsR0FDbERsQixXQUFXLENBQUNqQixPQUFPLENBQUMwQixNQUFNLENBQ25CLEVBQ1RqRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQVEsUUFBUTtjQUFDekQsT0FBTyxFQUFFd0YsV0FBVztjQUFFekksT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLNkI7WUFBUSxHQUM1RHdDLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDTixDQUdLLEVBQ1gwQixlQUFlLElBQ2Z4SCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3lJLFdBQUEsQ0FBQU0sZUFBZTtjQUNmbEYsSUFBSSxFQUFFNkUsZUFBZTtjQUNyQk0sUUFBUTtjQUNSbEksS0FBSyxFQUFFNkQsYUFBYSxDQUFDc0UsVUFBVSxDQUFDbkksS0FBSztjQUNyQ04sV0FBVyxFQUFFbUUsYUFBYSxDQUFDc0UsVUFBVSxDQUFDekksV0FBVztjQUNqRGdFLE9BQU8sRUFBRXNFLFdBQVc7Y0FDcEJsQyxVQUFVLEVBQUVpQztZQUFlLEVBRTVCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQTNILE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBaUksR0FBQSxHQUFBakksT0FBQTtVQUdBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtELFVBQUEsR0FBQWxELE9BQUE7VUFFTSxTQUFVNEssYUFBYUEsQ0FBQztZQUFFekosSUFBSTtZQUFFbUc7VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FDTDdHLFFBQVE7Y0FDUkQsS0FBSztjQUNMbUYsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUMwSixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd6SCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDOEYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUM4RixTQUFTLENBQUNJLFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUcyRCxPQUFPLENBQUMsR0FBRzFILE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUM4RixTQUFTLENBQUNwRixJQUFJLENBQUMsQ0FBQztZQUM1RCxNQUFNcUosV0FBVyxHQUFHQSxDQUFBLEtBQU1ILGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUU5RCxJQUFBbkssTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUM4RixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDSyxXQUFXLENBQUNuRyxRQUFRLENBQUM4RixTQUFTLENBQUNJLFFBQVEsQ0FBQztjQUN4QzJELE9BQU8sQ0FBQzdKLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ3BGLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLE1BQU15QyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUNuRCxRQUFRLENBQUMrQixLQUFLLElBQUksQ0FBQy9CLFFBQVEsQ0FBQzhGLFNBQVMsRUFBRUc7WUFBTyxDQUFFO1lBRTlFLE9BQ0M5RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1RyxHQUFBLENBQUFNLFNBQVM7Y0FDVDNHLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0I0RyxJQUFJLEVBQUVoSSxLQUFLLENBQUN5QixVQUFVLENBQUNsQixLQUFLLENBQUN5QixLQUFLO2NBQ2xDTixXQUFXLEVBQUUxQixLQUFLLENBQUN5QixVQUFVLENBQUNsQixLQUFLLENBQUNtQjtZQUFXLEdBRS9DVSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsU0FBUztjQUFDaUMsUUFBUTtjQUFDZ0IsT0FBTyxFQUFFc0M7WUFBUSxHQUNsRGxCLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQzBCLE1BQU0sQ0FDbkIsRUFDVGpFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUcsR0FBQSxDQUFBUSxRQUFRO2NBQUN6RCxPQUFPLEVBQUV3RixXQUFXO2NBQUV6SSxPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUs2QjtZQUFRLEdBQzVEd0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUNuQixDQUNOLENBRUssRUFDWDBCLGVBQWUsSUFBSXhILE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDd0IsVUFBQSxDQUFBMkgseUJBQXlCO2NBQUN4SSxJQUFJLEVBQUVsQixJQUFJO2NBQUUrRSxPQUFPLEVBQUVzRTtZQUFXLEVBQUksQ0FDakY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQTVILE1BQUEsR0FBQTVDLE9BQUE7VUFFQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFtSyxXQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQThLLEtBQUEsR0FBQTlLLE9BQUE7VUFDQSxJQUFBK0ssUUFBQSxHQUFBL0ssT0FBQTtVQUNBLElBQUFnTCxLQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQWlMLE9BQUEsR0FBQWpMLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBa0ksYUFBQSxHQUFBbEksT0FBQTtVQUVNLFNBQVVrTCxhQUFhQSxDQUFDO1lBQUUzRixJQUFJO1lBQUVXO1VBQU8sQ0FBRTtZQUM5QyxNQUFNO2NBQUUxRixLQUFLO2NBQUVtRixLQUFLO2NBQUVRLE1BQU07Y0FBRTFGO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDL0QsTUFBTTtjQUFFMEY7WUFBVyxDQUFFLEdBQUdULEtBQUs7WUFDN0IsTUFBTVUsYUFBYSxHQUFHN0YsS0FBSyxDQUFDOEYsYUFBYSxDQUFDQyxTQUFTO1lBQ25ELE1BQU0sR0FBR0UsVUFBVSxDQUFDLEdBQUc3RCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQ3NGLE1BQU0sQ0FBQ0ksU0FBUyxFQUFFRyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3RFLE1BQU0sQ0FBQ3lFLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUd4SSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDd0ssT0FBTyxFQUFFeEYsVUFBVSxDQUFDLEdBQUdqRCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTSxDQUFDeUssVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzNJLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUM3RCxNQUFNMkosV0FBVyxHQUFHQSxDQUFBLEtBQU1ZLFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDbEQsTUFBTTtjQUFFSztZQUFTLENBQUUsR0FBRyxJQUFBdEQsYUFBQSxDQUFBRyxrQkFBa0IsR0FBRTtZQUMxQyxJQUFBcEksTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUM4RixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDRSxVQUFVLENBQUNoRyxRQUFRLENBQUM4RixTQUFTLENBQUNHLE9BQU8sQ0FBQztjQUN0Q2IsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ04sSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNa0csU0FBUyxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO1lBQzFCLE1BQU1DLElBQUksR0FBRyxFQUFFO1lBQ2YsTUFBTXpLLFFBQVEsR0FBR3lELEtBQUssSUFBRztjQUN4QjZHLGFBQWEsQ0FBQzdHLEtBQUssQ0FBQ3hELGFBQWEsQ0FBQ3lLLE9BQU8sQ0FBQ3hLLElBQUksQ0FBQztZQUNoRCxDQUFDO1lBRUR1SyxJQUFJLENBQUNFLElBQUksQ0FDUmhKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0osS0FBQSxDQUFBZSxHQUFHO2NBQUNDLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQzNLLElBQUksRUFBQztZQUFTLEdBQzFDa0YsYUFBYSxDQUFDK0MsS0FBSyxDQUFDMUMsT0FBTyxDQUN2QixDQUNOO1lBRUQsSUFBSWpHLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ0csT0FBTyxFQUFFO2NBQy9Cb0QsTUFBTSxDQUFDQyxJQUFJLENBQUMxRCxhQUFhLENBQUMrQyxLQUFLLENBQUMsQ0FBQzJDLE9BQU8sQ0FBQzFKLElBQUksSUFBRztnQkFDL0MsSUFBSUEsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDeEJxSixJQUFJLENBQUNFLElBQUksQ0FDUmhKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0osS0FBQSxDQUFBZSxHQUFHO2tCQUFDMUssSUFBSSxFQUFFa0IsSUFBSTtrQkFBRXlKLEdBQUcsRUFBRXpKO2dCQUFJLEdBQ3hCZ0UsYUFBYSxDQUFDK0MsS0FBSyxDQUFDL0csSUFBSSxDQUFDLENBQ3JCLENBQ047Y0FDRixDQUFDLENBQUM7O1lBRUgsT0FDQ08sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDK0IsTUFBQSxDQUFBdUksS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFMUcsSUFBSTtjQUFDM0QsU0FBUyxFQUFDLHNCQUFzQjtjQUFDc0UsT0FBTyxFQUFFQTtZQUFPLEdBQ2xGdEQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNyQixPQUFBLENBQUE2TCxvQkFBb0I7Y0FBQ1osVUFBVSxFQUFFQSxVQUFVO2NBQUVkLFdBQVcsRUFBRUE7WUFBVyxFQUFJLEVBRTFFNUgsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvSixLQUFBLENBQUFxQixhQUFhO2NBQUNDLE1BQU0sRUFBRSxDQUFDO2NBQUV4SyxTQUFTLEVBQUMsdUJBQXVCO2NBQUNYLFFBQVEsRUFBRUE7WUFBUSxHQUM3RTJCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0osS0FBQSxDQUFBdUIsSUFBSSxRQUFFWCxJQUFJLENBQVEsRUFDbkI5SSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ29KLEtBQUEsQ0FBQXdCLEtBQUssUUFDTDFKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDcUosUUFBQSxDQUFBOUUsVUFBVTtjQUFDQyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxFQUNoQ3RELE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc0osS0FBQSxDQUFBdUIsWUFBWTtjQUFDcEwsSUFBSSxFQUFDO1lBQVcsRUFBRyxFQUNqQ3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc0osS0FBQSxDQUFBdUIsWUFBWTtjQUFDcEwsSUFBSSxFQUFDO1lBQVUsRUFBRyxFQUNoQ3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUosT0FBQSxDQUFBckMsa0JBQWtCLE9BQUcsQ0FDZixDQUNPLEVBRWhCaEcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN5SSxXQUFBLENBQUFNLGVBQWU7Y0FDZmxGLElBQUksRUFBRTRGLFNBQVM7Y0FDZlQsUUFBUTtjQUNSbEksS0FBSyxFQUFFNkQsYUFBYSxDQUFDc0UsVUFBVSxDQUFDbkksS0FBSztjQUNyQ04sV0FBVyxFQUFFbUUsYUFBYSxDQUFDc0UsVUFBVSxDQUFDekksV0FBVztjQUNqRGdFLE9BQU8sRUFBRXNFLFdBQVc7Y0FDcEJpQixTQUFTLEVBQUVBLFNBQVM7Y0FDcEJuRCxVQUFVLEVBQUVrRCxTQUFTLENBQUNGLFVBQVU7WUFBQyxFQUNoQyxDQUNLLENBQ047VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RUEsSUFBQTFJLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVa00sb0JBQW9CQSxDQUFDO1lBQUVaLFVBQVU7WUFBRWQ7VUFBVyxDQUFFO1lBQy9ELE1BQU07Y0FBRWhLO1lBQUssQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFdEMsTUFBTTJGLGFBQWEsR0FBRzdGLEtBQUssQ0FBQzhGLGFBQWEsQ0FBQ0MsU0FBUztZQUVuRCxPQUNDM0QsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLMkUsYUFBYSxDQUFDN0QsS0FBSyxDQUFNLENBQ3RCO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQWtCLFdBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUEySixLQUFBLEdBQUEzSixPQUFBO1VBRU0sU0FBVW9ELGFBQWFBLENBQUMsRUFBRTtZQUMvQixNQUFNO2NBQUV1QyxLQUFLO2NBQUVuRjtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQzdDLE1BQU0sQ0FBQ3lLLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUd4SSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkQsTUFBTTJMLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCcEIsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FDQ3hJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsa0JBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUM4RixhQUFhLENBQUNDLFNBQVMsQ0FBQy9ELEtBQUssQ0FBTSxFQUM5Q0ksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNDLE9BQU8sRUFBRXdILFFBQVE7Y0FBRXpLLE9BQU8sRUFBQztZQUFNLEdBQ3ZDdkIsS0FBSyxDQUFDOEYsYUFBYSxDQUFDdkYsS0FBSyxDQUFDb0UsT0FBTyxDQUFDc0gsR0FBRyxDQUM5QixDQUNKLENBQ0UsRUFDVDdKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaUksS0FBQSxDQUFBK0MsWUFBWTtjQUFDRixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUMzQixFQUNUckIsU0FBUyxJQUFJdkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUFnTCxhQUFhO2NBQUMzRixJQUFJLEVBQUU0RixTQUFTO2NBQUVqRixPQUFPLEVBQUVBLENBQUEsS0FBTWtGLFlBQVksQ0FBQyxLQUFLO1lBQUMsRUFBSSxDQUNsRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBckwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFQSxTQUFTMk0sWUFBWUEsQ0FBQ25FLElBQUksRUFBRWUsU0FBUztZQUNwQyxPQUFPZixJQUFJLENBQUNaLE1BQU0sR0FBRzJCLFNBQVMsR0FBR2YsSUFBSSxDQUFDb0UsU0FBUyxDQUFDLENBQUMsRUFBRXJELFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBR2YsSUFBSTtVQUM3RTtVQUVNLFNBQVVrRSxZQUFZQSxDQUFDO1lBQUVGO1VBQVEsQ0FBRTtZQUN4QyxNQUFNO2NBQUU3RyxLQUFLO2NBQUVuRixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDdkQsTUFBTSxDQUFDeUssU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3hJLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNO2NBQUV1RjtZQUFXLENBQUUsR0FBR1QsS0FBSztZQUU3QixNQUFNWCxPQUFPLEdBQUdOLEtBQUssSUFBRztjQUN2QjtjQUNBQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QmxFLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ1csS0FBSyxFQUFFO2NBQzFCekcsUUFBUSxDQUFDYyxJQUFJLEVBQUU7WUFDaEIsQ0FBQztZQUNELE9BQ0NxQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNFbEIsUUFBUSxDQUFDOEYsU0FBUyxDQUFDRyxPQUFPLEdBQzFCOUQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUMsZ0NBQWdDO2NBQUNvRCxPQUFPLEVBQUV3SDtZQUFRLEdBQy9ERyxZQUFZLENBQUNsTSxRQUFRLENBQUM4RixTQUFTLENBQUNHLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFDN0M5RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQThNLFVBQVU7Y0FBQ2pMLFNBQVMsRUFBQyxRQUFRO2NBQUNlLElBQUksRUFBQyxRQUFRO2NBQUNxQyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUM1RCxDQUNELEdBRU5wQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxlQUFPbEIsS0FBSyxDQUFDOEYsYUFBYSxDQUFDQyxTQUFTLENBQUN4RixLQUFLLENBQVEsQ0FDN0MsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUEyQyxXQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVU4TSxrQkFBa0JBLENBQUM7WUFDbEMzTCxJQUFJO1lBQ0pxRSxRQUFRO1lBQ1JVO1VBQU8sQ0FNUDtZQUNBLE1BQU07Y0FBRUMsTUFBTTtjQUFFMUYsUUFBUTtjQUFFRCxLQUFLO2NBQUVtRjtZQUFLLENBQUUsR0FBRyxJQUFBdkYsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUMvRCxNQUFNO2NBQUUwRjtZQUFXLENBQUUsR0FBR1QsS0FBSztZQUM3QixNQUFNLENBQUNvSCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdwSyxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDMkYsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzdELE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDc0YsTUFBTSxDQUFDSSxTQUFTLEdBQUdwRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUUsTUFBTSxDQUFDd0YsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNSSxRQUFRLEdBQUd5RCxLQUFLLElBQUc7Y0FDeEIrQixVQUFVLENBQUMvQixLQUFLLENBQUNzQyxNQUFNLENBQUM1RixLQUFLLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU0rRixhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJaEIsTUFBTSxDQUFDa0YsT0FBTyxFQUFFO2dCQUNuQjJCLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR4SCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTVosU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVyxDQUFFLENBQUM7WUFDaEMsTUFBTXFJLGFBQWEsR0FBR0EsQ0FBQSxLQUFNRCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTVGLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekJSLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJuRyxRQUFRLENBQUM4RixTQUFTLENBQUNsRixHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFBSSxHQUFHcUY7Y0FBTyxDQUFFLENBQUM7Y0FDM0MsTUFBTS9GLFFBQVEsQ0FBQ2MsSUFBSSxDQUFDO2dCQUFFLENBQUNKLElBQUksR0FBR3FGO2NBQU8sQ0FBRSxDQUFDO2NBQ3hDSSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ2xCVixPQUFPLEVBQUU7WUFDVixDQUFDO1lBRUQsTUFBTXlCLGFBQWEsR0FBRyx3QkFDckJuQixPQUFPLENBQUNvQixNQUFNLEdBQUcsSUFBSSxHQUFJcEIsT0FBTyxDQUFDb0IsTUFBTSxHQUFHLElBQUksR0FBRyxhQUFhLEdBQUcsZUFBZSxHQUFJLEVBQ3JGLEVBQUU7WUFFRixPQUNDaEYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBMkgsSUFBSTtjQUFDakcsU0FBUyxFQUFDLDhCQUE4QjtjQUFDa0csUUFBUSxFQUFFVjtZQUFNLEdBQzlEeEUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFxQixHQUNuQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBNEIsUUFBUTtjQUNSYixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJFLElBQUksRUFBRUEsSUFBSTtjQUNWQyxLQUFLLEVBQUVvRixPQUFPO2NBQ2RyRSxXQUFXLEVBQUUzQixLQUFLLENBQUNxRyxNQUFNLENBQUMxRixJQUFJLENBQUMsQ0FBQytMO1lBQVEsRUFDdkMsQ0FDRyxFQUNOdEssTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBRStGO1lBQWEsR0FDM0JuSCxLQUFLLENBQUM4RixhQUFhLENBQUNDLFNBQVMsQ0FBQ3lCLFVBQVUsRSxLQUFHLElBQUksR0FBR3hCLE9BQU8sQ0FBQ29CLE1BQU0sQ0FDNUQsQ0FDQSxFQUNQaEYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE2QixHQUM5Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDQyxPQUFPLEVBQUVtQyxhQUFhO2NBQUVwRixPQUFPLEVBQUMsU0FBUztjQUFDaUMsUUFBUTtZQUFBLEdBQ3hEb0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDRyxNQUFNLENBQ25CLEVBQ1QxQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Y0FBQ2hELE9BQU8sRUFBQyxTQUFTO2NBQUNpRCxPQUFPLEVBQUVvQyxNQUFNO2NBQUV4RCxRQUFRLEVBQUUsQ0FBQzRDLE9BQU8sSUFBSUc7WUFBUSxHQUN2RVAsV0FBVyxDQUFDakIsT0FBTyxDQUFDNUQsSUFBSSxDQUNqQixDQUNELEVBQ1J3TCxlQUFlLElBQ2ZuSyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXdCLFlBQVk7Y0FBQ0wsU0FBUyxFQUFFQSxTQUFTO2NBQUVZLFFBQVEsRUFBRXlIO1lBQWEsR0FDMURySyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FBTTBFLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ0csTUFBTSxDQUFPLENBRXhDLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUEsSUFBQTFDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBOEYsU0FBQSxHQUFBOUYsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQW1OLE1BQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBb04sbUJBQUEsR0FBQXBOLE9BQUE7VUFHQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBZ0csY0FBQSxHQUFBaEcsT0FBQTtVQUVNLFNBQVV1TSxZQUFZQSxDQUFDO1lBQUVwTDtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFd0UsS0FBSztjQUFFbEYsUUFBUTtjQUFFRDtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU07Y0FBRTBGO1lBQVcsQ0FBRSxHQUFHVCxLQUFLO1lBQzdCLE1BQU0sQ0FBQ2tCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdsRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxDQUFDd00sUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzFLLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDSixRQUFRLENBQUM4RixTQUFTLENBQUNwRixJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNb00sY0FBYyxHQUFHQSxDQUFBLEtBQU16RyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1lBQzdDLE1BQU0sQ0FBQ0YsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFBWixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEMrRyxXQUFXLENBQUM3TSxRQUFRLENBQUM4RixTQUFTLENBQUNwRixJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7WUFFRixJQUFJMEYsTUFBTSxFQUFFLE9BQU9qRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzBMLG1CQUFBLENBQUFOLGtCQUFrQjtjQUFDM0wsSUFBSSxFQUFFQSxJQUFJO2NBQUUrRSxPQUFPLEVBQUVhLFlBQVk7Y0FBRXZCLFFBQVEsRUFBRXVCO1lBQVksRUFBSTtZQUNwRyxJQUFJLENBQUNzRyxRQUFRLEVBQUUsT0FBT3pLLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeUwsTUFBQSxDQUFBdkMsYUFBYTtjQUFDekosSUFBSSxFQUFFQSxJQUFJO2NBQUVtRyxRQUFRLEVBQUVQO1lBQVksRUFBSTtZQUUzRSxNQUFNRSxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkwsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQm5HLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ2xGLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUc7Y0FBRSxDQUFFLENBQUM7Y0FDdENWLFFBQVEsQ0FBQ2MsSUFBSSxDQUFDO2dCQUFFLENBQUNKLElBQUksR0FBRztjQUFFLENBQUUsQ0FBQztjQUM3QnlGLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUNELE9BQ0NoRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUFtQixHQUNyQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDb0UsU0FBQSxDQUFBeUIsUUFBUTtjQUFDZixPQUFPLEVBQUU2RztZQUFRLEVBQUksQ0FDdEIsRUFDVnpLLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0MsR0FDaEVnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Y0FBQ3BDLElBQUksRUFBQyxNQUFNO2NBQUNxQyxPQUFPLEVBQUV1SSxjQUFjO2NBQUUzSixRQUFRLEVBQUUrQyxRQUFRO2NBQUU1RSxPQUFPLEVBQUMsU0FBUztjQUFDaUMsUUFBUTtZQUFBLEdBQ3pGb0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDcUMsSUFBSSxDQUNqQixFQUNUNUUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNzRSxjQUFBLENBQUFyQyxhQUFhO2NBQUNHLFFBQVEsRUFBRW1ELFFBQVE7Y0FBRXRFLElBQUksRUFBQyxRQUFRO2NBQUNpQixRQUFRLEVBQUUrQyxRQUFRO2NBQUU1RSxPQUFPLEVBQUMsU0FBUztjQUFDaUMsUUFBUTtZQUFBLEdBQzdGb0MsV0FBVyxDQUFDakIsT0FBTyxDQUFDc0MsTUFBTSxDQUNaLENBQ1IsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBN0UsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVxSSxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFNUg7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN6QyxNQUFNLENBQUNpRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU11SCxhQUFhLEdBQUcsTUFBQUEsQ0FBT3lCLEtBQUssR0FBRzJELFNBQVMsS0FBSTtjQUNqRCxJQUFJO2dCQUNINUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTW5HLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQzZCLGFBQWEsQ0FBQ3lCLEtBQUssQ0FBQztlQUM3QyxDQUFDLE9BQU80RCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7ZUFDZCxTQUFTO2dCQUNUN0csV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU1vQyxXQUFXLEdBQUcsTUFBQUEsQ0FBT2EsS0FBSyxHQUFHMkQsU0FBUyxLQUFJO2NBQy9DLElBQUk7Z0JBQ0g1RyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNbkcsUUFBUSxDQUFDOEYsU0FBUyxDQUFDeUMsV0FBVyxDQUFDYSxLQUFLLENBQUM7ZUFDM0MsQ0FBQyxPQUFPNEQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2QsU0FBUztnQkFDVDdHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNMkQsZUFBZSxHQUFHLE1BQUFBLENBQU87Y0FBRXFEO1lBQUssQ0FBRSxLQUFJO2NBQzNDLElBQUk7Z0JBQ0gsTUFBTUMsSUFBSSxHQUFHLE1BQU1wTixRQUFRLENBQUM4RixTQUFTLENBQUNtQyxRQUFRLENBQUMsU0FBUyxFQUFFa0YsS0FBSyxDQUFDO2VBQ2hFLENBQUMsT0FBT0gsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDOztZQUVoQixDQUFDO1lBRUQsTUFBTUssZ0JBQWdCLEdBQUcsTUFBQUEsQ0FBT3pMLElBQUksRUFBRXVMLEtBQUssS0FBSTtjQUM5Q2hILFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTW5HLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ21DLFFBQVEsQ0FBQ3JHLElBQUksRUFBRXVMLEtBQUssQ0FBQztjQUU5Q0csVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZuSCxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBQ0QsT0FBTztjQUNOd0IsYUFBYTtjQUNibUMsZUFBZTtjQUNmdUQsZ0JBQWdCO2NBQ2hCbkgsUUFBUTtjQUNSQyxXQUFXO2NBQ1hvQyxXQUFXO2NBQ1h3QyxTQUFTLEVBQUU7Z0JBQ1YzQyxNQUFNLEVBQUVULGFBQWE7Z0JBQ3JCMUIsT0FBTyxFQUFFNkQsZUFBZTtnQkFDeEI4QyxRQUFRLEVBQUVTLGdCQUFnQjtnQkFDMUJFLFFBQVEsRUFBRUYsZ0JBQWdCO2dCQUMxQkcsU0FBUyxFQUFFSDs7YUFFWjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNEQSxJQUFBL04sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRU0sU0FBVWtPLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFMU4sS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxRQUFRLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNTSxRQUFRLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUk7Z0JBQUVDO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDN0RYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7WUFDaEMsQ0FBQztZQUNELE1BQU1FLE1BQU0sR0FBR2IsUUFBUSxDQUFDYyxJQUFJO1lBQzVCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU1iLElBQUksR0FBR0YsUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPO2NBQ3ZESCxPQUFPLENBQUNELElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxJQUFBVixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQyxFQUFFZSxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7WUFDakQsSUFBQXZCLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDSyxLQUFLLENBQUMsRUFBRVUsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUV0RCxPQUNDckIsS0FBQSxDQUFBdUIsYUFBQSxDQUFBdkIsS0FBQSxDQUFBd0IsUUFBQSxRQUNDeEIsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQXdCLGNBQWMsT0FBRyxFQUVsQjFCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxnQixLQUFTbEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNGLEtBQUssQ0FBUyxFQUNwRDdCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUlgsSUFBSSxFQUFDLGFBQWE7Y0FDbEJGLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkssTUFBTSxFQUFFQSxNQUFNO2NBQ2RhLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXO2NBQ3JEZixLQUFLLEVBQUVYLFFBQVEsQ0FBQ3lCO1lBQVcsRUFDMUIsRUFDRi9CLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3BCLE1BQUEsQ0FBQThCLFNBQVM7Y0FBQ3BCLFVBQVUsRUFBRUEsVUFBVTtjQUFFcUIsSUFBSSxFQUFDO1lBQVMsRUFBRyxDQUMvQyxDQUNELENBQ0csRUFFVmxDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTJCLEdBQzdDekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0J6QixLQUFBLENBQUF1QixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ3pCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDSyxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFNLEVBQ2hEckMsS0FBQSxDQUFBdUIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBVSxHQUN4QnBCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0ssUUFBUSxDQUFDQyxLQUFLLENBQUNFLFFBQVEsRUFDekN0QyxLQUFBLENBQUF1QixhQUFBLENBQUMzQixNQUFBLENBQUEyQyxPQUFPO2NBQUNkLFNBQVMsRUFBQyxjQUFjO2NBQUNlLElBQUksRUFBQztZQUFJLEVBQUcsQ0FDeEMsQ0FDRixDQUNFLEVBQ1R4QyxLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3BCLE1BQUEsQ0FBQThCLFNBQVM7Y0FBQ3BCLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQ2hDLENBQ0QsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUF5QyxNQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVbU8sa0JBQWtCQSxDQUFDO1lBQUU1SSxJQUFJO1lBQUVXO1VBQU8sQ0FBRTtZQUNuRCxNQUFNLENBQUNTLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTtjQUNMSixRQUFRO2NBQ1JELEtBQUssRUFBRTtnQkFBRXlCLFVBQVUsRUFBRXpCO2NBQUssQ0FBRTtjQUM1Qm1GLEtBQUssRUFBRTtnQkFDTlMsV0FBVyxFQUFFO2tCQUFFakI7Z0JBQU87Y0FBRTtZQUN4QixDQUNELEdBQUcsSUFBQS9FLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsSUFBSSxDQUFDNkUsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNWCxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hnQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNbkcsUUFBUSxDQUFDMk4sWUFBWSxFQUFFO2dCQUM3QmxJLE9BQU8sRUFBRTtlQUNULENBQUMsT0FBT3VILENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDVyxLQUFLLENBQUNaLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUN0csV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0NoRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQixNQUFBLENBQUF3QixZQUFZO2NBQ1pNLElBQUk7Y0FDSlcsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCdEIsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCTSxVQUFVLEVBQUU7Z0JBQUVsRCxLQUFLLEVBQUVtRCxPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUN0Q0MsU0FBUyxFQUFFO2dCQUFFckQsS0FBSyxFQUFFbUQsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDcENFLFFBQVEsRUFBRVU7WUFBTyxHQUVqQnRELE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDOE4sV0FBVyxDQUFDOUwsS0FBSyxDQUFNLEVBQ2xDSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsWUFBSWxCLEtBQUssQ0FBQzhOLFdBQVcsQ0FBQ3BNLFdBQVcsQ0FBSyxDQUN4QixDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFVLE1BQUEsR0FBQTVDLE9BQUE7VUFNTyxNQUFNdU8scUJBQXFCLEdBQUE3RSxPQUFBLENBQUE2RSxxQkFBQSxHQUFHM0wsTUFBQSxDQUFBRyxPQUFLLENBQUN5TCxhQUFhLENBQUMsRUFBNkIsQ0FBQztVQUNoRixNQUFNQyx3QkFBd0IsR0FBR0EsQ0FBQSxLQUFNN0wsTUFBQSxDQUFBRyxPQUFLLENBQUMyTCxVQUFVLENBQUNILHFCQUFxQixDQUFDO1VBQUM3RSxPQUFBLENBQUErRSx3QkFBQSxHQUFBQSx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQdEYsSUFBQS9LLFdBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQWNNLFNBQVUyTyx3QkFBd0JBLENBQUM7WUFBRXhOLElBQUk7WUFBRUgsVUFBVTtZQUFFNEMsUUFBUTtZQUFFZ0wsZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDOUcsTUFBTTtjQUNMcE8sS0FBSztjQUNMQyxRQUFRO2NBQ1JrRixLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTRHLFFBQVEsR0FBR0EsQ0FBQSxLQUFNdEcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUV6QyxPQUNDNEIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLEVBQzVCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Y0FBQ2hELE9BQU8sRUFBQyxNQUFNO2NBQUNpQyxRQUFRO2NBQUNnQixPQUFPLEVBQUVzQztZQUFRLEdBQy9DOUcsS0FBSyxDQUFDcU8sY0FBYyxDQUFDMUosT0FBTyxDQUFDMkosV0FBVyxDQUNqQyxDQUNKLENBQ0UsRUFDVGxNLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsZUFBT2xCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ2xCLEtBQUssQ0FBQ21CLFdBQVcsQ0FBUSxDQUM1QyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFVLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUVBLElBQUErTyxVQUFBLEdBQUEvTyxPQUFBO1VBQ0EsSUFBQWlJLEdBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBZ1AsU0FBQSxHQUFBaFAsT0FBQTtVQU5BOztVQVFNLFNBQVVpUCx3QkFBd0JBLENBQUM7WUFBRXpKLFFBQVE7WUFBRTBKO1VBQVUsQ0FBRTtZQUNoRSxNQUFNLENBQUN2SSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FDTHNGLE1BQU07Y0FDTjNGLEtBQUs7Y0FDTG1GLEtBQUs7Y0FDTGxGLFFBQVE7Y0FDUmtGLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDeU8sTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR3hNLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxNQUFNd08sR0FBRyxHQUFHek0sTUFBQSxDQUFBRyxPQUFLLENBQUN1TSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU1sSSxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCUixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU07Z0JBQUUySTtjQUFTLENBQUUsR0FBR3BKLE1BQU0sQ0FBQ3JGLEtBQUs7Y0FFbEMsTUFBTTBPLE1BQU0sR0FBRyxFQUFFO2NBQ2pCRCxTQUFTLENBQUN4RCxPQUFPLENBQUMsQ0FBQzBELFFBQVEsRUFBRUMsS0FBSyxLQUFJO2dCQUNyQyxJQUFJLENBQUNELFFBQVEsRUFBRUEsUUFBUSxJQUFJLENBQUNBLFFBQVEsRUFBRUUsT0FBTyxDQUFDL0gsTUFBTSxJQUFJZ0ksS0FBSyxDQUFDSCxRQUFRLEVBQUVJLGFBQWEsQ0FBQyxFQUFFO2tCQUN2RkwsTUFBTSxDQUFDNUQsSUFBSSxDQUFDOEQsS0FBSyxDQUFDO2tCQUNsQjs7Z0JBRUQsTUFBTUksT0FBTyxHQUFHTCxRQUFRLENBQUNFLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQzVPLEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ2xFLElBQUkwTyxPQUFPLENBQUNsSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUN2QjRILE1BQU0sQ0FBQzVELElBQUksQ0FBQzhELEtBQUssQ0FBQzs7Y0FFcEIsQ0FBQyxDQUFDO2NBRUYsSUFBSUYsTUFBTSxDQUFDNUgsTUFBTSxFQUFFO2dCQUNsQndILFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO2dCQUNqQjVJLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCOztjQUdELE1BQU1uRyxRQUFRLENBQUNjLElBQUksRUFBRTtjQUNyQnFGLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJzSSxVQUFVLEVBQUU7WUFDYixDQUFDO1lBRUR0TSxNQUFBLENBQUFHLE9BQUssQ0FBQ2tOLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2QsTUFBTSxDQUFDdkgsTUFBTSxFQUFFO2NBQ3BCLE1BQU1zSSxTQUFTLEdBQUdiLEdBQUcsQ0FBQ2MsT0FBTztjQUM3QkQsU0FBUyxDQUFDRSxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDckUsT0FBTyxDQUFDLENBQUNpRSxJQUFJLEVBQUVOLEtBQUssS0FBSTtnQkFDdkYsSUFBSSxDQUFDUCxNQUFNLENBQUNrQixRQUFRLENBQUNYLEtBQUssQ0FBQyxFQUFFO2dCQUM3Qk0sSUFBSSxDQUFDTSxTQUFTLENBQUM3RCxHQUFHLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3JDdUQsSUFBSSxDQUFDTyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBSztrQkFDckNQLElBQUksQ0FBQ00sU0FBUyxDQUFDRSxNQUFNLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQztnQkFDRkMsVUFBVSxDQUFDQyxRQUFRLENBQUM7a0JBQUVDLEdBQUcsRUFBRSxDQUFDO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQVEsQ0FBRSxDQUFDO2dCQUNuRDtjQUNELENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDekIsTUFBTSxDQUFDLENBQUM7WUFFWixNQUFNMEIsWUFBWSxHQUFHO2NBQ3BCMUIsTUFBTTtjQUNOQzthQUNBO1lBRUQsT0FDQ3hNLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc04sU0FBQSxDQUFBVCxxQkFBcUIsQ0FBQ3VDLFFBQVE7Y0FBQzFQLEtBQUssRUFBRXlQO1lBQVksR0FDbERqTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQTBRLFdBQVcsT0FBRyxFQUNmbk8sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVMyTixHQUFHLEVBQUVBLEdBQUc7Y0FBRXpOLFNBQVMsRUFBQztZQUF5QyxHQUVyRWdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUcsR0FBQSxDQUFBK0ksYUFBYTtjQUFDM0MsS0FBSyxFQUFFYyxNQUFNLENBQUN2SCxNQUFNLEdBQUdwSCxLQUFLLENBQUMyTyxNQUFNLENBQUM4QixjQUFjLEdBQUc7WUFBRSxFQUFJLEVBQzFFck8sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNxTixVQUFBLENBQUFtQyxvQkFBb0I7Y0FBQy9CLE1BQU0sRUFBRUEsTUFBTTtjQUFFQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUM5RHhNLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBbUQsR0FDcEVnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Y0FBQ2hELE9BQU8sRUFBQyxTQUFTO2NBQUNpQyxRQUFRO2NBQUNnQixPQUFPLEVBQUVRO1lBQVEsR0FDbERZLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ0csTUFBTSxDQUNuQixFQUNUMUMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsU0FBUztjQUFDaUQsT0FBTyxFQUFFb0MsTUFBTTtjQUFFeEQsUUFBUSxFQUFFLENBQUMsQ0FBQ3VMLE1BQU0sQ0FBQ3ZILE1BQU0sSUFBSWpCO1lBQVEsR0FDOUVQLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQzVELElBQUksQ0FDakIsQ0FDRCxDQUNBLENBQ3NCO1VBRW5DOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JGQSxJQUFBcUIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFtUixZQUFBLEdBQUFuUixPQUFBO1VBQ0EsSUFBQTBELFdBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVb1IsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUU1UTtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3RDLElBQUk7Y0FBRXlFO1lBQU8sQ0FBRSxHQUFHM0UsS0FBSyxDQUFDcU8sY0FBYztZQUN0QyxNQUFNO2NBQUV3QztZQUFPLENBQUUsR0FBRyxJQUFBRixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE9BQ0MxTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTBELEdBQzVFZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsTUFBTTtjQUFDaUQsT0FBTyxFQUFFcU07WUFBTyxHQUNyQ2xNLE9BQU8sQ0FBQzJKLFdBQVcsQ0FDWixDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQWxNLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFtUixZQUFBLEdBQUFuUixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVXVSLG9CQUFvQkEsQ0FBQztZQUFFM04sUUFBUTtZQUFFNE4sS0FBSztZQUFFQztVQUFNLENBQUU7WUFDL0QsTUFBTTtjQUNMalIsS0FBSyxFQUFFO2dCQUFFcU8sY0FBYyxFQUFFck87Y0FBSztZQUFFLENBQ2hDLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNO2NBQUUyUTtZQUFPLENBQUUsR0FBRyxJQUFBRixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE1BQU10TSxPQUFPLEdBQUdOLEtBQUssSUFBRztjQUN2QixJQUFJLENBQUMrTSxNQUFNLEVBQUU7Z0JBQ1osT0FBT0QsS0FBSyxDQUFDLElBQUksQ0FBQzs7Y0FFbkJILE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDek8sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUF5QixHQUMzQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDdkMsS0FBSyxFQUFFaEMsS0FBSyxDQUFDMkUsT0FBTyxDQUFDdU0sU0FBUztjQUFFMU0sT0FBTyxFQUFFQSxPQUFPO2NBQUVwQixRQUFRLEVBQUVBO1lBQVEsR0FDMUVwRCxLQUFLLENBQUMyRSxPQUFPLENBQUN1TSxTQUFTLENBQ2hCLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQTlPLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMlIsT0FBQSxHQUFBM1IsT0FBQTtVQUNBLElBQUEySSxLQUFBLEdBQUEzSSxPQUFBO1VBQ0EsSUFBQTRSLE9BQUEsR0FBQTVSLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUVNLFNBQVU2UixrQkFBa0JBLENBQUM7WUFBRWxMLFFBQVE7WUFBRXBCLElBQUk7WUFBRXVNLE9BQU87WUFBRTdRLFFBQVE7WUFBRTJDO1VBQVEsQ0FBRTtZQUNqRixNQUFNLENBQUNtTyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHcFAsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRS9DLElBQUk4RixRQUFRLEVBQUU7Y0FDYixPQUNDL0QsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGNBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXVPLE9BQU87Z0JBQUM3RixNQUFNO2dCQUFDckssT0FBTyxFQUFDO2NBQVMsRUFBRyxDQUMvQjs7WUFJUixPQUNDYSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2lRLE9BQU8sQ0FBQ2IsUUFBUTtjQUNoQjNQLElBQUksRUFBQyxrQkFBa0I7Y0FDdkJTLFNBQVMsRUFBQyxrQ0FBa0M7Y0FDNUNSLEtBQUssRUFBRTBRLE9BQU87Y0FDZEksSUFBSSxFQUFFdkosS0FBQSxDQUFBd0oseUJBQXlCO2NBQy9CbFIsUUFBUSxFQUFFQTtZQUFRLEdBRWpCLENBQUNzRSxJQUFJLElBQUl3TSxLQUFLLEtBQUtuUCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2lRLE9BQU8sQ0FBQzFILElBQUk7Y0FBQ3JJLFNBQVMsRUFBQztZQUFjLEVBQUcsRUFDN0RnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2tRLE9BQUEsQ0FBQUwsb0JBQW9CO2NBQUNFLE1BQU0sRUFBRWxNLElBQUksSUFBSXdNLEtBQUs7Y0FBRW5PLFFBQVEsRUFBRUEsUUFBUTtjQUFFNE4sS0FBSyxFQUFFUTtZQUFRLEVBQUksQ0FDbEU7VUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFwUCxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9TLFNBQUEsR0FBQXBTLE9BQUE7VUFDQSxJQUFBbVIsWUFBQSxHQUFBblIsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFnUCxTQUFBLEdBQUFoUCxPQUFBO1VBRU0sU0FBVW1TLHlCQUF5QkEsQ0FBQ0UsS0FBSztZQUM5QyxNQUFNO2NBQUVDO1lBQVMsQ0FBRSxHQUFHLElBQUFGLFNBQUEsQ0FBQUcsUUFBUSxFQUFDRixLQUFLLENBQUMzQyxLQUFLLENBQUM7WUFDM0MsTUFBTTtjQUFFOEMsT0FBTztjQUFFcFIsS0FBSyxHQUFHO1lBQUUsQ0FBRSxHQUFHaVIsS0FBSyxDQUFDalIsS0FBSztZQUMzQyxNQUFNO2NBQUUrRSxNQUFNO2NBQUVzTSxTQUFTO2NBQUVDO1lBQVUsQ0FBRSxHQUFHLElBQUF2QixZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQ2pFLE1BQU07Y0FBRWxDO1lBQVMsQ0FBRSxHQUFHLElBQUFKLFNBQUEsQ0FBQVAsd0JBQXdCLEdBQUU7WUFDaEQsTUFBTTtjQUNMak8sS0FBSyxFQUFFO2dCQUFFcU8sY0FBYyxFQUFFck87Y0FBSyxDQUFFO2NBQ2hDQztZQUFRLENBQ1IsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU1nSCxHQUFHLEdBQUcsa0NBQWtDOEssT0FBTyxHQUFHLHlCQUF5QixHQUFHLEVBQUUsRUFBRTtZQUN4RixNQUFNdlIsUUFBUSxHQUFHeUQsS0FBSyxJQUFHO2NBQ3hCMk4sS0FBSyxDQUFDTSxRQUFRLENBQUM7Z0JBQUV2UixLQUFLLEVBQUVzRCxLQUFLLENBQUNzQyxNQUFNLENBQUM1RixLQUFLO2dCQUFFb1IsT0FBTyxFQUFFLENBQUMsQ0FBQ0E7Y0FBTyxDQUFFLENBQUM7WUFDbEUsQ0FBQztZQUNELE1BQU1JLFVBQVUsR0FBR0EsQ0FBQSxLQUFNRixVQUFVLENBQUNMLEtBQUssQ0FBQzNDLEtBQUssQ0FBQztZQUNoRCxNQUFNbUQsYUFBYSxHQUFHbk8sS0FBSyxJQUFHO2NBQzdCLE1BQU1vTyxLQUFLLEdBQUdBLENBQUM5QyxJQUFJLEVBQUVOLEtBQUssS0FBSTtnQkFDN0IsT0FBT0EsS0FBSyxLQUFLMkMsS0FBSyxDQUFDM0MsS0FBSyxHQUFHO2tCQUFFLEdBQUdNLElBQUk7a0JBQUV3QyxPQUFPLEVBQUUsQ0FBQ0E7Z0JBQU8sQ0FBRSxHQUFHO2tCQUFFLEdBQUd4QyxJQUFJO2tCQUFFd0MsT0FBTyxFQUFFO2dCQUFLLENBQUU7Y0FDNUYsQ0FBQztjQUNELE1BQU0zRSxJQUFJLEdBQUcxSCxNQUFNLENBQUM0TSxHQUFHLENBQUNELEtBQUssQ0FBQztjQUM5QkwsU0FBUyxDQUFDNUUsSUFBSSxDQUFDO2NBQ2Y7Y0FDQTtjQUNBdUIsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUM7WUFFRCxPQUNDeE0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFpRCxHQUMvRGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUFFeVEsS0FBSyxDQUFDM0MsS0FBSyxHQUFHLENBQUMsRSxJQUFRLEVBRW5EOU0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE4UyxLQUFLO2NBQ0wzUSxJQUFJLEVBQUMsTUFBTTtjQUNYakIsS0FBSyxFQUFFQSxLQUFLO2NBQ1prUixTQUFTLEVBQUVBLFNBQVM7Y0FDcEJyUixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJrQixXQUFXLEVBQUUzQixLQUFLLENBQUNzUixPQUFPLENBQUMzUDtZQUFXLEVBQ3JDLEVBQ0ZTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBZSxHQUNqQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBOE0sVUFBVTtjQUNWbEssSUFBSSxFQUFDLGNBQWM7Y0FDbkJmLFNBQVMsRUFBRThGLEdBQUc7Y0FDZGxGLEtBQUssRUFBRWhDLEtBQUssQ0FBQzJFLE9BQU8sQ0FBQzhOLFdBQVc7Y0FDaENqTyxPQUFPLEVBQUU2TjtZQUFhLEVBQ3JCLEVBQ0ZqUSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQThNLFVBQVU7Y0FDVmxLLElBQUksRUFBQyxRQUFRO2NBQ2JmLFNBQVMsRUFBQywwQkFBMEI7Y0FDcENZLEtBQUssRUFBRWhDLEtBQUssQ0FBQzJFLE9BQU8sQ0FBQ3NDLE1BQU07Y0FDM0J6QyxPQUFPLEVBQUU0TjtZQUFVLEVBQ2xCLENBQ08sQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBaFEsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFtSyxXQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQWlJLEdBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBbVIsWUFBQSxHQUFBblIsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVrVCxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRXpTLFFBQVE7Y0FBRUQsS0FBSztjQUFFMkYsTUFBTTtjQUFFUjtZQUFLLENBQUUsR0FBRyxJQUFBdkYsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUUvRCxNQUFNO2NBQUVJO1lBQUssQ0FBRSxHQUFHLElBQUFxUSxZQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQ3pDLElBQUk7Y0FBRW5NO1lBQU8sQ0FBRSxHQUFHM0UsS0FBSyxDQUFDcU8sY0FBYztZQUN0QyxNQUFNLENBQUMxRCxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHeEksTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0ySixXQUFXLEdBQUdBLENBQUEsS0FBTVksWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUNsRCxNQUFNN0MsVUFBVSxHQUFHLE1BQUFBLENBQU87Y0FBRXNGO1lBQUssQ0FBRSxLQUFJO2NBQ3RDLElBQUk7Z0JBQ0gsTUFBTXVGLFFBQVEsR0FBRyxNQUFNMVMsUUFBUSxDQUFDSyxLQUFLLENBQUM0SCxRQUFRLENBQUNrRixLQUFLLEVBQUU7a0JBQUV3RixPQUFPLEVBQUVqTixNQUFNLENBQUNyRixLQUFLLENBQUNzUztnQkFBTyxDQUFFLENBQUM7Z0JBQ3hGLE1BQU03RCxTQUFTLEdBQUc0RCxRQUFRLENBQUM1RCxTQUFTLENBQUN3RCxHQUFHLENBQUMsQ0FBQztrQkFBRXRELFFBQVE7a0JBQUVFLE9BQU87a0JBQUUwRDtnQkFBYyxDQUFFLE1BQU07a0JBQ3BGNUQsUUFBUTtrQkFDUkUsT0FBTztrQkFDUEUsYUFBYSxFQUFFd0Q7aUJBQ2YsQ0FBQyxDQUFDO2dCQUVIdlMsS0FBSyxDQUFDOEYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDdkI2SixVQUFVLENBQUMxQyxVQUFVLENBQUMsTUFBSztrQkFDMUJqTixLQUFLLENBQUM4RixXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUN4Qm5HLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDTyxHQUFHLENBQUM7b0JBQUVrTyxTQUFTLEVBQUUsQ0FBQyxHQUFHcEosTUFBTSxDQUFDckYsS0FBSyxDQUFDeU8sU0FBUyxFQUFFLEdBQUdBLFNBQVM7a0JBQUMsQ0FBRSxDQUFDO2dCQUM3RSxDQUFDLEVBQUUsR0FBRyxDQUFDO2VBQ1AsQ0FBQyxPQUFPbEIsS0FBSyxFQUFFO2dCQUNmWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQ3pMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBc0QsR0FDeEVnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQVEsUUFBUTtjQUFDMUcsT0FBTyxFQUFDLE1BQU07Y0FBQ2lELE9BQU8sRUFBRXdGO1lBQVcsR0FDM0NyRixPQUFPLENBQUNtTyxpQkFBaUIsQ0FDaEIsRUFDWDFRLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeUksV0FBQSxDQUFBTSxlQUFlO2NBQ2ZsRixJQUFJLEVBQUU0RixTQUFTO2NBQ2ZvSSxLQUFLLEVBQUU1TixLQUFLLENBQUM2TixLQUFLLENBQUNELEtBQUs7Y0FDeEJFLE9BQU8sRUFBRTlOLEtBQUssQ0FBQzZOLEtBQUssQ0FBQ0MsT0FBTztjQUM1QmhJLFNBQVMsRUFBRTlGLEtBQUssQ0FBQzZOLEtBQUssQ0FBQ0UsWUFBWTtjQUNuQ3hOLE9BQU8sRUFBRXNFLFdBQVc7Y0FDcEJwRSxXQUFXLEVBQUVULEtBQUssQ0FBQ1MsV0FBVztjQUM5QjVELEtBQUssRUFBRWhDLEtBQUssQ0FBQ3FPLGNBQWMsQ0FBQzhFLGNBQWMsQ0FBQ25SLEtBQUs7Y0FDaERvUixZQUFZLEVBQUVwVCxLQUFLLENBQUNxTyxjQUFjLENBQUM4RSxjQUFjLENBQUN6UixXQUFXO2NBQzdEb0csVUFBVSxFQUFFQTtZQUFVLEVBQ3JCLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQTZJLFlBQUEsR0FBQW5SLE9BQUE7VUFDTSxTQUFVdVMsUUFBUUEsQ0FBQzdDLEtBQUs7WUFDN0IsTUFBTTtjQUFFMkIsT0FBTztjQUFFd0MsSUFBSTtjQUFFbkIsVUFBVTtjQUFFN0k7WUFBSyxDQUFFLEdBQUcsSUFBQXNILFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFFcEUsTUFBTXdDLEtBQUssR0FBR3BFLEtBQUssSUFBRztjQUNyQmUsVUFBVSxDQUFDMUMsVUFBVSxDQUFDLE1BQU04RixJQUFJLENBQUMxRCxPQUFPLENBQUNULEtBQUssQ0FBQyxFQUFFcUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDRCxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEYsQ0FBQztZQUNELE1BQU14QixTQUFTLEdBQUc1TixLQUFLLElBQUc7Y0FDekIsTUFBTXRELEtBQUssR0FBR3NELEtBQUssQ0FBQ3hELGFBQWEsQ0FBQ0UsS0FBSyxDQUFDNFMsSUFBSSxFQUFFO2NBRTlDLElBQUl0UCxLQUFLLENBQUNvSCxHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN4QjtnQkFDQSxJQUFJcEgsS0FBSyxDQUFDdVAsUUFBUSxJQUFJdkUsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDdE8sS0FBSyxFQUFFO29CQUNYc1IsVUFBVSxDQUFDaEQsS0FBSyxDQUFDOztrQkFFbEJvRSxLQUFLLENBQUNwRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQmhMLEtBQUssQ0FBQ3dQLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVEO2dCQUNBLElBQUl4RSxLQUFLLEdBQUc3RixLQUFLLENBQUNqQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUM3QmtNLEtBQUssQ0FBQ3BFLEtBQUssR0FBRyxDQUFDLENBQUM7a0JBQ2hCOztnQkFFRGhMLEtBQUssQ0FBQ3dQLGNBQWMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDOVMsS0FBSyxFQUFFO2dCQUNaaVEsT0FBTyxFQUFFO2dCQUVUWixVQUFVLENBQUMxQyxVQUFVLENBQUMsTUFBSztrQkFDMUIrRixLQUFLLENBQUNwRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztjQUdOLElBQUloTCxLQUFLLENBQUNvSCxHQUFHLEtBQUssV0FBVyxJQUFJLENBQUMxSyxLQUFLLEVBQUU7Z0JBQ3hDc0QsS0FBSyxDQUFDd1AsY0FBYyxFQUFFO2dCQUV0QixJQUFJeFAsS0FBSyxDQUFDdVAsUUFBUSxJQUFJdkUsS0FBSyxHQUFHLENBQUMsRUFBRTtrQkFDaEMsSUFBSSxDQUFDdE8sS0FBSyxFQUFFO29CQUNYc1IsVUFBVSxDQUFDaEQsS0FBSyxDQUFDO29CQUNqQm9FLEtBQUssQ0FBQ3BFLEtBQUssR0FBRyxDQUFDLENBQUM7O2tCQUdqQmhMLEtBQUssQ0FBQ3dQLGNBQWMsRUFBRTtrQkFDdEI7O2dCQUVELElBQUl4RSxLQUFLLEdBQUcsQ0FBQyxFQUFFZ0QsVUFBVSxDQUFDaEQsS0FBSyxDQUFDOztZQUVsQyxDQUFDO1lBQ0QsT0FBTztjQUFFNEM7WUFBUyxDQUFFO1VBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBMVAsTUFBQSxHQUFBNUMsT0FBQTtVQUVBLElBQUEyUixPQUFBLEdBQUEzUixPQUFBO1VBQ0EsSUFBQW1VLFNBQUEsR0FBQW5VLE9BQUE7VUFDQSxJQUFBb1UsUUFBQSxHQUFBcFUsT0FBQTtVQUVBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVWtSLG9CQUFvQkEsQ0FBQztZQUFFL0IsTUFBTTtZQUFFQztVQUFTLENBQUU7WUFDekQsTUFBTTtjQUFFakosTUFBTTtjQUFFMUY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUVqRCxNQUFNLENBQUNpRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1JLFFBQVEsR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUU4RjtZQUFNLENBQUUsS0FBSTtjQUM5QyxNQUFNdUksU0FBUyxHQUFHdkksTUFBTSxDQUFDNUYsS0FBSyxDQUFDMlIsR0FBRyxDQUFDL0MsSUFBSSxLQUFLO2dCQUMzQ1AsUUFBUSxFQUFFTyxJQUFJLENBQUNQLFFBQVE7Z0JBQ3ZCRSxPQUFPLEVBQUVLLElBQUksQ0FBQ0wsT0FBTztnQkFDckJFLGFBQWEsRUFBRUcsSUFBSSxDQUFDSDtlQUNwQixDQUFDLENBQUM7Y0FFSHBQLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDTyxHQUFHLENBQUM7Z0JBQUVrTyxTQUFTLEVBQUUsQ0FBQyxHQUFHQSxTQUFTO2NBQUMsQ0FBRSxDQUFDO1lBQ2xELENBQUM7WUFFRCxJQUFJNUksUUFBUSxFQUNYLE9BQ0MvRCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBdU8sT0FBTztjQUFDN0YsTUFBTTtjQUFDckssT0FBTyxFQUFDO1lBQVMsRUFBRyxDQUMvQjtZQUVSLE9BQ0NhLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaVEsT0FBTyxDQUFDYixRQUFRO2NBQ2hCM1AsSUFBSSxFQUFDLFdBQVc7Y0FDaEJrVCxZQUFZLEVBQUU7Z0JBQUU1RSxRQUFRLEVBQUU7Y0FBRSxDQUFFO2NBQzlCNkUsU0FBUztjQUNUcEMsSUFBSSxFQUFFaUMsU0FBQSxDQUFBSSxtQkFBbUI7Y0FDekJuVCxLQUFLLEVBQUUrRSxNQUFNLENBQUNyRixLQUFLLENBQUN5TyxTQUFTO2NBQzdCdE8sUUFBUSxFQUFFQTtZQUFRLEdBRWxCMkIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNpUSxPQUFPLENBQUMxSCxJQUFJO2NBQUNySSxTQUFTLEVBQUM7WUFBcUMsRUFBRyxFQUNoRWdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMFMsUUFBQSxDQUFBaEQsY0FBYyxPQUFHLENBQ0E7VUFFckI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF4TyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1LLFdBQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBb1MsU0FBQSxHQUFBcFMsT0FBQTtVQUNBLElBQUF3VSxRQUFBLEdBQUF4VSxPQUFBO1VBQ0EsSUFBQW1SLFlBQUEsR0FBQW5SLE9BQUE7VUFFQSxJQUFBaUksR0FBQSxHQUFBakksT0FBQTtVQUNBLElBQUF5VSxLQUFBLEdBQUF6VSxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBSEE7O1VBS00sU0FBVXVVLG1CQUFtQkEsQ0FBQ2xDLEtBQUs7WUFDeEMsTUFBTTtjQUFFQztZQUFTLENBQUUsR0FBRyxJQUFBRixTQUFBLENBQUFHLFFBQVEsRUFBQ0YsS0FBSyxDQUFDM0MsS0FBSyxDQUFDO1lBQzNDLE1BQU07Y0FDTGxQLEtBQUssRUFBRTtnQkFBRXFPLGNBQWMsRUFBRXJPO2NBQUssQ0FBRTtjQUNoQ0MsUUFBUTtjQUNSMEYsTUFBTTtjQUNOUjtZQUFLLENBQ0wsR0FBRyxJQUFBdkYsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUN5SyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHeEksTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0ySixXQUFXLEdBQUdBLENBQUEsS0FBTVksWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUNsRCxNQUFNdUosY0FBYyxHQUFHQSxDQUFDL0UsT0FBTyxFQUFFRSxhQUFjLEtBQUk7Y0FDbEQsTUFBTThFLFlBQVksR0FBRzlFLGFBQWEsSUFBSXdDLEtBQUssQ0FBQ2pSLEtBQUssQ0FBQ3lPLGFBQWE7Y0FDL0QsT0FBT0YsT0FBTyxDQUFDb0QsR0FBRyxDQUFDLENBQUM2QixNQUFNLEVBQUVsRixLQUFLLE1BQU07Z0JBQUV0TyxLQUFLLEVBQUV3VCxNQUFNO2dCQUFFcEMsT0FBTyxFQUFFOUMsS0FBSyxLQUFLaUY7Y0FBWSxDQUFFLENBQUMsQ0FBQztZQUM1RixDQUFDO1lBQ0QsTUFBTTlHLElBQUksR0FBR3dFLEtBQUssQ0FBQ2pSLEtBQUssRUFBRXVPLE9BQU8sR0FBRytFLGNBQWMsQ0FBQ3JDLEtBQUssQ0FBQ2pSLEtBQUssQ0FBQ3VPLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDNUUsTUFBTSxDQUFDbUMsT0FBTyxFQUFFK0MsVUFBVSxDQUFDLEdBQUdqUyxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQ2dOLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTTtjQUFFNkU7WUFBVSxDQUFFLEdBQUcsSUFBQXZCLFlBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFFOUMsTUFBTXJRLFFBQVEsR0FBR3lELEtBQUssSUFBRztjQUN4QjJOLEtBQUssQ0FBQ00sUUFBUSxDQUFDO2dCQUFFbEQsUUFBUSxFQUFFL0ssS0FBSyxDQUFDc0MsTUFBTSxDQUFDNUYsS0FBSztnQkFBRXVPLE9BQU8sRUFBRW1DO2NBQU8sQ0FBRSxDQUFDO1lBQ25FLENBQUM7WUFFRCxNQUFNZ0QsU0FBUyxHQUFHQSxDQUFDO2NBQUU1VCxhQUFhLEVBQUU7Z0JBQUVFLEtBQUssRUFBRTBRO2NBQU87WUFBRSxDQUFFLEtBQUk7Y0FDM0QsTUFBTWlELGtCQUFrQixHQUFHakQsT0FBTyxDQUFDa0QsU0FBUyxDQUFDQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3pDLE9BQU8sQ0FBQztjQUN0RSxNQUFNM0MsYUFBYSxHQUFHa0Ysa0JBQWtCLEtBQUssQ0FBQyxDQUFDLEdBQUd2SCxTQUFTLEdBQUd1SCxrQkFBa0I7Y0FDaEYsTUFBTUcsUUFBUSxHQUFHO2dCQUFFekYsUUFBUSxFQUFFck8sS0FBSztnQkFBRXVPLE9BQU8sRUFBRW1DLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQy9DLElBQUksSUFBSUEsSUFBSSxDQUFDNU8sS0FBSyxDQUFDO2dCQUFFeU87Y0FBYSxDQUFFO2NBRTdGd0MsS0FBSyxDQUFDTSxRQUFRLENBQUN1QyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU05VCxLQUFLLEdBQUdpUixLQUFLLENBQUNqUixLQUFLLEVBQUVxTyxRQUFRLElBQUksRUFBRTtZQUN6QyxNQUFNbUQsVUFBVSxHQUFHbE8sS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixNQUFNa0YsS0FBSyxHQUFHNkksVUFBVSxDQUFDTCxLQUFLLENBQUMzQyxLQUFLLENBQUM7Y0FDckNqUCxRQUFRLENBQUNLLEtBQUssQ0FBQ08sR0FBRyxDQUFDO2dCQUFFa08sU0FBUyxFQUFFMUY7Y0FBSyxDQUFFLENBQUM7WUFDekMsQ0FBQztZQUNELE1BQU0sQ0FBQ2xELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckQsTUFBTXNVLGVBQWUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDbEMsTUFBTUMsT0FBTyxHQUFHLElBQUlYLEtBQUEsQ0FBQVksY0FBYyxFQUFFO2NBQ3BDN0ssV0FBVyxFQUFFO2NBQ2J1RCxVQUFVLENBQUMsTUFBSztnQkFDZnFILE9BQU8sQ0FBQ0UsT0FBTyxFQUFFO2NBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDUixPQUFPRixPQUFPO1lBQ2YsQ0FBQztZQUNELE1BQU1HLGlCQUFpQixHQUFHLE1BQUFBLENBQU87Y0FBRTNIO1lBQUssQ0FBRSxLQUFJO2NBQzdDLE1BQU02QixRQUFRLEdBQUcsTUFBTWhQLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDcVUsZUFBZSxDQUFDO2dCQUFFdkgsS0FBSztnQkFBRTZCLFFBQVEsRUFBRXJPLEtBQUs7Z0JBQUVzTyxLQUFLLEVBQUUyQyxLQUFLLENBQUMzQztjQUFLLENBQUUsQ0FBQztjQUVyRzlJLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakI2SixVQUFVLENBQUMxQyxVQUFVLENBQUMsTUFBSztnQkFDMUI7Z0JBQ0E4RyxVQUFVLENBQUNILGNBQWMsQ0FBQ2pGLFFBQVEsQ0FBQ0UsT0FBTyxFQUFFRixRQUFRLENBQUNJLGFBQWEsQ0FBQyxDQUFDO2dCQUVwRWpKLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFFRCxNQUFNO2NBQUUyTSxLQUFLO2NBQUVFLE9BQU87Y0FBRUM7WUFBWSxDQUFFLEdBQUcvTixLQUFLLENBQUM2TixLQUFLO1lBRXBELE9BQ0M1USxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWtDLEdBQ3BEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUEyQyxHQUl6RGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUFFeVEsS0FBSyxDQUFDM0MsS0FBSyxHQUFHLENBQUMsRSxJQUFRLEVBQ25EOU0sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUE4UyxLQUFLO2NBQ0w3USxXQUFXLEVBQUUzQixLQUFLLENBQUMrTyxTQUFTLENBQUNwTixXQUFXO2NBQ3hDaEIsSUFBSSxFQUFDLFVBQVU7Y0FDZkMsS0FBSyxFQUFFQSxLQUFLLElBQUksRUFBRTtjQUNsQkgsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCcVIsU0FBUyxFQUFFQTtZQUFTLEVBQ25CLEVBQ0YxUCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQWUsR0FDakNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQXVOLGlCQUFpQjtjQUNqQjdTLElBQUksRUFBQyxTQUFTO2NBQ2RmLFNBQVMsRUFBQyxRQUFRO2NBQ2xCZ0MsUUFBUSxFQUFFLENBQUN4QyxLQUFLLElBQUlBLEtBQUssS0FBSyxFQUFFO2NBQ2hDNEQsT0FBTyxFQUFFbVEsZUFBZTtjQUN4QjNTLEtBQUssRUFBRWhDLEtBQUssQ0FBQzJFLE9BQU8sQ0FBQ2dRO1lBQWUsRUFDbkMsRUFDRnZTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBOE0sVUFBVTtjQUFDbEssSUFBSSxFQUFDLFFBQVE7Y0FBQ2YsU0FBUyxFQUFDLFFBQVE7Y0FBQ29ELE9BQU8sRUFBRTROLFVBQVU7Y0FBRXBRLEtBQUssRUFBRWhDLEtBQUssQ0FBQzJFLE9BQU8sQ0FBQ3NDO1lBQU0sRUFBSSxDQUN4RixDQUNMLEVBQ043RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhTLFFBQUEsQ0FBQTNDLGtCQUFrQjtjQUNsQmxMLFFBQVEsRUFBRUEsUUFBUTtjQUNsQi9DLFFBQVEsRUFBRSxDQUFDeU8sS0FBSyxDQUFDalIsS0FBSztjQUN0Qm1FLElBQUksRUFBRXVNLE9BQU8sRUFBRWxLLE1BQU07Y0FDckJrSyxPQUFPLEVBQUVBLE9BQU87Y0FDaEI3USxRQUFRLEVBQUU2VDtZQUFTLEVBQ2xCLEVBQ0ZsUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3lJLFdBQUEsQ0FBQU0sZUFBZTtjQUNmOEksS0FBSyxFQUFFQSxLQUFLO2NBQ1pFLE9BQU8sRUFBRUEsT0FBTztjQUNoQmhJLFNBQVMsRUFBRWlJLFlBQVk7Y0FDdkJ0TixXQUFXLEVBQUVULEtBQUssQ0FBQ1MsV0FBVztjQUM5QmIsSUFBSSxFQUFFNEYsU0FBUztjQUNmakYsT0FBTyxFQUFFc0UsV0FBVztjQUNwQmhJLEtBQUssRUFBRWhDLEtBQUssQ0FBQ2lWLFlBQVksQ0FBQ2pULEtBQUs7Y0FDL0JvUixZQUFZLEVBQUVwVCxLQUFLLENBQUNpVixZQUFZLENBQUN2VCxXQUFXO2NBQzVDb0csVUFBVSxFQUFFaU47WUFBaUIsRUFDNUIsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZIQSxJQUFBM1MsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUEwVixZQUFBLEdBQUExVixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVTJWLG9CQUFvQkEsQ0FBQztZQUFFdkMsT0FBTztZQUFFd0M7VUFBWSxDQUFFO1lBQzdELE1BQU07Y0FDTGpRLEtBQUs7Y0FDTG5GLEtBQUssRUFBRTtnQkFBRXFPLGNBQWMsRUFBRXJPLEtBQUs7Z0JBQUUyTztjQUFNLENBQUU7Y0FDeEMxTztZQUFRLENBQ1IsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU1xUCxNQUFNLEdBQUdDLElBQUksSUFBSUEsSUFBSSxDQUFDM04sSUFBSSxLQUFLLGdCQUFnQjtZQUNyRCxNQUFNMFEsR0FBRyxHQUFHL0MsSUFBSSxLQUFLO2NBQUU1TyxLQUFLLEVBQUU0TyxJQUFJLENBQUM2RixFQUFFO2NBQUU3VCxLQUFLLEVBQUVnTyxJQUFJLENBQUN4TjtZQUFLLENBQUUsQ0FBQztZQUUzRCxNQUFNbU4sT0FBTyxHQUFHaEssS0FBSyxDQUFDNk4sS0FBSyxDQUFDdlIsVUFBVSxDQUFDNEgsS0FBSyxDQUFDa0csTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQ2dELEdBQUcsQ0FBQ0EsR0FBRyxDQUFDO1lBQ3BFLElBQUlzQixZQUFZLEdBQUc7Y0FBRWpULEtBQUssRUFBRSxFQUFFO2NBQUVZLEtBQUssRUFBRXhCLEtBQUssQ0FBQzRTLE9BQU8sQ0FBQzBDO1lBQVcsQ0FBRTtZQUVsRSxNQUFNN1UsUUFBUSxHQUFHeUQsS0FBSyxJQUFHO2NBQ3hCakUsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztnQkFBRStSLE9BQU8sRUFBRTFPLEtBQUssQ0FBQ3NDLE1BQU0sQ0FBQzVGO2NBQUssQ0FBRSxDQUFDO2NBQ25ELElBQUlzRCxLQUFLLENBQUNzQyxNQUFNLENBQUM1RixLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUM5QixNQUFNZ1MsT0FBTyxHQUFHek4sS0FBSyxDQUFDNk4sS0FBSyxDQUFDdlIsVUFBVSxDQUFDOFQsR0FBRyxDQUFDclIsS0FBSyxDQUFDc0MsTUFBTSxDQUFDNUYsS0FBSyxDQUFDO2dCQUM5RCxJQUFJLENBQUNnUyxPQUFPLENBQUM3TSxTQUFTLENBQUNHLE9BQU8sRUFBRTtrQkFDL0JrUCxZQUFZLENBQUMsQ0FBQ3pHLE1BQU0sQ0FBQzZHLG1CQUFtQixDQUFDLENBQUM7a0JBRTFDOzs7Y0FHRkosWUFBWSxDQUFDLEVBQUUsQ0FBQztjQUNoQm5WLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDTyxHQUFHLENBQUM7Z0JBQUUrUixPQUFPLEVBQUUxTyxLQUFLLENBQUNzQyxNQUFNLENBQUM1RjtjQUFLLENBQUUsQ0FBQztZQUNwRCxDQUFDO1lBRUQsT0FDQ3dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsZ0JBQVFsQixLQUFLLENBQUM0UyxPQUFPLENBQUNwUixLQUFLLENBQVMsRUFDcENZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ1UsWUFBQSxDQUFBTyxXQUFXO2NBQUM3VSxLQUFLLEVBQUVnUyxPQUFPO2NBQUV6RCxPQUFPLEVBQUUsQ0FBQzBFLFlBQVksRUFBRSxHQUFHMUUsT0FBTyxDQUFDO2NBQUUxTyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUN0RjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBeUMsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFtTixNQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQTZDLE1BQUEsR0FBQTdDLE9BQUE7VUFFTSxTQUFVa1csc0JBQXNCQSxDQUFBO1lBQ3JDLE1BQU07Y0FBRTFWLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdULEtBQUssQ0FBQ1UsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTU0sUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUMsYUFBYSxFQUFFO2dCQUFFQyxJQUFJO2dCQUFFQztjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEWCxRQUFRLENBQUNZLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUdDO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNRSxNQUFNLEdBQUdiLFFBQVEsQ0FBQ2MsSUFBSTtZQUU1QixNQUFNaUUsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIvRSxRQUFRLENBQUNLLEtBQUssQ0FBQ3FWLE1BQU0sRUFBRTtjQUN2QnZWLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDakIsQ0FBQztZQUNELE1BQU1zTyxVQUFVLEdBQUdBLENBQUEsS0FBTXRPLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFFekMsTUFBTXdWLFNBQVMsR0FBRzNWLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsSUFBSUosSUFBSSxLQUFLLE9BQU8sR0FBRyxPQUFPLEdBQUdBLElBQUk7WUFFN0UsT0FDQ1IsS0FBQSxDQUFBdUIsYUFBQSxDQUFBdkIsS0FBQSxDQUFBd0IsUUFBQSxRQUNDeEIsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBRTtZQUFnQixHQUMvQnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3JCLE9BQUEsQ0FBQXdCLGNBQWMsT0FBRyxFQUNsQjFCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0J6QixLQUFBLENBQUF1QixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JFLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRixLQUFLO2NBQ3pDRCxPQUFPLEVBQUMsVUFBVTtjQUNsQlosSUFBSSxFQUFDLGFBQWE7Y0FDbEJGLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkssTUFBTSxFQUFFQSxNQUFNO2NBQ2RhLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXO2NBQ3JEZixLQUFLLEVBQUVYLFFBQVEsQ0FBQ3lCO1lBQVcsRUFDMUIsQ0FDRyxDQUNELENBQ0csRUFDVi9CLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBU0UsU0FBUyxFQUFDO1lBQTZCLEdBQy9DekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUU7WUFBZ0IsR0FDL0J6QixLQUFBLENBQUF1QixhQUFBLENBQUNnQyxXQUFBLENBQUEyUyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRUYsU0FBUztjQUNwQnpHLE9BQU8sRUFBRTtnQkFDUjdPLEtBQUssRUFBRVgsS0FBQSxDQUFBdUIsYUFBQSxDQUFDbUIsTUFBQSxDQUFBMFQsbUJBQW1CO2tCQUFDM1YsT0FBTyxFQUFFQTtnQkFBTyxFQUFJO2dCQUNoRG1ILElBQUksRUFBRTVILEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3BCLE1BQUEsQ0FBQTJPLHdCQUF3QjtrQkFBQ3pKLFFBQVEsRUFBRUEsUUFBUTtrQkFBRTBKLFVBQVUsRUFBRUE7Z0JBQVU7ZUFDMUU7Y0FDRC9NLFdBQVcsRUFBRWhDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3lMLE1BQUEsQ0FBQXdCLHdCQUF3QjtnQkFBQ3hOLElBQUksRUFBRVYsUUFBUSxDQUFDNEIsSUFBSTtnQkFBRXJCLFVBQVUsRUFBRUE7Y0FBVTtZQUFJLEVBQ3JGLENBQ0csQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUFqQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQVFPLE1BQU13VyxjQUFjLEdBQUdBLENBQUM7WUFBRXhHLElBQUksRUFBRWlGLE1BQU07WUFBRXBGLGFBQWE7WUFBRUg7VUFBSyxDQUFVLEtBQUk7WUFDaEYsTUFBTS9NLElBQUksR0FBRytNLEtBQUssS0FBS0csYUFBYSxHQUFHLE9BQU8sR0FBRyxPQUFPO1lBQ3hELE1BQU1uSSxHQUFHLEdBQUcsdUNBQXVDL0UsSUFBSSxLQUFLLE9BQU8sR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsRUFBRTtZQUNoSCxPQUNDQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBSUUsU0FBUyxFQUFFOEY7WUFBRyxHQUNqQjlFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBZ0IsR0FBRWUsSUFBSSxLQUFLLE9BQU8sSUFBSUMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUEwVyxJQUFJO2NBQUM5VCxJQUFJLEVBQUVBLElBQUk7Y0FBRWYsU0FBUyxFQUFDO1lBQVMsRUFBRyxDQUFRLEVBQ3RHZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFvQixHQUFFcVQsTUFBTSxDQUFRLENBQ2hEO1VBRVAsQ0FBQztVQUFDdkwsT0FBQSxDQUFBOE0sY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRixJQUFBNVQsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFtSyxXQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQWlJLEdBQUEsR0FBQWpJLE9BQUE7VUFHQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFhTSxTQUFVK1EsV0FBV0EsQ0FBQztZQUFFN00sUUFBUTtZQUFFTixRQUFRO1lBQUVnTCxlQUFlLEdBQUc7VUFBRSxDQUFvQjtZQUN6RixNQUFNO2NBQ0xwTyxLQUFLO2NBQ0xDLFFBQVE7Y0FDUmtGLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUMwSixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd6SCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTZWLEtBQUssR0FBRztjQUFFOVMsUUFBUSxFQUFFLENBQUNuRCxRQUFRLENBQUNrVyxRQUFRLElBQUkvUztZQUFRLENBQUU7WUFDMUQsTUFBTWdULFVBQVUsR0FBR0EsQ0FBQSxLQUFNdk0sa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBRTdELE1BQU05QixVQUFVLEdBQUdzRixLQUFLLElBQUc7Y0FDMUIsT0FBT25OLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDNEgsUUFBUSxDQUFDa0YsS0FBSyxFQUFFO2dCQUFFLEdBQUdnQjtjQUFlLENBQUUsQ0FBQztZQUM5RCxDQUFDO1lBRUQsT0FDQ2hNLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUNNLEtBQUssQ0FBQzBCLEtBQUssQ0FBTSxFQUM1QkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1RyxHQUFBLENBQUFRLFFBQVE7Y0FBQSxHQUFLaU8sS0FBSztjQUFFMVIsT0FBTyxFQUFFNFIsVUFBVTtjQUFFN1UsT0FBTyxFQUFDLE1BQU07Y0FBQzhVLE1BQU0sRUFBRTtZQUFLLEdBQ3BFelEsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUNuQixDQUNOLENBQ0UsRUFDUnhFLFFBQVEsRUFDUmtHLGVBQWUsSUFDZnhILE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeUksV0FBQSxDQUFBTSxlQUFlO2NBQ2ZsRixJQUFJLEVBQUU2RSxlQUFlO2NBQ3JCbUosS0FBSyxFQUFFNU4sS0FBSyxDQUFDNk4sS0FBSyxDQUFDRCxLQUFLO2NBQ3hCOUgsU0FBUyxFQUFFOUYsS0FBSyxDQUFDNk4sS0FBSyxDQUFDRSxZQUFZO2NBQ25DeE4sT0FBTyxFQUFFMFEsVUFBVTtjQUNuQnBVLEtBQUssRUFBRWhDLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQ3RVLEtBQUs7Y0FDekJvUixZQUFZLEVBQUVwVCxLQUFLLENBQUNzVyxNQUFNLENBQUM1VSxXQUFXO2NBQ3RDb0csVUFBVSxFQUFFQTtZQUFVLEVBRXZCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQTFGLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBK1csWUFBQSxHQUFBL1csT0FBQTtVQUNBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJKLEtBQUEsR0FBQTNKLE9BQUE7VUFFTSxTQUFVdVcsbUJBQW1CQSxDQUFDO1lBQUUzVjtVQUFPLENBQUU7WUFDOUMsTUFBTSxDQUFDb1csT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3JVLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNO2NBQUVzRixNQUFNO2NBQUUxRixRQUFRO2NBQUV5VyxRQUFRO2NBQUV2UixLQUFLO2NBQUVuRjtZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3pFLE1BQU15VyxXQUFXLEdBQUd4UixLQUFLLENBQUNTLFdBQVcsQ0FBQ2pCLE9BQU87WUFDN0MsTUFBTSxDQUFDaVMsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHelUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0sQ0FBQ3lXLFdBQVcsRUFBRUMsVUFBVSxDQUFDLEdBQUczVSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkQsTUFBTTJXLGFBQWEsR0FBR0EsQ0FBQSxLQUFNRCxVQUFVLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO1lBQ3BELE1BQU1HLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU0zVyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDNFcsT0FBTyxFQUFFO2NBQ3RDUixRQUFRLENBQUM7Z0JBQUVwVztjQUFLLENBQUUsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBQWIsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUNLLEtBQUssQ0FBQyxFQUFFMlcsUUFBUSxFQUFFLGlCQUFpQixDQUFDO1lBRXhELE1BQU1qTixXQUFXLEdBQUdBLENBQUEsS0FBTTZNLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNVixLQUFLLEdBQUc7Y0FBRTFSLE9BQU8sRUFBRXdGLFdBQVc7Y0FBRTVHLFFBQVEsRUFBRW5ELFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLElBQUlOLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ3hGO1lBQUssQ0FBRTtZQUNsRyxNQUFNNFcsTUFBTSxHQUFHalQsS0FBSyxJQUFJOUQsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN2QyxNQUFNZ1gsU0FBUyxHQUFHbFQsS0FBSyxJQUFJNlMsVUFBVSxDQUFDLENBQUNELFdBQVcsQ0FBQztZQUNuRCxNQUFNTyxZQUFZLEdBQUc7Y0FBRTdTLE9BQU8sRUFBRTRTLFNBQVM7Y0FBRWhVLFFBQVEsRUFBRW5ELFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLElBQUlOLFFBQVEsQ0FBQzhGLFNBQVMsQ0FBQ3hGO1lBQUssQ0FBRTtZQUN2RyxNQUFNK1csVUFBVSxHQUFHLENBQUNSLFdBQVcsR0FBR0gsV0FBVyxDQUFDWSxLQUFLLEdBQUdaLFdBQVcsQ0FBQzdSLE1BQU07WUFFeEUsT0FDQzFDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUEwQixHQUMzQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDTSxLQUFLLENBQUMwQixLQUFLLENBQU0sRUFDNUJJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Y0FBQ2hELE9BQU8sRUFBQyxNQUFNO2NBQUNpRCxPQUFPLEVBQUUyUyxNQUFNO2NBQUVoVixJQUFJLEVBQUM7WUFBUSxHQUNuRHdVLFdBQVcsQ0FBQzNQLElBQUksQ0FDVCxFQUNUNUUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUs4VixZQUFZO2NBQUVsVixJQUFJLEVBQUM7WUFBTSxHQUNsRG1WLFVBQVUsQ0FDSCxFQUNUbFYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUsyVSxLQUFLO2NBQUUvVCxJQUFJLEVBQUM7WUFBUSxHQUM3Q3dVLFdBQVcsQ0FBQzFQLE1BQU0sQ0FDWCxDQUNKLENBQ0UsRUFDVDdFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaUksS0FBQSxDQUFBcU8sa0JBQWtCO2NBQUNDLFVBQVUsRUFBRVgsV0FBVztjQUFFWSxNQUFNLEVBQUVWO1lBQWEsRUFBSSxDQUNqRSxFQUNONVUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNxVixZQUFBLENBQUE1SSxrQkFBa0I7Y0FBQzVJLElBQUksRUFBRTZSLGVBQWU7Y0FBRWxSLE9BQU8sRUFBRXNFO1lBQVcsRUFBSSxDQUNqRTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBNUgsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUEySixLQUFBLEdBQUEzSixPQUFBO1VBQ0EsSUFBQW1ZLGFBQUEsR0FBQW5ZLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFvWSxpQkFBQSxHQUFBcFksT0FBQTtVQUVNLFNBQVVnWSxrQkFBa0JBLENBQUM7WUFBRUMsVUFBVTtZQUFFQztVQUFNLENBQUU7WUFDeEQsTUFBTTtjQUFFL1IsTUFBTTtjQUFFMUYsUUFBUTtjQUFFeVcsUUFBUTtjQUFFMVcsS0FBSztjQUFFbUY7WUFBSyxDQUFFLEdBQUcsSUFBQXZGLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDekUsTUFBTSxDQUFDcVgsS0FBSyxFQUFFTSxRQUFRLENBQUMsR0FBR3pWLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDc0YsTUFBTSxDQUFDckYsS0FBSyxDQUFDeU8sU0FBUyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQytJLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUczVixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTStXLFNBQVMsR0FBR3pSLE1BQU0sSUFBRztjQUMxQmtTLFFBQVEsQ0FBQ2xTLE1BQU0sQ0FBQztjQUNoQixNQUFNckYsS0FBSyxHQUFHO2dCQUFFLEdBQUdxRixNQUFNLENBQUNyRjtjQUFLLENBQUU7Y0FDakNBLEtBQUssQ0FBQ3lPLFNBQVMsR0FBRyxDQUFDLEdBQUd3SSxLQUFLLENBQUM7Y0FFNUJ0WCxRQUFRLENBQUNLLEtBQUssQ0FBQ08sR0FBRyxDQUFDUCxLQUFLLENBQUM7WUFDMUIsQ0FBQztZQUVELElBQUltWCxVQUFVLEVBQUU7Y0FDZixNQUFNblUsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztnQkFDM0J5VSxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNuQixNQUFNOVgsUUFBUSxDQUFDSyxLQUFLLENBQUNPLEdBQUcsQ0FBQztrQkFBRWtPLFNBQVMsRUFBRXdJO2dCQUFLLENBQUUsQ0FBQztnQkFDOUMsTUFBTXRYLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFO2dCQUNyQmdYLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCTCxNQUFNLEVBQUU7Y0FDVCxDQUFDO2NBRUQsT0FDQ3RWLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3lXLGFBQUEsQ0FBQUssT0FBTyxDQUFDQyxLQUFLO2dCQUFDdFMsTUFBTSxFQUFFNFIsS0FBSztnQkFBRUgsU0FBUyxFQUFFQSxTQUFTO2dCQUFFaFcsU0FBUyxFQUFDO2NBQWUsR0FDM0VtVyxLQUFLLENBQUNoRixHQUFHLENBQUN0RCxRQUFRLElBQUc7Z0JBQ3JCLE9BQ0M3TSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3lXLGFBQUEsQ0FBQUssT0FBTyxDQUFDdEcsSUFBSTtrQkFBQ3BHLEdBQUcsRUFBRTJELFFBQVEsQ0FBQ0EsUUFBUTtrQkFBRXJPLEtBQUssRUFBRXFPO2dCQUFRLEdBQ3BEN00sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMwVyxpQkFBQSxDQUFBTSxnQkFBZ0I7a0JBQUM3SyxJQUFJLEVBQUU0QixRQUFRO2tCQUFFMUwsRUFBRSxFQUFDLEtBQUs7a0JBQUN1USxTQUFTO2dCQUFBLEVBQUcsQ0FDekM7Y0FFakIsQ0FBQyxDQUFDLENBQ2EsRUFDaEIxUixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Z0JBQVNFLFNBQVMsRUFBQztjQUF3QyxHQUMxRGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtnQkFBQ2hELE9BQU8sRUFBQyxTQUFTO2dCQUFDaUQsT0FBTyxFQUFFbEIsUUFBUTtnQkFBRUYsUUFBUSxFQUFFMFU7Y0FBVSxHQUMvRDNTLEtBQUssQ0FBQ1MsV0FBVyxDQUFDakIsT0FBTyxDQUFDNUQsSUFBSSxDQUN2QixDQUNBLENBQ1I7O1lBSUwsT0FBT3FCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDaUksS0FBQSxDQUFBTSxJQUFJO2NBQUNySSxTQUFTLEVBQUMsZUFBZTtjQUFDaUksS0FBSyxFQUFFMUQsTUFBTSxDQUFDckYsS0FBSyxDQUFDeU8sU0FBUztjQUFFckYsT0FBTyxFQUFFa08saUJBQUEsQ0FBQU07WUFBZ0IsRUFBSTtVQUNwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQTNZLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEySixLQUFBLEdBQUEzSixPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBaUQsWUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUF3VSxRQUFBLEdBQUF4VSxPQUFBO1VBQ0EsSUFBQTBELFdBQUEsR0FBQTFELE9BQUE7VUFPTSxTQUFVMFksZ0JBQWdCQSxDQUFDO1lBQUU3SyxJQUFJO1lBQUU5SixFQUFFLEdBQUcsSUFBSTtZQUFFdVEsU0FBUyxHQUFHO1VBQUssQ0FBVTtZQUM5RSxNQUFNLENBQUNxRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHaFcsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU07Y0FBRUw7WUFBSyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV0QyxNQUFNbUUsT0FBTyxHQUFHZCxFQUFFO1lBQ2xCLE1BQU04VSxRQUFRLEdBQUdBLENBQUEsS0FBTSxDQUFDRixVQUFVO1lBRWxDLE9BQ0MvVixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ21ELE9BQU87Y0FBQ2pELFNBQVMsRUFBQztZQUFnQixHQUNsQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUIsWUFBQSxDQUFBSSxvQkFBb0I7Y0FBQ3dWLFFBQVEsRUFBRUE7WUFBUSxHQUN2Q2pXLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUIsWUFBQSxDQUFBSyxpQkFBaUIsUUFDakJWLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUNDa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUEyUyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRWhDLFNBQVM7Y0FDcEJ3RSxPQUFPO2NBQ1BuSixPQUFPLEVBQUU7Z0JBQ1JvSixJQUFJLEVBQUVuVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTBXLElBQUk7a0JBQUM3VSxTQUFTLEVBQUMsZ0JBQWdCO2tCQUFDZSxJQUFJLEVBQUM7Z0JBQU0sRUFBRztnQkFDckRxVyxLQUFLLEVBQUVwVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTBXLElBQUk7a0JBQUM3VSxTQUFTLEVBQUMsZ0JBQWdCO2tCQUFDZSxJQUFJLEVBQUM7Z0JBQWM7O1lBQzNELEVBQ0EsRUFFRkMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFvQixHQUFFaU0sSUFBSSxDQUFDNEIsUUFBUSxDQUFRLENBQ3ZELENBQ2MsRUFDcEI3TSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VCLFlBQUEsQ0FBQU8sa0JBQWtCLFFBQ2xCWixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQTJTLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQ3pJLElBQUksQ0FBQzhCLE9BQU8sRUFBRS9ILE1BQU07Y0FDakMrSCxPQUFPLEVBQUU7Z0JBQ1JvSixJQUFJLEVBQ0huVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2lJLEtBQUEsQ0FBQU0sSUFBSTtrQkFDSkosS0FBSyxFQUFFZ0UsSUFBSSxDQUFDOEIsT0FBTztrQkFDbkI3TyxLQUFLLEVBQUU7b0JBQUUrTyxhQUFhLEVBQUVoQyxJQUFJLENBQUNnQztrQkFBYSxDQUFFO2tCQUM1QzNGLE9BQU8sRUFBRXNLLFFBQUEsQ0FBQWdDO2dCQUFjLEVBRXhCO2dCQUNEd0MsS0FBSyxFQUFFcFcsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2tCQUFLRSxTQUFTLEVBQUM7Z0JBQXNCLEdBQUVwQixLQUFLLENBQUNxTyxjQUFjLENBQUNvSyxZQUFZOztZQUMvRSxFQUNBLENBQ2tCLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBL1ksS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVWtaLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFL1MsTUFBTTtjQUFFM0YsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhELE9BQ0NQLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQXZCLEtBQUEsQ0FBQXdCLFFBQUEsUUFDQ3hCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0J6QixLQUFBLENBQUF1QixhQUFBLGdCQUFRbEIsS0FBSyxDQUFDTSxLQUFLLENBQUNxWSxTQUFTLENBQUNuWCxLQUFLLENBQVMsRUFDNUM3QixLQUFBLENBQUF1QixhQUFBLENBQUN4QixLQUFBLENBQUE0QixRQUFRO2NBQ1JYLElBQUksRUFBQyxXQUFXO2NBQ2hCZ0IsV0FBVyxFQUFFM0IsS0FBSyxDQUFDTSxLQUFLLENBQUNxWSxTQUFTLENBQUNoWCxXQUFXO2NBQzlDZixLQUFLLEVBQUUrRSxNQUFNLENBQUNyRixLQUFLLEVBQUVxWTtZQUFTLEVBQzdCLENBQ0csQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBalosS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVb1osZ0JBQWdCQSxDQUFDO1lBQUVqWTtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFZ0YsTUFBTTtjQUFFM0YsS0FBSztjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hELE1BQU1PLFFBQVEsR0FBRyxNQUFBQSxDQUFPO2NBQUVDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUM3RFgsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTUUsTUFBTSxHQUFHYixRQUFRLENBQUNjLElBQUk7WUFFNUIsTUFBTUgsS0FBSyxHQUFHWCxRQUFRLENBQUNLLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLElBQUlYLEtBQUssQ0FBQ00sS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQ2dCLFdBQVc7WUFFbkUsT0FDQ1MsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU8yWCxPQUFPLEVBQUM7WUFBRSxHQUFFN1ksS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQyxDQUFDYSxLQUFLLENBQVMsRUFDbkRZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBNEIsUUFBUTtjQUFDYixRQUFRLEVBQUVBLFFBQVE7Y0FBRUssTUFBTSxFQUFFQSxNQUFNO2NBQUVlLElBQUksRUFBQyxVQUFVO2NBQUNsQixJQUFJLEVBQUVBLElBQUk7Y0FBRUMsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDckY7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQXdCLE1BQUEsR0FBQTVDLE9BQUE7VUFFTSxTQUFVc1osV0FBV0EsQ0FBQztZQUFFdEo7VUFBSSxDQUE2QztZQUM5RSxPQUNDcE4sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBWSxHQUFFb08sSUFBSSxDQUFDN08sSUFBSSxFLEtBQVksRSxLQUFDeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9zTyxJQUFJLENBQUM1TyxLQUFLLENBQVEsQ0FDMUU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBd0IsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEySixLQUFBLEdBQUEzSixPQUFBO1VBQ0EsSUFBQXVaLFlBQUEsR0FBQXZaLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUF3WixZQUFBLEdBQUF4WixPQUFBO1VBQ00sU0FBVXlaLHFCQUFxQkEsQ0FBQztZQUFFdFksSUFBSTtZQUFFME07VUFBSSxDQUFFO1lBQ25ELE1BQU07Y0FDTHBOLFFBQVEsRUFBRTtnQkFBRUs7Y0FBSyxDQUFFO2NBQ25CTjtZQUFLLENBQ0wsR0FBRyxJQUFBSixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBRXhCLE1BQU0sQ0FBQ3dYLE1BQU0sRUFBRXdCLFNBQVMsQ0FBQyxHQUFHOVcsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU1nWSxRQUFRLEdBQUdBLENBQUEsS0FBTWEsU0FBUyxDQUFDLENBQUN4QixNQUFNLENBQUM7WUFDekMsTUFBTXJPLEtBQUssR0FBRy9JLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEVBQUU0UixHQUFHLENBQUMsQ0FBQy9DLElBQUksRUFBRU4sS0FBSyxLQUFJO2NBQzlDLE1BQU0sQ0FBQ2lLLFNBQVMsRUFBRXZZLEtBQUssQ0FBQyxHQUFHMEksTUFBTSxDQUFDQyxJQUFJLENBQUNqSixLQUFLLENBQUM4WSxTQUFTLENBQUN6WSxJQUFJLENBQUMsQ0FBQzBZLE1BQU0sQ0FBQztjQUNwRSxPQUFPO2dCQUFFMVksSUFBSSxFQUFFNk8sSUFBSSxDQUFDMkosU0FBUyxDQUFDO2dCQUFFdlksS0FBSyxFQUFFNE8sSUFBSSxDQUFDNU8sS0FBSztjQUFDLENBQUU7WUFDckQsQ0FBQyxDQUFDO1lBRUYsT0FDQ3dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQXdELEdBQ3pFZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUNNLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLENBQUNhLEtBQUssQ0FBTSxFQUNsQ1ksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUEwVyxJQUFJO2NBQUM5VCxJQUFJLEVBQUMsTUFBTTtjQUFDZixTQUFTLEVBQUMsZ0JBQWdCO2NBQUNvRCxPQUFPLEVBQUU2VDtZQUFRLEVBQUksQ0FDMUQsRUFDVGpXLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBMlMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU0QixNQUFNO2NBQ2pCWSxPQUFPO2NBQ1BuSixPQUFPLEVBQUU7Z0JBQ1JvSixJQUFJLEVBQUVuVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhYLFlBQUEsQ0FBQU0sZUFBZTtrQkFBQ3RVLFFBQVEsRUFBRXFULFFBQVE7a0JBQUUxWCxJQUFJLEVBQUVBLElBQUk7a0JBQUU2TyxJQUFJLEVBQUVsUCxLQUFLLENBQUNLLElBQUk7Z0JBQUMsRUFBSTtnQkFDNUU2WCxLQUFLLEVBQUVwVyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2lJLEtBQUEsQ0FBQU0sSUFBSTtrQkFBQ3JJLFNBQVMsRUFBQyxzQkFBc0I7a0JBQUNpSSxLQUFLLEVBQUVBLEtBQUs7a0JBQUVLLE9BQU8sRUFBRXFQLFlBQUEsQ0FBQUQ7Z0JBQVc7O1lBQ2hGLEVBQ0EsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBNVYsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBa0JNLFNBQVUrWixVQUFVQSxDQUFDO1lBQUU1WSxJQUFJO1lBQUVILFVBQVU7WUFBRTRDLFFBQVE7WUFBRWdMLGVBQWUsR0FBRztVQUFFLENBQW9CO1lBQ2hHLE1BQU07Y0FDTHBPLEtBQUs7Y0FDTG1GLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFFeEIsTUFBTTRHLFFBQVEsR0FBR0EsQ0FBQSxLQUFNdEcsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUUzQyxPQUNDNEIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLEVBQzVCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVMsR0FDdkJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dDLFdBQUEsQ0FBQXFCLE1BQU07Y0FBQ2hELE9BQU8sRUFBQyxNQUFNO2NBQUNpQyxRQUFRO2NBQUNnQixPQUFPLEVBQUVzQztZQUFRLEdBQy9DbEIsV0FBVyxDQUFDakIsT0FBTyxDQUFDMEIsTUFBTSxDQUNuQixDQUNKLENBQ0UsRUFDVGpFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMkIsR0FDekNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQThCLEdBQUVwQixLQUFLLENBQUN5QixVQUFVLENBQUNsQixLQUFLLENBQUNtQixXQUFXLENBQVEsQ0FDckYsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBVSxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBYU0sU0FBVStRLFdBQVdBLENBQUM7WUFBRTdNLFFBQVE7WUFBRU4sUUFBUTtZQUFFZ0wsZUFBZSxHQUFHO1VBQUUsQ0FBb0I7WUFDekYsTUFBTTtjQUNMcE8sS0FBSztjQUNMQyxRQUFRO2NBQ1JrRixLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFHeEIsT0FDQ2tDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQ0NpQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGFBQUtsQixLQUFLLENBQUNNLEtBQUssQ0FBQzBCLEtBQUssQ0FBTSxDQUNwQixFQUNSMEIsUUFBUSxDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUF0QixNQUFBLEdBQUE1QyxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQWdhLFFBQUEsR0FBQWhhLE9BQUE7VUFDQSxJQUFBNFIsT0FBQSxHQUFBNVIsT0FBQTtVQUNBLElBQUFpYSxRQUFBLEdBQUFqYSxPQUFBO1VBT00sU0FBVThaLGVBQWVBLENBQUM7WUFBRXRVLFFBQVE7WUFBRXJFLElBQUk7WUFBRTZPO1VBQUksQ0FBeUI7WUFDOUUsTUFBTTtjQUNMdlAsUUFBUSxFQUFFO2dCQUFFSztjQUFLO1lBQUUsQ0FDbkIsR0FBRyxJQUFBVixRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU07Y0FBRTRYLFVBQVU7Y0FBRW5UO1lBQU8sQ0FBRSxHQUFHLElBQUE4VSxRQUFBLENBQUFDLE9BQU8sRUFBQzFVLFFBQVEsQ0FBQztZQUNqRCxPQUNDNUMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc1ksUUFBQSxDQUFBRyxnQkFBZ0I7Y0FBQ2haLElBQUksRUFBRUEsSUFBSTtjQUFFME0sSUFBSSxFQUFFL00sS0FBSyxDQUFDOFksU0FBUyxDQUFDelksSUFBSTtZQUFDLEVBQUksRUFDN0R5QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2tRLE9BQUEsQ0FBQXdJLGdCQUFnQjtjQUFDaFQsTUFBTSxFQUFFakMsT0FBTyxDQUFDaUMsTUFBTTtjQUFFNUIsUUFBUSxFQUFFTCxPQUFPLENBQUNLLFFBQVE7Y0FBRThTLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQzlGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUExVixNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXFhLGFBQUEsR0FBQXJhLE9BQUE7VUFRQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFQSxNQUFNc2EsVUFBVSxHQUFHO1lBQ2xCQyxLQUFLLEVBQUVyYSxLQUFBLENBQUE4UyxLQUFLO1lBQ1o5RixRQUFRLEVBQUVoTixLQUFBLENBQUE0QixRQUFRO1lBQ2xCMFksS0FBSyxFQUFFdGEsS0FBQSxDQUFBdWEsS0FBSztZQUNaQyxRQUFRLEVBQUV4YSxLQUFBLENBQUF5YSxRQUFRO1lBQ2xCQyxNQUFNLEVBQUUxYSxLQUFBLENBQUEyYTtXQUNSO1VBWUssU0FBVUMsa0JBQWtCQSxDQUFDO1lBQUUzWixJQUFJO1lBQUUwTSxJQUFJO1lBQUU2QixLQUFLO1lBQUV6TztVQUFRLENBQXNDO1lBQ3JHLE1BQU07Y0FDTFIsUUFBUSxFQUFFO2dCQUFFSztjQUFLLENBQUU7Y0FDbkJMLFFBQVE7Y0FDUkQ7WUFBSyxDQUNMLEdBQUcsSUFBQUosUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNO2NBQUVxYSxRQUFRO2NBQUUzWjtZQUFLLENBQUUsR0FBRyxJQUFBaVosYUFBQSxDQUFBVyxzQkFBc0IsR0FBRTtZQUNwRCxNQUFNbkIsTUFBTSxHQUFHL1AsTUFBTSxDQUFDQyxJQUFJLENBQUM4RCxJQUFJLENBQUNnTSxNQUFNLENBQUM7WUFDdkMsTUFBTTFULE1BQU0sR0FBR3JGLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEdBQUdMLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM3QyxNQUFNOFosYUFBYSxHQUFHLEVBQUU7WUFDeEIsTUFBTUMsVUFBVSxHQUFHMWEsS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQztZQUVwQyxNQUFNRyxNQUFNLEdBQUdvRCxLQUFLLElBQUc7Y0FDdEJqRSxRQUFRLENBQUNjLElBQUksQ0FBQztnQkFBRVQsS0FBSyxFQUFFO2tCQUFFSyxJQUFJLEVBQUVDO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQzFDLENBQUM7WUFFRCxNQUFNK1osTUFBTSxHQUFHdEIsTUFBTSxDQUFDOUcsR0FBRyxDQUFDLENBQUM1UixJQUFJLEVBQUVpYSxDQUFDLEtBQUk7Y0FDckMsSUFBSWphLElBQUksS0FBSyxhQUFhLEVBQUUsT0FBTyxJQUFJO2NBQ3ZDLE1BQU1rYSxLQUFLLEdBQUdmLFVBQVUsQ0FBQ3pNLElBQUksQ0FBQ2dNLE1BQU0sQ0FBQzFZLElBQUksQ0FBQyxDQUFDO2NBQzNDLE1BQU11VixLQUFLLEdBQUc7Z0JBQ2IxVSxLQUFLLEVBQUVrWixVQUFVLENBQUMvWixJQUFJLENBQUMsQ0FBQ2EsS0FBSztnQkFDN0JHLFdBQVcsRUFBRStZLFVBQVUsQ0FBQy9aLElBQUksQ0FBQyxDQUFDZ0IsV0FBVztnQkFDekNoQixJQUFJO2dCQUNKME0sSUFBSSxFQUFFMU0sSUFBSTtnQkFDVkMsS0FBSyxFQUFFK0UsTUFBTSxDQUFDdUosS0FBSyxDQUFDLEdBQUd2TyxJQUFJLENBQUMsSUFBSTtlQUNoQztjQUNEOFosYUFBYSxDQUFDOVosSUFBSSxDQUFDLEdBQUcsRUFBRTtjQUV4QixPQUFPeUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMyWixLQUFLO2dCQUFBLEdBQUszRSxLQUFLO2dCQUFFelYsUUFBUSxFQUFFQSxRQUFRO2dCQUFFNkssR0FBRyxFQUFFLEdBQUczSyxJQUFJLElBQUlpYSxDQUFDLEVBQUU7Z0JBQUVyWixPQUFPLEVBQUMsVUFBVTtnQkFBQ1QsTUFBTSxFQUFFQTtjQUFNLEVBQUk7WUFDeEcsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDNkUsTUFBTSxDQUFDeUIsTUFBTSxFQUFFekIsTUFBTSxDQUFDeUYsSUFBSSxDQUFDcVAsYUFBYSxDQUFDO1lBQzlDdk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFeE0sSUFBSSxDQUFDO1lBQ3JCLE9BQ0N5QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUNFbEIsS0FBSyxDQUFDTSxLQUFLLENBQUNLLElBQUksQ0FBQyxDQUFDYSxLQUFLLEUsS0FBRzBOLEtBQUssR0FBRyxDQUFDLENBQ2hDLEVBQ0w5TSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzJZLGFBQUEsQ0FBQWlCLGlCQUFpQjtjQUFDMVosU0FBUyxFQUFDLFFBQVE7Y0FBQ3FDLE1BQU0sRUFBQyxRQUFRO2NBQUN0QixJQUFJLEVBQUMsUUFBUTtjQUFDK00sS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDNUUsRUFDUnlMLE1BQU0sQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFFQSxJQUFBdlksTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFxYSxhQUFBLEdBQUFyYSxPQUFBO1VBU0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQXViLE1BQUEsR0FBQXZiLE9BQUE7VUFFTSxTQUFVbWEsZ0JBQWdCQSxDQUFDO1lBQUVoWixJQUFJO1lBQUUwTTtVQUFJLENBQUU7WUFDOUMsTUFBTTtjQUNMcE4sUUFBUSxFQUFFO2dCQUFFSztjQUFLLENBQUU7Y0FDbkJMLFFBQVE7Y0FDUkQsS0FBSztjQUNMbUYsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixJQUFJLENBQUNtTixJQUFJLENBQUMyTixjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7Y0FDbkM5TixPQUFPLENBQUMrTixJQUFJLENBQUMsd0NBQXdDdGEsSUFBSSxFQUFFLENBQUM7Y0FDNUQsT0FBTyxJQUFJOztZQUdaLE1BQU1nRixNQUFNLEdBQUdyRixLQUFLLENBQUNLLElBQUksQ0FBQyxHQUFHTCxLQUFLLENBQUNLLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDN0MsTUFBTThaLGFBQWEsR0FBRyxFQUFFO1lBQ3hCLE1BQU1DLFVBQVUsR0FBRzFhLEtBQUssQ0FBQ00sS0FBSyxDQUFDSyxJQUFJLENBQUM7WUFFcEMsTUFBTUYsUUFBUSxHQUFHeUQsS0FBSyxJQUFHO2NBQ3hCLE1BQU07Z0JBQUV0RDtjQUFLLENBQUUsR0FBR3NELEtBQUssQ0FBQ3hELGFBQWE7Y0FDckNKLEtBQUssQ0FBQ08sR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7Y0FDNUIsSUFBSXNELEtBQUssQ0FBQ3ZELElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCVixRQUFRLENBQUNjLElBQUksRUFBRTs7WUFFakIsQ0FBQztZQUVELE1BQU1ELE1BQU0sR0FBR29ELEtBQUssSUFBSWpFLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFO1lBQ3ZDO1lBRUEsT0FDQ3FCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBOEIsR0FDNUNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzJZLGFBQUEsQ0FBQXFCLHFCQUFxQjtjQUNyQkMsUUFBUTtjQUNSOUIsTUFBTSxFQUFFL1AsTUFBTSxDQUFDQyxJQUFJLENBQUM4RCxJQUFJLENBQUM7Y0FDekJ6TSxLQUFLLEVBQUUrRSxNQUFNO2NBQ2JoRixJQUFJLEVBQUVBLElBQUk7Y0FDVkcsTUFBTSxFQUFFQSxNQUFNO2NBQ2RMLFFBQVEsRUFBRUE7WUFBUSxHQUVsQjJCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBZ0IsR0FDbENnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS3daLFVBQVUsQ0FBQ2xaLEtBQUssQ0FBTSxFQUMzQlksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMyWSxhQUFBLENBQUF1QixhQUFhO2NBQUM3WixPQUFPLEVBQUMsTUFBTTtjQUFDa0MsTUFBTSxFQUFDO1lBQUssR0FDeENtQyxXQUFXLENBQUNqQixPQUFPLENBQUNzSCxHQUFHLENBQ1QsQ0FDWCxDQUNHLEVBQ1Y3SixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMlksYUFBQSxDQUFBd0IsWUFBWSxRQUNaalosTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM2WixNQUFBLENBQUFULGtCQUFrQjtjQUFDM1osSUFBSSxFQUFFQSxJQUFJO2NBQUUwTSxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNoQyxDQUNWLENBQ2lCLENBQ25CO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBLElBQUFqTCxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTBELFdBQUEsR0FBQTFELE9BQUE7VUFFTSxTQUFVb2EsZ0JBQWdCQSxDQUFDO1lBQUU5QixVQUFVO1lBQUU5UyxRQUFRO1lBQUU0QjtVQUFNLENBQUU7WUFDaEUsTUFBTTtjQUNMekIsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixPQUNDa0MsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFzQyxHQUN2RGdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDaEQsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lDLFFBQVE7Y0FBQ2dCLE9BQU8sRUFBRVEsUUFBUTtjQUFFNUIsUUFBUSxFQUFFMFU7WUFBVSxHQUN4RWxTLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ0csTUFBTSxDQUNuQixFQUNUMUMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsU0FBUztjQUFDaUQsT0FBTyxFQUFFb0MsTUFBTTtjQUFFeEQsUUFBUSxFQUFFMFU7WUFBVSxHQUM3RGxTLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQzVELElBQUksQ0FDakIsQ0FDRDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBcUIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFnYSxRQUFBLEdBQUFoYSxPQUFBO1VBT0EsTUFBTXNhLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFcmEsS0FBQSxDQUFBOFMsS0FBSztZQUNaOUYsUUFBUSxFQUFFaE4sS0FBQSxDQUFBNEIsUUFBUTtZQUNsQjBZLEtBQUssRUFBRXRhLEtBQUEsQ0FBQXVhLEtBQUs7WUFDWkMsUUFBUSxFQUFFeGEsS0FBQSxDQUFBeWEsUUFBUTtZQUNsQkMsTUFBTSxFQUFFMWEsS0FBQSxDQUFBMmEsTUFBTTtZQUNkaUIsS0FBSyxFQUFFOUIsUUFBQSxDQUFBRztXQUNQO1VBRUssU0FBVS9YLFNBQVNBLENBQUM7WUFBRUMsSUFBSSxHQUFHO1VBQU8sQ0FBRTtZQUMzQyxNQUFNO2NBQUU3QixLQUFLO2NBQUVDLFFBQVE7Y0FBRWtGLEtBQUs7Y0FBRUM7WUFBWSxDQUFFLEdBQUcsSUFBQXhGLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDckUsTUFBTTtjQUFFSTtZQUFLLENBQUUsR0FBR0wsUUFBUTtZQUMxQixNQUFNbVosU0FBUyxHQUFHOVksS0FBSyxDQUFDOFksU0FBUyxDQUFDdlgsSUFBSSxDQUFDO1lBQ3ZDLE1BQU13WCxNQUFNLEdBQUcvUCxNQUFNLENBQUNDLElBQUksQ0FBQzZQLFNBQVMsQ0FBQztZQUNyQyxNQUFNM1ksUUFBUSxHQUFHeUQsS0FBSyxJQUFHO2NBQ3hCLE1BQU07Z0JBQUV2RCxJQUFJO2dCQUFFQztjQUFLLENBQUUsR0FBR3NELEtBQUssQ0FBQ3hELGFBQWE7Y0FDM0NULFFBQVEsQ0FBQ0ssS0FBSyxDQUFDTyxHQUFHLENBQUM7Z0JBQUUsQ0FBQ0YsSUFBSSxHQUFHQztjQUFLLENBQUUsQ0FBQztZQUN0QyxDQUFDO1lBRUQsTUFBTTJhLEtBQUssR0FBR2xDLE1BQU0sQ0FBQzlKLE1BQU0sQ0FBQzVPLElBQUksSUFBSUEsSUFBSSxLQUFLLGFBQWEsQ0FBQztZQUMzRCxNQUFNZ2EsTUFBTSxHQUFHWSxLQUFLLENBQUNoSixHQUFHLENBQUMsQ0FBQzVSLElBQUksRUFBRXVPLEtBQUssS0FBSTtjQUN4QyxJQUFJLENBQUNsUCxLQUFLLENBQUNNLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCdU0sT0FBTyxDQUFDK04sSUFBSSxDQUFDLGdEQUFnRHRhLElBQUksRUFBRSxDQUFDOztjQUdyRSxNQUFNO2dCQUFFYSxLQUFLO2dCQUFFRztjQUFXLENBQUUsR0FBRzNCLEtBQUssQ0FBQ00sS0FBSyxDQUFDSyxJQUFJLENBQUM7Y0FDaEQsTUFBTXVWLEtBQUssR0FBRztnQkFBRTFVLEtBQUs7Z0JBQUVHLFdBQVc7Z0JBQUVmLEtBQUssRUFBRU4sS0FBSyxDQUFDSyxJQUFJLENBQUMsSUFBSTtjQUFFLENBQUU7Y0FDOUQsSUFBSSxPQUFPeVksU0FBUyxDQUFDelksSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJeVksU0FBUyxDQUFDelksSUFBSSxDQUFDLENBQUNrQixJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUM1RSxNQUFNZ1osS0FBSyxHQUFHZixVQUFVLENBQUNWLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQyxDQUFDa0IsSUFBSSxDQUFDO2dCQUM5QyxPQUNDTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzJaLEtBQUs7a0JBQ0x2UCxHQUFHLEVBQUUsR0FBRzNLLElBQUksSUFBSXVPLEtBQUssRUFBRTtrQkFDdkIzTixPQUFPLEVBQUMsVUFBVTtrQkFDbEJaLElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUNOdVYsS0FBSztrQkFDVHpWLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJLLE1BQU0sRUFBRXNFO2dCQUFZLEVBQ25COztjQUlKLElBQUksT0FBT2dVLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDeEMsTUFBTWthLEtBQUssR0FBR2YsVUFBVSxDQUFDVixTQUFTLENBQUN6WSxJQUFJLENBQUMsQ0FBQztnQkFDekMsT0FDQ3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMlosS0FBSztrQkFDTHZQLEdBQUcsRUFBRSxHQUFHM0ssSUFBSSxJQUFJdU8sS0FBSyxFQUFFO2tCQUN2QnZPLElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUNOdVYsS0FBSztrQkFDVHpWLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJjLE9BQU8sRUFBQyxVQUFVO2tCQUNsQlQsTUFBTSxFQUFFc0U7Z0JBQVksRUFDbkI7O2NBSUosTUFBTXlWLEtBQUssR0FBR2YsVUFBVSxDQUFDVixTQUFTLENBQUN6WSxJQUFJLENBQUMsQ0FBQ2tCLElBQUksQ0FBQztjQUU5QyxPQUNDTyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzJaLEtBQUs7Z0JBQ0xwYSxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCYyxPQUFPLEVBQUMsVUFBVTtnQkFDbEIrSixHQUFHLEVBQUUsR0FBRzNLLElBQUksSUFBSXVPLEtBQUssRUFBRTtnQkFDdkJ2TyxJQUFJLEVBQUVBLElBQUk7Z0JBQ1YwTSxJQUFJLEVBQUUrTCxTQUFTLENBQUN6WSxJQUFJLENBQUM7Z0JBQ3JCRyxNQUFNLEVBQUVzRSxZQUFZO2dCQUFBLEdBQ2hCOFE7Y0FBSyxFQUNSO1lBRUosQ0FBQyxDQUFDO1lBRUYsT0FBTzlULE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFBa0IsTUFBQSxDQUFBRyxPQUFBLENBQUFwQixRQUFBLFFBQUd3WixNQUFNLENBQUk7VUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakZBLElBQUFqYixLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFnYSxRQUFBLEdBQUFoYSxPQUFBO1VBRUEsTUFBTXNhLFVBQVUsR0FBRztZQUNsQkMsS0FBSyxFQUFFcmEsS0FBQSxDQUFBOFMsS0FBSztZQUNaOUYsUUFBUSxFQUFFaE4sS0FBQSxDQUFBNEIsUUFBUTtZQUNsQjBZLEtBQUssRUFBRXRhLEtBQUEsQ0FBQXVhLEtBQUs7WUFDWkMsUUFBUSxFQUFFeGEsS0FBQSxDQUFBeWEsUUFBUTtZQUNsQkMsTUFBTSxFQUFFMWEsS0FBQSxDQUFBMmEsTUFBTTtZQUNkaUIsS0FBSyxFQUFFOUIsUUFBQSxDQUFBRztXQUNQO1VBRUssU0FBVXJOLGtCQUFrQkEsQ0FBQyxFQUFFO1lBQ3BDLE1BQU07Y0FBRXRNLEtBQUs7Y0FBRUMsUUFBUTtjQUFFa0Y7WUFBSyxDQUFFLEdBQUcsSUFBQXZGLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDdkQsTUFBTTtjQUFFSTtZQUFLLENBQUUsR0FBR0wsUUFBUTtZQUMxQixNQUFNb1osTUFBTSxHQUFHL1AsTUFBTSxDQUFDQyxJQUFJLENBQUNqSixLQUFLLENBQUM4WSxTQUFTLENBQUM7WUFDM0MsTUFBTTNZLFFBQVEsR0FBR3lELEtBQUssSUFBRztjQUN4QixNQUFNO2dCQUFFdkQsSUFBSTtnQkFBRUM7Y0FBSyxDQUFFLEdBQUdzRCxLQUFLLENBQUN4RCxhQUFhO2NBQzNDVCxRQUFRLENBQUNLLEtBQUssQ0FBQ08sR0FBRyxDQUFDO2dCQUFFLENBQUNGLElBQUksR0FBR0M7Y0FBSyxDQUFFLENBQUM7WUFDdEMsQ0FBQztZQUVELE1BQU0rWixNQUFNLEdBQUd0QixNQUFNLENBQUM5RyxHQUFHLENBQUMsQ0FBQzVSLElBQUksRUFBRXVPLEtBQUssS0FBSTtjQUN6QyxJQUFJLENBQUNsUCxLQUFLLENBQUNNLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCdU0sT0FBTyxDQUFDK04sSUFBSSxDQUFDLGdEQUFnRHRhLElBQUksRUFBRSxDQUFDOztjQUVyRSxNQUFNO2dCQUFFYSxLQUFLO2dCQUFFRztjQUFXLENBQUUsR0FBRzNCLEtBQUssQ0FBQ00sS0FBSyxDQUFDSyxJQUFJLENBQUM7Y0FDaEQsTUFBTXVWLEtBQUssR0FBRztnQkFBRTFVLEtBQUs7Z0JBQUVHLFdBQVc7Z0JBQUVmLEtBQUssRUFBRU4sS0FBSyxDQUFDSyxJQUFJLENBQUMsSUFBSTtjQUFFLENBQUU7Y0FDOUQsSUFBSSxPQUFPTCxLQUFLLENBQUM4WSxTQUFTLENBQUN6WSxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUlMLEtBQUssQ0FBQzhZLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQyxDQUFDa0IsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDeEYsTUFBTWdaLEtBQUssR0FBR2YsVUFBVSxDQUFDeFosS0FBSyxDQUFDOFksU0FBUyxDQUFDelksSUFBSSxDQUFDLENBQUNrQixJQUFJLENBQUM7Z0JBQ3BELE9BQU9PLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDMlosS0FBSztrQkFBQ3ZQLEdBQUcsRUFBRSxHQUFHM0ssSUFBSSxJQUFJdU8sS0FBSyxFQUFFO2tCQUFFdk8sSUFBSSxFQUFFQSxJQUFJO2tCQUFBLEdBQU11VixLQUFLO2tCQUFFelYsUUFBUSxFQUFFQTtnQkFBUSxFQUFJOztjQUdyRixJQUFJLE9BQU9ILEtBQUssQ0FBQzhZLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDOUMsTUFBTWthLEtBQUssR0FBR2YsVUFBVSxDQUFDeFosS0FBSyxDQUFDOFksU0FBUyxDQUFDelksSUFBSSxDQUFDLENBQUM7Z0JBQy9DLE9BQU95QixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzJaLEtBQUs7a0JBQUN2UCxHQUFHLEVBQUUsR0FBRzNLLElBQUksSUFBSXVPLEtBQUssRUFBRTtrQkFBRXZPLElBQUksRUFBRUEsSUFBSTtrQkFBQSxHQUFNdVYsS0FBSztrQkFBRXpWLFFBQVEsRUFBRUE7Z0JBQVEsRUFBSTs7Y0FHckYsTUFBTW9hLEtBQUssR0FBR2YsVUFBVSxDQUFDeFosS0FBSyxDQUFDOFksU0FBUyxDQUFDelksSUFBSSxDQUFDLENBQUNrQixJQUFJLENBQUM7Y0FFcEQsT0FDQ08sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMyWixLQUFLO2dCQUFDdFosT0FBTyxFQUFDLFVBQVU7Z0JBQUMrSixHQUFHLEVBQUUsR0FBRzNLLElBQUksSUFBSXVPLEtBQUssRUFBRTtnQkFBRXZPLElBQUksRUFBRUEsSUFBSTtnQkFBRTBNLElBQUksRUFBRS9NLEtBQUssQ0FBQzhZLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQztnQkFBQSxHQUFNdVY7Y0FBSyxFQUFJO1lBRTNHLENBQUMsQ0FBQztZQUVGLE9BQ0M5VCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLENBQ3BCLEVBQ1RJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FBTXlaLE1BQU0sQ0FBTyxDQUNkLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REEsSUFBQXZZLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFQTs7Ozs7VUFLTSxTQUFVa2EsT0FBT0EsQ0FBQ2xaLFVBQVU7WUFDakMsTUFBTSxDQUFDc1gsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzNWLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNO2NBQ0xMLEtBQUs7Y0FDTEMsUUFBUTtjQUNSa0YsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNMEcsTUFBTSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN6QixJQUFJO2dCQUNIbVIsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDbkIsTUFBTTlYLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFO2dCQUNyQmdYLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCdlgsVUFBVSxDQUFDLE9BQU8sQ0FBQztlQUNuQixDQUFDLE9BQU95TSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1csS0FBSyxDQUFDWixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxNQUFNdU8sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Y0FDekIsTUFBTTdDLFNBQVMsR0FBRzFZLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDcVksU0FBUztjQUMxQzFZLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDcVYsTUFBTSxFQUFFO2NBQ3ZCMVYsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUU4WDtjQUFTLENBQUUsQ0FBQztjQUUzQm5ZLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQU87Y0FBRXNYLFVBQVU7Y0FBRUMsYUFBYTtjQUFFcFQsT0FBTyxFQUFFO2dCQUFFaUMsTUFBTTtnQkFBRTVCLFFBQVEsRUFBRXdXO2NBQVk7WUFBRSxDQUFFO1VBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBcFosTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFpYyxhQUFBLEdBQUFqYyxPQUFBO1VBQ0EsSUFBQWtjLFNBQUEsR0FBQWxjLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUErVyxZQUFBLEdBQUEvVyxPQUFBO1VBQ00sU0FBVWdELEtBQUtBLENBQUE7WUFDcEIsTUFBTSxDQUFDb1UsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHelUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU07Y0FDTEosUUFBUTtjQUNSQSxRQUFRLEVBQUU7Z0JBQUVLO2NBQUssQ0FBRTtjQUNuQk4sS0FBSztjQUNMbUYsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixNQUFNOEosV0FBVyxHQUFHQSxDQUFBLEtBQU02TSxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDOUQsTUFBTXZKLElBQUksR0FBRy9NLEtBQUssQ0FBQ3FiLGFBQWEsRUFBRTtZQUNsQyxNQUFNdEMsTUFBTSxHQUFHL1AsTUFBTSxDQUFDQyxJQUFJLENBQUNqSixLQUFLLENBQUM4WSxTQUFTLENBQUM7WUFDM0MsTUFBTWxELEtBQUssR0FBRztjQUFFMVIsT0FBTyxFQUFFd0YsV0FBVztjQUFFNUcsUUFBUSxFQUFFbkQsUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUs7WUFBRSxDQUFFO1lBRXhFLE1BQU1vYSxNQUFNLEdBQUd0QixNQUFNLENBQUM5RyxHQUFHLENBQUMsQ0FBQzVSLElBQUksRUFBRXVPLEtBQUssS0FBSTtjQUN6QyxJQUFJLE9BQU81TyxLQUFLLENBQUM4WSxTQUFTLENBQUN6WSxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUlMLEtBQUssQ0FBQzhZLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQyxDQUFDa0IsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDeEYsT0FBT08sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3YSxTQUFBLENBQUE5QyxnQkFBZ0I7a0JBQUN0TixHQUFHLEVBQUUsR0FBRzNLLElBQUksSUFBSXVPLEtBQUssRUFBRTtrQkFBRXZPLElBQUksRUFBRUE7Z0JBQUksRUFBSTs7Y0FHakUsT0FBT3lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdWEsYUFBQSxDQUFBeEMscUJBQXFCO2dCQUFDM04sR0FBRyxFQUFFLEdBQUczSyxJQUFJLElBQUl1TyxLQUFLLEVBQUU7Z0JBQUV2TyxJQUFJLEVBQUVBLElBQUk7Z0JBQUUwTSxJQUFJLEVBQUVBO2NBQUksRUFBSTtZQUNsRixDQUFDLENBQUM7WUFFRixPQUNDakwsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBMEIsR0FDM0NnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ00sS0FBSyxDQUFDMEIsS0FBSyxDQUFNLEVBQzVCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdDLEdBQzlDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUFxQixNQUFNO2NBQUNoRCxPQUFPLEVBQUMsTUFBTTtjQUFBLEdBQUsyVSxLQUFLO2NBQUUvVCxJQUFJLEVBQUM7WUFBUSxHQUM3Q3lELFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3NDLE1BQU0sQ0FDbkIsQ0FDSixDQUNFLEVBQ1IwVCxNQUFNLEVBQ1B2WSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3FWLFlBQUEsQ0FBQTVJLGtCQUFrQjtjQUFDNUksSUFBSSxFQUFFNlIsZUFBZTtjQUFFbFIsT0FBTyxFQUFFc0U7WUFBVyxFQUFJLENBQ2pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF6SyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFFTSxTQUFVb2MsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUVqVyxNQUFNO2NBQUUzRixLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHVCxLQUFLLENBQUNVLFFBQVEsQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNDLEtBQUssRUFBRSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEYsTUFBTUUsUUFBUSxHQUFHLE1BQUFBLENBQU87Y0FBRUMsYUFBYSxFQUFFO2dCQUFFQyxJQUFJO2dCQUFFQztjQUFLO1lBQUUsQ0FBRSxLQUFJO2NBQzdEWCxRQUFRLENBQUNZLEdBQUcsQ0FBQztnQkFBRSxDQUFDRixJQUFJLEdBQUdDO2NBQUssQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFDRCxNQUFNRSxNQUFNLEdBQUdiLFFBQVEsQ0FBQ2MsSUFBSTtZQUM1QixNQUFNUCxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFFeEMsTUFBTWEsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckIsTUFBTWIsSUFBSSxHQUFHRixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU87Y0FFdkRILE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELElBQUFWLE1BQUEsQ0FBQXdCLFNBQVMsRUFBQyxDQUFDaEIsUUFBUSxDQUFDLEVBQUVlLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFBdkIsTUFBQSxDQUFBd0IsU0FBUyxFQUFDLENBQUNoQixRQUFRLENBQUNLLEtBQUssQ0FBQyxFQUFFVSxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBQ3RELE1BQU00VSxTQUFTLEdBQUd6VixJQUFJLEtBQUssT0FBTyxJQUFJRixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHSixJQUFJO1lBQzdFLE9BQ0NSLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQXZCLEtBQUEsQ0FBQXdCLFFBQUEsUUFDQ3hCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBNkIsR0FDL0N6QixLQUFBLENBQUF1QixhQUFBLENBQUNyQixPQUFBLENBQUF3QixjQUFjLE9BQUcsRUFDbEIxQixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUlgsSUFBSSxFQUFDLGFBQWE7Y0FDbEJhLEtBQUssRUFBRXhCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDRixLQUFLO2NBQ3pDZixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJjLE9BQU8sRUFBQyxVQUFVO2NBQ2xCVCxNQUFNLEVBQUVBLE1BQU07Y0FDZGEsV0FBVyxFQUFFM0IsS0FBSyxDQUFDeUIsVUFBVSxDQUFDQyxXQUFXLENBQUNDLFdBQVc7Y0FDckRmLEtBQUssRUFBRVgsUUFBUSxDQUFDeUI7WUFBVyxFQUMxQixFQUNGL0IsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUztjQUFDQyxJQUFJLEVBQUM7WUFBUyxFQUFHLENBQ3ZCLENBQ0csQ0FDTCxFQUNObEMsS0FBQSxDQUFBdUIsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMkIsR0FDN0N6QixLQUFBLENBQUF1QixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QnpCLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQTBCLEdBQzNDekIsS0FBQSxDQUFBdUIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ6QixLQUFBLENBQUF1QixhQUFBLGFBQUtsQixLQUFLLENBQUN5QixVQUFVLENBQUNLLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDaERyQyxLQUFBLENBQUF1QixhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFVLEdBQ3hCcEIsS0FBSyxDQUFDeUIsVUFBVSxDQUFDSyxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsUUFBUSxFQUN6Q3RDLEtBQUEsQ0FBQXVCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ2QsU0FBUyxFQUFDLGNBQWM7Y0FBQ2UsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUN4QyxDQUNGLENBQ0UsRUFDVHhDLEtBQUEsQ0FBQXVCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCekIsS0FBQSxDQUFBdUIsYUFBQSxDQUFDcEIsTUFBQSxDQUFBOEIsU0FBUyxPQUFHLENBQ1IsQ0FDRCxDQUNHLENBU1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RUEsSUFBQTZGLEdBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBbUssV0FBQSxHQUFBbkssT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXFjLFFBQUEsR0FBQXJjLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUVNLFNBQVVzYyxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMN2IsUUFBUTtjQUNSa0YsS0FBSztjQUNMbkYsS0FBSztjQUNMMkYsTUFBTTtjQUNOUixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFoRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ3FNLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3BLLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUN1SixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd6SCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTBiLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUlwVyxNQUFNLENBQUNrRixPQUFPLEVBQUU7Z0JBQ25CMkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRHJILEtBQUssQ0FBQzZXLFlBQVksQ0FBQ2hQLFNBQVMsQ0FBQztZQUM5QixDQUFDO1lBRUQsTUFBTWlQLFNBQVMsR0FBRzNiLEtBQUssSUFBSUwsUUFBUSxDQUFDaUksUUFBUSxDQUFDNUgsS0FBSyxDQUFDO1lBRW5ELE1BQU04RCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0Qm9JLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnJILEtBQUssQ0FBQzZXLFlBQVksQ0FBQ2hQLFNBQVMsQ0FBQztjQUM3QjZPLFFBQUEsQ0FBQUssT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDZixDQUFDO1lBQ0QsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTXZTLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUNwRSxNQUFNNkMsYUFBYSxHQUFHQSxDQUFBLEtBQU1ELGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDcEssTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUEsUUFDQ2lCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMzQixNQUFBLENBQUE4TSxVQUFVO2NBQ1Y3SCxPQUFPLEVBQUV1WCxNQUFNO2NBQ2YvWixLQUFLLEVBQUU0RCxXQUFXLENBQUNqQixPQUFPLENBQUN3WCxJQUFJO2NBQy9CaGEsSUFBSSxFQUFDLFdBQVc7Y0FDaEJmLFNBQVMsRUFBQyxRQUFRO2NBQ2xCRyxPQUFPLEVBQUM7WUFBUyxFQUNoQixFQUNGYSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQVEsUUFBUTtjQUFDMUcsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lELE9BQU8sRUFBRTRYO1lBQWlCLEdBQ3BEeFcsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUNuQixDQUNOLENBQ0QsRUFDTHFFLGVBQWUsSUFDZm5LLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDK0IsTUFBQSxDQUFBd0IsWUFBWTtjQUFDTCxTQUFTLEVBQUVBLFNBQVM7Y0FBRVksUUFBUSxFQUFFeUg7WUFBYSxHQUMxRHJLLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxjQUFNMEUsV0FBVyxDQUFDakIsT0FBTyxDQUFDRyxNQUFNLENBQU8sQ0FFeEMsRUFDQThFLGVBQWUsSUFDZnhILE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeUksV0FBQSxDQUFBMFMsdUJBQXVCO2NBQ3ZCdFgsSUFBSSxFQUFFNkUsZUFBZTtjQUNyQk0sUUFBUTtjQUNSeU8sU0FBUyxFQUFFMVksUUFBUSxDQUFDMFksU0FBUztjQUM3QmpULE9BQU8sRUFBRTBXLGlCQUFpQjtjQUMxQnRVLFVBQVUsRUFBRW1VO1lBQVMsRUFFdEIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRUEsSUFBQTdaLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUE4YyxPQUFBLEdBQUE5YyxPQUFBO1VBQ0EsSUFBQStjLFdBQUEsR0FBQS9jLE9BQUE7VUFDTztVQUFVLFNBQVV5SSxRQUFRQSxDQUFDO1lBQUV2RSxRQUFRO1lBQUVjLE9BQU87WUFBRTZSLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBR3hFO1VBQUssQ0FBRTtZQUNqRixNQUFNMkssV0FBVyxHQUFHbkcsTUFBTSxHQUFHLE1BQU1rRyxXQUFBLENBQUFFLFlBQVksQ0FBQ0MsYUFBYSxDQUFDbFksT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ3BDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFBLEdBQUtzTixLQUFLO2NBQUUxUCxJQUFJLEVBQUU1QyxNQUFBLENBQUFvZCxLQUFLLENBQUNDLE9BQU87Y0FBRXBZLE9BQU8sRUFBRWdZO1lBQVcsR0FDMUQ5WSxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVW1aLFlBQVlBLENBQUM7WUFBRW5aLFFBQVE7WUFBRWMsT0FBTztZQUFFNlIsTUFBTSxHQUFHLElBQUk7WUFBRSxHQUFHeEU7VUFBSyxDQUFFO1lBQ3JGLE1BQU0ySyxXQUFXLEdBQUduRyxNQUFNLEdBQUcsTUFBTWtHLFdBQUEsQ0FBQUUsWUFBWSxDQUFDQyxhQUFhLENBQUNsWSxPQUFPLENBQUMsR0FBR0EsT0FBTztZQUNoRixPQUNDcEMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNvYixPQUFBLENBQUFqUSxVQUFVO2NBQUEsR0FBS3dGLEtBQUs7Y0FBRTFQLElBQUksRUFBRTVDLE1BQUEsQ0FBQW9kLEtBQUssQ0FBQ0MsT0FBTztjQUFFcFksT0FBTyxFQUFFZ1k7WUFBVyxHQUM5RDlZLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBVCxNQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTRDLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVc2Qsa0JBQWtCQSxDQUFDO1lBQUUvWCxJQUFJO1lBQUVXO1VBQU8sQ0FBRTtZQUNuRCxNQUFNO2NBQ0xQLEtBQUs7Y0FDTG5GLEtBQUs7Y0FDTCtjLFNBQVM7Y0FDVDVYLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsSUFBSSxDQUFDNkUsSUFBSSxFQUFFLE9BQU8sS0FBSztZQUN2QixNQUFNWCxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QjJZLFNBQVMsRUFBRTtjQUNYNVgsS0FBSyxDQUFDNlcsWUFBWSxDQUFDaFAsU0FBUyxDQUFDO2NBQzdCdEgsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUNELE9BQ0N0RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXdCLFlBQVk7Y0FDWk0sSUFBSTtjQUNKL0MsS0FBSyxFQUFFaEMsS0FBSyxDQUFDK0QsS0FBSyxDQUFDZSxNQUFNLENBQUM5QyxLQUFLO2NBQy9CZ0csSUFBSSxFQUFFaEksS0FBSyxDQUFDK0QsS0FBSyxDQUFDZSxNQUFNLENBQUNwRCxXQUFXO2NBQ3BDZ0UsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCVixRQUFRLEVBQUVVLE9BQU87Y0FDakJoQixVQUFVLEVBQUU7Z0JBQUVsRCxLQUFLLEVBQUVvRSxXQUFXLENBQUNqQixPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUNsREMsU0FBUyxFQUFFO2dCQUFFckQsS0FBSyxFQUFFb0UsV0FBVyxDQUFDakIsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDaERWLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2dCQUNmQSxTQUFTLEVBQUU7Y0FDWjtZQUFDLEVBQ0E7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQW5CLE1BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVtTyxrQkFBa0JBLENBQUM7WUFBRTVJLElBQUk7WUFBRVc7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQ1MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNO2NBQ0xMLEtBQUssRUFBRTtnQkFBRXlCLFVBQVUsRUFBRXpCO2NBQUssQ0FBRTtjQUM1QkMsUUFBUTtjQUNSa0YsS0FBSyxFQUFFO2dCQUNOUyxXQUFXLEVBQUU7a0JBQUVqQjtnQkFBTztjQUFFO1lBQ3hCLENBQ0QsR0FBRyxJQUFBL0UsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUN4QixJQUFJLENBQUM2RSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1YLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSGdDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCVixPQUFPLEVBQUU7Z0JBQ1R6RixRQUFRLENBQUNLLEtBQUssQ0FBQ29HLEtBQUssRUFBRTtnQkFDdEIsTUFBTXpHLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFO2VBQ3JCLENBQUMsT0FBT2tNLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDVyxLQUFLLENBQUNaLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUN0csV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE9BQ0NoRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMrQixNQUFBLENBQUF3QixZQUFZO2NBQ1pNLElBQUk7Y0FDSlcsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCdEIsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCTSxVQUFVLEVBQUU7Z0JBQUVsRCxLQUFLLEVBQUVtRCxPQUFPLENBQUNDO2NBQU8sQ0FBRTtjQUN0Q0MsU0FBUyxFQUFFO2dCQUFFckQsS0FBSyxFQUFFbUQsT0FBTyxDQUFDRztjQUFNLENBQUU7Y0FDcENFLFFBQVEsRUFBRVU7WUFBTyxHQUVqQnRELE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDOE4sV0FBVyxDQUFDOUwsS0FBSyxDQUFNLEVBQ2xDSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsWUFBSWxCLEtBQUssQ0FBQzhOLFdBQVcsQ0FBQ3BNLFdBQVcsQ0FBSyxDQUN4QixDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFVLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFpSSxHQUFBLEdBQUFqSSxPQUFBO1VBQ0EsSUFBQXdkLFNBQUEsR0FBQXhkLE9BQUE7VUFFQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVeWQsd0JBQXdCQSxDQUFDO1lBQUVsWSxJQUFJO1lBQUVsRCxJQUFJO1lBQUU2RDtVQUFPLENBQUU7WUFDL0QsTUFBTTtjQUNMMUYsS0FBSztjQUNMQyxRQUFRO2NBQ1J5VyxRQUFRO2NBQ1J2UixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFoRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ2lHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoRSxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDc0YsTUFBTSxFQUFFc00sU0FBUyxDQUFDLEdBQUc3UCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQztjQUMxQzZjLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQnRiO2FBQ0EsQ0FBQztZQUVGLElBQUksQ0FBQ2tELElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTXFZLE1BQU0sR0FBRztjQUNkM2MsUUFBUSxFQUFFeUQsS0FBSyxJQUFHO2dCQUNqQitOLFNBQVMsQ0FBQztrQkFDVCxHQUFHdE0sTUFBTTtrQkFDVCxDQUFDekIsS0FBSyxDQUFDeEQsYUFBYSxDQUFDQyxJQUFJLEdBQUd1RCxLQUFLLENBQUN4RCxhQUFhLENBQUNFO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNENEQsT0FBTyxFQUFFLE1BQU1OLEtBQUssSUFBRztnQkFDdEJrQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNaUgsSUFBSSxHQUFHLE1BQU1wTixRQUFRLENBQUNpSSxRQUFRLENBQUNyRyxJQUFJLEVBQUU4RCxNQUFNLENBQUN1WCxZQUFZLENBQUM7Z0JBQy9EeEcsUUFBUSxDQUFDO2tCQUFFLEdBQUdySixJQUFJO2tCQUFFeEMsT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQztnQkFDckNuRixPQUFPLEVBQUU7Z0JBQ1Q2SCxVQUFVLENBQUMsTUFBTW5ILFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDM0M7YUFDQTtZQUVELE9BQ0NoRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXVJLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRTFHLElBQUk7Y0FBQzNELFNBQVMsRUFBQyxjQUFjO2NBQUNzRSxPQUFPLEVBQUVBO1lBQU8sR0FDMUV0RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTJILElBQUksUUFDSmpGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxpQkFDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDdFUsS0FBSyxDQUFNLEVBQzdCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsZUFBT2xCLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQzVVLFdBQVcsQ0FBUSxDQUMvQixFQUNUVSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUkUsS0FBSyxFQUFFeEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDNUosUUFBUSxDQUFDbEwsS0FBSztjQUNsQ2IsSUFBSSxFQUFDLGNBQWM7Y0FDbkJDLEtBQUssRUFBRStFLE1BQU0sQ0FBQ3VYLFlBQVk7Y0FDMUJ6YyxRQUFRLEVBQUUyYyxNQUFNLENBQUMzYyxRQUFRO2NBQ3pCa0IsV0FBVyxFQUFFM0IsS0FBSyxDQUFDc1csTUFBTSxDQUFDNUosUUFBUSxDQUFDL0s7WUFBVyxFQUM3QyxDQUNJLEVBRVBTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaERnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhiLFNBQUEsQ0FBQS9VLFFBQVE7Y0FBQzFHLE9BQU8sRUFBQyxTQUFTO2NBQUNpRCxPQUFPLEVBQUU0WSxNQUFNLENBQUM1WTtZQUFPLEdBQ2pEb0IsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUNuQixDQUNILEVBQ1Q5RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQTRWLGdCQUFnQjtjQUFDbFgsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQXNCLEdBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFtSyxXQUFBLEdBQUFuSyxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRUEsSUFBQXFjLFFBQUEsR0FBQXJjLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNNLFNBQVVzYyxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMN2IsUUFBUTtjQUNSa0YsS0FBSztjQUNMbkYsS0FBSztjQUNMMkYsTUFBTTtjQUNOUixLQUFLLEVBQUU7Z0JBQUVTO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFoRyxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ3hCLE1BQU0sQ0FBQ3FNLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3BLLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUN1SixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd6SCxNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTBiLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CLElBQUlwVyxNQUFNLENBQUNrRixPQUFPLEVBQUU7Z0JBQ25CMkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FHRHJILEtBQUssQ0FBQzZXLFlBQVksQ0FBQ2hQLFNBQVMsQ0FBQztjQUM3QjZPLFFBQUEsQ0FBQUssT0FBTyxDQUFDQyxJQUFJLEVBQUU7WUFDZixDQUFDO1lBRUQsTUFBTUYsU0FBUyxHQUFHM2IsS0FBSyxJQUFHO2NBQ3pCNE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFN00sS0FBSyxDQUFDO1lBQy9CLENBQUM7WUFDRCxNQUFNOEQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJvSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJySCxLQUFLLENBQUM2VyxZQUFZLENBQUNoUCxTQUFTLENBQUM7Y0FDN0I2TyxRQUFBLENBQUFLLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1lBQ2YsQ0FBQztZQUNELE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQU12UyxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTTZDLGFBQWEsR0FBR0EsQ0FBQSxLQUFNRCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FDQ3BLLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBc0IsR0FDcENnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzNCLE1BQUEsQ0FBQThNLFVBQVU7Y0FDVjdILE9BQU8sRUFBRXVYLE1BQU07Y0FDZi9aLEtBQUssRUFBRTRELFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3dYLElBQUk7Y0FDL0JoYSxJQUFJLEVBQUMsV0FBVztjQUNoQmYsU0FBUyxFQUFDLFFBQVE7Y0FDbEJHLE9BQU8sRUFBQztZQUFTLEVBQ2hCLEVBQ0ZhLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDdUcsR0FBQSxDQUFBUSxRQUFRO2NBQUMxRyxPQUFPLEVBQUMsU0FBUztjQUFDaUQsT0FBTyxFQUFFNFg7WUFBaUIsR0FDcER4VyxXQUFXLENBQUNqQixPQUFPLENBQUN1RCxRQUFRLENBQ25CLEVBRVZxRSxlQUFlLElBQ2ZuSyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXdCLFlBQVk7Y0FBQ0wsU0FBUyxFQUFFQSxTQUFTO2NBQUVZLFFBQVEsRUFBRXlIO1lBQWEsR0FDMURySyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FBTWxCLEtBQUssQ0FBQ3FHLE1BQU0sQ0FBQ3ZCLE1BQU0sQ0FBTyxDQUVqQyxFQUNBOEUsZUFBZSxJQUNmeEgsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN5SSxXQUFBLENBQUEwUyx1QkFBdUI7Y0FDdkJ0WCxJQUFJLEVBQUU2RSxlQUFlO2NBQ3JCTSxRQUFRO2NBQ1J5TyxTQUFTLEVBQUUxWSxRQUFRLENBQUMwWSxTQUFTO2NBQzdCalQsT0FBTyxFQUFFMFcsaUJBQWlCO2NBQzFCdFUsVUFBVSxFQUFFbVU7WUFBUyxFQUV0QixDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVBLElBQUE3WixNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXlELE1BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBaUksR0FBQSxHQUFBakksT0FBQTtVQUNBLElBQUF3ZCxTQUFBLEdBQUF4ZCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQWtJLGFBQUEsR0FBQWxJLE9BQUE7VUFFTSxTQUFVNksseUJBQXlCQSxDQUFDO1lBQUV4SSxJQUFJO1lBQUU2RDtVQUFPLENBQUU7WUFDMUQsTUFBTTtjQUNMMUYsS0FBSztjQUNMbUYsS0FBSyxFQUFFO2dCQUFFUztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBaEcsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV4QixNQUFNLENBQUNrTixLQUFLLEVBQUVrUSxRQUFRLENBQUMsR0FBR2xiLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNO2NBQUVpTixnQkFBZ0I7Y0FBRW5IO1lBQVEsQ0FBRSxHQUFHLElBQUF1QixhQUFBLENBQUFHLGtCQUFrQixHQUFFO1lBQzNELE1BQU11VixNQUFNLEdBQUc7Y0FDZDNjLFFBQVEsRUFBRXlELEtBQUssSUFBRztnQkFDakJvWixRQUFRLENBQUNwWixLQUFLLENBQUN4RCxhQUFhLENBQUNFLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0Q0RCxPQUFPLEVBQUUsTUFBTU4sS0FBSyxJQUFHO2dCQUN0QixNQUFNb0osZ0JBQWdCLENBQUN6TCxJQUFJLEVBQUV1TCxLQUFLLENBQUM7Z0JBQ25DMUgsT0FBTyxFQUFFO2NBQ1Y7YUFDQTtZQUVELE9BQ0N0RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXVJLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRTFHLElBQUk7Y0FBQzNELFNBQVMsRUFBQyxjQUFjO2NBQUNzRSxPQUFPLEVBQUVBO1lBQU8sR0FDMUV0RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTJILElBQUksUUFDSmpGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxpQkFDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDdFUsS0FBSyxDQUFNLEVBQzdCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsZUFBT2xCLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQzVVLFdBQVcsQ0FBUSxDQUMvQixFQUVUVSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUkUsS0FBSyxFQUFFeEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDNUosUUFBUSxDQUFDbEwsS0FBSztjQUNsQ2IsSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFd00sS0FBSztjQUNaM00sUUFBUSxFQUFFMmMsTUFBTSxDQUFDM2MsUUFBUTtjQUN6QmtCLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQzVKLFFBQVEsQ0FBQy9LO1lBQVcsRUFDN0MsQ0FDSSxFQUVQUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM4YixTQUFBLENBQUEvVSxRQUFRO2NBQUMxRyxPQUFPLEVBQUMsU0FBUztjQUFDaUQsT0FBTyxFQUFFNFksTUFBTSxDQUFDNVk7WUFBTyxHQUNqRG9CLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDSCxFQUNUOUYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1RyxHQUFBLENBQUE0VixnQkFBZ0I7Y0FBQ2xYLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUEvRCxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXlELE1BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBaUksR0FBQSxHQUFBakksT0FBQTtVQUNBLElBQUF3ZCxTQUFBLEdBQUF4ZCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBUU0sU0FBVStkLHFCQUFxQkEsQ0FBQztZQUFFN1gsT0FBTztZQUFFMEksZUFBZSxHQUFHO1VBQUUsQ0FBRTtZQUN0RSxNQUFNO2NBQ0xwTyxLQUFLO2NBQ0xDLFFBQVE7Y0FDUjBGLE1BQU07Y0FDTitRLFFBQVE7Y0FDUnZSLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDaUcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMrTSxLQUFLLEVBQUVrUSxRQUFRLENBQUMsR0FBR2xiLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUN3TixLQUFLLEVBQUUyUCxRQUFRLENBQUMsR0FBR3BiLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNK2MsTUFBTSxHQUFHO2NBQ2QzYyxRQUFRLEVBQUV5RCxLQUFLLElBQUc7Z0JBQ2pCb1osUUFBUSxDQUFDcFosS0FBSyxDQUFDeEQsYUFBYSxDQUFDRSxLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNENEQsT0FBTyxFQUFFLE1BQU1OLEtBQUssSUFBRztnQkFDdEIsSUFBSTtrQkFDSGtDLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBRWpCLE1BQU11TSxRQUFRLEdBQUcsTUFBTTFTLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDNEgsUUFBUSxDQUFDa0YsS0FBSyxFQUFFO29CQUFFLEdBQUdnQjtrQkFBZSxDQUFFLENBQUM7a0JBRTdFO2tCQUNBLElBQUl1RSxRQUFRLENBQUM5RSxLQUFLLEVBQUU7b0JBQ25CLE1BQU00UCxRQUFRLEdBQUdBLENBQUM1UCxLQUFLLEVBQUV3TCxNQUFNLEdBQUcsRUFBRSxLQUFJO3NCQUN2QyxNQUFNL04sR0FBRyxHQUFHdEwsS0FBSyxDQUFDMk8sTUFBTSxHQUFHZCxLQUFLLENBQUMsR0FBR0EsS0FBSyxHQUFHLFNBQVM7c0JBQ3JELElBQUksQ0FBQyxDQUFDd0wsTUFBTSxDQUFDalMsTUFBTSxFQUFFO3dCQUNwQixPQUFPcEgsS0FBSyxDQUFDMk8sTUFBTSxDQUFDckQsR0FBRyxDQUFDLEdBQUcsSUFBSStOLE1BQU0sRUFBRTs7c0JBRXhDLE9BQU9yWixLQUFLLENBQUMyTyxNQUFNLENBQUNyRCxHQUFHLENBQUM7b0JBQ3pCLENBQUM7b0JBRURrUyxRQUFRLENBQUNDLFFBQVEsQ0FBQzlLLFFBQVEsQ0FBQzlFLEtBQUssRUFBRThFLFFBQVEsQ0FBQzBHLE1BQU0sQ0FBQyxDQUFDO29CQUNuRGpULFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2xCOztrQkFFRCxNQUFNOUYsS0FBSyxHQUFHTCxRQUFRLENBQUNLLEtBQUssQ0FBQzRXLE9BQU8sRUFBRTtrQkFFdEM7a0JBQ0FSLFFBQVEsQ0FBQztvQkFBRXBXO2tCQUFLLENBQUUsQ0FBQztrQkFDbkI7a0JBQ0FpTixVQUFVLENBQUMsTUFBSztvQkFDZm5ILFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ1IsQ0FBQyxPQUFPNkcsQ0FBQyxFQUFFO2tCQUNYQyxPQUFPLENBQUNXLEtBQUssQ0FBQyxFQUFFLEVBQUVaLENBQUMsRUFBRUEsQ0FBQyxDQUFDeVEsT0FBTyxDQUFDO2tCQUMvQkYsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7Y0FFckI7YUFDQTtZQUVELE9BQ0NwYixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXVJLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRTFHLElBQUk7Y0FBQzNELFNBQVMsRUFBQyxjQUFjO2NBQUNzRSxPQUFPLEVBQUVBO1lBQU8sR0FDMUV0RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsaUJBQ0NrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQ3RVLEtBQUssQ0FBTSxFQUM3QkksTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLGVBQU9sQixLQUFLLENBQUNzVyxNQUFNLENBQUM1VSxXQUFXLENBQVEsQ0FDL0IsRUFDVFUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN4QixLQUFBLENBQUEySCxJQUFJLFFBQ0pqRixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQStJLGFBQWE7Y0FBQ3hRLEtBQUssRUFBRUEsS0FBSztjQUFFNk4sS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDN0N6TCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUkUsS0FBSyxFQUFFeEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDNUosUUFBUSxDQUFDbEwsS0FBSztjQUNsQ2IsSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFd00sS0FBSztjQUNaM00sUUFBUSxFQUFFMmMsTUFBTSxDQUFDM2MsUUFBUTtjQUN6QmtCLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQzVKLFFBQVEsQ0FBQy9LO1lBQVcsRUFDN0MsQ0FDSSxFQUVQUyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUM4YixTQUFBLENBQUEvVSxRQUFRO2NBQUMxRyxPQUFPLEVBQUMsU0FBUztjQUFDaUQsT0FBTyxFQUFFNFksTUFBTSxDQUFDNVk7WUFBTyxHQUNqRG9CLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQ3VELFFBQVEsQ0FDbkIsQ0FDSCxFQUNUOUYsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1RyxHQUFBLENBQUE0VixnQkFBZ0I7Y0FBQ2xYLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZBLElBQUEvRCxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQXlELE1BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBaUksR0FBQSxHQUFBakksT0FBQTtVQUNBLElBQUF3ZCxTQUFBLEdBQUF4ZCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVW1lLGVBQWVBLENBQUM7WUFBRTliLElBQUk7WUFBRTZEO1VBQU8sQ0FBRTtZQUNoRCxNQUFNO2NBQ0wxRixLQUFLO2NBQ0xDLFFBQVE7Y0FDUmtGLEtBQUssRUFBRTtnQkFBRVM7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQWhHLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDeEIsTUFBTSxDQUFDaUcsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNzRixNQUFNLEVBQUVzTSxTQUFTLENBQUMsR0FBRzdQLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDO2NBQzFDNmMsWUFBWSxFQUFFLEVBQUU7Y0FDaEJDLFdBQVcsRUFBRSxLQUFLO2NBQ2xCdGI7YUFDQSxDQUFDO1lBRUYsTUFBTXViLE1BQU0sR0FBRztjQUNkM2MsUUFBUSxFQUFFeUQsS0FBSyxJQUFHO2dCQUNqQitOLFNBQVMsQ0FBQztrQkFDVCxHQUFHdE0sTUFBTTtrQkFDVCxDQUFDekIsS0FBSyxDQUFDeEQsYUFBYSxDQUFDQyxJQUFJLEdBQUd1RCxLQUFLLENBQUN4RCxhQUFhLENBQUNFO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNENEQsT0FBTyxFQUFFLE1BQU1OLEtBQUssSUFBRztnQkFDdEJrQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNbkcsUUFBUSxDQUFDSyxLQUFLLENBQUM0SCxRQUFRLENBQUN2QyxNQUFNLENBQUN1WCxZQUFZLENBQUM7Z0JBQ2xEeFgsT0FBTyxFQUFFO2dCQUVUNkgsVUFBVSxDQUFDLE1BQUs7a0JBQ2ZuSCxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0NoRSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXVJLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRTFHLElBQUk7Y0FBQzNELFNBQVMsRUFBQyxjQUFjO2NBQUNzRSxPQUFPLEVBQUVBO1lBQU8sR0FDMUV0RCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTJILElBQUksUUFDSmpGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxpQkFDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxhQUFLbEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDdFUsS0FBSyxDQUFNLEVBQzdCSSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsZUFBT2xCLEtBQUssQ0FBQ3NXLE1BQU0sQ0FBQzVVLFdBQVcsQ0FBUSxDQUMvQixFQUVUVSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTRCLFFBQVE7Y0FDUkUsS0FBSyxFQUFFeEIsS0FBSyxDQUFDc1csTUFBTSxDQUFDNUosUUFBUSxDQUFDbEwsS0FBSztjQUNsQ2IsSUFBSSxFQUFDLGNBQWM7Y0FDbkJDLEtBQUssRUFBRStFLE1BQU0sQ0FBQ3VYLFlBQVk7Y0FDMUJ6YyxRQUFRLEVBQUUyYyxNQUFNLENBQUMzYyxRQUFRO2NBQ3pCa0IsV0FBVyxFQUFFM0IsS0FBSyxDQUFDc1csTUFBTSxDQUFDNUosUUFBUSxDQUFDL0s7WUFBVyxFQUM3QyxDQUNJLEVBRVBTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaERnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzhiLFNBQUEsQ0FBQS9VLFFBQVE7Y0FBQzFHLE9BQU8sRUFBQyxTQUFTO2NBQUNpRCxPQUFPLEVBQUU0WSxNQUFNLENBQUM1WTtZQUFPLEdBQ2pEb0IsV0FBVyxDQUFDakIsT0FBTyxDQUFDdUQsUUFBUSxDQUNuQixDQUNILEVBQ1Q5RixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQTRWLGdCQUFnQjtjQUFDbFgsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDakM7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQS9ELE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMFYsWUFBQSxHQUFBMVYsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVvZSxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRTVkLEtBQUs7Y0FBRW1GLEtBQUs7Y0FBRThNLFNBQVM7Y0FBRWhTO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDbEUsTUFBTTJkLFFBQVEsR0FBRztjQUFFamQsS0FBSyxFQUFFLEVBQUU7Y0FBRVksS0FBSyxFQUFFeEIsS0FBSyxDQUFDOGQsU0FBUyxDQUFDMUQsTUFBTSxDQUFDelk7WUFBVyxDQUFFO1lBQ3pFLE1BQU0sQ0FBQ29jLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc1YixNQUFBLENBQUFHLE9BQUssQ0FBQ2xDLFFBQVEsQ0FBQ0osUUFBUSxDQUFDOGQsUUFBUSxDQUFDO1lBQ2pFLE1BQU10ZCxRQUFRLEdBQUcsTUFBTXlELEtBQUssSUFBRztjQUM5QjhaLFdBQVcsQ0FBQzlaLEtBQUssQ0FBQ3hELGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO2NBQ3RDLE1BQU1YLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO2dCQUFFa2QsUUFBUSxFQUFFN1osS0FBSyxDQUFDeEQsYUFBYSxDQUFDRTtjQUFLLENBQUUsQ0FBQztjQUMzRCxNQUFNdUUsS0FBSyxDQUFDcEUsSUFBSSxFQUFFO1lBQ25CLENBQUM7WUFDRCxNQUFNb08sT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDb0QsR0FBRyxDQUFDL0MsSUFBSSxLQUFLO2NBQUU1TyxLQUFLLEVBQUU0TyxJQUFJO2NBQUVoTyxLQUFLLEVBQUV4QixLQUFLLENBQUM4ZCxTQUFTLENBQUN0TyxJQUFJO1lBQUMsQ0FBRSxDQUFDLENBQUM7WUFDekYsTUFBTXBNLFFBQVEsR0FBRztjQUFFNmEsVUFBVSxFQUFFOVksS0FBSyxDQUFDK1k7WUFBSyxDQUFFO1lBRTVDLE9BQ0M5YixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQU8yWCxPQUFPLEVBQUM7WUFBRSxHQUFFN1ksS0FBSyxDQUFDOGQsU0FBUyxDQUFDMUQsTUFBTSxDQUFDNVksS0FBSyxDQUFTLEVBQ3hEWSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ2dVLFlBQUEsQ0FBQU8sV0FBVztjQUNYN1UsS0FBSyxFQUFFWCxRQUFRLENBQUM4ZCxRQUFRO2NBQ3hCcGQsSUFBSSxFQUFDLFVBQVU7Y0FDZndPLE9BQU8sRUFBRUEsT0FBTztjQUNoQjFPLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QyQztZQUFRLEVBQ1gsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBaEIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUEwVixZQUFBLEdBQUExVixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVTJlLGNBQWNBLENBQUM7WUFBRXhZLE1BQU07WUFBRXNNO1VBQVMsQ0FBRTtZQUNuRCxNQUFNO2NBQUVoUyxRQUFRO2NBQUVrRjtZQUFLLENBQUUsR0FBRyxJQUFBdkYsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUNoRCxJQUFJMlQsWUFBWSxHQUFHO2NBQUVqVCxLQUFLLEVBQUUsRUFBRTtjQUFFWSxLQUFLLEVBQUU7WUFBUSxDQUFFO1lBQ2pELE1BQU0yTixPQUFPLEdBQUcsRUFBRTtZQUNsQmhLLEtBQUssQ0FBQzZOLEtBQUssQ0FBQ3ZSLFVBQVUsQ0FBQzRILEtBQUssQ0FBQ2tDLE9BQU8sQ0FBQ3FQLENBQUMsSUFBRztjQUN4QyxJQUFJQSxDQUFDLENBQUN2RixFQUFFLEtBQUtwVixRQUFRLENBQUNvVixFQUFFLEVBQUU7Y0FDMUIsSUFBSXVGLENBQUMsQ0FBQ3ZGLEVBQUUsS0FBSzFQLE1BQU0sQ0FBQ3JGLEtBQUssQ0FBQzhkLFVBQVUsRUFBRXZLLFlBQVksR0FBRztnQkFBRWpULEtBQUssRUFBRWdhLENBQUMsQ0FBQ3ZGLEVBQUU7Z0JBQUU3VCxLQUFLLEVBQUVvWixDQUFDLENBQUM1WTtjQUFLLENBQUU7Y0FDcEZtTixPQUFPLENBQUMvRCxJQUFJLENBQUM7Z0JBQUV4SyxLQUFLLEVBQUVnYSxDQUFDLENBQUN2RixFQUFFO2dCQUFFN1QsS0FBSyxFQUFFb1osQ0FBQyxDQUFDNVk7Y0FBSyxDQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsTUFBTXFjLFlBQVksR0FBR2hSLElBQUksSUFBRztjQUMzQjRFLFNBQVMsQ0FBQ3RNLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFckYsS0FBSyxFQUFFO2tCQUFFLEdBQUdxRixNQUFNLENBQUNyRixLQUFLO2tCQUFFOGQsVUFBVSxFQUFFL1EsSUFBSSxDQUFDN0csTUFBTSxDQUFDNUY7Z0JBQUs7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNoRyxDQUFDO1lBRUQsT0FDQ3dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFPMlgsT0FBTyxFQUFDLEVBQUU7Y0FBQ3pYLFNBQVMsRUFBQztZQUFXLEcsc0NBRXRDZ0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnVSxZQUFBLENBQUFPLFdBQVc7Y0FBQ2hWLFFBQVEsRUFBRTRkLFlBQVk7Y0FBRXhLLFlBQVksRUFBRUEsWUFBWTtjQUFFMUUsT0FBTyxFQUFFLENBQUMwRSxZQUFZLEVBQUUsR0FBRzFFLE9BQU87WUFBQyxFQUFJLENBQ2pHO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUEvTSxNQUFBLEdBQUE1QyxPQUFBO1VBa0JPLE1BQU04ZSxlQUFlLEdBQUFwVixPQUFBLENBQUFvVixlQUFBLEdBQUdsYyxNQUFBLENBQUFHLE9BQUssQ0FBQ3lMLGFBQWEsQ0FBQyxFQUE2QixDQUFDO1VBQzFFLE1BQU05TixrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNa0MsTUFBQSxDQUFBRyxPQUFLLENBQUMyTCxVQUFVLENBQUNvUSxlQUFlLENBQUM7VUFBQ3BWLE9BQUEsQ0FBQWhKLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CMUUsSUFBQXFlLFdBQUEsR0FBQS9lLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNEMsTUFBQSxHQUFBNUMsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFnZixTQUFBLEdBQUFoZixPQUFBO1VBRU87VUFBVSxTQUFVNkIsY0FBY0EsQ0FBQyxFQUFFO1lBQzNDLE1BQU07Y0FBRXBCLFFBQVE7Y0FBRUQsS0FBSztjQUFFb0Y7WUFBWSxDQUFFLEdBQUcsSUFBQXhGLFFBQUEsQ0FBQU0sa0JBQWtCLEdBQUU7WUFDOUQsTUFBTSxDQUFDdWUsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3RjLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDO2NBQzVDc2UsR0FBRyxFQUFFMWUsUUFBUSxDQUFDd2UsT0FBTztjQUNyQkcsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUc7YUFDZCxDQUFDO1lBRUYsTUFBTTVYLEdBQUcsR0FBRywwREFBMERqSCxRQUFRLENBQUM0QixJQUFJLEVBQUU7WUFFckYsTUFBTWlHLFVBQVUsR0FBR2lYLElBQUksSUFBSTllLFFBQVEsQ0FBQytlLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDO1lBRXpELElBQUF0ZixNQUFBLENBQUF3QixTQUFTLEVBQ1IsQ0FBQ2hCLFFBQVEsQ0FBQyxFQUNWLE1BQ0N5ZSxVQUFVLENBQUM7Y0FDVkMsR0FBRyxFQUFFMWUsUUFBUSxDQUFDd2UsT0FBTztjQUNyQkcsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUc7YUFDZCxDQUFDLEVBQ0gsaUJBQWlCLENBQ2pCO1lBRUQsTUFBTUcsVUFBVSxHQUFHUixPQUFPLENBQUNFLEdBQUcsR0FBRyxHQUFHRixPQUFPLENBQUNFLEdBQUcsWUFBWUUsSUFBSSxDQUFDQyxHQUFHLEVBQUUsRUFBRSxHQUFHOVIsU0FBUztZQUNuRixNQUFNdk0sUUFBUSxHQUFHeUQsS0FBSyxJQUFHO2NBQ3hCakUsUUFBUSxDQUFDWSxHQUFHLENBQUM7Z0JBQUVtQixLQUFLLEVBQUVrQyxLQUFLLENBQUN4RCxhQUFhLENBQUNFO2NBQUssQ0FBRSxDQUFDO1lBQ25ELENBQUM7WUFDRCxPQUNDd0IsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQVNFLFNBQVMsRUFBQztZQUE2QixHQUUvQ2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFRRSxTQUFTLEVBQUU4RjtZQUFHLEdBQ3JCOUUsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNxZCxXQUFBLENBQUFXLFVBQVU7Y0FDVmxkLEtBQUssRUFBRWhDLEtBQUssQ0FBQ3llLE9BQU8sQ0FBQ3pjLEtBQUs7Y0FDMUJOLFdBQVcsRUFBRTFCLEtBQUssQ0FBQ3llLE9BQU8sQ0FBQy9jLFdBQVc7Y0FDdEN5ZCxXQUFXLEVBQUVsZixRQUFRLENBQUNtZixrQkFBa0I7Y0FDeENDLE1BQU0sRUFBQyxVQUFVO2NBQ2pCWixPQUFPLEVBQUVRLFVBQVU7Y0FDbkJuWCxVQUFVLEVBQUVBO1lBQVUsRUFDckIsRUFDRjFGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBeUIsR0FDdkNnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsY0FDQ2tCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBOFMsS0FBSztjQUNMcFIsU0FBUyxFQUFDLHdCQUF3QjtjQUNsQ1QsSUFBSSxFQUFDLE9BQU87Y0FDWkMsS0FBSyxFQUFFWCxRQUFRLENBQUMrQixLQUFLLEdBQUcvQixRQUFRLENBQUMrQixLQUFLLEdBQUcsRUFBRTtjQUMzQ3ZCLFFBQVEsRUFBRUEsUUFBUTtjQUNsQmtCLFdBQVcsRUFBRTNCLEtBQUssQ0FBQ3VILElBQUksQ0FBQ3ZGLEtBQUs7Y0FDN0JsQixNQUFNLEVBQUVzRTtZQUFZLEVBQ25CLENBQ0csRUFDTmhELE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZSxHQUM3QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDM0IsTUFBQSxDQUFBMkMsT0FBTztjQUFDdkIsSUFBSSxFQUFFVixRQUFRLENBQUM0QjtZQUFJLEVBQUksRSxLQUFFN0IsS0FBSyxDQUFDNEksS0FBSyxDQUFDM0ksUUFBUSxDQUFDNEIsSUFBSSxDQUFDLENBQ3ZELENBQ0QsRUFDTk8sTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1Q2dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDc2QsU0FBQSxDQUFBYyxnQkFBZ0IsT0FBRyxDQUNmLENBQ0UsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFQSxJQUFBN2YsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQStmLGVBQUEsR0FBQS9mLE9BQUE7VUFDQSxJQUFBMEQsV0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUE0QyxNQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQWdnQixjQUFBLEdBQUFoZ0IsT0FBQTtVQUNBLElBQUFpZ0IsY0FBQSxHQUFBamdCLE9BQUE7VUFDQSxJQUFBa2dCLE9BQUEsR0FBQWxnQixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRUEsSUFBQW1nQixlQUFBLEdBQUFuZ0IsT0FBQTtVQUNBLElBQUFvZ0IsT0FBQSxHQUFBcGdCLE9BQUE7VUFFQSxJQUFBcWdCLFdBQUEsR0FBQXJnQixPQUFBO1VBRU87VUFBWSxTQUFVc2dCLGtCQUFrQkEsQ0FBQztZQUFFM2EsS0FBSztZQUFFbEY7VUFBUSxDQUFFO1lBQ2xFLE1BQU0sQ0FBQzBGLE1BQU0sRUFBRXNNLFNBQVMsQ0FBQyxHQUFHN1AsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQXdCSixRQUFRLENBQUMwYixhQUFhLEVBQUUsQ0FBQztZQUMzRixNQUFNLENBQUNvRSxVQUFVLEVBQUUvZixLQUFLLENBQUMsR0FBRyxJQUFBUCxNQUFBLENBQUFxRSxRQUFRLEVBQUN5YixlQUFBLENBQUFTLE1BQVksQ0FBQ0MsU0FBUyxDQUFDO1lBQzVELE1BQU07Y0FBRXBlO1lBQUksQ0FBRSxHQUFHNUIsUUFBUTtZQUV6QixJQUFBUixNQUFBLENBQUF3QixTQUFTLEVBQUMsQ0FBQ2hCLFFBQVEsQ0FBQyxFQUFFLE1BQU1nUyxTQUFTLENBQUM7Y0FBRSxHQUFHaFMsUUFBUSxDQUFDMGIsYUFBYTtZQUFFLENBQUUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDO1lBRTdGLElBQUksQ0FBQ29FLFVBQVUsRUFBRSxPQUFPM2QsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUF1TyxPQUFPO2NBQUM3RixNQUFNLEVBQUU7WUFBSSxFQUFJO1lBQ2pELE1BQU14RyxZQUFZLEdBQUdBLENBQUEsS0FBSztjQUN6Qm5GLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFO1lBQ2hCLENBQUM7WUFDRCxNQUFNSCxLQUFLLEdBQUc7Y0FBRXVFLEtBQUs7Y0FBRWxGLFFBQVE7Y0FBRUQsS0FBSztjQUFFMkYsTUFBTTtjQUFFc00sU0FBUztjQUFFN007WUFBWSxDQUFFO1lBRXpFLE9BQ0NoRCxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQ3RCLFFBQUEsQ0FBQTBlLGVBQWUsQ0FBQ2hPLFFBQVE7Y0FBQzFQLEtBQUssRUFBRUE7WUFBSyxHQUNyQ3dCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBb0IsR0FDbENnQixNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQzJlLFdBQUEsQ0FBQS9ELGdCQUFnQixPQUFHLEVBQ3BCMVosTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNnQyxXQUFBLENBQUEyUyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRWpVLElBQUk7Y0FDZnNOLE9BQU8sRUFBRTtnQkFDUixpQkFBaUIsRUFBRS9NLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeWUsZUFBQSxDQUFBakssc0JBQXNCLE9BQUc7Z0JBQzdDd0ssTUFBTSxFQUFFOWQsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN3ZSxPQUFBLENBQUFoUyxjQUFjLE9BQUc7Z0JBQzFCLGdCQUFnQixFQUFFdEwsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNzZSxjQUFBLENBQUF6ZixxQkFBcUIsT0FBRztnQkFDM0NvZ0IsTUFBTSxFQUFFL2QsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUMwZSxPQUFBLENBQUFoRSxjQUFjLE9BQUc7Z0JBQzFCLGdCQUFnQixFQUFFeFosTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUN1ZSxjQUFBLENBQUF2YSxxQkFBcUI7ZUFDeEM7Y0FDRHZELFdBQVcsRUFBRVMsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUFrQixNQUFBLENBQUFHLE9BQUEsQ0FBQXBCLFFBQUE7WUFBd0IsRUFDcEMsQ0FDRyxDQUNvQjtVQUU3Qjs7Ozs7Ozs7Ozs7VUM5Q0E7O1VBRUFtSSxNQUFBLENBQUE4VyxjQUFBLENBQUFsWCxPQUFBO1lBQ0F0SSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQXdCLE1BQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMFYsWUFBQSxHQUFBMVYsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUE2Z0IsTUFBQSxHQUFBN2dCLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ00sU0FBVThmLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUV0ZixLQUFLO2NBQUVtRixLQUFLO2NBQUU4TSxTQUFTO2NBQUVoUztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGtCQUFrQixHQUFFO1lBQ2xFLE1BQU0yZCxRQUFRLEdBQUc7Y0FBRWpkLEtBQUssRUFBRSxFQUFFO2NBQUVZLEtBQUssRUFBRXhCLEtBQUssQ0FBQzhkLFNBQVMsQ0FBQzFELE1BQU0sQ0FBQ3pZO1lBQVcsQ0FBRTtZQUN6RSxNQUFNLENBQUNvYyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHNWIsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUNKLFFBQVEsQ0FBQzhkLFFBQVEsQ0FBQztZQUNqRSxNQUFNLENBQUNoWixJQUFJLEVBQUV1YixPQUFPLENBQUMsR0FBR2xlLE1BQUEsQ0FBQUcsT0FBSyxDQUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUM4RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEUsTUFBQSxDQUFBRyxPQUFLLENBQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1JLFFBQVEsR0FBRyxNQUFNeUQsS0FBSyxJQUFHO2NBQzlCOFosV0FBVyxDQUFDOVosS0FBSyxDQUFDeEQsYUFBYSxDQUFDRSxLQUFLLENBQUM7WUFDdkMsQ0FBQztZQUNELE1BQU11TyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNvRCxHQUFHLENBQUMvQyxJQUFJLEtBQUs7Y0FBRTVPLEtBQUssRUFBRTRPLElBQUk7Y0FBRWhPLEtBQUssRUFBRXhCLEtBQUssQ0FBQzhkLFNBQVMsQ0FBQ3RPLElBQUk7WUFBQyxDQUFFLENBQUMsQ0FBQztZQUV6RixNQUFNc08sU0FBUyxHQUFHO2NBQ2pCeUMsRUFBRSxFQUFFLHFCQUFxQjtjQUN6QkMsRUFBRSxFQUFFO2FBQ0o7WUFDRCxNQUFNNVosTUFBTSxHQUFHLE1BQU0xQyxLQUFLLElBQUc7Y0FDNUJrQyxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCbkcsUUFBUSxDQUFDYyxJQUFJLENBQUM7Z0JBQUVnZDtjQUFRLENBQUUsQ0FBQztjQUUzQjNYLFdBQVcsQ0FBQyxLQUFLLENBQUM7Y0FDbEJrYSxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU1sSyxVQUFVLEdBQUdBLENBQUEsS0FBTWtLLE9BQU8sQ0FBQyxDQUFDdmIsSUFBSSxDQUFDO1lBQ3ZDLE9BQ0MzQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBcEIsUUFBQSxRQUNDaUIsTUFBQSxDQUFBRyxPQUFBLENBQUFyQixhQUFBLENBQUNtZixNQUFBLENBQUFJLEtBQUs7Y0FDTHJmLFNBQVMsRUFBQyxvQkFBb0I7Y0FDOUJ1ZCxHQUFHLEVBQUViLFNBQVMsQ0FBQzdkLFFBQVEsQ0FBQzhkLFFBQVEsQ0FBQztjQUNqQzJDLEdBQUcsRUFBQyxVQUFVO2NBQ2RsYyxPQUFPLEVBQUU0UjtZQUFVLEVBQ2xCLEVBQ0RyUixJQUFJLElBQ0ozQyxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQXVJLEtBQUs7Y0FBQ3pHLElBQUk7Y0FBQ1csT0FBTyxFQUFFMFE7WUFBVSxHQUM5QmhVLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDeEIsS0FBQSxDQUFBMkgsSUFBSTtjQUFDQyxRQUFRLEVBQUVWO1lBQU0sR0FDckJ4RSxNQUFBLENBQUFHLE9BQUEsQ0FBQXJCLGFBQUE7Y0FBTzJYLE9BQU8sRUFBQztZQUFFLEdBQUU3WSxLQUFLLENBQUM4ZCxTQUFTLENBQUMxRCxNQUFNLENBQUM1WSxLQUFLLENBQVMsRUFDeERZLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ1UsWUFBQSxDQUFBTyxXQUFXO2NBQUM3VSxLQUFLLEVBQUVtZCxRQUFRO2NBQUVwZCxJQUFJLEVBQUMsVUFBVTtjQUFDd08sT0FBTyxFQUFFQSxPQUFPO2NBQUUxTyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxFQUN0RjJCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QmdCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDaEQsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lELE9BQU8sRUFBRW9DLE1BQU07Y0FBRXhELFFBQVEsRUFBRStDO1lBQVEsR0FDM0RoQixLQUFLLENBQUNTLFdBQVcsQ0FBQ2pCLE9BQU8sQ0FBQzVELElBQUksQ0FDdkIsQ0FDSixDQUNBLENBRVIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBcUIsTUFBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwRCxXQUFBLEdBQUExRCxPQUFBO1VBRU0sU0FBVW1oQixVQUFVQSxDQUFDO1lBQzFCekMsS0FBSyxHQUFHLEtBQUs7WUFDYjlhLFFBQVE7WUFDUkU7VUFBUSxDQUtSO1lBQ0EsTUFBTTtjQUFFcUMsTUFBTTtjQUFFK1EsUUFBUTtjQUFFMVcsS0FBSztjQUFFbUYsS0FBSztjQUFFbEY7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxrQkFBa0IsR0FBRTtZQUV6RSxNQUFNMEcsTUFBTSxHQUFHLE1BQU0xQyxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCOzs7OztjQU1BLElBQUksQ0FBQytaLEtBQUssRUFBRTtnQkFDWCxNQUFNL1ksS0FBSyxDQUFDNk4sS0FBSyxDQUFDdlIsVUFBVSxDQUFDOFEsR0FBRyxDQUFDZ0QsR0FBRyxDQUFDdFYsUUFBUSxDQUFDb1YsRUFBRSxDQUFDLENBQUN4VSxHQUFHLENBQUM4RSxNQUFNLENBQUM7Z0JBQzdELE1BQU0xRixRQUFRLENBQUNZLEdBQUcsQ0FBQzhFLE1BQU0sQ0FBQztnQkFDMUJSLEtBQUssQ0FBQ3BFLElBQUksRUFBRTtnQkFDWjJWLFFBQVEsQ0FBQztrQkFBRTdMLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7O2NBRzdCLElBQUl2SCxRQUFRLEVBQUVBLFFBQVEsRUFBRTtZQUN6QixDQUFDO1lBQ0QsTUFBTTRTLEtBQUssR0FBRztjQUFFOVMsUUFBUSxFQUFFLENBQUN1QyxNQUFNLENBQUNrRixPQUFPLElBQUl6SCxRQUFRO2NBQUVvQixPQUFPLEVBQUVvQztZQUFNLENBQUU7WUFFeEUsT0FDQ3hFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBckIsYUFBQSxDQUFDZ0MsV0FBQSxDQUFBcUIsTUFBTTtjQUFDaEQsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLMlU7WUFBSyxHQUNqQy9RLEtBQUssQ0FBQ1MsV0FBVyxDQUFDakIsT0FBTyxDQUFDNUQsSUFBSSxDQUN2QjtVQUVYIiwiaWdub3JlTGlzdCI6W119