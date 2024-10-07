System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.6/tabs", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.1.13/components/dynamic-field", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.13/components/cover-image.code", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_3 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_6 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_7 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_9 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_10 = _pragmateUi100Beta6Tabs;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6List) {
      dependency_12 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_13 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_14 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_15 = _pragmateUi100Beta6DynamicList;
    }, function (_beyondJsKernel019Core) {
      dependency_16 = _beyondJsKernel019Core;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_17 = _pragmateUi100Beta6FormReactSelect;
    }, function (_framerMotion2) {
      dependency_18 = _framerMotion2;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_19 = _pragmateUi100Beta6Collapsible;
    }, function (_aimpactAilearnApp0113ComponentsDynamicField) {
      dependency_20 = _aimpactAilearnApp0113ComponentsDynamicField;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_24 = _aimpactAilearnApp0113ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta6Image) {
      dependency_25 = _pragmateUi100Beta6Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_9], ['pragmate-ui/tabs', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/perfect-scrollbar', dependency_14], ['pragmate-ui/dynamic-list', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 856839372,
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
            console.log(0.2, finalView, view, activity.specs.empty());
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
        hash: 2263597652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _react = require("react");
          var _specs = require("../specs/specs");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function ActivityContent({
            toggleView
          }) {
            const {
              texts
            } = (0, _context.useActivityContext)();
            const onCreate = () => {
              toggleView('materials');
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_specs.Specs, null), _react.default.createElement("section", null, _react.default.createElement("header", {
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
            }, texts.contentTheory.empty.actions.add))), _react.default.createElement(_empty.Empty, {
              className: "activity__empty"
            }, _react.default.createElement("h6", null, texts.contentTheory.empty.title), _react.default.createElement("span", null, texts.contentTheory.empty.description), _react.default.createElement("div", {
              className: "actions empty__actions"
            }))));
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
        hash: 3821785173,
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
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
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
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const [manual, setManual] = _react.default.useState(false);
            const toggleManual = () => setManual(!manual);
            const onChange = event => {
              setContent(event.target.value);
            };
            const onGenerate = notes => {
              try {
                const data = activity.materials.generate('article', notes);
                setContent(data);
              } catch (e) {
                console.log(e);
              }
            };
            const onConsume = () => {};
            const onClickCancel = () => {
              toggleManual();
            };
            if (!manual && activity.materials.article) {
              return _react.default.createElement("div", {
                className: "tab-container"
              }, _react.default.createElement("section", {
                className: "material__content"
              }, _react.default.createElement(_markdown.Markdown, {
                content: activity.materials.article
              })), _react.default.createElement("div", {
                className: "mt-30 activity-specs-actions flex-container flex-end material__actions"
              }, _react.default.createElement(_components.Button, {
                icon: "edit",
                onClick: toggleManual,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.edit)));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "tab-container"
            }, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content tab-cntent"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: content,
              placeholder: materialTexts.form.article.placeholder
            })), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary"
            }, globalTexts.actions.save))), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              onClose: toggleModal,
              onConsume: onConsume,
              onGenerate: onGenerate,
              description: "una descriptcion"
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audio
      ***********************************************************/

      ims.set('./activities/content-theory/materials/audio', {
        hash: 383609663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _react = require("react");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          function ContentTheoryAudio({}) {
            const {
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [audios, setAudios] = _react.default.useState(activity.materials.audios);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            const onGenerate = async () => {
              try {
                setFetching(true);
                await activity.materials.generateAudio();
                setAudios(activity.materials.audios);
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
            const Item = ({
              item: type
            }) => {
              const {
                activity
              } = (0, _context.useActivityContext)();
              const url = activity.materials.audios[type]?.url;
              if (!url) return null;
              return _react.default.createElement("div", {
                className: "activity__audio"
              }, _react.default.createElement("h5", null, texts.materials[type]), _react.default.createElement(_ui.AudioPlayer, {
                url: audios[type].url
              }));
            };
            console.log(8);
            if (audios) {
              const items = Object.keys(audios);
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
                className: "list-unstyled",
                items: items,
                control: Item,
                container: "div"
              }));
            }
            console.log(9);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "activity__actions"
            }, _react.default.createElement(_ui.AIButton, {
              onClick: onGenerate,
              variant: "primary"
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/empty
      ***********************************************************/

      ims.set('./activities/content-theory/materials/empty', {
        hash: 3578277109,
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
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/index
      ***********************************************************/

      ims.set('./activities/content-theory/materials/index', {
        hash: 1902402623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsView = MaterialsView;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _view = require("./view");
          var _list = require("./list");
          function truncateText(text, maxLength) {
            return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
          }
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
            })), showModal && _react.default.createElement(_view.MaterialsForm, {
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
        hash: 3127584492,
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
              setShowModal(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, activity.materials.article && _react.default.createElement("div", {
              className: "attachments__container"
            }, _react.default.createElement("div", {
              className: "attachment__card card--article",
              onClick: onCreate
            }, truncateText(activity.materials.article, 80), _react.default.createElement(_icons.IconButton, {
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
        hash: 3651623107,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: name,
              value: content,
              placeholder: texts.manual[name].textarea
            })), _react.default.createElement("footer", {
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
        hash: 3223726563,
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
              console.log('listening in pane', activity.materials[name]);
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
            return _react.default.createElement("div", {
              className: "tab-container"
            }, _react.default.createElement("section", {
              className: "material__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: material
            })), _react.default.createElement("div", {
              className: "mt-30 gap-05 activity-specs-actions flex-container flex-end material__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onDelete,
              icon: "delete",
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.remove), _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.edit)));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/view
      **********************************************************/

      ims.set('./activities/content-theory/materials/view', {
        hash: 372851561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsForm = MaterialsForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _tabs = require("pragmate-ui/tabs");
          var _article = require("./article");
          var _pane = require("./pane");
          var _audio = require("./audio");
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
            const [content, setContent] = _react.default.useState(values.materials?.article ?? '');
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const [properties] = _react.default.useState();
            if (!show) return null;
            const onChange = event => {
              setContent(event.target.value);
            };
            const onGenerate = notes => {
              try {
                const data = activity.materials.generate('article', notes);
                setContent(data);
              } catch (e) {
                console.log(e);
              }
            };
            const onConsume = () => {};
            const tabs = [];
            tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "article-attachment"
            }, materialTexts.types.article));
            if (activity.materials.article) {
              Object.keys(materialTexts.types).forEach(type => {
                if (type === 'article') return;
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: type
                }, materialTexts.types[type]));
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.Modal, {
              show: true,
              className: "activity-modal__form",
              onClose: onClose
            }, _react.default.createElement("header", {
              className: "activity-modal__form-header"
            }, _react.default.createElement("h5", null, materialTexts.title), _react.default.createElement(_ui.AIButton, {
              title: globalTexts.actions.generate,
              onClick: toggleModal,
              icon: "file",
              variant: "link"
            }, globalTexts.actions.generate)), _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "content-theory__tabs ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, _react.default.createElement(_article.ArticleTab, {
              onClose: onClose
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            }), _react.default.createElement(_audio.ContentTheoryAudio, null))), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              title: materialTexts.refinement.title,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onConsume: onConsume,
              onGenerate: onGenerate
            })));
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

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/empty
      **************************************************/

      ims.set('./activities/multiple-choice/empty', {
        hash: 3172237545,
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
              disabled: !activity.prepared || disabled
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
        hash: 2693002642,
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
          // import { SaveButton } from '../../../../save-button';

          function MultipleChoiceManualForm({
            onCancel,
            changeView
          }) {
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
                return;
              }
              await activity.save();
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_header.SpecsHeader, null), _react.default.createElement("section", {
              ref: ref,
              className: "activity__form activity__materials-form"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: errors.length ? texts.errors.wrongQuestions : ''
            }), _react.default.createElement(_questions.DynamicQuestionsForm, null), _react.default.createElement("footer", {
              className: "section-actions__container border-top actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !!errors.length
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
        hash: 654092169,
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
              texts: {
                multipleChoice: texts
              },
              activity
            } = (0, _context.useActivityContext)();
            const cls = `dynamic__icon selectable${correct ? ' dynamic__icon--correct' : ''}`;
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
              // activity.specs.set({ questions: values });
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
              className: "drag-bullet-point",
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
        hash: 1340395178,
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
        hash: 2547975199,
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
          function DynamicQuestionsForm() {
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
              onChange: onChange,
              specs: {
                setFetching
              }
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
        hash: 1327494961,
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
              console.log(33, data);
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
              disabled: !value || value === '',
              onClick: generateAnswers,
              title: texts.actions.generateAnswers
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "drag-bullet-point",
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
        hash: 1743411968,
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
          var _objectiveField = require("../objective-field");
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
            })), React.createElement(_objectiveField.ObjectiveField, null), React.createElement(_components.ConditionalContainer, {
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
        hash: 1851586303,
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
        hash: 73459062,
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
            }, globalTexts.actions.generate))), _react.default.createElement("span", null, texts.activities.empty.description), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
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
        hash: 3877757081,
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
          function MaterialsSuggestionsModal({
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
            const [notes, setNotes] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                setFetching(true);
                await activity.materials.generate(type, notes);
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
        hash: 1037584266,
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
            const languages = {
              en: '/assets/english.png',
              es: '/assets/spanish.png'
            };
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              entity: "activity",
              picture: `${picture.src}?size=sm&${Date.now()}`,
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
        hash: 1686428413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _contentTheory = require("./activities/content-theory");
          var _debate = require("./activities/debate");
          var _characterTalk = require("./activities/character-talk");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwiY2xhc3NOYW1lIiwiYWN0aXZpdGllcyIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsInBsYWNlaG9sZGVyIiwiY29udGVudCIsIk9iamVjdGl2ZUZpZWxkIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiU3BlY3MiLCJtYW51YWwiLCJNYW51YWxNYXRlcmlhbEZvcm0iLCJFbXB0eVNwZWNzIiwidHlwZSIsIl9yZWFjdCIsIkFjdGl2aXR5Q29udGVudCIsIm9uQ3JlYXRlIiwiZGVmYXVsdCIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJ0aXRsZSIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50IiwiYWN0aW9ucyIsInVwbG9hZCIsIm9uQ2xpY2siLCJhZGQiLCJFbXB0eSIsIl9hY3Rpdml0eUNvbnRlbnQiLCJfbWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidmFsdWVzIiwic3RvcmUiLCJnbG9iYWxUZXh0cyIsIk1hdGVyaWFsc1ZpZXciLCJfZm9ybSIsIl9yZWZpbmFtZW50IiwiX21hcmtkb3duIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwic2V0Q29udGVudCIsImFydGljbGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ0b2dnbGVNb2RhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJlIiwib25Db25zdW1lIiwib25DbGlja0NhbmNlbCIsIk1hcmtkb3duIiwiYm9yZGVyZWQiLCJlZGl0IiwiRm9ybSIsIlRleHRhcmVhIiwiZm9ybSIsImNhbmNlbCIsIlJlZmluZW1lbnRNb2RhbCIsInNob3ciLCJyZXF1aXJlZCIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsImdlbmVyYXRlQXVkaW8iLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJQcm9jZXNzQ29udGFpbmVyIiwiRW1wdHlNYXRlcmlhbCIsIm9uTWFudWFsIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsImRpc2FibGVkIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl92aWV3IiwidHJ1bmNhdGVUZXh0IiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiTWF0ZXJpYWxMaXN0IiwiTWF0ZXJpYWxzRm9ybSIsIl9pY29ucyIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJ1cGRhdGVkIiwib25Db25maXJtIiwib25Nb2RhbENhbmNlbCIsInNldCIsIm9uU3VibWl0IiwidGV4dGFyZWEiLCJDb25maXJtTW9kYWwiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwiTWF0ZXJpYWxQYW5lIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwib25EZWxldGUiLCJyZW1vdmUiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW8iLCJwcm9wZXJ0aWVzIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJ0eXBlcyIsImZvckVhY2giLCJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJyZWZpbmVtZW50IiwiRGViYXRlQWN0aXZpdHkiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImJ0bkNvbmZpcm0iLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJhdHRycyIsInByZXBhcmVkIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnbG9iYWxUaGlzIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfaXRlbSIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiZGVsZXRlIiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwic2V0VGltZW91dCIsImdlbmVyYXRlUXVlc3Rpb25zIiwibW9kYWxRdWVzdGlvbnMiLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwidW5kZWZpbmVkIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwiZXhwb3J0cyIsImNoaWxkcmVuIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiY2FsbGJhY2siLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiYXMiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIkNvbnRyb2wiLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJfZHluYW1pY0ZpZWxkIiwiZmllbGRUeXBlcyIsImlucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsImhhc093blByb3BlcnR5Iiwid2FybiIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiRmllbGQiLCJEeW5hbWljRmllbGQiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwibW9kYWwiLCJjbGVhciIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiY2xvc2VCYWNrZHJvcCIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkFwcEljb24iLCJtb2R1bGUiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiaSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsImVuIiwiZXMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2NoYXJhY3RlclRhbGsiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsIkltYWdlIiwiYWx0IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L19faW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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