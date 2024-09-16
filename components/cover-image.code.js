System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.6-dev.31/components/icons", "@aimpact/ailearn-app@0.1.6-dev.31/main-layout.widget", "@aimpact/ailearn-app@0.1.6-dev.31/modules/management/refinament.code", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/ailearn-app@0.1.6-dev.31/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev31ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp016Dev31ComponentsIcons;
    }, function (_aimpactAilearnApp016Dev31MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev31MainLayoutWidget;
    }, function (_aimpactAilearnApp016Dev31ModulesManagementRefinamentCode) {
      dependency_5 = _aimpactAilearnApp016Dev31ModulesManagementRefinamentCode;
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
    }, function (_aimpactAilearnApp016Dev31ComponentsUi) {
      dependency_11 = _aimpactAilearnApp016Dev31ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.31"], ["@aimpact/ailearn-app", "0.1.6-dev.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.31/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.31/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 714494949,
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
        hash: 3432521565,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9tYWluTGF5b3V0IiwiX3JlZmluYW1lbnQiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJwaWN0dXJlIiwic3VnZ2VzdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGV4dHMiLCJvbkdlbmVyYXRlIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2hvd0Rpc3BsYXlQaWN0dXJlIiwic2V0U2hvd0Rpc3BsYXlQaWN0dXJlIiwidG9nZ2xlTW9kYWwiLCJ0b2dnbGVEaXNwbGF5UGljdHVyZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwib3duZXIiLCJjcmVkaXRzIiwiY29uc3VtZUNvaW5zIiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJ0aXRsZUxhYmVsIiwiZGVzY3JpcHRpb25MYWJlbCIsInN1YnRpdGxlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaWNvbiIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJyZXF1aXJlZCIsInZhbHVlIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwibm90ZXMiLCJfY29tcG9uZW50cyIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfaW1hZ2UiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJBbGVydCIsInR5cGUiLCJfdWkiLCJfYWN0aW9ucyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJlbnRpdHkiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZU1lbW8iLCJQcm92aWRlciIsIkVudGl0eUltYWdlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJvbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsIm9uQ2FuY2VsIiwiYWN0aW9ucyIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJDb25maXJtTW9kYWwiLCJ0ZXh0IiwiX2Zvcm0iLCJfYWlCdXR0b24iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwiRm9ybSIsImVycm9ycyIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbW9kYWxzL2NvbmZpcm0udHN4IiwiL3RzL21vZGFscy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3Vy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