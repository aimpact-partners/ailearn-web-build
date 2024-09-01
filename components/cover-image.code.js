System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.10/components/icons", "@aimpact/ailearn-app@0.1.6-dev.10/main-layout.widget", "@aimpact/ailearn-app@0.1.6-dev.10/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/image", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/ailearn-app@0.1.6-dev.10/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta2Icons) {
      dependency_2 = _pragmateUi100Beta2Icons;
    }, function (_aimpactAilearnApp016Dev10ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp016Dev10ComponentsIcons;
    }, function (_aimpactAilearnApp016Dev10MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev10MainLayoutWidget;
    }, function (_aimpactAilearnApp016Dev10ModulesManagementRefinamentCode) {
      dependency_5 = _aimpactAilearnApp016Dev10ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta2Components) {
      dependency_6 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_7 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Form) {
      dependency_8 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Image) {
      dependency_9 = _pragmateUi100Beta2Image;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_10 = _pragmateUi100Beta2Alert;
    }, function (_aimpactAilearnApp016Dev10ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev10ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.10"], ["@aimpact/ailearn-app", "0.1.6-dev.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.10/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.10/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1012004067,
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
            const {
              owner,
              credits,
              consumeCoins
            } = _mainLayout.LayoutBroker.model;
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
            }), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              owner: owner,
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
        hash: 3184932770,
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
        hash: 2541469158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiX3JlZmluYW1lbnQiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHRzIiwib25HZW5lcmF0ZSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInRvZ2dsZU1vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIkxheW91dEJyb2tlciIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwiUmVmaW5lbWVudE1vZGFsIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwibm90ZXMiLCJfY29tcG9uZW50cyIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfaW1hZ2UiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJBbGVydCIsInR5cGUiLCJfdWkiLCJfYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJlbnRpdHkiLCJzdWdnZXN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlByb2Nlc3NDb250YWluZXIiLCJDb25maXJtUmVmaW5lbWVudE1vZGFsIiwib25Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJvbkNhbmNlbCIsImFjdGlvbnMiLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIl9mb3JtIiwiX2FpQnV0dG9uIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwic2V0Tm90ZXMiLCJvcGVuQ29uZmlybSIsImhhbmRsZUNsb3NlIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb25maXJtIiwib25DbGlja0FjdGlvbiIsIkZvcm0iLCJlcnJvcnMiLCJUZXh0YXJlYSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImdlbmVyYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9kaXNwbGF5LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21vZGFscy9jb25maXJtLnRzeCIsIi90cy9tb2RhbHMvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQi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QUFBZ0IsYUFBQSxpQkFDQ2pDLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsYUFBS0gsVUFBVSxDQUFNLENBQ2IsRUFDVDlCLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsWUFBSUYsZ0JBQWdCLENBQUssRUFFekIvQixNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUN5RSxLQUFBLENBQUFnQixJQUFJLFFBQ0oxSCxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUMyRSxjQUFBLENBQUFyQyxhQUFhO2NBQUMzRCxLQUFLLEVBQUVBLEtBQUssQ0FBQytHLE1BQU07Y0FBRW5ELEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ3BEeEUsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDeUUsS0FBQSxDQUFBa0IsUUFBUTtjQUFDQyxJQUFJLEVBQUMsT0FBTztjQUFDbEMsS0FBSyxFQUFFMUMsS0FBSztjQUFFa0UsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FBRVcsV0FBVyxFQUFFbEgsS0FBSyxDQUFDcUMsS0FBSyxDQUFDNkU7WUFBVyxFQUFJLENBQ2xHLEVBQ1A5SCxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFrQyxHQUNuRG5DLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzBFLFNBQUEsQ0FBQXhELFFBQVE7Y0FBQ2QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFbUYsYUFBYTtjQUFFaEYsUUFBUSxFQUFFLENBQUNRO1lBQUssR0FDbEVyQyxLQUFLLENBQUN3RixPQUFPLENBQUMyQixRQUFRLENBQ2IsQ0FDSCxFQUNUL0gsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDNEUsUUFBQSxDQUFBYixzQkFBc0I7Y0FBQ3JELElBQUksRUFBRXFFLFdBQVc7Y0FBRXBFLE9BQU8sRUFBRTRFLGFBQWE7Y0FBRXZCLFNBQVMsRUFBRWlCLE1BQU0sQ0FBQzVFO1lBQU8sRUFBSSxFQUNoR3RDLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzJDLEdBQUEsQ0FBQW1CLGdCQUFnQjtjQUFDVixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNqQztVQUVWOzs7Ozs7Ozs7OztVQ25FQTs7VUFFQTJDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEUsT0FBQTtZQUNBOEIsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119