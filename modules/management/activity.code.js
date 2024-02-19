System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form/react-select", "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/chips", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.0.6/tabs"], function (_export, _context2) {
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['@aimpact/ailearn-app/components/ui/bullet-points-input', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/chips', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/tabs', dependency_18]]);
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
        hash: 2843840329,
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
            onClose,
            onConfirm
          }) {
            const {
              clearData
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Are you sure",
              text: "Your changes have not been saved. If you continue, you will lose them.",
              onClose: onClose,
              onCancel: onClose,
              onConfirm: () => {
                clearData();
              }
            });
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./components/content-editable
      *********************************************/

      ims.set('./components/content-editable', {
        hash: 1757035369,
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
              // onInput={handleContentChange}
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

      /***************************************************
      INTERNAL MODULE: ./components/refine-modal/questions
      ***************************************************/

      ims.set('./components/refine-modal/questions', {
        hash: 2888792354,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineQuestionsModal = RefineQuestionsModal;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _radioButton = require("./radio-button");
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
        hash: 2119811280,
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

      /***************************************
      INTERNAL MODULE: ./forms/multiple-choice
      ***************************************/

      ims.set('./forms/multiple-choice', {
        hash: 3706597499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceForm = MultipleChoiceForm;
          var _react = require("react");
          function MultipleChoiceForm() {
            return _react.default.createElement("div", null);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 880504539,
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
          var _context = require("./context");
          var _specs = require("./specs");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [, setUpdate] = _react.default.useState({});
            const [, setShowRefiningModal] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              title: activity.title,
              description: activity.description ?? '',
              specs: activity.specs
            });
            const [currentTab, setCurrentTab] = _react.default.useState(0);
            const {
              type
            } = activity;
            const itemsType = store.activityTypes.get(type);
            if (!itemsType) {
              throw new Error(`the activity type ${type} is not supported`);
            }
            const onClose = () => setShowRefiningModal(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const editData = data => {
              const finalData = {
                ...values,
                updated: true,
                ...data
              };
              setValues(finalData);
            };
            (0, _hooks.useBinder)([activity], () => setUpdate({}));
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                activity,
                texts,
                store,
                values,
                clearData: () => setValues({
                  title: '',
                  description: '',
                  specs: {}
                }),
                updated: values.updated,
                editData,
                currentTab,
                setCurrentTab,
                itemsType,
                setShowRefiningModal
              }
            }, _react.default.createElement(_headerTitle.HeaderTitle, null), _react.default.createElement(_specs.ActivitySpecs, null), _react.default.createElement(_tabs.ActivityFormTabs, {
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
        hash: 1301851231,
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
              console.log(target.value);
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
                className: "flex-container flex-center mt-30 mb-30"
              }, _react.default.createElement("h4", null, "or")), _react.default.createElement("div", {
                className: "flex-container flex-center"
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
        hash: 2627028777,
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
            console.log(0.2, itemsType);
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

      /***************************************
      INTERNAL MODULE: ./sections/header-title
      ***************************************/

      ims.set('./sections/header-title', {
        hash: 1306312184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          var _context = require("../context");
          var _coverImage = require("../components/cover-image");
          var _components = require("pragmate-ui/components");
          var _contentEditable = require("../components/content-editable");
          var _cancelModal = require("../components/cancel-modal");
          var _icons = require("pragmate-ui/icons");
          function HeaderTitle() {
            const {
              values,
              editData,
              texts,
              store,
              activity,
              updated
            } = (0, _context.useModuleContext)();
            const saveEditable = ({
              name,
              value
            }) => editData({
              [name]: value
            });
            const [showBackModal, setShowBackModal] = _react.default.useState(false);
            const title = [undefined, '', null].includes(values.title) ? texts.activities.form.title : values.title;
            const description = [undefined, '', null].includes(values.description) ? texts.activities.form.description : values.description;
            const onSave = async () => {
              await activity.set(values);
              editData({
                updated: false
              });
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
            }, texts.activities.types[activity.dataType.id])), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
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
                store.editActivity = undefined;
              }
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

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 3856666275,
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
          function ActivityFormTabs({
            texts
          }) {
            const {
              activity,
              itemsType
            } = (0, _context.useModuleContext)();
            const onChange = (event, index, a) => {};
            const [, setMaterials] = _react.default.useState(activity.materials.items);
            const panes = [];
            const tabs = [];
            (0, _hooks.useBinder)([activity.materials], () => setMaterials([...activity.materials.items]));
            activity.materials.items.forEach(item => {
              const labels = texts.activities.materials;
              const labelTab = typeof item === 'string' ? labels[item] : labels[item.name];
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
                if (item === 'bullet-points') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX29wdGlvbnMiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJBY3Rpdml0eUZvcm0iLCJ0ZXh0cyIsInN0b3JlIiwidXNlTW9kdWxlQ29udGV4dCIsImFjdGl2aXR5IiwiZWRpdEFjdGl2aXR5IiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNwZWNzIiwiZ2V0RGF0YSIsInNhdmUiLCJzZXQiLCJtb2RlbCIsInNhdmVEcmFmdCIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtIiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlPcHRpb25zIiwiYWN0aXZpdGllcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIl9tb2RhbCIsIkNhbmNlbENoYW5nZXNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJjbGVhckRhdGEiLCJDb25maXJtTW9kYWwiLCJzaG93IiwidGV4dCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiQ29udGVudEVkaXRhYmxlIiwibmFtZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNoaWxkcmVuIiwib25TYXZlIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRleHRDb250ZW50IiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJldmVudCIsInZhbHVlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNscyIsImljb24iLCJjb250cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiSWNvbkJ1dHRvbiIsImV4cG9ydHMiLCJfaWNvbnMyIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImdlbmVyYXRlSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJib3JkZXJlZCIsImRpc2FibGVkIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiX3VpIiwiX2hvb2tzIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJmZXRjaGluZyIsInVzZUJpbmRlciIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lcnJvciIsInJlZmluZSIsIm1vZHVsZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsInRleHRBY3Rpb25zIiwicHJvY2Vzc01lc3NhZ2VzIiwic2V0RXJyb3IiLCJvYnNlcnZhdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImNhbmNlbCIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2V0T3B0aW9ucyIsInR5cGUiLCJhbnN3ZXJzIiwicXVlc3Rpb25zIiwiX3F1ZXN0aW9ucyIsIl90b3BpY3MiLCJSZWZpbmVNb2RhbCIsImRhdGEiLCJyZW1vdmVJdGVtcyIsImdlbmVyYXRlU3VnZ2VzdGlvbnMiLCJGb3JtcyIsIlJlZmluZVF1ZXN0aW9uc01vZGFsIiwidG9waWNzIiwiUmVmaW5lVG9waWNzTW9kYWwiLCJjcml0ZXJpYXMiLCJfcmFkaW9CdXR0b24iLCJGcmFnbWVudCIsIk1vZGFsUmFkaW9CdXR0b24iLCJDaGVja2JveCIsImNoZWNrZWQiLCJfZ2V0T3B0aW9ucyIsImN1cnJlbnRWYWx1ZSIsInNlbGVjdGVkIiwib3V0cHV0IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJfcmVhY3RTZWxlY3QiLCJTZWxlY3RBY3Rpdml0eSIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJpdGVtcyIsImZvckVhY2giLCJpIiwiaWQiLCJhY3Rpdml0eUlkIiwicHVzaCIsInNlbGVjdENoYW5nZSIsIlJlYWN0U2VsZWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2J1bGxldFBvaW50c0lucHV0IiwiX2l0ZW0iLCJfb3B0aW9uc0hlYWRlciIsIkNvbnZlcnNhdGlvbkZvcm0iLCJ0eXBlcyIsIml0ZW1zVHlwZSIsInNldFVwZGF0ZSIsImhhc093blByb3BlcnR5Iiwib25JbnB1dENoYW5nZSIsImJ1bGxldFZhbHVlcyIsImFjdGlvbnNTcGVjcyIsIkljb24iLCJjb252ZXJzYXRpb24iLCJCdWxsZXRQb2ludHNJbnB1dCIsIkl0ZW0iLCJJdGVtT3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwiQnVsbGV0UG9pbnRzSGVhZGVyIiwiX2Zvcm0yIiwiQWN0aXZpdHlDb252ZXJzYXRpb25Gb3JtIiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiQnVsbGV0UG9pbnRzSW5wdXRJdGVtIiwiYWRkQnVsbGV0UG9pbnQiLCJjb3VsZEJlUmVmaW5lZCIsImluY2x1ZGVzIiwiYnVsbGV0UG9pbnQiLCJhZGQiLCJNdWx0aXBsZUNob2ljZUZvcm0iLCJfaGVhZGVyVGl0bGUiLCJfYmV5b25kX2NvbnRleHQiLCJfdGFicyIsIl9zcGVjcyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiYWN0aXZpdHlUeXBlcyIsImdldCIsIkVycm9yIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiZWRpdERhdGEiLCJmaW5hbERhdGEiLCJ1cGRhdGVkIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiSGVhZGVyVGl0bGUiLCJBY3Rpdml0eVNwZWNzIiwiQWN0aXZpdHlGb3JtVGFicyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX21hcmtkb3duIiwiQWN0aXZpdHlNYXRlcmlhbCIsIm1hdGVyaWFsIiwibWF0ZXJpYWxzIiwic2V0RGF0YSIsImdlbmVyYXRlIiwidGFyZ2V0IiwibG9nIiwiTWFya2Rvd24iLCJBbnN3ZXJGb3JtIiwidG9nZ2xlQW5zd2VyRm9ybSIsInNldFZhbHVlIiwib25BZGQiLCJhZGRPcHRpb24iLCJJbnB1dCIsIl9saXN0IiwiX2Fuc3dlckZvcm0iLCJPcHRpb25BbnN3ZXJzIiwic2hvd0Fuc3dlckZvcm0iLCJ1cGRhdGUiLCJvcGVuRm9ybSIsInN0b3BQcm9wYWdhdGlvbiIsIkxpc3QiLCJjb250cm9sIiwiQW5zd2VySXRlbSIsIl9jaGlwcyIsInByb3BzIiwiaXRlbSIsIm1hcmsiLCJzZXRDb3JyZWN0IiwiY29ycmVjdEFuc3dlciIsIkNoaXAiLCJzaXppbmciLCJfY29yZSIsImdlbmVyYXRlQW5zd2VycyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImdlbmVyYXRlQW5zd2VyIiwicmVzb2x2ZSIsIl9hbnN3ZXJzIiwiX2NvdmVySW1hZ2UiLCJfY29udGVudEVkaXRhYmxlIiwiX2NhbmNlbE1vZGFsIiwic2F2ZUVkaXRhYmxlIiwic2hvd0JhY2tNb2RhbCIsInNldFNob3dCYWNrTW9kYWwiLCJmb3JtIiwiYXR0cnMiLCJvbkNsb3NlTW9kYWwiLCJMaW5rIiwiYmFjayIsImRhdGFUeXBlIiwicHJvcGVydGllcyIsInByb3BlcnR5Iiwib2JqZWN0aXZlIiwiX21hdGVyaWFscyIsIl9hY3Rpdml0eSIsImEiLCJzZXRNYXRlcmlhbHMiLCJwYW5lcyIsInRhYnMiLCJsYWJlbHMiLCJsYWJlbFRhYiIsImFkZFRhYiIsIlRhYiIsInJlcXVpcmVkIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJQYW5lcyJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvY29tcG9uZW50cy9jYW5jZWwtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2Vycm9yLnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2dldC1vcHRpb25zLnRzIiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL2luZGV4LnRzeCIsIi90cy9jb21wb25lbnRzL3JlZmluZS1tb2RhbC9xdWVzdGlvbnMudHN4IiwiL3RzL2NvbXBvbmVudHMvcmVmaW5lLW1vZGFsL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvY29tcG9uZW50cy9yZWZpbmUtbW9kYWwvdG9waWNzLnRzeCIsIi90cy9jb21wb25lbnRzL3NlbGVjdC1hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9jb252ZXJzYXRpb24vZm9ybS50c3giLCIvdHMvY29udmVyc2F0aW9uL2luZGV4LnRzeCIsIi90cy9jb252ZXJzYXRpb24vaXRlbS50c3giLCIvdHMvY29udmVyc2F0aW9uL29wdGlvbnMtaGVhZGVyLnRzeCIsIi90cy9mb3Jtcy9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlci1mb3JtLnRzeCIsIi90cy9vcHRpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL29wdGlvbnMvYW5zd2Vycy9pdGVtLnRzeCIsIi90cy9vcHRpb25zL2luZGV4LnRzeCIsIi90cy9vcHRpb25zL2l0ZW0udHN4IiwiL3RzL29wdGlvbnMvb3B0aW9ucy1oZWFkZXIudHN4IiwiL3RzL3NlY3Rpb25zL2hlYWRlci10aXRsZS50c3giLCIvdHMvc3BlY3MvaW5kZXgudHN4IiwiL3RzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVLLFlBQVlBLENBQUE7WUFDM0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLFlBQVk7WUFFbkMsTUFBTUMsR0FBRyxHQUFHWixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdoQixNQUFB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