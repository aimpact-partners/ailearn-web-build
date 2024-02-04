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
        hash: 356804330,
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
            const onClick = () => {
              store.editActivity = undefined;
            };
            console.log(0.1, _beyond_context.module.specifier);
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
            }), _react.default.createElement("div", {
              className: "flex-container flex-end separator mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              className: "btn-primary outline",
              onClick: onClick
            }, texts.actions.back)), showRefiningModal && _react.default.createElement(_refineModal.RefineModal, {
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
        hash: 727708823,
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
                text: "no elements"
              }, _react.default.createElement(_components.Button, {
                onClick: onClick,
                variant: "primary"
              }, texts.actions.generate), _react.default.createElement(_ui.ProcessContainer, {
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
        hash: 1421880381,
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
          function HeaderTitle() {
            const {
              values,
              setValues,
              texts
            } = (0, _context.useFormActivityContext)();
            const onChange = event => setValues({
              ...values,
              [event.currentTarget.name]: event.currentTarget.value
            });
            return _react.default.createElement("div", {
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
            })), _react.default.createElement(_coverImage.CoverImage, null));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 3645782049,
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
              const labels = !isBulletPoint ? texts.activities.materials : texts.activities.types;
              const labelTab = isBulletPoint ? labels[itemsType] : typeof item === 'string' ? item : labels[item.name];
              console.log(0.2, isBulletPoint, item, labels);
              const attrs = {
                disabled: false
              };
              const addTab = (attrs = {}) => {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  ...attrs,
                  key: `${activity.id}.${item}-tab`
                }, labelTab));
              };
              console.log(0.1, item, isBulletPoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlRm9ybUFjdGl2aXR5Q29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwic2F2ZSIsInNldCIsIm1vZGVsIiwic2F2ZURyYWZ0IiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJjbGFzc05hbWUiLCJBY3Rpdml0eU9wdGlvbnMiLCJhY3Rpdml0aWVzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiRm9ybUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJfaG9va3MiLCJfaWNvbnMiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJ0eXBlIiwic2V0RXJyb3IiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJoYXNPd25Qcm9wZXJ0eSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkZyYWdtZW50IiwiSWNvbiIsImljb24iLCJjb252ZXJzYXRpb24iLCJUZXh0YXJlYSIsImxhYmVsIiwib25DaGFuZ2UiLCJ0b3BpY3MiLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwiZGF0YSIsImluZGV4IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwidGV4dCIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiYWRkQnVsbGV0UG9pbnQiLCJjb3VsZEJlUmVmaW5lZCIsImluY2x1ZGVzIiwiYm9yZGVyZWQiLCJidWxsZXRQb2ludCIsImFkZCIsIklDT05TIiwiYWlTdGFycyIsInJlZmluZSIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwiZ2VuZXJhdGVJbWFnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwib25DbG9zZSIsImNvdmVyIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJfdWkiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsImZldGNoaW5nIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX21vZGFsIiwiX2Vycm9yIiwibW9kdWxlIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm5hbWUiLCJlIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInNob3ciLCJzdWJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsImdldE9wdGlvbnMiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX2hlYWRlclRpdGxlIiwiX2JleW9uZF9jb250ZXh0IiwiX3RhYnMiLCJfcmVmaW5lTW9kYWwiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJzaG93UmVmaW5pbmdNb2RhbCIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwic3Bva2VuIiwiY29uc29sZSIsImxvZyIsInNwZWNpZmllciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIkhlYWRlclRpdGxlIiwiQWN0aXZpdHlGb3JtVGFicyIsImJhY2siLCJSZWZpbmVNb2RhbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX21hcmtkb3duIiwiQWN0aXZpdHlNYXRlcmlhbCIsIm1hdGVyaWFsIiwibWF0ZXJpYWxzIiwic2V0RGF0YSIsImdlbmVyYXRlIiwiRW1wdHlDYXJkIiwiTWFya2Rvd24iLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFZhbHVlIiwib25BZGQiLCJhZGRPcHRpb24iLCJJbnB1dCIsIl9saXN0IiwiX2Fuc3dlckZvcm0iLCJPcHRpb25BbnN3ZXJzIiwic2hvd0Fuc3dlckZvcm0iLCJ1cGRhdGUiLCJvcHRpb25zIiwib3BlbkZvcm0iLCJzdG9wUHJvcGFnYXRpb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwiaXRlbSIsIm1hcmsiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoaXAiLCJzaXppbmciLCJfY29yZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlQW5zd2VyIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiX2Fuc3dlcnMiLCJfZ2V0T3B0aW9ucyIsIk1vZGFsUmFkaW9CdXR0b24iLCJjdXJyZW50VmFsdWUiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwib3V0cHV0IiwibWFwIiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiX3F1ZXN0aW9ucyIsIl90b3BpY3MiLCJyZW1vdmVJdGVtcyIsImdlbmVyYXRlU3VnZ2VzdGlvbnMiLCJGb3JtcyIsIlJlZmluZVF1ZXN0aW9uc01vZGFsIiwiUmVmaW5lVG9waWNzTW9kYWwiLCJjcml0ZXJpYXMiLCJDb250cm9sIiwiX3JhZGlvQnV0dG9uIiwiQ2hlY2tib3giLCJjaGVja2VkIiwiX2NvdmVySW1hZ2UiLCJmb3JtIiwiX21hdGVyaWFscyIsIl9hY3Rpdml0eSIsIl9jb252ZXJzYXRpb24iLCJhIiwic2V0TWF0ZXJpYWxzIiwicGFuZXMiLCJ0YWJzIiwiZm9yRWFjaCIsImlzQnVsbGV0UG9pbnQiLCJsYWJlbHMiLCJsYWJlbFRhYiIsImF0dHJzIiwiYWRkVGFiIiwicHVzaCIsIlRhYiIsImlkIiwicmVxdWlyZWQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnZlcnNhdGlvbi9mb3JtLnRzeCIsIi90cy9jb252ZXJzYXRpb24vaW5kZXgudHN4IiwiL3RzL2NvbnZlcnNhdGlvbi9pdGVtLnRzeCIsIi90cy9jb252ZXJzYXRpb24vb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvZ2V0LW9wdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvYW5zd2VyLWZvcm0udHN4IiwiL3RzL29wdGlvbnMvYW5zd2Vycy9pbmRleC50c3giLCIvdHMvb3B0aW9ucy9hbnN3ZXJzL2l0ZW0udHN4IiwiL3RzL29wdGlvbnMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvaXRlbS50c3giLCIvdHMvb3B0aW9ucy9vcHRpb25zLWhlYWRlci50c3giLCIvdHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy9yZWZpbmUtbW9kYWwvaW5kZXgudHN4IiwiL3RzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMudHN4IiwiL3RzL3JlZmluZS1tb2RhbC90b3BpY3MudHN4IiwiL3RzL3NlY3Rpb25zL2hlYWRlci10aXRsZS50c3giLCIvdHMvdGFicy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVUssWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxzQkFBc0IsR0FBRTtZQUNqRCxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csWUFBWTtZQUVuQyxNQUFNQyxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQXdCO2NBQ2pFQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQ1EsS0FBSztjQUNyQkMsV0FBVyxFQUFFVCxR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