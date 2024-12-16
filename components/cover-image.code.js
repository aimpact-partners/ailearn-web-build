System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.2.17/components/icons", "@aimpact/ailearn-app@0.2.17/main-layout.widget", "@aimpact/ailearn-app@0.2.17/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.2.17/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, CoverImage, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    CoverImage: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0217ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0217ComponentsIcons;
    }, function (_aimpactAilearnApp0217MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0217MainLayoutWidget;
    }, function (_aimpactAilearnApp0217ModulesManagementRefinamentCode) {
      dependency_5 = _aimpactAilearnApp0217ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_7 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_9 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp0217ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0217ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.17"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.17/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/image', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.17/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 903378698,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _context = require("./context");
          var _display = require("./display");
          function CoverImageActions({}) {
            const {
              picture,
              suggestions,
              title,
              description,
              texts,
              onGenerate
            } = (0, _context.useModuleContext)();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const [showDisplayPicture, setShowDisplayPicture] = _react.default.useState(false);
            const toggleModal = () => setShowRefiningModal(!showModal);
            const toggleDisplayPicture = event => {
              event?.stopPropagation();
              setShowDisplayPicture(!showDisplayPicture);
            };
            let owner = null;
            let credits = null;
            let consumeCoins = null;
            if (_mainLayout.LayoutBroker.model) {
              owner = _mainLayout.LayoutBroker.model.owner;
              credits = _mainLayout.LayoutBroker.model.credits;
              consumeCoins = _mainLayout.LayoutBroker.model.consumeCoins;
            }
            const titleLabel = title || texts.title;
            const descriptionLabel = description || texts.subtitle;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figcaption", {
              className: "actions"
            }, _react.default.createElement(_icons2.AppIconButton, {
              variant: "primary",
              className: "circle",
              onClick: toggleModal,
              icon: "aiStars"
            }), _react.default.createElement(_icons.IconButton, {
              disabled: !picture,
              variant: "primary",
              className: "circle",
              icon: "eye",
              onClick: toggleDisplayPicture
            })), _react.default.createElement(_display.DisplayPicture, {
              show: showDisplayPicture,
              onClose: toggleDisplayPicture
            }), _mainLayout.LayoutBroker.model && _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              owner: owner,
              value: suggestions,
              credits: credits,
              onConsume: consumeCoins,
              globalTexts: _mainLayout.LayoutBroker.globalTexts,
              onClose: toggleModal,
              confirm: !!picture,
              title: titleLabel,
              onGenerate: ({
                notes
              }) => onGenerate(notes),
              description: descriptionLabel
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 86064447,
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
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
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
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 89558883,
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

      /*************************
      INTERNAL MODULE: ./display
      *************************/

      ims.set('./display', {
        hash: 2882496592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DisplayPicture = DisplayPicture;
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          function DisplayPicture({
            show,
            onClose
          }) {
            const {
              picture,
              onGenerate,
              texts,
              type,
              entity
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "refine-modal refine-modal--visualization",
              onClose: onClose
            }, _react.default.createElement(_image.Image, {
              className: "portrait-view",
              src: picture
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 4166111875,
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
            if (!error) return null;
            let message = texts[error] ? texts[error] : texts.default;
            return _react.default.createElement(_alert.Alert, {
              type: "error"
            }, message);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1776518059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _actions = require("./actions");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          /*bundle*/ /**
                      * useBinder([store.model], () => setImage(picture), 'image.generated');
                      * @param param0
                      * @returns
                      */
          function CoverImage({
            title,
            description,
            picture,
            entity,
            type,
            suggestions,
            onGenerate
          }) {
            const [image, setImage] = _react.default.useState(picture);
            const [fetching, setFetching] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            _react.default.useEffect(() => {
              setImage(picture);
            }, [picture]);
            const value = {
              picture: image,
              setImage,
              title,
              description,
              fetching,
              suggestions,
              type,
              entity,
              setFetching,
              onGenerate,
              texts: texts
            };
            if (!textsReady) return _react.default.createElement("div", {
              className: "cover-image-skeleton"
            });
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "cover-image__container"
            }, _react.default.createElement(_ui.EntityImage, {
              type: type,
              src: picture,
              entity: entity,
              className: "rounded circle"
            }), _react.default.createElement(_actions.CoverImageActions, null), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./modals/confirm
      ********************************/

      ims.set('./modals/confirm', {
        hash: 3279452274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmRefinementModal = ConfirmRefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          function ConfirmRefinementModal({
            show,
            onConfirm,
            onClose
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [, setOpenConfirm] = _react.default.useState(false);
            if (!show) return null;
            const onCancel = () => setOpenConfirm(false);
            const actions = {
              confirm: {
                variant: 'primary',
                label: texts.actions.confirm
              },
              cancel: {
                label: texts.actions.cancel,
                variant: 'primary',
                bordered: true
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onCancel,
              actions: actions,
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./modals/refinement-modal
      *****************************************/

      ims.set('./modals/refinement-modal', {
        hash: 4022374994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("../ai-button");
          var _errorRenderer = require("../error-renderer");
          var _context = require("../context");
          var _confirm = require("./confirm");
          function RefinementModal({
            show,
            confirm,
            onClose
          }) {
            const {
              suggestions,
              title,
              description,
              setImage,
              onGenerate,
              texts
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [notes, setNotes] = _react.default.useState(suggestions ?? '');
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const handleClose = () => {
              setOpenConfirm(false);
              setNotes(suggestions);
              onClose();
            };
            const events = {
              onChange: event => setNotes(event.currentTarget.value),
              onClick: async () => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  const picture = await onGenerate(notes);
                  onClose();
                  setImage(picture);
                } catch (e) {
                  setError(e.message);
                } finally {
                  window.setTimeout(() => {
                    setFetching(false);
                  }, 100);
                }
              }
            };
            const toggleConfirm = () => setOpenConfirm(!openConfirm);
            const onClickAction = confirm ? toggleConfirm : events.onClick;
            const titleLabel = title || texts.title;
            const descriptionLabel = description || texts.subtitle;
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: handleClose,
              closeBackdrop: false
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, titleLabel)), _react.default.createElement("p", null, descriptionLabel), _react.default.createElement(_form.Form, null, _react.default.createElement(_errorRenderer.ErrorRenderer, {
              texts: texts.errors,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "notes",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.notes.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-center mt-15"
            }, _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onClickAction,
              disabled: !notes
            }, texts.actions.generate)), _react.default.createElement(_confirm.ConfirmRefinementModal, {
              show: openConfirm,
              onClose: toggleConfirm,
              onConfirm: events.onClick
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 866614475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./index",
        "from": "CoverImage",
        "name": "CoverImage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'CoverImage') && _export("CoverImage", CoverImage = require ? require('./index').CoverImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiX3JlZmluYW1lbnQiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwic3VnZ2VzdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGV4dHMiLCJvbkdlbmVyYXRlIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2hvd0Rpc3BsYXlQaWN0dXJlIiwic2V0U2hvd0Rpc3BsYXlQaWN0dXJlIiwidG9nZ2xlTW9kYWwiLCJ0b2dnbGVEaXNwbGF5UGljdHVyZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwib3duZXIiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJ0aXRsZUxhYmVsIiwiZGVzY3JpcHRpb25MYWJlbCIsInN1YnRpdGxlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaWNvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJyZXF1aXJlZCIsInZhbHVlIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwibm90ZXMiLCJfY29tcG9uZW50cyIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW1hZ2UiLCJfbW9kYWwiLCJ0eXBlIiwiZW50aXR5IiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiSW1hZ2UiLCJzcmMiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3IiLCJtZXNzYWdlIiwiQWxlcnQiLCJfdWkiLCJfYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwiRW50aXR5SW1hZ2UiLCJQcm9jZXNzQ29udGFpbmVyIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsIm9uQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwib25DYW5jZWwiLCJhY3Rpb25zIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIkNvbmZpcm1Nb2RhbCIsInRleHQiLCJfZm9ybSIsIl9haUJ1dHRvbiIsIl9lcnJvclJlbmRlcmVyIiwiX2NvbmZpcm0iLCJzZXRFcnJvciIsInNldE5vdGVzIiwib3BlbkNvbmZpcm0iLCJoYW5kbGVDbG9zZSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ29uZmlybSIsIm9uQ2xpY2tBY3Rpb24iLCJGb3JtIiwiZXJyb3JzIiwiVGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZW5lcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9tb2RhbHMvY29uZmlybS50c3giLCIvdHMvbW9kYWxzL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3R5cGVzLnRzIl0sInNv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