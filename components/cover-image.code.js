System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.16/components/icons", "@aimpact/ailearn-app@0.1.6-dev.16/main-layout.widget", "@aimpact/ailearn-app@0.1.6-dev.16/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/image", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/ailearn-app@0.1.6-dev.16/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev16ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp016Dev16ComponentsIcons;
    }, function (_aimpactAilearnApp016Dev16MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev16MainLayoutWidget;
    }, function (_aimpactAilearnApp016Dev16ModulesManagementRefinamentCode) {
      dependency_5 = _aimpactAilearnApp016Dev16ModulesManagementRefinamentCode;
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
    }, function (_aimpactAilearnApp016Dev16ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev16ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.16"], ["@aimpact/ailearn-app", "0.1.6-dev.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.16/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.16/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2739297041,
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
              required: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiX3JlZmluYW1lbnQiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHRzIiwib25HZW5lcmF0ZSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInRvZ2dsZU1vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIkxheW91dEJyb2tlciIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwiUmVmaW5lbWVudE1vZGFsIiwicmVxdWlyZWQiLCJvbkNvbnN1bWUiLCJnbG9iYWxUZXh0cyIsImNvbmZpcm0iLCJub3RlcyIsIl9jb21wb25lbnRzIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9pbWFnZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwibWVzc2FnZSIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsImVudGl0eSIsInN1Z2dlc3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZU1lbW8iLCJQcm92aWRlciIsIkVudGl0eUltYWdlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJvbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsIm9uQ2FuY2VsIiwiYWN0aW9ucyIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJDb25maXJtTW9kYWwiLCJ0ZXh0IiwiX2Zvcm0iLCJfYWlCdXR0b24iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwiRm9ybSIsImVycm9ycyIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbW9kYWxzL2NvbmZpcm0udHN4IiwiL3RzL21vZGFscy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFFTSxTQUFVTyxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQUVDLE9BQU87Y0FBRUMsS0FBSztjQUFFQyxXQUFXO2NBQUVDLEtBQUs7Y0FBRUM7WUFBVSxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUM3RSxNQUFNLENBQUNDLFNBQVMsRUFBRUMsb0JBQW9CLENBQUMsR0FBR2hCLE1BQUEsQ0FBQWlCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvRCxNQUFNLENBQUNDLGtCQUFrQixFQUFFQyxxQkFBcUIsQ0FBQyxHQUFHcEIsTUFBQSxDQUFBaUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXpFLE1BQU1HLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTCxvQkFBb0IsQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFFMUQsTUFBTU8sb0JBQW9CLEdBQUdDLEtBQUssSUFBRztjQUNwQ0EsS0FBSyxFQUFFQyxlQUFlLEVBQUU7Y0FDeEJKLHFCQUFxQixDQUFDLENBQUNELGtCQUFrQixDQUFDO1lBQzNDLENBQUM7WUFFRCxNQUFNO2NBQUVNLEtBQUs7Y0FBRUMsT0FBTztjQUFFQztZQUFZLENBQUUsR0FBR3ZCLFdBQUEsQ0FBQXdCLFlBQVksQ0FBQ0MsS0FBSztZQUUzRCxNQUFNQyxVQUFVLEdBQUdwQixLQUFLLElBQUlFLEtBQUssQ0FBQ0YsS0FBSztZQUN2QyxNQUFNcUIsZ0JBQWdCLEdBQUdwQixXQUFXLElBQUlDLEtBQUssQ0FBQ29CLFFBQVE7WUFDdEQsT0FDQ2hDLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQWpDLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWlCLFFBQUEsUUFDQ2xDLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUE7Y0FBWUUsU0FBUyxFQUFDO1lBQVMsR0FHOUJuQyxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUM5QixPQUFBLENBQUFpQyxhQUFhO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNGLFNBQVMsRUFBQyxRQUFRO2NBQUNHLE9BQU8sRUFBRWpCLFdBQVc7Y0FBRWtCLElBQUksRUFBQztZQUFTLEVBQUcsRUFDM0Z2QyxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUMvQixNQUFBLENBQUFzQyxVQUFVO2NBQ1ZDLFFBQVEsRUFBRSxDQUFDaEMsT0FBTztjQUNsQjRCLE9BQU8sRUFBQyxTQUFTO2NBQ2pCRixTQUFTLEVBQUMsUUFBUTtjQUNsQkksSUFBSSxFQUFDLEtBQUs7Y0FDVkQsT0FBTyxFQUFFaEI7WUFBb0IsRUFDNUIsQ0FDVSxFQUNidEIsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDMUIsUUFBQSxDQUFBbUMsY0FBYztjQUFDQyxJQUFJLEVBQUV4QixrQkFBa0I7Y0FBRXlCLE9BQU8sRUFBRXRCO1lBQW9CLEVBQUksRUFDM0V0QixNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUM1QixXQUFBLENBQUF3QyxlQUFlO2NBQ2ZGLElBQUksRUFBRTVCLFNBQVM7Y0FDZitCLFFBQVE7Y0FDUnJCLEtBQUssRUFBRUEsS0FBSztjQUNaQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJxQixTQUFTLEVBQUVwQixZQUFZO2NBQ3ZCcUIsV0FBVyxFQUFFNUMsV0FBQSxDQUFBd0IsWUFBWSxDQUFDb0IsV0FBVztjQUNyQ0osT0FBTyxFQUFFdkIsV0FBVztjQUNwQjRCLE9BQU8sRUFBRSxDQUFDLENBQUN4QyxPQUFPO2NBQ2xCQyxLQUFLLEVBQUVvQixVQUFVO2NBQ2pCakIsVUFBVSxFQUFFQSxDQUFDO2dCQUFFcUM7Y0FBSyxDQUFFLEtBQUtyQyxVQUFVLENBQUNxQyxLQUFLLENBQUM7Y0FDNUN2QyxXQUFXLEVBQUVvQjtZQUFnQixFQUM1QixDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBL0IsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQWtELFdBQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLFNBQVVtRCxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRWYsT0FBTztZQUFFLEdBQUdnQjtVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1uRCxXQUFBLENBQUF3QixZQUFZLENBQUM0QixhQUFhLENBQUNsQixPQUFPLENBQUM7WUFDN0QsT0FDQ3RDLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQ2tCLFdBQUEsQ0FBQU0sTUFBTTtjQUFBLEdBQUtILEtBQUs7Y0FBRWYsSUFBSSxFQUFFckMsTUFBQSxDQUFBd0QsS0FBSyxDQUFDQyxPQUFPO2NBQUVyQixPQUFPLEVBQUVpQjtZQUFXLEdBQzFERixRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVU8sWUFBWUEsQ0FBQztZQUFFUCxRQUFRO1lBQUVmLE9BQU87WUFBRSxHQUFHZ0I7VUFBSyxDQUFFO1lBQ3RFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNbkQsV0FBQSxDQUFBd0IsWUFBWSxDQUFDNEIsYUFBYSxDQUFDbEIsT0FBTyxDQUFDO1lBQzdELE9BQ0N0QyxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUM5QixPQUFBLENBQUFxQyxVQUFVO2NBQUEsR0FBS2MsS0FBSztjQUFFZixJQUFJLEVBQUVyQyxNQUFBLENBQUF3RCxLQUFLLENBQUNDLE9BQU87Y0FBRXJCLE9BQU8sRUFBRWlCO1lBQVcsR0FDOURGLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBckQsTUFBQSxHQUFBQyxPQUFBO1VBZU8sTUFBTTRELGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUc3RCxNQUFBLENBQUFpQixPQUFLLENBQUM4QyxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMvRCxNQUFNakQsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTWQsTUFBQSxDQUFBaUIsT0FBSyxDQUFDK0MsVUFBVSxDQUFDSCxhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBaEQsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJ0RSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUVBLElBQUFpRSxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBRU0sU0FBVXlDLGNBQWNBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQUU7WUFDL0MsTUFBTTtjQUFFbkMsT0FBTztjQUFFSSxVQUFVO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFFekQsSUFBSSxDQUFDNkIsSUFBSSxFQUFFLE9BQU8sS0FBSztZQUN2QixPQUNDM0MsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDZ0MsTUFBQSxDQUFBRSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUV6QixJQUFJO2NBQUNSLFNBQVMsRUFBQywwQ0FBMEM7Y0FBQ1MsT0FBTyxFQUFFQTtZQUFPLEdBQ3RHNUMsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDaUMsTUFBQSxDQUFBRyxLQUFLO2NBQUNsQyxTQUFTLEVBQUMsZUFBZTtjQUFDbUMsR0FBRyxFQUFFN0Q7WUFBTyxFQUFJLENBQzFDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQVQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNFLE1BQUEsR0FBQXRFLE9BQUE7VUFFTSxTQUFVdUUsYUFBYUEsQ0FBQztZQUFFNUQsS0FBSztZQUFFNkQ7VUFBSyxDQUE2RDtZQUN4RyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsSUFBSUMsT0FBTyxHQUFHOUQsS0FBSyxDQUFDNkQsS0FBSyxDQUFDLEdBQUc3RCxLQUFLLENBQUM2RCxLQUFLLENBQUMsR0FBRzdELEtBQUssQ0FBQ0ssT0FBTztZQUV6RCxPQUFPakIsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDc0MsTUFBQSxDQUFBSSxLQUFLO2NBQUNDLElBQUksRUFBQztZQUFPLEdBQUVGLE9BQU8sQ0FBUztVQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBMUUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRFLEdBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUVBLElBQUE4RSxNQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLGVBQUEsR0FBQS9FLE9BQUE7VUFPTyxXQUxQOzs7OztVQUtpQixTQUFVZ0YsVUFBVUEsQ0FBQztZQUNyQ3ZFLEtBQUs7WUFDTEMsV0FBVztZQUNYRixPQUFPO1lBQ1B5RSxNQUFNO1lBQ05OLElBQUk7WUFDSk8sV0FBVztZQUNYdEU7VUFBVSxDQUNRO1lBRWxCLE1BQU0sQ0FBQ3VFLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdyRixNQUFBLENBQUFpQixPQUFLLENBQUNDLFFBQVEsQ0FBQ1QsT0FBTyxDQUFDO1lBQ2pELE1BQU0sQ0FBQzZFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd2RixNQUFBLENBQUFpQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDc0UsVUFBVSxFQUFFNUUsS0FBSyxDQUFDLEdBQUcsSUFBQW1FLE1BQUEsQ0FBQVUsUUFBUSxFQUFDVCxlQUFBLENBQUFVLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELE1BQU1DLEtBQUssR0FBRzVGLE1BQUEsQ0FBQWlCLE9BQUssQ0FBQzRFLE9BQU8sQ0FDMUIsT0FBTztjQUNOcEYsT0FBTyxFQUFFMkUsS0FBSztjQUNkQyxRQUFRO2NBQ1IzRSxLQUFLO2NBQ0xDLFdBQVc7Y0FDWDJFLFFBQVE7Y0FDUkgsV0FBVztjQUVYSSxXQUFXO2NBQ1gxRSxVQUFVO2NBQ1ZELEtBQUssRUFBRUE7YUFDUCxDQUFDLEVBQ0YsQ0FBQ0gsT0FBTyxFQUFFK0UsVUFBVSxDQUFDLENBQ3JCO1lBRUQsSUFBSSxDQUFDQSxVQUFVLEVBQUUsT0FBT3hGLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEVBQUc7WUFFaEUsT0FDQ25DLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzNCLFFBQUEsQ0FBQXVELGFBQWEsQ0FBQ2lDLFFBQVE7Y0FBQ0YsS0FBSyxFQUFFQTtZQUFLLEdBQ25DNUYsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBd0IsR0FDdENuQyxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUM0QyxHQUFBLENBQUFrQixXQUFXO2NBQUNuQixJQUFJLEVBQUVBLElBQUk7Y0FBRU4sR0FBRyxFQUFFN0QsT0FBTztjQUFFeUUsTUFBTSxFQUFFQSxNQUFNO2NBQUUvQyxTQUFTLEVBQUM7WUFBZ0IsRUFBRyxFQUNwRm5DLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzZDLFFBQUEsQ0FBQXRFLGlCQUFpQixPQUFHLEVBQ3JCUixNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUM0QyxHQUFBLENBQUFtQixnQkFBZ0I7Y0FBQ1YsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbkMsQ0FDa0I7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUF0RixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUVNLFNBQVVnRyxzQkFBc0JBLENBQUM7WUFBRXRELElBQUk7WUFBRXVELFNBQVM7WUFBRXREO1VBQU8sQ0FBRTtZQUNsRSxNQUFNO2NBQUVoQztZQUFLLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXBDLE1BQU0sR0FBR3FGLGNBQWMsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBaUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWhELElBQUksQ0FBQ3lCLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTXlELFFBQVEsR0FBR0EsQ0FBQSxLQUFNRCxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQzVDLE1BQU1FLE9BQU8sR0FBRztjQUNmcEQsT0FBTyxFQUFFO2dCQUNSWixPQUFPLEVBQUUsU0FBUztnQkFDbEJpRSxLQUFLLEVBQUUxRixLQUFLLENBQUN5RixPQUFPLENBQUNwRDtlQUNyQjtjQUNEc0QsTUFBTSxFQUFFO2dCQUFFRCxLQUFLLEVBQUUxRixLQUFLLENBQUN5RixPQUFPLENBQUNFLE1BQU07Z0JBQUVsRSxPQUFPLEVBQUUsU0FBUztnQkFBRW1FLFFBQVEsRUFBRTtjQUFJO2FBQ3pFO1lBQ0QsT0FDQ3hHLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQ2dDLE1BQUEsQ0FBQXdDLFlBQVk7Y0FDWlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCRSxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJDLE9BQU8sRUFBRUEsT0FBTztjQUNoQjFELElBQUk7Y0FDSmpDLEtBQUssRUFBRUUsS0FBSyxDQUFDcUMsT0FBTyxDQUFDdkMsS0FBSztjQUMxQmdHLElBQUksRUFBRTlGLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2pCO1lBQVEsRUFDM0I7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWhDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnRSxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQTBHLEtBQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBNEUsR0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRyxTQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQTRHLGNBQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUVNLFNBQVU0QyxlQUFlQSxDQUFDO1lBQUVGLElBQUk7WUFBRU0sT0FBTztZQUFFTDtVQUFPLENBQUU7WUFDekQsTUFBTTtjQUFFdUMsV0FBVztjQUFFekUsS0FBSztjQUFFQyxXQUFXO2NBQUUwRSxRQUFRO2NBQUV4RSxVQUFVO2NBQUVEO1lBQUssQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDM0YsTUFBTSxDQUFDd0UsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3ZGLE1BQUEsQ0FBQWlCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUN1RCxLQUFLLEVBQUVzQyxRQUFRLENBQUMsR0FBRy9HLE1BQUEsQ0FBQWlCLE9BQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQzFDLE1BQU0sQ0FBQ2dDLEtBQUssRUFBRThELFFBQVEsQ0FBQyxHQUFHaEgsTUFBQSxDQUFBaUIsT0FBSyxDQUFDQyxRQUFRLENBQUNpRSxXQUFXLElBQUksRUFBRSxDQUFDO1lBQzNELE1BQU0sQ0FBQzhCLFdBQVcsRUFBRWQsY0FBYyxDQUFDLEdBQUduRyxNQUFBLENBQUFpQixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDM0QsTUFBTWdHLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCZixjQUFjLENBQUMsS0FBSyxDQUFDO2NBQ3JCYSxRQUFRLENBQUM3QixXQUFXLENBQUM7Y0FDckJ2QyxPQUFPLEVBQUU7WUFDVixDQUFDO1lBRUQsTUFBTXVFLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUU3RixLQUFLLElBQUl5RixRQUFRLENBQUN6RixLQUFLLENBQUM4RixhQUFhLENBQUN6QixLQUFLLENBQUM7Y0FDdER0RCxPQUFPLEVBQUUsTUFBQUEsQ0FBQSxLQUFXO2dCQUNuQixJQUFJO2tCQUNINkQsY0FBYyxDQUFDLEtBQUssQ0FBQztrQkFDckJaLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ2pCLE1BQU05RSxPQUFPLEdBQVcsTUFBTUksVUFBVSxDQUFDcUMsS0FBSyxDQUFDO2tCQUUvQ04sT0FBTyxFQUFFO2tCQUVUeUMsUUFBUSxDQUFDNUUsT0FBTyxDQUFDO2lCQUNqQixDQUFDLE9BQU82RyxDQUFDLEVBQUU7a0JBQ1hQLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDNUMsT0FBTyxDQUFDO2lCQUNuQixTQUFTO2tCQUNUNkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsTUFBSztvQkFDdEJqQyxXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDOztjQUVUO2FBQ0E7WUFDRCxNQUFNa0MsYUFBYSxHQUFHQSxDQUFBLEtBQU10QixjQUFjLENBQUMsQ0FBQ2MsV0FBVyxDQUFDO1lBQ3hELE1BQU1TLGFBQWEsR0FBR3pFLE9BQU8sR0FBR3dFLGFBQWEsR0FBR04sTUFBTSxDQUFDN0UsT0FBTztZQUM5RCxNQUFNUixVQUFVLEdBQUdwQixLQUFLLElBQUlFLEtBQUssQ0FBQ0YsS0FBSztZQUN2QyxNQUFNcUIsZ0JBQWdCLEdBQUdwQixXQUFXLElBQUlDLEtBQUssQ0FBQ29CLFFBQVE7WUFDdEQsSUFBSSxDQUFDVyxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE9BQ0MzQyxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUNnQyxNQUFBLENBQUFFLEtBQUs7Y0FBQ3hCLElBQUk7Y0FBQ1IsU0FBUyxFQUFDLGNBQWM7Y0FBQ1MsT0FBTyxFQUFFc0UsV0FBVztjQUFFOUMsYUFBYSxFQUFFO1lBQUssR0FDOUVwRSxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLGlCQUNDakMsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxhQUFLSCxVQUFVLENBQU0sQ0FDYixFQUNUOUIsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxZQUFJRixnQkFBZ0IsQ0FBSyxFQUV6Qi9CLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzBFLEtBQUEsQ0FBQWdCLElBQUksUUFDSjNILE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUEsQ0FBQzRFLGNBQUEsQ0FBQXJDLGFBQWE7Y0FBQzVELEtBQUssRUFBRUEsS0FBSyxDQUFDZ0gsTUFBTTtjQUFFbkQsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDcER6RSxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUMwRSxLQUFBLENBQUFrQixRQUFRO2NBQUNDLElBQUksRUFBQyxPQUFPO2NBQUNsQyxLQUFLLEVBQUUxQyxLQUFLO2NBQUVrRSxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUFFVyxXQUFXLEVBQUVuSCxLQUFLLENBQUNzQyxLQUFLLENBQUM2RTtZQUFXLEVBQUksQ0FDbEcsRUFDUC9ILE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQWdCLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWtDLEdBQ25EbkMsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDMkUsU0FBQSxDQUFBeEQsUUFBUTtjQUFDZixPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVvRixhQUFhO2NBQUVqRixRQUFRLEVBQUUsQ0FBQ1M7WUFBSyxHQUNsRXRDLEtBQUssQ0FBQ3lGLE9BQU8sQ0FBQzJCLFFBQVEsQ0FDYixDQUNILEVBQ1RoSSxNQUFBLENBQUFpQixPQUFBLENBQUFnQixhQUFBLENBQUM2RSxRQUFBLENBQUFiLHNCQUFzQjtjQUFDdEQsSUFBSSxFQUFFc0UsV0FBVztjQUFFckUsT0FBTyxFQUFFNkUsYUFBYTtjQUFFdkIsU0FBUyxFQUFFaUIsTUFBTSxDQUFDN0U7WUFBTyxFQUFJLEVBQ2hHdEMsTUFBQSxDQUFBaUIsT0FBQSxDQUFBZ0IsYUFBQSxDQUFDNEMsR0FBQSxDQUFBbUIsZ0JBQWdCO2NBQUNWLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2pDO1VBRVY7Ozs7Ozs7Ozs7O1VDbkVBOztVQUVBMkMsTUFBQSxDQUFBQyxjQUFBLENBQUFwRSxPQUFBO1lBQ0E4QixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=