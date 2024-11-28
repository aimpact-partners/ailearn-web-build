System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.2.10/modules/management/refinament.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.7/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/collapsible", "@aimpact/ailearn-app@0.2.10/components/dynamic-field", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.2.10/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_2 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_3 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_6 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_7 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_8 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp0210ModulesManagementRefinamentCode) {
      dependency_9 = _aimpactAilearnApp0210ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_11 = _pragmateUi100Beta7PerfectScrollbar;
    }, function (_pragmateUi100Beta7List) {
      dependency_12 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_13 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7DynamicList) {
      dependency_15 = _pragmateUi100Beta7DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_16 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_17 = _pragmateUi100Beta7FormReactSelect;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_19 = _pragmateUi100Beta7Collapsible;
    }, function (_aimpactAilearnApp0210ComponentsDynamicField) {
      dependency_20 = _aimpactAilearnApp0210ComponentsDynamicField;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_21 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_22 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0210ComponentsCoverImageCode) {
      dependency_23 = _aimpactAilearnApp0210ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta7Image) {
      dependency_24 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/components/ui', dependency_2], ['pragmate-ui/components', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/empty', dependency_5], ['@aimpact/ailearn-app/components/icons', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/perfect-scrollbar', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/dynamic-list', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@aimpact/ailearn-app/main-layout.widget', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/cover-image.code', dependency_23], ['pragmate-ui/image', dependency_24]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9pY29ucyIsIl9tb2RhbCIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJpY29uIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsInRpdGxlIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNvbmZpcm0iLCJDb250cm9sIiwiQXBwSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93IiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwidXBsb2FkIiwiYWRkIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5Iiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS1hcnRpY2xlLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3VzZS1tYXRlcmlhbHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9sYW5ndWFnZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxHQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxXQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxlQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxPQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVVSxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFWLFFBQUEsQ0FBQVcsa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTU0sTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUMsYUFBYSxFQUFFO2dCQUFF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