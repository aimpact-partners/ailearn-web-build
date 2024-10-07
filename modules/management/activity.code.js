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
        hash: 388432730,
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
              texts: {
                contentTheory: texts
              },
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
              console.log(30, type);
              return _react.default.createElement("div", {
                className: "activity__audio"
              }, _react.default.createElement("h5", null, texts.materials[type]), _react.default.createElement(_ui.AudioPlayer, {
                url: audios[type].url
              }));
            };
            if (audios) {
              const items = Object.keys(audios);
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
                className: "list-unstyled",
                items: items,
                control: Item,
                container: "div"
              }));
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50Iiwib25DcmVhdGUiLCJkZWZhdWx0IiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInRpdGxlIiwiQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwidXBsb2FkIiwib25DbGljayIsImFkZCIsIkVtcHR5IiwiX2FjdGl2aXR5Q29udGVudCIsIl9tYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJzdG9yZSIsImdsb2JhbFRleHRzIiwiTWF0ZXJpYWxzVmlldyIsIl9mb3JtIiwiX3JlZmluYW1lbnQiLCJfbWFya2Rvd24iLCJBcnRpY2xlVGFiIiwib25DbG9zZSIsIm1hdGVyaWFsVGV4dHMiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZ2dsZU1vZGFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uR2VuZXJhdGUiLCJub3RlcyIsImRhdGEiLCJnZW5lcmF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwib25Db25zdW1lIiwib25DbGlja0NhbmNlbCIsIk1hcmtkb3duIiwiYm9yZGVyZWQiLCJlZGl0IiwiRm9ybSIsIlRleHRhcmVhIiwiZm9ybSIsImNhbmNlbCIsIlJlZmluZW1lbnRNb2RhbCIsInNob3ciLCJyZXF1aXJlZCIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsImdlbmVyYXRlQXVkaW8iLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQUlCdXR0b24iLCJQcm9jZXNzQ29udGFpbmVyIiwiRW1wdHlNYXRlcmlhbCIsIm9uTWFudWFsIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsImRpc2FibGVkIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl92aWV3IiwidHJ1bmNhdGVUZXh0IiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiTWF0ZXJpYWxMaXN0IiwiTWF0ZXJpYWxzRm9ybSIsIl9pY29ucyIsIkljb25CdXR0b24iLCJfbW9kYWwiLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJ1cGRhdGVkIiwib25Db25maXJtIiwib25Nb2RhbENhbmNlbCIsInNldCIsIm9uU3VibWl0IiwidGV4dGFyZWEiLCJDb25maXJtTW9kYWwiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwiTWF0ZXJpYWxQYW5lIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwib25EZWxldGUiLCJyZW1vdmUiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW8iLCJwcm9wZXJ0aWVzIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJ0eXBlcyIsImZvckVhY2giLCJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJyZWZpbmVtZW50IiwiRGViYXRlQWN0aXZpdHkiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImJ0bkNvbmZpcm0iLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJhdHRycyIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJtb2RlbCIsInNob3dSZWxhdGVkIiwib3duZXIiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwicmVmaW5lIiwiZGVzY3JpcGN0aW9uIiwiX3F1ZXN0aW9ucyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJyZWYiLCJ1c2VSZWYiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImluZGV4IiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2xvYmFsVGhpcyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJtdWx0aXBsZUNob2ljZSIsImFkZEl0ZW0iLCJ1c2VEeW5hbWljTGlzdENvbnRleHQiLCJhZGRRdWVzdGlvbiIsIkR5bmFtaWNBbnN3ZXJzRm9vdGVyIiwib25BZGQiLCJzaG93ZWQiLCJhZGRBbnN3ZXIiLCJEeW5hbWljIiwiX2l0ZW0iLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJEeW5hbWljUXVlc3Rpb25BbnN3ZXJJdGVtIiwiX3VzZUlucHV0IiwicHJvcHMiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwiSW5wdXQiLCJtYXJrQ29ycmVjdCIsImRlbGV0ZSIsIkR5bmFtaWNIZWFkZXIiLCJyZXNwb25zZSIsInJlbGF0ZWQiLCJjb3JyZWN0X2Fuc3dlciIsInNldFRpbWVvdXQiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm1vZGFsUXVlc3Rpb25zIiwicmVmcyIsImZvY3VzIiwicXVlcnlTZWxlY3RvciIsInRyaW0iLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwiX3F1ZXN0aW9uIiwiX2FjdGlvbnMiLCJkZWZhdWx0VmFsdWUiLCJkcmFnZ2FibGUiLCJEeW5hbWljUXVlc3Rpb25JdGVtIiwiX2Fuc3dlcnMiLCJfY29yZSIsInByb2Nlc3NPcHRpb25zIiwiY29ycmVjdEluZGV4Iiwib3B0aW9uIiwic2V0QW5zd2VycyIsImdldEFuc3dlciIsImNvcnJlY3RBbnN3ZXJJbmRleCIsImZpbmRJbmRleCIsImFuc3dlciIsInVuZGVmaW5lZCIsIm5ld1ZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uR2VuZXJhdGVBbnN3ZXJzIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJtb2RhbEFuc3dlcnMiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVwZGF0ZUVycm9ycyIsImlkIiwiaW5kZXBlbmRlbnQiLCJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwicmV2ZXJ0IiwiTXVsdGlwbGVDaG9pY2VTcGVjcyIsIlF1ZXN0aW9uQW5zd2VyIiwiSWNvbiIsImV4cG9ydHMiLCJjaGlsZHJlbiIsInByZXBhcmVkIiwiX2RlbGV0ZU1vZGFsIiwiZWRpdGlvbiIsInNldEVkaXRpb24iLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwidG9nZ2xlUmVvcmRlciIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsIk11bHRpcGxlQ2hvaWNlTGlzdCIsInJlb3JkZXJpbmciLCJ0b2dnbGUiLCJfZnJhbWVyTW90aW9uIiwiX3F1ZXN0aW9uSXRlbUxpc3QiLCJzZXRPcmRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiY2FsbGJhY2siLCJSZW9yZGVyIiwiR3JvdXAiLCJRdWVzdGlvbkl0ZW1MaXN0IiwiYXMiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIkNvbnRyb2wiLCJvblRvZ2dsZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZW1wdHlPcHRpb25zIiwib2JqZWN0aXZlIiwiQWN0aXZpdHlCYXNlU3BlYyIsImh0bWxGb3IiLCJCYXNlU3Vic3BlYyIsIl9iYXNlU3Vic3BlYyIsIl9keW5hbWljU3BlYyIsIkR5bmFtaWNMYWJlbENvbnRhaW5lciIsInNldFRvZ2dsZSIsImZpZWxkTmFtZSIsInN0cnVjdHVyZSIsImZpZWxkcyIsIkR5bmFtaWNJdGVtU3BlYyIsIl9keW5hbWljIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiRHluYW1pY0NvbnRhaW5lciIsIk1hbnVhbEZvcm1Gb290ZXIiLCJfZHluYW1pY0ZpZWxkIiwiZmllbGRUeXBlcyIsImlucHV0IiwicmFkaW8iLCJSYWRpbyIsImNoZWNrYm94IiwiQ2hlY2tib3giLCJzZWxlY3QiLCJTZWxlY3QiLCJhcnJheSIsImhhc093blByb3BlcnR5Iiwid2FybiIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiRmllbGQiLCJEeW5hbWljRmllbGQiLCJoYW5kbGVDYW5jZWwiLCJfZHluYW1pY0xhYmVsIiwiX2Jhc2VTcGVjIiwiZ2V0UHJvcGVydGllcyIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQ2FuY2VsQ2hhbmdlc01vZGFsIiwiY2xlYXJEYXRhIiwiZWRpdEFjdGl2aXR5IiwibW9kYWwiLCJjbGVhciIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiY2xvc2VCYWNrZHJvcCIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkFwcEljb24iLCJtb2R1bGUiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiaSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsImVuIiwiZXMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2NoYXJhY3RlclRhbGsiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsIkltYWdlIiwiYWx0IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L19faW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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LEVBQUMsU0FBUztjQUFDRyxPQUFPLEVBQUV6QyxNQUFNO2NBQUVnSCxRQUFRLEVBQUV4QjtZQUFRLEdBQzNEeEMsS0FBSyxDQUFDQyxXQUFXLENBQUNWLE9BQU8sQ0FBQ25DLElBQUksQ0FDdkIsQ0FDSixDQUNBLENBRVIsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBeUIsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFLLFdBQUEsR0FBQUwsT0FBQTtVQUVNLFNBQVVpZSxVQUFVQSxDQUFDO1lBQzFCN0MsS0FBSyxHQUFHLEtBQUs7WUFDYmhULFFBQVE7WUFDUmlOO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRWxSLE1BQU07Y0FBRTRQLFFBQVE7Y0FBRXBULEtBQUs7Y0FBRXlELEtBQUs7Y0FBRXhEO1lBQVEsQ0FBRSxHQUFHLElBQUFWLFFBQUEsQ0FBQVcsa0JBQWtCLEdBQUU7WUFFekUsTUFBTU8sTUFBTSxHQUFHLE1BQU1pRSxLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQytNLGVBQWUsRUFBRTtjQUN2Qjs7Ozs7Y0FNQSxJQUFJLENBQUNnSixLQUFLLEVBQUU7Z0JBQ1gsTUFBTWhYLEtBQUssQ0FBQzBILEtBQUssQ0FBQzdKLFVBQVUsQ0FBQ2lPLEdBQUcsQ0FBQytDLEdBQUcsQ0FBQ3JTLFFBQVEsQ0FBQ21TLEVBQUUsQ0FBQyxDQUFDMUosR0FBRyxDQUFDbEYsTUFBTSxDQUFDO2dCQUM3RCxNQUFNdkQsUUFBUSxDQUFDeUksR0FBRyxDQUFDbEYsTUFBTSxDQUFDO2dCQUMxQkMsS0FBSyxDQUFDNUMsSUFBSSxFQUFFO2dCQUNadVMsUUFBUSxDQUFDO2tCQUFFN0ssT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQzs7Y0FHN0IsSUFBSW1NLFFBQVEsRUFBRUEsUUFBUSxFQUFFO1lBQ3pCLENBQUM7WUFDRCxNQUFNMUosS0FBSyxHQUFHO2NBQUV2RCxRQUFRLEVBQUUsQ0FBQ2pFLE1BQU0sQ0FBQytFLE9BQU8sSUFBSWQsUUFBUTtjQUFFdkUsT0FBTyxFQUFFekM7WUFBTSxDQUFFO1lBRXhFLE9BQ0M2QixNQUFBLENBQUFHLE9BQUEsQ0FBQXZCLGFBQUEsQ0FBQ3hCLFdBQUEsQ0FBQW1ELE1BQU07Y0FBQ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLaUk7WUFBSyxHQUNqQ3ZILEtBQUssQ0FBQ0MsV0FBVyxDQUFDVixPQUFPLENBQUNuQyxJQUFJLENBQ3ZCO1VBRVgiLCJpZ25vcmVMaXN0IjpbXX0=