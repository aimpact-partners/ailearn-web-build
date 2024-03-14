System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/components/icons", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0027ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0027ComponentsIcons;
    }, function (_pragmateUi006Modal) {
      dependency_4 = _pragmateUi006Modal;
    }, function (_pragmateUi006Form) {
      dependency_5 = _pragmateUi006Form;
    }, function (_pragmateUi006Image) {
      dependency_6 = _pragmateUi006Image;
    }, function (_pragmateUi006Alert) {
      dependency_7 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_10 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/modal', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/alert', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1460713809,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX21vZGFsIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsIm9uQ29uZmlybSIsInRleHRzIiwic2V0T3BlbkNvbmZpcm0iLCJvbkNhbmNlbCIsImFjdGlvbnMiLCJsYWJlbCIsImNhbmNlbCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwidGV4dCIsInN1YnRpdGxlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbWFnZSIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX2FjdGlvbnMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJDb3ZlckltYWdlIiwiZGVzY3JpcHRpb24iLCJzdWdnZXN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiUHJvdmlkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJub3RlcyIsInNldE5vdGVzIiwib3BlbkNvbmZpcm0iLCJoYW5kbGVDbG9zZSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImUiLCJtZXNzYWdlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJGb3JtIiwiVGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJnZW5lcmF0aW5nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY29uZmlybS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFB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