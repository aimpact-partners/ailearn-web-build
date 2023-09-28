System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/image", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, DragAndDrop, __beyond_pkg, hmr;
  _export("DragAndDrop", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Image) {
      dependency_3 = _pragmateUi0036Image;
    }, function (_pragmateUi0036Form) {
      dependency_4 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Alert) {
      dependency_5 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Icons) {
      dependency_6 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/drag-and-drop"
        },
        "type": "code",
        "name": "drag-and-drop"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/alert', dependency_5], ['pragmate-ui/icons', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/drag-and-drop');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./area
      **********************/
      ims.set('./area', {
        hash: 1329226600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Area = Area;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          function Area() {
            const {
              files,
              count,
              formats,
              showMessage,
              state,
              dispatch,
              onUpload
            } = (0, _context.useDragAndDropContext)();
            const accept = formats && Array.isArray(formats) && formats.map(item => `.${item}`);
            const cls = count && files.length < count ? 'hover FilesDragAndDrop__area' : 'FilesDragAndDrop__area';
            const attrs = {};
            if (formats) attrs.accept = accept.join(', ');
            if (count && count > 1) attrs.multiple = true;
            const onFileDrop = event => {
              const newFile = [...event.target.files];
              if (count && count < newFile.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? '' : ''} a la ves`, 'error', 2000);
                return;
              }
              if (newFile) {
                dispatch({
                  case: 'files',
                  files: state.files.concat(newFile)
                });
                showMessage(`Archivos${newFile.length > 1 ? '' : ''} cargado${newFile.length > 1 ? '' : ''} para importar`, 'success', 2000);
              }
            };
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/images/cloud-upload-regular-240.png`,
              alt: ""
            }), count && files.length < count && _react.default.createElement("input", {
              ...attrs,
              type: "file",
              onChange: onFileDrop
            }), _react.default.createElement("span", null, "Arrastra y suelta tu archivo"));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2273647033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDragAndDropContext = exports.DragAndDropContext = void 0;
          var _react = require("react");
          const DragAndDropContext = (0, _react.createContext)({
            files: []
          });
          exports.DragAndDropContext = DragAndDropContext;
          const useDragAndDropContext = () => (0, _react.useContext)(DragAndDropContext);
          exports.useDragAndDropContext = useDragAndDropContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./image-config
      ******************************/

      ims.set('./image-config', {
        hash: 718796739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageConfig = void 0;
          const ImageConfig = {
            default: `${globalThis.baseDir}assets/images/file-blank-solid-240.png`,
            pdf: `${globalThis.baseDir}assets/file-css-solid-240.png`,
            png: `${globalThis.baseDir}assets/file-pdf-solid-240.png`,
            css: `${globalThis.baseDir}assets/file-png-solid-240.png`
          };
          exports.ImageConfig = ImageConfig;
        }
      });

      /*************************
      INTERNAL MODULE: ./imports
      *************************/

      ims.set('./imports', {
        hash: 1292434686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Imports = Imports;
          var _react = require("react");
          var _area = require("./area");
          var _context = require("./context");
          var _message = require("./message");
          var _preview = require("./preview");
          var _form = require("pragmate-ui/form");
          var _alert = require("pragmate-ui/alert");
          function Imports({
            children
          }) {
            const {
              state,
              count,
              drop,
              drag,
              formats,
              dispatch,
              onUpload,
              clean
            } = (0, _context.useDragAndDropContext)();
            const handleSubmit = async () => {
              dispatch({
                case: 'dragging',
                dragging: true
              });
              await onUpload(state.files);
              dispatch({
                case: 'dragging',
                dragging: false
              });
              if (clean) dispatch({
                case: 'files',
                files: []
              });
            };
            const textFormats = formats && Array.isArray(formats) && `Formato${formats.length > 1 ? '' : ''} disponibles: ${formats.join(', ')}`;
            const textAlertInfo = `${count && count !== Infinity ? `Puede cargar un máximo de ${count} archivo${count !== 1 ? 's' : ''}` : ''} ${textFormats}`;
            const disabled = {};
            if (state.dragging || !state.files.length) disabled.disabled = true;
            return _react.default.createElement(_form.Form, {
              className: "drag-and-drop-container",
              onSubmit: handleSubmit
            }, _react.default.createElement("header", {
              className: "content-header"
            }, _react.default.createElement("h3", {
              className: "content-header__h3"
            }, "Importar archivos")), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("p", {
              className: "alert__title-span"
            }, textAlertInfo)), _react.default.createElement("div", {
              ref: drop,
              "data-type": "import",
              className: "FilesDragAndDrop"
            }, _react.default.createElement(_message.Message, null), state.dragging && _react.default.createElement("div", {
              ref: drag,
              className: "FilesDragAndDrop__placeholder"
            }, ' '), _react.default.createElement(_area.Area, null)), _react.default.createElement(_preview.Preview, null), _react.default.createElement("div", {
              className: "drop-file-button"
            }, _react.default.createElement(_form.Button, {
              variant: "primary",
              type: "submit",
              ...disabled,
              label: "Import"
            })), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 650222850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DragAndDrop = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _reducer = require("./reducer");
          var _view = require("./view");
          /*bundle*/
          const DragAndDrop = props => {
            const drop = (0, _react.useRef)(null);
            const [state, dispatch] = (0, _react.useReducer)(_reducer.reducer, _reducer.initialState);
            const {
              onUpload,
              count,
              formats,
              children,
              clean,
              userPhoto,
              textUserPhoto
            } = props;
            const drag = (0, _react.useRef)(null);
            const showMessage = (text, type, timeout) => {
              dispatch({
                case: 'message',
                show: true,
                text,
                type
              });
              setTimeout(() => dispatch({
                case: 'hideMessage'
              }), timeout);
            };
            const handleDragEnter = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target !== drag.current) dispatch({
                case: 'dragging',
                dragging: true
              });
            };
            const handleDragLeave = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target === drag.current) dispatch({
                case: 'dragging',
                dragging: false
              });
            };
            const handleDragOver = event => {
              event.preventDefault();
              event.stopPropagation();
            };
            const handleDrop = event => {
              event.preventDefault();
              event.stopPropagation();
              dispatch({
                case: 'dragging',
                dragging: false
              });
              const newFiles = [...event.dataTransfer.files];
              const {
                dataset: {
                  type
                }
              } = event.currentTarget;
              if (type === 'photo' && newFiles.length > 1) {
                return;
              }
              if (count && count < newFiles.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? '' : ''} a la ves`, 'error', 2000);
                return;
              }
              if (formats && newFiles.some(file => !formats.some(format => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
                const filesFormats = newFiles.map(item => item.type.split('/')[1]);
                showMessage(`Los siguientes formatos no están disponibles: ${filesFormats.join(', ')}`, 'error', 2000);
                return;
              }
              if (newFiles && newFiles.length && type !== 'photo') {
                showMessage(`Archivo${newFiles.length > 1 ? '' : ''} cargado${newFiles.length > 1 ? '' : ''} para importar`, 'success', 2000);
                dispatch({
                  case: 'files',
                  files: state.files.concat(newFiles)
                });
                //   onUpload(newFiles)
              }

              if (type === 'photo') {
                const img = URL.createObjectURL(newFiles[0]);
                dispatch({
                  case: 'img',
                  img
                });
                onUpload(newFiles);
              }
            };
            (0, _react.useEffect)(() => {
              if (count && state.files.length >= count || !drop.current) return;
              drop.current.addEventListener('dragover', handleDragOver);
              drop.current.addEventListener('drop', handleDrop);
              drop.current.addEventListener('dragenter', handleDragEnter);
              drop.current.addEventListener('dragleave', handleDragLeave);
              return () => {
                if (!drop.current) return;
                drop.current.removeEventListener('dragover', handleDragOver);
                drop.current.removeEventListener('drop', handleDrop);
                drop.current.removeEventListener('dragenter', handleDragEnter);
                drop.current.removeEventListener('dragleave', handleDragLeave);
              };
            }, [state.files]);
            const value = {
              files: state.files,
              message: state.message,
              count,
              formats,
              showMessage,
              dispatch,
              onUpload,
              state,
              clean,
              drop,
              drag,
              userPhoto,
              textUserPhoto
            };
            return _react.default.createElement(_context.DragAndDropContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, {
              children: children
            }));
          };
          exports.DragAndDrop = DragAndDrop;
          DragAndDrop.defaultProps = {
            clean: false,
            textUserPhoto: 'Haga clic o arraste su imagen para cambiar foto'
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./message
      *************************/

      ims.set('./message', {
        hash: 3628827464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _context = require("./context");
          function Message() {
            const {
              message
            } = (0, _context.useDragAndDropContext)();
            return _react.default.createElement(_react.default.Fragment, null, "  ", message.show && _react.default.createElement("div", {
              className: `FilesDragAndDrop__placeholder FilesDragAndDrop__placeholder--${message.type}`
            }, message.text, _react.default.createElement("span", {
              role: 'img',
              "aria-label": 'emoji',
              className: 'area__icon'
            }, message.type === 'error' ? _react.default.createElement(_react.default.Fragment, null) : _react.default.createElement(_react.default.Fragment, null, "\uD83D\uDC4F"))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preview
      *************************/

      ims.set('./preview', {
        hash: 618685299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preview = Preview;
          var _react = require("react");
          var _context = require("./context");
          var _imageConfig = require("./image-config");
          function Preview() {
            const {
              files,
              dispatch
            } = (0, _context.useDragAndDropContext)();
            const deleteFile = event => {
              const {
                dataset
              } = event.currentTarget;
              const fileFilter = files.filter(file => file.name !== dataset.name);
              dispatch({
                case: 'files',
                files: [...fileFilter]
              });
            };
            const preview = files.map((item, index) => _react.default.createElement("div", {
              key: index,
              className: "drop-file-preview__item"
            }, _react.default.createElement("img", {
              src: _imageConfig.ImageConfig['default'],
              alt: ""
            }), _react.default.createElement("div", {
              className: "drop-file-preview__item__info"
            }, _react.default.createElement("p", null, item.name), _react.default.createElement("p", null, item.size, "B")), _react.default.createElement("span", {
              "data-name": item.name,
              onClick: deleteFile,
              className: "drop-file-preview__item__del"
            }, "x")));
            return _react.default.createElement(_react.default.Fragment, null, ' ', !!files.length && _react.default.createElement("div", {
              className: "drop-file-preview"
            }, _react.default.createElement("p", {
              className: "drop-file-preview__title"
            }, "Listo para Importar"), _react.default.createElement("div", {
              className: "drop-file-preview__content"
            }, preview)));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./reducer
      *************************/

      ims.set('./reducer', {
        hash: 3335817071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.reducer = exports.initialState = void 0;
          const reducer = (state, payload) => {
            switch (payload.case) {
              case "dragging":
                {
                  return {
                    ...state,
                    dragging: payload.dragging
                  };
                }
                ;
              case "files":
                {
                  return {
                    ...state,
                    files: payload.files
                  };
                }
                ;
              case "message":
                {
                  return {
                    ...state,
                    message: {
                      show: payload.show,
                      text: payload.text,
                      type: payload.type
                    }
                  };
                }
                ;
              case "hideMessage":
                {
                  return {
                    ...state,
                    message: {
                      show: false,
                      text: null,
                      type: null
                    }
                  };
                }
                ;
              case "img":
                {
                  return {
                    ...state,
                    img: payload.img
                  };
                }
                ;
              default:
                return;
            }
            ;
          };
          exports.reducer = reducer;
          const initialState = {
            dragging: false,
            files: [],
            message: {
              show: false,
              text: null,
              type: null
            },
            img: ""
          };
          exports.initialState = initialState;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1227271531,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
        }
      });

      /****************************
      INTERNAL MODULE: ./user-photo
      ****************************/

      ims.set('./user-photo', {
        hash: 623146599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserPhoto = UserPhoto;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          function UserPhoto() {
            const {
              drop,
              textUserPhoto,
              state,
              dispatch
            } = (0, _context.useDragAndDropContext)();
            const onImageChange = event => {
              const [file] = event.target.files;
              if (!file) return;
              const img = URL.createObjectURL(file);
              dispatch({
                case: "img",
                img
              });
            };
            const cls = state.img ? "drag-and-drop-container-user" : "drag-and-drop-container-user border";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              ref: drop,
              "data-type": "photo",
              className: "file-drag-and-drop-user"
            }, _react.default.createElement(_icons.Icon, {
              icon: "camera"
            }), _react.default.createElement("span", null, textUserPhoto), _react.default.createElement("input", {
              placeholder: "Select image",
              accept: "image/*",
              multiple: false,
              type: "file",
              onChange: onImageChange
            })), state.img && _react.default.createElement(_image.Image, {
              alt: "photo user",
              src: state.img
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 3281426199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _context = require("./context");
          var _imports = require("./imports");
          var _userPhoto = require("./user-photo");
          function View({
            children
          }) {
            const {
              userPhoto
            } = (0, _context.useDragAndDropContext)();
            const Control = userPhoto ? _userPhoto.UserPhoto : _imports.Imports;
            return _react.default.createElement(Control, {
              children: children
            });
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DragAndDrop",
        "name": "DragAndDrop"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DragAndDrop') && _export("DragAndDrop", DragAndDrop = require ? require('./index').DragAndDrop : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic2hvd01lc3NhZ2UiLCJzdGF0ZSIsImRpc3BhdGNoIiwib25VcGxvYWQiLCJhY2NlcHQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiY2xzIiwibGVuZ3RoIiwiYXR0cnMiLCJqb2luIiwibXVsdGlwbGUiLCJvbkZpbGVEcm9wIiwiZXZlbnQiLCJuZXdGaWxlIiwidGFyZ2V0IiwiY2FzZSIsImNvbmNhdCIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJnbG9iYWxUaGlzIiwiYmFzZURpciIsImFsdCIsInR5cGUiLCJvbkNoYW5nZSIsIkRyYWdBbmREcm9wQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VEcmFnQW5kRHJvcENvbnRleHQiLCJJbWFnZUNvbmZpZyIsImRlZmF1bHQiLCJwZGYiLCJwbmciLCJjc3MiLCJJbXBvcnRzIiwiY2hpbGRyZW4iLCJkcm9wIiwiZHJhZyIsImNsZWFuIiwiaGFuZGxlU3VibWl0IiwiZHJhZ2dpbmciLCJ0ZXh0Rm9ybWF0cyIsInRleHRBbGVydEluZm8iLCJJbmZpbml0eSIsImRpc2FibGVkIiwiRm9ybSIsIm9uU3VibWl0IiwiQWxlcnQiLCJyZWYiLCJNZXNzYWdlIiwiUHJldmlldyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsIkRyYWdBbmREcm9wIiwicHJvcHMiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwidXNlclBob3RvIiwidGV4dFVzZXJQaG90byIsInRleHQiLCJ0aW1lb3V0Iiwic2hvdyIsInNldFRpbWVvdXQiLCJoYW5kbGVEcmFnRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJuZXdGaWxlcyIsImRhdGFUcmFuc2ZlciIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0Iiwic29tZSIsImZpbGUiLCJmb3JtYXQiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJlbmRzV2l0aCIsImZpbGVzRm9ybWF0cyIsInNwbGl0IiwiaW1nIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJQcm92aWRlciIsIlZpZXciLCJkZWZhdWx0UHJvcHMiLCJyb2xlIiwiZGVsZXRlRmlsZSIsImZpbGVGaWx0ZXIiLCJmaWx0ZXIiLCJwcmV2aWV3IiwiaW5kZXgiLCJrZXkiLCJzaXplIiwib25DbGljayIsInBheWxvYWQiLCJVc2VyUGhvdG8iLCJvbkltYWdlQ2hhbmdlIiwiSWNvbiIsImljb24iLCJwbGFjZWhvbGRlciIsIkNvbnRyb2wiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvYXJlYS50c3giLCJjb2RlL3RzL2NvbnRleHQudHN4IiwiY29kZS90cy9pbWFnZS1jb25maWcudHMiLCJjb2RlL3RzL2ltcG9ydHMudHN4IiwiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL21lc3NhZ2UudHN4IiwiY29kZS90cy9wcmV2aWV3LnRzeCIsImNvZGUvdHMvcmVkdWNlci50cyIsImNvZGUvdHMvdHlwZXMudHMiLCJjb2RlL3RzL3VzZXItcGhvdG8udHN4IiwiY29kZS90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19