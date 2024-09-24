System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_5 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_6 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Components) {
      dependency_7 = _pragmateUi100Beta6Components;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_9 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Form) {
      dependency_10 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_11 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_13 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_14 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_16 = _pragmateUi100Beta6FormReactSelect;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_17 = _aimpactAilearnApp0113ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/list', dependency_5], ['pragmate-ui/tabs', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/main-layout.widget', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['@aimpact/ailearn-app/components/cover-image.code', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/activity.code');
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/
      ims.set('./activities/character-talk/index', {
        hash: 2837926980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var React = require("react");
          function CharacterTalkActivity() {
            return React.createElement("div", null, "Character Talk");
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/audio
      *************************************************/

      ims.set('./activities/content-theory/audio', {
        hash: 955093853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _list = require("pragmate-ui/list");
          var _aiButton = require("../../components/ai-button");
          function ContentTheoryAudio({
            content
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
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
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: () => setManual(false)
              });
            }
            const Item = ({
              item: type
            }) => {
              const {
                activity
              } = (0, _context.useModuleContext)();
              const url = activity.materials.audios[type]?.url;
              if (!url) return null;
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
            }, _react.default.createElement(_aiButton.AIButton, {
              onClick: onGenerate,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/content-theory/body
      ************************************************/

      ims.set('./activities/content-theory/body', {
        hash: 2138014486,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryBody = ContentTheoryBody;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _tabs = require("pragmate-ui/tabs");
          var _audio = require("./audio");
          var _components = require("pragmate-ui/components");
          var _deleteModal = require("../../components/delete-modal");
          var _content = require("./content");
          function ContentTheoryBody() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials.article);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [edition, setEdition] = _react.default.useState(false);
            const toggleEdition = () => setEdition(!edition);
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const onChange = () => {};
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData({
                materials: activity.materials.getData(),
                updated: true
              });
            });
            activity.materials.items.forEach(item => {
              const name = typeof item === 'string' ? item : item.name;
              const label = texts.materials[name];
              const isDisabled = (() => {
                if (!item?.dependencies) return false;
                if (typeof item?.dependencies === 'string') return !activity.materials[item.dependencies];
                return item.dependencies.some(property => !activity.materials[property]);
              })();
              const attrs = {
                disabled: isDisabled
              };
              tabs.push(_react.default.createElement(_tabs.Tab, {
                ...attrs,
                key: `${activity.id}.${name}-tab`
              }, label));
            });
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty && activity.materials.empty
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, texts.actions.delete))), _react.default.createElement(_content.ContentTheoryContent, null), _react.default.createElement(_audio.ContentTheoryAudio, null), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/content-theory/content
      ***************************************************/

      ims.set('./activities/content-theory/content', {
        hash: 2186283171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryContent = ContentTheoryContent;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _emptyMaterial = require("./empty-material");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ContentTheoryContent() {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const openManualForm = () => setManual(true);
            const onManual = () => setManual(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: onManual
              });
            }
            if (activity.materials.article) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
                className: "material__content"
              }, _react.default.createElement(_markdown.Markdown, {
                content: activity.materials.article
              })), _react.default.createElement("div", {
                className: "mt-30 activity-specs-actions flex-container flex-end material__actions"
              }, _react.default.createElement(_components.Button, {
                icon: "edit",
                onClick: openManualForm,
                variant: "primary",
                bordered: true
              }, texts.actions.edit)));
            }
            return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: "article",
              onManual: openManualForm
            });
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/index
      *************************************************/

      ims.set('./activities/content-theory/index', {
        hash: 2521013357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var React = require("react");
          var _languageField = require("../../components/language-field");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _body = require("./body");
          function ContentTheoryActivity() {
            const {
              values,
              texts,
              activity,
              editData,
              store
            } = (0, _context.useModuleContext)();
            const saveEditable = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              editData({
                [name]: value
              });
              await activity.set({
                [name]: value
              });
              await store.save();
            };
            const onSave = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              const data = {
                specs: {
                  ...activity.specs,
                  [name]: value
                }
              };
              editData(data);
              await activity.set(data);
              await store.save();
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_languageField.LanguageField, null)), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, " ", texts.activities.description.label), React.createElement(_ui.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable,
              placeholder: texts.activities.description.placeholder,
              content: activity.description
            })), React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_ui.ContentEditable, {
              name: "objective",
              onSave: onSave,
              placeholder: texts.specs.objective.placeholder,
              content: values.specs.objective
            })), React.createElement(_body.ContentTheoryBody, null));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/content-theory/manual
      **************************************************/

      ims.set('./activities/content-theory/manual', {
        hash: 1132675609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _saveButton = require("../../save-button");
          function ManualMaterialForm({
            name,
            content,
            onCancel
          }) {
            const {
              values,
              editData,
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const materials = {
                ...values.materials
              };
              console;
              editData({
                materials: {
                  ...materials,
                  [name]: target.value
                },
                updated: true
              });
            };
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = () => {
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  [name]: activity.materials[name]
                },
                updated: false
              });
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            const onSave = () => {
              editData({
                updated: false
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "material__content"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: values.materials?.[name] ?? '',
              placeholder: texts.manual.textarea
            })), _react.default.createElement("footer", {
              className: "section-actions__container actions-end"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onSave
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 3587483468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var React = require("react");
          function DebateActivity() {
            return React.createElement("div", null, "Debate");
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/index
      **************************************************/

      ims.set('./activities/multiple-choice/index', {
        hash: 2459856897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var React = require("react");
          function MultipleChoiceActivity() {
            return React.createElement("div", null, "Multiple Choice");
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/spoken/index
      *****************************************/

      ims.set('./activities/spoken/index', {
        hash: 3782958361,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var React = require("react");
          function SpokenActivity() {
            return React.createElement("div", null, "Spoken");
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
        hash: 1641415938,
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
              values,
              activity,
              store,
              texts,
              clearData
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            const onConfirm = () => {
              clearData();
              store.editActivity = undefined;
              onClose();
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: texts.modal.cancel.title,
              text: texts.modal.cancel.description,
              onClose: onClose,
              onCancel: onClose,
              btnConfirm: {
                label: texts.actions.confirm
              },
              btnCancel: {
                label: texts.actions.cancel
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
        hash: 3351610770,
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
                activities: texts,
                actions
              },
              activity,
              editData
            } = (0, _context.useModuleContext)();
            if (!show) return null;
            const onConfirm = async () => {
              try {
                setFetching(true);
                onClose();
                await activity.clearContent();
                const data = {
                  specs: activity.specs.getData(),
                  materials: activity.materials.getData(),
                  updated: false
                };
                editData(data);
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
        hash: 3897163173,
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
              editData
            } = (0, _context.useModuleContext)();
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
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 3386163319,
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
              values
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity = undefined;
              store.setBreadcrumb();
              _routing.routing.back();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity = undefined;
              store.setBreadcrumb();
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
            }), _react.default.createElement("span", null, texts.actions.back, " ", texts.activities.module)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 1256829720,
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
              editData
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                setFetching(true);
                await activity.materials.generate(type, notes);
                editData({
                  materials: {
                    ...activity.materials
                  },
                  specs: {
                    ...activity.specs
                  }
                });
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
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./components/generation-modal/specs-modal
      *********************************************************/

      ims.set('./components/generation-modal/specs-modal', {
        hash: 3045223981,
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
              editData
            } = (0, _context.useModuleContext)();
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
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./components/generation-modal/suggestions-modal
      ***************************************************************/

      ims.set('./components/generation-modal/suggestions-modal', {
        hash: 3036694819,
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
              activity
            } = (0, _context.useModuleContext)();
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
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./components/language-field
      *******************************************/

      ims.set('./components/language-field', {
        hash: 472773709,
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
            } = (0, _context.useModuleContext)();
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
        hash: 2971708945,
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
            } = (0, _context.useModuleContext)();
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
        hash: 3785027250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 4175545107,
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
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              editData
            } = (0, _context.useModuleContext)();
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
              editData(data);
              await activity.save(data);
            };
            const onGenerate = notes => activity.generatePicture(notes);
            (0, _hooks.useBinder)([activity], () => setPicture({
              src: activity.picture,
              date: Date.now()
            }), 'image.generated');
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
            })), _react.default.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: activity.type
            })), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
        hash: 3374734682,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _header = require("./header");
          var _multipleChoice = require("./activities/multiple-choice");
          var _debate = require("./activities/debate");
          var _characterTalk = require("./activities/character-talk");
          var _spoken = require("./activities/spoken");
          var _contentTheory = require("./activities/content-theory");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [values, setValues] = _react.default.useState(activity.getData());
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              type
            } = activity;
            const itemsType = store.activityTypes.get(type);
            /**
             * Updates the values with the new data only for the ui behavior
             * @param data
             */
            const editData = data => {
              const finalData = {
                ...values,
                ...data
              };
              setValues({
                ...finalData
              });
            };
            const clearData = () => {
              activity.materials.clear();
              setValues(activity.getData());
            };
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const value = {
              store,
              activity,
              texts
            };
            console.log(10, type);
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                'multiple-choice': _multipleChoice.MultipleChoiceActivity,
                debate: _debate.DebateActivity,
                'character-talk': _characterTalk.CharacterTalkActivity,
                spoken: _spoken.SpokenActivity,
                'content-theory': _contentTheory.ContentTheoryActivity
              },
              placeholder: () => _react.default.createElement(_react.default.Fragment, null, "Nada que renderizar")
            })));
            // return (
            // 	<ModuleContext.Provider
            // 		value={{
            // 			activity,
            // 			texts,
            // 			store,
            // 			values,
            // 			clearData,
            // 			updated: values.updated,
            // 			editData,
            // 			currentTab,
            // 			setCurrentTab,
            // 			ensureCredits: LayoutBroker.ensureCredits,
            // 			itemsType
            // 		}}
            // 	>
            // 		<PageContainer className={`page-activity-container activity-container--${activity.type}`}>
            // 			<ActivityHeader />
            // 			<GeneralActivityFields />
            // 			<ActivityObjectiveSpecs />
            // 			<ActivityBaseForm type={type} />
            // 		</PageContainer>
            // 	</ModuleContext.Provider>
            // );
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

      /************************************************
      INTERNAL MODULE: ./materials/manual-material-form
      ************************************************/

      ims.set('./materials/manual-material-form', {
        hash: 2471684898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _saveButton = require("../../save-button");
          function ManualMaterialForm({
            name,
            onCancel
          }) {
            const {
              values,
              editData,
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  [name]: target.value
                },
                updated: true
              });
            };
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = () => {
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  [name]: activity.materials[name]
                }
              });
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            const onSave = () => {
              editData({
                updated: false
              });
              onCancel();
            };
            return _react.default.createElement("div", null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: name,
              value: values.materials?.[name] ?? '',
              placeholder: texts.manual[name].textarea
            }), _react.default.createElement("footer", {
              className: "section-actions__container actions-end"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onSave
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./materials/pane
      ********************************/

      ims.set('./materials/pane', {
        hash: 3959656546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialPane = MaterialPane;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _emptyMaterial = require("../content-theory/empty-material");
          var _manualMaterialForm = require("./manual-material-form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function MaterialPane({
            name
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            const openManualForm = () => setManual(true);
            const toggleManual = () => setManual(!manual);
            (0, _hooks.useBinder)([activity.materials], () => setMaterial(activity.materials[name]));
            if (manual) return _react.default.createElement(_manualMaterialForm.ManualMaterialForm, {
              name: name,
              onCancel: toggleManual
            });
            if (!material) return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: name,
              onManual: toggleManual
            });
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("section", {
              className: "material__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: material
            })), _react.default.createElement("div", {
              className: "mt-30 activity-specs-actions flex-container flex-end material__actions"
            }, _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              variant: "primary",
              bordered: true
            }, texts.actions.edit)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./save-button
      *****************************/

      ims.set('./save-button', {
        hash: 1603006657,
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
            } = (0, _context.useModuleContext)();
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
            }, texts.actions.save);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJjcmVhdGVFbGVtZW50IiwiX3JlYWN0IiwiX21hbnVhbCIsIl9jb250ZXh0IiwiX2hvb2tzIiwiX3VpIiwiX2xpc3QiLCJfYWlCdXR0b24iLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50IiwiYWN0aXZpdHkiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJtYW51YWwiLCJzZXRNYW51YWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWF0ZXJpYWxzIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwidXNlQmluZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJlIiwiY29uc29sZSIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIm5hbWUiLCJvbkNhbmNlbCIsIkl0ZW0iLCJpdGVtIiwidHlwZSIsInVybCIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiRnJhZ21lbnQiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsInRleHQiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJnZW5lcmF0ZSIsIlByb2Nlc3NDb250YWluZXIiLCJfdGFicyIsIl9hdWRpbyIsIl9jb21wb25lbnRzIiwiX2RlbGV0ZU1vZGFsIiwiX2NvbnRlbnQiLCJDb250ZW50VGhlb3J5Qm9keSIsInZhbHVlcyIsImVkaXREYXRhIiwic2V0RGF0YSIsImFydGljbGUiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJ0b2dnbGVNb2RhbCIsIm9uQ2hhbmdlIiwidGFicyIsImdldERhdGEiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsImxhYmVsIiwiaXNEaXNhYmxlZCIsImRlcGVuZGVuY2llcyIsInNvbWUiLCJwcm9wZXJ0eSIsImF0dHJzIiwiZGlzYWJsZWQiLCJwdXNoIiwiVGFiIiwia2V5IiwiaWQiLCJzcGVjcyIsIkJ1dHRvbiIsImljb24iLCJkZWxldGUiLCJDb250ZW50VGhlb3J5Q29udGVudCIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsInNob3ciLCJvbkNsb3NlIiwiX21hcmtkb3duIiwiX2VtcHR5TWF0ZXJpYWwiLCJvcGVuTWFudWFsRm9ybSIsIm9uTWFudWFsIiwiTWFya2Rvd24iLCJib3JkZXJlZCIsImVkaXQiLCJFbXB0eU1hdGVyaWFsIiwiX2xhbmd1YWdlRmllbGQiLCJfYm9keSIsIkNvbnRlbnRUaGVvcnlBY3Rpdml0eSIsInN0b3JlIiwic2F2ZUVkaXRhYmxlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2V0Iiwic2F2ZSIsIm9uU2F2ZSIsImRhdGEiLCJMYW5ndWFnZUZpZWxkIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsIm9iamVjdGl2ZSIsIl9mb3JtIiwiX21vZGFsIiwiX3NhdmVCdXR0b24iLCJzaG93Q2FuY2VsTW9kYWwiLCJzZXRTaG93Q2FuY2VMTW9kYWwiLCJldmVudCIsInRhcmdldCIsIm9uQ2xpY2tDYW5jZWwiLCJvbkNvbmZpcm0iLCJvbk1vZGFsQ2FuY2VsIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsImNhbmNlbCIsIlNhdmVCdXR0b24iLCJjYWxsYmFjayIsIkNvbmZpcm1Nb2RhbCIsIkRlYmF0ZUFjdGl2aXR5IiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsIlNwb2tlbkFjdGl2aXR5IiwiX2ljb25zIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJ1bmRlZmluZWQiLCJtb2RhbCIsImJ0bkNvbmZpcm0iLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2xlYXJDb250ZW50IiwiZXJyb3IiLCJkZWxldGVNb2RhbCIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJyZWZpbmUiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJzZXRCcmVhZGNydW1iIiwicm91dGluZyIsImJhY2siLCJMaW5rIiwiSWNvbiIsIkFwcEljb24iLCJtb2R1bGUiLCJNYXRlcmlhbHNTdWdnZXN0aW9uc01vZGFsIiwibm90ZXMiLCJzZXROb3RlcyIsIlNwZWNzU3VnZ2VzdGlvbnNNb2RhbCIsInN1Z2dlc3Rpb25TcGVjcyIsInNldEVycm9yIiwicmVzcG9uc2UiLCJnZXRFcnJvciIsImZpZWxkcyIsImVycm9ycyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJFcnJvclJlbmRlcmVyIiwiU3VnZ2VzdGlvbk1vZGFsIiwiX3JlYWN0U2VsZWN0Iiwic2VsZWN0ZWQiLCJsYW5ndWFnZXMiLCJzZWxlY3QiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwib3B0aW9ucyIsIm1hcCIsInNhdmVkIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJtb2RlbCIsImkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfY292ZXJJbWFnZSIsIkFjdGl2aXR5SGVhZGVyIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJzcmMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiY2xzIiwiZ2VuZXJhdGVQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZW50aXR5IiwiYXMiLCJmb3JtIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9tdWx0aXBsZUNob2ljZSIsIl9kZWJhdGUiLCJfY2hhcmFjdGVyVGFsayIsIl9zcG9rZW4iLCJfY29udGVudFRoZW9yeSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsIml0ZW1zVHlwZSIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJmaW5hbERhdGEiLCJjbGVhciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiX21hbnVhbE1hdGVyaWFsRm9ybSIsIk1hdGVyaWFsUGFuZSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJ0b2dnbGVNYW51YWwiLCJBbmltYXRlZENvbnRhaW5lciIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2JvZHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9tYXRlcmlhbHMvcGFuZS50c3giLCIvdHMvc2F2ZS1idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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