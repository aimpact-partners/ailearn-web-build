System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.39/components/icons", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.39/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.39/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0039ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0039ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0039CoinsLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0039CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_7 = _pragmateUi011Form;
    }, function (_pragmateUi011Image) {
      dependency_8 = _pragmateUi011Image;
    }, function (_pragmateUi011Alert) {
      dependency_9 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0039ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0039ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_12 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.39"], ["@aimpact/ailearn-app", "0.0.39"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.39/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/coins-layout.widget', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.39/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1327964753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _refinementModal = require("./modals/refinement-modal");
          var _context = require("./context");
          var _display = require("./display");
          function CoverImageActions({}) {
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
        hash: 1991588045,
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
        hash: 849537479,
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
            entity,
            type,
            suggestions,
            onGenerate
          }) {
            const [image, setImage] = _react.default.useState(picture);
            const [fetching, setFetching] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const value = _react.default.useMemo(() => ({
              picture: image,
              setImage,
              title,
              description,
              fetching,
              suggestions,
              setFetching,
              onGenerate,
              texts: texts
            }), [picture, textsReady]);
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
        hash: 2772671465,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2hvd0Rpc3BsYXlQaWN0dXJlIiwic2V0U2hvd0Rpc3BsYXlQaWN0dXJlIiwidG9nZ2xlTW9kYWwiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZURpc3BsYXlQaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaWNvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX2NvbXBvbmVudHMiLCJfY29pbnNMYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2ltYWdlIiwib25HZW5lcmF0ZSIsInRleHRzIiwiTW9kYWwiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJBbGVydCIsInR5cGUiLCJfdWkiLCJfYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5Iiwic3VnZ2VzdGlvbnMiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwidXNlTWVtbyIsIlByb3ZpZGVyIiwiRW50aXR5SW1hZ2UiLCJQcm9jZXNzQ29udGFpbmVyIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsIm9uQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwib25DYW5jZWwiLCJhY3Rpb25zIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIkNvbmZpcm1Nb2RhbCIsInRleHQiLCJzdWJ0aXRsZSIsIl9mb3JtIiwiX2FpQnV0dG9uIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwibm90ZXMiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImVycm9ycyIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbW9kYWxzL2NvbmZpcm0udHN4IiwiL3RzL21vZGFscy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7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