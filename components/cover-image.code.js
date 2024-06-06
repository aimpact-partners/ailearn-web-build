System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.46.dev-09/components/icons", "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev09ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0046Dev09ComponentsIcons;
    }, function (_aimpactAilearnApp0046Dev09MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev09MainLayoutWidget;
    }, function (_pragmateUi011Components) {
      dependency_5 = _pragmateUi011Components;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_7 = _pragmateUi011Form;
    }, function (_pragmateUi011Image) {
      dependency_8 = _pragmateUi011Image;
    }, function (_pragmateUi011Alert) {
      dependency_9 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0046Dev09ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_12 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2323474475,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          function CoverImageActions({}) {
            const {
              picture
            } = (0, _context.useModuleContext)();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const [showDisplayPicture, setShowDisplayPicture] = _react.default.useState(false);
            const toggleModal = () => _mainLayout.LayoutBroker.ensureCredits(event => {
              event?.stopPropagation();
              setShowRefiningModal(!showModal);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiX21haW5MYXlvdXQiLCJDb3ZlckltYWdlQWN0aW9ucyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZURpc3BsYXlQaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaWNvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX2NvbXBvbmVudHMiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfaW1hZ2UiLCJvbkdlbmVyYXRlIiwidGV4dHMiLCJNb2RhbCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwibWVzc2FnZSIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbnRpdHkiLCJzdWdnZXN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlByb2Nlc3NDb250YWluZXIiLCJDb25maXJtUmVmaW5lbWVudE1vZGFsIiwib25Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJvbkNhbmNlbCIsImFjdGlvbnMiLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsInN1YnRpdGxlIiwiX2Zvcm0iLCJfYWlCdXR0b24iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJub3RlcyIsInNldE5vdGVzIiwib3BlbkNvbmZpcm0iLCJoYW5kbGVDbG9zZSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ29uZmlybSIsIm9uQ2xpY2tBY3Rpb24iLCJ0aXRsZUxhYmVsIiwiZGVzY3JpcHRpb25MYWJlbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiZXJyb3JzIiwiVGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZW5lcmF0ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9tb2RhbHMvY29uZmlybS50c3giLCIvdHMvbW9kYWxzL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7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