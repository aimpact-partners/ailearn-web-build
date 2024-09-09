System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.6-dev.19/components/icons", "@aimpact/ailearn-app@0.1.6-dev.19/main-layout.widget", "@aimpact/ailearn-app@0.1.6-dev.19/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/ailearn-app@0.1.6-dev.19/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_2 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp016Dev19ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp016Dev19ComponentsIcons;
    }, function (_aimpactAilearnApp016Dev19MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev19MainLayoutWidget;
    }, function (_aimpactAilearnApp016Dev19ModulesManagementRefinamentCode) {
      dependency_5 = _aimpactAilearnApp016Dev19ModulesManagementRefinamentCode;
    }, function (_pragmateUi100Beta6Components) {
      dependency_6 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_7 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_8 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Image) {
      dependency_9 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_10 = _pragmateUi100Beta6Alert;
    }, function (_aimpactAilearnApp016Dev19ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev19ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.19"], ["@aimpact/ailearn-app", "0.1.6-dev.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.19/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.19/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 738587711,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiX3JlZmluYW1lbnQiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHRzIiwib25HZW5lcmF0ZSIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInRvZ2dsZU1vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIkxheW91dEJyb2tlciIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwiUmVmaW5lbWVudE1vZGFsIiwicmVxdWlyZWQiLCJvbkNvbnN1bWUiLCJnbG9iYWxUZXh0cyIsImNvbmZpcm0iLCJub3RlcyIsIl9jb21wb25lbnRzIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9pbWFnZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwibWVzc2FnZSIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsImVudGl0eSIsInN1Z2dlc3Rpb25zIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZU1lbW8iLCJQcm92aWRlciIsIkVudGl0eUltYWdlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJvbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsIm9uQ2FuY2VsIiwiYWN0aW9ucyIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJDb25maXJtTW9kYWwiLCJ0ZXh0IiwiX2Zvcm0iLCJfYWlCdXR0b24iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwiRm9ybSIsImVycm9ycyIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbW9kYWxzL2NvbmZpcm0udHN4IiwiL3RzL21vZGFscy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3Vy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