System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.2.1/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.2.1/components/icons", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.2.1/modules/management/refinament.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.2.1/components/dynamic-field", "@aimpact/ailearn-app@0.2.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.2.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_3 = _aimpactAilearnApp021ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_6 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_8 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp021ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp021ModulesManagementRefinamentCode;
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
    }, function (_aimpactAilearnApp021ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp021ComponentsDynamicField;
    }, function (_aimpactAilearnApp021MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp021MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp021ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp021ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta6Image) {
      dependency_25 = _pragmateUi100Beta6Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/perfect-scrollbar', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/dynamic-list', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['framer-motion', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/modules/management/activity.code');
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

      /***************************************************
      INTERNAL MODULE: ./activities/content-theory/__index
      ***************************************************/

      ims.set('./activities/content-theory/__index', {
        hash: 436030715,
        creator: function (require, exports) {
          // import * as React from 'react';
          // import { LanguageField } from '../../components/language-field';
          // import { ContentEditable } from '@aimpact/ailearn-app/components/ui';
          // import { useActivityContext } from '../../context';
          // import { EmptySpecs } from '../specs/empty';
          // import { ManualMaterialForm } from '../specs/manual';
          // import { ConditionalContainer } from 'pragmate-ui/components';
          // import { useBinder } from '@beyond-js/react-18-widgets/hooks';
          // import { ObjectiveField } from '../objective-field';
          // import { ActivityContent } from './activity-content';
          // import { MaterialsView } from './materials';
          // import { ActivityHeader } from '../../header';
          // export function ContentTheoryActivityWrapper() {
          // 	const { values, texts, activity } = useActivityContext();
          // 	const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
          // 	const [screen, setScreen] = React.useState('view');
          // 	const onSave = async ({ currentTarget: { name, value } }) => {
          // 		activity.save({ [name]: value });
          // 	};
          // 	const toggleView = view => {
          // 		if (view === 'specs' && activity.specs.empty()) {
          // 			setView('empty');
          // 			return;
          // 		}
          // 		setView(view);
          // 	};
          // 	const onListen = () => {
          // 		const view = activity.specs.empty() ? 'empty' : 'specs';
          // 		setView(view);
          // 	};
          // 	useBinder([activity], onListen, 'activity.saved');
          // 	useBinder([activity.specs], onListen, 'specs.cleaned');
          // 	return (
          // 		<>
          // 			<ConditionalContainer
          // 				condition={screen}
          // 				options={{
          // 					view: <ContentTheoryActivityView toggleScreen={setScreen} />,
          // 					materials: <MaterialsView toggleView={toggleView} toggleScreen={setScreen} />
          // 				}}
          // 				placeholder={<EmptySpecs name={activity.type} toggleView={toggleView} />}
          // 			/>
          // 		</>
          // 	);
          // }
          "use strict";
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
        hash: 4226290906,
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
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
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
        hash: 3122735004,
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
            const processOptions = options => {
              const correctIndex = props.value.correctAnswer;
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
              const options = await activity.specs.generateAnswers({
                notes,
                question: value
              });
              const data = [...values.specs.questions];
              setFetching(true);
              globalThis.setTimeout(() => {
                data[props.index].options = options;
                activity.specs.set({
                  questions: data
                });
                setAnswers(processOptions(options));
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
        hash: 1628285344,
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
        hash: 3313503426,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9pY29ucyIsIl9tb2RhbCIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJpY29uIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsInRpdGxlIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNvbmZpcm0iLCJDb250cm9sIiwiQXBwSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93IiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25EZWxldGUiLCJjbGVhciIsIm9uQ2xpY2tDYW5jZWwiLCJzZXQiLCJFbXB0eUFydGljbGVNYXRlcmlhbCIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJlZGl0IiwiZGVsZXRlIiwiY2xzIiwiY2xzQ2hhcmFjdGVycyIsImxlbmd0aCIsIkZvcm0iLCJvblN1Ym1pdCIsIlRleHRhcmVhIiwiZm9ybSIsImNoYXJhY3RlcnMiLCJfdXNlTWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwidXNlTWF0ZXJpYWxBY3Rpb25zIiwib25HZW5lcmF0ZSIsIkVtcHR5Q2FyZCIsInRleHQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX2l0ZW0iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJDb250ZW50VGhlb3J5QXVkaW9JdGVtIiwiZGVsZXRlQXVkaW8iLCJoYXMiLCJvbkdlbmVyYXRlSXRlbSIsImNhbkJlQ3JlYXRlZCIsInR5cGVzIiwiYXVkaW8iLCJub0F1ZGlvIiwibWF4TGVuZ3RoIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJleHBvcnRzIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW9WaWV3IiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJnZW5lcmF0ZUFydGljbGUiLCJ0b2dnbGVNb2RhbCIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwicmVmaW5lbWVudCIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiZ2VuZXJhdG9yIiwib25Db25zdW1lIiwidGFicyIsImRhdGFzZXQiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIm9uQ3JlYXRlIiwidXBsb2FkIiwiYWRkIiwiTWF0ZXJpYWxMaXN0IiwidHJ1bmNhdGVUZXh0Iiwic3Vic3RyaW5nIiwiSWNvbkJ1dHRvbiIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5Iiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9fX2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FjdGl2aXR5LWNvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2xhbmd1YWdlLnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxHQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxXQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxlQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxPQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVVSxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFWLFFBQUEsQ0FBQVcsa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFD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