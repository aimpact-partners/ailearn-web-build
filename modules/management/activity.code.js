System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.2.15/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.2.15/components/icons", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.2.15/modules/management/refinament.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/collapsible", "@aimpact/ailearn-app@0.2.15/components/dynamic-field", "@aimpact/ailearn-app@0.2.15/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.2.15/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0215ComponentsUi) {
      dependency_2 = _aimpactAilearnApp0215ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_aimpactAilearnApp0215ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0215ComponentsIcons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_9 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp0215ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp0215ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_12 = _pragmateUi100Beta7PerfectScrollbar;
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
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_20 = _pragmateUi100Beta7Collapsible;
    }, function (_aimpactAilearnApp0215ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp0215ComponentsDynamicField;
    }, function (_aimpactAilearnApp0215MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp0215MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0215ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0215ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta7Image) {
      dependency_25 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.15"], ["@aimpact/ailearn-app", "0.2.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.15/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/ui', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/components', dependency_4], ['react', dependency_5], ['pragmate-ui/empty', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/dynamic-list', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['framer-motion', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.15/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 2248009439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _objectiveField = require("../objective-field");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _specs = require("../specs/specs");
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
        hash: 2010941335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _objectiveField = require("../objective-field");
          var _empty = require("../specs/empty");
          var _manual = require("../specs/manual");
          var _specs = require("../specs/specs");
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
        hash: 3972374419,
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
              console.log(9, activity.specs.getProperties());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9jb250ZXh0IiwiX2hlYWRlciIsIl9vYmplY3RpdmVGaWVsZCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfc3BlY3MiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsImZpbmFsVmlldyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwiY2xhc3NOYW1lIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsInBsYWNlaG9sZGVyIiwiY29udGVudCIsIk9iamVjdGl2ZUZpZWxkIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiU3BlY3MiLCJtYW51YWwiLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJFbXB0eVNwZWNzIiwidHlwZSIsIl9yZWFjdCIsIkFjdGl2aXR5Q29udGVudCIsImRlZmF1bHQiLCJfaWNvbnMiLCJfbW9kYWwiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwiaWNvbiIsInRvb2x0aXAiLCJjYWxsYmFjayIsImFzIiwiYm9yZGVyZWQiLCJ0aXRsZSIsImFjdGlvbiIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwibW9kYWwiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkFwcEljb25CdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwiYnRuQ29uZmlybSIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwidXBsb2FkIiwiYWRkIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsImdldFByb3BlcnRpZXMiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5Iiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9sYW5ndWFnZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLGVBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE9BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUVNLFNBQVVVLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQVIsUUFBQSxDQUFBUyxrQkFBa0IsR0FBRTtZQUNoRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdaLEtBQUssQ0FBQ2EsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTU0sTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUMsYUFBYSxFQUFFO2dCQUFF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