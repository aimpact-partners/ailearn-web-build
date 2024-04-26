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
        hash: 3013632575,
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
              className: "actions",
              onClick: toggleDisplayPicture
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
        hash: 1730650054,
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
            if (!textsReady) return null;
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
        hash: 1011268340,
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
                  console.log(1, picture);
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
              onClose: handleClose,
              closeBackdrop: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2hvd0Rpc3BsYXlQaWN0dXJlIiwic2V0U2hvd0Rpc3BsYXlQaWN0dXJlIiwidG9nZ2xlTW9kYWwiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZURpc3BsYXlQaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX2NvbXBvbmVudHMiLCJfY29pbnNMYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2ltYWdlIiwib25HZW5lcmF0ZSIsInRleHRzIiwiTW9kYWwiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWdnZXN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJnZW5lcmF0ZWQiLCJQcm9jZXNzQ29udGFpbmVyIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsIm9uQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwib25DYW5jZWwiLCJhY3Rpb25zIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIkNvbmZpcm1Nb2RhbCIsInRleHQiLCJzdWJ0aXRsZSIsIl9mb3JtIiwiX2FpQnV0dG9uIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwibm90ZXMiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwiZSIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ29uZmlybSIsIm9uQ2xpY2tBY3Rpb24iLCJ0aXRsZUxhYmVsIiwiZGVzY3JpcHRpb25MYWJlbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiVGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZW5lcmF0ZSIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2VuZXJhdGluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9tb2RhbHMvY29uZmlybS50c3giLCIvdHMvbW9kYWxzL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGws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