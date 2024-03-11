System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/image", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, CoverImage, __beyond_pkg, hmr;
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
    }, function (_pragmateUi006Alert) {
      dependency_4 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Image) {
      dependency_6 = _pragmateUi006Image;
    }, function (_aimpactChat101SharedHooks) {
      dependency_7 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Modal) {
      dependency_8 = _pragmateUi006Modal;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/alert', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/image', dependency_6], ['@aimpact/chat/shared/hooks', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1809628151,
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
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const onClose = () => setShowRefiningModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: () => setShowRefiningModal(true),
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            })), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
              confirm: true,
              onClose: onClose
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 660557148,
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
        hash: 695980209,
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
            picture,
            onGenerate
          }) {
            const [image, setImage] = _react.default.useState(picture);
            const [fetching, setFetching] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            const value = {
              picture,
              fetching,
              setFetching,
              onGenerate,
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "cover-image__container"
            }, picture && _react.default.createElement(_image.Image, {
              src: image
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
        hash: 3537878700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _errorRenderer = require("./error-renderer");
          var _context = require("./context");
          function RefinementModal({
            confirm,
            onClose
          }) {
            const {
              notes,
              onGenerate,
              texts: {
                modal: texts,
                generatingImage
              }
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              notes: notes ?? ''
            });
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async () => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  await onGenerate(values.notes);
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            const onClickAction = confirm ? () => setOpenConfirm(true) : events.onClick;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, null, _react.default.createElement(_errorRenderer.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "notes",
              value: values.notes,
              onChange: events.onChange,
              label: texts.textarea.label,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
              disabled: !values.notes,
              icon: _icons.ICONS.aiStars
            }, texts.actions.refine)), openConfirm && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: events.onClick,
              onCancel: () => setOpenConfirm(false),
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: generatingImage
            })));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2680703178,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvbkNsb3NlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJib3JkZXJlZCIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ0ZXh0cyIsImVycm9yIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJfY29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJwaWN0dXJlIiwib25HZW5lcmF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiUHJvdmlkZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfbW9kYWwiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yUmVuZGVyZXIiLCJub3RlcyIsIm1vZGFsIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwiZSIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzaG93IiwidGl0bGUiLCJzdWJ0aXRsZSIsIkZvcm0iLCJUZXh0YXJlYSIsImxhYmVsIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwicmVmaW5lIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJ0ZXh0IiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBRU0sU0FBVUksaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUM7VUFBVyxDQUFFO1lBQzNELE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxvQkFBb0IsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvRCxNQUFNQyxPQUFPLEdBQUdBLENBQUEsS0FBTUgsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1lBQ2pELE9BQ0NULE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUFiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBSSxRQUFBLFFBQ0NkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFB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