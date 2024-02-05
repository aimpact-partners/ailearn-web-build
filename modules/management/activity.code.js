System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/modal", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/tabs"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, ItemOption, ModuleActivityForm, OptionAnswers, __beyond_pkg, hmr;
  _export({
    ItemOption: void 0,
    ModuleActivityForm: void 0,
    OptionAnswers: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi006Form) {
      dependency_3 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_4 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_5 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_6 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Icons) {
      dependency_7 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Image) {
      dependency_9 = _pragmateUi006Image;
    }, function (_pragmateUi006Alert) {
      dependency_10 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Modal) {
      dependency_12 = _pragmateUi006Modal;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_14 = _pragmateUi006List;
    }, function (_pragmateUi006Chips) {
      dependency_15 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_16 = _beyondJsKernel019Core;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/modal', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/chips', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/tabs', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 1149359194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityForm = ActivityForm;
          var _react = require("react");
          var _options = require("../options");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ActivityForm() {
            const {
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            const activity = store.editActivity;
            const ref = _react.default.useRef(null);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const save = async () => {
              activity.set(values);
              await store.model.saveDraft();
              store.editActivity = undefined;
            };
            return _react.default.createElement(_form.Form, null, _react.default.createElement("div", {
              className: "module-activity__form",
              ref: ref
            }, _react.default.createElement(_options.ActivityOptions, {
              values: values,
              activity: activity,
              setValues: setValues,
              texts: texts.activities
            }), _react.default.createElement("footer", {
              className: "form__footer flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: save
            }, texts.actions.save))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2213092495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFormActivityContext = exports.FormActivityContext = void 0;
          var _react = require("react");
          const FormActivityContext = exports.FormActivityContext = _react.default.createContext({});
          const useFormActivityContext = () => _react.default.useContext(FormActivityContext);
          exports.useFormActivityContext = useFormActivityContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./conversation/form
      ***********************************/

      ims.set('./conversation/form', {
        hash: 2338598455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationForm = ConversationForm;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _item = require("./item");
          var _optionsHeader = require("./options-header");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function ConversationForm({
            activity,
            values,
            setValues
          }) {
            const {
              types,
              itemsType,
              texts
            } = (0, _context.useFormActivityContext)();
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            if (!types.hasOwnProperty(type)) return null;
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              setValues(values => {
                return {
                  ...values,
                  specs: {
                    [itemsType]: target.value
                  }
                };
              });
            };
            let bulletValues = values.specs[itemsType];
            const actionsSpecs = {};
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.conversation.description), _react.default.createElement(_form.Textarea, {
              label: "Description",
              onChange: handleChange
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info",
              className: "circle"
            }), texts.conversation.topics), _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: bulletValues,
              Item: _item.ItemOption,
              specs: {
                type: itemsType
              },
              handleChange: handleChange,
              fieldName: "topics"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./conversation/index
      ************************************/

      ims.set('./conversation/index', {
        hash: 1233316893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityConversationForm = ActivityConversationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form2 = require("./form");
          function ActivityConversationForm() {
            const {
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            const activity = store.editActivity;
            const ref = _react.default.useRef(null);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const save = async () => {
              activity.set(values);
              await store.model.saveDraft();
              store.editActivity = undefined;
            };
            return _react.default.createElement(_form.Form, null, _react.default.createElement("div", {
              className: "module-activity__form",
              ref: ref
            }, _react.default.createElement(_form2.ConversationForm, {
              values: values,
              activity: activity,
              setValues: setValues,
              texts: texts.activities
            }), _react.default.createElement("footer", {
              className: "form__footer flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: save
            }, texts.actions.save))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./conversation/item
      ***********************************/

      ims.set('./conversation/item', {
        hash: 406907725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const text = specs.type === 'questions' ? data.text : data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./conversation/options-header
      *********************************************/

      ims.set('./conversation/options-header', {
        hash: 2832574234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsHeader = BulletPointsHeader;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function BulletPointsHeader() {
            const {
              setShowRefiningModal,
              itemsType,
              texts
            } = (0, _context.useFormActivityContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const couldBeRefined = ['questions', 'topics'].includes(itemsType);
            return _react.default.createElement("div", {
              className: "bullet-buttons__container flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              bordered: true,
              onClick: addBulletPoint
            }, texts.bulletPoint.add), couldBeRefined && _react.default.createElement(_components.Button, {
              icon: _icons.ICONS.aiStars,
              variant: "primary",
              onClick: () => setShowRefiningModal(true)
            }, texts.bulletPoint.refine));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./cover-image/actions
      *************************************/

      ims.set('./cover-image/actions', {
        hash: 1609327048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _refinementModal = require("./refinement-modal");
          var _context = require("../context");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              texts,
              store,
              activity
            } = (0, _context.useFormActivityContext)();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const generateImage = async event => {
              event.preventDefault();
              setFetching(true);
              await activity.generatePicture();
              setFetching(false);
            };
            if (generated) {
              return _react.default.createElement("footer", {
                className: "actions"
              }, _react.default.createElement(_components.Button, {
                variant: "primary",
                onClick: () => setShowRefiningModal(true),
                icon: _icons.ICONS.aiStars
              }, texts.actions.refine), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: generateImage,
              bordered: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.cover));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./cover-image/error
      ***********************************/

      ims.set('./cover-image/error', {
        hash: 3301282445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./cover-image/index
      ***********************************/

      ims.set('./cover-image/index', {
        hash: 2440018814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _image = require("pragmate-ui/image");
          var _actions = require("./actions");
          var _context = require("../context");
          function CoverImage() {
            const {
              store,
              activity
            } = (0, _context.useFormActivityContext)();
            const [image, setImage] = _react.default.useState(activity.picture);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity], () => setImage(activity.picture), 'image.generated');
            return _react.default.createElement("div", {
              className: "cover-image__container"
            }, activity.picture && _react.default.createElement(_image.Image, {
              src: image
            }), _react.default.createElement(_actions.CoverImageActions, {
              setFetching: setFetching,
              generated: !!activity.picture
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./cover-image/refinement-modal
      **********************************************/

      ims.set('./cover-image/refinement-modal', {
        hash: 294123216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("./error");
          var _context = require("../context");
          function RefinementModal({
            confirm,
            onClose
          }) {
            const {
              texts: {
                refine: {
                  module: texts,
                  textarea: textAreaTexts
                },
                actions: textActions,
                processMessages
              },
              activity
            } = (0, _context.useFormActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              observations: '',
              generation: 'answers'
            });
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  await activity.generatePicture(values.observations);
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            const onClickAction = confirm ? () => setOpenConfirm(true) : events.onClick;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, null, _react.default.createElement(_error.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
              icon: _icons.ICONS.aiStars
            }, textActions.refine)), openConfirm && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: events.onClick,
              onCancel: () => setOpenConfirm(false),
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./get-options
      *****************************/

      ims.set('./get-options', {
        hash: 739493005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getOptions = getOptions;
          function getOptions(texts) {
            return {
              type: [['answers', texts.answers], ['questions', texts.questions]]
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2694317520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _headerTitle = require("./sections/header-title");
          var _beyond_context = require("beyond_context");
          var _tabs = require("./tabs");
          var _refineModal = require("./refine-modal");
          var _context = require("./context");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [, setUpdate] = _react.default.useState({});
            const [showRefiningModal, setShowRefiningModal] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const types = {
              'content-theory': 'topics',
              'multiple-choice': 'questions',
              spoken: 'criterias',
              conversation: 'topics'
            };
            const {
              type
            } = activity;
            const itemsType = types[type];
            const onClose = () => setShowRefiningModal(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            return _react.default.createElement(_context.FormActivityContext.Provider, {
              value: {
                activity,
                texts,
                store,
                setValues,
                types,
                currentTab,
                setCurrentTab,
                itemsType,
                values,
                setShowRefiningModal
              }
            }, _react.default.createElement(_headerTitle.HeaderTitle, null), _react.default.createElement(_tabs.ActivityFormTabs, {
              texts: texts
            }), showRefiningModal && _react.default.createElement(_refineModal.RefineModal, {
              type: itemsType,
              data: activity,
              onClose: onClose,
              texts: texts
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 3998975187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./materials/index
      *********************************/

      ims.set('./materials/index', {
        hash: 1538099402,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterial = ActivityMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../context");
          function ActivityMaterial({
            material,
            texts
          }) {
            const {
              activity
            } = (0, _context.useFormActivityContext)();
            let name = typeof material === 'string' ? material : material.name;
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [data, setData] = _react.default.useState(activity.materials[name]);
            console.log(20, material);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onClick = async event => {
              await activity.materials.generate(name);
            };
            if (!activity.materials[name]) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: texts.activities.empty.title,
                description: texts.activities.empty.description
              }, _react.default.createElement("div", {
                className: "flex-container flex-center"
              }, _react.default.createElement(_components.Button, {
                onClick: onClick,
                variant: "primary"
              }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
                fetching: fetching
              }));
            }
            return _react.default.createElement("div", null, _react.default.createElement(_markdown.Markdown, {
              content: activity.materials[name]
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./options/answer-form
      *************************************/

      ims.set('./options/answer-form', {
        hash: 3039286241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function AnswerForm({
            activity,
            toggleAnswerForm
          }) {
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const onAdd = event => {
              activity.addOption(value);
              toggleAnswerForm(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Input, {
              name: "new-answer-option",
              value: value,
              onChange: onChange
            }), _react.default.createElement(_components.Button, {
              onClick: onAdd,
              variant: "primary"
            }, "Add"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./options/answers/index
      ***************************************/

      ims.set('./options/answers/index', {
        hash: 1943714166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionAnswers = OptionAnswers;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _answerForm = require("../answer-form");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function OptionAnswers({
            data: activity,
            index
          }) {
            const [showAnswerForm, toggleAnswerForm] = _react.default.useState(false);
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity], () => {
              setUpdate({});
            });
            if (!activity.options) return null;
            const openForm = event => {
              event.stopPropagation();
              toggleAnswerForm(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-100 flex-end"
            }, _react.default.createElement(_components.Button, {
              onClick: openForm
            }, "Add answer")), _react.default.createElement(_list.List, {
              className: "question-options__list",
              specs: {
                activity
              },
              items: activity.options,
              control: _item.AnswerItem
            }), showAnswerForm && _react.default.createElement(_answerForm.AnswerForm, {
              activity: activity,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./options/answers/item
      **************************************/

      ims.set('./options/answers/item', {
        hash: 1888714584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerItem = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chips = require("pragmate-ui/chips");
          const AnswerItem = props => {
            const {
              specs: {
                activity
              },
              item,
              index
            } = props;
            const mark = event => {
              event.preventDefault();
              activity.setCorrect(index);
            };
            return _react.default.createElement("li", null, _react.default.createElement("span", null, item), activity.correctAnswer === index ? _react.default.createElement(_chips.Chip, {
              icon: "check",
              sizing: "xs",
              type: "primary"
            }, "Correct answer") : _react.default.createElement(_components.Button, {
              onClick: mark,
              icon: "info",
              bordered: true,
              sizing: "xs",
              variant: "primary"
            }, "Mark as correct"));
          };
          exports.AnswerItem = AnswerItem;
        }
      });

      /*******************************
      INTERNAL MODULE: ./options/index
      *******************************/

      ims.set('./options/index', {
        hash: 3063803826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityOptions = ActivityOptions;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("./item");
          var _core = require("@beyond-js/kernel/core");
          var _optionsHeader = require("./options-header");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActivityOptions({
            activity,
            values,
            setValues,
            texts
          }) {
            const {
              types,
              itemsType
            } = (0, _context.useFormActivityContext)();
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            if (!types.hasOwnProperty(type)) return null;
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              setValues(values => {
                return {
                  ...values,
                  specs: {
                    [itemsType]: target.value
                  }
                };
              });
            };
            let bulletValues = values.specs[itemsType];
            const actionsSpecs = {};
            if (itemsType === 'questions') {
              //values = activity.specs.questionLabels;
              actionsSpecs.answers = {
                //@ts-ignore
                icon: _icons.ICONS.aiStars,
                title: texts.actions.generateAnswers,
                onClick: async (event, index, data) => {
                  const promise = new _core.PendingPromise();
                  await activity.generateAnswer(index, data);
                  globalThis.setTimeout(() => {
                    promise.resolve();
                  }, 2000);
                  return promise;
                }
              };
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: bulletValues,
              Item: _item.ItemOption,
              specs: {
                type: itemsType
              },
              handleChange: handleChange,
              fieldName: "topics"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 550718844,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _answers = require("./answers");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const text = specs.type === 'questions' ? data.text : data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), typeof data === 'object' && _react.default.createElement(_answers.OptionAnswers, {
              data: data,
              index: index
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./options/options-header
      ****************************************/

      ims.set('./options/options-header', {
        hash: 2832574234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsHeader = BulletPointsHeader;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function BulletPointsHeader() {
            const {
              setShowRefiningModal,
              itemsType,
              texts
            } = (0, _context.useFormActivityContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const couldBeRefined = ['questions', 'topics'].includes(itemsType);
            return _react.default.createElement("div", {
              className: "bullet-buttons__container flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              bordered: true,
              onClick: addBulletPoint
            }, texts.bulletPoint.add), couldBeRefined && _react.default.createElement(_components.Button, {
              icon: _icons.ICONS.aiStars,
              variant: "primary",
              onClick: () => setShowRefiningModal(true)
            }, texts.bulletPoint.refine));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./radio-button
      ******************************/

      ims.set('./radio-button', {
        hash: 51908500,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalRadioButton = ModalRadioButton;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _getOptions = require("./get-options");
          function ModalRadioButton({
            value: currentValue,
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching
            };
            const data = (0, _getOptions.getOptions)(texts?.activities.refine.type);
            const output = data[name].map(([value, label], index) => {
              if (value === currentValue) selected = index;
              return _react.default.createElement(_components.Button, {
                name: name,
                ...disabled,
                "data-index": index,
                onClick: onChange,
                key: index,
                value: value
              }, label);
            });
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: selected,
              ...disabled
            }, output));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./refine-modal/index
      ************************************/

      ims.set('./refine-modal/index', {
        hash: 3045768379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineModal = RefineModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _questions = require("./questions");
          var _topics = require("./topics");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          function RefineModal({
            type,
            onClose,
            data: activity,
            texts
          }) {
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
                await activity.generateSuggestions(values);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            const Forms = {
              questions: _questions.RefineQuestionsModal,
              topics: _topics.RefineTopicsModal,
              criterias: _topics.RefineTopicsModal
            };
            const Control = Forms[type];
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement(Control, {
              events: events,
              values: values,
              setValues: setValues,
              fetching: fetching,
              setFetching: setFetching,
              texts: texts
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, "Generate")), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./refine-modal/questions
      ****************************************/

      ims.set('./refine-modal/questions', {
        hash: 2544567815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModal = RefineQuestionsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _radioButton = require("../radio-button");
          function RefineQuestionsModal({
            values,
            events,
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, "Enhance Content Quality"), _react.default.createElement("span", null, "Your insights will help us refine the content.")), _react.default.createElement(_form.Textarea, {
              label: "Your Insights",
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: "Share specific sgit uggestions or areas for improvement..."
            }), _react.default.createElement(_radioButton.ModalRadioButton, {
              name: "type",
              value: values.type,
              label: texts.activities.refine.type.label,
              onChange: events.onChange
            }), values.type === 'questions' && _react.default.createElement("div", {
              className: "flex-container flex-100 flex-end flex-center mt-15"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: events.onChange,
              checked: values.removeItems,
              name: "removeItems",
              label: "Remove current items"
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./refine-modal/topics
      *************************************/

      ims.set('./refine-modal/topics', {
        hash: 4093539765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineTopicsModal = RefineTopicsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function RefineTopicsModal({
            values,
            events
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, "Enhance Content Quality"), _react.default.createElement("span", null, "Your insights will help us refine the content.")), _react.default.createElement(_form.Textarea, {
              label: "Your Insights",
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: "Share specific suggestions or areas for improvement..."
            }), _react.default.createElement("div", {
              className: "flex-container flex-100 flex-end flex-center mt-15"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: events.onChange,
              checked: values.removeItems,
              name: "removeItems",
              label: "Remove current items"
            })));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./sections/header-title
      ***************************************/

      ims.set('./sections/header-title', {
        hash: 1526161939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _coverImage = require("../cover-image");
          var _components = require("pragmate-ui/components");
          function HeaderTitle() {
            const {
              values,
              setValues,
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            const onChange = event => setValues({
              ...values,
              [event.currentTarget.name]: event.currentTarget.value
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-end mb-15 separator"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              className: "btn-primary outline",
              onClick: () => {
                store.editActivity = undefined;
              }
            }, texts.actions.back)), _react.default.createElement("div", {
              className: "header-form__container mt-15"
            }, _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              variant: "floating",
              name: "title",
              label: texts.activities.form.title,
              value: values.title,
              onChange: onChange
            }), _react.default.createElement(_form.Textarea, {
              variant: "floating",
              label: texts.activities.form.description,
              value: values.description,
              name: "description",
              onChange: onChange
            })), _react.default.createElement(_coverImage.CoverImage, null)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 2166976060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormTabs = ActivityFormTabs;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _materials = require("./materials");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _activity = require("./activity");
          var _context = require("./context");
          var _conversation = require("./conversation");
          function ActivityFormTabs({
            texts
          }) {
            const {
              activity,
              itemsType
            } = (0, _context.useFormActivityContext)();
            const onChange = (event, index, a) => {};
            const [, setMaterials] = _react.default.useState(activity.materials.items);
            const panes = [];
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => setMaterials([...activity.materials.items]));
            activity.materials.items.forEach(item => {
              const isBulletPoint = ['bullet-points', 'bullet-topics'].includes(item);
              const labels = isBulletPoint ? texts.activities.types : texts.activities.materials;
              const labelTab = isBulletPoint ? labels[itemsType] : typeof item === 'string' ? item : labels[item.name];
              const attrs = {
                disabled: false
              };
              const addTab = (attrs = {}) => {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  ...attrs,
                  key: `${activity.id}.${item}-tab`
                }, labelTab));
              };
              if (typeof item === 'string') {
                addTab();
                if (item === 'bullet-topics') {
                  panes.push(_react.default.createElement(_conversation.ActivityConversationForm, {
                    key: `${activity.id}.${item}-pane`
                  }));
                } else if (item === 'bullet-points') {
                  panes.push(_react.default.createElement(_activity.ActivityForm, {
                    key: `${activity.id}.${item}-pane`
                  }));
                } else panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                  key: `${activity.id}.${item}-pane`,
                  material: item,
                  texts: texts
                }));
                return;
              }
              if (item.required && !activity.materials[item.required]) attrs.disabled = true;
              panes.push(_react.default.createElement(_materials.ActivityMaterial, {
                key: `${activity.id}.${item.name}-pane`,
                material: item,
                texts: texts
              }));
              addTab(attrs);
            });
            return _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "mt-15 ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, panes));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./conversation/item",
        "from": "ItemOption",
        "name": "ItemOption"
      }, {
        "im": "./index",
        "from": "ModuleActivityForm",
        "name": "ModuleActivityForm"
      }, {
        "im": "./options/answers/index",
        "from": "OptionAnswers",
        "name": "OptionAnswers"
      }, {
        "im": "./options/item",
        "from": "ItemOption",
        "name": "ItemOption"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./conversation/item').ItemOption : value);
        (require || prop === 'ModuleActivityForm') && _export("ModuleActivityForm", ModuleActivityForm = require ? require('./index').ModuleActivityForm : value);
        (require || prop === 'OptionAnswers') && _export("OptionAnswers", OptionAnswers = require ? require('./options/answers/index').OptionAnswers : value);
        (require || prop === 'ItemOption') && _export("ItemOption", ItemOption = require ? require('./options/item').ItemOption : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlRm9ybUFjdGl2aXR5Q29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwic2F2ZSIsInNldCIsIm1vZGVsIiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJjbGFzc05hbWUiLCJBY3Rpdml0eU9wdGlvbnMiLCJhY3Rpdml0aWVzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiRm9ybUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJfaG9va3MiLCJfaWNvbnMiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJ0eXBlIiwic2V0RXJyb3IiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJoYXNPd25Qcm9wZXJ0eSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkZyYWdtZW50IiwiSWNvbiIsImljb24iLCJjb252ZXJzYXRpb24iLCJUZXh0YXJlYSIsImxhYmVsIiwib25DaGFuZ2UiLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZGF0YSIsImluZGV4IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwidGV4dCIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiYWRkQnVsbGV0UG9pbnQiLCJjb3VsZEJlUmVmaW5lZCIsImluY2x1ZGVzIiwiYm9yZGVyZWQiLCJidWxsZXRQb2ludCIsImFkZCIsIklDT05TIiwiYWlTdGFycyIsInJlZmluZSIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwiZ2VuZXJhdGVJbWFnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwib25DbG9zZSIsImNvdmVyIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJfdWkiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsImZldGNoaW5nIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX21vZGFsIiwiX2Vycm9yIiwibW9kdWxlIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm5hbWUiLCJlIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInNob3ciLCJzdWJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsImdldE9wdGlvbnMiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX2hlYWRlclRpdGxlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RhYnMiLCJfcmVmaW5lTW9kYWwiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJzaG93UmVmaW5pbmdNb2RhbCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwic3Bva2VuIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiSGVhZGVyVGl0bGUiLCJBY3Rpdml0eUZvcm1UYWJzIiwiUmVmaW5lTW9kYWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9tYXJrZG93biIsIkFjdGl2aXR5TWF0ZXJpYWwiLCJtYXRlcmlhbCIsIm1hdGVyaWFscyIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIk1hcmtkb3duIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRWYWx1ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiSW5wdXQiLCJfbGlzdCIsIl9hbnN3ZXJGb3JtIiwiT3B0aW9uQW5zd2VycyIsInNob3dBbnN3ZXJGb3JtIiwidXBkYXRlIiwib3B0aW9ucyIsIm9wZW5Gb3JtIiwic3RvcFByb3BhZ2F0aW9uIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIml0ZW0iLCJtYXJrIiwic2V0Q29ycmVjdCIsImNvcnJlY3RBbnN3ZXIiLCJDaGlwIiwic2l6aW5nIiwiX2NvcmUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIl9hbnN3ZXJzIiwiX2dldE9wdGlvbnMiLCJNb2RhbFJhZGlvQnV0dG9uIiwiY3VycmVudFZhbHVlIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsIm91dHB1dCIsIm1hcCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIl9xdWVzdGlvbnMiLCJfdG9waWNzIiwicmVtb3ZlSXRlbXMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwiRm9ybXMiLCJSZWZpbmVRdWVzdGlvbnNNb2RhbCIsIlJlZmluZVRvcGljc01vZGFsIiwiY3JpdGVyaWFzIiwiQ29udHJvbCIsIl9yYWRpb0J1dHRvbiIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIl9jb3ZlckltYWdlIiwiYmFjayIsImZvcm0iLCJfbWF0ZXJpYWxzIiwiX2FjdGl2aXR5IiwiX2NvbnZlcnNhdGlvbiIsImEiLCJzZXRNYXRlcmlhbHMiLCJwYW5lcyIsInRhYnMiLCJmb3JFYWNoIiwiaXNCdWxsZXRQb2ludCIsImxhYmVscyIsImxhYmVsVGFiIiwiYXR0cnMiLCJhZGRUYWIiLCJwdXNoIiwiVGFiIiwiaWQiLCJyZXF1aXJlZCIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udmVyc2F0aW9uL2Zvcm0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvY29udmVyc2F0aW9uL2l0ZW0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9nZXQtb3B0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXItZm9ybS50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3JlZmluZS1tb2RhbC9pbmRleC50c3giLCIvdHMvcmVmaW5lLW1vZGFsL3F1ZXN0aW9ucy50c3giLCIvdHMvcmVmaW5lLW1vZGFsL3RvcGljcy50c3giLCIvdHMvc2VjdGlvbnMvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy90YWJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVSyxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLHNCQUFzQixHQUFFO1lBQ2pELE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxZQUFZO1lBRW5DLE1BQU1DLEdBQUcsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBd0I7Y0FDakVDLEtBQUssRUFBRVIsUUFBUSxDQUFDUSxLQUFLO2NBQ3JCQyxXQUFX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