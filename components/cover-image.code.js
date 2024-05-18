System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32-beta.12/components/icons", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-beta.12/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.32-beta.12/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Beta12ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032Beta12ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Beta12CoinsLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0032Beta12CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_7 = _pragmateUi011Form;
    }, function (_pragmateUi011Image) {
      dependency_8 = _pragmateUi011Image;
    }, function (_pragmateUi011Alert) {
      dependency_9 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0032Beta12ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032Beta12ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_12 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.12"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/coins-layout.widget', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.12/components/cover-image.code');
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
        hash: 1181188230,
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
            if (!textsReady) return null;
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
        hash: 1479670904,
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
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1356207509,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2hvd0Rpc3BsYXlQaWN0dXJlIiwic2V0U2hvd0Rpc3BsYXlQaWN0dXJlIiwidG9nZ2xlTW9kYWwiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZURpc3BsYXlQaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaWNvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX2NvbXBvbmVudHMiLCJfY29pbnNMYXlvdXQiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2ltYWdlIiwib25HZW5lcmF0ZSIsInRleHRzIiwiTW9kYWwiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbnRpdHkiLCJzdWdnZXN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlByb2Nlc3NDb250YWluZXIiLCJDb25maXJtUmVmaW5lbWVudE1vZGFsIiwib25Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJvbkNhbmNlbCIsImFjdGlvbnMiLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsInN1YnRpdGxlIiwiX2Zvcm0iLCJfYWlCdXR0b24iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJub3RlcyIsInNldE5vdGVzIiwib3BlbkNvbmZpcm0iLCJoYW5kbGVDbG9zZSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb25maXJtIiwib25DbGlja0FjdGlvbiIsInRpdGxlTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJUZXh0YXJlYSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImdlbmVyYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9kaXNwbGF5LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21vZGFscy9jb25maXJtLnRzeCIsIi90cy9tb2RhbHMvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoi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