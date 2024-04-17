System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, CoverImage, __beyond_pkg, hmr;
  _export("CoverImage", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_pragmateUi011Modal) {
      dependency_5 = _pragmateUi011Modal;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_pragmateUi011Image) {
      dependency_7 = _pragmateUi011Image;
    }, function (_pragmateUi011Alert) {
      dependency_8 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['pragmate-ui/modal', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/image', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 3229746900,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
              event.stopPropagation();
              _coinsLayout.LayoutBroker.ensureCredits(() => setShowRefiningModal(!showModal));
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
        hash: 1186546780,
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
            if (!show) return null;
            const titleLabel = title || texts.title;
            const descriptionLabel = description || texts.subtitle;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: handleClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, titleLabel)), _react.default.createElement("span", null, descriptionLabel), _react.default.createElement(_form.Form, null, _react.default.createElement(_errorRenderer.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "notes",
              value: notes,
              onChange: events.onChange,
              label: texts.notes.label,
              placeholder: texts.notes.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_ui.AIButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2luc0xheW91dCIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsInRvZ2dsZURpc3BsYXlQaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkljb25CdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiZGlzYWJsZWQiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwiUmVmaW5lbWVudE1vZGFsIiwiY29uZmlybSIsIl9tb2RhbCIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0cyIsInNldE9wZW5Db25maXJtIiwib25DYW5jZWwiLCJhY3Rpb25zIiwibGFiZWwiLCJjYW5jZWwiLCJDb25maXJtTW9kYWwiLCJ0aXRsZSIsInRleHQiLCJzdWJ0aXRsZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW1hZ2UiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsImRlc2NyaXB0aW9uIiwic3VnZ2VzdGlvbnMiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9mb3JtIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwibm90ZXMiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwibWVzc2FnZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb25maXJtIiwib25DbGlja0FjdGlvbiIsInRpdGxlTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiRm9ybSIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiZ2VuZXJhdGluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2NvbmZpcm0udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFG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