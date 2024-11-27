System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.2.10/modules/management/refinament.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.2.10/components/dynamic-field", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.2.10/components/cover-image.code", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context3) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_3 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_6 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_8 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0210ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp0210ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_12 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6List) {
      dependency_13 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_14 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_16 = _pragmateUi100Beta6DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_17 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_18 = _pragmateUi100Beta6FormReactSelect;
    }, function (_framerMotion2) {
      dependency_19 = _framerMotion2;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_20 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactAilearnApp0210ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp0210ComponentsDynamicField;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0210ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0210ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta6Image) {
      dependency_25 = _pragmateUi100Beta6Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/dynamic-list', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['framer-motion', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 48197127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          function CharacterTalkActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => activity.save({
              [name]: value
            });
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            const onCancel = () => setView(activity.specs.empty() ? 'empty' : 'specs');
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
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
        hash: 2403657680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _activityContent = require("./activity-content");
          var _materials = require("./materials");
          var _header = require("../../header");
          function ContentTheoryActivity({}) {
            const {
              values,
              texts,
              activity,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
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
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label, " "), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_activityContent.ActivityContent, {
                  toggleView: toggleView
                }),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }), React.createElement(_materials.MaterialsView, {
              toggleView: toggleView
            }));
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
        hash: 608989270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyArticleMaterial = EmptyArticleMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 89444257,
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
          function MaterialsView({
            toggleView
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
            const onCreate = () => {
              setShowModal(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.contentTheory.materials.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              className: "disabled-button",
              title: "proximamente",
              icon: "file",
              variant: "link"
            }, texts.contentTheory.empty.actions.upload), _react.default.createElement(_components.Button, {
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
        hash: 1077666076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialList = MaterialList;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
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
            const onClick = () => {
              // setShowModal(true);
              activity.materials.clear();
              activity.save();
            };
            return _react.default.createElement(_react.default.Fragment, null, activity.materials.article && _react.default.createElement("div", {
              className: "attachments__container"
            }, _react.default.createElement("div", {
              className: "attachment__card card--article",
              onClick: onCreate
            }, truncateText(activity.materials.article, 80), _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: onClick
            }))));
          }
        }
      });

      /**************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/manual-material-form
      **************************************************************************/

      ims.set('./activities/content-theory/materials/manual-material-form', {
        hash: 3953557171,
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
            }, _react.default.createElement("div", null, texts.manual.cancel)));
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
        hash: 1793036517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          function DebateActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: toggleView,
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
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
        hash: 2638999037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceEmptySpecs = MultipleChoiceEmptySpecs;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
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
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onManual = () => toggleView('form');
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "link",
              ensure: false
            }, globalTexts.actions.generate))), _react.default.createElement("span", null, texts.activities.empty.description), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              activity: activity,
              activities: store.model.activities,
              showRelated: true,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
            }));
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
        hash: 109555663,
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
          var _header = require("./header");
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
            }, _react.default.createElement(_header.DynamicHeader, null), _react.default.createElement(Dynamic.List, {
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
        hash: 2801047882,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _specs = require("./specs");
          var _empty = require("./empty");
          var _header = require("../../header");
          function MultipleChoiceActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => activity.save({
              [name]: value
            });
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            const onCancel = () => {
              activity.specs.revert();
              setView('specs');
            };
            const changeView = () => setView('specs');
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, ['specs.cleaned', 'specs.generated']);
            const finalView = activity.specs.empty() && view === 'specs' ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.MultipleChoiceSpecs, {
                  setView: setView
                }),
                form: React.createElement(_form.MultipleChoiceManualForm, {
                  onCancel: onCancel,
                  changeView: changeView
                })
              },
              placeholder: React.createElement(_empty.MultipleChoiceEmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
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
        hash: 3319440828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async ({
              currentTarget: {
                value
              }
            }) => {
              activity.specs.set({
                objective: value
              });
              await activity.save();
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_ui.ContentEditable, {
              name: "objective",
              type: "textarea",
              onSave: onSave,
              placeholder: texts.specs.objective.placeholder,
              content: values.specs?.objective
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/specs/base-spec
      ********************************************/

      ims.set('./activities/specs/base-spec', {
        hash: 2156797319,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async ({
              target: {
                name,
                value
              }
            }) => {
              activity.specs.set({
                [name]: value
              });
              await activity.save();
            };
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_ui.ContentEditable, {
              type: "textarea",
              name: name,
              onSave: onSave,
              content: value
            }, value));
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
        hash: 2271348337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function EmptySpecs({
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
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onManual = () => toggleView('manual');
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "link",
              ensure: false
            }, globalTexts.actions.generate))), _react.default.createElement("div", {
              className: "activity__empty-container"
            }, _react.default.createElement("span", {
              className: "activity--empty__description"
            }, texts.activities.empty.description)), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/header
      *****************************************/

      ims.set('./activities/specs/header', {
        hash: 2924046515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsHeader = SpecsHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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

      /*************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic
      *************************************************/

      ims.set('./activities/specs/manual/dynamic', {
        hash: 571613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: DynamicContainer
          };
          function DynamicContainer({
            name,
            data
          }) {
            const {
              activity: {
                specs
              },
              texts
            } = (0, _context.useActivityContext)();
            if (!data.hasOwnProperty('fields')) {
              console.warn(`DynamicContainer: no fields found on ${name}`);
              return null;
            }
            const fields = Object.keys(data.fields);
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
            };
            const output = fields.map((name, index) => {
              const Field = fieldTypes[data.fields[name]];
              const attrs = {
                label: fieldTexts[name].label,
                placeholder: fieldTexts[name].placeholder
              };
              defaultValues[name] = '';
              return _react.default.createElement(Field, {
                ...attrs,
                key: `${name}-${index}`,
                name: name,
                data: name
              });
            });
            if (!values.length) values.push(defaultValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dynamicField.DynamicField, {
              name: name,
              value: values,
              onChange: onChange
            }, output));
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

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/index
      ***********************************************/

      ims.set('./activities/specs/manual/index', {
        hash: 2762557426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _dynamic = require("./dynamic");
          var _useForm = require("./use-form");
          var _footer = require("./footer");
          var _header = require("../header");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ManualMaterialForm({
            toggleView
          }) {
            const {
              texts,
              activity,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const {
              processing,
              actions
            } = (0, _useForm.useForm)(toggleView);
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_header.SpecsHeader, null), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("div", null, output), _react.default.createElement(_footer.ManualFormFooter, {
              onSave: actions.onSave,
              onCancel: actions.onCancel,
              processing: processing
            })));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/manual/use-form
      **************************************************/

      ims.set('./activities/specs/manual/use-form', {
        hash: 56153088,
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
              activity.specs.revert();
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
        hash: 1688250580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          function SpokenActivity() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
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
        hash: 1165703704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
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
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement("div", {
              className: "internal-breadcrumb "
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: onBack
            }, _react.default.createElement(_icons.Icon, {
              icon: "backArrow",
              className: "circle"
            }), _react.default.createElement(_icons2.AppIcon, {
              icon: "module"
            }), _react.default.createElement("span", null, globalTexts.actions.back, " ", texts.activities.module)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
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
        hash: 3218830360,
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
        hash: 1976004770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              editData
            } = (0, _context.useActivityContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [picture, setPicture] = _react.default.useState({
              src: activity.picture,
              date: Date.now()
            });
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-activity__container header-activity__container--${activity.type}`;
            const onSave = async event => {
              const data = {
                title: event.target.value
              };
              await activity.save(data);
            };
            const onGenerate = notes => activity.generatePicture(notes);
            (0, _hooks.useBinder)([activity], () => setPicture({
              src: activity.picture,
              date: Date.now()
            }), 'image.generated');
            const pictureSrc = picture.src ? `${picture.src}?size=sm&${Date.now()}` : undefined;
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement("header", {
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
            }, _react.default.createElement(_ui.ContentEditable, {
              className: "inline-control",
              name: "title",
              as: "h3",
              onSave: onSave,
              content: activity.title,
              placeholder: texts.form.title
            })), _react.default.createElement("div", {
              className: "flex-container header__icons"
            }, _react.default.createElement(_language.ActivityLanguage, null), _react.default.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: activity.type
            }))), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
              show: showSuggestions,
              type: activity.type,
              onClose: toggleSuggestions
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1850849062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const value = {
              store,
              activity,
              texts,
              values,
              setValues
            };
            return _react.default.createElement(_context.ActivityContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_components.ConditionalContainer, {
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
        hash: 1587417072,
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
              activity.set({
                language
              });
              await store.save();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9pY29ucyIsIl9tb2RhbCIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJpY29uIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsInRpdGxlIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNvbmZpcm0iLCJDb250cm9sIiwiQXBwSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93IiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwidXBsb2FkIiwiYWRkIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5Iiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9sYW5ndWFnZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE9BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFdBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLGVBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE9BQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVVLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVYsUUFBQSxDQUFBVyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdoQixLQUFLLENBQUNpQixRQUFRLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNTSxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JB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System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.2.10/modules/management/refinament.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.2.10/components/dynamic-field", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.2.10/components/cover-image.code", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context3) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_3 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_6 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_8 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0210ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp0210ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_12 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6List) {
      dependency_13 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_14 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_16 = _pragmateUi100Beta6DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_17 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_18 = _pragmateUi100Beta6FormReactSelect;
    }, function (_framerMotion2) {
      dependency_19 = _framerMotion2;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_20 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactAilearnApp0210ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp0210ComponentsDynamicField;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0210ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0210ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta6Image) {
      dependency_25 = _pragmateUi100Beta6Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/dynamic-list', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['framer-motion', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 48197127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          function CharacterTalkActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => activity.save({
              [name]: value
            });
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            const onCancel = () => setView(activity.specs.empty() ? 'empty' : 'specs');
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
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
        hash: 2403657680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _activityContent = require("./activity-content");
          var _materials = require("./materials");
          var _header = require("../../header");
          function ContentTheoryActivity({}) {
            const {
              values,
              texts,
              activity,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
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
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label, " "), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_activityContent.ActivityContent, {
                  toggleView: toggleView
                }),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }), React.createElement(_materials.MaterialsView, {
              toggleView: toggleView
            }));
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
        hash: 608989270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyArticleMaterial = EmptyArticleMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 89444257,
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
          function MaterialsView({
            toggleView
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
            const onCreate = () => {
              setShowModal(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.contentTheory.materials.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              className: "disabled-button",
              title: "proximamente",
              icon: "file",
              variant: "link"
            }, texts.contentTheory.empty.actions.upload), _react.default.createElement(_components.Button, {
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
        hash: 1077666076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialList = MaterialList;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
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
            const onClick = () => {
              // setShowModal(true);
              activity.materials.clear();
              activity.save();
            };
            return _react.default.createElement(_react.default.Fragment, null, activity.materials.article && _react.default.createElement("div", {
              className: "attachments__container"
            }, _react.default.createElement("div", {
              className: "attachment__card card--article",
              onClick: onCreate
            }, truncateText(activity.materials.article, 80), _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: onClick
            }))));
          }
        }
      });

      /**************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/manual-material-form
      **************************************************************************/

      ims.set('./activities/content-theory/materials/manual-material-form', {
        hash: 3953557171,
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
            }, _react.default.createElement("div", null, texts.manual.cancel)));
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
        hash: 1793036517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          function DebateActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  onCancel: toggleView,
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
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
        hash: 2638999037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceEmptySpecs = MultipleChoiceEmptySpecs;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
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
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onManual = () => toggleView('form');
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "link",
              ensure: false
            }, globalTexts.actions.generate))), _react.default.createElement("span", null, texts.activities.empty.description), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              activity: activity,
              activities: store.model.activities,
              showRelated: true,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
            }));
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
        hash: 109555663,
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
          var _header = require("./header");
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
            }, _react.default.createElement(_header.DynamicHeader, null), _react.default.createElement(Dynamic.List, {
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
        hash: 2801047882,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _specs = require("./specs");
          var _empty = require("./empty");
          var _header = require("../../header");
          function MultipleChoiceActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => activity.save({
              [name]: value
            });
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            const onCancel = () => {
              activity.specs.revert();
              setView('specs');
            };
            const changeView = () => setView('specs');
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, ['specs.cleaned', 'specs.generated']);
            const finalView = activity.specs.empty() && view === 'specs' ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.MultipleChoiceSpecs, {
                  setView: setView
                }),
                form: React.createElement(_form.MultipleChoiceManualForm, {
                  onCancel: onCancel,
                  changeView: changeView
                })
              },
              placeholder: React.createElement(_empty.MultipleChoiceEmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }));
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
        hash: 3319440828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async ({
              currentTarget: {
                value
              }
            }) => {
              activity.specs.set({
                objective: value
              });
              await activity.save();
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_ui.ContentEditable, {
              name: "objective",
              type: "textarea",
              onSave: onSave,
              placeholder: texts.specs.objective.placeholder,
              content: values.specs?.objective
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/specs/base-spec
      ********************************************/

      ims.set('./activities/specs/base-spec', {
        hash: 2156797319,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async ({
              target: {
                name,
                value
              }
            }) => {
              activity.specs.set({
                [name]: value
              });
              await activity.save();
            };
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_ui.ContentEditable, {
              type: "textarea",
              name: name,
              onSave: onSave,
              content: value
            }, value));
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
        hash: 2271348337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function EmptySpecs({
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
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onManual = () => toggleView('manual');
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "link",
              ensure: false
            }, globalTexts.actions.generate))), _react.default.createElement("div", {
              className: "activity__empty-container"
            }, _react.default.createElement("span", {
              className: "activity--empty__description"
            }, texts.activities.empty.description)), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/header
      *****************************************/

      ims.set('./activities/specs/header', {
        hash: 2924046515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsHeader = SpecsHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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

      /*************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic
      *************************************************/

      ims.set('./activities/specs/manual/dynamic', {
        hash: 571613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _react = require("react");
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: DynamicContainer
          };
          function DynamicContainer({
            name,
            data
          }) {
            const {
              activity: {
                specs
              },
              texts
            } = (0, _context.useActivityContext)();
            if (!data.hasOwnProperty('fields')) {
              console.warn(`DynamicContainer: no fields found on ${name}`);
              return null;
            }
            const fields = Object.keys(data.fields);
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
            };
            const output = fields.map((name, index) => {
              const Field = fieldTypes[data.fields[name]];
              const attrs = {
                label: fieldTexts[name].label,
                placeholder: fieldTexts[name].placeholder
              };
              defaultValues[name] = '';
              return _react.default.createElement(Field, {
                ...attrs,
                key: `${name}-${index}`,
                name: name,
                data: name
              });
            });
            if (!values.length) values.push(defaultValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dynamicField.DynamicField, {
              name: name,
              value: values,
              onChange: onChange
            }, output));
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

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/index
      ***********************************************/

      ims.set('./activities/specs/manual/index', {
        hash: 2762557426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("pragmate-ui/form");
          var _dynamic = require("./dynamic");
          var _useForm = require("./use-form");
          var _footer = require("./footer");
          var _header = require("../header");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ManualMaterialForm({
            toggleView
          }) {
            const {
              texts,
              activity,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const {
              processing,
              actions
            } = (0, _useForm.useForm)(toggleView);
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_header.SpecsHeader, null), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("div", null, output), _react.default.createElement(_footer.ManualFormFooter, {
              onSave: actions.onSave,
              onCancel: actions.onCancel,
              processing: processing
            })));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/manual/use-form
      **************************************************/

      ims.set('./activities/specs/manual/use-form', {
        hash: 56153088,
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
              activity.specs.revert();
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
        hash: 1688250580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _components = require("pragmate-ui/components");
          var _specs = require("../specs/specs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _objectiveField = require("../objective-field");
          var _header = require("../../header");
          function SpokenActivity() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.save({
                [name]: value
              });
            };
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: onSave,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.Specs, null),
                manual: React.createElement(_manual.ManualMaterialForm, {
                  toggleView: toggleView
                })
              },
              placeholder: React.createElement(_empty.EmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
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
        hash: 1165703704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
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
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement("div", {
              className: "internal-breadcrumb "
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: onBack
            }, _react.default.createElement(_icons.Icon, {
              icon: "backArrow",
              className: "circle"
            }), _react.default.createElement(_icons2.AppIcon, {
              icon: "module"
            }), _react.default.createElement("span", null, globalTexts.actions.back, " ", texts.activities.module)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
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
        hash: 3218830360,
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
        hash: 1976004770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              editData
            } = (0, _context.useActivityContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [picture, setPicture] = _react.default.useState({
              src: activity.picture,
              date: Date.now()
            });
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const cls = `header-activity__container header-activity__container--${activity.type}`;
            const onSave = async event => {
              const data = {
                title: event.target.value
              };
              await activity.save(data);
            };
            const onGenerate = notes => activity.generatePicture(notes);
            (0, _hooks.useBinder)([activity], () => setPicture({
              src: activity.picture,
              date: Date.now()
            }), 'image.generated');
            const pictureSrc = picture.src ? `${picture.src}?size=sm&${Date.now()}` : undefined;
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement("header", {
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
            }, _react.default.createElement(_ui.ContentEditable, {
              className: "inline-control",
              name: "title",
              as: "h3",
              onSave: onSave,
              content: activity.title,
              placeholder: texts.form.title
            })), _react.default.createElement("div", {
              className: "flex-container header__icons"
            }, _react.default.createElement(_language.ActivityLanguage, null), _react.default.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: activity.type
            }))), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
              show: showSuggestions,
              type: activity.type,
              onClose: toggleSuggestions
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1850849062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            const value = {
              store,
              activity,
              texts,
              values,
              setValues
            };
            return _react.default.createElement(_context.ActivityContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_components.ConditionalContainer, {
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
        hash: 1587417072,
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
              activity.set({
                language
              });
              await store.save();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9pY29ucyIsIl9tb2RhbCIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJpY29uIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsInRpdGxlIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNvbmZpcm0iLCJDb250cm9sIiwiQXBwSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93IiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwidXBsb2FkIiwiYWRkIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5Iiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9sYW5ndWFnZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE9BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFdBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLGVBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE9BQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVVLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVYsUUFBQSxDQUFBVyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdoQixLQUFLLENBQUNpQixRQUFRLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLEVBQUUsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xGLE1BQU1DLFVBQVUsR0FBR0wsSUFBSSxJQUFJQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4QyxNQUFNTSxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JB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