System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "pragmate-ui@0.0.6/empty", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.0.6/tabs", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, ItemOption, ModuleActivityForm, OptionAnswers, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006Modal) {
      dependency_5 = _pragmateUi006Modal;
    }, function (_pragmateUi006Icons) {
      dependency_6 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Alert) {
      dependency_8 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_11 = _pragmateUi006Image;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_12 = _pragmateUi006FormReactSelect;
    }, function (_aimpactAilearnApp0024ComponentsUiBulletPointsInput) {
      dependency_13 = _aimpactAilearnApp0024ComponentsUiBulletPointsInput;
    }, function (_pragmateUi006Empty) {
      dependency_14 = _pragmateUi006Empty;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupWiseForm004Form) {
      dependency_16 = _bgroupWiseForm004Form;
    }, function (_pragmateUi006Tabs) {
      dependency_17 = _pragmateUi006Tabs;
    }, function (_beyondJsKernel019Core) {
      dependency_18 = _beyondJsKernel019Core;
    }, function (_pragmateUi006List) {
      dependency_19 = _pragmateUi006List;
    }, function (_pragmateUi006Chips) {
      dependency_20 = _pragmateUi006Chips;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@bgroup/wise-form/form', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/chips', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/activity.code');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 4191088778,
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
            } = (0, _context.useModuleContext)();
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

      /*****************************************
      INTERNAL MODULE: ./components/cancel-modal
      *****************************************/

      ims.set('./components/cancel-modal', {
        hash: 4135962634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancelChangesModal = CancelChangesModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          function CancelChangesModal({
            onClose,
            onConfirm
          }) {
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Are you sure",
              text: "Your changes have not been saved. If you continue, you will lose them.",
              onClose: onClose,
              onCancel: onClose,
              onConfirm: () => {
                onConfirm();
              }
            });
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./components/content-editable
      *********************************************/

      ims.set('./components/content-editable', {
        hash: 2547633096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const ContentEditable = ({
            name,
            selector: Control = 'div',
            className,
            children,
            onSave
          }) => {
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const contentRef = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              if (typeof children === 'string' && contentRef.current) {
                contentRef.current.textContent = children;
              }
            }, [children]);
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              setTimeout(() => {
                const el = contentRef.current;
                if (el) {
                  const range = document.createRange();
                  const sel = globalThis.getSelection();
                  range.selectNodeContents(el);
                  range.collapse(false);
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                  el.focus();
                }
              }, 0);
            };
            const save = async event => {
              try {
                await onSave({
                  name,
                  value: contentRef.current?.textContent
                });
                setIsEditable(false);
              } catch (e) {
                console.error(e);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? `pui-editable-selector` : '';
            const onClick = isEditable ? save : toggleEdit;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: controlCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true
            }), _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: onClick
            }));
          };
          exports.ContentEditable = ContentEditable;
        }
      });

      /************************************************
      INTERNAL MODULE: ./components/cover-image/actions
      ************************************************/

      ims.set('./components/cover-image/actions', {
        hash: 3332004448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _refinementModal = require("./refinement-modal");
          var _context = require("../../context");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
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
              }, _react.default.createElement(_icons.IconButton, {
                onClick: () => setShowRefiningModal(true),
                icon: _icons2.ICONS.aiStars
              }), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: generateImage,
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./components/cover-image/error
      **********************************************/

      ims.set('./components/cover-image/error', {
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

      /**********************************************
      INTERNAL MODULE: ./components/cover-image/index
      **********************************************/

      ims.set('./components/cover-image/index', {
        hash: 2035565100,
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
          var _context = require("../../context");
          function CoverImage() {
            const {
              store,
              activity
            } = (0, _context.useModuleContext)();
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

      /*********************************************************
      INTERNAL MODULE: ./components/cover-image/refinement-modal
      *********************************************************/

      ims.set('./components/cover-image/refinement-modal', {
        hash: 4168714935,
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
          var _context = require("../../context");
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
            } = (0, _context.useModuleContext)();
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

      /****************************************************
      INTERNAL MODULE: ./components/refine-modal/base/index
      ****************************************************/

      ims.set('./components/refine-modal/base/index', {
        hash: 2229060017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineBaseModal = RefineBaseModal;
          var _react = require("react");
          var _questions = require("./questions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          function RefineBaseModal({
            data,
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
                await activity.generateQuestions(values.observations);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_questions.RefineQuestionsModalFields, {
              events: events,
              values: values
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.refiningQuestions
            })));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/refine-modal/base/questions
      ********************************************************/

      ims.set('./components/refine-modal/base/questions', {
        hash: 4080325559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModalFields = RefineQuestionsModalFields;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          function RefineQuestionsModalFields({
            values,
            events
          }) {
            const {
              texts: {
                refine: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.description)), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./components/refine-modal/get-options
      *****************************************************/

      ims.set('./components/refine-modal/get-options', {
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

      /***********************************************
      INTERNAL MODULE: ./components/refine-modal/index
      ***********************************************/

      ims.set('./components/refine-modal/index', {
        hash: 3734139998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineModal = RefineModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _base = require("./base");
          function RefineModal({
            data,
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
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_base.RefineBaseModal, {
              values: values
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./components/refine-modal/questions/index
      *********************************************************/

      ims.set('./components/refine-modal/questions/index', {
        hash: 3177838515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModal = RefineQuestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _questions = require("./questions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../../../context");
          function RefineQuestionsModal({
            data,
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
                await activity.generateQuestions(values.observations);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement(_questions.RefineQuestionsModalFields, {
              events: events,
              values: values
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.refiningQuestions
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./components/refine-modal/questions/questions
      *************************************************************/

      ims.set('./components/refine-modal/questions/questions', {
        hash: 1790335474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModalFields = RefineQuestionsModalFields;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _radioButton = require("../radio-button");
          var _context = require("../../../context");
          function RefineQuestionsModalFields({
            values,
            events
          }) {
            const {
              texts: {
                activities: activityTexts
              },
              texts: {
                refine: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.description)), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            }), _react.default.createElement(_radioButton.ModalRadioButton, {
              name: "type",
              value: values.type,
              label: activityTexts.refine.type.label,
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

      /******************************************************
      INTERNAL MODULE: ./components/refine-modal/radio-button
      ******************************************************/

      ims.set('./components/refine-modal/radio-button', {
        hash: 3728914250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalRadioButton = ModalRadioButton;
          var _react = require("react");
          var _context = require("../../context");
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
            } = (0, _context.useModuleContext)();
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

      /************************************************
      INTERNAL MODULE: ./components/refine-modal/topics
      ************************************************/

      ims.set('./components/refine-modal/topics', {
        hash: 516230958,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineTopicsModal = RefineTopicsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function RefineTopicsModal({
            setValues,
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

      /********************************************
      INTERNAL MODULE: ./components/select-activity
      ********************************************/

      ims.set('./components/select-activity', {
        hash: 4144897060,
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

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2291617846,
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

      /***********************************
      INTERNAL MODULE: ./conversation/form
      ***********************************/

      ims.set('./conversation/form', {
        hash: 464435488,
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
              texts,
              store
            } = (0, _context.useModuleContext)();
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
        hash: 2219671691,
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
            } = (0, _context.useModuleContext)();
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
        hash: 267651600,
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
            } = (0, _context.useModuleContext)();
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

      /****************************
      INTERNAL MODULE: ./forms/base
      ****************************/

      ims.set('./forms/base', {
        hash: 187563751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormBase = ActivityFormBase;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _ = require("./");
          function ActivityFormBase({
            type
          }) {
            const {
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            if (!_.forms[type]) console.error('No form for type', type, _.forms);
            const Form = _.forms[type];
            const onDelete = async () => {
              activity.specs.clear();
              activity.materials.clear();
              editData({
                specs: activity.specs.getData(),
                materials: activity.materials.getData()
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h3", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              disabled: !activity.specs.isValid,
              variant: "primary",
              bordered: true,
              onClick: onDelete
            }, texts.actions.delete))), _react.default.createElement(Form, null));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./forms/character-talk/form
      *******************************************/

      ims.set('./forms/character-talk/form', {
        hash: 2232674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkManualForm = CharacterTalkManualForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          function CharacterTalkManualForm({
            onCancel
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const {
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  [target.name]: target.value
                }
              });
            };
            const btnLabel = values.updated ? 'Cancel' : 'Back';
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.role.label,
              placeholder: texts.specs.role.placeholder,
              name: "role"
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.character.label,
              placeholder: texts.specs.character.placeholder,
              name: "character"
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/character-talk/index
      ********************************************/

      ims.set('./forms/character-talk/index', {
        hash: 3427031532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkForm = CharacterTalkForm;
          var _react = require("react");
          var _emptyMaterial = require("../../specs/empty-material");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          function CharacterTalkForm() {
            const {
              activity,
              editData,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manual) {
              return _react.default.createElement(_form.CharacterTalkManualForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.role || !values.specs.character) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "character-talk",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "role"
            }), _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "character"
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./forms/content-theory/content
      **********************************************/

      ims.set('./forms/content-theory/content', {
        hash: 1587647395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryContent = ContentTheoryContent;
          var _react = require("react");
          var _manual = require("./manual");
          var _context = require("../../context");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _icons = require("pragmate-ui/icons");
          var _emptyMaterial = require("./empty-material");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ContentTheoryContent({
            content
          }) {
            const {
              activity,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            const openManualForm = () => setManual(true);
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
            });
            if (manual) {
              return _react.default.createElement(_manual.ManualMaterialForm, {
                name: "article",
                onCancel: () => setManual(false)
              });
            }
            if (activity.materials.article) return _react.default.createElement("div", {
              className: "material__content"
            }, _react.default.createElement("div", {
              className: "flex-container flex-end material__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: openManualForm
            })), _react.default.createElement(_markdown.Markdown, {
              content: activity.materials.article
            }));
            return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: "article",
              onManual: openManualForm
            });
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./forms/content-theory/empty-material
      *****************************************************/

      ims.set('./forms/content-theory/empty-material', {
        hash: 4235629345,
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
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onClick = async event => {
              try {
                await activity.materials.generate(name);
              } catch (e) {
                console.error(e);
              }
            };
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./forms/content-theory/index
      ********************************************/

      ims.set('./forms/content-theory/index', {
        hash: 1171242977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryForm = ContentTheoryForm;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("./materials");
          function ContentTheoryForm() {
            const {
              activity,
              values,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials.article);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              console.log('aj');
              setData({
                materials: activity.materials.getData()
              });
            });
            return _react.default.createElement(_materials.ActivityFormTabs, null);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/content-theory/manual
      *********************************************/

      ims.set('./forms/content-theory/manual', {
        hash: 760757099,
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
          function ManualMaterialForm({
            name,
            content,
            onCancel
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const {
              values,
              editData
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
                }
              });
            };
            const btnLabel = values.updated ? 'Cancel' : 'Back';
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
            return _react.default.createElement("div", null, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: "content",
              value: values.materials?.[name] ?? '',
              placeholder: texts.manual.textarea
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./forms/content-theory/materials
      ************************************************/

      ims.set('./forms/content-theory/materials', {
        hash: 2701612317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFormTabs = ActivityFormTabs;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _pane = require("../materials/pane");
          var _content = require("./content");
          function ActivityFormTabs({}) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onChange = () => {};
            const [, setMaterials] = _react.default.useState(activity.materials.items);
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => {
              setMaterials([...activity.materials.items]);
            });
            activity.materials.items.forEach(item => {
              const name = typeof item === 'string' ? item : item.name;
              const label = texts.materials[name];
              const attrs = {
                disabled: !!item?.required && !activity.materials[item.required]
              };
              tabs.push(_react.default.createElement(_tabs.Tab, {
                ...attrs,
                key: `${activity.id}.${name}-tab`
              }, label));
            });
            return _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "mt-15 ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, {
              className: ""
            }, _react.default.createElement(_content.ContentTheoryContent, null), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            })));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./forms/debate/form
      ***********************************/

      ims.set('./forms/debate/form', {
        hash: 3746069090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualDebateForm = ManualDebateForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          function ManualDebateForm({
            onCancel
          }) {
            const {
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const {
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  [target.name]: target.value
                }
              });
            };
            const btnLabel = values.updated ? 'Cancel' : 'Back';
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.role.label,
              placeholder: texts.specs.role.placeholder,
              name: "role"
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./forms/debate/index
      ************************************/

      ims.set('./forms/debate/index', {
        hash: 497201529,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateForm = DebateForm;
          var _react = require("react");
          var _emptyMaterial = require("../../specs/empty-material");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          function DebateForm() {
            const {
              activity,
              editData,
              values
            } = (0, _context.useModuleContext)();
            const [manual, setManual] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manual) {
              return _react.default.createElement(_form.ManualDebateForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.role) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "debate",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "role"
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./forms/index
      *****************************/

      ims.set('./forms/index', {
        hash: 296584300,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.forms = void 0;
          var _characterTalk = require("./character-talk");
          var _contentTheory = require("./content-theory");
          var _debate = require("./debate");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          const forms = exports.forms = {
            'content-theory': _contentTheory.ContentTheoryForm,
            debate: _debate.DebateForm,
            spoken: _spoken.SpokenForm,
            'multiple-choice': _multipleChoice.MultipleChoiceForm,
            'character-talk': _characterTalk.CharacterTalkForm
          };
        }
      });

      /**************************************
      INTERNAL MODULE: ./forms/materials/pane
      **************************************/

      ims.set('./forms/materials/pane', {
        hash: 1887555764,
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
          var _emptyMaterial = require("../content-theory/empty-material");
          function MaterialPane({
            name
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setMaterial(activity.materials[name]);
            });
            if (!material) return _react.default.createElement(_emptyMaterial.EmptyMaterial, {
              name: name,
              onManual: () => console.log('manual edition')
            });
            return _react.default.createElement(_markdown.Markdown, {
              content: material
            });
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./forms/multiple-choice
      ***************************************/

      ims.set('./forms/multiple-choice', {
        hash: 3712250070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("../options/item");
          var _core = require("@beyond-js/kernel/core");
          var _optionsHeader = require("../options/options-header");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function MultipleChoiceForm() {
            const {
              activity,
              texts,
              values,
              editData
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState(activity.materials.questions ?? []);
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            const [addAnswer, setAddAnswer] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              console.log(20, activity.materials.questions, activity);
              setOptions(activity.materials.questions);
              setUpdate({});
            });
            const handleChange = ({
              currentTarget: target
            }) => {
              setError('');
              const materials = {
                ...values.materials
              };
              editData({
                materials: {
                  ...materials,
                  questions: target.value
                }
              });
              setOptions(target.value);
            };
            const actionsSpecs = {
              answers: {
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
              },
              add: {
                icon: 'add',
                title: texts.actions.add,
                onClick: (event, index) => {
                  setAddAnswer(index);
                }
              }
            };
            console.log(33, options);
            return _react.default.createElement("div", {
              className: "activity__materials-form"
            }, _react.default.createElement(_bulletPointsInput.BulletPointsInput, {
              actions: actionsSpecs,
              values: options,
              Item: _item.ItemOption,
              specs: {
                type: 'questions',
                answers: true,
                showAnswerFormIn: addAnswer
              },
              handleChange: handleChange,
              fieldName: "questions"
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./forms/spoken/criteria-field-item
      **************************************************/

      ims.set('./forms/spoken/criteria-field-item', {
        hash: 2276911582,
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
              values,
              editData,
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const handleChange = event => {
              const target = event.currentTarget;
              item[target.name] = target.value;
              onChange(index, item);
            };
            return _react.default.createElement("div", {
              className: "form-repeated-container"
            }, _react.default.createElement("h5", null, texts.specs.criteria.label + ' ' + parseInt(index) + 1), _react.default.createElement(_form.Input, {
              onChange: handleChange,
              label: texts.specs.criteria.label,
              placeholder: texts.specs.criteria.placeholder,
              value: item.criteria,
              name: "criteria",
              variant: "floating"
            }), _react.default.createElement(_form.Input, {
              onChange: handleChange,
              label: texts.specs.subject.label,
              value: item.subject,
              placeholder: texts.specs.subject.placeholder,
              name: "subject",
              variant: "floating"
            }), total > 1 && _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: () => onDelete(index)
            }, ' ', texts.actions.delete)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./forms/spoken/criteria-field
      *********************************************/

      ims.set('./forms/spoken/criteria-field', {
        hash: 100249,
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
          function CriteriaField() {
            const {
              values,
              editData,
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [totalItems, setTotalItems] = _react.default.useState(values.specs?.criteria?.length || 1);
            const [items, setItems] = _react.default.useState(values.specs.criteria.length ? values.specs.criteria : [{
              criteria: '',
              subject: ''
            }]);
            const onAdd = () => {
              setTotalItems(totalItems + 1);
              setItems([...items, {
                criteria: '',
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
                }
              });
            };
            const onChangeItem = (index, value) => {
              const data = items;
              data[index] = value;
              setItems(data);
              editData({
                specs: {
                  ...values.specs,
                  criteria: data
                }
              });
            };
            for (let i = 0; i < totalItems; ++i) {
              output.push(_react.default.createElement(_criteriaFieldItem.CriteriaFieldItem, {
                onChange: onChangeItem,
                total: totalItems,
                item: items[i],
                onDelete: onDelete,
                key: `criteria-${i}`,
                index: i
              }));
            }
            return _react.default.createElement("div", {
              className: "form__subsection"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.criteria.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onAdd
            }, texts.actions.add))), output);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./forms/spoken/form
      ***********************************/

      ims.set('./forms/spoken/form', {
        hash: 123068640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenManualForm = SpokenManualForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _criteriaField = require("./criteria-field");
          function SpokenManualForm({
            onCancel
          }) {
            const {
              values,
              editData,
              texts,
              activity
            } = (0, _context.useModuleContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const onChange = event => {
              const target = event.currentTarget;
              const specs = {
                ...values.specs
              };
              editData({
                specs: {
                  ...specs,
                  [target.name]: target.value
                }
              });
            };
            const btnLabel = values.updated ? 'Cancel' : 'Back';
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              onCancel();
            };
            const onModalCancel = () => setShowCanceLModal(false);
            console.log(12, values.specs);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.task.label,
              placeholder: texts.specs.task.placeholder,
              name: "task"
            }), _react.default.createElement(_form.Input, {
              onChange: onChange,
              label: texts.specs.instructions.label,
              placeholder: texts.specs.instructions.placeholder,
              name: "instructions"
            }), _react.default.createElement(_criteriaField.CriteriaField, null), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, btnLabel)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./forms/spoken/index
      ************************************/

      ims.set('./forms/spoken/index', {
        hash: 2430585250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenForm = SpokenForm;
          var _react = require("react");
          var _emptyMaterial = require("../../specs/empty-material");
          var _baseSpec = require("../../specs/base-spec");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _list = require("pragmate-ui/list");
          var _icons = require("pragmate-ui/icons");
          var _criteriaField = require("./criteria-field");
          function SpokenForm() {
            const {
              values,
              activity,
              editData,
              texts
            } = (0, _context.useModuleContext)();
            const [manualForm, setManual] = _react.default.useState(false);
            const [editCriteria, setEditCriteria] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.specs], () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            }, 'specs.generated');
            if (manualForm) {
              return _react.default.createElement(_form.SpokenManualForm, {
                onCancel: () => setManual(false)
              });
            }
            if (!values.specs.criteria || !values.specs.task || !values.specs.instructions) {
              return _react.default.createElement(_emptyMaterial.EmptySpecs, {
                name: "spoken",
                onManual: () => setManual(true)
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "task"
            }), _react.default.createElement(_baseSpec.ActivityBaseSpec, {
              name: "instructions"
            }), _react.default.createElement("div", {
              className: "form__multiple-field"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("h4", null, texts.specs.criteria.title), _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: () => setEditCriteria(true)
            })), editCriteria ? _react.default.createElement(_criteriaField.CriteriaField, null) : _react.default.createElement(_list.List, {
              className: "criteria__items-list",
              items: values.specs.criteria,
              specs: {},
              control: ({
                data
              }) => _react.default.createElement("div", {
                className: "subform__items"
              }, _react.default.createElement("strong", null, data.criteria, ": "), " ", _react.default.createElement("span", null, data.subject))
            })));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./forms/use-form
      ********************************/

      ims.set('./forms/use-form', {
        hash: 1296880974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          function useForm(settings) {
            const [model, setModel] = _react.default.useState(null);
            _react.default.useEffect(() => {
              const properties = settings.fields.map(item => item.name);
              //@ts-ignore
              const values = settings.values || {};
              const instance = new _form.FormModel(settings, {
                properties,
                ...values
              });
              setModel(instance);
            }, []);
            return {
              ready: !!model,
              model
            };
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2915967568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          var _coverImage = require("./components/cover-image");
          var _components = require("pragmate-ui/components");
          var _contentEditable = require("./components/content-editable");
          var _cancelModal = require("./components/cancel-modal");
          var _icons = require("pragmate-ui/icons");
          var _refineModal = require("./components/refine-modal");
          function Header() {
            const {
              values,
              editData,
              texts,
              store,
              activity,
              updated,
              clearData
            } = (0, _context.useModuleContext)();
            const saveEditable = ({
              name,
              value
            }) => editData({
              [name]: value
            });
            const [showBackModal, setShowBackModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const title = [undefined, '', null].includes(values.title) ? texts.activities.form.title : values.title;
            const description = [undefined, '', null].includes(values.description) ? texts.activities.form.description : values.description;
            const onSave = async () => {
              await activity.set(values);
              editData({
                updated: false
              });
              store.save();
            };
            const attrs = {
              disabled: !values.updated,
              onClick: onSave
            };
            const onCloseModal = () => setShowBackModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between mb-15 separator activity-form__header"
            }, _react.default.createElement("div", {
              className: "activity-type flex-container"
            }, _react.default.createElement(_components.Link, {
              className: "back-link",
              onClick: () => {
                if (values.updated) {
                  setShowBackModal(true);
                  return;
                }
                store.editActivity = undefined;
              }
            }, _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              variant: "primary",
              className: "circle"
            }), texts.actions.back, _react.default.createElement("strong", null, texts.activities.module, ":")), _react.default.createElement("span", {
              className: "primary-text"
            }, texts.types[activity.dataType.id])), _react.default.createElement("section", {
              className: "activity-header__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: () => setShowSuggestions(true)
            }, texts.actions.refine), _react.default.createElement(_components.Button, {
              variant: "primary",
              ...attrs
            }, texts.actions.save))), _react.default.createElement("div", {
              className: "header-form__container mt-15"
            }, _react.default.createElement("section", null, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "title",
              selector: "h4",
              onSave: saveEditable
            }, title), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              selector: "p",
              onSave: saveEditable
            }, description)), _react.default.createElement(_coverImage.CoverImage, null)), showBackModal && _react.default.createElement(_cancelModal.CancelChangesModal, {
              onClose: onCloseModal,
              onConfirm: () => {
                clearData();
                store.editActivity = undefined;
                onCloseModal();
              }
            }), showSuggestions && _react.default.createElement(_refineModal.RefineModal, {
              type: activity.type,
              onClose: () => setShowSuggestions(false)
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1300175952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _header = require("./header");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _objective = require("./specs/objective");
          var _refineModal = require("./components/refine-modal");
          var _questions = require("./components/refine-modal/questions");
          var _base = require("./forms/base");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [, setUpdate] = _react.default.useState({});
            const [showRefiningModal, setShowRefiningModal] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState(activity.getData());
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const {
              type
            } = activity;
            const itemsType = store.activityTypes.get(type);
            const onClose = () => setShowRefiningModal(false);
            if (!itemsType) throw new Error(`the activity type ${type} is not supported`);
            const editData = data => {
              const finalData = {
                ...values,
                updated: true,
                ...data
              };
              console.log(99, finalData);
              setValues(finalData);
            };
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const ModalControl = showRefiningModal && showRefiningModal === 'questions' ? _questions.RefineQuestionsModal : _refineModal.RefineModal;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                activity,
                texts,
                store,
                values,
                clearData: () => {
                  activity.materials.clear();
                  setValues(activity.getData());
                },
                updated: values.updated,
                editData,
                currentTab,
                setCurrentTab,
                itemsType,
                setShowRefiningModal
              }
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_objective.ActivityObjectiveSpecs, null), _react.default.createElement(_base.ActivityFormBase, {
              type: type
            }), showRefiningModal && _react.default.createElement(ModalControl, {
              type: itemsType,
              data: activity,
              onClose: onClose
            }));
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

      /*********************************
      INTERNAL MODULE: ./materials/index
      *********************************/

      ims.set('./materials/index', {
        hash: 4112947974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityMaterial = ActivityMaterial;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          function ActivityMaterial({
            material,
            texts
          }) {
            const {
              activity,
              values,
              editData
            } = (0, _context.useModuleContext)();
            let name = typeof material === 'string' ? material : material.name;
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const onClick = async event => await activity.materials.generate(name);
            const onChange = event => {
              const target = event.currentTarget;
              editData({
                [name]: target.value
              });
            };
            if (!activity.materials[name]) {
              return _react.default.createElement("div", null, _react.default.createElement(_form.Textarea, {
                onChange: onChange,
                name: "content",
                value: values[name],
                placeholder: "Add the content of the activity"
              }), _react.default.createElement("div", {
                className: "flex-container flex-center mt-15"
              }, _react.default.createElement(_components.Button, {
                onClick: onClick,
                variant: "primary"
              }, texts.actions.generate)));
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
        hash: 2448129157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnswerForm = AnswerForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function AnswerForm({
            activity,
            toggleAnswerForm
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const onAdd = event => {
              activity.addOption(value);
              toggleAnswerForm(false);
            };
            return _react.default.createElement("div", {
              className: "answer__form"
            }, _react.default.createElement(_form.Input, {
              name: "new-answer-option",
              value: value,
              onChange: onChange
            }), _react.default.createElement(_components.Button, {
              onClick: onAdd,
              variant: "primary"
            }, texts.actions.save));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./options/answers/index
      ***************************************/

      ims.set('./options/answers/index', {
        hash: 3542766125,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionAnswers = OptionAnswers;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function OptionAnswers({
            data: activity,
            index,
            toggleAnswerForm
          }) {
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
        hash: 1095684545,
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
              itemsType
            } = (0, _context.useModuleContext)();
            const {
              type
            } = activity;
            const setError = _react.default.useState('')[1];
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([activity.specs], () => setUpdate({}));
            //if (!types.hasOwnProperty(type)) return null;
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
            if (itemsType === 'questions' || itemsType?.id === 'multiple-choice') {
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
              fieldName: itemsType
            }, _react.default.createElement(_optionsHeader.BulletPointsHeader, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 1148735468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          var _bulletPointsInput = require("@aimpact/ailearn-app/components/ui/bullet-points-input");
          var _answers = require("./answers");
          var _answerForm = require("./answer-form");
          var _context = require("../context");
          /*bundle */
          function ItemOption({
            data,
            index
          }) {
            const {
              specs
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            const {
              activity
            } = (0, _context.useModuleContext)();
            const [showAnswerForm, toggleAnswerForm] = _react.default.useState(specs.showAnswerFormIn === index);
            const text = typeof data === 'object' ? data.text : data;
            const AnswerFormVisible = specs.showAnswerFormIn === index || showAnswerForm;
            console.log(22);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_bulletPointsInput.BulletPointsInputItem, {
              data: text,
              index: index
            }), specs.answers && _react.default.createElement(_answers.OptionAnswers, {
              toggleAnswerForm: toggleAnswerForm,
              data: data,
              index: index
            }), AnswerFormVisible && _react.default.createElement(_answerForm.AnswerForm, {
              activity: activity,
              toggleAnswerForm: toggleAnswerForm
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./options/options-header
      ****************************************/

      ims.set('./options/options-header', {
        hash: 2488556518,
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
          function BulletPointsHeader({
            refineAction = true
          }) {
            const {
              setShowRefiningModal,
              itemsType,
              texts
            } = (0, _context.useModuleContext)();
            const {
              addBulletPoint
            } = (0, _bulletPointsInput.useBulletPointsInputContext)();
            return _react.default.createElement("div", {
              className: "bullet-buttons__container flex-container flex-end flex-100 mb-15"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              bordered: true,
              onClick: addBulletPoint
            }, texts.bulletPoint.add), refineAction && _react.default.createElement(_components.Button, {
              icon: _icons.ICONS.aiStars,
              variant: "primary",
              onClick: () => setShowRefiningModal('questions')
            }, texts.bulletPoint.refine));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/base-spec
      *********************************/

      ims.set('./specs/base-spec', {
        hash: 1743634122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onSave = async ({
              name,
              value
            }) => {
              editData({
                specs: {
                  ...values.specs,
                  [name]: value
                }
              });
            };
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_contentEditable.ContentEditable, {
              name: name,
              onSave: onSave
            }, value));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./specs/dynamic
      *******************************/

      ims.set('./specs/dynamic', {
        hash: 1252604982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicSpecs = DynamicSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _emptyMaterial = require("./empty-material");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DynamicSpecs({
            name
          }) {
            const {
              activity
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([activity.specs], () => {
              console.log(13, activity.specs.getData());
            }, 'specs.generated');
            return _react.default.createElement("div", null, _react.default.createElement(_emptyMaterial.EmptySpecs, {
              name: name,
              onManual: () => console.log('on manual')
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./specs/empty-material
      **************************************/

      ims.set('./specs/empty-material', {
        hash: 887750621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptySpecs({
            name,
            onManual
          }) {
            const {
              activity,
              texts
            } = (0, _context.useModuleContext)();
            const onClick = async event => {
              try {
                await activity.specs.generate(name);
              } catch (e) {
                console.error(e);
              }
            };
            const [fetching, setFetching] = _react.default.useState(activity.specs.fetching);
            const [, setData] = _react.default.useState(activity.specs.getData());
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.specs.getData());
            });
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary"
            }, texts.actions.generate)), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, texts.actions.manual)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./specs/index
      *****************************/

      ims.set('./specs/index', {
        hash: 3325377208,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
          function ActivitySpecs() {
            const {
              values,
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onSave = async ({
              name,
              value
            }) => {
              editData({
                specs: {
                  [name]: value
                }
              });
            };
            return _react.default.createElement("div", null, _react.default.createElement("h4", null, texts.specs.title), activity.specs.properties.map((property, index) => {
              const label = [undefined, '', null].includes(activity.specs[property]) ? texts.specs.objective : values.specs[property];
              return _react.default.createElement("div", {
                key: index
              }, _react.default.createElement(_contentEditable.ContentEditable, {
                name: property,
                onSave: onSave
              }, label));
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./specs/objective
      *********************************/

      ims.set('./specs/objective', {
        hash: 2511398999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveSpecs = ActivityObjectiveSpecs;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("../components/content-editable");
          function ActivityObjectiveSpecs() {
            const {
              values,
              texts,
              activity,
              editData
            } = (0, _context.useModuleContext)();
            const onSave = async ({
              name,
              value
            }) => {
              editData({
                specs: {
                  [name]: value
                }
              });
            };
            if (!activity.specs.properties.includes('objective')) return null;
            const value = values.specs.objective ?? texts.specs.objective.placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs.objective.label), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "objective",
              onSave: onSave
            }, value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlTW9kdWxlQ29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwiZ2V0RGF0YSIsInNhdmUiLCJzZXQiLCJtb2RlbCIsInNhdmVEcmFmdCIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtIiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlPcHRpb25zIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIl9tb2RhbCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93IiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiSWNvbkJ1dHRvbiIsImV4cG9ydHMiLCJfaWNvbnMyIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RXJyb3IiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiX3F1ZXN0aW9ucyIsIlJlZmluZUJhc2VNb2RhbCIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlSXRlbXMiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIkZyYWdtZW50IiwiUmVmaW5lUXVlc3Rpb25zTW9kYWxGaWVsZHMiLCJnZW5lcmF0ZSIsInJlZmluaW5nUXVlc3Rpb25zIiwiZ2V0T3B0aW9ucyIsImFuc3dlcnMiLCJxdWVzdGlvbnMiLCJfYmFzZSIsIlJlZmluZU1vZGFsIiwiUmVmaW5lUXVlc3Rpb25zTW9kYWwiLCJfcmFkaW9CdXR0b24iLCJhY3Rpdml0eVRleHRzIiwiTW9kYWxSYWRpb0J1dHRvbiIsIkNoZWNrYm94IiwiY2hlY2tlZCIsIl9nZXRPcHRpb25zIiwiY3VycmVudFZhbHVlIiwic2VsZWN0ZWQiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIlJlZmluZVRvcGljc01vZGFsIiwiX3JlYWN0U2VsZWN0IiwiU2VsZWN0QWN0aXZpdHkiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiaXRlbXMiLCJmb3JFYWNoIiwiaSIsImlkIiwiYWN0aXZpdHlJZCIsInB1c2giLCJzZWxlY3RDaGFuZ2UiLCJSZWFjdFNlbGVjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9idWxsZXRQb2ludHNJbnB1dCIsIl9pdGVtIiwiX29wdGlvbnNIZWFkZXIiLCJDb252ZXJzYXRpb25Gb3JtIiwidHlwZXMiLCJpdGVtc1R5cGUiLCJzZXRVcGRhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm9uSW5wdXRDaGFuZ2UiLCJidWxsZXRWYWx1ZXMiLCJhY3Rpb25zU3BlY3MiLCJJY29uIiwiY29udmVyc2F0aW9uIiwidG9waWNzIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJJdGVtIiwiSXRlbU9wdGlvbiIsImhhbmRsZUNoYW5nZSIsImZpZWxkTmFtZSIsIkJ1bGxldFBvaW50c0hlYWRlciIsIl9mb3JtMiIsIkFjdGl2aXR5Q29udmVyc2F0aW9uRm9ybSIsInVzZUJ1bGxldFBvaW50c0lucHV0Q29udGV4dCIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImFkZEJ1bGxldFBvaW50IiwiY291bGRCZVJlZmluZWQiLCJpbmNsdWRlcyIsImJ1bGxldFBvaW50IiwiYWRkIiwiXyIsIkFjdGl2aXR5Rm9ybUJhc2UiLCJlZGl0RGF0YSIsImZvcm1zIiwib25EZWxldGUiLCJjbGVhciIsIm1hdGVyaWFscyIsImlzVmFsaWQiLCJkZWxldGUiLCJDaGFyYWN0ZXJUYWxrTWFudWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsInRhcmdldCIsImJ0bkxhYmVsIiwidXBkYXRlZCIsIm9uQ2xpY2tDYW5jZWwiLCJvbk1vZGFsQ2FuY2VsIiwiSW5wdXQiLCJyb2xlIiwiY2hhcmFjdGVyIiwibWFudWFsIiwiX2VtcHR5TWF0ZXJpYWwiLCJfYmFzZVNwZWMiLCJDaGFyYWN0ZXJUYWxrRm9ybSIsInNldE1hbnVhbCIsIkVtcHR5U3BlY3MiLCJvbk1hbnVhbCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJfbWFudWFsIiwiX21hcmtkb3duIiwiQ29udGVudFRoZW9yeUNvbnRlbnQiLCJvcGVuTWFudWFsRm9ybSIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsImFydGljbGUiLCJNYXJrZG93biIsIkVtcHR5TWF0ZXJpYWwiLCJzZXREYXRhIiwiRW1wdHlDYXJkIiwiZW1wdHkiLCJfbWF0ZXJpYWxzIiwiQ29udGVudFRoZW9yeUZvcm0iLCJsb2ciLCJBY3Rpdml0eUZvcm1UYWJzIiwiX3RhYnMiLCJfcGFuZSIsIl9jb250ZW50Iiwic2V0TWF0ZXJpYWxzIiwidGFicyIsIml0ZW0iLCJhdHRycyIsInJlcXVpcmVkIiwiVGFiIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIk1hbnVhbERlYmF0ZUZvcm0iLCJEZWJhdGVGb3JtIiwiX2NoYXJhY3RlclRhbGsiLCJfY29udGVudFRoZW9yeSIsIl9kZWJhdGUiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiZGViYXRlIiwic3Bva2VuIiwiU3Bva2VuRm9ybSIsIk11bHRpcGxlQ2hvaWNlRm9ybSIsIm1hdGVyaWFsIiwic2V0TWF0ZXJpYWwiLCJfY29yZSIsInNldE9wdGlvbnMiLCJhZGRBbnN3ZXIiLCJzZXRBZGRBbnN3ZXIiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJnZW5lcmF0ZUFuc3dlciIsInJlc29sdmUiLCJzaG93QW5zd2VyRm9ybUluIiwiQ3JpdGVyaWFGaWVsZEl0ZW0iLCJ0b3RhbCIsImNyaXRlcmlhIiwicGFyc2VJbnQiLCJzdWJqZWN0IiwiX2NyaXRlcmlhRmllbGRJdGVtIiwiQ3JpdGVyaWFGaWVsZCIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwibGVuZ3RoIiwic2V0SXRlbXMiLCJvbkFkZCIsImVsZW1lbnRzIiwic2xpY2UiLCJjb25jYXQiLCJvbkNoYW5nZUl0ZW0iLCJfY3JpdGVyaWFGaWVsZCIsIlNwb2tlbk1hbnVhbEZvcm0iLCJ0YXNrIiwiaW5zdHJ1Y3Rpb25zIiwiX2xpc3QiLCJtYW51YWxGb3JtIiwiZWRpdENyaXRlcmlhIiwic2V0RWRpdENyaXRlcmlhIiwiTGlzdCIsImNvbnRyb2wiLCJ1c2VGb3JtIiwic2V0dGluZ3MiLCJzZXRNb2RlbCIsInByb3BlcnRpZXMiLCJmaWVsZHMiLCJpbnN0YW5jZSIsIkZvcm1Nb2RlbCIsInJlYWR5IiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwiX3JlZmluZU1vZGFsIiwiSGVhZGVyIiwiY2xlYXJEYXRhIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJmb3JtIiwib25DbG9zZU1vZGFsIiwiTGluayIsImJhY2siLCJkYXRhVHlwZSIsIl9oZWFkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfb2JqZWN0aXZlIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwic2hvd1JlZmluaW5nTW9kYWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImFjdGl2aXR5VHlwZXMiLCJnZXQiLCJFcnJvciIsImZpbmFsRGF0YSIsIlNwaW5uZXIiLCJNb2RhbENvbnRyb2wiLCJQcm92aWRlciIsIkFjdGl2aXR5T2JqZWN0aXZlU3BlY3MiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkFjdGl2aXR5TWF0ZXJpYWwiLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFZhbHVlIiwiYWRkT3B0aW9uIiwiT3B0aW9uQW5zd2VycyIsInVwZGF0ZSIsIm9wZW5Gb3JtIiwic3RvcFByb3BhZ2F0aW9uIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwibWFyayIsInNldENvcnJlY3QiLCJjb3JyZWN0QW5zd2VyIiwiQ2hpcCIsInNpemluZyIsIl9hbnN3ZXJzIiwiX2Fuc3dlckZvcm0iLCJzaG93QW5zd2VyRm9ybSIsIkFuc3dlckZvcm1WaXNpYmxlIiwicmVmaW5lQWN0aW9uIiwiRHluYW1pY1NwZWNzIiwiQWN0aXZpdHlTcGVjcyIsInByb3BlcnR5Iiwib2JqZWN0aXZlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvZXJyb3IudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9yZWZpbmUtbW9kYWwvYmFzZS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9yZWZpbmUtbW9kYWwvYmFzZS9xdWVzdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2dldC1vcHRpb25zLnRzIiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMvaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL3F1ZXN0aW9ucy9xdWVzdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9yZWZpbmUtbW9kYWwvdG9waWNzLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9jb252ZXJzYXRpb24vZm9ybS50c3giLCIvdHMvY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9jb252ZXJzYXRpb24vaXRlbS50c3giLCIvdHMvY29udmVyc2F0aW9uL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9iYXNlLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9mb3JtLnRzeCIsIi90cy9mb3Jtcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvY29udGVudC50c3giLCIvdHMvZm9ybXMvY29udGVudC10aGVvcnkvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L2luZGV4LnRzeCIsIi90cy9mb3Jtcy9jb250ZW50LXRoZW9yeS9tYW51YWwudHN4IiwiL3RzL2Zvcm1zL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy50c3giLCIvdHMvZm9ybXMvZGViYXRlL2Zvcm0udHN4IiwiL3RzL2Zvcm1zL2RlYmF0ZS9pbmRleC50c3giLCIvdHMvZm9ybXMvaW5kZXgudHN4IiwiL3RzL2Zvcm1zL21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9jcml0ZXJpYS1maWVsZC1pdGVtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vY3JpdGVyaWEtZmllbGQudHN4IiwiL3RzL2Zvcm1zL3Nwb2tlbi9mb3JtLnRzeCIsIi90cy9mb3Jtcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2Zvcm1zL3VzZS1mb3JtLnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlci1mb3JtLnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2l0ZW0udHN4IiwiL3RzL29wdGlvbnMvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL3NwZWNzL2Jhc2Utc3BlYy50c3giLCIvdHMvc3BlY3MvZHluYW1pYy50c3giLCIvdHMvc3BlY3MvZW1wdHktbWF0ZXJpYWwudHN4IiwiL3RzL3NwZWNzL2luZGV4LnRzeCIsIi90cy9zcGVjcy9vYmplY3RpdmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVUssWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csWUFBWTtZQUVuQyxNQUFNQyxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQXdCO2NBQ2pFQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQ1EsS0FBSztjQUNyQkMsV0FBVyxFQUFFVCxRQUFRLENBQUNTLFdBQVcsSUFBSSxFQUFFO2NBQ3ZDQyxLQUFLLEVBQUVWLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDQyxPQUFPO2FBQzdCLENBQUM7WUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZCWixRQUFRLENBQUNhLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDO2NBQ3BCLE1BQU1QLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2NBQzdCakIsS0FBSyxDQUFDRyxZQUFZLEdBQUdlLFNBQVM7WUFDL0IsQ0FBQztZQUVELE9BQ0MxQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBeUIsSUFBSSxRQUNKNUIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDLHVCQUF1QjtjQUFDakIsR0FBRyxFQUFFQTtZQUFHLEdBQzlDWixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDekIsUUFBQSxDQUFBNEIsZUFBZTtjQUFDZixNQUFNLEVBQUVBLE1BQU07Y0FBRUwsUUFBUSxFQUFFQSxRQUFRO2NBQUVNLFNBQVMsRUFBRUEsU0FBUztjQUFFVCxLQUFLLEVBQUVBLEtBQUssQ0FBQ3dCO1lBQVUsRUFBSSxFQUN0Ry9CLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUE4QyxHQUMvRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRVo7WUFBSSxHQUNyQ2YsS0FBSyxDQUFDNEIsT0FBTyxDQUFDYixJQUFJLENBQ1gsQ0FDRCxDQUNKLENBQ0E7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQWMsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVvQyxrQkFBa0JBLENBQUM7WUFBRUMsT0FBTztZQUFFQztVQUFTLENBQUU7WUFDeEQsT0FDQ3ZDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNTLE1BQUEsQ0FBQUksWUFBWTtjQUNaQyxJQUFJO2NBQ0p2QixLQUFLLEVBQUMsY0FBYztjQUNwQndCLElBQUksRUFBQyx3RUFBd0U7Y0FDN0VKLE9BQU8sRUFBRUEsT0FBTztjQUNoQkssUUFBUSxFQUFFTCxPQUFPO2NBQ2pCQyxTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZkEsU0FBUyxFQUFFO2NBQ1o7WUFBQyxFQUNjO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBdkMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJDLE1BQUEsR0FBQTNDLE9BQUE7VUFVTyxNQUFNNEMsZUFBZSxHQUFxQkEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLFFBQVEsRUFBRUMsT0FBTyxHQUFHLEtBQUs7WUFBRW5CLFNBQVM7WUFBRW9CLFFBQVE7WUFBRUM7VUFBTSxDQUFFLEtBQUk7WUFDckgsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLElBQUFwRCxNQUFBLENBQUFpQixRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU1vQyxVQUFVLEdBQUcsSUFBQXJELE1BQUEsQ0FBQWMsTUFBTSxFQUFpQixJQUFJLENBQUM7WUFFL0MsSUFBQWQsTUFBQSxDQUFBc0QsU0FBUyxFQUFDLE1BQUs7Y0FDZCxJQUFJLE9BQU9MLFFBQVEsS0FBSyxRQUFRLElBQUlJLFVBQVUsQ0FBQ0UsT0FBTyxFQUFFO2dCQUN2REYsVUFBVSxDQUFDRSxPQUFPLENBQUNDLFdBQVcsR0FBR1AsUUFBUTs7WUFFM0MsQ0FBQyxFQUFFLENBQUNBLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTVEsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJMLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7Y0FFMUJPLFVBQVUsQ0FBQyxNQUFLO2dCQUNmLE1BQU1DLEVBQUUsR0FBR04sVUFBVSxDQUFDRSxPQUFPO2dCQUM3QixJQUFJSSxFQUFFLEVBQUU7a0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtrQkFDcEMsTUFBTUMsR0FBRyxHQUFHQyxVQUFVLENBQUNDLFlBQVksRUFBRTtrQkFDckNMLEtBQUssQ0FBQ00sa0JBQWtCLENBQUNQLEVBQUUsQ0FBQztrQkFDNUJDLEtBQUssQ0FBQ08sUUFBUSxDQUFDLEtBQUssQ0FBQztrQkFDckJKLEdBQUcsRUFBRUssZUFBZSxFQUFFO2tCQUN0QkwsR0FBRyxFQUFFTSxRQUFRLENBQUNULEtBQUssQ0FBQztrQkFDcEJELEVBQUUsQ0FBQ1csS0FBSyxFQUFFOztjQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTWhELElBQUksR0FBRyxNQUFNaUQsS0FBSyxJQUFHO2NBQzFCLElBQUk7Z0JBQ0gsTUFBTXJCLE1BQU0sQ0FBQztrQkFBRUosSUFBSTtrQkFBRTBCLEtBQUssRUFBRW5CLFVBQVUsQ0FBQ0UsT0FBTyxFQUFFQztnQkFBVyxDQUFFLENBQUM7Z0JBQzlESixhQUFhLENBQUMsS0FBSyxDQUFDO2VBQ3BCLENBQUMsT0FBT3FCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVELE1BQU1HLEdBQUcsR0FBRyx1QkFBdUIvQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3JFLE1BQU1nRCxJQUFJLEdBQUcxQixVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDekMsTUFBTTJCLFVBQVUsR0FBRzNCLFVBQVUsR0FBRyx1QkFBdUIsR0FBRyxFQUFFO1lBQzVELE1BQU1qQixPQUFPLEdBQUdpQixVQUFVLEdBQUc3QixJQUFJLEdBQUdtQyxVQUFVO1lBQzlDLE9BQ0N6RCxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUUrQztZQUFHLEdBQ2xCNUUsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3FCLE9BQU87Y0FDUHBDLEdBQUcsRUFBRXlDLFVBQVU7Y0FDZnhCLFNBQVMsRUFBRWlELFVBQVU7Y0FDckJDLGVBQWUsRUFBRTVCLFVBQVU7Y0FDM0I2Qiw4QkFBOEIsRUFBRTtZQUFJLEVBQ25DLEVBQ0ZoRixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDaUIsTUFBQSxDQUFBcUMsVUFBVTtjQUFDSixJQUFJLEVBQUVBLElBQUk7Y0FBRTNDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3ZDO1VBRVIsQ0FBQztVQUFDZ0QsT0FBQSxDQUFBckMsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlERixJQUFBN0MsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJDLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBa0YsT0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFtRixnQkFBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVvRixpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQztVQUFXLENBQUU7WUFDM0QsTUFBTTtjQUFFN0U7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV2QyxNQUFNLENBQUMrRSxTQUFTLEVBQUVDLG9CQUFvQixDQUFDLEdBQUd6RixNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUvRCxNQUFNeUUsYUFBYSxHQUFHLE1BQU1uQixLQUFLLElBQUc7Y0FDbkNBLEtBQUssQ0FBQ29CLGNBQWMsRUFBRTtjQUN0QkosV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNN0UsUUFBUSxDQUFDa0YsZUFBZSxFQUFFO2NBQ2hDTCxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxJQUFJRCxTQUFTLEVBQUU7Y0FDZCxPQUNDdEYsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Z0JBQVFFLFNBQVMsRUFBQztjQUFTLEdBQzFCN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2lCLE1BQUEsQ0FBQXFDLFVBQVU7Z0JBQUMvQyxPQUFPLEVBQUVBLENBQUEsS0FBTXVELG9CQUFvQixDQUFDLElBQUksQ0FBQztnQkFBRVosSUFBSSxFQUFFTSxPQUFBLENBQUFVLEtBQUssQ0FBQ0M7Y0FBTyxFQUFJLEVBQzdFTixTQUFTLElBQUl4RixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeUQsZ0JBQUEsQ0FBQVcsZUFBZTtnQkFBQ0MsT0FBTyxFQUFFLElBQUk7Z0JBQUUxRCxPQUFPLEVBQUVBLENBQUEsS0FBTW1ELG9CQUFvQixDQUFDLEtBQUs7Y0FBQyxFQUFJLENBQ3BGOztZQUdYLE9BQ0N6RixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBUyxHQUMxQjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpQixNQUFBLENBQUFxQyxVQUFVO2NBQUMvQyxPQUFPLEVBQUV3RCxhQUFhO2NBQUVPLFFBQVE7Y0FBQ3BCLElBQUksRUFBRU0sT0FBQSxDQUFBVSxLQUFLLENBQUNDO1lBQU8sRUFBSSxFQUNwRTlGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpQixNQUFBLENBQUFxQyxVQUFVO2NBQUNpQixRQUFRLEVBQUUsSUFBSTtjQUFFckIsSUFBSSxFQUFDO1lBQVEsRUFBRyxDQUNwQztVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQSxJQUFBN0UsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtHLE1BQUEsR0FBQWxHLE9BQUE7VUFFTSxTQUFVbUcsYUFBYUEsQ0FBQztZQUFFN0YsS0FBSztZQUFFb0U7VUFBSyxDQUFpRDtZQUM1RjtZQUVBLE9BQU8zRSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDd0UsTUFBQSxDQUFBRSxLQUFLO2NBQUNwRSxPQUFPLEVBQUM7WUFBTyxHQUFFMUIsS0FBSyxDQUFDb0UsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQTNFLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFxRyxHQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQXNHLE1BQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBdUcsTUFBQSxHQUFBdkcsT0FBQTtVQUNBLElBQUF3RyxRQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVXlHLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFbEcsS0FBSztjQUFFRTtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRTlDLE1BQU0sQ0FBQ2tHLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUc1RyxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDUCxRQUFRLENBQUNtRyxPQUFPLENBQUM7WUFDMUQsTUFBTSxDQUFDQyxRQUFRLEVBQUV2QixXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELElBQUFzRixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDckcsUUFBUSxDQUFDLEVBQUUsTUFBTWtHLFFBQVEsQ0FBQ2xHLFFBQVEsQ0FBQ21HLE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRTFFLE9BQ0M3RyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBd0IsR0FDckNuQixRQUFRLENBQUNtRyxPQUFPLElBQUk3RyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDNkUsTUFBQSxDQUFBUSxLQUFLO2NBQUNDLEdBQUcsRUFBRU47WUFBSyxFQUFJLEVBQzFDM0csTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzhFLFFBQUEsQ0FBQXBCLGlCQUFpQjtjQUFDRSxXQUFXLEVBQUVBLFdBQVc7Y0FBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQzVFLFFBQVEsQ0FBQ21HO1lBQU8sRUFBSSxFQUM5RTdHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUMyRSxHQUFBLENBQUFZLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNuQztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBOUcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1DLE1BQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBMkMsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFxRyxHQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQWtILE1BQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVOEYsZUFBZUEsQ0FBQztZQUFFQyxPQUFPO1lBQUUxRDtVQUFPLENBQUU7WUFDbkQsTUFBTTtjQUNML0IsS0FBSyxFQUFFO2dCQUNONkcsTUFBTSxFQUFFO2tCQUFFQyxNQUFNLEVBQUU5RyxLQUFLO2tCQUFFK0csUUFBUSxFQUFFQztnQkFBYSxDQUFFO2dCQUNsRHBGLE9BQU8sRUFBRXFGLFdBQVc7Z0JBQ3BCQztjQUFlLENBQ2Y7Y0FDRC9HO1lBQVEsQ0FDUixHQUFHLElBQUFMLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTSxDQUFDcUcsUUFBUSxFQUFFdkIsV0FBVyxDQUFDLEdBQUd2RixNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMwRCxLQUFLLEVBQUUrQyxRQUFRLENBQUMsR0FBRzFILE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLEVBQUU7WUFDMUMsTUFBTSxDQUFDRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQztjQUMxQzBHLFlBQVksRUFBRSxFQUFFO2NBQ2hCQyxVQUFVLEVBQUU7YUFDWixDQUFDO1lBQ0YsTUFBTSxDQUFDQyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHOUgsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsTUFBTThHLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUV6RCxLQUFLLElBQUc7Z0JBQ2pCdkQsU0FBUyxDQUFDO2tCQUNULEdBQUdELE1BQU07a0JBQ1QsQ0FBQ3dELEtBQUssQ0FBQzBELGFBQWEsQ0FBQ25GLElBQUksR0FBR3lCLEtBQUssQ0FBQzBELGFBQWEsQ0FBQ3pEO2lCQUNoRCxDQUFDO2NBQ0gsQ0FBQztjQUNEdEMsT0FBTyxFQUFFLE1BQU1xQyxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0h1RCxjQUFjLENBQUMsS0FBSyxDQUFDO2tCQUNyQnZDLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ2pCLE1BQU03RSxRQUFRLENBQUNrRixlQUFlLENBQUM3RSxNQUFNLENBQUM0RyxZQUFZLENBQUM7a0JBQ25EckYsT0FBTyxFQUFFO2lCQUNULENBQUMsT0FBT21DLENBQUMsRUFBRTtrQkFDWGlELFFBQVEsQ0FBQ2pELENBQUMsQ0FBQ3lELE9BQU8sQ0FBQztpQkFDbkIsU0FBUztrQkFDVDNDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O2NBRXBCO2FBQ0E7WUFFRCxNQUFNNEMsYUFBYSxHQUFHbkMsT0FBTyxHQUFHLE1BQU04QixjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUdDLE1BQU0sQ0FBQzdGLE9BQU87WUFFM0UsT0FDQ2xDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNTLE1BQUEsQ0FBQWdHLEtBQUs7Y0FBQzNGLElBQUk7Y0FBQ1osU0FBUyxFQUFDLGNBQWM7Y0FBQ1MsT0FBTyxFQUFFQTtZQUFPLEdBQ3BEdEMsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsaUJBQ0MzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxhQUFLcEIsS0FBSyxDQUFDVyxLQUFLLENBQU0sRUFDdEJsQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxlQUFPcEIsS0FBSyxDQUFDOEgsUUFBUSxDQUFRLENBQ3JCLEVBQ1RySSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBeUIsSUFBSSxRQUNKNUIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3dGLE1BQUEsQ0FBQWYsYUFBYTtjQUFDN0YsS0FBSyxFQUFFQSxLQUFLO2NBQUVvRSxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3QzNFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUFtSSxRQUFRO2NBQ1J4RixJQUFJLEVBQUMsY0FBYztjQUNuQjBCLEtBQUssRUFBRXpELE1BQU0sQ0FBQzRHLFlBQVk7Y0FDMUJLLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCTyxLQUFLLEVBQUVoQixhQUFhLENBQUNnQixLQUFLO2NBQzFCQyxXQUFXLEVBQUVqQixhQUFhLENBQUNpQjtZQUFXLEVBQ3JDLENBQ0ksRUFFUHhJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRWlHLGFBQWE7Y0FBRXRELElBQUksRUFBRWpDLE1BQUEsQ0FBQWlELEtBQUssQ0FBQ0M7WUFBTyxHQUNuRTBCLFdBQVcsQ0FBQ0osTUFBTSxDQUNYLENBQ0QsRUFDUlMsV0FBVyxJQUNYN0gsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ1MsTUFBQSxDQUFBSSxZQUFZO2NBQ1pELFNBQVMsRUFBRXdGLE1BQU0sQ0FBQzdGLE9BQU87Y0FDekJTLFFBQVEsRUFBRUEsQ0FBQSxLQUFNbUYsY0FBYyxDQUFDLEtBQUssQ0FBQztjQUNyQzNGLE9BQU8sRUFBRTtnQkFDUjZELE9BQU8sRUFBRTtrQkFDUi9ELE9BQU8sRUFBRSxTQUFTO2tCQUNsQnNHLEtBQUssRUFBRWYsV0FBVyxDQUFDeEI7aUJBQ25CO2dCQUNEeUMsTUFBTSxFQUFFO2tCQUFFRixLQUFLLEVBQUVmLFdBQVcsQ0FBQ2lCLE1BQU07a0JBQUV4RyxPQUFPLEVBQUUsU0FBUztrQkFBRWdFLFFBQVEsRUFBRTtnQkFBSTtlQUN2RTtjQUNEeEQsSUFBSTtjQUNKdkIsS0FBSyxFQUFFWCxLQUFLLENBQUN5RixPQUFPLENBQUM5RSxLQUFLO2NBQzFCd0IsSUFBSSxFQUFFbkMsS0FBSyxDQUFDeUYsT0FBTyxDQUFDcUM7WUFBUSxFQUU3QixFQUVEckksTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzJFLEdBQUEsQ0FBQVksZ0JBQWdCO2NBQUNKLFFBQVEsRUFBRUE7WUFBUSxHQUNuQzlHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUMyRSxHQUFBLENBQUFvQyxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRW5CO1lBQWUsRUFBSSxDQUN2QyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUZBLElBQUF6SCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBNEksVUFBQSxHQUFBNUksT0FBQTtVQUVBLElBQUFxRyxHQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVTZJLGVBQWVBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxJQUFJO1lBQUUxRztVQUFPLENBQUU7WUFDdEQsTUFBTTtjQUFFL0IsS0FBSztjQUFFRztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzlDLE1BQU0sQ0FBQ3FHLFFBQVEsRUFBRXZCLFdBQVcsQ0FBQyxHQUFHdkYsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQztjQUMxQzBHLFlBQVksRUFBRSxFQUFFO2NBQ2hCc0IsV0FBVyxFQUFFLEtBQUs7Y0FDbEJEO2FBQ0EsQ0FBQztZQUVGLE1BQU1qQixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFekQsS0FBSyxJQUFHO2dCQUNqQnZELFNBQVMsQ0FBQztrQkFDVCxHQUFHRCxNQUFNO2tCQUNULENBQUN3RCxLQUFLLENBQUMwRCxhQUFhLENBQUNuRixJQUFJLEdBQUd5QixLQUFLLENBQUMwRCxhQUFhLENBQUN6RDtpQkFDaEQsQ0FBQztjQUNILENBQUM7Y0FDRHRDLE9BQU8sRUFBRSxNQUFNcUMsS0FBSyxJQUFHO2dCQUN0QmdCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU03RSxRQUFRLENBQUN3SSxpQkFBaUIsQ0FBQ25JLE1BQU0sQ0FBQzRHLFlBQVksQ0FBQztnQkFDckRyRixPQUFPLEVBQUU7Z0JBRVRvQixVQUFVLENBQUMsTUFBSztrQkFDZjZCLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVDthQUNBO1lBRUQsT0FDQ3ZGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUF5QixJQUFJLFFBQ0o1QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDa0gsVUFBQSxDQUFBTywwQkFBMEI7Y0FBQ3JCLE1BQU0sRUFBRUEsTUFBTTtjQUFFaEgsTUFBTSxFQUFFQTtZQUFNLEVBQUksQ0FDeEQsRUFFUGYsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFNkYsTUFBTSxDQUFDN0Y7WUFBTyxHQUMvQzNCLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQ2tILFFBQVEsQ0FDZixDQUNELEVBQ1RySixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDMkUsR0FBQSxDQUFBWSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DOUcsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzJFLEdBQUEsQ0FBQW9DLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFckksS0FBSyxDQUFDK0k7WUFBaUIsRUFBSSxDQUMvQyxDQUNqQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBdEosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ00sU0FBVW1KLDBCQUEwQkEsQ0FBQztZQUFFckksTUFBTTtZQUFFZ0g7VUFBTSxDQUFFO1lBQzVELE1BQU07Y0FDTHhILEtBQUssRUFBRTtnQkFBRTZHLE1BQU0sRUFBRTdHO2NBQUs7WUFBRSxDQUN4QixHQUFHLElBQUFGLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDdEIsT0FDQ1QsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsaUJBQ0MzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxhQUFLcEIsS0FBSyxDQUFDVyxLQUFLLENBQU0sRUFDdEJsQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxlQUFPcEIsS0FBSyxDQUFDWSxXQUFXLENBQVEsQ0FDeEIsRUFFVG5CLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUFtSSxRQUFRO2NBQ1JDLEtBQUssRUFBRWhJLEtBQUssQ0FBQytHLFFBQVEsQ0FBQ2lCLEtBQUs7Y0FDM0J6RixJQUFJLEVBQUMsY0FBYztjQUNuQjBCLEtBQUssRUFBRXpELE1BQU0sQ0FBQzRHLFlBQVk7Y0FDMUJLLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCUSxXQUFXLEVBQUVqSSxLQUFLLENBQUMrRyxRQUFRLENBQUNrQjtZQUFXLEVBQ3RDLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Qk0sU0FBVWUsVUFBVUEsQ0FBQ2hKLEtBQUs7WUFDL0IsT0FBTztjQUNOeUksSUFBSSxFQUFFLENBQ0wsQ0FBQyxTQUFTLEVBQUV6SSxLQUFLLENBQUNpSixPQUFPLENBQUMsRUFDMUIsQ0FBQyxXQUFXLEVBQUVqSixLQUFLLENBQUNrSixTQUFTLENBQUM7YUFFL0I7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBekosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1DLE1BQUEsR0FBQW5DLE9BQUE7VUFNQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBeUosS0FBQSxHQUFBekosT0FBQTtVQUVNLFNBQVUwSixXQUFXQSxDQUFDO1lBQUVaLElBQUk7WUFBRUMsSUFBSTtZQUFFMUc7VUFBTyxDQUFFO1lBQ2xELE1BQU07Y0FBRS9CLEtBQUs7Y0FBRUc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNxRyxRQUFRLEVBQUV2QixXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0YsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUM7Y0FDMUMwRyxZQUFZLEVBQUUsRUFBRTtjQUNoQnNCLFdBQVcsRUFBRSxLQUFLO2NBQ2xCRDthQUNBLENBQUM7WUFFRixPQUNDaEosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ1MsTUFBQSxDQUFBZ0csS0FBSztjQUFDM0YsSUFBSTtjQUFDWixTQUFTLEVBQUMsY0FBYztjQUFDUyxPQUFPLEVBQUVBO1lBQU8sR0FDcER0QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDK0gsS0FBQSxDQUFBWixlQUFlO2NBQUMvSCxNQUFNLEVBQUVBO1lBQU0sRUFBSSxDQUM1QjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBZixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbUMsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUE0SSxVQUFBLEdBQUE1SSxPQUFBO1VBRUEsSUFBQXFHLEdBQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVMkosb0JBQW9CQSxDQUFDO1lBQUViLElBQUk7WUFBRUMsSUFBSTtZQUFFMUc7VUFBTyxDQUFFO1lBQzNELE1BQU07Y0FBRS9CLEtBQUs7Y0FBRUc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNLENBQUNxRyxRQUFRLEVBQUV2QixXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0YsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUM7Y0FDMUMwRyxZQUFZLEVBQUUsRUFBRTtjQUNoQnNCLFdBQVcsRUFBRSxLQUFLO2NBQ2xCRDthQUNBLENBQUM7WUFFRixNQUFNakIsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRXpELEtBQUssSUFBRztnQkFDakJ2RCxTQUFTLENBQUM7a0JBQ1QsR0FBR0QsTUFBTTtrQkFDVCxDQUFDd0QsS0FBSyxDQUFDMEQsYUFBYSxDQUFDbkYsSUFBSSxHQUFHeUIsS0FBSyxDQUFDMEQsYUFBYSxDQUFDekQ7aUJBQ2hELENBQUM7Y0FDSCxDQUFDO2NBQ0R0QyxPQUFPLEVBQUUsTUFBTXFDLEtBQUssSUFBRztnQkFDdEJnQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUVqQixNQUFNN0UsUUFBUSxDQUFDd0ksaUJBQWlCLENBQUNuSSxNQUFNLENBQUM0RyxZQUFZLENBQUM7Z0JBQ3JEckYsT0FBTyxFQUFFO2dCQUVUb0IsVUFBVSxDQUFDLE1BQUs7a0JBQ2Y2QixXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1Q7YUFDQTtZQUVELE9BQ0N2RixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDUyxNQUFBLENBQUFnRyxLQUFLO2NBQUMzRixJQUFJO2NBQUNaLFNBQVMsRUFBQyxjQUFjO2NBQUNTLE9BQU8sRUFBRUE7WUFBTyxHQUNwRHRDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUF5QixJQUFJLFFBQ0o1QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDa0gsVUFBQSxDQUFBTywwQkFBMEI7Y0FBQ3JCLE1BQU0sRUFBRUEsTUFBTTtjQUFFaEgsTUFBTSxFQUFFQTtZQUFNLEVBQUksQ0FDeEQsRUFFUGYsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQStCLEdBQ2hEN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFNkYsTUFBTSxDQUFDN0Y7WUFBTyxHQUMvQzNCLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQ2tILFFBQVEsQ0FDZixDQUNELEVBQ1RySixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDMkUsR0FBQSxDQUFBWSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DOUcsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzJFLEdBQUEsQ0FBQW9DLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFckksS0FBSyxDQUFDK0k7WUFBaUIsRUFBSSxDQUMvQyxDQUNaO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUF0SixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNEosWUFBQSxHQUFBNUosT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVVtSiwwQkFBMEJBLENBQUM7WUFBRXJJLE1BQU07WUFBRWdIO1VBQU0sQ0FBRTtZQUM1RCxNQUFNO2NBQ0x4SCxLQUFLLEVBQUU7Z0JBQUV3QixVQUFVLEVBQUUrSDtjQUFhLENBQUU7Y0FDcEN2SixLQUFLLEVBQUU7Z0JBQUU2RyxNQUFNLEVBQUU3RztjQUFLO1lBQUUsQ0FDeEIsR0FBRyxJQUFBRixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3RCLE9BQ0NULE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGlCQUNDM0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsYUFBS3BCLEtBQUssQ0FBQ1csS0FBSyxDQUFNLEVBQ3RCbEIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsZUFBT3BCLEtBQUssQ0FBQ1ksV0FBVyxDQUFRLENBQ3hCLEVBRVRuQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBbUksUUFBUTtjQUNSQyxLQUFLLEVBQUVoSSxLQUFLLENBQUMrRyxRQUFRLENBQUNpQixLQUFLO2NBQzNCekYsSUFBSSxFQUFDLGNBQWM7Y0FDbkIwQixLQUFLLEVBQUV6RCxNQUFNLENBQUM0RyxZQUFZO2NBQzFCSyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlEsV0FBVyxFQUFFakksS0FBSyxDQUFDK0csUUFBUSxDQUFDa0I7WUFBVyxFQUN0QyxFQUNGeEksTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2tJLFlBQUEsQ0FBQUUsZ0JBQWdCO2NBQ2hCakgsSUFBSSxFQUFDLE1BQU07Y0FDWDBCLEtBQUssRUFBRXpELE1BQU0sQ0FBQ2lJLElBQUk7Y0FDbEJULEtBQUssRUFBRXVCLGFBQWEsQ0FBQzFDLE1BQU0sQ0FBQzRCLElBQUksQ0FBQ1QsS0FBSztjQUN0Q1AsUUFBUSxFQUFFRCxNQUFNLENBQUNDO1lBQVEsRUFDeEIsRUFDRGpILE1BQU0sQ0FBQ2lJLElBQUksS0FBSyxXQUFXLElBQzNCaEosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW9ELEdBQ2xFN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQTZKLFFBQVE7Y0FDUmhDLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCaUMsT0FBTyxFQUFFbEosTUFBTSxDQUFDa0ksV0FBVztjQUMzQm5HLElBQUksRUFBQyxhQUFhO2NBQ2xCeUYsS0FBSyxFQUFDO1lBQXNCLEVBQzNCLENBRUgsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBdkksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQWlLLFdBQUEsR0FBQWpLLE9BQUE7VUFFTSxTQUFVOEosZ0JBQWdCQSxDQUFDO1lBQUV2RixLQUFLLEVBQUUyRixZQUFZO1lBQUVySCxJQUFJO1lBQUVrRixRQUFRO1lBQUVPLEtBQUs7WUFBRTZCLFFBQVEsR0FBRztVQUFDLENBQUU7WUFDNUYsTUFBTTtjQUFFN0osS0FBSztjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRTNDLE1BQU15RixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFMUYsS0FBSyxDQUFDc0csUUFBUSxJQUFJdEcsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDc0Y7WUFBUSxDQUFFO1lBQ3JFLE1BQU1pQyxJQUFJLEdBQUcsSUFBQW1CLFdBQUEsQ0FBQVgsVUFBVSxFQUFDaEosS0FBSyxFQUFFd0IsVUFBVSxDQUFDcUYsTUFBTSxDQUFDNEIsSUFBSSxDQUFDO1lBRXRELE1BQU1xQixNQUFNLEdBQUd0QixJQUFJLENBQUNqRyxJQUFJLENBQUMsQ0FBQ3dILEdBQUcsQ0FBQyxDQUFDLENBQUM5RixLQUFLLEVBQUUrRCxLQUFLLENBQUMsRUFBRWdDLEtBQUssS0FBSTtjQUN2RCxJQUFJL0YsS0FBSyxLQUFLMkYsWUFBWSxFQUFFQyxRQUFRLEdBQUdHLEtBQUs7Y0FDNUMsT0FDQ3ZLLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2dCQUFDYyxJQUFJLEVBQUVBLElBQUk7Z0JBQUEsR0FBTW9ELFFBQVE7Z0JBQUEsY0FBY3FFLEtBQUs7Z0JBQUVySSxPQUFPLEVBQUU4RixRQUFRO2dCQUFFd0MsR0FBRyxFQUFFRCxLQUFLO2dCQUFFL0YsS0FBSyxFQUFFQTtjQUFLLEdBQzlGK0QsS0FBSyxDQUNFO1lBRVgsQ0FBQyxDQUFDO1lBRUYsT0FDQ3ZJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2QzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQU84SSxPQUFPLEVBQUUzSDtZQUFJLEdBQUd5RixLQUFLLENBQVMsRUFDckN2SSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBc0ssV0FBVztjQUFDTixRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNbEU7WUFBUSxHQUMzQ21FLE1BQU0sQ0FDTSxDQUNUO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFySyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVMEssaUJBQWlCQSxDQUFDO1lBQUUzSixTQUFTO1lBQUVELE1BQU07WUFBRWdIO1VBQU0sQ0FBRTtZQUM5RCxPQUNDL0gsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsaUJBQ0MzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSx1Q0FBZ0MsRUFDaEMzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxnRUFBMkQsQ0FDbkQsRUFFVDNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUFtSSxRQUFRO2NBQ1JDLEtBQUssRUFBQyxlQUFlO2NBQ3JCekYsSUFBSSxFQUFDLGNBQWM7Y0FDbkIwQixLQUFLLEVBQUV6RCxNQUFNLENBQUM0RyxZQUFZO2NBQzFCSyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QlEsV0FBVyxFQUFDO1lBQXdELEVBQ25FLEVBQ0Z4SSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBb0QsR0FDbEU3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBNkosUUFBUTtjQUNSaEMsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJpQyxPQUFPLEVBQUVsSixNQUFNLENBQUNrSSxXQUFXO2NBQzNCbkcsSUFBSSxFQUFDLGFBQWE7Y0FDbEJ5RixLQUFLLEVBQUM7WUFBc0IsRUFDM0IsQ0FDRyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUF2SSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkssWUFBQSxHQUFBM0ssT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVU0SyxjQUFjQSxDQUFDO1lBQUU5SixNQUFNO1lBQUVDO1VBQVMsQ0FBRTtZQUNuRCxNQUFNO2NBQUVOLFFBQVE7Y0FBRUY7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM5QyxJQUFJcUssWUFBWSxHQUFHO2NBQUV0RyxLQUFLLEVBQUUsRUFBRTtjQUFFK0QsS0FBSyxFQUFFO1lBQVEsQ0FBRTtZQUNqRCxNQUFNd0MsT0FBTyxHQUFHLEVBQUU7WUFDbEJ2SyxLQUFLLENBQUNnQixLQUFLLENBQUNPLFVBQVUsQ0FBQ2lKLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxDQUFDLElBQUc7Y0FDeEMsSUFBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUt6SyxRQUFRLENBQUN5SyxFQUFFLEVBQUU7Y0FDMUIsSUFBSUQsQ0FBQyxDQUFDQyxFQUFFLEtBQUtwSyxNQUFNLENBQUNLLEtBQUssQ0FBQ2dLLFVBQVUsRUFBRU4sWUFBWSxHQUFHO2dCQUFFdEcsS0FBSyxFQUFFMEcsQ0FBQyxDQUFDQyxFQUFFO2dCQUFFNUMsS0FBSyxFQUFFMkMsQ0FBQyxDQUFDaEs7Y0FBSyxDQUFFO2NBQ3BGNkosT0FBTyxDQUFDTSxJQUFJLENBQUM7Z0JBQUU3RyxLQUFLLEVBQUUwRyxDQUFDLENBQUNDLEVBQUU7Z0JBQUU1QyxLQUFLLEVBQUUyQyxDQUFDLENBQUNoSztjQUFLLENBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRixNQUFNb0ssWUFBWSxHQUFHdkMsSUFBSSxJQUFHO2NBQzNCL0gsU0FBUyxDQUFDRCxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUssS0FBSyxFQUFFO2tCQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssS0FBSztrQkFBRWdLLFVBQVUsRUFBRXJDLElBQUksQ0FBQ3ZFO2dCQUFLO2NBQUUsQ0FBRSxDQUFDLENBQUM7WUFDekYsQ0FBQztZQUVELE9BQ0N4RSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFPOEksT0FBTyxFQUFDLEVBQUU7Y0FBQzVJLFNBQVMsRUFBQztZQUFXLEcsc0NBRXRDN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2lKLFlBQUEsQ0FBQVcsV0FBVztjQUFDdkQsUUFBUSxFQUFFc0QsWUFBWTtjQUFFUixZQUFZLEVBQUVBLFlBQVk7Y0FBRUMsT0FBTyxFQUFFLENBQUNELFlBQVksRUFBRSxHQUFHQyxPQUFPO1lBQUMsRUFBSSxDQUNqRztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBL0ssTUFBQSxHQUFBQyxPQUFBO1VBa0JPLE1BQU11TCxhQUFhLEdBQUF0RyxPQUFBLENBQUFzRyxhQUFBLEdBQUd4TCxNQUFBLENBQUFhLE9BQUssQ0FBQzRLLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU1oTCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNVCxNQUFBLENBQUFhLE9BQUssQ0FBQzZLLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUN0RyxPQUFBLENBQUF6RSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQnRFLElBQUFULE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwTCxrQkFBQSxHQUFBMUwsT0FBQTtVQUVBLElBQUEyTCxLQUFBLEdBQUEzTCxPQUFBO1VBRUEsSUFBQTRMLGNBQUEsR0FBQTVMLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUEyQyxNQUFBLEdBQUEzQyxPQUFBO1VBSU0sU0FBVTZMLGdCQUFnQkEsQ0FBQztZQUFFcEwsUUFBUTtZQUFFSyxNQUFNO1lBQUVDO1VBQVMsQ0FBRTtZQUMvRCxNQUFNO2NBQUUrSyxLQUFLO2NBQUVDLFNBQVM7Y0FBRXpMLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM3RHVELFVBQVUsQ0FBQ3hELEtBQUssR0FBR0EsS0FBSztZQUN4QixNQUFNO2NBQUV3STtZQUFJLENBQUUsR0FBR3RJLFFBQVE7WUFDekIsTUFBTWdILFFBQVEsR0FBRzFILE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sR0FBR2dMLFNBQVMsQ0FBQyxHQUFHak0sTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDeEMsSUFBQXNGLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNyRyxRQUFRLENBQUNVLEtBQUssQ0FBQyxFQUFFLE1BQU02SyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDRixLQUFLLENBQUNHLGNBQWMsQ0FBQ2xELElBQUksQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUU1QyxNQUFNbUQsYUFBYSxHQUFHNUgsS0FBSyxJQUFHO2NBQzdCLE1BQU07Z0JBQUV6QixJQUFJO2dCQUFFMEI7Y0FBSyxDQUFFLEdBQUdELEtBQUssQ0FBQzBELGFBQWE7Y0FDM0NqSCxTQUFTLENBQUNELE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFSyxLQUFLLEVBQUU7a0JBQUUsR0FBR0wsTUFBTSxDQUFDSyxLQUFLO2tCQUFFLENBQUMwQixJQUFJLEdBQUcwQjtnQkFBSztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQ2hGLENBQUM7WUFFRCxJQUFJNEgsWUFBWSxHQUFHckwsTUFBTSxDQUFDSyxLQUFLLENBQUM0SyxTQUFTLENBQUM7WUFDMUMsTUFBTUssWUFBWSxHQUF3QixFQUFFO1lBRTVDLE9BQ0NyTSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFBM0IsTUFBQSxDQUFBYSxPQUFBLENBQUFzSSxRQUFBLFFBQ0NuSixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUN6QjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpQixNQUFBLENBQUEwSixJQUFJO2NBQUN6SCxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ25CdEUsS0FBSyxDQUFDZ00sWUFBWSxDQUFDcEwsV0FBVyxDQUMxQixFQUVObkIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQW1JLFFBQVE7Y0FDUjlELEtBQUssRUFBRXpELE1BQU0sQ0FBQ0ssS0FBSyxDQUFDRCxXQUFXLElBQUksRUFBRTtjQUNyQ29ILEtBQUssRUFBQyxhQUFhO2NBQ25CekYsSUFBSSxFQUFDLGFBQWE7Y0FDbEJrRixRQUFRLEVBQUVtRTtZQUFhLEVBQ3RCLEVBQ0ZuTSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBVyxHQUN6QjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpQixNQUFBLENBQUEwSixJQUFJO2NBQUN6SCxJQUFJLEVBQUMsTUFBTTtjQUFDaEQsU0FBUyxFQUFDO1lBQVEsRUFBRyxFQUN0Q3RCLEtBQUssQ0FBQ2dNLFlBQVksQ0FBQ0MsTUFBTSxDQUNyQixFQUNOeE0sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2dLLGtCQUFBLENBQUFjLGlCQUFpQjtjQUNqQnRLLE9BQU8sRUFBRWtLLFlBQVk7Y0FDckJ0TCxNQUFNLEVBQUVxTCxZQUFZO2NBQ3BCTSxJQUFJLEVBQUVkLEtBQUEsQ0FBQWUsVUFBVTtjQUNoQnZMLEtBQUssRUFBRTtnQkFBRTRILElBQUksRUFBRWdEO2NBQVMsQ0FBRTtjQUMxQlksWUFBWSxFQUFFVCxhQUFhO2NBQzNCVSxTQUFTLEVBQUViO1lBQVMsR0FFcEJoTSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDa0ssY0FBQSxDQUFBaUIsa0JBQWtCLE9BQUcsQ0FDSCxDQUNsQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBOU0sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQThNLE1BQUEsR0FBQTlNLE9BQUE7VUFFTSxTQUFVK00sd0JBQXdCQSxDQUFBO1lBQ3ZDLE1BQU07Y0FBRXpNLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csWUFBWTtZQUVuQyxNQUFNQyxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQXdCO2NBQ2pFQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQ1EsS0FBSztjQUNyQkMsV0FBVyxFQUFFVCxRQUFRLENBQUNTLFdBQVcsSUFBSSxFQUFFO2NBQ3ZDQyxLQUFLLEVBQUVWLFFBQVEsQ0FBQ1U7YUFDaEIsQ0FBQztZQUNGLE1BQU1FLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkJaLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDUixNQUFNLENBQUM7Y0FDcEIsTUFBTVAsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDQyxTQUFTLEVBQUU7Y0FDN0JqQixLQUFLLENBQUNHLFlBQVksR0FBR2UsU0FBUztZQUMvQixDQUFDO1lBRUQsT0FDQzFCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUF5QixJQUFJLFFBQ0o1QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUMsdUJBQXVCO2NBQUNqQixHQUFHLEVBQUVBO1lBQUcsR0FDOUNaLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNvTCxNQUFBLENBQUFqQixnQkFBZ0I7Y0FBQy9LLE1BQU0sRUFBRUEsTUFBTTtjQUFFTCxRQUFRLEVBQUVBLFFBQVE7Y0FBRU0sU0FBUyxFQUFFQSxTQUFTO2NBQUVULEtBQUssRUFBRUEsS0FBSyxDQUFDd0I7WUFBVSxFQUFJLEVBQ3ZHL0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQThDLEdBQy9EN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFWjtZQUFJLEdBQ3JDZixLQUFLLENBQUM0QixPQUFPLENBQUNiLElBQUksQ0FDWCxDQUNELENBQ0osQ0FDQTtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBdEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBMLGtCQUFBLEdBQUExTCxPQUFBO1VBS087VUFBVyxTQUFVME0sVUFBVUEsQ0FBQztZQUFFNUQsSUFBSTtZQUFFd0I7VUFBSyxDQUFFO1lBQ3JELE1BQU07Y0FBRW5KO1lBQUssQ0FBRSxHQUFHLElBQUF1SyxrQkFBQSxDQUFBc0IsMkJBQTJCLEdBQUU7WUFDL0MsTUFBTXZLLElBQUksR0FBR3RCLEtBQUssQ0FBQzRILElBQUksS0FBSyxXQUFXLEdBQUdELElBQUksQ0FBQ3JHLElBQUksR0FBR3FHLElBQUk7WUFFMUQsT0FDQy9JLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNnSyxrQkFBQSxDQUFBdUIscUJBQXFCO2NBQUNuRSxJQUFJLEVBQUVyRyxJQUFJO2NBQUU2SCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUNqRDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUF2SyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEwsa0JBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBMkMsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVU2TSxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFckgsb0JBQW9CO2NBQUV1RyxTQUFTO2NBQUV6TDtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3JFLE1BQU07Y0FBRTBNO1lBQWMsQ0FBRSxHQUFHLElBQUF4QixrQkFBQSxDQUFBc0IsMkJBQTJCLEdBQUU7WUFFeEQsTUFBTUcsY0FBYyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUNyQixTQUFTLENBQUM7WUFDbEUsT0FDQ2hNLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrRSxHQUNoRjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUM2QyxJQUFJLEVBQUMsS0FBSztjQUFDNUMsT0FBTyxFQUFDLFNBQVM7Y0FBQ2dFLFFBQVE7Y0FBQy9ELE9BQU8sRUFBRWlMO1lBQWMsR0FDbkU1TSxLQUFLLENBQUMrTSxXQUFXLENBQUNDLEdBQUcsQ0FDZCxFQUNSSCxjQUFjLElBQ2RwTixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDNkMsSUFBSSxFQUFFakMsTUFBQSxDQUFBaUQsS0FBSyxDQUFDQyxPQUFPO2NBQUU3RCxPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTXVELG9CQUFvQixDQUFDLElBQUk7WUFBQyxHQUN0RmxGLEtBQUssQ0FBQytNLFdBQVcsQ0FBQ2xHLE1BQU0sQ0FFMUIsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXVOLENBQUEsR0FBQXZOLE9BQUE7VUFFTSxTQUFVd04sZ0JBQWdCQSxDQUFDO1lBQUV6RTtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFdEksUUFBUTtjQUFFZ04sUUFBUTtjQUFFbk47WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV4RCxJQUFJLENBQUMrTSxDQUFBLENBQUFHLEtBQUssQ0FBQzNFLElBQUksQ0FBQyxFQUFFdEUsT0FBTyxDQUFDQyxLQUFLLENBQUMsa0JBQWtCLEVBQUVxRSxJQUFJLEVBQUV3RSxDQUFBLENBQUFHLEtBQUssQ0FBQztZQUNoRSxNQUFNL0wsSUFBSSxHQUFHNEwsQ0FBQSxDQUFBRyxLQUFLLENBQUMzRSxJQUFJLENBQUM7WUFDeEIsTUFBTTRFLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0JsTixRQUFRLENBQUNVLEtBQUssQ0FBQ3lNLEtBQUssRUFBRTtjQUN0Qm5OLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFO2NBQzFCSCxRQUFRLENBQUM7Z0JBQUV0TSxLQUFLLEVBQUVWLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDQyxPQUFPLEVBQUU7Z0JBQUV5TSxTQUFTLEVBQUVwTixRQUFRLENBQUNvTixTQUFTLENBQUN6TSxPQUFPO2NBQUUsQ0FBRSxDQUFDO1lBQ3ZGLENBQUM7WUFFRCxPQUNDckIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQW1DLEdBQ3BEN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsYUFBS3BCLEtBQUssQ0FBQ2EsS0FBSyxDQUFDRixLQUFLLENBQU0sRUFDNUJsQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDa0UsUUFBUSxFQUFFLENBQUN4RixRQUFRLENBQUNVLEtBQUssQ0FBQzJNLE9BQU87Y0FBRTlMLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO2NBQUMvRCxPQUFPLEVBQUUwTDtZQUFRLEdBQ3JGck4sS0FBSyxDQUFDNEIsT0FBTyxDQUFDNkwsTUFBTSxDQUNiLENBQ0osQ0FDRSxFQUNUaE8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ0MsSUFBSSxPQUFHLENBQ047VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQTVCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFtQyxNQUFBLEdBQUFuQyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBRU0sU0FBVWdPLHVCQUF1QkEsQ0FBQztZQUFFdEw7VUFBUSxDQUFFO1lBQ25ELE1BQU07Y0FBRXBDLEtBQUs7Y0FBRUc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNO2NBQUVNLE1BQU07Y0FBRTJNO1lBQVEsQ0FBRSxHQUFHLElBQUFyTixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ3lOLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR25PLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0rRyxRQUFRLEdBQUd6RCxLQUFLLElBQUc7Y0FDeEIsTUFBTTZKLE1BQU0sR0FBRzdKLEtBQUssQ0FBQzBELGFBQWE7Y0FDbEMsTUFBTTdHLEtBQUssR0FBRztnQkFBRSxHQUFHTCxNQUFNLENBQUNLO2NBQUssQ0FBRTtjQUNqQ3NNLFFBQVEsQ0FBQztnQkFBRXRNLEtBQUssRUFBRTtrQkFBRSxHQUFHQSxLQUFLO2tCQUFFLENBQUNnTixNQUFNLENBQUN0TCxJQUFJLEdBQUdzTCxNQUFNLENBQUM1SjtnQkFBSztjQUFFLENBQUUsQ0FBQztZQUMvRCxDQUFDO1lBQ0QsTUFBTTZKLFFBQVEsR0FBR3ROLE1BQU0sQ0FBQ3VOLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtZQUNuRCxNQUFNQyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJeE4sTUFBTSxDQUFDdU4sT0FBTyxFQUFFO2dCQUNuQkgsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRHhMLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFFRCxNQUFNSixTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QjRMLGtCQUFrQixDQUFDLEtBQUssQ0FBQztjQUN6QnhMLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNNkwsYUFBYSxHQUFHQSxDQUFBLEtBQU1MLGtCQUFrQixDQUFDLEtBQUssQ0FBQztZQUNyRCxPQUNDbk8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQXlCLElBQUksUUFDSjVCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUFzTyxLQUFLO2NBQ0x6RyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJPLEtBQUssRUFBRWhJLEtBQUssQ0FBQ2EsS0FBSyxDQUFDc04sSUFBSSxDQUFDbkcsS0FBSztjQUM3QkMsV0FBVyxFQUFFakksS0FBSyxDQUFDYSxLQUFLLENBQUNzTixJQUFJLENBQUNsRyxXQUFXO2NBQ3pDMUYsSUFBSSxFQUFDO1lBQU0sRUFDVixFQUNGOUMsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQXNPLEtBQUs7Y0FDTHpHLFFBQVEsRUFBRUEsUUFBUTtjQUNsQk8sS0FBSyxFQUFFaEksS0FBSyxDQUFDYSxLQUFLLENBQUN1TixTQUFTLENBQUNwRyxLQUFLO2NBQ2xDQyxXQUFXLEVBQUVqSSxLQUFLLENBQUNhLEtBQUssQ0FBQ3VOLFNBQVMsQ0FBQ25HLFdBQVc7Y0FDOUMxRixJQUFJLEVBQUM7WUFBVyxFQUNmLEVBQ0Y5QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBK0IsR0FDaEQ3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDRSxPQUFPLEVBQUVxTSxhQUFhO2NBQUV0TSxPQUFPLEVBQUMsU0FBUztjQUFDZ0UsUUFBUTtZQUFBLEdBQ3hEb0ksUUFBUSxDQUNELENBQ0QsRUFDUkgsZUFBZSxJQUNmbE8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ1MsTUFBQSxDQUFBSSxZQUFZO2NBQUNELFNBQVMsRUFBRUEsU0FBUztjQUFFSSxRQUFRLEVBQUU2TDtZQUFhLEdBQzFEeE8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsY0FBTXBCLEtBQUssQ0FBQ3FPLE1BQU0sQ0FBQ25HLE1BQU0sQ0FBTyxDQUVqQyxDQUNLLENBQ0w7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQXpJLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE0TyxjQUFBLEdBQUE1TyxPQUFBO1VBQ0EsSUFBQTZPLFNBQUEsR0FBQTdPLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVU4TyxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFck8sUUFBUTtjQUFFZ04sUUFBUTtjQUFFM007WUFBTSxDQUFFLEdBQUcsSUFBQVYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNLENBQUNtTyxNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHaFAsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBQXNGLE1BQUEsQ0FBQVEsU0FBUyxFQUNSLENBQUNyRyxRQUFRLENBQUNVLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0osTUFBTUEsS0FBSyxHQUFHVixRQUFRLENBQUNVLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2NBQ3RDcU0sUUFBUSxDQUFDO2dCQUFFdE07Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELElBQUl3TixNQUFNLEVBQUU7Y0FDWCxPQUFPNU8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQThOLHVCQUF1QjtnQkFBQ3RMLFFBQVEsRUFBRUEsQ0FBQSxLQUFNcU0sU0FBUyxDQUFDLEtBQUs7Y0FBQyxFQUFJOztZQUVyRSxJQUFJLENBQUNqTyxNQUFNLENBQUNLLEtBQUssQ0FBQ3NOLElBQUksSUFBSSxDQUFDM04sTUFBTSxDQUFDSyxLQUFLLENBQUN1TixTQUFTLEVBQUU7Y0FDbEQsT0FBTzNPLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNrTixjQUFBLENBQUFJLFVBQVU7Z0JBQUNuTSxJQUFJLEVBQUMsZ0JBQWdCO2dCQUFDb00sUUFBUSxFQUFFQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHN0UsT0FDQ2hQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNtTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDck0sSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNoQzlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNtTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDck0sSUFBSSxFQUFDO1lBQVcsRUFBRyxDQUNuQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBOUMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQW1QLE9BQUEsR0FBQW5QLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBb1AsU0FBQSxHQUFBcFAsT0FBQTtVQUNBLElBQUEyQyxNQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQTRPLGNBQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNNLFNBQVVxUCxvQkFBb0JBLENBQUM7WUFBRTFHO1VBQU8sQ0FBbUM7WUFDaEYsTUFBTTtjQUFFbEksUUFBUTtjQUFFSztZQUFNLENBQUUsR0FBRyxJQUFBVixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ21PLE1BQU0sRUFBRUksU0FBUyxDQUFDLEdBQUdoUCxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNc08sY0FBYyxHQUFHQSxDQUFBLEtBQU1QLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsSUFBQXpJLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNyRyxRQUFRLENBQUNvTixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDa0IsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUM7WUFFRixJQUFJSixNQUFNLEVBQUU7Y0FDWCxPQUFPNU8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3lOLE9BQUEsQ0FBQUksa0JBQWtCO2dCQUFDMU0sSUFBSSxFQUFDLFNBQVM7Z0JBQUNILFFBQVEsRUFBRUEsQ0FBQSxLQUFNcU0sU0FBUyxDQUFDLEtBQUs7Y0FBQyxFQUFJOztZQUcvRSxJQUFJdE8sUUFBUSxDQUFDb04sU0FBUyxDQUFDMkIsT0FBTyxFQUM3QixPQUNDelAsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTJDLEdBQ3pEN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2lCLE1BQUEsQ0FBQXFDLFVBQVU7Y0FBQ0osSUFBSSxFQUFDLE1BQU07Y0FBQzNDLE9BQU8sRUFBRXFOO1lBQWMsRUFBSSxDQUM5QyxFQUNOdlAsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzBOLFNBQUEsQ0FBQUssUUFBUTtjQUFDOUcsT0FBTyxFQUFFbEksUUFBUSxDQUFDb04sU0FBUyxDQUFDMkI7WUFBTyxFQUFJLENBQzVDO1lBR1IsT0FBT3pQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNrTixjQUFBLENBQUFjLGFBQWE7Y0FBQzdNLElBQUksRUFBQyxTQUFTO2NBQUNvTSxRQUFRLEVBQUVLO1lBQWMsRUFBSTtVQUNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQXZQLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFxRyxHQUFBLEdBQUFyRyxPQUFBO1VBRUEsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQXNHLE1BQUEsR0FBQXRHLE9BQUE7VUFFTSxTQUFVMFAsYUFBYUEsQ0FBQztZQUFFN00sSUFBSTtZQUFFb007VUFBUSxDQUFFO1lBQy9DLE1BQU07Y0FBRXhPLFFBQVE7Y0FBRUg7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUM5QyxNQUFNeUIsT0FBTyxHQUFHLE1BQU1xQyxLQUFLLElBQUc7Y0FDN0IsSUFBSTtnQkFDSCxNQUFNN0QsUUFBUSxDQUFDb04sU0FBUyxDQUFDekUsUUFBUSxDQUFDdkcsSUFBSSxDQUFDO2VBQ3ZDLENBQUMsT0FBTzJCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUNELE1BQU0sQ0FBQ3FDLFFBQVEsRUFBRXZCLFdBQVcsQ0FBQyxHQUFHdkYsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEgsUUFBUSxDQUFDO1lBQzNFLE1BQU0sR0FBRzhJLE9BQU8sQ0FBQyxHQUFHNVAsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEwsSUFBSSxDQUFDLENBQUM7WUFFNUQsSUFBQXlELE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNyRyxRQUFRLENBQUNvTixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDdkksV0FBVyxDQUFDN0UsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEgsUUFBUSxDQUFDO2NBQ3hDOEksT0FBTyxDQUFDbFAsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEwsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBRUYsT0FDQzlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUMyRSxHQUFBLENBQUF1SixTQUFTO2NBQUNuTixJQUFJLEVBQUVuQyxLQUFLLENBQUN3QixVQUFVLENBQUMrTixLQUFLLENBQUM1TyxLQUFLO2NBQUVDLFdBQVcsRUFBRVosS0FBSyxDQUFDd0IsVUFBVSxDQUFDK04sS0FBSyxDQUFDM087WUFBVyxHQUM3Rm5CLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixHQUMxQzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNFLE9BQU8sRUFBRUEsT0FBTztjQUFFRCxPQUFPLEVBQUM7WUFBUyxHQUN6QzFCLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQ2tILFFBQVEsQ0FDZixDQUNKLEVBQ05ySixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBNEIsR0FDMUM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDZ0UsUUFBUTtjQUFDL0QsT0FBTyxFQUFFZ047WUFBUSxHQUNsRDNPLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQ3lNLE1BQU0sQ0FDYixDQUNKLEVBRU41TyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDMkUsR0FBQSxDQUFBWSxnQkFBZ0I7Y0FBQ0osUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDN0I7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQTlHLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFzRyxNQUFBLEdBQUF0RyxPQUFBO1VBSUEsSUFBQThQLFVBQUEsR0FBQTlQLE9BQUE7VUFFTSxTQUFVK1AsaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRXRQLFFBQVE7Y0FBRUssTUFBTTtjQUFFMk0sUUFBUTtjQUFFbk47WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNoRSxNQUFNLENBQUNxRyxRQUFRLEVBQUV2QixXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUNQLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ2hILFFBQVEsQ0FBQztZQUMzRSxNQUFNLEdBQUc4SSxPQUFPLENBQUMsR0FBRzVQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUNQLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQzJCLE9BQU8sQ0FBQztZQUU5RCxJQUFBbEosTUFBQSxDQUFBUSxTQUFTLEVBQUMsQ0FBQ3JHLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEN2SSxXQUFXLENBQUM3RSxRQUFRLENBQUNvTixTQUFTLENBQUNoSCxRQUFRLENBQUM7Y0FDeENwQyxPQUFPLENBQUN1TCxHQUFHLENBQUMsSUFBSSxDQUFDO2NBQ2pCTCxPQUFPLENBQUM7Z0JBQUU5QixTQUFTLEVBQUVwTixRQUFRLENBQUNvTixTQUFTLENBQUN6TSxPQUFPO2NBQUUsQ0FBRSxDQUFDO1lBQ3JELENBQUMsQ0FBQztZQUVGLE9BQU9yQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDb08sVUFBQSxDQUFBRyxnQkFBZ0IsT0FBRztVQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQTlQLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFtQyxNQUFBLEdBQUFuQyxPQUFBO1VBRU0sU0FBVXVQLGtCQUFrQkEsQ0FBQztZQUNsQzFNLElBQUk7WUFDSjhGLE9BQU87WUFDUGpHO1VBQVEsQ0FLUjtZQUNBLE1BQU07Y0FBRWpDLFFBQVE7Y0FBRUg7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUU5QyxNQUFNO2NBQUVNLE1BQU07Y0FBRTJNO1lBQVEsQ0FBRSxHQUFHLElBQUFyTixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQy9DLE1BQU0sQ0FBQ3lOLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR25PLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU0rRyxRQUFRLEdBQUd6RCxLQUFLLElBQUc7Y0FDeEIsTUFBTTZKLE1BQU0sR0FBRzdKLEtBQUssQ0FBQzBELGFBQWE7Y0FDbEMsTUFBTTZGLFNBQVMsR0FBRztnQkFBRSxHQUFHL00sTUFBTSxDQUFDK007Y0FBUyxDQUFFO2NBQ3pDSixRQUFRLENBQUM7Z0JBQUVJLFNBQVMsRUFBRTtrQkFBRSxHQUFHQSxTQUFTO2tCQUFFLENBQUNoTCxJQUFJLEdBQUdzTCxNQUFNLENBQUM1SjtnQkFBSztjQUFFLENBQUUsQ0FBQztZQUNoRSxDQUFDO1lBQ0QsTUFBTTZKLFFBQVEsR0FBR3ROLE1BQU0sQ0FBQ3VOLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtZQUNuRCxNQUFNQyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJeE4sTUFBTSxDQUFDdU4sT0FBTyxFQUFFO2dCQUNuQkgsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUN4Qjs7Y0FFRHhMLFFBQVEsRUFBRTtZQUNYLENBQUM7WUFDRCxNQUFNSixTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QixNQUFNdUwsU0FBUyxHQUFHO2dCQUFFLEdBQUcvTSxNQUFNLENBQUMrTTtjQUFTLENBQUU7Y0FDekNKLFFBQVEsQ0FBQztnQkFBRUksU0FBUyxFQUFFO2tCQUFFLEdBQUdBLFNBQVM7a0JBQUUsQ0FBQ2hMLElBQUksR0FBR3BDLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ2hMLElBQUk7Z0JBQUM7Y0FBRSxDQUFFLENBQUM7Y0FDM0VxTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ4TCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZMLGFBQWEsR0FBR0EsQ0FBQSxLQUFNTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFFckQsT0FDQ25PLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGNBQ0MzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBbUksUUFBUTtjQUNSTixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJsRixJQUFJLEVBQUMsU0FBUztjQUNkMEIsS0FBSyxFQUFFekQsTUFBTSxDQUFDK00sU0FBUyxHQUFHaEwsSUFBSSxDQUFDLElBQUksRUFBRTtjQUNyQzBGLFdBQVcsRUFBRWpJLEtBQUssQ0FBQ3FPLE1BQU0sQ0FBQ3RIO1lBQVEsRUFDakMsRUFDRnRILE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNFLE9BQU8sRUFBRXFNLGFBQWE7Y0FBRXRNLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO1lBQUEsR0FDeERvSSxRQUFRLENBQ0QsQ0FDRCxFQUNSSCxlQUFlLElBQ2ZsTyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDUyxNQUFBLENBQUFJLFlBQVk7Y0FBQ0QsU0FBUyxFQUFFQSxTQUFTO2NBQUVJLFFBQVEsRUFBRTZMO1lBQWEsR0FDMUR4TyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxjQUFNcEIsS0FBSyxDQUFDcU8sTUFBTSxDQUFDbkcsTUFBTSxDQUFPLENBRWpDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEsSUFBQXpJLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFrUSxLQUFBLEdBQUFsUSxPQUFBO1VBQ0EsSUFBQXNHLE1BQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBbVEsS0FBQSxHQUFBblEsT0FBQTtVQUNBLElBQUFvUSxRQUFBLEdBQUFwUSxPQUFBO1VBRU0sU0FBVWlRLGdCQUFnQkEsQ0FBQyxFQUFFO1lBQ2xDLE1BQU07Y0FBRXhQLFFBQVE7Y0FBRUg7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUU5QyxNQUFNdUgsUUFBUSxHQUFHQSxDQUFBLEtBQUssQ0FBRSxDQUFDO1lBQ3pCLE1BQU0sR0FBR3NJLFlBQVksQ0FBQyxHQUFHdFEsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDb04sU0FBUyxDQUFDOUMsS0FBSyxDQUFDO1lBRWpFLE1BQU11RixJQUFJLEdBQUcsRUFBRTtZQUVmLElBQUFoSyxNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDckcsUUFBUSxDQUFDb04sU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ3dDLFlBQVksQ0FBQyxDQUFDLEdBQUc1UCxRQUFRLENBQUNvTixTQUFTLENBQUM5QyxLQUFLLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFFRnRLLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQzlDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdUYsSUFBSSxJQUFHO2NBQ3ZDLE1BQU0xTixJQUFJLEdBQUcsT0FBTzBOLElBQUksS0FBSyxRQUFRLEdBQUdBLElBQUksR0FBR0EsSUFBSSxDQUFDMU4sSUFBSTtjQUN4RCxNQUFNeUYsS0FBSyxHQUFHaEksS0FBSyxDQUFDdU4sU0FBUyxDQUFDaEwsSUFBSSxDQUFDO2NBRW5DLE1BQU0yTixLQUFLLEdBQUc7Z0JBQUV2SyxRQUFRLEVBQUUsQ0FBQyxDQUFDc0ssSUFBSSxFQUFFRSxRQUFRLElBQUksQ0FBQ2hRLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQzBDLElBQUksQ0FBQ0UsUUFBUTtjQUFDLENBQUU7Y0FFbEZILElBQUksQ0FBQ2xGLElBQUksQ0FDUnJMLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN3TyxLQUFBLENBQUFRLEdBQUc7Z0JBQUEsR0FBS0YsS0FBSztnQkFBRWpHLEdBQUcsRUFBRSxHQUFHOUosUUFBUSxDQUFDeUssRUFBRSxJQUFJckksSUFBSTtjQUFNLEdBQy9DeUYsS0FBSyxDQUNELENBQ047WUFDRixDQUFDLENBQUM7WUFDRixPQUNDdkksTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3dPLEtBQUEsQ0FBQVMsYUFBYTtjQUFDQyxNQUFNLEVBQUUsQ0FBQztjQUFFaFAsU0FBUyxFQUFDLFFBQVE7Y0FBQ21HLFFBQVEsRUFBRUE7WUFBUSxHQUM5RGhJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN3TyxLQUFBLENBQUFXLElBQUksUUFBRVAsSUFBSSxDQUFRLEVBQ25CdlEsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3dPLEtBQUEsQ0FBQVksS0FBSztjQUFDbFAsU0FBUyxFQUFDO1lBQUUsR0FDbEI3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDME8sUUFBQSxDQUFBZixvQkFBb0IsT0FBRyxFQUN4QnRQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN5TyxLQUFBLENBQUFZLFlBQVk7Y0FBQ2xPLElBQUksRUFBQztZQUFXLEVBQUcsRUFDakM5QyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeU8sS0FBQSxDQUFBWSxZQUFZO2NBQUNsTyxJQUFJLEVBQUM7WUFBVSxFQUFHLENBQ3pCLENBQ087VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUE5QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBbUMsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVnUixnQkFBZ0JBLENBQUM7WUFBRXRPO1VBQVEsQ0FBRTtZQUM1QyxNQUFNO2NBQUVwQyxLQUFLO2NBQUVHO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDOUMsTUFBTTtjQUFFTSxNQUFNO2NBQUUyTTtZQUFRLENBQUUsR0FBRyxJQUFBck4sUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMvQyxNQUFNLENBQUN5TixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUduTyxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNK0csUUFBUSxHQUFHekQsS0FBSyxJQUFHO2NBQ3hCLE1BQU02SixNQUFNLEdBQUc3SixLQUFLLENBQUMwRCxhQUFhO2NBQ2xDLE1BQU03RyxLQUFLLEdBQUc7Z0JBQUUsR0FBR0wsTUFBTSxDQUFDSztjQUFLLENBQUU7Y0FDakNzTSxRQUFRLENBQUM7Z0JBQUV0TSxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDZ04sTUFBTSxDQUFDdEwsSUFBSSxHQUFHc0wsTUFBTSxDQUFDNUo7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE1BQU02SixRQUFRLEdBQUd0TixNQUFNLENBQUN1TixPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTUMsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSXhOLE1BQU0sQ0FBQ3VOLE9BQU8sRUFBRTtnQkFDbkJILGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR4TCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTUosU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEI0TCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ4TCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZMLGFBQWEsR0FBR0EsQ0FBQSxLQUFNTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsT0FDQ25PLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUF5QixJQUFJLFFBQ0o1QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBc08sS0FBSztjQUNMekcsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCTyxLQUFLLEVBQUVoSSxLQUFLLENBQUNhLEtBQUssQ0FBQ3NOLElBQUksQ0FBQ25HLEtBQUs7Y0FDN0JDLFdBQVcsRUFBRWpJLEtBQUssQ0FBQ2EsS0FBSyxDQUFDc04sSUFBSSxDQUFDbEcsV0FBVztjQUN6QzFGLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRjlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNFLE9BQU8sRUFBRXFNLGFBQWE7Y0FBRXRNLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO1lBQUEsR0FDeERvSSxRQUFRLENBQ0QsQ0FDRCxFQUNSSCxlQUFlLElBQ2ZsTyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDUyxNQUFBLENBQUFJLFlBQVk7Y0FBQ0QsU0FBUyxFQUFFQSxTQUFTO2NBQUVJLFFBQVEsRUFBRTZMO1lBQWEsR0FDMUR4TyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxjQUFNcEIsS0FBSyxDQUFDcU8sTUFBTSxDQUFDbkcsTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBekksTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTRPLGNBQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBNk8sU0FBQSxHQUFBN08sT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFzRyxNQUFBLEdBQUF0RyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU0sU0FBVWlSLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFeFEsUUFBUTtjQUFFZ04sUUFBUTtjQUFFM007WUFBTSxDQUFFLEdBQUcsSUFBQVYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNLENBQUNtTyxNQUFNLEVBQUVJLFNBQVMsQ0FBQyxHQUFHaFAsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBQXNGLE1BQUEsQ0FBQVEsU0FBUyxFQUNSLENBQUNyRyxRQUFRLENBQUNVLEtBQUssQ0FBQyxFQUNoQixNQUFLO2NBQ0osTUFBTUEsS0FBSyxHQUFHVixRQUFRLENBQUNVLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO2NBQ3RDcU0sUUFBUSxDQUFDO2dCQUFFdE07Y0FBSyxDQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELElBQUl3TixNQUFNLEVBQUU7Y0FDWCxPQUFPNU8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQThRLGdCQUFnQjtnQkFBQ3RPLFFBQVEsRUFBRUEsQ0FBQSxLQUFNcU0sU0FBUyxDQUFDLEtBQUs7Y0FBQyxFQUFJOztZQUU5RCxJQUFJLENBQUNqTyxNQUFNLENBQUNLLEtBQUssQ0FBQ3NOLElBQUksRUFBRTtjQUN2QixPQUFPMU8sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2tOLGNBQUEsQ0FBQUksVUFBVTtnQkFBQ25NLElBQUksRUFBQyxRQUFRO2dCQUFDb00sUUFBUSxFQUFFQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHckUsT0FBT2hQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNtTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDck0sSUFBSSxFQUFDO1lBQU0sRUFBRztVQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQXFPLGNBQUEsR0FBQWxSLE9BQUE7VUFDQSxJQUFBbVIsY0FBQSxHQUFBblIsT0FBQTtVQUNBLElBQUFvUixPQUFBLEdBQUFwUixPQUFBO1VBQ0EsSUFBQXFSLGVBQUEsR0FBQXJSLE9BQUE7VUFDQSxJQUFBc1IsT0FBQSxHQUFBdFIsT0FBQTtVQUVPLE1BQU0wTixLQUFLLEdBQUF6SSxPQUFBLENBQUF5SSxLQUFBLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUV5RCxjQUFBLENBQUFwQixpQkFBaUI7WUFDbkN3QixNQUFNLEVBQUVILE9BQUEsQ0FBQUgsVUFBVTtZQUNsQk8sTUFBTSxFQUFFRixPQUFBLENBQUFHLFVBQVU7WUFDbEIsaUJBQWlCLEVBQUVKLGVBQUEsQ0FBQUssa0JBQWtCO1lBQ3JDLGdCQUFnQixFQUFFUixjQUFBLENBQUFwQztXQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaRCxJQUFBL08sTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQW9QLFNBQUEsR0FBQXBQLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUdBLElBQUE0TyxjQUFBLEdBQUE1TyxPQUFBO1VBRU0sU0FBVStRLFlBQVlBLENBQUM7WUFBRWxPO1VBQUksQ0FBRTtZQUNwQyxNQUFNO2NBQUVwQztZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXZDLE1BQU0sQ0FBQ21SLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc3UixNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDUCxRQUFRLENBQUNvTixTQUFTLENBQUNoTCxJQUFJLENBQUMsQ0FBQztZQUV4RSxJQUFBeUQsTUFBQSxDQUFBUSxTQUFTLEVBQUMsQ0FBQ3JHLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDcEMrRCxXQUFXLENBQUNuUixRQUFRLENBQUNvTixTQUFTLENBQUNoTCxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUM4TyxRQUFRLEVBQUUsT0FBTzVSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNrTixjQUFBLENBQUFjLGFBQWE7Y0FBQzdNLElBQUksRUFBRUEsSUFBSTtjQUFFb00sUUFBUSxFQUFFQSxDQUFBLEtBQU14SyxPQUFPLENBQUN1TCxHQUFHLENBQUMsZ0JBQWdCO1lBQUMsRUFBSTtZQUVsRyxPQUFPalEsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzBOLFNBQUEsQ0FBQUssUUFBUTtjQUFDOUcsT0FBTyxFQUFFZ0o7WUFBUSxFQUFJO1VBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBNVIsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTBMLGtCQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTJDLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUE2UixLQUFBLEdBQUE3UixPQUFBO1VBQ0EsSUFBQTRMLGNBQUEsR0FBQTVMLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUVNLFNBQVUwUixrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFalIsUUFBUTtjQUFFSCxLQUFLO2NBQUVRLE1BQU07Y0FBRTJNO1lBQVEsQ0FBRSxHQUFHLElBQUFyTixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRWhFLE1BQU0sQ0FBQ3NLLE9BQU8sRUFBRWdILFVBQVUsQ0FBQyxHQUFHL1IsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDb04sU0FBUyxDQUFDckUsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUNoRixNQUFNL0IsUUFBUSxHQUFHMUgsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxHQUFHZ0wsU0FBUyxDQUFDLEdBQUdqTSxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUMrUSxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHalMsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkQsSUFBQXNGLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNyRyxRQUFRLENBQUNvTixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDcEosT0FBTyxDQUFDdUwsR0FBRyxDQUFDLEVBQUUsRUFBRXZQLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ3JFLFNBQVMsRUFBRS9JLFFBQVEsQ0FBQztjQUN2RHFSLFVBQVUsQ0FBQ3JSLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ3JFLFNBQVMsQ0FBQztjQUN4Q3dDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixNQUFNVyxZQUFZLEdBQUdBLENBQUM7Y0FBRTNFLGFBQWEsRUFBRW1HO1lBQU0sQ0FBRSxLQUFJO2NBQ2xEMUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztjQUNaLE1BQU1vRyxTQUFTLEdBQUc7Z0JBQUUsR0FBRy9NLE1BQU0sQ0FBQytNO2NBQVMsQ0FBRTtjQUN6Q0osUUFBUSxDQUFDO2dCQUFFSSxTQUFTLEVBQUU7a0JBQUUsR0FBR0EsU0FBUztrQkFBRXJFLFNBQVMsRUFBRTJFLE1BQU0sQ0FBQzVKO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO2NBQ2xFdU4sVUFBVSxDQUFDM0QsTUFBTSxDQUFDNUosS0FBSyxDQUFDO1lBQ3pCLENBQUM7WUFFRCxNQUFNNkgsWUFBWSxHQUF3QjtjQUN6QzdDLE9BQU8sRUFBRTtnQkFDUjtnQkFDQTNFLElBQUksRUFBRWpDLE1BQUEsQ0FBQWlELEtBQUssQ0FBQ0MsT0FBTztnQkFDbkI1RSxLQUFLLEVBQUVYLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQytQLGVBQWU7Z0JBQ3BDaFEsT0FBTyxFQUFFLE1BQUFBLENBQU9xQyxLQUFLLEVBQUVnRyxLQUFLLEVBQUV4QixJQUFJLEtBQUk7a0JBQ3JDLE1BQU1vSixPQUFPLEdBQUcsSUFBSUwsS0FBQSxDQUFBTSxjQUFjLEVBQUU7a0JBQ3BDLE1BQU0xUixRQUFRLENBQUMyUixjQUFjLENBQUM5SCxLQUFLLEVBQUV4QixJQUFJLENBQUM7a0JBQzFDL0UsVUFBVSxDQUFDTixVQUFVLENBQUMsTUFBSztvQkFDMUJ5TyxPQUFPLENBQUNHLE9BQU8sRUFBRTtrQkFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFFUixPQUFPSCxPQUFPO2dCQUNmO2VBQ0E7Y0FDRDVFLEdBQUcsRUFBRTtnQkFDSjFJLElBQUksRUFBRSxLQUFLO2dCQUNYM0QsS0FBSyxFQUFFWCxLQUFLLENBQUM0QixPQUFPLENBQUNvTCxHQUFHO2dCQUN4QnJMLE9BQU8sRUFBRUEsQ0FBQ3FDLEtBQUssRUFBRWdHLEtBQUssS0FBSTtrQkFDekIwSCxZQUFZLENBQUMxSCxLQUFLLENBQUM7Z0JBQ3BCOzthQUVEO1lBRUQ3RixPQUFPLENBQUN1TCxHQUFHLENBQUMsRUFBRSxFQUFFbEYsT0FBTyxDQUFDO1lBRXhCLE9BQ0MvSyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBMEIsR0FFeEM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDZ0ssa0JBQUEsQ0FBQWMsaUJBQWlCO2NBQ2pCdEssT0FBTyxFQUFFa0ssWUFBWTtjQUNyQnRMLE1BQU0sRUFBRWdLLE9BQU87Y0FDZjJCLElBQUksRUFBRWQsS0FBQSxDQUFBZSxVQUFVO2NBQ2hCdkwsS0FBSyxFQUFFO2dCQUFFNEgsSUFBSSxFQUFFLFdBQVc7Z0JBQUVRLE9BQU8sRUFBRSxJQUFJO2dCQUFFK0ksZ0JBQWdCLEVBQUVQO2NBQVMsQ0FBRTtjQUN4RXBGLFlBQVksRUFBRUEsWUFBWTtjQUMxQkMsU0FBUyxFQUFDO1lBQVcsR0FFckI3TSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDa0ssY0FBQSxDQUFBaUIsa0JBQWtCLE9BQUcsQ0FDSCxDQUNmO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBLElBQUE5TSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVdVMsaUJBQWlCQSxDQUFDO1lBQUVDLEtBQUs7WUFBRWpDLElBQUk7WUFBRWpHLEtBQUs7WUFBRXFELFFBQVE7WUFBRTVGO1VBQVEsQ0FBRTtZQUMzRSxNQUFNO2NBQUVqSCxNQUFNO2NBQUUyTSxRQUFRO2NBQUVuTixLQUFLO2NBQUVHO1lBQVEsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFaEUsTUFBTSxDQUFDeU4sZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHbk8sTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkUsTUFBTTJMLFlBQVksR0FBR3JJLEtBQUssSUFBRztjQUM1QixNQUFNNkosTUFBTSxHQUFHN0osS0FBSyxDQUFDMEQsYUFBYTtjQUNsQ3VJLElBQUksQ0FBQ3BDLE1BQU0sQ0FBQ3RMLElBQUksQ0FBQyxHQUFHc0wsTUFBTSxDQUFDNUosS0FBSztjQUNoQ3dELFFBQVEsQ0FBQ3VDLEtBQUssRUFBRWlHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBRUQsT0FDQ3hRLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2QzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGFBQUtwQixLQUFLLENBQUNhLEtBQUssQ0FBQ3NSLFFBQVEsQ0FBQ25LLEtBQUssR0FBRyxHQUFHLEdBQUdvSyxRQUFRLENBQUNwSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQU0sRUFDakV2SyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBc08sS0FBSztjQUNMekcsUUFBUSxFQUFFNEUsWUFBWTtjQUN0QnJFLEtBQUssRUFBRWhJLEtBQUssQ0FBQ2EsS0FBSyxDQUFDc1IsUUFBUSxDQUFDbkssS0FBSztjQUNqQ0MsV0FBVyxFQUFFakksS0FBSyxDQUFDYSxLQUFLLENBQUNzUixRQUFRLENBQUNsSyxXQUFXO2NBQzdDaEUsS0FBSyxFQUFFZ00sSUFBSSxDQUFDa0MsUUFBUTtjQUNwQjVQLElBQUksRUFBQyxVQUFVO2NBQ2ZiLE9BQU8sRUFBQztZQUFVLEVBQ2pCLEVBQ0ZqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBc08sS0FBSztjQUNMekcsUUFBUSxFQUFFNEUsWUFBWTtjQUN0QnJFLEtBQUssRUFBRWhJLEtBQUssQ0FBQ2EsS0FBSyxDQUFDd1IsT0FBTyxDQUFDckssS0FBSztjQUNoQy9ELEtBQUssRUFBRWdNLElBQUksQ0FBQ29DLE9BQU87Y0FDbkJwSyxXQUFXLEVBQUVqSSxLQUFLLENBQUNhLEtBQUssQ0FBQ3dSLE9BQU8sQ0FBQ3BLLFdBQVc7Y0FDNUMxRixJQUFJLEVBQUMsU0FBUztjQUNkYixPQUFPLEVBQUM7WUFBVSxFQUNqQixFQUNEd1EsS0FBSyxHQUFHLENBQUMsSUFDVHpTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF5QixHQUN2QzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNDLE9BQU8sRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNMEwsUUFBUSxDQUFDckQsS0FBSztZQUFDLEdBQ25ELEdBQUcsRUFDSGhLLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQzZMLE1BQU0sQ0FDYixDQUVWLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQWhPLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUE0UyxrQkFBQSxHQUFBNVMsT0FBQTtVQUVNLFNBQVU2UyxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRS9SLE1BQU07Y0FBRTJNLFFBQVE7Y0FBRW5OLEtBQUs7Y0FBRUc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUVoRSxNQUFNLENBQUNzUyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHaFQsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDSyxLQUFLLEVBQUVzUixRQUFRLEVBQUVPLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFFdkYsTUFBTSxDQUFDakksS0FBSyxFQUFFa0ksUUFBUSxDQUFDLEdBQUdsVCxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUN2Q0YsTUFBTSxDQUFDSyxLQUFLLENBQUNzUixRQUFRLENBQUNPLE1BQU0sR0FBR2xTLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDc1IsUUFBUSxHQUFHLENBQUM7Y0FBRUEsUUFBUSxFQUFFLEVBQUU7Y0FBRUUsT0FBTyxFQUFFO1lBQUUsQ0FBRSxDQUFDLENBQ3RGO1lBRUQsTUFBTU8sS0FBSyxHQUFHQSxDQUFBLEtBQUs7Y0FDbEJILGFBQWEsQ0FBQ0QsVUFBVSxHQUFHLENBQUMsQ0FBQztjQUM3QkcsUUFBUSxDQUFDLENBQUMsR0FBR2xJLEtBQUssRUFBRTtnQkFBRTBILFFBQVEsRUFBRSxFQUFFO2dCQUFFRSxPQUFPLEVBQUU7Y0FBRSxDQUFFLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0QsTUFBTXZJLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLE1BQU11RCxRQUFRLEdBQUdyRCxLQUFLLElBQUc7Y0FDeEIsTUFBTTZJLFFBQVEsR0FBR3BJLEtBQUssQ0FBQ3FJLEtBQUssQ0FBQyxDQUFDLEVBQUU5SSxLQUFLLENBQUMsQ0FBQytJLE1BQU0sQ0FBQ3RJLEtBQUssQ0FBQ3FJLEtBQUssQ0FBQzlJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztjQUNyRXlJLGFBQWEsQ0FBQ0ksUUFBUSxDQUFDSCxNQUFNLENBQUM7Y0FDOUJDLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDO2NBQ2xCMUYsUUFBUSxDQUFDO2dCQUFFdE0sS0FBSyxFQUFFO2tCQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssS0FBSztrQkFBRXNSLFFBQVEsRUFBRVU7Z0JBQVE7Y0FBRSxDQUFFLENBQUM7WUFDN0QsQ0FBQztZQUNELE1BQU1HLFlBQVksR0FBR0EsQ0FBQ2hKLEtBQUssRUFBRS9GLEtBQUssS0FBSTtjQUNyQyxNQUFNdUUsSUFBSSxHQUFHaUMsS0FBSztjQUNsQmpDLElBQUksQ0FBQ3dCLEtBQUssQ0FBQyxHQUFHL0YsS0FBSztjQUNuQjBPLFFBQVEsQ0FBQ25LLElBQUksQ0FBQztjQUNkMkUsUUFBUSxDQUFDO2dCQUFFdE0sS0FBSyxFQUFFO2tCQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssS0FBSztrQkFBRXNSLFFBQVEsRUFBRTNKO2dCQUFJO2NBQUUsQ0FBRSxDQUFDO1lBQ3pELENBQUM7WUFDRCxLQUFLLElBQUltQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc2SCxVQUFVLEVBQUUsRUFBRTdILENBQUMsRUFBRTtjQUNwQ2IsTUFBTSxDQUFDZ0IsSUFBSSxDQUNWckwsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2tSLGtCQUFBLENBQUFMLGlCQUFpQjtnQkFDakJ4SyxRQUFRLEVBQUV1TCxZQUFZO2dCQUN0QmQsS0FBSyxFQUFFTSxVQUFVO2dCQUNqQnZDLElBQUksRUFBRXhGLEtBQUssQ0FBQ0UsQ0FBQyxDQUFDO2dCQUNkMEMsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQnBELEdBQUcsRUFBRSxZQUFZVSxDQUFDLEVBQUU7Z0JBQ3BCWCxLQUFLLEVBQUVXO2NBQUMsRUFDUCxDQUNGOztZQUdGLE9BQ0NsTCxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaEM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBbUMsR0FDcEQ3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxhQUFLcEIsS0FBSyxDQUFDYSxLQUFLLENBQUNzUixRQUFRLENBQUN4UixLQUFLLENBQU0sRUFDckNsQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUyxHQUN2QjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO2NBQUMvRCxPQUFPLEVBQUVpUjtZQUFLLEdBQy9DNVMsS0FBSyxDQUFDNEIsT0FBTyxDQUFDb0wsR0FBRyxDQUNWLENBQ0osQ0FDRSxFQUNSbEQsTUFBTSxDQUNGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUFySyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBbUMsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUF1VCxjQUFBLEdBQUF2VCxPQUFBO1VBRU0sU0FBVXdULGdCQUFnQkEsQ0FBQztZQUFFOVE7VUFBUSxDQUFFO1lBQzVDLE1BQU07Y0FBRTVCLE1BQU07Y0FBRTJNLFFBQVE7Y0FBRW5OLEtBQUs7Y0FBRUc7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUVoRSxNQUFNLENBQUN5TixlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUduTyxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNK0csUUFBUSxHQUFHekQsS0FBSyxJQUFHO2NBQ3hCLE1BQU02SixNQUFNLEdBQUc3SixLQUFLLENBQUMwRCxhQUFhO2NBQ2xDLE1BQU03RyxLQUFLLEdBQUc7Z0JBQUUsR0FBR0wsTUFBTSxDQUFDSztjQUFLLENBQUU7Y0FDakNzTSxRQUFRLENBQUM7Z0JBQUV0TSxLQUFLLEVBQUU7a0JBQUUsR0FBR0EsS0FBSztrQkFBRSxDQUFDZ04sTUFBTSxDQUFDdEwsSUFBSSxHQUFHc0wsTUFBTSxDQUFDNUo7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDL0QsQ0FBQztZQUNELE1BQU02SixRQUFRLEdBQUd0TixNQUFNLENBQUN1TixPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDbkQsTUFBTUMsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSXhOLE1BQU0sQ0FBQ3VOLE9BQU8sRUFBRTtnQkFDbkJILGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDeEI7O2NBRUR4TCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBRUQsTUFBTUosU0FBUyxHQUFHQSxDQUFBLEtBQUs7Y0FDdEI0TCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7Y0FDekJ4TCxRQUFRLEVBQUU7WUFDWCxDQUFDO1lBQ0QsTUFBTTZMLGFBQWEsR0FBR0EsQ0FBQSxLQUFNTCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDckR6SixPQUFPLENBQUN1TCxHQUFHLENBQUMsRUFBRSxFQUFFbFAsTUFBTSxDQUFDSyxLQUFLLENBQUM7WUFDN0IsT0FDQ3BCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUF5QixJQUFJLFFBQ0o1QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBc08sS0FBSztjQUNMekcsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCTyxLQUFLLEVBQUVoSSxLQUFLLENBQUNhLEtBQUssQ0FBQ3NTLElBQUksQ0FBQ25MLEtBQUs7Y0FDN0JDLFdBQVcsRUFBRWpJLEtBQUssQ0FBQ2EsS0FBSyxDQUFDc1MsSUFBSSxDQUFDbEwsV0FBVztjQUN6QzFGLElBQUksRUFBQztZQUFNLEVBQ1YsRUFDRjlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUFzTyxLQUFLO2NBQ0x6RyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJPLEtBQUssRUFBRWhJLEtBQUssQ0FBQ2EsS0FBSyxDQUFDdVMsWUFBWSxDQUFDcEwsS0FBSztjQUNyQ0MsV0FBVyxFQUFFakksS0FBSyxDQUFDYSxLQUFLLENBQUN1UyxZQUFZLENBQUNuTCxXQUFXO2NBQ2pEMUYsSUFBSSxFQUFDO1lBQWMsRUFDbEIsRUFDRjlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUM2UixjQUFBLENBQUFWLGFBQWEsT0FBRyxFQUNqQjlTLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUErQixHQUNoRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNFLE9BQU8sRUFBRXFNLGFBQWE7Y0FBRXRNLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO1lBQUEsR0FDeERvSSxRQUFRLENBQ0QsQ0FDRCxFQUNSSCxlQUFlLElBQ2ZsTyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDUyxNQUFBLENBQUFJLFlBQVk7Y0FBQ0QsU0FBUyxFQUFFQSxTQUFTO2NBQUVJLFFBQVEsRUFBRTZMO1lBQWEsR0FDMUR4TyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxjQUFNcEIsS0FBSyxDQUFDcU8sTUFBTSxDQUFDbkcsTUFBTSxDQUFPLENBRWpDLENBQ0ssQ0FDTDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBekksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRPLGNBQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBNk8sU0FBQSxHQUFBN08sT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFzRyxNQUFBLEdBQUF0RyxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTJULEtBQUEsR0FBQTNULE9BQUE7VUFDQSxJQUFBMkMsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUF1VCxjQUFBLEdBQUF2VCxPQUFBO1VBRU0sU0FBVXlSLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFM1EsTUFBTTtjQUFFTCxRQUFRO2NBQUVnTixRQUFRO2NBQUVuTjtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ2hFLE1BQU0sQ0FBQ29ULFVBQVUsRUFBRTdFLFNBQVMsQ0FBQyxHQUFHaFAsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDNlMsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRy9ULE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdELElBQUFzRixNQUFBLENBQUFRLFNBQVMsRUFDUixDQUFDckcsUUFBUSxDQUFDVSxLQUFLLENBQUMsRUFDaEIsTUFBSztjQUNKLE1BQU1BLEtBQUssR0FBR1YsUUFBUSxDQUFDVSxLQUFLLENBQUNDLE9BQU8sRUFBRTtjQUN0Q3FNLFFBQVEsQ0FBQztnQkFBRXRNO2NBQUssQ0FBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxpQkFBaUIsQ0FDakI7WUFFRCxJQUFJeVMsVUFBVSxFQUFFO2NBQ2YsT0FBTzdULE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN4QixLQUFBLENBQUFzVCxnQkFBZ0I7Z0JBQUM5USxRQUFRLEVBQUVBLENBQUEsS0FBTXFNLFNBQVMsQ0FBQyxLQUFLO2NBQUMsRUFBSTs7WUFHOUQsSUFBSSxDQUFDak8sTUFBTSxDQUFDSyxLQUFLLENBQUNzUixRQUFRLElBQUksQ0FBQzNSLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDc1MsSUFBSSxJQUFJLENBQUMzUyxNQUFNLENBQUNLLEtBQUssQ0FBQ3VTLFlBQVksRUFBRTtjQUMvRSxPQUFPM1QsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2tOLGNBQUEsQ0FBQUksVUFBVTtnQkFBQ25NLElBQUksRUFBQyxRQUFRO2dCQUFDb00sUUFBUSxFQUFFQSxDQUFBLEtBQU1GLFNBQVMsQ0FBQyxJQUFJO2NBQUMsRUFBSTs7WUFHckUsT0FDQ2hQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFDQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNtTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDck0sSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNoQzlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNtTixTQUFBLENBQUFLLGdCQUFnQjtjQUFDck0sSUFBSSxFQUFDO1lBQWMsRUFBRyxFQUN4QzlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFzQixHQUNwQzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFtQyxHQUNwRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGFBQUtwQixLQUFLLENBQUNhLEtBQUssQ0FBQ3NSLFFBQVEsQ0FBQ3hSLEtBQUssQ0FBTSxFQUNyQ2xCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpQixNQUFBLENBQUFxQyxVQUFVO2NBQUNKLElBQUksRUFBQyxNQUFNO2NBQUMzQyxPQUFPLEVBQUVBLENBQUEsS0FBTTZSLGVBQWUsQ0FBQyxJQUFJO1lBQUMsRUFBSSxDQUN4RCxFQUNSRCxZQUFZLEdBQ1o5VCxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDNlIsY0FBQSxDQUFBVixhQUFhLE9BQUcsR0FFakI5UyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDaVMsS0FBQSxDQUFBSSxJQUFJO2NBQ0puUyxTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDbUosS0FBSyxFQUFFakssTUFBTSxDQUFDSyxLQUFLLENBQUNzUixRQUFRO2NBQzVCdFIsS0FBSyxFQUFFLEVBQUU7Y0FDVDZTLE9BQU8sRUFBRUEsQ0FBQztnQkFBRWxMO2NBQUksQ0FBbUQsS0FDbEUvSSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtnQkFBS0UsU0FBUyxFQUFDO2NBQWdCLEdBQzlCN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsaUJBQVNvSCxJQUFJLENBQUMySixRQUFRLEUsS0FBWSxFLEtBQUMxUyxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxlQUFPb0gsSUFBSSxDQUFDNkosT0FBTyxDQUFRO1lBRS9ELEVBRUYsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBLElBQUE1UyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVaVUsT0FBT0EsQ0FBQ0MsUUFBUTtZQUMvQixNQUFNLENBQUMzUyxLQUFLLEVBQUU0UyxRQUFRLENBQUMsR0FBR3BVLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQU0sSUFBSSxDQUFDO1lBRW5EakIsTUFBQSxDQUFBYSxPQUFLLENBQUN5QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNK1EsVUFBVSxHQUFHRixRQUFRLENBQUNHLE1BQU0sQ0FBQ2hLLEdBQUcsQ0FBQ2tHLElBQUksSUFBSUEsSUFBSSxDQUFDMU4sSUFBSSxDQUFDO2NBQ3pEO2NBQ0EsTUFBTS9CLE1BQU0sR0FBR29ULFFBQVEsQ0FBQ3BULE1BQU0sSUFBSSxFQUFFO2NBQ3BDLE1BQU13VCxRQUFRLEdBQUcsSUFBSXBVLEtBQUEsQ0FBQXFVLFNBQVMsQ0FBQ0wsUUFBUSxFQUFFO2dCQUFFRSxVQUFVO2dCQUFFLEdBQUd0VDtjQUFNLENBQUUsQ0FBQztjQUNuRXFULFFBQVEsQ0FBQ0csUUFBUSxDQUFDO1lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixPQUFPO2NBQ05FLEtBQUssRUFBRSxDQUFDLENBQUNqVCxLQUFLO2NBQ2RBO2FBQ0E7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXhCLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUF5VSxXQUFBLEdBQUF6VSxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTBVLGdCQUFBLEdBQUExVSxPQUFBO1VBQ0EsSUFBQTJVLFlBQUEsR0FBQTNVLE9BQUE7VUFDQSxJQUFBMkMsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0VSxZQUFBLEdBQUE1VSxPQUFBO1VBQ00sU0FBVTZVLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFL1QsTUFBTTtjQUFFMk0sUUFBUTtjQUFFbk4sS0FBSztjQUFFQyxLQUFLO2NBQUVFLFFBQVE7Y0FBRTROLE9BQU87Y0FBRXlHO1lBQVMsQ0FBRSxHQUFHLElBQUExVSxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNGLE1BQU11VSxZQUFZLEdBQUdBLENBQUM7Y0FBRWxTLElBQUk7Y0FBRTBCO1lBQUssQ0FBRSxLQUFLa0osUUFBUSxDQUFDO2NBQUUsQ0FBQzVLLElBQUksR0FBRzBCO1lBQUssQ0FBRSxDQUFDO1lBQ3JFLE1BQU0sQ0FBQ3lRLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR2xWLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9ELE1BQU0sQ0FBQ2tVLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBR3BWLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25FLE1BQU1DLEtBQUssR0FBRyxDQUFDUSxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDMkwsUUFBUSxDQUFDdE0sTUFBTSxDQUFDRyxLQUFLLENBQUMsR0FBR1gsS0FBSyxDQUFDd0IsVUFBVSxDQUFDc1QsSUFBSSxDQUFDblUsS0FBSyxHQUFHSCxNQUFNLENBQUNHLEtBQUs7WUFDdkcsTUFBTUMsV0FBVyxHQUFHLENBQUNPLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMyTCxRQUFRLENBQUN0TSxNQUFNLENBQUNJLFdBQVcsQ0FBQyxHQUNuRVosS0FBSyxDQUFDd0IsVUFBVSxDQUFDc1QsSUFBSSxDQUFDbFUsV0FBVyxHQUNqQ0osTUFBTSxDQUFDSSxXQUFXO1lBRXJCLE1BQU0rQixNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE1BQU14QyxRQUFRLENBQUNhLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDO2NBQzFCMk0sUUFBUSxDQUFDO2dCQUFFWSxPQUFPLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDNUI5TixLQUFLLENBQUNjLElBQUksRUFBRTtZQUNiLENBQUM7WUFDRCxNQUFNbVAsS0FBSyxHQUFHO2NBQUV2SyxRQUFRLEVBQUUsQ0FBQ25GLE1BQU0sQ0FBQ3VOLE9BQU87Y0FBRXBNLE9BQU8sRUFBRWdCO1lBQU0sQ0FBRTtZQUM1RCxNQUFNb1MsWUFBWSxHQUFHQSxDQUFBLEtBQU1KLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUVsRCxPQUNDbFYsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXlFLEdBQ3ZGN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQThCLEdBQzVDN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQW1WLElBQUk7Y0FDSjFULFNBQVMsRUFBQyxXQUFXO2NBQ3JCSyxPQUFPLEVBQUVBLENBQUEsS0FBSztnQkFDYixJQUFJbkIsTUFBTSxDQUFDdU4sT0FBTyxFQUFFO2tCQUNuQjRHLGdCQUFnQixDQUFDLElBQUksQ0FBQztrQkFDdEI7O2dCQUVEMVUsS0FBSyxDQUFDRyxZQUFZLEdBQUdlLFNBQVM7Y0FDL0I7WUFBQyxHQUVEMUIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2lCLE1BQUEsQ0FBQXFDLFVBQVU7Y0FBQ0osSUFBSSxFQUFDLFdBQVc7Y0FBQzVDLE9BQU8sRUFBQyxTQUFTO2NBQUNKLFNBQVMsRUFBQztZQUFRLEVBQUcsRUFDbkV0QixLQUFLLENBQUM0QixPQUFPLENBQUNxVCxJQUFJLEVBQ25CeFYsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsaUJBQVNwQixLQUFLLENBQUN3QixVQUFVLENBQUNzRixNQUFNLEUsSUFBVyxDQUNyQyxFQUNQckgsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBTUUsU0FBUyxFQUFDO1lBQWMsR0FBRXRCLEtBQUssQ0FBQ3dMLEtBQUssQ0FBQ3JMLFFBQVEsQ0FBQytVLFFBQVEsQ0FBQ3RLLEVBQUUsQ0FBQyxDQUFRLENBQ3BFLEVBQ05uTCxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBMEIsR0FDNUM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDZ0UsUUFBUTtjQUFDL0QsT0FBTyxFQUFFQSxDQUFBLEtBQU1rVCxrQkFBa0IsQ0FBQyxJQUFJO1lBQUMsR0FDeEU3VSxLQUFLLENBQUM0QixPQUFPLENBQUNpRixNQUFNLENBQ2IsRUFDVHBILE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS3dPO1lBQUssR0FDakNsUSxLQUFLLENBQUM0QixPQUFPLENBQUNiLElBQUksQ0FDWCxDQUNBLENBQ0wsRUFDTnRCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE4QixHQUM1QzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGtCQUNDM0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2dULGdCQUFBLENBQUE5UixlQUFlO2NBQUNDLElBQUksRUFBQyxPQUFPO2NBQUNDLFFBQVEsRUFBQyxJQUFJO2NBQUNHLE1BQU0sRUFBRThSO1lBQVksR0FDOUQ5VCxLQUFLLENBQ1csRUFDbEJsQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDZ1QsZ0JBQUEsQ0FBQTlSLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLGFBQWE7Y0FBQ0MsUUFBUSxFQUFDLEdBQUc7Y0FBQ0csTUFBTSxFQUFFOFI7WUFBWSxHQUNuRTdULFdBQVcsQ0FDSyxDQUNULEVBQ1ZuQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDK1MsV0FBQSxDQUFBaE8sVUFBVSxPQUFHLENBQ1QsRUFDTHVPLGFBQWEsSUFDYmpWLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpVCxZQUFBLENBQUF2UyxrQkFBa0I7Y0FDbEJDLE9BQU8sRUFBRWdULFlBQVk7Y0FDckIvUyxTQUFTLEVBQUVBLENBQUEsS0FBSztnQkFDZndTLFNBQVMsRUFBRTtnQkFDWHZVLEtBQUssQ0FBQ0csWUFBWSxHQUFHZSxTQUFTO2dCQUM5QjRULFlBQVksRUFBRTtjQUNmO1lBQUMsRUFFRixFQUNBSCxlQUFlLElBQUluVixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDa1QsWUFBQSxDQUFBbEwsV0FBVztjQUFDWCxJQUFJLEVBQUV0SSxRQUFRLENBQUNzSSxJQUFJO2NBQUUxRyxPQUFPLEVBQUVBLENBQUEsS0FBTThTLGtCQUFrQixDQUFDLEtBQUs7WUFBQyxFQUFJLENBQ2hHO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEZBLElBQUFwVixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUF5VixPQUFBLEdBQUF6VixPQUFBO1VBRUEsSUFBQTBWLGVBQUEsR0FBQTFWLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBMlYsVUFBQSxHQUFBM1YsT0FBQTtVQUNBLElBQUE0VSxZQUFBLEdBQUE1VSxPQUFBO1VBQ0EsSUFBQTRJLFVBQUEsR0FBQTVJLE9BQUE7VUFDQSxJQUFBeUosS0FBQSxHQUFBekosT0FBQTtVQUVPO1VBQVksU0FBVTRWLGtCQUFrQkEsQ0FBQztZQUFFclYsS0FBSztZQUFFRTtVQUFRLENBQUU7WUFDbEUsTUFBTSxHQUFHdUwsU0FBUyxDQUFDLEdBQUdqTSxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUM2VSxpQkFBaUIsRUFBRXJRLG9CQUFvQixDQUFDLEdBQUd6RixNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFtQixLQUFLLENBQUM7WUFDekYsTUFBTSxDQUFDRixNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBd0JQLFFBQVEsQ0FBQ1csT0FBTyxFQUFFLENBQUM7WUFDckYsTUFBTSxDQUFDMFUsVUFBVSxFQUFFeFYsS0FBSyxDQUFDLEdBQUcsSUFBQWdHLE1BQUEsQ0FBQXlQLFFBQVEsRUFBQ0wsZUFBQSxDQUFBdE8sTUFBWSxDQUFDNE8sU0FBUyxDQUFDO1lBQzVELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR25XLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU07Y0FBRStIO1lBQUksQ0FBRSxHQUFHdEksUUFBUTtZQUN6QixNQUFNc0wsU0FBUyxHQUFHeEwsS0FBSyxDQUFDNFYsYUFBYSxDQUFDQyxHQUFHLENBQUNyTixJQUFJLENBQUM7WUFDL0MsTUFBTTFHLE9BQU8sR0FBR0EsQ0FBQSxLQUFNbUQsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQ3VHLFNBQVMsRUFBRSxNQUFNLElBQUlzSyxLQUFLLENBQUMscUJBQXFCdE4sSUFBSSxtQkFBbUIsQ0FBQztZQUU3RSxNQUFNMEUsUUFBUSxHQUFHM0UsSUFBSSxJQUFHO2NBQ3ZCLE1BQU13TixTQUFTLEdBQUc7Z0JBQUUsR0FBR3hWLE1BQU07Z0JBQUV1TixPQUFPLEVBQUUsSUFBSTtnQkFBRSxHQUFHdkY7Y0FBSSxDQUFFO2NBQ3ZEckUsT0FBTyxDQUFDdUwsR0FBRyxDQUFDLEVBQUUsRUFBRXNHLFNBQVMsQ0FBQztjQUMxQnZWLFNBQVMsQ0FBQ3VWLFNBQVMsQ0FBQztZQUNyQixDQUFDO1lBRUQsSUFBQWhRLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNyRyxRQUFRLENBQUMsRUFBRSxNQUFNdUwsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTFDLElBQUksQ0FBQzhKLFVBQVUsRUFBRSxPQUFPL1YsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQW9XLE9BQU87Y0FBQzNGLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFFakQsTUFBTTRGLFlBQVksR0FBR1gsaUJBQWlCLElBQUlBLGlCQUFpQixLQUFLLFdBQVcsR0FBR2pOLFVBQUEsQ0FBQWUsb0JBQW9CLEdBQUdpTCxZQUFBLENBQUFsTCxXQUFXO1lBQ2hILE9BQ0MzSixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdEIsUUFBQSxDQUFBbUwsYUFBYSxDQUFDa0wsUUFBUTtjQUN0QmxTLEtBQUssRUFBRTtnQkFDTjlELFFBQVE7Z0JBQ1JILEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xPLE1BQU07Z0JBQ05nVSxTQUFTLEVBQUVBLENBQUEsS0FBSztrQkFDZnJVLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFO2tCQUMxQjdNLFNBQVMsQ0FBQ04sUUFBUSxDQUFDVyxPQUFPLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFDRGlOLE9BQU8sRUFBRXZOLE1BQU0sQ0FBQ3VOLE9BQU87Z0JBQ3ZCWixRQUFRO2dCQUNSd0ksVUFBVTtnQkFDVkMsYUFBYTtnQkFDYm5LLFNBQVM7Z0JBQ1R2Rzs7WUFDQSxHQUVEekYsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQytULE9BQUEsQ0FBQVosTUFBTSxPQUFHLEVBQ1Y5VSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDaVUsVUFBQSxDQUFBZSxzQkFBc0IsT0FBRyxFQUMxQjNXLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUMrSCxLQUFBLENBQUErRCxnQkFBZ0I7Y0FBQ3pFLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQy9COE0saUJBQWlCLElBQUk5VixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDOFUsWUFBWTtjQUFDek4sSUFBSSxFQUFFZ0QsU0FBUztjQUFFakQsSUFBSSxFQUFFckksUUFBUTtjQUFFNEIsT0FBTyxFQUFFQTtZQUFPLEVBQUksQ0FDakU7VUFFM0I7Ozs7Ozs7Ozs7O1VDNURBOztVQUVBc1UsTUFBQSxDQUFBQyxjQUFBLENBQUEzUixPQUFBO1lBQ0FWLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBeEUsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXNHLE1BQUEsR0FBQXRHLE9BQUE7VUFFQSxJQUFBb1AsU0FBQSxHQUFBcFAsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNNLFNBQVU2VyxnQkFBZ0JBLENBQUM7WUFBRWxGLFFBQVE7WUFBRXJSO1VBQUssQ0FBRTtZQUNuRCxNQUFNO2NBQUVHLFFBQVE7Y0FBRUssTUFBTTtjQUFFMk07WUFBUSxDQUFFLEdBQUcsSUFBQXJOLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDekQsSUFBSXFDLElBQUksR0FBRyxPQUFPOE8sUUFBUSxLQUFLLFFBQVEsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLENBQUM5TyxJQUFJO1lBQ2xFLE1BQU0sQ0FBQ2dFLFFBQVEsRUFBRXZCLFdBQVcsQ0FBQyxHQUFHdkYsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEgsUUFBUSxDQUFDO1lBQzNFLE1BQU0sR0FBRzhJLE9BQU8sQ0FBQyxHQUFHNVAsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEwsSUFBSSxDQUFDLENBQUM7WUFFNUQsSUFBQXlELE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNyRyxRQUFRLENBQUNvTixTQUFTLENBQUMsRUFBRSxNQUFLO2NBQ3BDdkksV0FBVyxDQUFDN0UsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEgsUUFBUSxDQUFDO2NBQ3hDOEksT0FBTyxDQUFDbFAsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEwsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTVosT0FBTyxHQUFHLE1BQU1xQyxLQUFLLElBQUksTUFBTTdELFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ3pFLFFBQVEsQ0FBQ3ZHLElBQUksQ0FBQztZQUN0RSxNQUFNa0YsUUFBUSxHQUFHekQsS0FBSyxJQUFHO2NBQ3hCLE1BQU02SixNQUFNLEdBQUc3SixLQUFLLENBQUMwRCxhQUFhO2NBQ2xDeUYsUUFBUSxDQUFDO2dCQUFFLENBQUM1SyxJQUFJLEdBQUdzTCxNQUFNLENBQUM1SjtjQUFLLENBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRUQsSUFBSSxDQUFDOUQsUUFBUSxDQUFDb04sU0FBUyxDQUFDaEwsSUFBSSxDQUFDLEVBQUU7Y0FDOUIsT0FDQzlDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGNBQ0MzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDeEIsS0FBQSxDQUFBbUksUUFBUTtnQkFDUk4sUUFBUSxFQUFFQSxRQUFRO2dCQUNsQmxGLElBQUksRUFBQyxTQUFTO2dCQUNkMEIsS0FBSyxFQUFFekQsTUFBTSxDQUFDK0IsSUFBSSxDQUFDO2dCQUNuQjBGLFdBQVcsRUFBQztjQUFpQyxFQUM1QyxFQUVGeEksTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Z0JBQUtFLFNBQVMsRUFBQztjQUFrQyxHQUNoRDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2dCQUFDRSxPQUFPLEVBQUVBLE9BQU87Z0JBQUVELE9BQU8sRUFBQztjQUFTLEdBQ3pDMUIsS0FBSyxDQUFDNEIsT0FBTyxDQUFDa0gsUUFBUSxDQUNmLENBQ0osQ0FDRDs7WUFJUixPQUFPckosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzBOLFNBQUEsQ0FBQUssUUFBUTtjQUFDOUcsT0FBTyxFQUFFbEksUUFBUSxDQUFDb04sU0FBUyxDQUFDaEwsSUFBSTtZQUFDLEVBQUk7VUFDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUE5QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVOFcsVUFBVUEsQ0FBQztZQUFFclcsUUFBUTtZQUFFc1c7VUFBZ0IsQ0FBRTtZQUN4RCxNQUFNO2NBQUV6VztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQytELEtBQUssRUFBRXlTLFFBQVEsQ0FBQyxHQUFHalgsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTStHLFFBQVEsR0FBR3pELEtBQUssSUFBRztjQUN4QjBTLFFBQVEsQ0FBQzFTLEtBQUssQ0FBQzBELGFBQWEsQ0FBQ3pELEtBQUssQ0FBQztZQUNwQyxDQUFDO1lBRUQsTUFBTTJPLEtBQUssR0FBRzVPLEtBQUssSUFBRztjQUNyQjdELFFBQVEsQ0FBQ3dXLFNBQVMsQ0FBQzFTLEtBQUssQ0FBQztjQUN6QndTLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUN4QixDQUFDO1lBRUQsT0FDQ2hYLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFjLEdBQzVCN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3hCLEtBQUEsQ0FBQXNPLEtBQUs7Y0FBQzNMLElBQUksRUFBQyxtQkFBbUI7Y0FBQzBCLEtBQUssRUFBRUEsS0FBSztjQUFFd0QsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDcEVoSSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDRSxPQUFPLEVBQUVpUixLQUFLO2NBQUVsUixPQUFPLEVBQUM7WUFBUyxHQUN2QzFCLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQ2IsSUFBSSxDQUNYLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQXRCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyVCxLQUFBLEdBQUEzVCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBRUEsSUFBQTJMLEtBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNPO1VBQVcsU0FBVWtYLGFBQWFBLENBQUM7WUFBRXBPLElBQUksRUFBRXJJLFFBQVE7WUFBRTZKLEtBQUs7WUFBRXlNO1VBQWdCLENBQUU7WUFDcEYsTUFBTSxDQUFDSSxNQUFNLEVBQUVuTCxTQUFTLENBQUMsR0FBR2pNLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTlDLElBQUFzRixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDckcsUUFBUSxDQUFDLEVBQUUsTUFBSztjQUMxQnVMLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUN2TCxRQUFRLENBQUNxSyxPQUFPLEVBQUUsT0FBTyxJQUFJO1lBRWxDLE1BQU1zTSxRQUFRLEdBQUc5UyxLQUFLLElBQUc7Y0FDeEJBLEtBQUssQ0FBQytTLGVBQWUsRUFBRTtjQUN2Qk4sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxPQUNDaFgsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtDLEdBQ25EN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0UsT0FBTyxFQUFFbVY7WUFBUSxnQkFBcUIsQ0FDdEMsRUFDVHJYLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNpUyxLQUFBLENBQUFJLElBQUk7Y0FDSm5TLFNBQVMsRUFBQyx3QkFBd0I7Y0FDbENULEtBQUssRUFBRTtnQkFBRVY7Y0FBUSxDQUFFO2NBQ25Cc0ssS0FBSyxFQUFFdEssUUFBUSxDQUFDcUssT0FBTztjQUN2QmtKLE9BQU8sRUFBRXJJLEtBQUEsQ0FBQTJMO1lBQVUsRUFDbEIsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBdlgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQXVYLE1BQUEsR0FBQXZYLE9BQUE7VUFFTyxNQUFNc1gsVUFBVSxHQUFHRSxLQUFLLElBQUc7WUFDakMsTUFBTTtjQUNMclcsS0FBSyxFQUFFO2dCQUFFVjtjQUFRLENBQUU7Y0FDbkI4UCxJQUFJO2NBQ0pqRztZQUFLLENBQ0wsR0FBR2tOLEtBQUs7WUFFVCxNQUFNQyxJQUFJLEdBQUduVCxLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ29CLGNBQWMsRUFBRTtjQUN0QmpGLFFBQVEsQ0FBQ2lYLFVBQVUsQ0FBQ3BOLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBQ0QsT0FDQ3ZLLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLGFBQ0MzQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxlQUFPNk8sSUFBSSxDQUFRLEVBQ2xCOVAsUUFBUSxDQUFDa1gsYUFBYSxLQUFLck4sS0FBSyxHQUNoQ3ZLLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUM2VixNQUFBLENBQUFLLElBQUk7Y0FBQ2hULElBQUksRUFBQyxPQUFPO2NBQUNpVCxNQUFNLEVBQUMsSUFBSTtjQUFDOU8sSUFBSSxFQUFDO1lBQVMsb0JBRXRDLEdBRVBoSixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDRSxPQUFPLEVBQUV3VixJQUFJO2NBQUU3UyxJQUFJLEVBQUMsTUFBTTtjQUFDb0IsUUFBUTtjQUFDNlIsTUFBTSxFQUFDLElBQUk7Y0FBQzdWLE9BQU8sRUFBQztZQUFTLHFCQUd6RSxDQUNHO1VBRVAsQ0FBQztVQUFDaUQsT0FBQSxDQUFBcVMsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCRixJQUFBdlgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBMLGtCQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQTJDLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUE2UixLQUFBLEdBQUE3UixPQUFBO1VBQ0EsSUFBQTRMLGNBQUEsR0FBQTVMLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUdNLFNBQVU2QixlQUFlQSxDQUFDO1lBQUVwQixRQUFRO1lBQUVLLE1BQU07WUFBRUMsU0FBUztZQUFFVDtVQUFLLENBQUU7WUFDckUsTUFBTTtjQUFFeUw7WUFBUyxDQUFFLEdBQUcsSUFBQTNMLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDeEMsTUFBTTtjQUFFdUk7WUFBSSxDQUFFLEdBQUd0SSxRQUFRO1lBQ3pCLE1BQU1nSCxRQUFRLEdBQUcxSCxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUdnTCxTQUFTLENBQUMsR0FBR2pNLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUFzRixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDckcsUUFBUSxDQUFDVSxLQUFLLENBQUMsRUFBRSxNQUFNNkssU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWhEO1lBRUEsTUFBTVcsWUFBWSxHQUFHQSxDQUFDO2NBQUUzRSxhQUFhLEVBQUVtRztZQUFNLENBQUUsS0FBSTtjQUNsRDFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDWjFHLFNBQVMsQ0FBQ0QsTUFBTSxJQUFHO2dCQUNsQixPQUFPO2tCQUFFLEdBQUdBLE1BQU07a0JBQUVLLEtBQUssRUFBRTtvQkFBRSxDQUFDNEssU0FBUyxHQUFHb0MsTUFBTSxDQUFDNUo7a0JBQUs7Z0JBQUUsQ0FBRTtjQUMzRCxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSTRILFlBQVksR0FBR3JMLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDNEssU0FBUyxDQUFDO1lBQzFDLE1BQU1LLFlBQVksR0FBd0IsRUFBRTtZQUU1QyxJQUFJTCxTQUFTLEtBQUssV0FBVyxJQUFJQSxTQUFTLEVBQUViLEVBQUUsS0FBSyxpQkFBaUIsRUFBRTtjQUNyRTtjQUNBa0IsWUFBWSxDQUFDN0MsT0FBTyxHQUFHO2dCQUN0QjtnQkFDQTNFLElBQUksRUFBRWpDLE1BQUEsQ0FBQWlELEtBQUssQ0FBQ0MsT0FBTztnQkFDbkI1RSxLQUFLLEVBQUVYLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQytQLGVBQWU7Z0JBQ3BDaFEsT0FBTyxFQUFFLE1BQUFBLENBQU9xQyxLQUFLLEVBQUVnRyxLQUFLLEVBQUV4QixJQUFJLEtBQUk7a0JBQ3JDLE1BQU1vSixPQUFPLEdBQUcsSUFBSUwsS0FBQSxDQUFBTSxjQUFjLEVBQUU7a0JBQ3BDLE1BQU0xUixRQUFRLENBQUMyUixjQUFjLENBQUM5SCxLQUFLLEVBQUV4QixJQUFJLENBQUM7a0JBQzFDL0UsVUFBVSxDQUFDTixVQUFVLENBQUMsTUFBSztvQkFDMUJ5TyxPQUFPLENBQUNHLE9BQU8sRUFBRTtrQkFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztrQkFFUixPQUFPSCxPQUFPO2dCQUNmO2VBQ0E7O1lBR0YsT0FDQ25TLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUEzQixNQUFBLENBQUFhLE9BQUEsQ0FBQXNJLFFBQUEsUUFFQ25KLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNnSyxrQkFBQSxDQUFBYyxpQkFBaUI7Y0FDakJ0SyxPQUFPLEVBQUVrSyxZQUFZO2NBQ3JCdEwsTUFBTSxFQUFFcUwsWUFBWTtjQUNwQk0sSUFBSSxFQUFFZCxLQUFBLENBQUFlLFVBQVU7Y0FDaEJ2TCxLQUFLLEVBQUU7Z0JBQUU0SCxJQUFJLEVBQUVnRDtjQUFTLENBQUU7Y0FDMUJZLFlBQVksRUFBRUEsWUFBWTtjQUMxQkMsU0FBUyxFQUFFYjtZQUFTLEdBRXBCaE0sTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2tLLGNBQUEsQ0FBQWlCLGtCQUFrQixPQUFHLENBQ0gsQ0FDbEI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REEsSUFBQTlNLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwTCxrQkFBQSxHQUFBMUwsT0FBQTtVQUlBLElBQUE4WCxRQUFBLEdBQUE5WCxPQUFBO1VBQ0EsSUFBQStYLFdBQUEsR0FBQS9YLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFXLFNBQVUwTSxVQUFVQSxDQUFDO1lBQUU1RCxJQUFJO1lBQUV3QjtVQUFLLENBQUU7WUFDckQsTUFBTTtjQUFFbko7WUFBSyxDQUFFLEdBQUcsSUFBQXVLLGtCQUFBLENBQUFzQiwyQkFBMkIsR0FBRTtZQUMvQyxNQUFNO2NBQUV2TTtZQUFRLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3ZDLE1BQU0sQ0FBQ3dYLGNBQWMsRUFBRWpCLGdCQUFnQixDQUFDLEdBQUdoWCxNQUFBLENBQUFhLE9BQUssQ0FBQ0ksUUFBUSxDQUFDRyxLQUFLLENBQUNtUixnQkFBZ0IsS0FBS2hJLEtBQUssQ0FBQztZQUUzRixNQUFNN0gsSUFBSSxHQUFHLE9BQU9xRyxJQUFJLEtBQUssUUFBUSxHQUFHQSxJQUFJLENBQUNyRyxJQUFJLEdBQUdxRyxJQUFJO1lBQ3hELE1BQU1tUCxpQkFBaUIsR0FBRzlXLEtBQUssQ0FBQ21SLGdCQUFnQixLQUFLaEksS0FBSyxJQUFJME4sY0FBYztZQUM1RXZULE9BQU8sQ0FBQ3VMLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZixPQUNDalEsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQTNCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0ksUUFBQSxRQUNDbkosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2dLLGtCQUFBLENBQUF1QixxQkFBcUI7Y0FBQ25FLElBQUksRUFBRXJHLElBQUk7Y0FBRTZILEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ2xEbkosS0FBSyxDQUFDb0ksT0FBTyxJQUFJeEosTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ29XLFFBQUEsQ0FBQVosYUFBYTtjQUFDSCxnQkFBZ0IsRUFBRUEsZ0JBQWdCO2NBQUVqTyxJQUFJLEVBQUVBLElBQUk7Y0FBRXdCLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ2hHMk4saUJBQWlCLElBQUlsWSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDcVcsV0FBQSxDQUFBakIsVUFBVTtjQUFDclcsUUFBUSxFQUFFQSxRQUFRO2NBQUVzVyxnQkFBZ0IsRUFBRUE7WUFBZ0IsRUFBSSxDQUMxRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBaFgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBMLGtCQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTJDLE1BQUEsR0FBQTNDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVNk0sa0JBQWtCQSxDQUFDO1lBQUVxTCxZQUFZLEdBQUc7VUFBSSxDQUFFO1lBQ3pELE1BQU07Y0FBRTFTLG9CQUFvQjtjQUFFdUcsU0FBUztjQUFFekw7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNyRSxNQUFNO2NBQUUwTTtZQUFjLENBQUUsR0FBRyxJQUFBeEIsa0JBQUEsQ0FBQXNCLDJCQUEyQixHQUFFO1lBRXhELE9BQ0NqTixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0UsR0FDaEY3QixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdkIsV0FBQSxDQUFBNEIsTUFBTTtjQUFDNkMsSUFBSSxFQUFDLEtBQUs7Y0FBQzVDLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO2NBQUMvRCxPQUFPLEVBQUVpTDtZQUFjLEdBQ25FNU0sS0FBSyxDQUFDK00sV0FBVyxDQUFDQyxHQUFHLENBQ2QsRUFDUjRLLFlBQVksSUFDWm5ZLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUM2QyxJQUFJLEVBQUVqQyxNQUFBLENBQUFpRCxLQUFLLENBQUNDLE9BQU87Y0FBRTdELE9BQU8sRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNdUQsb0JBQW9CLENBQUMsV0FBVztZQUFDLEdBQzdGbEYsS0FBSyxDQUFDK00sV0FBVyxDQUFDbEcsTUFBTSxDQUUxQixDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFwSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBMFUsZ0JBQUEsR0FBQTFVLE9BQUE7VUFDTSxTQUFVa1AsZ0JBQWdCQSxDQUFDO1lBQUVyTTtVQUFJLENBQUU7WUFDeEMsTUFBTTtjQUFFL0IsTUFBTTtjQUFFUixLQUFLO2NBQUVHLFFBQVE7Y0FBRWdOO1lBQVEsQ0FBRSxHQUFHLElBQUFyTixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRWhFLE1BQU15QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFSixJQUFJO2NBQUUwQjtZQUFLLENBQUUsS0FBSTtjQUN4Q2tKLFFBQVEsQ0FBQztnQkFBRXRNLEtBQUssRUFBRTtrQkFBRSxHQUFHTCxNQUFNLENBQUNLLEtBQUs7a0JBQUUsQ0FBQzBCLElBQUksR0FBRzBCO2dCQUFLO2NBQUUsQ0FBRSxDQUFDO1lBQ3hELENBQUM7WUFFRCxNQUFNQSxLQUFLLEdBQUc5RCxRQUFRLENBQUNVLEtBQUssQ0FBQzBCLElBQUksQ0FBQyxJQUFJdkMsS0FBSyxDQUFDYSxLQUFLLENBQUMwQixJQUFJLENBQUMsQ0FBQzBGLFdBQVc7WUFDbkUsT0FDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBTzhJLE9BQU8sRUFBQztZQUFFLEdBQUVsSyxLQUFLLENBQUNhLEtBQUssQ0FBQzBCLElBQUksQ0FBQyxDQUFDeUYsS0FBSyxDQUFTLEVBQ25EdkksTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2dULGdCQUFBLENBQUE5UixlQUFlO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFSSxNQUFNLEVBQUVBO1lBQU0sR0FDekNzQixLQUFLLENBQ1csQ0FDYjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBeEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTRPLGNBQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUNNLFNBQVVtWSxZQUFZQSxDQUFDO1lBQUV0VjtVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFcEM7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUN2QyxJQUFBOEYsTUFBQSxDQUFBUSxTQUFTLEVBQ1IsQ0FBQ3JHLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDLEVBQ2hCLE1BQUs7Y0FDSnNELE9BQU8sQ0FBQ3VMLEdBQUcsQ0FBQyxFQUFFLEVBQUV2UCxRQUFRLENBQUNVLEtBQUssQ0FBQ0MsT0FBTyxFQUFFLENBQUM7WUFDMUMsQ0FBQyxFQUNELGlCQUFpQixDQUNqQjtZQUVELE9BQ0NyQixNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxjQUNDM0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ2tOLGNBQUEsQ0FBQUksVUFBVTtjQUFDbk0sSUFBSSxFQUFFQSxJQUFJO2NBQUVvTSxRQUFRLEVBQUVBLENBQUEsS0FBTXhLLE9BQU8sQ0FBQ3VMLEdBQUcsQ0FBQyxXQUFXO1lBQUMsRUFBSSxDQUMvRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBalEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXFHLEdBQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBc0csTUFBQSxHQUFBdEcsT0FBQTtVQUVNLFNBQVVnUCxVQUFVQSxDQUFDO1lBQUVuTSxJQUFJO1lBQUVvTTtVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFeE8sUUFBUTtjQUFFSDtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzlDLE1BQU15QixPQUFPLEdBQUcsTUFBTXFDLEtBQUssSUFBRztjQUM3QixJQUFJO2dCQUNILE1BQU03RCxRQUFRLENBQUNVLEtBQUssQ0FBQ2lJLFFBQVEsQ0FBQ3ZHLElBQUksQ0FBQztlQUNuQyxDQUFDLE9BQU8yQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxNQUFNLENBQUNxQyxRQUFRLEVBQUV2QixXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDSSxRQUFRLENBQUNQLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDMEYsUUFBUSxDQUFDO1lBQ3ZFLE1BQU0sR0FBRzhJLE9BQU8sQ0FBQyxHQUFHNVAsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDVSxLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO1lBRTVELElBQUFrRixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDckcsUUFBUSxDQUFDb04sU0FBUyxDQUFDLEVBQUUsTUFBSztjQUNwQ3ZJLFdBQVcsQ0FBQzdFLFFBQVEsQ0FBQ29OLFNBQVMsQ0FBQ2hILFFBQVEsQ0FBQztjQUN4QzhJLE9BQU8sQ0FBQ2xQLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixPQUNDckIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQzJFLEdBQUEsQ0FBQXVKLFNBQVM7Y0FBQ25OLElBQUksRUFBRW5DLEtBQUssQ0FBQ3dCLFVBQVUsQ0FBQytOLEtBQUssQ0FBQzVPLEtBQUs7Y0FBRUMsV0FBVyxFQUFFWixLQUFLLENBQUN3QixVQUFVLENBQUMrTixLQUFLLENBQUMzTztZQUFXLEdBQzdGbkIsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQTRCLEdBQzFDN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsQ0FBQ3ZCLFdBQUEsQ0FBQTRCLE1BQU07Y0FBQ0UsT0FBTyxFQUFFQSxPQUFPO2NBQUVELE9BQU8sRUFBQztZQUFTLEdBQ3pDMUIsS0FBSyxDQUFDNEIsT0FBTyxDQUFDa0gsUUFBUSxDQUNmLENBQ0osRUFDTnJKLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUE0QixHQUMxQzdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUN2QixXQUFBLENBQUE0QixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNnRSxRQUFRO2NBQUMvRCxPQUFPLEVBQUVnTjtZQUFRLEdBQ2xEM08sS0FBSyxDQUFDNEIsT0FBTyxDQUFDeU0sTUFBTSxDQUNiLENBQ0osRUFFTjVPLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUMyRSxHQUFBLENBQUFZLGdCQUFnQjtjQUFDSixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUM3QjtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBOUcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTBVLGdCQUFBLEdBQUExVSxPQUFBO1VBQ00sU0FBVW9ZLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFdFgsTUFBTTtjQUFFUixLQUFLO2NBQUVHLFFBQVE7Y0FBRWdOO1lBQVEsQ0FBRSxHQUFHLElBQUFyTixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRWhFLE1BQU15QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFSixJQUFJO2NBQUUwQjtZQUFLLENBQUUsS0FBSTtjQUN4Q2tKLFFBQVEsQ0FBQztnQkFBRXRNLEtBQUssRUFBRTtrQkFBRSxDQUFDMEIsSUFBSSxHQUFHMEI7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDdkMsQ0FBQztZQUVELE9BQ0N4RSxNQUFBLENBQUFhLE9BQUEsQ0FBQWMsYUFBQSxjQUNDM0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUEsYUFBS3BCLEtBQUssQ0FBQ2EsS0FBSyxDQUFDRixLQUFLLENBQU0sRUFDM0JSLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDaVQsVUFBVSxDQUFDL0osR0FBRyxDQUFDLENBQUNnTyxRQUFRLEVBQUUvTixLQUFLLEtBQUk7Y0FDbEQsTUFBTWhDLEtBQUssR0FBRyxDQUFDN0csU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzJMLFFBQVEsQ0FBQzNNLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDa1gsUUFBUSxDQUFDLENBQUMsR0FDbkUvWCxLQUFLLENBQUNhLEtBQUssQ0FBQ21YLFNBQVMsR0FDckJ4WCxNQUFNLENBQUNLLEtBQUssQ0FBQ2tYLFFBQVEsQ0FBQztjQUN6QixPQUNDdFksTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Z0JBQUs2SSxHQUFHLEVBQUVEO2NBQUssR0FDZHZLLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNnVCxnQkFBQSxDQUFBOVIsZUFBZTtnQkFBQ0MsSUFBSSxFQUFFd1YsUUFBUTtnQkFBRXBWLE1BQU0sRUFBRUE7Y0FBTSxHQUM3Q3FGLEtBQUssQ0FDVyxDQUNiO1lBRVIsQ0FBQyxDQUFDLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQXZJLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEwVSxnQkFBQSxHQUFBMVUsT0FBQTtVQUNNLFNBQVUwVyxzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUFFNVYsTUFBTTtjQUFFUixLQUFLO2NBQUVHLFFBQVE7Y0FBRWdOO1lBQVEsQ0FBRSxHQUFHLElBQUFyTixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRWhFLE1BQU15QyxNQUFNLEdBQUcsTUFBQUEsQ0FBTztjQUFFSixJQUFJO2NBQUUwQjtZQUFLLENBQUUsS0FBSTtjQUN4Q2tKLFFBQVEsQ0FBQztnQkFBRXRNLEtBQUssRUFBRTtrQkFBRSxDQUFDMEIsSUFBSSxHQUFHMEI7Z0JBQUs7Y0FBRSxDQUFFLENBQUM7WUFDdkMsQ0FBQztZQUVELElBQUksQ0FBQzlELFFBQVEsQ0FBQ1UsS0FBSyxDQUFDaVQsVUFBVSxDQUFDaEgsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUVqRSxNQUFNN0ksS0FBSyxHQUFHekQsTUFBTSxDQUFDSyxLQUFLLENBQUNtWCxTQUFTLElBQUloWSxLQUFLLENBQUNhLEtBQUssQ0FBQ21YLFNBQVMsQ0FBQy9QLFdBQVc7WUFDekUsT0FDQ3hJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFjLGFBQUE7Y0FBTzhJLE9BQU8sRUFBQztZQUFFLEdBQUVsSyxLQUFLLENBQUNhLEtBQUssQ0FBQ21YLFNBQVMsQ0FBQ2hRLEtBQUssQ0FBUyxFQUN2RHZJLE1BQUEsQ0FBQWEsT0FBQSxDQUFBYyxhQUFBLENBQUNnVCxnQkFBQSxDQUFBOVIsZUFBZTtjQUFDQyxJQUFJLEVBQUMsV0FBVztjQUFDSSxNQUFNLEVBQUVBO1lBQU0sR0FDOUNzQixLQUFLLENBQ1csQ0FDYjtVQUVSIn0=