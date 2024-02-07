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
        hash: 900110867,
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
                    ...values.specs,
                    [itemsType]: target.value
                  }
                };
              });
            };
            const onInputChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues(values => ({
                ...values,
                specs: {
                  ...values.specs,
                  [name]: value
                }
              }));
            };
            let bulletValues = values.specs[itemsType];
            const actionsSpecs = {};
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.conversation.description), _react.default.createElement(_form.Textarea, {
              value: values.specs.description ?? '',
              label: "Description",
              name: "description",
              onChange: onInputChange
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
              fieldName: itemsType
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
        hash: 1178407039,
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
            const [, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onClick = async event => await activity.materials.generate(name);
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
            return _react.default.createElement(_markdown.Markdown, {
              content: activity.materials[name]
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlRm9ybUFjdGl2aXR5Q29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwic2F2ZSIsInNldCIsIm1vZGVsIiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJjbGFzc05hbWUiLCJBY3Rpdml0eU9wdGlvbnMiLCJhY3Rpdml0aWVzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiRm9ybUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJfaG9va3MiLCJfaWNvbnMiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJ0eXBlIiwic2V0RXJyb3IiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJoYXNPd25Qcm9wZXJ0eSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJGcmFnbWVudCIsIkljb24iLCJpY29uIiwiY29udmVyc2F0aW9uIiwiVGV4dGFyZWEiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidG9waWNzIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJJdGVtIiwiSXRlbU9wdGlvbiIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9mb3JtMiIsIkFjdGl2aXR5Q29udmVyc2F0aW9uRm9ybSIsImRhdGEiLCJpbmRleCIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsInRleHQiLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImFkZEJ1bGxldFBvaW50IiwiY291bGRCZVJlZmluZWQiLCJpbmNsdWRlcyIsImJvcmRlcmVkIiwiYnVsbGV0UG9pbnQiLCJhZGQiLCJJQ09OUyIsImFpU3RhcnMiLCJyZWZpbmUiLCJfcmVmaW5lbWVudE1vZGFsIiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInNob3dNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJvbkNsb3NlIiwiY292ZXIiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3IiLCJBbGVydCIsIl91aSIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiQ292ZXJJbWFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwiZmV0Y2hpbmciLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfbW9kYWwiLCJfZXJyb3IiLCJtb2R1bGUiLCJ0ZXh0YXJlYSIsInRleHRBcmVhVGV4dHMiLCJ0ZXh0QWN0aW9ucyIsInByb2Nlc3NNZXNzYWdlcyIsIm9ic2VydmF0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwiZSIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzaG93Iiwic3VidGl0bGUiLCJwbGFjZWhvbGRlciIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwiY2FuY2VsIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJnZXRPcHRpb25zIiwiYW5zd2VycyIsInF1ZXN0aW9ucyIsIl9oZWFkZXJUaXRsZSIsIl9iZXlvbmRfY29udGV4dCIsIl90YWJzIiwiX3JlZmluZU1vZGFsIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwic2hvd1JlZmluaW5nTW9kYWwiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsInNwb2tlbiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIkhlYWRlclRpdGxlIiwiQWN0aXZpdHlGb3JtVGFicyIsIlJlZmluZU1vZGFsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfbWFya2Rvd24iLCJBY3Rpdml0eU1hdGVyaWFsIiwibWF0ZXJpYWwiLCJtYXRlcmlhbHMiLCJzZXREYXRhIiwiZ2VuZXJhdGUiLCJFbXB0eUNhcmQiLCJlbXB0eSIsIk1hcmtkb3duIiwiQW5zd2VyRm9ybSIsInRvZ2dsZUFuc3dlckZvcm0iLCJzZXRWYWx1ZSIsIm9uQWRkIiwiYWRkT3B0aW9uIiwiSW5wdXQiLCJfbGlzdCIsIl9hbnN3ZXJGb3JtIiwiT3B0aW9uQW5zd2VycyIsInNob3dBbnN3ZXJGb3JtIiwidXBkYXRlIiwib3B0aW9ucyIsIm9wZW5Gb3JtIiwic3RvcFByb3BhZ2F0aW9uIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkFuc3dlckl0ZW0iLCJfY2hpcHMiLCJwcm9wcyIsIml0ZW0iLCJtYXJrIiwic2V0Q29ycmVjdCIsImNvcnJlY3RBbnN3ZXIiLCJDaGlwIiwic2l6aW5nIiwiX2NvcmUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIl9hbnN3ZXJzIiwiX2dldE9wdGlvbnMiLCJNb2RhbFJhZGlvQnV0dG9uIiwiY3VycmVudFZhbHVlIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsIm91dHB1dCIsIm1hcCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIl9xdWVzdGlvbnMiLCJfdG9waWNzIiwicmVtb3ZlSXRlbXMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwiRm9ybXMiLCJSZWZpbmVRdWVzdGlvbnNNb2RhbCIsIlJlZmluZVRvcGljc01vZGFsIiwiY3JpdGVyaWFzIiwiQ29udHJvbCIsIl9yYWRpb0J1dHRvbiIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIl9jb3ZlckltYWdlIiwiYmFjayIsImZvcm0iLCJfbWF0ZXJpYWxzIiwiX2FjdGl2aXR5IiwiX2NvbnZlcnNhdGlvbiIsImEiLCJzZXRNYXRlcmlhbHMiLCJwYW5lcyIsInRhYnMiLCJmb3JFYWNoIiwiaXNCdWxsZXRQb2ludCIsImxhYmVscyIsImxhYmVsVGFiIiwiYXR0cnMiLCJhZGRUYWIiLCJwdXNoIiwiVGFiIiwiaWQiLCJyZXF1aXJlZCIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udmVyc2F0aW9uL2Zvcm0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pbmRleC50c3giLCIvdHMvY29udmVyc2F0aW9uL2l0ZW0udHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy9nZXQtb3B0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlLnRzIiwiL3RzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXItZm9ybS50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3JlZmluZS1tb2RhbC9pbmRleC50c3giLCIvdHMvcmVmaW5lLW1vZGFsL3F1ZXN0aW9ucy50c3giLCIvdHMvcmVmaW5lLW1vZGFsL3RvcGljcy50c3giLCIvdHMvc2VjdGlvbnMvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy90YWJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVSyxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLHNCQUFzQixHQUFFO1lBQ2pELE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxZQUFZO1lBRW5DLE1BQU1DLEdBQUcsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBd0I7Y0FDakVDLEtBQUssRUFBRVIsUUFBUSxDQUFDUSxLQUFLO2NBQ3JCQyxXQUFX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