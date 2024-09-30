System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/tabs", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/form/react-select", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Components) {
      dependency_6 = _pragmateUi100Beta6Components;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_7 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_10 = _pragmateUi100Beta6Tabs;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_12 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_13 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_15 = _pragmateUi100Beta6FormReactSelect;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp0113ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/list', dependency_5], ['pragmate-ui/components', dependency_6], ['@aimpact/chat-sdk/widgets/markdown', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/tabs', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/main-layout.widget', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16]]);
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
        hash: 4017726211,
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
            }, _react.default.createElement(_ui.AIButton, {
              onClick: onGenerate,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/content-theory/content
      ***************************************************/

      ims.set('./activities/content-theory/content', {
        hash: 2878887454,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _emptyMaterial = require("./empty-material");
          // import { EmptyMaterial } from './empty-material';

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

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/empty-material
      **********************************************************/

      ims.set('./activities/content-theory/empty-material', {
        hash: 1893023436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("../../components/generation-modal/materials");
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const disabled = {
              disabled: !activity.aiCompleted
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
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/index
      *************************************************/

      ims.set('./activities/content-theory/index', {
        hash: 42957170,
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
              content: values.specs?.objective
            })));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/content-theory/manual
      **************************************************/

      ims.set('./activities/content-theory/manual', {
        hash: 4107660625,
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

      /******************************************************
      INTERNAL MODULE: ./activities/content-theory/trash/body
      ******************************************************/

      ims.set('./activities/content-theory/trash/body', {
        hash: 2018119925,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryBody = ContentTheoryBody;
          var _react = require("react");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _tabs = require("pragmate-ui/tabs");
          var _audio = require("../audio");
          var _components = require("pragmate-ui/components");
          var _deleteModal = require("../../../components/delete-modal");
          var _content = require("../content");
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
            if (!activity.materials.items) return null;
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

      /**************************************************************
      INTERNAL MODULE: ./components/dynamic-field/criteria-field-item
      **************************************************************/

      ims.set('./components/dynamic-field/criteria-field-item', {
        hash: 945060312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CriteriaFieldItem = CriteriaFieldItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function CriteriaFieldItem({
            total,
            item,
            index,
            onDelete,
            onChange
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const handleChange = event => {
              const target = event.currentTarget;
              const data = {
                ...item
              };
              data[target.name] = target.value;
              onChange(index, data);
            };
            return _react.default.createElement("div", {
              className: "form-repeated-container"
            }, _react.default.createElement(_form.Input, {
              onChange: handleChange,
              label: texts.specs.subject.label,
              placeholder: texts.specs.criteria.placeholder,
              value: item.name,
              name: "name",
              className: "main__control"
            }), _react.default.createElement(_form.Textarea, {
              onChange: handleChange,
              label: texts.specs.criteria.label,
              value: item.subject,
              placeholder: texts.specs.subject.placeholder,
              name: "subject"
            }), total > 1 && _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: () => onDelete(index)
            }, ' ', texts.actions.delete)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/dynamic-field/criteria-form
      ********************************************************/

      ims.set('./components/dynamic-field/criteria-form', {
        hash: 1299002658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenCriteriaForm = SpokenCriteriaForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _saveButton = require("../../save-button");
          function SpokenCriteriaForm({
            onCancel
          }) {
            const {
              values,
              texts,
              editData,
              activity
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onModalCancel = () => setShowCanceLModal(false);
            const disabled = !values.specs.task || !values.specs.assessment || !values.specs.criteria?.length;
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              editData({
                specs: activity.specs.getData(),
                updated: false
              });
              onCancel();
            };
            return _react.default.createElement(_form.Form, {
              className: "activity__form"
            }, _react.default.createElement("footer", {
              className: "section-actions__container actions-end border-top"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_saveButton.SaveButton, {
              callback: onCancel,
              disabled: disabled
            })), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/dynamic-field/criteria-item
      ********************************************************/

      ims.set('./components/dynamic-field/criteria-item', {
        hash: 1299847821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CriteriaItem = CriteriaItem;
          var _react = require("react");
          function CriteriaItem({
            data
          }) {
            return _react.default.createElement("div", {
              className: "subform__items"
            }, _react.default.createElement("strong", {
              className: "capitalize"
            }, data.name, ": "), " ", _react.default.createElement("span", null, data.subject));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./components/dynamic-field/index
      ************************************************/

      ims.set('./components/dynamic-field/index', {
        hash: 2137606462,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CriteriaField = CriteriaField;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _criteriaFieldItem = require("./criteria-field-item");
          function CriteriaField({
            data,
            onChange,
            onCancel = undefined
          }) {
            const {
              values,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [totalItems, setTotalItems] = _react.default.useState(data?.length || 1);
            const [items, setItems] = _react.default.useState(data?.length ? [...values.specs.criteria] : [{
              name: '',
              subject: ''
            }]);
            const onAdd = () => {
              setTotalItems(totalItems + 1);
              setItems([...items, {
                name: '',
                subject: ''
              }]);
            };
            const output = [];
            const onDelete = index => {
              const elements = items.slice(0, index).concat(items.slice(index + 1));
              setTotalItems(elements.length);
              setItems(elements);
              editData({
                specs: {
                  ...values.specs,
                  criteria: elements
                },
                updated: true
              });
            };
            const onChangeItem = (index, value) => {
              const data = [...items];
              data[index] = value;
              setItems(data);
              onChange(data);
            };
            for (let i = 0; i < totalItems; ++i) {
              output.push(_react.default.createElement(_criteriaFieldItem.CriteriaFieldItem, {
                onChange: onChangeItem,
                total: totalItems,
                item: items[i],
                onDelete: onDelete,
                key: `name-${i}`,
                index: i
              }));
            }
            return _react.default.createElement("section", {
              className: "form__subsection"
            }, output, _react.default.createElement("footer", {
              className: "section-actions__container actions-end"
            }, onCancel && _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, texts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: onAdd
            }, texts.actions.add)));
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
        hash: 2731306667,
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
        hash: 2833094897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _context = require("./context");
          var _activityModal = require("./components/generation-modal/activity-modal");
          var _breadcrumb = require("./components/generation-modal/breadcrumb");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement(_activityModal.ActivitySuggestionsModal, {
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
        hash: 3679866344,
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
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _contentTheory = require("./activities/content-theory");
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
            // const itemsType = store.activityTypes.get(type);
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
            console.log(1, activity, type);
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: `page-activity-container activity-container--${activity.type}`
            }, _react.default.createElement(_header.ActivityHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                // 'multiple-choice': <MultipleChoiceActivity />,
                // debate: <DebateActivity />,
                // 'character-talk': <CharacterTalkActivity />,
                // spoken: <SpokenActivity />,
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

      /******************************************
      INTERNAL MODULE: ./materials/empty-material
      ******************************************/

      ims.set('./materials/empty-material', {
        hash: 718447887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("../components/generation-modal/materials");
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const disabled = {
              disabled: !activity.aiCompleted
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
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./materials/manual-material-form
      ************************************************/

      ims.set('./materials/manual-material-form', {
        hash: 2283706921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _saveButton = require("../save-button");
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
        hash: 2081351200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialPane = MaterialPane;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _emptyMaterial = require("./empty-material");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJDaGFyYWN0ZXJUYWxrQWN0aXZpdHkiLCJjcmVhdGVFbGVtZW50IiwiX3JlYWN0IiwiX21hbnVhbCIsIl9jb250ZXh0IiwiX2hvb2tzIiwiX3VpIiwiX2xpc3QiLCJDb250ZW50VGhlb3J5QXVkaW8iLCJjb250ZW50IiwiYWN0aXZpdHkiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJtYW51YWwiLCJzZXRNYW51YWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwibWF0ZXJpYWxzIiwiYXVkaW9zIiwic2V0QXVkaW9zIiwidXNlQmluZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlQXVkaW8iLCJlIiwiY29uc29sZSIsImxvZyIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsIm5hbWUiLCJvbkNhbmNlbCIsIkl0ZW0iLCJpdGVtIiwidHlwZSIsInVybCIsImNsYXNzTmFtZSIsIkF1ZGlvUGxheWVyIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwiRnJhZ21lbnQiLCJMaXN0IiwiY29udHJvbCIsImNvbnRhaW5lciIsIkVtcHR5Q2FyZCIsInRleHQiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImFjdGlvbnMiLCJnZW5lcmF0ZSIsIlByb2Nlc3NDb250YWluZXIiLCJfY29tcG9uZW50cyIsIl9tYXJrZG93biIsIl9lbXB0eU1hdGVyaWFsIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsIm9uTWFudWFsIiwiYXJ0aWNsZSIsIk1hcmtkb3duIiwiQnV0dG9uIiwiaWNvbiIsImJvcmRlcmVkIiwiZWRpdCIsIkVtcHR5TWF0ZXJpYWwiLCJfbWF0ZXJpYWxzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwic2V0RGF0YSIsInRvZ2dsZU1vZGFsIiwiZGlzYWJsZWQiLCJhaUNvbXBsZXRlZCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJvbkNsb3NlIiwiX2xhbmd1YWdlRmllbGQiLCJDb250ZW50VGhlb3J5QWN0aXZpdHkiLCJ2YWx1ZXMiLCJlZGl0RGF0YSIsInN0b3JlIiwic2F2ZUVkaXRhYmxlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic2V0Iiwic2F2ZSIsIm9uU2F2ZSIsImRhdGEiLCJzcGVjcyIsIkxhbmd1YWdlRmllbGQiLCJsYWJlbCIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJvYmplY3RpdmUiLCJfZm9ybSIsIl9tb2RhbCIsIl9zYXZlQnV0dG9uIiwic2hvd0NhbmNlbE1vZGFsIiwic2V0U2hvd0NhbmNlTE1vZGFsIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInVwZGF0ZWQiLCJvbkNsaWNrQ2FuY2VsIiwib25Db25maXJtIiwib25Nb2RhbENhbmNlbCIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJjYW5jZWwiLCJTYXZlQnV0dG9uIiwiY2FsbGJhY2siLCJDb25maXJtTW9kYWwiLCJfdGFicyIsIl9hdWRpbyIsIl9kZWxldGVNb2RhbCIsIl9jb250ZW50IiwiQ29udGVudFRoZW9yeUJvZHkiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJlZGl0aW9uIiwic2V0RWRpdGlvbiIsInRvZ2dsZUVkaXRpb24iLCJ0YWJzIiwiZ2V0RGF0YSIsImZvckVhY2giLCJpc0Rpc2FibGVkIiwiZGVwZW5kZW5jaWVzIiwic29tZSIsInByb3BlcnR5IiwiYXR0cnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiaWQiLCJkZWxldGUiLCJEZWxldGVBY3Rpdml0eURhdGEiLCJzaG93IiwiRGViYXRlQWN0aXZpdHkiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJjaGlsZHJlbiIsImVuc3VyZSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkNhbmNlbENoYW5nZXNNb2RhbCIsImNsZWFyRGF0YSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIm1vZGFsIiwiYnRuQ29uZmlybSIsImNvbmZpcm0iLCJidG5DYW5jZWwiLCJjbGVhckNvbnRlbnQiLCJlcnJvciIsImRlbGV0ZU1vZGFsIiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImluZGV4Iiwib25EZWxldGUiLCJoYW5kbGVDaGFuZ2UiLCJJbnB1dCIsInN1YmplY3QiLCJjcml0ZXJpYSIsIlNwb2tlbkNyaXRlcmlhRm9ybSIsInRhc2siLCJhc3Nlc3NtZW50IiwibGVuZ3RoIiwiRm9ybSIsIkNyaXRlcmlhSXRlbSIsIl9jcml0ZXJpYUZpZWxkSXRlbSIsIkNyaXRlcmlhRmllbGQiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsInNldEl0ZW1zIiwib25BZGQiLCJvdXRwdXQiLCJlbGVtZW50cyIsInNsaWNlIiwiY29uY2F0Iiwib25DaGFuZ2VJdGVtIiwiaSIsImFkZCIsIl9haUJ1dHRvbiIsIkFjdGl2aXR5U3VnZ2VzdGlvbnNNb2RhbCIsInNldFZhbHVlcyIsIm9ic2VydmF0aW9ucyIsInJlbW92ZUl0ZW1zIiwiZXZlbnRzIiwic2V0VGltZW91dCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInJlZmluZSIsIl9yb3V0aW5nIiwiQnJlYWRDcnVtYkhlYWRlciIsIm9uQmFjayIsInNldEJyZWFkY3J1bWIiLCJyb3V0aW5nIiwiYmFjayIsIkxpbmsiLCJJY29uIiwiQXBwSWNvbiIsIm1vZHVsZSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJTcGVjc1N1Z2dlc3Rpb25zTW9kYWwiLCJzdWdnZXN0aW9uU3BlY3MiLCJzZXRFcnJvciIsInJlc3BvbnNlIiwiZ2V0RXJyb3IiLCJmaWVsZHMiLCJlcnJvcnMiLCJtZXNzYWdlIiwiRXJyb3JSZW5kZXJlciIsIlN1Z2dlc3Rpb25Nb2RhbCIsIl9yZWFjdFNlbGVjdCIsInNlbGVjdGVkIiwibGFuZ3VhZ2VzIiwic2VsZWN0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsIm9wdGlvbnMiLCJtYXAiLCJzYXZlZCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsIlNlbGVjdEFjdGl2aXR5IiwiZGVmYXVsdFZhbHVlIiwibW9kZWwiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hY3Rpdml0eU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJBY3Rpdml0eUhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwic3JjIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJ0b2dnbGVTdWdnZXN0aW9ucyIsImNscyIsImdlbmVyYXRlUGljdHVyZSIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfY29udGVudFRoZW9yeSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImdldFByb3BlcnRpZXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJNYXRlcmlhbFBhbmUiLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwidG9nZ2xlTWFudWFsIiwiQW5pbWF0ZWRDb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hbnVhbC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS90cmFzaC9ib2R5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2R5bmFtaWMtZmllbGQvY3JpdGVyaWEtZmllbGQtaXRlbS50c3giLCIvdHMvY29tcG9uZW50cy9keW5hbWljLWZpZWxkL2NyaXRlcmlhLWZvcm0udHN4IiwiL3RzL2NvbXBvbmVudHMvZHluYW1pYy1maWVsZC9jcml0ZXJpYS1pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2R5bmFtaWMtZmllbGQvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9hY3Rpdml0eS1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL2JyZWFkY3J1bWIudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9tYXRlcmlhbHMudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zcGVjcy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9nZW5lcmF0aW9uLW1vZGFsL3N1Z2dlc3Rpb25zLW1vZGFsLnRzeCIsIi90cy9jb21wb25lbnRzL2xhbmd1YWdlLWZpZWxkLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2VtcHR5LW1hdGVyaWFsLnRzeCIsIi90cy9tYXRlcmlhbHMvbWFudWFsLW1hdGVyaWFsLWZvcm0udHN4IiwiL3RzL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVQyxxQkFBcUJBLENBQUE7WUFDcEMsT0FBT0YsS0FBQSxDQUFBRyxhQUFBLCtCQUF5QjtVQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxHQUFBLEdBQUFQLE9BQUE7VUFFQSxJQUFBUSxLQUFBLEdBQUFSLE9BQUE7VUFFTSxTQUFVUyxrQkFBa0JBLENBQUM7WUFBRUM7VUFBTyxDQUFvQztZQUMvRSxNQUFNO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWpELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUNOLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDRixRQUFRLENBQUM7WUFDM0UsTUFBTSxDQUFDRyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHbkIsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDUyxTQUFTLENBQUNDLE1BQU0sQ0FBQztZQUNyRSxJQUFBZixNQUFBLENBQUFpQixTQUFTLEVBQUMsQ0FBQ1osUUFBUSxDQUFDUyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDTCxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztZQUVGLE1BQU1TLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSEwsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTVIsUUFBUSxDQUFDUyxTQUFTLENBQUNLLGFBQWEsRUFBRTtnQkFDeENILFNBQVMsQ0FBQ1gsUUFBUSxDQUFDUyxTQUFTLENBQUNDLE1BQU0sQ0FBQztlQUNwQyxDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQztlQUNkLFNBQVM7Z0JBQ1RQLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxJQUFJTCxNQUFNLEVBQUU7Y0FDWCxPQUFPWCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDRSxPQUFBLENBQUF5QixrQkFBa0I7Z0JBQUNDLElBQUksRUFBQyxTQUFTO2dCQUFDQyxRQUFRLEVBQUVBLENBQUEsS0FBTWhCLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFHL0UsTUFBTWlCLElBQUksR0FBR0EsQ0FBQztjQUFFQyxJQUFJLEVBQUVDO1lBQUksQ0FBRSxLQUFJO2NBQy9CLE1BQU07Z0JBQUV2QjtjQUFRLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFRLGdCQUFnQixHQUFFO2NBRXZDLE1BQU1zQixHQUFHLEdBQUd4QixRQUFRLENBQUNTLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDYSxJQUFJLENBQUMsRUFBRUMsR0FBRztjQUNoRCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7Y0FFckIsT0FDQ2hDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2dCQUFLa0MsU0FBUyxFQUFDO2NBQWlCLEdBQy9CakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsYUFBS1UsS0FBSyxDQUFDUSxTQUFTLENBQUNjLElBQUksQ0FBQyxDQUFNLEVBQ2hDL0IsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBOEIsV0FBVztnQkFBQ0YsR0FBRyxFQUFFZCxNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFDQztjQUFHLEVBQUksQ0FDakM7WUFFUixDQUFDO1lBRUQsSUFBSWQsTUFBTSxFQUFFO2NBQ1gsTUFBTWlCLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNuQixNQUFNLENBQUM7Y0FDakMsT0FDQ2xCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUFDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBeUIsUUFBQSxRQUNDdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ00sS0FBQSxDQUFBa0MsSUFBSTtnQkFBQ04sU0FBUyxFQUFDLGVBQWU7Z0JBQUNFLEtBQUssRUFBRUEsS0FBSztnQkFBRUssT0FBTyxFQUFFWCxJQUFJO2dCQUFFWSxTQUFTLEVBQUM7Y0FBSyxFQUFHLENBQzdFOztZQUlMLE9BQ0N6QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFBQyxNQUFBLENBQUFhLE9BQUEsQ0FBQXlCLFFBQUEsUUFDQ3RDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNLLEdBQUEsQ0FBQXNDLFNBQVM7Y0FDVFQsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQlUsSUFBSSxFQUFFbEMsS0FBSyxDQUFDbUMsVUFBVSxDQUFDQyxLQUFLLENBQUNDLEtBQUs7Y0FDbENDLFdBQVcsRUFBRXRDLEtBQUssQ0FBQ21DLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDRTtZQUFXLEdBRS9DL0MsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBS2tDLFNBQVMsRUFBQztZQUFtQixHQUNqQ2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNLLEdBQUEsQ0FBQTRDLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFNUIsVUFBVTtjQUFFNkIsT0FBTyxFQUFDO1lBQVMsR0FDOUN6QyxLQUFLLENBQUMwQyxPQUFPLENBQUNDLFFBQVEsQ0FDYixDQUNOLEVBRU5wRCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUFpRCxnQkFBZ0I7Y0FBQ3RDLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzdCLENBQ1Y7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUEsSUFBQXVDLFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxPQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBMEQsU0FBQSxHQUFBMUQsT0FBQTtVQUdBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUEyRCxjQUFBLEdBQUEzRCxPQUFBO1VBSEE7O1VBS00sU0FBVTRELG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUVqRCxRQUFRO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHWixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNNEMsY0FBYyxHQUFHQSxDQUFBLEtBQU05QyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU0rQyxRQUFRLEdBQUdBLENBQUEsS0FBTS9DLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBQVQsTUFBQSxDQUFBaUIsU0FBUyxFQUFDLENBQUNaLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ0wsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRixJQUFJRCxNQUFNLEVBQUU7Y0FDWCxPQUFPWCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDRSxPQUFBLENBQUF5QixrQkFBa0I7Z0JBQUNDLElBQUksRUFBQyxTQUFTO2dCQUFDQyxRQUFRLEVBQUUrQjtjQUFRLEVBQUk7O1lBR2pFLElBQUluRCxRQUFRLENBQUNTLFNBQVMsQ0FBQzJDLE9BQU8sRUFBRTtjQUMvQixPQUNDNUQsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQUMsTUFBQSxDQUFBYSxPQUFBLENBQUF5QixRQUFBLFFBQ0N0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtnQkFBU2tDLFNBQVMsRUFBQztjQUFtQixHQUNyQ2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN3RCxTQUFBLENBQUFNLFFBQVE7Z0JBQUN0RCxPQUFPLEVBQUVDLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDMkM7Y0FBTyxFQUFJLENBQ3hDLEVBQ1Y1RCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtnQkFBS2tDLFNBQVMsRUFBQztjQUF3RSxHQUN0RmpDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN1RCxXQUFBLENBQUFRLE1BQU07Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDZCxPQUFPLEVBQUVTLGNBQWM7Z0JBQUVSLE9BQU8sRUFBQyxTQUFTO2dCQUFDYyxRQUFRO2NBQUEsR0FDckV2RCxLQUFLLENBQUMwQyxPQUFPLENBQUNjLElBQUksQ0FDWCxDQUNKLENBQ0o7O1lBR0wsT0FBT2pFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN5RCxjQUFBLENBQUFVLGFBQWE7Y0FBQ3ZDLElBQUksRUFBQyxTQUFTO2NBQUNnQyxRQUFRLEVBQUVEO1lBQWMsRUFBSTtVQUNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQTFELE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFPLEdBQUEsR0FBQVAsT0FBQTtVQUdBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUF5RCxXQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQXNFLFVBQUEsR0FBQXRFLE9BQUE7VUFFTSxTQUFVcUUsYUFBYUEsQ0FBQztZQUFFdkMsSUFBSTtZQUFFZ0M7VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FBRW5ELFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUMwRCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUdyRSxNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuRSxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoQixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDTixRQUFRLENBQUNTLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDO1lBQzNFLE1BQU0sR0FBR3VELE9BQU8sQ0FBQyxHQUFHdEUsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDUyxTQUFTLENBQUNVLElBQUksQ0FBQyxDQUFDO1lBRTVELE1BQU00QyxXQUFXLEdBQUdBLENBQUEsS0FBTUYsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQzlELElBQUFqRSxNQUFBLENBQUFpQixTQUFTLEVBQUMsQ0FBQ1osUUFBUSxDQUFDUyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDRCxXQUFXLENBQUNSLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDRixRQUFRLENBQUM7Y0FDeEN1RCxPQUFPLENBQUM5RCxRQUFRLENBQUNTLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTTZDLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQ2hFLFFBQVEsQ0FBQ2lFO1lBQVcsQ0FBRTtZQUNwRCxPQUNDekUsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQUMsTUFBQSxDQUFBYSxPQUFBLENBQUF5QixRQUFBLFFBQ0N0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUFzQyxTQUFTO2NBQ1RULFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JVLElBQUksRUFBRWxDLEtBQUssQ0FBQ21DLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLO2NBQ2xDQyxXQUFXLEVBQUV0QyxLQUFLLENBQUNtQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0U7WUFBVyxHQUUvQy9DLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQUtrQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBUSxNQUFNO2NBQUNaLE9BQU8sRUFBQyxTQUFTO2NBQUNjLFFBQVE7Y0FBQ2YsT0FBTyxFQUFFVTtZQUFRLEdBQ2xEbEQsS0FBSyxDQUFDMEMsT0FBTyxDQUFDeEMsTUFBTSxDQUNiLEVBQ1RYLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNLLEdBQUEsQ0FBQTRDLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFc0IsV0FBVztjQUFFckIsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLc0I7WUFBUSxHQUM1RC9ELEtBQUssQ0FBQzBDLE9BQU8sQ0FBQ0MsUUFBUSxDQUNiLENBQ04sRUFFTnBELE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNLLEdBQUEsQ0FBQWlELGdCQUFnQjtjQUFDdEMsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDN0IsRUFDWHFELGVBQWUsSUFBSXBFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNvRSxVQUFBLENBQUFPLHlCQUF5QjtjQUFDM0MsSUFBSSxFQUFFSixJQUFJO2NBQUVnRCxPQUFPLEVBQUVKO1lBQVcsRUFBSSxDQUNqRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBM0UsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStFLGNBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBTyxHQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFHTSxTQUFVZ0YscUJBQXFCQSxDQUFBO1lBQ3BDLE1BQU07Y0FBRUMsTUFBTTtjQUFFckUsS0FBSztjQUFFRCxRQUFRO2NBQUV1RSxRQUFRO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUE5RSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3ZFLE1BQU11RSxZQUFZLEdBQUcsTUFBQUEsQ0FBTztjQUFFQyxhQUFhLEVBQUU7Z0JBQUV2RCxJQUFJO2dCQUFFd0Q7Y0FBSztZQUFFLENBQUUsS0FBSTtjQUNqRUosUUFBUSxDQUFDO2dCQUFFLENBQUNwRCxJQUFJLEdBQUd3RDtjQUFLLENBQUUsQ0FBQztjQUMzQixNQUFNM0UsUUFBUSxDQUFDNEUsR0FBRyxDQUFDO2dCQUFFLENBQUN6RCxJQUFJLEdBQUd3RDtjQUFLLENBQUUsQ0FBQztjQUNyQyxNQUFNSCxLQUFLLENBQUNLLElBQUksRUFBRTtZQUNuQixDQUFDO1lBQ0QsTUFBTUMsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRUosYUFBYSxFQUFFO2dCQUFFdkQsSUFBSTtnQkFBRXdEO2NBQUs7WUFBRSxDQUFFLEtBQUk7Y0FDM0QsTUFBTUksSUFBSSxHQUFHO2dCQUFFQyxLQUFLLEVBQUU7a0JBQUUsR0FBR2hGLFFBQVEsQ0FBQ2dGLEtBQUs7a0JBQUUsQ0FBQzdELElBQUksR0FBR3dEO2dCQUFLO2NBQUUsQ0FBRTtjQUM1REosUUFBUSxDQUFDUSxJQUFJLENBQUM7Y0FDZCxNQUFNL0UsUUFBUSxDQUFDNEUsR0FBRyxDQUFDRyxJQUFJLENBQUM7Y0FDeEIsTUFBTVAsS0FBSyxDQUFDSyxJQUFJLEVBQUU7WUFDbkIsQ0FBQztZQUVELE9BQ0N6RixLQUFBLENBQUFHLGFBQUEsQ0FBQUgsS0FBQSxDQUFBMEMsUUFBQSxRQUNDMUMsS0FBQSxDQUFBRyxhQUFBO2NBQUtrQyxTQUFTLEVBQUM7WUFBYSxHQUMzQnJDLEtBQUEsQ0FBQUcsYUFBQSxDQUFDNkUsY0FBQSxDQUFBYSxhQUFhLE9BQUcsQ0FDWixFQUNON0YsS0FBQSxDQUFBRyxhQUFBO2NBQUtrQyxTQUFTLEVBQUM7WUFBYSxHQUMzQnJDLEtBQUEsQ0FBQUcsYUFBQSxnQixLQUFTVSxLQUFLLENBQUNtQyxVQUFVLENBQUNHLFdBQVcsQ0FBQzJDLEtBQUssQ0FBUyxFQUNwRDlGLEtBQUEsQ0FBQUcsYUFBQSxDQUFDSyxHQUFBLENBQUF1RixlQUFlO2NBQ2ZoRSxJQUFJLEVBQUMsYUFBYTtjQUNsQmlFLFFBQVEsRUFBQyxHQUFHO2NBQ1pOLE1BQU0sRUFBRUwsWUFBWTtjQUNwQlksV0FBVyxFQUFFcEYsS0FBSyxDQUFDbUMsVUFBVSxDQUFDRyxXQUFXLENBQUM4QyxXQUFXO2NBQ3JEdEYsT0FBTyxFQUFFQyxRQUFRLENBQUN1QztZQUFXLEVBQzVCLENBQ0csRUFDTm5ELEtBQUEsQ0FBQUcsYUFBQTtjQUFLa0MsU0FBUyxFQUFDO1lBQWEsR0FDM0JyQyxLQUFBLENBQUFHLGFBQUEsZ0JBQVFVLEtBQUssQ0FBQytFLEtBQUssQ0FBQ00sU0FBUyxDQUFDSixLQUFLLENBQVMsRUFDNUM5RixLQUFBLENBQUFHLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBdUYsZUFBZTtjQUNmaEUsSUFBSSxFQUFDLFdBQVc7Y0FDaEIyRCxNQUFNLEVBQUVBLE1BQU07Y0FDZE8sV0FBVyxFQUFFcEYsS0FBSyxDQUFDK0UsS0FBSyxDQUFDTSxTQUFTLENBQUNELFdBQVc7Y0FDOUN0RixPQUFPLEVBQUV1RSxNQUFNLENBQUNVLEtBQUssRUFBRU07WUFBUyxFQUMvQixDQUNHLENBRUo7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQXhDLFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBa0csS0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFtRyxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQW9HLFdBQUEsR0FBQXBHLE9BQUE7VUFFTSxTQUFVNkIsa0JBQWtCQSxDQUFDO1lBQ2xDQyxJQUFJO1lBQ0pwQixPQUFPO1lBQ1BxQjtVQUFRLENBS1I7WUFDQSxNQUFNO2NBQUVrRCxNQUFNO2NBQUVDLFFBQVE7Y0FBRXZFLFFBQVE7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUN3RixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUduRyxNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVuRSxNQUFNc0YsUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNuQixhQUFhO2NBQ2xDLE1BQU1qRSxTQUFTLEdBQUc7Z0JBQUUsR0FBRzZELE1BQU0sQ0FBQzdEO2NBQVMsQ0FBRTtjQUN6Q08sT0FBTztjQUNQdUQsUUFBUSxDQUFDO2dCQUFFOUQsU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ1UsSUFBSSxHQUFHMkUsTUFBTSxDQUFDbkI7Z0JBQUssQ0FBRTtnQkFBRW9CLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRSxDQUFDO1lBRUQsTUFBTUMsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSTFCLE1BQU0sQ0FBQ3lCLE9BQU8sRUFBRTtnQkFDbkJKLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR2RSxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZFLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCLE1BQU14RixTQUFTLEdBQUc7Z0JBQUUsR0FBRzZELE1BQU0sQ0FBQzdEO2NBQVMsQ0FBRTtjQUN6QzhELFFBQVEsQ0FBQztnQkFBRTlELFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUNVLElBQUksR0FBR25CLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDVSxJQUFJO2dCQUFDLENBQUU7Z0JBQUU0RSxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDM0ZKLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnZFLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNOEUsYUFBYSxHQUFHQSxDQUFBLEtBQU1QLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNYixNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQlAsUUFBUSxDQUFDO2dCQUFFd0IsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO1lBQzdCLENBQUM7WUFDRCxPQUNDdkcsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQUMsTUFBQSxDQUFBYSxPQUFBLENBQUF5QixRQUFBLFFBQ0N0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFLa0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2dHLEtBQUEsQ0FBQVksUUFBUTtjQUNSUCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJ6RSxJQUFJLEVBQUMsU0FBUztjQUNkd0QsS0FBSyxFQUFFTCxNQUFNLENBQUM3RCxTQUFTLEdBQUdVLElBQUksQ0FBQyxJQUFJLEVBQUU7Y0FDckNrRSxXQUFXLEVBQUVwRixLQUFLLENBQUNFLE1BQU0sQ0FBQ2lHO1lBQVEsRUFDakMsQ0FDRyxFQUNONUcsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBUWtDLFNBQVMsRUFBQztZQUF3QyxHQUN6RGpDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN1RCxXQUFBLENBQUFRLE1BQU07Y0FBQ2IsT0FBTyxFQUFFdUQsYUFBYTtjQUFFdEQsT0FBTyxFQUFDLFNBQVM7Y0FBQ2MsUUFBUTtZQUFBLEdBQ3hEdkQsS0FBSyxDQUFDMEMsT0FBTyxDQUFDMEQsTUFBTSxDQUNiLEVBQ1Q3RyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDa0csV0FBQSxDQUFBYSxVQUFVO2NBQUNDLFFBQVEsRUFBRXpCO1lBQU0sRUFBSSxDQUN4QixFQUNSWSxlQUFlLElBQ2ZsRyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDaUcsTUFBQSxDQUFBZ0IsWUFBWTtjQUFDUCxTQUFTLEVBQUVBLFNBQVM7Y0FBRTdFLFFBQVEsRUFBRThFO1lBQWEsR0FDMUQxRyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxjQUFNVSxLQUFLLENBQUNFLE1BQU0sQ0FBQ2tHLE1BQU0sQ0FBTyxDQUVqQyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBLElBQUE3RyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBb0gsS0FBQSxHQUFBcEgsT0FBQTtVQUNBLElBQUFxSCxNQUFBLEdBQUFySCxPQUFBO1VBQ0EsSUFBQXlELFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBc0gsWUFBQSxHQUFBdEgsT0FBQTtVQUNBLElBQUF1SCxRQUFBLEdBQUF2SCxPQUFBO1VBRU0sU0FBVXdILGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUU3RyxRQUFRO2NBQUVDLEtBQUs7Y0FBRXFFLE1BQU07Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQTdFLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxHQUFHTSxXQUFXLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUNOLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDRixRQUFRLENBQUM7WUFDbkUsTUFBTSxHQUFHdUQsT0FBTyxDQUFDLEdBQUd0RSxNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDTixRQUFRLENBQUNTLFNBQVMsQ0FBQzJDLE9BQU8sQ0FBQztZQUM5RCxNQUFNLENBQUMwRCxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd2SCxNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNLENBQUMwRyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHekgsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTTRHLGFBQWEsR0FBR0EsQ0FBQSxLQUFNRCxVQUFVLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO1lBQ2hELE1BQU1qRCxXQUFXLEdBQUdBLENBQUEsS0FBTWdELGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxNQUFNbEIsUUFBUSxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO1lBQ3pCLE1BQU11QixJQUFJLEdBQUcsRUFBRTtZQUVmLElBQUF4SCxNQUFBLENBQUFpQixTQUFTLEVBQUMsQ0FBQ1osUUFBUSxDQUFDUyxTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDRCxXQUFXLENBQUNSLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDRixRQUFRLENBQUM7Y0FDeEN1RCxPQUFPLENBQUM7Z0JBQUVyRCxTQUFTLEVBQUVULFFBQVEsQ0FBQ1MsU0FBUyxDQUFDMkcsT0FBTyxFQUFFO2dCQUFFckIsT0FBTyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ3BFLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQy9GLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDa0IsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUMxQzNCLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDa0IsS0FBSyxDQUFDMEYsT0FBTyxDQUFDL0YsSUFBSSxJQUFHO2NBQ3ZDLE1BQU1ILElBQUksR0FBRyxPQUFPRyxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0gsSUFBSTtjQUN4RCxNQUFNK0QsS0FBSyxHQUFHakYsS0FBSyxDQUFDUSxTQUFTLENBQUNVLElBQUksQ0FBQztjQUVuQyxNQUFNbUcsVUFBVSxHQUFHLENBQUMsTUFBSztnQkFDeEIsSUFBSSxDQUFDaEcsSUFBSSxFQUFFaUcsWUFBWSxFQUFFLE9BQU8sS0FBSztnQkFDckMsSUFBSSxPQUFPakcsSUFBSSxFQUFFaUcsWUFBWSxLQUFLLFFBQVEsRUFBRSxPQUFPLENBQUN2SCxRQUFRLENBQUNTLFNBQVMsQ0FBQ2EsSUFBSSxDQUFDaUcsWUFBWSxDQUFDO2dCQUN6RixPQUFPakcsSUFBSSxDQUFDaUcsWUFBWSxDQUFDQyxJQUFJLENBQUNDLFFBQVEsSUFBSSxDQUFDekgsUUFBUSxDQUFDUyxTQUFTLENBQUNnSCxRQUFRLENBQUMsQ0FBQztjQUN6RSxDQUFDLEVBQUMsQ0FBRTtjQUNKLE1BQU1DLEtBQUssR0FBRztnQkFBRTFELFFBQVEsRUFBRXNEO2NBQVUsQ0FBRTtjQUV0Q0gsSUFBSSxDQUFDUSxJQUFJLENBQ1JuSSxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDa0gsS0FBQSxDQUFBbUIsR0FBRztnQkFBQSxHQUFLRixLQUFLO2dCQUFFRyxHQUFHLEVBQUUsR0FBRzdILFFBQVEsQ0FBQzhILEVBQUUsSUFBSTNHLElBQUk7Y0FBTSxHQUMvQytELEtBQUssQ0FDRCxDQUNOO1lBQ0YsQ0FBQyxDQUFDO1lBRUYsTUFBTXdDLEtBQUssR0FBRztjQUFFakYsT0FBTyxFQUFFc0IsV0FBVztjQUFFQyxRQUFRLEVBQUVoRSxRQUFRLENBQUNnRixLQUFLLENBQUMzQyxLQUFLLElBQUlyQyxRQUFRLENBQUNTLFNBQVMsQ0FBQzRCO1lBQUssQ0FBRTtZQUNsRyxPQUNDN0MsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQUMsTUFBQSxDQUFBYSxPQUFBLENBQUF5QixRQUFBLFFBQ0N0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFRa0MsU0FBUyxFQUFDO1lBQTBCLEdBQzNDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsYUFBS1UsS0FBSyxDQUFDK0UsS0FBSyxDQUFDMUMsS0FBSyxDQUFNLEVBRTVCOUMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBS2tDLFNBQVMsRUFBQztZQUFnQyxHQUM5Q2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN1RCxXQUFBLENBQUFRLE1BQU07Y0FBQ1osT0FBTyxFQUFDLE1BQU07Y0FBQSxHQUFLZ0YsS0FBSztjQUFFbkUsSUFBSSxFQUFDO1lBQVEsR0FDN0N0RCxLQUFLLENBQUMwQyxPQUFPLENBQUNvRixNQUFNLENBQ2IsQ0FDSixDQUNFLEVBQ1R2SSxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDcUgsUUFBQSxDQUFBM0Qsb0JBQW9CLE9BQUcsRUFDeEJ6RCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDbUgsTUFBQSxDQUFBNUcsa0JBQWtCLE9BQUcsRUFDdEJOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNvSCxZQUFBLENBQUFxQixrQkFBa0I7Y0FBQ0MsSUFBSSxFQUFFbkIsZUFBZTtjQUFFM0MsT0FBTyxFQUFFSjtZQUFXLEVBQUksQ0FDakU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEsSUFBQTNFLEtBQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVU2SSxjQUFjQSxDQUFBO1lBQzdCLE9BQU85SSxLQUFBLENBQUFHLGFBQUEsdUJBQWlCO1VBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFILEtBQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVU4SSxzQkFBc0JBLENBQUE7WUFDckMsT0FBTy9JLEtBQUEsQ0FBQUcsYUFBQSxnQ0FBMEI7VUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUgsS0FBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVStJLGNBQWNBLENBQUE7WUFDN0IsT0FBT2hKLEtBQUEsQ0FBQUcsYUFBQSx1QkFBaUI7VUFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFnSixNQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQXlELFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBaUosT0FBQSxHQUFBakosT0FBQTtVQUNBLElBQUFrSixXQUFBLEdBQUFsSixPQUFBO1VBQ087VUFBVSxTQUFVbUQsUUFBUUEsQ0FBQztZQUFFZ0csUUFBUTtZQUFFL0YsT0FBTztZQUFFZ0csTUFBTSxHQUFHLElBQUk7WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDakYsTUFBTUMsV0FBVyxHQUFHRixNQUFNLEdBQUcsTUFBTUYsV0FBQSxDQUFBSyxZQUFZLENBQUNDLGFBQWEsQ0FBQ3BHLE9BQU8sQ0FBQyxHQUFHQSxPQUFPO1lBQ2hGLE9BQ0NqRCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBUSxNQUFNO2NBQUEsR0FBS29GLEtBQUs7Y0FBRW5GLElBQUksRUFBRThFLE1BQUEsQ0FBQVMsS0FBSyxDQUFDQyxPQUFPO2NBQUV0RyxPQUFPLEVBQUVrRztZQUFXLEdBQzFESCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVVEsWUFBWUEsQ0FBQztZQUFFUixRQUFRO1lBQUUvRixPQUFPO1lBQUVnRyxNQUFNLEdBQUcsSUFBSTtZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNyRixNQUFNQyxXQUFXLEdBQUdGLE1BQU0sR0FBRyxNQUFNRixXQUFBLENBQUFLLFlBQVksQ0FBQ0MsYUFBYSxDQUFDcEcsT0FBTyxDQUFDLEdBQUdBLE9BQU87WUFDaEYsT0FDQ2pELE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUMrSSxPQUFBLENBQUFXLFVBQVU7Y0FBQSxHQUFLUCxLQUFLO2NBQUVuRixJQUFJLEVBQUU4RSxNQUFBLENBQUFTLEtBQUssQ0FBQ0MsT0FBTztjQUFFdEcsT0FBTyxFQUFFa0c7WUFBVyxHQUM5REgsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFoRCxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ00sU0FBVTZKLGtCQUFrQkEsQ0FBQztZQUFFakIsSUFBSTtZQUFFOUQ7VUFBTyxDQUFFO1lBQ25ELE1BQU07Y0FBRUcsTUFBTTtjQUFFdEUsUUFBUTtjQUFFd0UsS0FBSztjQUFFdkUsS0FBSztjQUFFa0o7WUFBUyxDQUFFLEdBQUcsSUFBQXpKLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDeEUsSUFBSSxDQUFDK0gsSUFBSSxFQUFFLE9BQU8sS0FBSztZQUN2QixNQUFNaEMsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJrRCxTQUFTLEVBQUU7Y0FDWDNFLEtBQUssQ0FBQzRFLFlBQVksR0FBR0MsU0FBUztjQUM5QmxGLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDM0UsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2lHLE1BQUEsQ0FBQWdCLFlBQVk7Y0FDWnlCLElBQUk7Y0FDSjNGLEtBQUssRUFBRXJDLEtBQUssQ0FBQ3FKLEtBQUssQ0FBQ2pELE1BQU0sQ0FBQy9ELEtBQUs7Y0FDL0JILElBQUksRUFBRWxDLEtBQUssQ0FBQ3FKLEtBQUssQ0FBQ2pELE1BQU0sQ0FBQzlELFdBQVc7Y0FDcEM0QixPQUFPLEVBQUVBLE9BQU87Y0FDaEIvQyxRQUFRLEVBQUUrQyxPQUFPO2NBQ2pCb0YsVUFBVSxFQUFFO2dCQUFFckUsS0FBSyxFQUFFakYsS0FBSyxDQUFDMEMsT0FBTyxDQUFDNkc7Y0FBTyxDQUFFO2NBQzVDQyxTQUFTLEVBQUU7Z0JBQUV2RSxLQUFLLEVBQUVqRixLQUFLLENBQUMwQyxPQUFPLENBQUMwRDtjQUFNLENBQUU7Y0FDMUNKLFNBQVMsRUFBRUEsQ0FBQSxLQUFLO2dCQUNmQSxTQUFTLEVBQUU7Y0FDWjtZQUFDLEVBQ0E7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQVQsTUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUVNLFNBQVUySSxrQkFBa0JBLENBQUM7WUFBRUMsSUFBSTtZQUFFOUQ7VUFBTyxDQUFFO1lBQ25ELE1BQU0sQ0FBQzVELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoQixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNO2NBQ0xMLEtBQUssRUFBRTtnQkFBRW1DLFVBQVUsRUFBRW5DLEtBQUs7Z0JBQUUwQztjQUFPLENBQUU7Y0FDckMzQyxRQUFRO2NBQ1J1RTtZQUFRLENBQ1IsR0FBRyxJQUFBN0UsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0QixJQUFJLENBQUMrSCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1oQyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0h6RixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQjJELE9BQU8sRUFBRTtnQkFDVCxNQUFNbkUsUUFBUSxDQUFDMEosWUFBWSxFQUFFO2dCQUU3QixNQUFNM0UsSUFBSSxHQUFHO2tCQUFFQyxLQUFLLEVBQUVoRixRQUFRLENBQUNnRixLQUFLLENBQUNvQyxPQUFPLEVBQUU7a0JBQUUzRyxTQUFTLEVBQUVULFFBQVEsQ0FBQ1MsU0FBUyxDQUFDMkcsT0FBTyxFQUFFO2tCQUFFckIsT0FBTyxFQUFFO2dCQUFLLENBQUU7Z0JBRXpHeEIsUUFBUSxDQUFDUSxJQUFJLENBQUM7ZUFDZCxDQUFDLE9BQU9oRSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQzJJLEtBQUssQ0FBQzVJLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUUCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsT0FDQ2hCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUFDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBeUIsUUFBQSxRQUNDdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2lHLE1BQUEsQ0FBQWdCLFlBQVk7Y0FDWnlCLElBQUk7Y0FDSjlELE9BQU8sRUFBRUEsT0FBTztjQUNoQjhCLFNBQVMsRUFBRUEsU0FBUztjQUNwQnNELFVBQVUsRUFBRTtnQkFBRXJFLEtBQUssRUFBRXZDLE9BQU8sQ0FBQzZHO2NBQU8sQ0FBRTtjQUN0Q0MsU0FBUyxFQUFFO2dCQUFFdkUsS0FBSyxFQUFFdkMsT0FBTyxDQUFDMEQ7Y0FBTSxDQUFFO2NBQ3BDakYsUUFBUSxFQUFFK0M7WUFBTyxHQUVqQjNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLGFBQUtVLEtBQUssQ0FBQzJKLFdBQVcsQ0FBQ3RILEtBQUssQ0FBTSxFQUNsQzlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLFlBQUlVLEtBQUssQ0FBQzJKLFdBQVcsQ0FBQ3JILFdBQVcsQ0FBSyxDQUN4QixDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUEvQyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBa0csS0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUF5RCxXQUFBLEdBQUF6RCxPQUFBO1VBRUEsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBRU0sU0FBVXdLLGlCQUFpQkEsQ0FBQztZQUFFQyxLQUFLO1lBQUV4SSxJQUFJO1lBQUV5SSxLQUFLO1lBQUVDLFFBQVE7WUFBRXBFO1VBQVEsQ0FBRTtZQUMzRSxNQUFNO2NBQUUzRjtZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXBDLE1BQU0rSixZQUFZLEdBQUdwRSxLQUFLLElBQUc7Y0FDNUIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNuQixhQUFhO2NBQ2xDLE1BQU1LLElBQUksR0FBRztnQkFBRSxHQUFHekQ7Y0FBSSxDQUFFO2NBQ3hCeUQsSUFBSSxDQUFDZSxNQUFNLENBQUMzRSxJQUFJLENBQUMsR0FBRzJFLE1BQU0sQ0FBQ25CLEtBQUs7Y0FDaENpQixRQUFRLENBQUNtRSxLQUFLLEVBQUVoRixJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUVELE9BQ0N2RixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFLa0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2dHLEtBQUEsQ0FBQTJFLEtBQUs7Y0FDTHRFLFFBQVEsRUFBRXFFLFlBQVk7Y0FDdEIvRSxLQUFLLEVBQUVqRixLQUFLLENBQUMrRSxLQUFLLENBQUNtRixPQUFPLENBQUNqRixLQUFLO2NBQ2hDRyxXQUFXLEVBQUVwRixLQUFLLENBQUMrRSxLQUFLLENBQUNvRixRQUFRLENBQUMvRSxXQUFXO2NBQzdDVixLQUFLLEVBQUVyRCxJQUFJLENBQUNILElBQUk7Y0FDaEJBLElBQUksRUFBQyxNQUFNO2NBQ1hNLFNBQVMsRUFBQztZQUFlLEVBQ3hCLEVBQ0ZqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDZ0csS0FBQSxDQUFBWSxRQUFRO2NBQ1JQLFFBQVEsRUFBRXFFLFlBQVk7Y0FDdEIvRSxLQUFLLEVBQUVqRixLQUFLLENBQUMrRSxLQUFLLENBQUNvRixRQUFRLENBQUNsRixLQUFLO2NBQ2pDUCxLQUFLLEVBQUVyRCxJQUFJLENBQUM2SSxPQUFPO2NBQ25COUUsV0FBVyxFQUFFcEYsS0FBSyxDQUFDK0UsS0FBSyxDQUFDbUYsT0FBTyxDQUFDOUUsV0FBVztjQUM1Q2xFLElBQUksRUFBQztZQUFTLEVBQ2IsRUFDRDJJLEtBQUssR0FBRyxDQUFDLElBQ1R0SyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFLa0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQVEsTUFBTTtjQUFDWixPQUFPLEVBQUMsTUFBTTtjQUFDRCxPQUFPLEVBQUVBLENBQUEsS0FBTXVILFFBQVEsQ0FBQ0QsS0FBSztZQUFDLEdBQ25ELEdBQUcsRUFDSDlKLEtBQUssQ0FBQzBDLE9BQU8sQ0FBQ29GLE1BQU0sQ0FDYixDQUVWLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQXZJLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFrRyxLQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQXlELFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUVBLElBQUFvRyxXQUFBLEdBQUFwRyxPQUFBO1VBRU0sU0FBVWdMLGtCQUFrQkEsQ0FBQztZQUFFako7VUFBUSxDQUFFO1lBQzlDLE1BQU07Y0FBRWtELE1BQU07Y0FBRXJFLEtBQUs7Y0FBRXNFLFFBQVE7Y0FBRXZFO1lBQVEsQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDaEUsTUFBTSxDQUFDd0YsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTRGLGFBQWEsR0FBR0EsQ0FBQSxLQUFNUCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTTNCLFFBQVEsR0FBRyxDQUFDTSxNQUFNLENBQUNVLEtBQUssQ0FBQ3NGLElBQUksSUFBSSxDQUFDaEcsTUFBTSxDQUFDVSxLQUFLLENBQUN1RixVQUFVLElBQUksQ0FBQ2pHLE1BQU0sQ0FBQ1UsS0FBSyxDQUFDb0YsUUFBUSxFQUFFSSxNQUFNO1lBQ2pHLE1BQU14RSxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJMUIsTUFBTSxDQUFDeUIsT0FBTyxFQUFFO2dCQUNuQkosa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FHRHBCLFFBQVEsQ0FBQztnQkFBRVMsS0FBSyxFQUFFaEYsUUFBUSxDQUFDZ0YsS0FBSyxDQUFDb0MsT0FBTyxFQUFFO2dCQUFFckIsT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzdEM0UsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUVELE1BQU02RSxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0Qk4sa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCcEIsUUFBUSxDQUFDO2dCQUFFUyxLQUFLLEVBQUVoRixRQUFRLENBQUNnRixLQUFLLENBQUNvQyxPQUFPLEVBQUU7Z0JBQUVyQixPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDN0QzRSxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsT0FDQzVCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNnRyxLQUFBLENBQUFrRixJQUFJO2NBQUNoSixTQUFTLEVBQUM7WUFBZ0IsR0FFL0JqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFRa0MsU0FBUyxFQUFDO1lBQW1ELEdBQ3BFakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQVEsTUFBTTtjQUFDYixPQUFPLEVBQUV1RCxhQUFhO2NBQUV0RCxPQUFPLEVBQUMsU0FBUztjQUFDYyxRQUFRO1lBQUEsR0FDeER2RCxLQUFLLENBQUMwQyxPQUFPLENBQUMwRCxNQUFNLENBQ2IsRUFDVDdHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNrRyxXQUFBLENBQUFhLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFbkYsUUFBUTtjQUFFNEMsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDOUMsRUFDUjBCLGVBQWUsSUFDZmxHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpRyxNQUFBLENBQUFnQixZQUFZO2NBQUNQLFNBQVMsRUFBRUEsU0FBUztjQUFFN0UsUUFBUSxFQUFFOEU7WUFBYSxHQUMxRDFHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLGNBQU1VLEtBQUssQ0FBQ0UsTUFBTSxDQUFDa0csTUFBTSxDQUFPLENBRWpDLENBQ0s7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQTdHLE1BQUEsR0FBQUgsT0FBQTtVQUVNLFNBQVVxTCxZQUFZQSxDQUFDO1lBQUUzRjtVQUFJLENBQStDO1lBQ2pGLE9BQ0N2RixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFLa0MsU0FBUyxFQUFDO1lBQWdCLEdBQzlCakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBUWtDLFNBQVMsRUFBQztZQUFZLEdBQUVzRCxJQUFJLENBQUM1RCxJQUFJLEUsS0FBWSxFLEtBQUMzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxlQUFPd0YsSUFBSSxDQUFDb0YsT0FBTyxDQUFRLENBQzVFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQTNLLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUF5RCxXQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQXNMLGtCQUFBLEdBQUF0TCxPQUFBO1VBUU0sU0FBVXVMLGFBQWFBLENBQUM7WUFBRTdGLElBQUk7WUFBRWEsUUFBUTtZQUFFeEUsUUFBUSxHQUFHaUk7VUFBUyxDQUFzQjtZQUN6RixNQUFNO2NBQUUvRSxNQUFNO2NBQUVDLFFBQVE7Y0FBRXRFO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDdEQsTUFBTSxDQUFDMkssVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3RMLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUN5RSxJQUFJLEVBQUV5RixNQUFNLElBQUksQ0FBQyxDQUFDO1lBRXJFLE1BQU0sQ0FBQzdJLEtBQUssRUFBRW9KLFFBQVEsQ0FBQyxHQUFHdkwsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQ3lFLElBQUksRUFBRXlGLE1BQU0sR0FBRyxDQUFDLEdBQUdsRyxNQUFNLENBQUNVLEtBQUssQ0FBQ29GLFFBQVEsQ0FBQyxHQUFHLENBQUM7Y0FBRWpKLElBQUksRUFBRSxFQUFFO2NBQUVnSixPQUFPLEVBQUU7WUFBRSxDQUFFLENBQUMsQ0FBQztZQUVqSCxNQUFNYSxLQUFLLEdBQUdBLENBQUEsS0FBSztjQUNsQkYsYUFBYSxDQUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO2NBQzdCRSxRQUFRLENBQUMsQ0FBQyxHQUFHcEosS0FBSyxFQUFFO2dCQUFFUixJQUFJLEVBQUUsRUFBRTtnQkFBRWdKLE9BQU8sRUFBRTtjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFDRCxNQUFNYyxNQUFNLEdBQUcsRUFBRTtZQUNqQixNQUFNakIsUUFBUSxHQUFHRCxLQUFLLElBQUc7Y0FDeEIsTUFBTW1CLFFBQVEsR0FBR3ZKLEtBQUssQ0FBQ3dKLEtBQUssQ0FBQyxDQUFDLEVBQUVwQixLQUFLLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQ3pKLEtBQUssQ0FBQ3dKLEtBQUssQ0FBQ3BCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztjQUNyRWUsYUFBYSxDQUFDSSxRQUFRLENBQUNWLE1BQU0sQ0FBQztjQUM5Qk8sUUFBUSxDQUFDRyxRQUFRLENBQUM7Y0FFbEIzRyxRQUFRLENBQUM7Z0JBQUVTLEtBQUssRUFBRTtrQkFBRSxHQUFHVixNQUFNLENBQUNVLEtBQUs7a0JBQUVvRixRQUFRLEVBQUVjO2dCQUFRLENBQUU7Z0JBQUVuRixPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDNUUsQ0FBQztZQUNELE1BQU1zRixZQUFZLEdBQUdBLENBQUN0QixLQUFLLEVBQUVwRixLQUFLLEtBQUk7Y0FDckMsTUFBTUksSUFBSSxHQUFHLENBQUMsR0FBR3BELEtBQUssQ0FBQztjQUN2Qm9ELElBQUksQ0FBQ2dGLEtBQUssQ0FBQyxHQUFHcEYsS0FBSztjQUNuQm9HLFFBQVEsQ0FBQ2hHLElBQUksQ0FBQztjQUNkYSxRQUFRLENBQUNiLElBQUksQ0FBQztZQUNmLENBQUM7WUFFRCxLQUFLLElBQUl1RyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdULFVBQVUsRUFBRSxFQUFFUyxDQUFDLEVBQUU7Y0FDcENMLE1BQU0sQ0FBQ3RELElBQUksQ0FDVm5JLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNvTCxrQkFBQSxDQUFBZCxpQkFBaUI7Z0JBQ2pCakUsUUFBUSxFQUFFeUYsWUFBWTtnQkFDdEJ2QixLQUFLLEVBQUVlLFVBQVU7Z0JBQ2pCdkosSUFBSSxFQUFFSyxLQUFLLENBQUMySixDQUFDLENBQUM7Z0JBQ2R0QixRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCbkMsR0FBRyxFQUFFLFFBQVF5RCxDQUFDLEVBQUU7Z0JBQ2hCdkIsS0FBSyxFQUFFdUI7Y0FBQyxFQUNQLENBQ0Y7O1lBR0YsT0FDQzlMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQVNrQyxTQUFTLEVBQUM7WUFBa0IsR0FDbkN3SixNQUFNLEVBQ1B6TCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFRa0MsU0FBUyxFQUFDO1lBQXdDLEdBQ3hETCxRQUFRLElBQ1I1QixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBUSxNQUFNO2NBQUNaLE9BQU8sRUFBQyxTQUFTO2NBQUNjLFFBQVE7Y0FBQ2YsT0FBTyxFQUFFckI7WUFBUSxHQUNsRG5CLEtBQUssQ0FBQzBDLE9BQU8sQ0FBQzBELE1BQU0sQ0FFdEIsRUFFRDdHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN1RCxXQUFBLENBQUFRLE1BQU07Y0FBQ1osT0FBTyxFQUFDLE1BQU07Y0FBQ0QsT0FBTyxFQUFFdUk7WUFBSyxHQUNuQy9LLEtBQUssQ0FBQzBDLE9BQU8sQ0FBQzRJLEdBQUcsQ0FDVixDQUNELENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQS9MLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFtRyxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQWtHLEtBQUEsR0FBQWxHLE9BQUE7VUFFQSxJQUFBTyxHQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBbU0sU0FBQSxHQUFBbk0sT0FBQTtVQUVBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUVNLFNBQVVvTSx3QkFBd0JBLENBQUM7WUFBRXhELElBQUk7WUFBRTFHLElBQUk7WUFBRTRDO1VBQU8sQ0FBRTtZQUMvRCxNQUFNO2NBQUVsRSxLQUFLO2NBQUVELFFBQVE7Y0FBRXVFO1lBQVEsQ0FBRSxHQUFHLElBQUE3RSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3hELE1BQU0sQ0FBQ0ssUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ2dFLE1BQU0sRUFBRW9ILFNBQVMsQ0FBQyxHQUFHbE0sTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQztjQUMxQ3FMLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxXQUFXLEVBQUUsS0FBSztjQUNsQnJLO2FBQ0EsQ0FBQztZQUVGLElBQUksQ0FBQzBHLElBQUksRUFBRSxPQUFPLEtBQUs7WUFDdkIsTUFBTTRELE1BQU0sR0FBRztjQUNkakcsUUFBUSxFQUFFQyxLQUFLLElBQUc7Z0JBQ2pCNkYsU0FBUyxDQUFDO2tCQUNULEdBQUdwSCxNQUFNO2tCQUNULENBQUN1QixLQUFLLENBQUNuQixhQUFhLENBQUN2RCxJQUFJLEdBQUcwRSxLQUFLLENBQUNuQixhQUFhLENBQUNDO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEbEMsT0FBTyxFQUFFLE1BQU1vRCxLQUFLLElBQUc7Z0JBQ3RCckYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTXVFLElBQUksR0FBRyxNQUFNL0UsUUFBUSxDQUFDNEMsUUFBUSxDQUFDckIsSUFBSSxFQUFFK0MsTUFBTSxDQUFDcUgsWUFBWSxDQUFDO2dCQUMvRHBILFFBQVEsQ0FBQztrQkFBRSxHQUFHUSxJQUFJO2tCQUFFZ0IsT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQztnQkFDckM1QixPQUFPLEVBQUU7Z0JBQ1QySCxVQUFVLENBQUMsTUFBTXRMLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDM0M7YUFDQTtZQUVELE9BQ0NoQixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDaUcsTUFBQSxDQUFBdUcsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFL0QsSUFBSTtjQUFDeEcsU0FBUyxFQUFDLGNBQWM7Y0FBQzBDLE9BQU8sRUFBRUE7WUFBTyxHQUMxRTNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNnRyxLQUFBLENBQUFrRixJQUFJLFFBQ0pqTCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxpQkFDQ0MsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsYUFBS1UsS0FBSyxDQUFDZ00sTUFBTSxDQUFDM0osS0FBSyxDQUFNLEVBQzdCOUMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsZUFBT1UsS0FBSyxDQUFDZ00sTUFBTSxDQUFDMUosV0FBVyxDQUFRLENBQy9CLEVBQ1QvQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDZ0csS0FBQSxDQUFBWSxRQUFRO2NBQ1JqQixLQUFLLEVBQUVqRixLQUFLLENBQUNnTSxNQUFNLENBQUM3RixRQUFRLENBQUNsQixLQUFLO2NBQ2xDL0QsSUFBSSxFQUFDLGNBQWM7Y0FDbkJ3RCxLQUFLLEVBQUVMLE1BQU0sQ0FBQ3FILFlBQVk7Y0FDMUIvRixRQUFRLEVBQUVpRyxNQUFNLENBQUNqRyxRQUFRO2NBQ3pCUCxXQUFXLEVBQUVwRixLQUFLLENBQUNnTSxNQUFNLENBQUM3RixRQUFRLENBQUNmO1lBQVcsRUFDN0MsQ0FDSSxFQUVQN0YsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBUWtDLFNBQVMsRUFBQztZQUErQixHQUNoRGpDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpTSxTQUFBLENBQUFoSixRQUFRO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNELE9BQU8sRUFBRW9KLE1BQU0sQ0FBQ3BKO1lBQU8sR0FDakR4QyxLQUFLLENBQUMwQyxPQUFPLENBQUNDLFFBQVEsQ0FDYixDQUNILEVBQ1RwRCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUFpRCxnQkFBZ0I7Y0FBQ3RDLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUFmLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUF5RCxXQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTZNLFFBQUEsR0FBQTdNLE9BQUE7VUFDQSxJQUFBZ0osTUFBQSxHQUFBaEosT0FBQTtVQUNBLElBQUFpSixPQUFBLEdBQUFqSixPQUFBO1VBQ0EsSUFBQW1HLE1BQUEsR0FBQW5HLE9BQUE7VUFDTSxTQUFVOE0sZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRW5NLFFBQVE7Y0FBRXdFLEtBQUs7Y0FBRXZFLEtBQUs7Y0FBRXFFO1lBQU0sQ0FBRSxHQUFHLElBQUE1RSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQzdELE1BQU0sQ0FBQ3dGLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR25HLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU04TCxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJOUgsTUFBTSxDQUFDeUIsT0FBTyxFQUFFO2dCQUNuQkosa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRG5CLEtBQUssQ0FBQzRFLFlBQVksR0FBR0MsU0FBUztjQUM5QjdFLEtBQUssQ0FBQzZILGFBQWEsRUFBRTtjQUNyQkgsUUFBQSxDQUFBSSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFFRCxNQUFNdEcsU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEJOLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6Qm5CLEtBQUssQ0FBQzRFLFlBQVksR0FBR0MsU0FBUztjQUM5QjdFLEtBQUssQ0FBQzZILGFBQWEsRUFBRTtjQUNyQkgsUUFBQSxDQUFBSSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNmLENBQUM7WUFDRCxNQUFNckcsYUFBYSxHQUFHQSxDQUFBLEtBQU1QLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUVyRCxPQUNDbkcsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBS2tDLFNBQVMsRUFBQztZQUFzQixHQUNwQ2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUN1RCxXQUFBLENBQUEwSixJQUFJO2NBQUMvSyxTQUFTLEVBQUMsV0FBVztjQUFDZ0IsT0FBTyxFQUFFMko7WUFBTSxHQUMxQzVNLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUM4SSxNQUFBLENBQUFvRSxJQUFJO2NBQUNsSixJQUFJLEVBQUMsV0FBVztjQUFDOUIsU0FBUyxFQUFDO1lBQVEsRUFBRyxFQUM1Q2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUMrSSxPQUFBLENBQUFvRSxPQUFPO2NBQUNuSixJQUFJLEVBQUM7WUFBUSxFQUFHLEVBQ3pCL0QsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsZUFDRVUsS0FBSyxDQUFDMEMsT0FBTyxDQUFDNEosSUFBSSxFLEtBQUd0TSxLQUFLLENBQUNtQyxVQUFVLENBQUN1SyxNQUFNLENBQ3ZDLENBQ0QsRUFDTmpILGVBQWUsSUFDZmxHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpRyxNQUFBLENBQUFnQixZQUFZO2NBQUNQLFNBQVMsRUFBRUEsU0FBUztjQUFFN0UsUUFBUSxFQUFFOEU7WUFBYSxHQUMxRDFHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLGNBQU1VLEtBQUssQ0FBQ0UsTUFBTSxDQUFDa0csTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTdHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFtRyxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQWtHLEtBQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBTyxHQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBbU0sU0FBQSxHQUFBbk0sT0FBQTtVQUVBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUVNLFNBQVU2RSx5QkFBeUJBLENBQUM7WUFBRTNDLElBQUk7WUFBRTRDO1VBQU8sQ0FBRTtZQUMxRCxNQUFNO2NBQUVsRSxLQUFLO2NBQUVELFFBQVE7Y0FBRXVFO1lBQVEsQ0FBRSxHQUFHLElBQUE3RSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3hELE1BQU0sQ0FBQ0ssUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3NNLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdyTixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QyxNQUFNdUwsTUFBTSxHQUFHO2NBQ2RqRyxRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakJnSCxRQUFRLENBQUNoSCxLQUFLLENBQUNuQixhQUFhLENBQUNDLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0RsQyxPQUFPLEVBQUUsTUFBTW9ELEtBQUssSUFBRztnQkFDdEJyRixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNUixRQUFRLENBQUNTLFNBQVMsQ0FBQ21DLFFBQVEsQ0FBQ3JCLElBQUksRUFBRXFMLEtBQUssQ0FBQztnQkFDOUNySSxRQUFRLENBQUM7a0JBQUU5RCxTQUFTLEVBQUU7b0JBQUUsR0FBR1QsUUFBUSxDQUFDUztrQkFBUyxDQUFFO2tCQUFFdUUsS0FBSyxFQUFFO29CQUFFLEdBQUdoRixRQUFRLENBQUNnRjtrQkFBSztnQkFBRSxDQUFFLENBQUM7Z0JBQ2hGYixPQUFPLEVBQUU7Z0JBRVQySCxVQUFVLENBQUMsTUFBSztrQkFDZnRMLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ2hCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpRyxNQUFBLENBQUF1RyxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUvRCxJQUFJO2NBQUN4RyxTQUFTLEVBQUMsY0FBYztjQUFDMEMsT0FBTyxFQUFFQTtZQUFPLEdBQzFFM0UsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2dHLEtBQUEsQ0FBQWtGLElBQUksUUFDSmpMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLGlCQUNDQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxhQUFLVSxLQUFLLENBQUNnTSxNQUFNLENBQUMzSixLQUFLLENBQU0sRUFDN0I5QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxlQUFPVSxLQUFLLENBQUNnTSxNQUFNLENBQUMxSixXQUFXLENBQVEsQ0FDL0IsRUFFVC9DLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNnRyxLQUFBLENBQUFZLFFBQVE7Y0FDUmpCLEtBQUssRUFBRWpGLEtBQUssQ0FBQ2dNLE1BQU0sQ0FBQzdGLFFBQVEsQ0FBQ2xCLEtBQUs7Y0FDbEMvRCxJQUFJLEVBQUMsT0FBTztjQUNad0QsS0FBSyxFQUFFaUksS0FBSztjQUNaaEgsUUFBUSxFQUFFaUcsTUFBTSxDQUFDakcsUUFBUTtjQUN6QlAsV0FBVyxFQUFFcEYsS0FBSyxDQUFDZ00sTUFBTSxDQUFDN0YsUUFBUSxDQUFDZjtZQUFXLEVBQzdDLENBQ0ksRUFFUDdGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQVFrQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDaU0sU0FBQSxDQUFBaEosUUFBUTtjQUFDRSxPQUFPLEVBQUMsU0FBUztjQUFDRCxPQUFPLEVBQUVvSixNQUFNLENBQUNwSjtZQUFPLEdBQ2pEeEMsS0FBSyxDQUFDMEMsT0FBTyxDQUFDQyxRQUFRLENBQ2IsQ0FDSCxFQUNUcEQsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBaUQsZ0JBQWdCO2NBQUN0QyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBZixNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFrRyxLQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQU8sR0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQW1NLFNBQUEsR0FBQW5NLE9BQUE7VUFFQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFRTSxTQUFVeU4scUJBQXFCQSxDQUFDO1lBQUUzSSxPQUFPO1lBQUU0SSxlQUFlLEdBQUc7VUFBRSxDQUFFO1lBQ3RFLE1BQU07Y0FBRTlNLEtBQUs7Y0FBRUQsUUFBUTtjQUFFc0UsTUFBTTtjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBN0UsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNLLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoQixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNzTSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHck4sTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDcUosS0FBSyxFQUFFcUQsUUFBUSxDQUFDLEdBQUd4TixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNdUwsTUFBTSxHQUFHO2NBQ2RqRyxRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakJnSCxRQUFRLENBQUNoSCxLQUFLLENBQUNuQixhQUFhLENBQUNDLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0RsQyxPQUFPLEVBQUUsTUFBTW9ELEtBQUssSUFBRztnQkFDdEIsSUFBSTtrQkFDSHJGLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBRWpCLE1BQU15TSxRQUFRLEdBQUcsTUFBTWpOLFFBQVEsQ0FBQ2dGLEtBQUssQ0FBQ3BDLFFBQVEsQ0FBQ2dLLEtBQUssRUFBRTtvQkFBRSxHQUFHRztrQkFBZSxDQUFFLENBQUM7a0JBRTdFO2tCQUNBLElBQUlFLFFBQVEsQ0FBQ3RELEtBQUssRUFBRTtvQkFDbkIsTUFBTXVELFFBQVEsR0FBR0EsQ0FBQ3ZELEtBQUssRUFBRXdELE1BQU0sR0FBRyxFQUFFLEtBQUk7c0JBQ3ZDLE1BQU10RixHQUFHLEdBQUc1SCxLQUFLLENBQUNtTixNQUFNLEdBQUd6RCxLQUFLLENBQUMsR0FBR0EsS0FBSyxHQUFHLFNBQVM7c0JBQ3JELElBQUksQ0FBQyxDQUFDd0QsTUFBTSxDQUFDM0MsTUFBTSxFQUFFO3dCQUNwQixPQUFPdkssS0FBSyxDQUFDbU4sTUFBTSxDQUFDdkYsR0FBRyxDQUFDLEdBQUcsSUFBSXNGLE1BQU0sRUFBRTs7c0JBRXhDLE9BQU9sTixLQUFLLENBQUNtTixNQUFNLENBQUN2RixHQUFHLENBQUM7b0JBQ3pCLENBQUM7b0JBRURtRixRQUFRLENBQUNFLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDdEQsS0FBSyxFQUFFc0QsUUFBUSxDQUFDRSxNQUFNLENBQUMsQ0FBQztvQkFDbkQzTSxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNsQjs7a0JBRUQsTUFBTXdFLEtBQUssR0FBR2hGLFFBQVEsQ0FBQ2dGLEtBQUssQ0FBQ29DLE9BQU8sRUFBRTtrQkFFdEM7a0JBQ0E3QyxRQUFRLENBQUM7b0JBQUVTO2tCQUFLLENBQUUsQ0FBQztrQkFDbkI7a0JBQ0E4RyxVQUFVLENBQUMsTUFBSztvQkFDZnRMLFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ1IsQ0FBQyxPQUFPTyxDQUFDLEVBQUU7a0JBQ1hDLE9BQU8sQ0FBQzJJLEtBQUssQ0FBQyxFQUFFLEVBQUU1SSxDQUFDLEVBQUVBLENBQUMsQ0FBQ3NNLE9BQU8sQ0FBQztrQkFDL0JMLFFBQVEsQ0FBQyxTQUFTLENBQUM7O2NBRXJCO2FBQ0E7WUFFRCxPQUNDeE4sTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2lHLE1BQUEsQ0FBQXVHLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRS9ELElBQUk7Y0FBQ3hHLFNBQVMsRUFBQyxjQUFjO2NBQUMwQyxPQUFPLEVBQUVBO1lBQU8sR0FDMUUzRSxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxpQkFDQ0MsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsYUFBS1UsS0FBSyxDQUFDZ00sTUFBTSxDQUFDM0osS0FBSyxDQUFNLEVBQzdCOUMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsZUFBT1UsS0FBSyxDQUFDZ00sTUFBTSxDQUFDMUosV0FBVyxDQUFRLENBQy9CLEVBQ1QvQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDZ0csS0FBQSxDQUFBa0YsSUFBSSxRQUNKakwsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBME4sYUFBYTtjQUFDck4sS0FBSyxFQUFFQSxLQUFLO2NBQUUwSixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3Q25LLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNnRyxLQUFBLENBQUFZLFFBQVE7Y0FDUmpCLEtBQUssRUFBRWpGLEtBQUssQ0FBQ2dNLE1BQU0sQ0FBQzdGLFFBQVEsQ0FBQ2xCLEtBQUs7Y0FDbEMvRCxJQUFJLEVBQUMsT0FBTztjQUNad0QsS0FBSyxFQUFFaUksS0FBSztjQUNaaEgsUUFBUSxFQUFFaUcsTUFBTSxDQUFDakcsUUFBUTtjQUN6QlAsV0FBVyxFQUFFcEYsS0FBSyxDQUFDZ00sTUFBTSxDQUFDN0YsUUFBUSxDQUFDZjtZQUFXLEVBQzdDLENBQ0ksRUFFUDdGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQVFrQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDaU0sU0FBQSxDQUFBaEosUUFBUTtjQUFDRSxPQUFPLEVBQUMsU0FBUztjQUFDRCxPQUFPLEVBQUVvSixNQUFNLENBQUNwSjtZQUFPLEdBQ2pEeEMsS0FBSyxDQUFDMEMsT0FBTyxDQUFDQyxRQUFRLENBQ2IsQ0FDSCxFQUNUcEQsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBaUQsZ0JBQWdCO2NBQUN0QyxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25GQSxJQUFBZixNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFrRyxLQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQU8sR0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQW1NLFNBQUEsR0FBQW5NLE9BQUE7VUFFQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFFTSxTQUFVa08sZUFBZUEsQ0FBQztZQUFFaE0sSUFBSTtZQUFFNEM7VUFBTyxDQUFFO1lBQ2hELE1BQU07Y0FBRWxFLEtBQUs7Y0FBRUQ7WUFBUSxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNLLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoQixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNnRSxNQUFNLEVBQUVvSCxTQUFTLENBQUMsR0FBR2xNLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUM7Y0FDMUNxTCxZQUFZLEVBQUUsRUFBRTtjQUNoQkMsV0FBVyxFQUFFLEtBQUs7Y0FDbEJySzthQUNBLENBQUM7WUFFRixNQUFNc0ssTUFBTSxHQUFHO2NBQ2RqRyxRQUFRLEVBQUVDLEtBQUssSUFBRztnQkFDakI2RixTQUFTLENBQUM7a0JBQ1QsR0FBR3BILE1BQU07a0JBQ1QsQ0FBQ3VCLEtBQUssQ0FBQ25CLGFBQWEsQ0FBQ3ZELElBQUksR0FBRzBFLEtBQUssQ0FBQ25CLGFBQWEsQ0FBQ0M7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0RsQyxPQUFPLEVBQUUsTUFBTW9ELEtBQUssSUFBRztnQkFDdEJyRixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNUixRQUFRLENBQUNnRixLQUFLLENBQUNwQyxRQUFRLENBQUMwQixNQUFNLENBQUNxSCxZQUFZLENBQUM7Z0JBQ2xEeEgsT0FBTyxFQUFFO2dCQUVUMkgsVUFBVSxDQUFDLE1BQUs7a0JBQ2Z0TCxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0NoQixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDaUcsTUFBQSxDQUFBdUcsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFL0QsSUFBSTtjQUFDeEcsU0FBUyxFQUFDLGNBQWM7Y0FBQzBDLE9BQU8sRUFBRUE7WUFBTyxHQUMxRTNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNnRyxLQUFBLENBQUFrRixJQUFJLFFBQ0pqTCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxpQkFDQ0MsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsYUFBS1UsS0FBSyxDQUFDZ00sTUFBTSxDQUFDM0osS0FBSyxDQUFNLEVBQzdCOUMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsZUFBT1UsS0FBSyxDQUFDZ00sTUFBTSxDQUFDMUosV0FBVyxDQUFRLENBQy9CLEVBRVQvQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDZ0csS0FBQSxDQUFBWSxRQUFRO2NBQ1JqQixLQUFLLEVBQUVqRixLQUFLLENBQUNnTSxNQUFNLENBQUM3RixRQUFRLENBQUNsQixLQUFLO2NBQ2xDL0QsSUFBSSxFQUFDLGNBQWM7Y0FDbkJ3RCxLQUFLLEVBQUVMLE1BQU0sQ0FBQ3FILFlBQVk7Y0FDMUIvRixRQUFRLEVBQUVpRyxNQUFNLENBQUNqRyxRQUFRO2NBQ3pCUCxXQUFXLEVBQUVwRixLQUFLLENBQUNnTSxNQUFNLENBQUM3RixRQUFRLENBQUNmO1lBQVcsRUFDN0MsQ0FDSSxFQUVQN0YsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBUWtDLFNBQVMsRUFBQztZQUErQixHQUNoRGpDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpTSxTQUFBLENBQUFoSixRQUFRO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNELE9BQU8sRUFBRW9KLE1BQU0sQ0FBQ3BKO1lBQU8sR0FDakR4QyxLQUFLLENBQUMwQyxPQUFPLENBQUNDLFFBQVEsQ0FDYixDQUNILEVBQ1RwRCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUFpRCxnQkFBZ0I7Y0FBQ3RDLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUFmLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFtTyxZQUFBLEdBQUFuTyxPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBRU0sU0FBVTRGLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFaEYsS0FBSztjQUFFdUUsS0FBSztjQUFFa0gsU0FBUztjQUFFMUw7WUFBUSxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNdU4sUUFBUSxHQUFHO2NBQUU5SSxLQUFLLEVBQUUsRUFBRTtjQUFFTyxLQUFLLEVBQUVqRixLQUFLLENBQUN5TixTQUFTLENBQUNDLE1BQU0sQ0FBQ3RJO1lBQVcsQ0FBRTtZQUN6RSxNQUFNLENBQUN1SSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHck8sTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDNE4sUUFBUSxDQUFDO1lBQ2pFLE1BQU1oSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCZ0ksV0FBVyxDQUFDaEksS0FBSyxDQUFDbkIsYUFBYSxDQUFDQyxLQUFLLENBQUM7Y0FDdEMsTUFBTTNFLFFBQVEsQ0FBQzRFLEdBQUcsQ0FBQztnQkFBRWdKLFFBQVEsRUFBRS9ILEtBQUssQ0FBQ25CLGFBQWEsQ0FBQ0M7Y0FBSyxDQUFFLENBQUM7Y0FDM0QsTUFBTUgsS0FBSyxDQUFDSyxJQUFJLEVBQUU7WUFDbkIsQ0FBQztZQUNELE1BQU1pSixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLEdBQUcsQ0FBQ3pNLElBQUksS0FBSztjQUFFcUQsS0FBSyxFQUFFckQsSUFBSTtjQUFFNEQsS0FBSyxFQUFFakYsS0FBSyxDQUFDeU4sU0FBUyxDQUFDcE0sSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0wQyxRQUFRLEdBQUc7Y0FBRXNELFVBQVUsRUFBRTlDLEtBQUssQ0FBQ3dKO1lBQUssQ0FBRTtZQUU1QyxPQUNDeE8sTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQUMsTUFBQSxDQUFBYSxPQUFBLENBQUF5QixRQUFBLFFBQ0N0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFPME8sT0FBTyxFQUFDO1lBQUUsR0FBRWhPLEtBQUssQ0FBQ3lOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDekksS0FBSyxDQUFTLEVBQ3hEMUYsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2lPLFlBQUEsQ0FBQVUsV0FBVztjQUNYdkosS0FBSyxFQUFFM0UsUUFBUSxDQUFDNE4sUUFBUTtjQUN4QnpNLElBQUksRUFBQyxVQUFVO2NBQ2YyTSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJsSSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkNUI7WUFBUSxFQUNYLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQXhFLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFtTyxZQUFBLEdBQUFuTyxPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ00sU0FBVThPLGNBQWNBLENBQUM7WUFBRTdKLE1BQU07WUFBRW9IO1VBQVMsQ0FBRTtZQUNuRCxNQUFNO2NBQUUxTCxRQUFRO2NBQUV3RTtZQUFLLENBQUUsR0FBRyxJQUFBOUUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUM5QyxJQUFJa08sWUFBWSxHQUFHO2NBQUV6SixLQUFLLEVBQUUsRUFBRTtjQUFFTyxLQUFLLEVBQUU7WUFBUSxDQUFFO1lBQ2pELE1BQU00SSxPQUFPLEdBQUcsRUFBRTtZQUNsQnRKLEtBQUssQ0FBQzZKLEtBQUssQ0FBQ2pNLFVBQVUsQ0FBQ1QsS0FBSyxDQUFDMEYsT0FBTyxDQUFDaUUsQ0FBQyxJQUFHO2NBQ3hDLElBQUlBLENBQUMsQ0FBQ3hELEVBQUUsS0FBSzlILFFBQVEsQ0FBQzhILEVBQUUsRUFBRTtjQUMxQixJQUFJd0QsQ0FBQyxDQUFDeEQsRUFBRSxLQUFLeEQsTUFBTSxDQUFDVSxLQUFLLENBQUNzSixVQUFVLEVBQUVGLFlBQVksR0FBRztnQkFBRXpKLEtBQUssRUFBRTJHLENBQUMsQ0FBQ3hELEVBQUU7Z0JBQUU1QyxLQUFLLEVBQUVvRyxDQUFDLENBQUNoSjtjQUFLLENBQUU7Y0FDcEZ3TCxPQUFPLENBQUNuRyxJQUFJLENBQUM7Z0JBQUVoRCxLQUFLLEVBQUUyRyxDQUFDLENBQUN4RCxFQUFFO2dCQUFFNUMsS0FBSyxFQUFFb0csQ0FBQyxDQUFDaEo7Y0FBSyxDQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsTUFBTWlNLFlBQVksR0FBR3hKLElBQUksSUFBRztjQUMzQjJHLFNBQVMsQ0FBQ3BILE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFVSxLQUFLLEVBQUU7a0JBQUUsR0FBR1YsTUFBTSxDQUFDVSxLQUFLO2tCQUFFc0osVUFBVSxFQUFFdkosSUFBSSxDQUFDZSxNQUFNLENBQUNuQjtnQkFBSztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7WUFFRCxPQUNDbkYsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUE7Y0FBTzBPLE9BQU8sRUFBQyxFQUFFO2NBQUN4TSxTQUFTLEVBQUM7WUFBVyxHLHNDQUV0Q2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpTyxZQUFBLENBQUFVLFdBQVc7Y0FBQ3RJLFFBQVEsRUFBRTJJLFlBQVk7Y0FBRUgsWUFBWSxFQUFFQSxZQUFZO2NBQUVOLE9BQU8sRUFBRSxDQUFDTSxZQUFZLEVBQUUsR0FBR04sT0FBTztZQUFDLEVBQUksQ0FDakc7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXRPLE1BQUEsR0FBQUgsT0FBQTtVQWtCTyxNQUFNbVAsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR2hQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDcU8sYUFBYSxDQUFDLEVBQTZCLENBQUM7VUFDeEUsTUFBTXhPLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1WLE1BQUEsQ0FBQWEsT0FBSyxDQUFDc08sVUFBVSxDQUFDSCxhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBdk8sZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJ0RSxJQUFBVixNQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBdVAsY0FBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUF3UCxXQUFBLEdBQUF4UCxPQUFBO1VBRUEsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBR087VUFBVSxTQUFVeVAsY0FBY0EsQ0FBQyxFQUFFO1lBQzNDLE1BQU07Y0FBRTlPLFFBQVE7Y0FBRUMsS0FBSztjQUFFc0U7WUFBUSxDQUFFLEdBQUcsSUFBQTdFLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDeEQsTUFBTSxDQUFDMEQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHckUsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTSxDQUFDeU8sT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3hQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUM7Y0FDNUMyTyxHQUFHLEVBQUVqUCxRQUFRLENBQUMrTyxPQUFPO2NBQ3JCRyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBRzthQUNkLENBQUM7WUFFRixNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNeEwsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO1lBQ3BFLE1BQU0wTCxHQUFHLEdBQUcsMERBQTBEdFAsUUFBUSxDQUFDdUIsSUFBSSxFQUFFO1lBQ3JGLE1BQU11RCxNQUFNLEdBQUcsTUFBTWUsS0FBSyxJQUFHO2NBQzVCLE1BQU1kLElBQUksR0FBRztnQkFBRXpDLEtBQUssRUFBRXVELEtBQUssQ0FBQ0MsTUFBTSxDQUFDbkI7Y0FBSyxDQUFFO2NBQzFDSixRQUFRLENBQUNRLElBQUksQ0FBQztjQUNkLE1BQU0vRSxRQUFRLENBQUM2RSxJQUFJLENBQUNFLElBQUksQ0FBQztZQUMxQixDQUFDO1lBQ0QsTUFBTWxFLFVBQVUsR0FBRytMLEtBQUssSUFBSTVNLFFBQVEsQ0FBQ3VQLGVBQWUsQ0FBQzNDLEtBQUssQ0FBQztZQUUzRCxJQUFBak4sTUFBQSxDQUFBaUIsU0FBUyxFQUNSLENBQUNaLFFBQVEsQ0FBQyxFQUNWLE1BQ0NnUCxVQUFVLENBQUM7Y0FDVkMsR0FBRyxFQUFFalAsUUFBUSxDQUFDK08sT0FBTztjQUNyQkcsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUc7YUFDZCxDQUFDLEVBQ0gsaUJBQWlCLENBQ2pCO1lBRUQsT0FDQzVQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQVNrQyxTQUFTLEVBQUM7WUFBNkIsR0FDL0NqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDc1AsV0FBQSxDQUFBMUMsZ0JBQWdCLE9BQUcsRUF1QnBCM00sTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3FQLGNBQUEsQ0FBQW5ELHdCQUF3QjtjQUFDeEQsSUFBSSxFQUFFckUsZUFBZTtjQUFFckMsSUFBSSxFQUFFdkIsUUFBUSxDQUFDdUIsSUFBSTtjQUFFNEMsT0FBTyxFQUFFa0w7WUFBaUIsRUFBSSxDQUMzRjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQSxJQUFBN1AsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQU8sR0FBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQW1RLGVBQUEsR0FBQW5RLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBb1EsT0FBQSxHQUFBcFEsT0FBQTtVQUNBLElBQUF5RCxXQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQXFRLGNBQUEsR0FBQXJRLE9BQUE7VUFFTztVQUFZLFNBQVVzUSxrQkFBa0JBLENBQUM7WUFBRW5MLEtBQUs7WUFBRXhFO1VBQVEsQ0FBRTtZQUNsRSxNQUFNLENBQUNzRSxNQUFNLEVBQUVvSCxTQUFTLENBQUMsR0FBR2xNLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQXdCTixRQUFRLENBQUM0UCxhQUFhLEVBQUUsQ0FBQztZQUMzRixNQUFNLENBQUNDLFVBQVUsRUFBRTVQLEtBQUssQ0FBQyxHQUFHLElBQUFOLE1BQUEsQ0FBQW1RLFFBQVEsRUFBQ04sZUFBQSxDQUFBN0MsTUFBWSxDQUFDb0QsU0FBUyxDQUFDO1lBQzVELE1BQU07Y0FBRXhPO1lBQUksQ0FBRSxHQUFHdkIsUUFBUTtZQUV6QjtZQUVBLElBQUksQ0FBQzZQLFVBQVUsRUFBRSxPQUFPclEsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQWtOLE9BQU87Y0FBQ0MsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUNqRCxNQUFNdEwsS0FBSyxHQUFHO2NBQUVILEtBQUs7Y0FBRXhFLFFBQVE7Y0FBRUMsS0FBSztjQUFFcUUsTUFBTTtjQUFFb0g7WUFBUyxDQUFFO1lBQzNEMUssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFakIsUUFBUSxFQUFFdUIsSUFBSSxDQUFDO1lBQzlCLE9BQ0MvQixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDRyxRQUFBLENBQUE4TyxhQUFhLENBQUMwQixRQUFRO2NBQUN2TCxLQUFLLEVBQUVBO1lBQUssR0FDbkNuRixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUF1USxhQUFhO2NBQUMxTyxTQUFTLEVBQUUsK0NBQStDekIsUUFBUSxDQUFDdUIsSUFBSTtZQUFFLEdBQ3ZGL0IsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2tRLE9BQUEsQ0FBQVgsY0FBYyxPQUFHLEVBRWxCdFAsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQXNOLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFOU8sSUFBSTtjQUNmdU0sT0FBTyxFQUFFO2dCQUNSO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBLGdCQUFnQixFQUFFdE8sTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ21RLGNBQUEsQ0FBQXJMLHFCQUFxQjtlQUN4QztjQUNEZ0IsV0FBVyxFQUFFN0YsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQUMsTUFBQSxDQUFBYSxPQUFBLENBQUF5QixRQUFBO1lBQXdCLEVBQ2QsQ0FDVCxDQUNRO1VBRTNCOzs7Ozs7Ozs7OztVQ3ZDQTs7VUFFQUYsTUFBQSxDQUFBME8sY0FBQSxDQUFBN0IsT0FBQTtZQUNBOUosS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFuRixNQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBTyxHQUFBLEdBQUFQLE9BQUE7VUFFQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBeUQsV0FBQSxHQUFBekQsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFzRSxVQUFBLEdBQUF0RSxPQUFBO1VBRU0sU0FBVXFFLGFBQWFBLENBQUM7WUFBRXZDLElBQUk7WUFBRWdDO1VBQVEsQ0FBRTtZQUMvQyxNQUFNO2NBQUVuRCxRQUFRO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTSxDQUFDMEQsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHckUsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkUsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDUyxTQUFTLENBQUNGLFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUd1RCxPQUFPLENBQUMsR0FBR3RFLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUNOLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDVSxJQUFJLENBQUMsQ0FBQztZQUU1RCxNQUFNNEMsV0FBVyxHQUFHQSxDQUFBLEtBQU1GLGtCQUFrQixDQUFDLENBQUNELGVBQWUsQ0FBQztZQUM5RCxJQUFBakUsTUFBQSxDQUFBaUIsU0FBUyxFQUFDLENBQUNaLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ0QsV0FBVyxDQUFDUixRQUFRLENBQUNTLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDO2NBQ3hDdUQsT0FBTyxDQUFDOUQsUUFBUSxDQUFDUyxTQUFTLENBQUNVLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLE1BQU02QyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUNoRSxRQUFRLENBQUNpRTtZQUFXLENBQUU7WUFDcEQsT0FDQ3pFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUFDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBeUIsUUFBQSxRQUNDdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ0ssR0FBQSxDQUFBc0MsU0FBUztjQUNUVCxTQUFTLEVBQUMsaUJBQWlCO2NBQzNCVSxJQUFJLEVBQUVsQyxLQUFLLENBQUNtQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsS0FBSztjQUNsQ0MsV0FBVyxFQUFFdEMsS0FBSyxDQUFDbUMsVUFBVSxDQUFDQyxLQUFLLENBQUNFO1lBQVcsR0FFL0MvQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFLa0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQVEsTUFBTTtjQUFDWixPQUFPLEVBQUMsU0FBUztjQUFDYyxRQUFRO2NBQUNmLE9BQU8sRUFBRVU7WUFBUSxHQUNsRGxELEtBQUssQ0FBQzBDLE9BQU8sQ0FBQ3hDLE1BQU0sQ0FDYixFQUNUWCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUE0QyxRQUFRO2NBQUNDLE9BQU8sRUFBRXNCLFdBQVc7Y0FBRXJCLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS3NCO1lBQVEsR0FDNUQvRCxLQUFLLENBQUMwQyxPQUFPLENBQUNDLFFBQVEsQ0FDYixDQUNOLEVBRU5wRCxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDSyxHQUFBLENBQUFpRCxnQkFBZ0I7Y0FBQ3RDLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzdCLEVBQ1hxRCxlQUFlLElBQUlwRSxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDb0UsVUFBQSxDQUFBTyx5QkFBeUI7Y0FBQzNDLElBQUksRUFBRUosSUFBSTtjQUFFZ0QsT0FBTyxFQUFFSjtZQUFXLEVBQUksQ0FDakY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQWpCLFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBa0csS0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFtRyxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQW9HLFdBQUEsR0FBQXBHLE9BQUE7VUFFTSxTQUFVNkIsa0JBQWtCQSxDQUFDO1lBQ2xDQyxJQUFJO1lBQ0pDO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRWtELE1BQU07Y0FBRUMsUUFBUTtjQUFFdkUsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ3dGLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR25HLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5FLE1BQU1zRixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ25CLGFBQWE7Y0FDbEMsTUFBTWpFLFNBQVMsR0FBRztnQkFBRSxHQUFHNkQsTUFBTSxDQUFDN0Q7Y0FBUyxDQUFFO2NBRXpDOEQsUUFBUSxDQUFDO2dCQUFFOUQsU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ1UsSUFBSSxHQUFHMkUsTUFBTSxDQUFDbkI7Z0JBQUssQ0FBRTtnQkFBRW9CLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRSxDQUFDO1lBRUQsTUFBTUMsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSTFCLE1BQU0sQ0FBQ3lCLE9BQU8sRUFBRTtnQkFDbkJKLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR2RSxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZFLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCLE1BQU14RixTQUFTLEdBQUc7Z0JBQUUsR0FBRzZELE1BQU0sQ0FBQzdEO2NBQVMsQ0FBRTtjQUN6QzhELFFBQVEsQ0FBQztnQkFBRTlELFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUNVLElBQUksR0FBR25CLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDVSxJQUFJO2dCQUFDO2NBQUUsQ0FBRSxDQUFDO2NBQzNFd0Usa0JBQWtCLENBQUMsS0FBSyxDQUFDO2NBQ3pCdkUsUUFBUSxFQUFFO1lBQ1gsQ0FBQztZQUNELE1BQU04RSxhQUFhLEdBQUdBLENBQUEsS0FBTVAsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1iLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CUCxRQUFRLENBQUM7Z0JBQUV3QixPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDNUIzRSxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsT0FDQzVCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLGNBQ0NDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNnRyxLQUFBLENBQUFZLFFBQVE7Y0FDUlAsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCekUsSUFBSSxFQUFFQSxJQUFJO2NBQ1Z3RCxLQUFLLEVBQUVMLE1BQU0sQ0FBQzdELFNBQVMsR0FBR1UsSUFBSSxDQUFDLElBQUksRUFBRTtjQUNyQ2tFLFdBQVcsRUFBRXBGLEtBQUssQ0FBQ0UsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDLENBQUNpRjtZQUFRLEVBQ3ZDLEVBQ0Y1RyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQTtjQUFRa0MsU0FBUyxFQUFDO1lBQXdDLEdBQ3pEakMsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3VELFdBQUEsQ0FBQVEsTUFBTTtjQUFDYixPQUFPLEVBQUV1RCxhQUFhO2NBQUV0RCxPQUFPLEVBQUMsU0FBUztjQUFDYyxRQUFRO1lBQUEsR0FDeER2RCxLQUFLLENBQUMwQyxPQUFPLENBQUMwRCxNQUFNLENBQ2IsRUFDVDdHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNrRyxXQUFBLENBQUFhLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFekI7WUFBTSxFQUFJLENBQ3hCLEVBQ1JZLGVBQWUsSUFDZmxHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNpRyxNQUFBLENBQUFnQixZQUFZO2NBQUNQLFNBQVMsRUFBRUEsU0FBUztjQUFFN0UsUUFBUSxFQUFFOEU7WUFBYSxHQUMxRDFHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLGNBQU1VLEtBQUssQ0FBQ0UsTUFBTSxDQUFDa0csTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRUEsSUFBQTdHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUEwRCxTQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQXlELFdBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBMkQsY0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUFrUixtQkFBQSxHQUFBbFIsT0FBQTtVQUNBLElBQUFPLEdBQUEsR0FBQVAsT0FBQTtVQUVNLFNBQVVtUixZQUFZQSxDQUFDO1lBQUVyUDtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFbkIsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxDQUFDbVEsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2xSLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUNOLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDVSxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNK0IsY0FBYyxHQUFHQSxDQUFBLEtBQU05QyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzVDLE1BQU11USxZQUFZLEdBQUdBLENBQUEsS0FBTXZRLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7WUFFN0MsSUFBQVIsTUFBQSxDQUFBaUIsU0FBUyxFQUFDLENBQUNaLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDLEVBQUUsTUFBTWlRLFdBQVcsQ0FBQzFRLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTVFLElBQUloQixNQUFNLEVBQUUsT0FBT1gsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ2dSLG1CQUFBLENBQUFyUCxrQkFBa0I7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVDLFFBQVEsRUFBRXVQO1lBQVksRUFBSTtZQUM3RSxJQUFJLENBQUNGLFFBQVEsRUFBRSxPQUFPalIsTUFBQSxDQUFBYSxPQUFBLENBQUFkLGFBQUEsQ0FBQ3lELGNBQUEsQ0FBQVUsYUFBYTtjQUFDdkMsSUFBSSxFQUFFQSxJQUFJO2NBQUVnQyxRQUFRLEVBQUV3TjtZQUFZLEVBQUk7WUFFM0UsT0FDQ25SLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBLENBQUNLLEdBQUEsQ0FBQWdSLGlCQUFpQixRQUNqQnBSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQVNrQyxTQUFTLEVBQUM7WUFBbUIsR0FDckNqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDd0QsU0FBQSxDQUFBTSxRQUFRO2NBQUN0RCxPQUFPLEVBQUUwUTtZQUFRLEVBQUksQ0FDdEIsRUFDVmpSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBZCxhQUFBO2NBQUtrQyxTQUFTLEVBQUM7WUFBd0UsR0FDdEZqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBUSxNQUFNO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNkLE9BQU8sRUFBRVMsY0FBYztjQUFFUixPQUFPLEVBQUMsU0FBUztjQUFDYyxRQUFRO1lBQUEsR0FDckV2RCxLQUFLLENBQUMwQyxPQUFPLENBQUNjLElBQUksQ0FDWCxDQUNKLENBQ2E7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFqRSxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBeUQsV0FBQSxHQUFBekQsT0FBQTtVQUVNLFNBQVVpSCxVQUFVQSxDQUFDO1lBQzFCMEgsS0FBSyxHQUFHLEtBQUs7WUFDYmhLLFFBQVE7WUFDUnVDO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRWpDLE1BQU07Y0FBRUMsUUFBUTtjQUFFdEUsS0FBSztjQUFFdUUsS0FBSztjQUFFeEU7WUFBUSxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV2RSxNQUFNNEUsTUFBTSxHQUFHLE1BQU1lLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDZ0wsZUFBZSxFQUFFO2NBQ3ZCOzs7OztjQU1BLElBQUksQ0FBQzdDLEtBQUssRUFBRTtnQkFDWCxNQUFNeEosS0FBSyxDQUFDNkosS0FBSyxDQUFDak0sVUFBVSxDQUFDMkwsR0FBRyxDQUFDK0MsR0FBRyxDQUFDOVEsUUFBUSxDQUFDOEgsRUFBRSxDQUFDLENBQUNsRCxHQUFHLENBQUNOLE1BQU0sQ0FBQztnQkFDN0QsTUFBTXRFLFFBQVEsQ0FBQzRFLEdBQUcsQ0FBQ04sTUFBTSxDQUFDO2dCQUMxQkUsS0FBSyxDQUFDSyxJQUFJLEVBQUU7Z0JBQ1pOLFFBQVEsQ0FBQztrQkFBRXdCLE9BQU8sRUFBRTtnQkFBSyxDQUFFLENBQUM7O2NBRzdCLElBQUlRLFFBQVEsRUFBRUEsUUFBUSxFQUFFO1lBQ3pCLENBQUM7WUFDRCxNQUFNbUIsS0FBSyxHQUFHO2NBQUUxRCxRQUFRLEVBQUUsQ0FBQ00sTUFBTSxDQUFDeUIsT0FBTyxJQUFJL0IsUUFBUTtjQUFFdkIsT0FBTyxFQUFFcUM7WUFBTSxDQUFFO1lBRXhFLE9BQ0N0RixNQUFBLENBQUFhLE9BQUEsQ0FBQWQsYUFBQSxDQUFDdUQsV0FBQSxDQUFBUSxNQUFNO2NBQUNaLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS2dGO1lBQUssR0FDakN6SCxLQUFLLENBQUMwQyxPQUFPLENBQUNrQyxJQUFJLENBQ1g7VUFFWCIsImlnbm9yZUxpc3QiOltdfQ==