System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, CoverImage, __beyond_pkg, hmr;
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
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_7 = _pragmateUi011Form;
    }, function (_pragmateUi011Image) {
      dependency_8 = _pragmateUi011Image;
    }, function (_pragmateUi011Alert) {
      dependency_9 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_12 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/coins-layout.widget', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1460713809,
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
          var _context = require("./context");
          var _display = require("./display");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              picture
            } = (0, _context.useModuleContext)();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const [showDisplayPicture, setShowDisplayPicture] = _react.default.useState(false);
            const toggleModal = event => {
              event?.stopPropagation();
              setShowRefiningModal(!showModal);
            };
            const toggleDisplayPicture = event => {
              event?.stopPropagation();
              setShowDisplayPicture(!showDisplayPicture);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figcaption", {
              className: "actions",
              onClick: toggleDisplayPicture
            }, _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              className: "circle",
              onClick: toggleModal,
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: !picture,
              variant: "primary",
              className: "circle",
              icon: "eye",
              onClick: toggleDisplayPicture
            })), _react.default.createElement(_display.DisplayPicture, {
              show: showDisplayPicture,
              onClose: toggleDisplayPicture
            }), _react.default.createElement(_refinementModal.RefinementModal, {
              show: showModal,
              confirm: !!picture,
              onClose: toggleModal
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 3669703153,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
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
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./confirm
      *************************/

      ims.set('./confirm', {
        hash: 3286655261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmRefinementModal = ConfirmRefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("./context");
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

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3990638724,
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
        hash: 3282104964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DisplayPicture = DisplayPicture;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          function DisplayPicture({
            show,
            onClose
          }) {
            const {
              picture,
              onGenerate,
              texts
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
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
        hash: 3355718115,
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
            return _react.default.createElement(_alert.Alert, {
              type: "error"
            }, texts[error]);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 440409929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _actions = require("./actions");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
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
            suggestions,
            onGenerate
          }) {
            const [image, setImage] = _react.default.useState(picture);
            const [fetching, setFetching] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            const value = {
              picture: image,
              setImage,
              title,
              description,
              fetching,
              suggestions,
              setFetching,
              onGenerate,
              texts: texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "cover-image__container"
            }, picture && _react.default.createElement(_image.Image, {
              src: picture,
              className: "rounded circle"
            }), _react.default.createElement(_actions.CoverImageActions, {
              setFetching: setFetching,
              generated: !!picture
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./refinement-modal
      **********************************/

      ims.set('./refinement-modal', {
        hash: 3346204483,
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
          var _aiButton = require("./ai-button");
          var _errorRenderer = require("./error-renderer");
          var _context = require("./context");
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
                  console.error(e);
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
              onClose: handleClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, titleLabel)), _react.default.createElement("p", null, descriptionLabel), _react.default.createElement(_form.Form, null, _react.default.createElement(_errorRenderer.ErrorRenderer, {
              texts: texts,
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
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.generating
            })));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1353330430,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX2NvbXBvbmVudHMiLCJfY29pbnNMYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJCdXR0b24iLCJBSUljb25CdXR0b24iLCJfbW9kYWwiLCJDb25maXJtUmVmaW5lbWVudE1vZGFsIiwib25Db25maXJtIiwidGV4dHMiLCJzZXRPcGVuQ29uZmlybSIsIm9uQ2FuY2VsIiwiYWN0aW9ucyIsImxhYmVsIiwiY2FuY2VsIiwiQ29uZmlybU1vZGFsIiwidGl0bGUiLCJ0ZXh0Iiwic3VidGl0bGUiLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ltYWdlIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwiSW1hZ2UiLCJzcmMiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3IiLCJBbGVydCIsInR5cGUiLCJfdWkiLCJfYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJkZXNjcmlwdGlvbiIsInN1Z2dlc3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJQcm92aWRlciIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsIl9haUJ1dHRvbiIsIl9lcnJvclJlbmRlcmVyIiwiX2NvbmZpcm0iLCJzZXRFcnJvciIsIm5vdGVzIiwic2V0Tm90ZXMiLCJvcGVuQ29uZmlybSIsImhhbmRsZUNsb3NlIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJGb3JtIiwiVGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZW5lcmF0ZSIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2VuZXJhdGluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29uZmlybS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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