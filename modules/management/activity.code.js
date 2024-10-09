System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/dynamic-list", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.1.13/components/dynamic-field", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.13/components/cover-image.code", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta6Form) {
      dependency_7 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_8 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_10 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_12 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_13 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_14 = _pragmateUi100Beta6Tabs;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/form', dependency_7], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/perfect-scrollbar', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/dynamic-list', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
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
        hash: 1879522228,
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
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          var _emptyArticle = require("./empty-article");
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
            const onConsume = () => {};
            const onDelete = async () => {
              activity.materials.clear();
              activity.save();
            };
            const onClickCancel = () => {
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
                className: "tab-container"
              }, _react.default.createElement(_perfectScrollbar.ScrollContainer, {
                className: "ds-drawer-scroll-container material__content",
                "data-perfect-scrollbar": "",
                "data-suppress-scroll-x": "true"
              }, _react.default.createElement(_markdown.Markdown, {
                content: activity.materials.article
              })), _react.default.createElement("footer", {
                className: " activity-modal__form-footer mt-30 activity-specs-actions flex-container flex-end material__actions"
              }, _react.default.createElement(_components.Button, {
                icon: "edit",
                onClick: toggleManual,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.edit), _react.default.createElement(_components.Button, {
                icon: "delete",
                onClick: onDelete,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.delete))));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "tab-container"
            }, _react.default.createElement(_perfectScrollbar.ScrollContainer, {
              className: "ds-drawer-scroll-container",
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content tab-cntent"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: content,
              placeholder: materialTexts.form.article.placeholder
            }))), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary"
            }, globalTexts.actions.save))));
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

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/empty-article
      *******************************************************************/

      ims.set('./activities/content-theory/materials/empty-article', {
        hash: 3447280164,
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
            const [showModal, setShowModal] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onGenerate = async notes => {
              try {
                const data = await activity.materials.generate('article', notes);
              } catch (e) {
                console.log(e);
              }
            };
            const disabled = {
              disabled: !activity.title
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
            })), showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              required: true,
              title: materialTexts.refinement.title,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onGenerate: onGenerate
            }));
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
        hash: 3752697023,
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
        hash: 1827353002,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const [updated, setUpdated] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            (0, _hooks.useBinder)([activity.materials], () => {
              setContent(activity.materials.article);
              setUpdated({});
            });
            if (!show) return null;
            const onChange = event => {
              setContent(event.target.value);
            };
            const onGenerate = async notes => {
              try {
                const data = await activity.materials.generate('article', notes);
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
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_article.ArticleTab, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9hY3Rpdml0eUNvbnRlbnQiLCJfbWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidmFsdWVzIiwic3RvcmUiLCJnbG9iYWxUZXh0cyIsIk1hdGVyaWFsc1ZpZXciLCJfZm9ybSIsIl9tYXJrZG93biIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX2VtcHR5QXJ0aWNsZSIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwibWF0ZXJpYWxUZXh0cyIsImNvbnRlbnRUaGVvcnkiLCJtYXRlcmlhbHMiLCJzZXRDb250ZW50IiwiYXJ0aWNsZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRvZ2dsZU1vZGFsIiwic2V0TWFudWFsIiwidG9nZ2xlTWFudWFsIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uQ29uc3VtZSIsIm9uRGVsZXRlIiwiY2xlYXIiLCJvbkNsaWNrQ2FuY2VsIiwiRW1wdHlBcnRpY2xlTWF0ZXJpYWwiLCJvbk1hbnVhbCIsIlNjcm9sbENvbnRhaW5lciIsIk1hcmtkb3duIiwiQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwiZWRpdCIsImRlbGV0ZSIsIkZvcm0iLCJUZXh0YXJlYSIsImZvcm0iLCJjYW5jZWwiLCJfbGlzdCIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhdWRpb3MiLCJzZXRBdWRpb3MiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVBdWRpbyIsImUiLCJjb25zb2xlIiwibG9nIiwiSXRlbSIsIml0ZW0iLCJ1cmwiLCJBdWRpb1BsYXllciIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsIkxpc3QiLCJjb250cm9sIiwiY29udGFpbmVyIiwiRW1wdHlDYXJkIiwidGV4dCIsInRpdGxlIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIlByb2Nlc3NDb250YWluZXIiLCJfcmVmaW5hbWVudCIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNldERhdGEiLCJub3RlcyIsImRhdGEiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsInNob3ciLCJyZXF1aXJlZCIsInJlZmluZW1lbnQiLCJFbXB0eU1hdGVyaWFsIiwiTWF0ZXJpYWxzU3VnZ2VzdGlvbnNNb2RhbCIsIl92aWV3IiwidHJ1bmNhdGVUZXh0IiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwib25DcmVhdGUiLCJ1cGxvYWQiLCJhZGQiLCJNYXRlcmlhbExpc3QiLCJNYXRlcmlhbHNGb3JtIiwiX2ljb25zIiwiSWNvbkJ1dHRvbiIsIl9tb2RhbCIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInVwZGF0ZWQiLCJvbkNvbmZpcm0iLCJvbk1vZGFsQ2FuY2VsIiwic2V0Iiwib25TdWJtaXQiLCJ0ZXh0YXJlYSIsIkNvbmZpcm1Nb2RhbCIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJNYXRlcmlhbFBhbmUiLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJyZW1vdmUiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW8iLCJzZXRVcGRhdGVkIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJ0eXBlcyIsImZvckVhY2giLCJNb2RhbCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJEZWJhdGVBY3Rpdml0eSIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiYnRuQ29uZmlybSIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJkZWxldGVNb2RhbCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsImF0dHJzIiwidG9nZ2xlU2hvdyIsImVuc3VyZSIsIm1vZGVsIiwic2hvd1JlbGF0ZWQiLCJvd25lciIsImNyZWRpdHMiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmUiLCJkZXNjcmlwY3Rpb24iLCJfcXVlc3Rpb25zIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInF1ZXN0aW9ucyIsIndyb25ncyIsInF1ZXN0aW9uIiwiaW5kZXgiLCJpc05hTiIsImNvcnJlY3RBbnN3ZXIiLCJlbXB0aWVzIiwiZmlsdGVyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnbG9iYWxUaGlzIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfaXRlbSIsIl9mb290ZXIiLCJEeW5hbWljQW5zd2Vyc0Zvcm0iLCJhbnN3ZXJzIiwiYWRkZWQiLCJzZXRBZGRlZCIsIlNwaW5uZXIiLCJQcm92aWRlciIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJwcm9wcyIsIm9uS2V5RG93biIsInVzZUlucHV0IiwiY29ycmVjdCIsInNldFZhbHVlcyIsInJlbW92ZUl0ZW0iLCJjbHMiLCJzZXRWYWx1ZSIsImRlbGV0ZUl0ZW0iLCJvbk1hcmtDb3JyZWN0IiwiY2hlY2siLCJtYXAiLCJJbnB1dCIsIm1hcmtDb3JyZWN0IiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwic2V0VGltZW91dCIsImdlbmVyYXRlUXVlc3Rpb25zIiwibW9kYWxRdWVzdGlvbnMiLCJyZWZzIiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwidW5kZWZpbmVkIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwiZXhwb3J0cyIsImNoaWxkcmVuIiwicHJlcGFyZWQiLCJfZGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsImVkaXREYXRhIiwiYWN0aW9uVGV4dHMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJyZWRvcmRlcmluZyIsInNldFJlb3JkZXIiLCJ0b2dnbGVSZW9yZGVyIiwib25CaW5kZXIiLCJnZXREYXRhIiwib25FZGl0Iiwib25SZW9yZGVyIiwicmVvcmRlckF0dHJzIiwib3JkZXJMYWJlbCIsIm9yZGVyIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsInNldE9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJjYWxsYmFjayIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJhcyIsIl9jb2xsYXBzaWJsZSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJvYmplY3RpdmUiLCJBY3Rpdml0eUJhc2VTcGVjIiwiaHRtbEZvciIsIkJhc2VTdWJzcGVjIiwiX2Jhc2VTdWJzcGVjIiwiX2R5bmFtaWNTcGVjIiwiRHluYW1pY0xhYmVsQ29udGFpbmVyIiwic2V0VG9nZ2xlIiwiZmllbGROYW1lIiwic3RydWN0dXJlIiwiZmllbGRzIiwiRHluYW1pY0l0ZW1TcGVjIiwiX2R5bmFtaWMiLCJfdXNlRm9ybSIsInVzZUZvcm0iLCJEeW5hbWljQ29udGFpbmVyIiwiTWFudWFsRm9ybUZvb3RlciIsIl9keW5hbWljRmllbGQiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJyYWRpbyIsIlJhZGlvIiwiY2hlY2tib3giLCJDaGVja2JveCIsInNlbGVjdCIsIlNlbGVjdCIsImFycmF5IiwiaGFzT3duUHJvcGVydHkiLCJ3YXJuIiwiZGVmYXVsdFZhbHVlcyIsImZpZWxkVGV4dHMiLCJvdXRwdXQiLCJGaWVsZCIsIkR5bmFtaWNGaWVsZCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJtb2RhbCIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwiY2xvc2VCYWNrZHJvcCIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInJvdXRpbmciLCJiYWNrIiwiTGluayIsIkFwcEljb24iLCJtb2R1bGUiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInNldEVycm9yIiwiZ2V0RXJyb3IiLCJtZXNzYWdlIiwiU3VnZ2VzdGlvbk1vZGFsIiwiTGFuZ3VhZ2VGaWVsZCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlNlbGVjdEFjdGl2aXR5IiwiaSIsImFjdGl2aXR5SWQiLCJzZWxlY3RDaGFuZ2UiLCJBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIl9sYW5ndWFnZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImdlbmVyYXRlUGljdHVyZSIsImVuIiwiZXMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX2NoYXJhY3RlclRhbGsiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiUGFnZUNvbnRhaW5lciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwic2V0U2hvdyIsIkltYWdlIiwiYWx0IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L19faW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvYWN0aXZpdHktY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LWFydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3BhbmUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL3ZpZXcudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaG9va3MvdXNlLWlucHV0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvcXVlc3Rpb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2Fuc3dlcnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL3F1ZXN0aW9uLWl0ZW0tbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9vYmplY3RpdmUtZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3Vic3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9keW5hbWljLWxhYmVsLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy1zcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NhdmUtYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxHQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxXQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxlQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxPQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVVSxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFWLFFBQUEsQ0FBQVcsa0JBQWtCLEdBQUU7WUFDaEQsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUSxDQUFDSixRQUFRLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsRixNQUFNQyxVQUFVLEdBQUdMLElBQUksSUFBSUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7WUFDeEMsTUFBTU0sTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUMsYUFBYSxFQUFFO2dCQUFFQyxJ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