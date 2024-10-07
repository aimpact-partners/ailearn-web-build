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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9hY3Rpdml0eUNvbnRlbnQiLCJfbWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidmFsdWVzIiwic3RvcmUiLCJnbG9iYWxUZXh0cyIsIk1hdGVyaWFsc1ZpZXciLCJfZm9ybSIsIl9yZWZpbmFtZW50IiwiX21hcmtkb3duIiwiQXJ0aWNsZVRhYiIsIm9uQ2xvc2UiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidG9nZ2xlTW9kYWwiLCJzZXRNYW51YWwiLCJ0b2dnbGVNYW51YWwiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwib25HZW5lcmF0ZSIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNvbnN1bWUiLCJvbkNsaWNrQ2FuY2VsIiwiTWFya2Rvd24iLCJCdXR0b24iLCJpY29uIiwib25DbGljayIsInZhcmlhbnQiLCJib3JkZXJlZCIsImFjdGlvbnMiLCJlZGl0IiwiRm9ybSIsIlRleHRhcmVhIiwiZm9ybSIsImNhbmNlbCIsIlJlZmluZW1lbnRNb2RhbCIsInNob3ciLCJyZXF1aXJlZCIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsImdlbmVyYXRlQXVkaW8iLCJJdGVtIiwiaXRlbSIsInVybCIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiTGlzdCIsImNvbnRyb2wiLCJjb250YWluZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwidGl0bGUiLCJBSUJ1dHRvbiIsIlByb2Nlc3NDb250YWluZXIiLCJFbXB0eU1hdGVyaWFsIiwib25NYW51YWwiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZGlzYWJsZWQiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX3ZpZXciLCJ0cnVuY2F0ZVRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJvbkNyZWF0ZSIsInVwbG9hZCIsImFkZCIsIk1hdGVyaWFsTGlzdCIsIk1hdGVyaWFsc0Zvcm0iLCJfaWNvbnMiLCJJY29uQnV0dG9uIiwiX21vZGFsIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwidXBkYXRlZCIsIm9uQ29uZmlybSIsIm9uTW9kYWxDYW5jZWwiLCJzZXQiLCJvblN1Ym1pdCIsInRleHRhcmVhIiwiQ29uZmlybU1vZGFsIiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIk1hdGVyaWFsUGFuZSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsIm9uRGVsZXRlIiwicmVtb3ZlIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvIiwicHJvcGVydGllcyIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwidHlwZXMiLCJmb3JFYWNoIiwiTW9kYWwiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwicmVmaW5lbWVudCIsIkRlYmF0ZUFjdGl2aXR5IiwiRGVsZXRlQWN0aXZpdHlEYXRhIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJidG5Db25maXJtIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImRlbGV0ZU1vZGFsIiwiTXVsdGlwbGVDaG9pY2VFbXB0eVNwZWNzIiwic3VnZ2VzdGlvblNwZWNzIiwiYXR0cnMiLCJ0b2dnbGVTaG93IiwiZW5zdXJlIiwibW9kZWwiLCJzaG93UmVsYXRlZCIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsInJlZmluZSIsImRlc2NyaXBjdGlvbiIsIl9xdWVzdGlvbnMiLCJNdWx0aXBsZUNob2ljZU1hbnVhbEZvcm0iLCJjaGFuZ2VWaWV3IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicmVmIiwidXNlUmVmIiwicXVlc3Rpb25zIiwid3JvbmdzIiwicXVlc3Rpb24iLCJpbmRleCIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVzIiwiY2xhc3NMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdsb2JhbFRoaXMiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiU3BlY3NIZWFkZXIiLCJFcnJvclJlbmRlcmVyIiwid3JvbmdRdWVzdGlvbnMiLCJEeW5hbWljUXVlc3Rpb25zRm9ybSIsIl9keW5hbWljTGlzdCIsIkR5bmFtaWNBY3Rpb25zIiwibXVsdGlwbGVDaG9pY2UiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiYWRkUXVlc3Rpb24iLCJEeW5hbWljQW5zd2Vyc0Zvb3RlciIsIm9uQWRkIiwic2hvd2VkIiwiYWRkQW5zd2VyIiwiRHluYW1pYyIsIl9pdGVtIiwiX2Zvb3RlciIsIkR5bmFtaWNBbnN3ZXJzRm9ybSIsImFuc3dlcnMiLCJhZGRlZCIsInNldEFkZGVkIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsImNscyIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwibWFya0NvcnJlY3QiLCJkZWxldGUiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJzZXRUaW1lb3V0IiwiZ2VuZXJhdGVRdWVzdGlvbnMiLCJtb2RhbFF1ZXN0aW9ucyIsInJlZnMiLCJmb2N1cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmltIiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsIl9xdWVzdGlvbiIsIl9hY3Rpb25zIiwiZGVmYXVsdFZhbHVlIiwiZHJhZ2dhYmxlIiwiRHluYW1pY1F1ZXN0aW9uSXRlbSIsIl9hbnN3ZXJzIiwiX2NvcmUiLCJwcm9jZXNzT3B0aW9ucyIsImNvcnJlY3RJbmRleCIsIm9wdGlvbiIsInNldEFuc3dlcnMiLCJnZXRBbnN3ZXIiLCJjb3JyZWN0QW5zd2VySW5kZXgiLCJmaW5kSW5kZXgiLCJhbnN3ZXIiLCJ1bmRlZmluZWQiLCJuZXdWYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkdlbmVyYXRlQW5zd2VycyIsIlByb2Nlc3NJY29uQnV0dG9uIiwibW9kYWxBbnN3ZXJzIiwiX3JlYWN0U2VsZWN0IiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJ1cGRhdGVFcnJvcnMiLCJpZCIsImluZGVwZW5kZW50IiwiZ2V0IiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIlJlYWN0U2VsZWN0IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsInJldmVydCIsIk11bHRpcGxlQ2hvaWNlU3BlY3MiLCJRdWVzdGlvbkFuc3dlciIsIkljb24iLCJleHBvcnRzIiwiY2hpbGRyZW4iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImNhbGxiYWNrIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsImFzIiwiX2NvbGxhcHNpYmxlIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJDb250cm9sIiwib25Ub2dnbGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIm9iamVjdGl2ZSIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsIkZpZWxkIiwiRHluYW1pY0ZpZWxkIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIm1vZGFsIiwiY2xlYXIiLCJfYWlCdXR0b24iLCJBY3Rpdml0eVN1Z2dlc3Rpb25zTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsImV2ZW50cyIsImNsb3NlQmFja2Ryb3AiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJlbiIsImVzIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsIlBhZ2VDb250YWluZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsInNldFNob3ciLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9fX2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FjdGl2aXR5LWNvbnRlbnQudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy92aWV3LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hY3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9hbnN3ZXJzL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2hvb2tzL3VzZS1pbnB1dC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL3F1ZXN0aW9uLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9hbnN3ZXJzLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9xdWVzdGlvbi1pdGVtLWxpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvb2JqZWN0aXZlLWZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXN1YnNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZHluYW1pYy1sYWJlbC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMtc3BlYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZHluYW1pYy50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvZm9vdGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvdXNlLWZvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3Mvc3BlY3MudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYWN0aXZpdHktbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL2xhbmd1YWdlLnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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