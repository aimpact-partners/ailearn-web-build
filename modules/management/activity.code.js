System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/perfect-scrollbar", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/dynamic-list", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@1.0.0-beta.6/form/react-select", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.1.13/components/dynamic-field", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.1.13/components/cover-image.code", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0113ModulesManagementRefinamentCode) {
      dependency_7 = _aimpactAilearnApp0113ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6PerfectScrollbar) {
      dependency_9 = _pragmateUi100Beta6PerfectScrollbar;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_12 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_13 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6DynamicList) {
      dependency_14 = _pragmateUi100Beta6DynamicList;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['pragmate-ui/components', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/perfect-scrollbar', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/dynamic-list', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@aimpact/ailearn-app/components/dynamic-field', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['@aimpact/ailearn-app/components/cover-image.code', dependency_24], ['pragmate-ui/image', dependency_25]]);
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

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/empty
      *******************************************************************/

      ims.set('./activities/content-theory/materials/article/empty', {
        hash: 358241747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyArticleMaterial = EmptyArticleMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _context = require("../../../../context");
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

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/form
      ******************************************************************/

      ims.set('./activities/content-theory/materials/article/form', {
        hash: 2375778010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleForm = ArticleForm;
          var _react = require("react");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          function ArticleForm({
            toggleManual
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
            const [fetching, setFetching] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(values.materials?.article ?? '');
            const onChange = event => {
              setContent(event.target.value);
            };
            const onSave = async event => {
              setFetching(true);
              activity.materials.set({
                article: content
              });
              await activity.save();
              toggleManual();
              setFetching(false);
            };
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const textarea = ref.current.querySelector('textarea');
              textarea.focus();
              const length = textarea.value.length;
              textarea.setSelectionRange(length, length); // Set the cursor at the end
            }, []);
            const cls = `tab-container ${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_perfectScrollbar.ScrollContainer, {
              className: "ds-drawer-scroll-container",
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSave,
              className: "activity-modal__form-content tab-cntent"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: content,
              placeholder: materialTexts.form.article.placeholder
            }))), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: toggleManual,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave
            }, globalTexts.actions.save))));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/index
      *******************************************************************/

      ims.set('./activities/content-theory/materials/article/index', {
        hash: 1803552190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleTab = ArticleTab;
          var _react = require("react");
          var _context = require("../../../../context");
          var _empty = require("./empty");
          var _components = require("pragmate-ui/components");
          var _form = require("./form");
          var _view = require("./view");
          function ArticleTab() {
            const {
              activity
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = _react.default.useState(false);
            const toggleManual = () => setManual(!manual);
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: manual,
              ternary: true,
              options: {
                true: _react.default.createElement(_form.ArticleForm, {
                  toggleManual: toggleManual
                }),
                false: _react.default.createElement(_components.ConditionalContainer, {
                  condition: !!activity.materials.article,
                  ternary: true,
                  options: {
                    true: _react.default.createElement(_view.ArticleTabView, {
                      toggleManual: toggleManual
                    }),
                    false: _react.default.createElement(_empty.EmptyArticleMaterial, {
                      name: "article",
                      onManual: toggleManual
                    })
                  }
                })
              }
            });
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article/view
      ******************************************************************/

      ims.set('./activities/content-theory/materials/article/view', {
        hash: 2661617821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleTabView = ArticleTabView;
          var _react = require("react");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ArticleTabView({
            toggleManual
          }) {
            const {
              store,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const onDelete = async () => {
              activity.materials.clear();
              activity.save();
            };
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
            }, globalTexts.actions.edit), _react.default.createElement(_ui.DeleteConfirmButton, {
              icon: "delete",
              onConfirm: onDelete,
              variant: "primary"
            })));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/empty
      ******************************************************************/

      ims.set('./activities/content-theory/materials/audios/empty', {
        hash: 3048821190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryEmptyAudio = ContentTheoryEmptyAudio;
          var _react = require("react");
          var _context = require("../../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ContentTheoryEmptyAudio({}) {
            const {
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const onGenerate = async () => {
              try {
                setFetching(true);
                await activity.materials.generateAudio();
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
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

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/index
      ******************************************************************/

      ims.set('./activities/content-theory/materials/audios/index', {
        hash: 4231958933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../../../context");
          var _empty = require("./empty");
          var _view = require("./view");
          function ContentTheoryAudio() {
            const {
              activity
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [audios, setAudios] = _react.default.useState(activity.materials.audios);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
              setFetching(activity.materials.fetching);
              setAudios(activity.materials.audios);
            });
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: !!audios,
              ternary: true,
              options: {
                true: _react.default.createElement(_view.ContentTheoryAudioView, null),
                false: _react.default.createElement(_empty.ContentTheoryEmptyAudio, null)
              }
            });
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/item
      *****************************************************************/

      ims.set('./activities/content-theory/materials/audios/item', {
        hash: 2620005488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudioItem = void 0;
          var _react = require("react");
          var _context = require("../../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const ContentTheoryAudioItem = ({
            item: type
          }) => {
            const {
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              audios
            } = activity.materials;
            const url = activity.materials.audios[type]?.url;
            if (!url) return null;
            return _react.default.createElement("div", {
              className: "activity__audio"
            }, _react.default.createElement("h5", null, texts.contentTheory.materials.types[type]), _react.default.createElement(_ui.AudioPlayer, {
              url: audios[type].url
            }));
          };
          exports.ContentTheoryAudioItem = ContentTheoryAudioItem;
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/view
      *****************************************************************/

      ims.set('./activities/content-theory/materials/audios/view', {
        hash: 2252717187,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, _react.default.createElement(_ui.DeleteConfirmButton, {
              onConfirm: onDelete,
              bordered: true
            })));
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

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/form
      **********************************************************/

      ims.set('./activities/content-theory/materials/form', {
        hash: 4040189119,
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
          var _audios = require("./audios");
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
              closeBackdrop: false,
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
            }), _react.default.createElement(_audios.ContentTheoryAudio, null))), _react.default.createElement(_refinament.RefinementModal, {
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
        hash: 3127023098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialList = MaterialList;
          var _react = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function truncateText(text, maxLength) {
            return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
          }
          function MaterialList({
            onCreate
          }) {
            const {
              activity
            } = (0, _context.useActivityContext)();
            const onClick = event => {
              activity.materials.clear();
              activity.save();
            };
            return _react.default.createElement(_react.default.Fragment, null, activity.materials.article && _react.default.createElement("div", {
              className: "attachments__container"
            }, _react.default.createElement("div", {
              className: "attachment__card card--article",
              onClick: onCreate
            }, truncateText(activity.materials.article, 80), _react.default.createElement(_ui.DeleteConfirmIconButton, {
              className: "circle",
              icon: "delete",
              onConfirm: onClick
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
        hash: 2843729002,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            (0, _hooks.useBinder)([activity.materials], () => setMaterial(activity.materials[name]));
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
            }, _react.default.createElement(_ui.DeleteConfirmButton, {
              onConfirm: onDelete,
              disabled: fetching,
              bordered: true
            }), _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.edit)));
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
        hash: 3467716652,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdWkiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9tYW51YWwiLCJfY29tcG9uZW50cyIsIl9zcGVjcyIsIl9ob29rcyIsIl9vYmplY3RpdmVGaWVsZCIsIl9oZWFkZXIiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJ0ZXh0cyIsImFjdGl2aXR5IiwidXNlQWN0aXZpdHlDb250ZXh0IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJ0b2dnbGVWaWV3Iiwib25TYXZlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNhdmUiLCJvbkxpc3RlbiIsIm9uQ2FuY2VsIiwidXNlQmluZGVyIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiT2JqZWN0aXZlRmllbGQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJTcGVjcyIsIm1hbnVhbCIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIkVtcHR5U3BlY3MiLCJ0eXBlIiwiX3JlYWN0IiwiQWN0aXZpdHlDb250ZW50IiwiZGVmYXVsdCIsIl9hY3Rpdml0eUNvbnRlbnQiLCJfbWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5IiwidmFsdWVzIiwic3RvcmUiLCJnbG9iYWxUZXh0cyIsIk1hdGVyaWFsc1ZpZXciLCJfcmVmaW5hbWVudCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJtYXRlcmlhbFRleHRzIiwiY29udGVudFRoZW9yeSIsIm1hdGVyaWFscyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXREYXRhIiwidG9nZ2xlTW9kYWwiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJkYXRhIiwiZ2VuZXJhdGUiLCJlIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVkIiwidGl0bGUiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwib25DbGljayIsImFjdGlvbnMiLCJBSUJ1dHRvbiIsIlByb2Nlc3NDb250YWluZXIiLCJSZWZpbmVtZW50TW9kYWwiLCJzaG93IiwicmVxdWlyZWQiLCJyZWZpbmVtZW50Iiwib25DbG9zZSIsIl9mb3JtIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJBcnRpY2xlRm9ybSIsInRvZ2dsZU1hbnVhbCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInNldCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRleHRhcmVhIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImxlbmd0aCIsInNldFNlbGVjdGlvblJhbmdlIiwiY2xzIiwiU2Nyb2xsQ29udGFpbmVyIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJmb3JtIiwiY2FuY2VsIiwiX3ZpZXciLCJBcnRpY2xlVGFiIiwic2V0TWFudWFsIiwidGVybmFyeSIsInRydWUiLCJmYWxzZSIsIkFydGljbGVUYWJWaWV3IiwiX21hcmtkb3duIiwib25EZWxldGUiLCJjbGVhciIsIk1hcmtkb3duIiwiaWNvbiIsImVkaXQiLCJEZWxldGVDb25maXJtQnV0dG9uIiwib25Db25maXJtIiwiQ29udGVudFRoZW9yeUVtcHR5QXVkaW8iLCJnZW5lcmF0ZUF1ZGlvIiwiQ29udGVudFRoZW9yeUF1ZGlvIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJpdGVtIiwidXJsIiwidHlwZXMiLCJBdWRpb1BsYXllciIsImV4cG9ydHMiLCJfbGlzdCIsIl9pdGVtIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiZGVsZXRlQXVkaW9zIiwiTGlzdCIsImNvbnRyb2wiLCJhcyIsIkVtcHR5TWF0ZXJpYWwiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwiX21vZGFsIiwiX3RhYnMiLCJfYXJ0aWNsZSIsIl9wYW5lIiwiX2F1ZGlvcyIsIk1hdGVyaWFsc0Zvcm0iLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsIm9uQ29uc3VtZSIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJNYXRlcmlhbFBhbmUiLCJvbkNyZWF0ZSIsInVwbG9hZCIsImFkZCIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsIm1heExlbmd0aCIsInN1YnN0cmluZyIsIkRlbGV0ZUNvbmZpcm1JY29uQnV0dG9uIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25DbGlja0NhbmNlbCIsIm9uTW9kYWxDYW5jZWwiLCJDb25maXJtTW9kYWwiLCJfbWFudWFsTWF0ZXJpYWxGb3JtIiwibWF0ZXJpYWwiLCJzZXRNYXRlcmlhbCIsIm9wZW5NYW51YWxGb3JtIiwiRGViYXRlQWN0aXZpdHkiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImJ0bkNvbmZpcm0iLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiZGVsZXRlTW9kYWwiLCJNdWx0aXBsZUNob2ljZUVtcHR5U3BlY3MiLCJzdWdnZXN0aW9uU3BlY3MiLCJhdHRycyIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJtb2RlbCIsInNob3dSZWxhdGVkIiwib3duZXIiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwicmVmaW5lIiwiZGVzY3JpcGN0aW9uIiwiX3F1ZXN0aW9ucyIsIk11bHRpcGxlQ2hvaWNlTWFudWFsRm9ybSIsImNoYW5nZVZpZXciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImluZGV4IiwiaXNOYU4iLCJjb3JyZWN0QW5zd2VyIiwiZW1wdGllcyIsImZpbHRlciIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJnbG9iYWxUaGlzIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIlNwZWNzSGVhZGVyIiwiRXJyb3JSZW5kZXJlciIsIndyb25nUXVlc3Rpb25zIiwiRHluYW1pY1F1ZXN0aW9uc0Zvcm0iLCJfZHluYW1pY0xpc3QiLCJEeW5hbWljQWN0aW9ucyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImFkZFF1ZXN0aW9uIiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJJdGVtIiwiRHluYW1pY1F1ZXN0aW9uQW5zd2VySXRlbSIsIl9pY29ucyIsIl91c2VJbnB1dCIsInByb3BzIiwib25LZXlEb3duIiwidXNlSW5wdXQiLCJjb3JyZWN0Iiwic2V0VmFsdWVzIiwicmVtb3ZlSXRlbSIsInNldFZhbHVlIiwiZGVsZXRlSXRlbSIsIm9uTWFya0NvcnJlY3QiLCJjaGVjayIsIm1hcCIsIklucHV0IiwiSWNvbkJ1dHRvbiIsIm1hcmtDb3JyZWN0IiwiZGVsZXRlIiwiRHluYW1pY0hlYWRlciIsInJlc3BvbnNlIiwicmVsYXRlZCIsImNvcnJlY3RfYW5zd2VyIiwic2V0VGltZW91dCIsImdlbmVyYXRlUXVlc3Rpb25zIiwibW9kYWxRdWVzdGlvbnMiLCJyZWZzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwidW5kZWZpbmVkIiwibmV3VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJJY29uIiwiY2hpbGRyZW4iLCJwcmVwYXJlZCIsIl9kZWxldGVNb2RhbCIsImVkaXRpb24iLCJzZXRFZGl0aW9uIiwiZWRpdERhdGEiLCJhY3Rpb25UZXh0cyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInJlZG9yZGVyaW5nIiwic2V0UmVvcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJvbkJpbmRlciIsImdldERhdGEiLCJvbkVkaXQiLCJvblJlb3JkZXIiLCJyZW9yZGVyQXR0cnMiLCJvcmRlckxhYmVsIiwib3JkZXIiLCJNdWx0aXBsZUNob2ljZUxpc3QiLCJyZW9yZGVyaW5nIiwidG9nZ2xlIiwiX2ZyYW1lck1vdGlvbiIsIl9xdWVzdGlvbkl0ZW1MaXN0Iiwic2V0T3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImNhbGxiYWNrIiwiUmVvcmRlciIsIkdyb3VwIiwiUXVlc3Rpb25JdGVtTGlzdCIsIl9jb2xsYXBzaWJsZSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwiQ29udHJvbCIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsImVtcHR5T3B0aW9ucyIsIm9iamVjdGl2ZSIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJfZHluYW1pYyIsIl91c2VGb3JtIiwidXNlRm9ybSIsIkR5bmFtaWNDb250YWluZXIiLCJNYW51YWxGb3JtRm9vdGVyIiwiX2R5bmFtaWNGaWVsZCIsImZpZWxkVHlwZXMiLCJpbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsIndhcm4iLCJkZWZhdWx0VmFsdWVzIiwiZmllbGRUZXh0cyIsIm91dHB1dCIsIkZpZWxkIiwiRHluYW1pY0ZpZWxkIiwiaGFuZGxlQ2FuY2VsIiwiX2R5bmFtaWNMYWJlbCIsIl9iYXNlU3BlYyIsImdldFByb3BlcnRpZXMiLCJTcG9rZW5BY3Rpdml0eSIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsIm1vZGFsIiwiX2FpQnV0dG9uIiwiQWN0aXZpdHlTdWdnZXN0aW9uc01vZGFsIiwib2JzZXJ2YXRpb25zIiwicmVtb3ZlSXRlbXMiLCJldmVudHMiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJBcHBJY29uIiwibW9kdWxlIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzZXRFcnJvciIsImdldEVycm9yIiwibWVzc2FnZSIsIlN1Z2dlc3Rpb25Nb2RhbCIsIkxhbmd1YWdlRmllbGQiLCJzZWxlY3RlZCIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJTZWxlY3RBY3Rpdml0eSIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYWN0aXZpdHlNb2RhbCIsIl9icmVhZGNydW1iIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwidG9nZ2xlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJlbiIsImVzIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiQWN0aXZpdHlMYW5ndWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZW50VGhlb3J5IiwiX2RlYmF0ZSIsIl9jaGFyYWN0ZXJUYWxrIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsIlBhZ2VDb250YWluZXIiLCJkZWJhdGUiLCJzcG9rZW4iLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsInNldFNob3ciLCJJbWFnZSIsImFsdCIsIlNhdmVCdXR0b24iXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hcnRpY2xlL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2FydGljbGUvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9tYW51YWwtbWF0ZXJpYWwtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvYWN0aXZpdGllcy9kZWJhdGUvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvb3Rlci50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9tYW51YWwvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL3VzZS1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL3NwZWNzLnRzeCIsIi90cy9hY3Rpdml0aWVzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvY2FuY2VsLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2FjdGl2aXR5LW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvYnJlYWRjcnVtYi50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL21hdGVyaWFscy50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3NwZWNzLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3VnZ2VzdGlvbnMtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQudHN4IiwiL3RzL2NvbXBvbmVudHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9sYW5ndWFnZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsR0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksT0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUss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