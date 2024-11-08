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
        hash: 3460248883,
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
              console.log('cambia?', activity.materials.article);
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
        hash: 2741648706,
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
            const has = !!activity.materials.audios[type];
            const onGenerateItem = event => {
              generateAudio([event.currentTarget.value]);
            };
            const onDelete = () => {
              return deleteAudio([type]);
            };
            const canBeCreated = activity.materials[type]?.length < 4000;
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
        hash: 2582575527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsHeaderModal = MaterialsHeaderModal;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../../context");
          function MaterialsHeaderModal({
            currentTab,
            toggleModal
          }) {
            const {
              texts,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity-modal__form-header"
            }, _react.default.createElement("h5", null, materialTexts.title), _react.default.createElement(_ui.AIButton, {
              title: globalTexts.actions.generate,
              disabled: currentTab === 'audios' || store.fetching,
              onClick: toggleModal,
              icon: "file",
              variant: "link"
            }, globalTexts.actions.generate)));
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
        hash: 3526663418,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9pY29ucyIsIl9tb2RhbCIsIkNvbmZpcm1CdXR0b24iLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJpY29uIiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsInRpdGxlIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNvbmZpcm0iLCJDb250cm9sIiwiQXBwSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJidG5Db25maXJtIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjYW5jZWwiLCJzaG93IiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX21hcmtkb3duIiwiX2VtcHR5QXJ0aWNsZSIsIl9jb25maXJtQWN0aW9uIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIm9uRGVsZXRlIiwiY2xlYXIiLCJvbkNsaWNrQ2FuY2VsIiwic2V0IiwiRW1wdHlBcnRpY2xlTWF0ZXJpYWwiLCJvbk1hbnVhbCIsIk1hcmtkb3duIiwiZWRpdCIsImRlbGV0ZSIsImNscyIsImNsc0NoYXJhY3RlcnMiLCJsZW5ndGgiLCJGb3JtIiwib25TdWJtaXQiLCJUZXh0YXJlYSIsImZvcm0iLCJjaGFyYWN0ZXJzIiwiX3VzZU1hdGVyaWFscyIsIkNvbnRlbnRUaGVvcnlFbXB0eUF1ZGlvIiwiZ2VuZXJhdGVBdWRpbyIsInVzZU1hdGVyaWFsQWN0aW9ucyIsIm9uR2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9pdGVtIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvSXRlbSIsImRlbGV0ZUF1ZGlvIiwiaGFzIiwib25HZW5lcmF0ZUl0ZW0iLCJjYW5CZUNyZWF0ZWQiLCJ0eXBlcyIsImF1ZGlvIiwibm9BdWRpbyIsIm1heExlbmd0aCIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50TW9kYWwiLCJyZXF1aXJlZCIsInJlZmluZW1lbnQiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl90YWJzIiwiX2FydGljbGUiLCJfcGFuZSIsIl9hdWRpb3MiLCJNYXRlcmlhbHNGb3JtIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsIm9uQ29uc3VtZSIsInRhYnMiLCJkYXRhc2V0IiwicHVzaCIsIlRhYiIsImtleSIsImZvckVhY2giLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNYXRlcmlhbHNIZWFkZXJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJvbkNyZWF0ZSIsInVwbG9hZCIsImFkZCIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsIkljb25CdXR0b24iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJvbk1vZGFsQ2FuY2VsIiwidGV4dGFyZWEiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwidW5kZWZpbmVkIiwiZSIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiX2NvbnRleHQyIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwiaXRlbSIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJuZXdWYWx1ZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsIlByb2Nlc3NDb250YWluZXIiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX2FjdGl2aXR5TW9kYWwiLCJfYnJlYWRjcnVtYiIsIl9jb3ZlckltYWdlIiwiX2xhbmd1YWdlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZVNyYyIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImVudGl0eSIsIkFjdGl2aXR5TGFuZ3VhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hhcmFjdGVyVGFsayIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJ0ZXh0c1JlYWR5Iiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9fX2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FjdGl2aXR5LWNvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvdXNlLW1hdGVyaWFscy50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9jb250ZXh0LnRzIiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2xhbmd1YWdlLnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxHQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxXQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxlQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxPQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVVSxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFWLFFBQUEsQ0FBQVcsa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFD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