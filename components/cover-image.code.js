System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi006Alert) {
      dependency_4 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Image) {
      dependency_6 = _pragmateUi006Image;
    }, function (_pragmateUi006Modal) {
      dependency_7 = _pragmateUi006Modal;
    }, function (_pragmateUi006Form) {
      dependency_8 = _pragmateUi006Form;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/alert', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
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
        hash: 3749063037,
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
        hash: 2267427847,
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
            const value = {
              picture,
              fetching,
              setFetching,
              onGenerate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvbkNsb3NlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJib3JkZXJlZCIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJkaXNhYmxlZCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbmZpcm0iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ0ZXh0cyIsImVycm9yIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJfY29udGV4dCIsIkNvdmVySW1hZ2UiLCJwaWN0dXJlIiwib25HZW5lcmF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaGluZyIsInZhbHVlIiwiUHJvdmlkZXIiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfbW9kYWwiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2Vycm9yUmVuZGVyZXIiLCJub3RlcyIsIm1vZGFsIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwiZSIsIm1lc3NhZ2UiLCJvbkNsaWNrQWN0aW9uIiwiTW9kYWwiLCJzaG93IiwidGl0bGUiLCJzdWJ0aXRsZSIsIkZvcm0iLCJUZXh0YXJlYSIsImxhYmVsIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwicmVmaW5lIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJ0ZXh0IiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUVNLFNBQVVJLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDO1VBQVcsQ0FBRTtZQUMzRCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsb0JBQW9CLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0QsTUFBTUMsT0FBTyxHQUFHQSxDQUFBLEtBQU1ILG9CQUFvQixDQUFDLEtBQUssQ0FBQztZQUNqRCxPQUNDVCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFBYixNQUFBLENBQUFVLE9BQUEsQ0FBQUksUUFBQSxRQUNDZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFRRSxTQUFTLEVBQUM7WUFBUyxHQUUxQmYsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBYyxV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