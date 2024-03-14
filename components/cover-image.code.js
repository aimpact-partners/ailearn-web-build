System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.25/components/icons", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.25/components/ui", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0025ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0025ComponentsIcons;
    }, function (_pragmateUi006Modal) {
      dependency_4 = _pragmateUi006Modal;
    }, function (_pragmateUi006Form) {
      dependency_5 = _pragmateUi006Form;
    }, function (_pragmateUi006Image) {
      dependency_6 = _pragmateUi006Image;
    }, function (_pragmateUi006Alert) {
      dependency_7 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0025ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0025ComponentsUi;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Styles) {
      dependency_10 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.25"], ["@aimpact/ailearn-app", "0.0.25"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.25/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/modal', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/alert', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.25/components/cover-image.code');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJfY29udGV4dCIsIl9kaXNwbGF5IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJzZXRGZXRjaGluZyIsInBpY3R1cmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzaG93RGlzcGxheVBpY3R1cmUiLCJzZXRTaG93RGlzcGxheVBpY3R1cmUiLCJ0b2dnbGVNb2RhbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJkaXNhYmxlZCIsIkRpc3BsYXlQaWN0dXJlIiwic2hvdyIsIm9uQ2xvc2UiLCJSZWZpbmVtZW50TW9kYWwiLCJjb25maXJtIiwiX21vZGFsIiwiQ29uZmlybVJlZmluZW1lbnRNb2RhbCIsIm9uQ29uZmlybSIsInRleHRzIiwic2V0T3BlbkNvbmZpcm0iLCJvbkNhbmNlbCIsImFjdGlvbnMiLCJsYWJlbCIsImNhbmNlbCIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwidGV4dCIsInN1YnRpdGxlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbWFnZSIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX2FjdGlvbnMiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJDb3ZlckltYWdlIiwiZGVzY3JpcHRpb24iLCJzdWdnZXN0aW9ucyIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiUHJvdmlkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJfZXJyb3JSZW5kZXJlciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJub3RlcyIsInNldE5vdGVzIiwib3BlbkNvbmZpcm0iLCJoYW5kbGVDbG9zZSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImUiLCJtZXNzYWdlIiwid2luZG93Iiwic2V0VGltZW91dCIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJGb3JtIiwiVGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJnZW5lcmF0aW5nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY29uZmlybS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksUUFB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