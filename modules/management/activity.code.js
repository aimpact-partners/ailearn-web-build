System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/modal", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/tabs"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, ItemOption, ModuleActivityForm, OptionAnswers, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006FormReactSelect) {
      dependency_8 = _pragmateUi006FormReactSelect;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Image) {
      dependency_10 = _pragmateUi006Image;
    }, function (_pragmateUi006Alert) {
      dependency_11 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Modal) {
      dependency_13 = _pragmateUi006Modal;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }, function (_pragmateUi006Chips) {
      dependency_16 = _pragmateUi006Chips;
    }, function (_beyondJsKernel019Core) {
      dependency_17 = _beyondJsKernel019Core;
    }, function (_pragmateUi006Tabs) {
      dependency_18 = _pragmateUi006Tabs;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/alert', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/chips', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/tabs', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 3686468693,
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
              specs: activity.specs.getData()
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
        hash: 2625724291,
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
          var _selectActivity = require("../select-activity");
          function ConversationForm({
            activity,
            values,
            setValues
          }) {
            const {
              types,
              itemsType,
              texts,
              store
            } = (0, _context.useFormActivityContext)();
            globalThis.store = store;
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            if (!types.hasOwnProperty(type)) return null;
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
            }), texts.conversation.description), _react.default.createElement(_selectActivity.SelectActivity, {
              values: values,
              setValues: setValues
            }), _react.default.createElement(_form.Textarea, {
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
              handleChange: onInputChange,
              fieldName: itemsType
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./conversation/index
      ************************************/

      ims.set('./conversation/index', {
        hash: 649768872,
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
        hash: 563118335,
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
          var _selectActivity = require("../select-activity");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_selectActivity.SelectActivity, {
              values: values,
              setValues: setValues
            }), _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
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

      /*********************************
      INTERNAL MODULE: ./select-activity
      *********************************/

      ims.set('./select-activity', {
        hash: 1535876075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectActivity = SelectActivity;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("./context");
          function SelectActivity({
            values,
            setValues
          }) {
            const {
              activity,
              store
            } = (0, _context.useFormActivityContext)();
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
                  activityId: data.value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlRm9ybUFjdGl2aXR5Q29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwiZ2V0RGF0YSIsInNhdmUiLCJzZXQiLCJtb2RlbCIsInNhdmVEcmFmdCIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtIiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlPcHRpb25zIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkZvcm1BY3Rpdml0eUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYnVsbGV0UG9pbnRzSW5wdXQiLCJfaXRlbSIsIl9vcHRpb25zSGVhZGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX3NlbGVjdEFjdGl2aXR5IiwiQ29udmVyc2F0aW9uRm9ybSIsInR5cGVzIiwiaXRlbXNUeXBlIiwiZ2xvYmFsVGhpcyIsInR5cGUiLCJzZXRFcnJvciIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsImhhc093blByb3BlcnR5Iiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkZyYWdtZW50IiwiSWNvbiIsImljb24iLCJjb252ZXJzYXRpb24iLCJTZWxlY3RBY3Rpdml0eSIsIlRleHRhcmVhIiwibGFiZWwiLCJvbkNoYW5nZSIsInRvcGljcyIsIkJ1bGxldFBvaW50c0lucHV0IiwiSXRlbSIsIkl0ZW1PcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZE5hbWUiLCJCdWxsZXRQb2ludHNIZWFkZXIiLCJfZm9ybTIiLCJBY3Rpdml0eUNvbnZlcnNhdGlvbkZvcm0iLCJkYXRhIiwiaW5kZXgiLCJ1c2VCdWxsZXRQb2ludHNJbnB1dENvbnRleHQiLCJ0ZXh0IiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJhZGRCdWxsZXRQb2ludCIsImNvdWxkQmVSZWZpbmVkIiwiaW5jbHVkZXMiLCJib3JkZXJlZCIsImJ1bGxldFBvaW50IiwiYWRkIiwiSUNPTlMiLCJhaVN0YXJzIiwicmVmaW5lIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwib25DbG9zZSIsImNvdmVyIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJfdWkiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsImZldGNoaW5nIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX21vZGFsIiwiX2Vycm9yIiwibW9kdWxlIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsImUiLCJtZXNzYWdlIiwib25DbGlja0FjdGlvbiIsIk1vZGFsIiwic2hvdyIsInN1YnRpdGxlIiwicGxhY2Vob2xkZXIiLCJDb25maXJtTW9kYWwiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2V0T3B0aW9ucyIsImFuc3dlcnMiLCJxdWVzdGlvbnMiLCJfaGVhZGVyVGl0bGUiLCJfYmV5b25kX2NvbnRleHQiLCJfdGFicyIsIl9yZWZpbmVNb2RhbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInNob3dSZWZpbmluZ01vZGFsIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJzcG9rZW4iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJIZWFkZXJUaXRsZSIsIkFjdGl2aXR5Rm9ybVRhYnMiLCJSZWZpbmVNb2RhbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX21hcmtkb3duIiwiQWN0aXZpdHlNYXRlcmlhbCIsIm1hdGVyaWFsIiwibWF0ZXJpYWxzIiwic2V0RGF0YSIsImdlbmVyYXRlIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJNYXJrZG93biIsIkFuc3dlckZvcm0iLCJ0b2dnbGVBbnN3ZXJGb3JtIiwic2V0VmFsdWUiLCJvbkFkZCIsImFkZE9wdGlvbiIsIklucHV0IiwiX2xpc3QiLCJfYW5zd2VyRm9ybSIsIk9wdGlvbkFuc3dlcnMiLCJzaG93QW5zd2VyRm9ybSIsInVwZGF0ZSIsIm9wdGlvbnMiLCJvcGVuRm9ybSIsInN0b3BQcm9wYWdhdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBbnN3ZXJJdGVtIiwiX2NoaXBzIiwicHJvcHMiLCJpdGVtIiwibWFyayIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwiQ2hpcCIsInNpemluZyIsIl9jb3JlIiwidGFyZ2V0IiwiZ2VuZXJhdGVBbnN3ZXJzIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiZ2VuZXJhdGVBbnN3ZXIiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsIl9hbnN3ZXJzIiwiX2dldE9wdGlvbnMiLCJNb2RhbFJhZGlvQnV0dG9uIiwiY3VycmVudFZhbHVlIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsIm91dHB1dCIsIm1hcCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIl9xdWVzdGlvbnMiLCJfdG9waWNzIiwicmVtb3ZlSXRlbXMiLCJnZW5lcmF0ZVN1Z2dlc3Rpb25zIiwiRm9ybXMiLCJSZWZpbmVRdWVzdGlvbnNNb2RhbCIsIlJlZmluZVRvcGljc01vZGFsIiwiY3JpdGVyaWFzIiwiQ29udHJvbCIsIl9yYWRpb0J1dHRvbiIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIl9jb3ZlckltYWdlIiwiYmFjayIsImZvcm0iLCJfcmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJmb3JFYWNoIiwiaSIsImlkIiwiYWN0aXZpdHlJZCIsInB1c2giLCJzZWxlY3RDaGFuZ2UiLCJSZWFjdFNlbGVjdCIsIl9tYXRlcmlhbHMiLCJfYWN0aXZpdHkiLCJfY29udmVyc2F0aW9uIiwiYSIsInNldE1hdGVyaWFscyIsInBhbmVzIiwidGFicyIsImlzQnVsbGV0UG9pbnQiLCJsYWJlbHMiLCJsYWJlbFRhYiIsImF0dHJzIiwiYWRkVGFiIiwiVGFiIiwicmVxdWlyZWQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnZlcnNhdGlvbi9mb3JtLnRzeCIsIi90cy9jb252ZXJzYXRpb24vaW5kZXgudHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pdGVtLnRzeCIsIi90cy9jb252ZXJzYXRpb24vb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvZ2V0LW9wdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvYW5zd2VyLWZvcm0udHN4IiwiL3RzL29wdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL29wdGlvbnMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy9yZWZpbmUtbW9kYWwvaW5kZXgudHN4IiwiL3RzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMudHN4IiwiL3RzL3JlZmluZS1tb2RhbC90b3BpY3MudHN4IiwiL3RzL3NlY3Rpb25zL2hlYWRlci10aXRsZS50c3giLCIvdHMvc2VsZWN0LWFjdGl2aXR5LnRzeCIsIi90cy90YWJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVUssWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxzQkFBc0IsR0FBRTtZQUNqRCxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csWUFBWTtZQUVuQyxNQUFNQyxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEs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