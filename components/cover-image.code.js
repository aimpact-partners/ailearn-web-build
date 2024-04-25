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
        hash: 2112050744,
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
            console.log(99, _icons2.ICONS.aiStars);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figcaption", {
              className: "actions",
              onClick: toggleDisplayPicture
            }, _react.default.createElement(_icons2.AppIconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwiSUNPTlMiLCJhaVN0YXJzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJpY29uIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwiRGlzcGxheVBpY3R1cmUiLCJzaG93Iiwib25DbG9zZSIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJfY29tcG9uZW50cyIsIl9jb2luc0xheW91dCIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIkFJSWNvbkJ1dHRvbiIsIl9tb2RhbCIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0cyIsInNldE9wZW5Db25maXJtIiwib25DYW5jZWwiLCJhY3Rpb25zIiwibGFiZWwiLCJjYW5jZWwiLCJDb25maXJtTW9kYWwiLCJ0aXRsZSIsInRleHQiLCJzdWJ0aXRsZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW1hZ2UiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsImRlc2NyaXB0aW9uIiwic3VnZ2VzdGlvbnMiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9mb3JtIiwiX2FpQnV0dG9uIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwibm90ZXMiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwibWVzc2FnZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb25maXJtIiwib25DbGlja0FjdGlvbiIsInRpdGxlTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiRm9ybSIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsImdlbmVyYXRpbmciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbmZpcm0udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdz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