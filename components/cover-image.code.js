System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, CoverImage, __beyond_pkg, hmr;
  _export("CoverImage", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_2 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Modal) {
      dependency_4 = _pragmateUi006Modal;
    }, function (_pragmateUi006Form) {
      dependency_5 = _pragmateUi006Form;
    }, function (_pragmateUi006Image) {
      dependency_6 = _pragmateUi006Image;
    }, function (_pragmateUi006Alert) {
      dependency_7 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_10 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/modal', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/alert', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1713950996,
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
        hash: 2991129866,
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
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "cover-image__container"
            }, picture && _react.default.createElement(_image.Image, {
              src: image,
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
        hash: 2392246401,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwiUmVmaW5lbWVudE1vZGFsIiwiY29uZmlybSIsIl9tb2RhbCIsIkNvbmZpcm1SZWZpbmVtZW50TW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0cyIsInNldE9wZW5Db25maXJtIiwib25DYW5jZWwiLCJhY3Rpb25zIiwibGFiZWwiLCJjYW5jZWwiLCJDb25maXJtTW9kYWwiLCJ0aXRsZSIsInRleHQiLCJzdWJ0aXRsZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW1hZ2UiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJJbWFnZSIsInNyYyIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsIkFsZXJ0IiwidHlwZSIsIl91aSIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiQ292ZXJJbWFnZSIsImRlc2NyaXB0aW9uIiwic3VnZ2VzdGlvbnMiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9mb3JtIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwibm90ZXMiLCJzZXROb3RlcyIsIm9wZW5Db25maXJtIiwiaGFuZGxlQ2xvc2UiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJlIiwibWVzc2FnZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb25maXJtIiwib25DbGlja0FjdGlvbiIsInRpdGxlTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiRm9ybSIsIlRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiQUlCdXR0b24iLCJkaXNhYmxlZCIsImdlbmVyYXRlIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJnZW5lcmF0aW5nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY29uZmlybS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFB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