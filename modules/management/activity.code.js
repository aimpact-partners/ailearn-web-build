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
        hash: 2816186216,
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
              }, _react.default.createElement("h5", null, texts.contentTheory.materials[type]), _react.default.createElement(_ui.AudioPlayer, {
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
        hash: 2919279748,
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
        hash: 1790202137,
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
            const [updated, setUpdated] = _react.default.useState({});
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