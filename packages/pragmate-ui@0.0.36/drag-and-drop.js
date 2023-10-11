System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/image", "pragmate-ui@0.0.36/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DragAndDrop, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/drag-and-drop');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./area
      **********************/
      ims.set('./area', {
        hash: 816388730,
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
            const cls = count && files.length < count ? "hover FilesDragAndDrop__area" : "FilesDragAndDrop__area";
            const attrs = {};
            if (formats) attrs.accept = accept.join(", ");
            if (count && count > 1) attrs.multiple = true;
            const onFileDrop = event => {
              const newFile = [...event.target.files];
              if (count && count < newFile.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? "s" : ""} a la ves`, "error", 2000);
                return;
              }
              if (newFile) {
                dispatch({
                  case: "files",
                  files: state.files.concat(newFile)
                });
                showMessage(`Archivo${newFile.length > 1 ? "s" : ""} cargado${newFile.length > 1 ? "s" : ""} para importar`, "success", 2000);
                onUpload(newFile);
              }
            };
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/cloud-upload-regular-240.png`,
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
        hash: 2695271879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageConfig = void 0;
          const ImageConfig = {
            default: `${globalThis.baseDir}assets/file-blank-solid-240.png`,
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
        hash: 1964123607,
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
          function Imports({
            children
          }) {
            const {
              state,
              count,
              drop,
              drag,
              formats
            } = (0, _context.useDragAndDropContext)();
            const textFormats = formats && Array.isArray(formats) && `Formato${formats.length > 1 ? "s" : ""} disponibles: ${formats.join(", ")}`;
            const textAlertInfo = `${count && `Puede cargar un máximo de ${count} archivo${count !== 1 ? "s" : ""}`} <br /> ${textFormats}`;
            const disabled = {};
            if (state.dragging || !state.files.length) disabled.disabled = true;
            return _react.default.createElement("div", {
              className: "drag-and-drop-container"
            }, count !== Infinity && _react.default.createElement("div", {
              className: "info-drag",
              dangerouslySetInnerHTML: {
                __html: textAlertInfo
              }
            }), _react.default.createElement("div", {
              ref: drop,
              "data-type": "import",
              className: "FilesDragAndDrop"
            }, _react.default.createElement(_message.Message, null), state.dragging && _react.default.createElement("div", {
              ref: drag,
              className: "FilesDragAndDrop__placeholder"
            }, " "), _react.default.createElement(_area.Area, null)), _react.default.createElement(_preview.Preview, null), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3102003195,
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
                case: "message",
                show: true,
                text,
                type
              });
              setTimeout(() => dispatch({
                case: "hideMessage"
              }), timeout);
            };
            const handleDragEnter = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target !== drag.current) dispatch({
                case: "dragging",
                dragging: true
              });
            };
            const handleDragLeave = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target === drag.current) dispatch({
                case: "dragging",
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
                case: "dragging",
                dragging: false
              });
              const newFiles = [...event.dataTransfer.files];
              const {
                dataset: {
                  type
                }
              } = event.currentTarget;
              if (type === "photo" && newFiles.length > 1) {
                return;
              }
              ;
              if (count && count < newFiles.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? 's' : ''} a la ves`, 'error', 2000);
                return;
              }
              ;
              if (formats && newFiles.some(file => !formats.some(format => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
                const filesFormats = newFiles.map(item => item.type.split("/")[1]);
                showMessage(`Los siguientes formatos no están disponibles: ${filesFormats.join(", ")}`, "error", 2000);
                return;
              }
              ;
              if (newFiles && newFiles.length && type !== "photo") {
                showMessage(`Archivo${newFiles.length > 1 ? "s" : ""} cargado${newFiles.length > 1 ? "s" : ""} para importar`, "success", 2000);
                dispatch({
                  case: "files",
                  files: state.files.concat(newFiles)
                });
                onUpload(newFiles);
              }
              ;
              if (type === "photo") {
                const img = URL.createObjectURL(newFiles[0]);
                dispatch({
                  case: "img",
                  img
                });
                onUpload(newFiles);
              }
              ;
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
            textUserPhoto: "Haga clic o arraste su imagen para cambiar foto"
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
        hash: 2117760862,
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
                case: "files",
                files: [...fileFilter]
              });
            };
            const preview = files.map((item, index) => _react.default.createElement("div", {
              key: index,
              className: "drop-file-preview__item"
            }, _react.default.createElement("img", {
              src: _imageConfig.ImageConfig["default"],
              alt: ""
            }), _react.default.createElement("div", {
              className: "drop-file-preview__item__info"
            }, _react.default.createElement("p", null, item.name), _react.default.createElement("p", null, item.size, "B")), _react.default.createElement("span", {
              "data-name": item.name,
              onClick: deleteFile,
              className: "drop-file-preview__item__del"
            }, "x")));
            return _react.default.createElement(_react.default.Fragment, null, " ", !!files.length && _react.default.createElement("div", {
              className: "drop-file-preview"
            }, _react.default.createElement("p", {
              className: "drop-file-preview__title"
            }, "Listo para Importar"), preview));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ltYWdlIiwiX2NvbnRleHQiLCJBcmVhIiwiZmlsZXMiLCJjb3VudCIsImZvcm1hdHMiLCJzaG93TWVzc2FnZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJvblVwbG9hZCIsInVzZURyYWdBbmREcm9wQ29udGV4dCIsImFjY2VwdCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIml0ZW0iLCJjbHMiLCJsZW5ndGgiLCJhdHRycyIsImpvaW4iLCJtdWx0aXBsZSIsIm9uRmlsZURyb3AiLCJldmVudCIsIm5ld0ZpbGUiLCJ0YXJnZXQiLCJjYXNlIiwiY29uY2F0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiYWx0IiwidHlwZSIsIm9uQ2hhbmdlIiwiRHJhZ0FuZERyb3BDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VDb250ZXh0IiwiSW1hZ2VDb25maWciLCJwZGYiLCJwbmciLCJjc3MiLCJfYXJlYSIsIl9tZXNzYWdlIiwiX3ByZXZpZXciLCJJbXBvcnRzIiwiY2hpbGRyZW4iLCJkcm9wIiwiZHJhZyIsInRleHRGb3JtYXRzIiwidGV4dEFsZXJ0SW5mbyIsImRpc2FibGVkIiwiZHJhZ2dpbmciLCJJbmZpbml0eSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVmIiwiTWVzc2FnZSIsIlByZXZpZXciLCJfcmVkdWNlciIsIl92aWV3IiwiRHJhZ0FuZERyb3AiLCJwcm9wcyIsInVzZVJlZiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiY2xlYW4iLCJ1c2VyUGhvdG8iLCJ0ZXh0VXNlclBob3RvIiwidGV4dCIsInRpbWVvdXQiLCJzaG93Iiwic2V0VGltZW91dCIsImhhbmRsZURyYWdFbnRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJvcCIsIm5ld0ZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJzb21lIiwiZmlsZSIsImZvcm1hdCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImVuZHNXaXRoIiwiZmlsZXNGb3JtYXRzIiwic3BsaXQiLCJpbWciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwibWVzc2FnZSIsIlByb3ZpZGVyIiwiVmlldyIsImRlZmF1bHRQcm9wcyIsIkZyYWdtZW50Iiwicm9sZSIsIl9pbWFnZUNvbmZpZyIsImRlbGV0ZUZpbGUiLCJmaWxlRmlsdGVyIiwiZmlsdGVyIiwicHJldmlldyIsImluZGV4Iiwia2V5Iiwic2l6ZSIsIm9uQ2xpY2siLCJwYXlsb2FkIiwiX2ljb25zIiwiVXNlclBob3RvIiwib25JbWFnZUNoYW5nZSIsIkljb24iLCJpY29uIiwicGxhY2Vob2xkZXIiLCJfaW1wb3J0cyIsIl91c2VyUGhvdG8iLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYXJlYS50c3giLCIvY29kZS90cy9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL2ltYWdlLWNvbmZpZy50cyIsIi9jb2RlL3RzL2ltcG9ydHMudHN4IiwiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvbWVzc2FnZS50c3giLCIvY29kZS90cy9wcmV2aWV3LnRzeCIsIi9jb2RlL3RzL3JlZHVjZXIudHMiLCIvY29kZS90cy90eXBlcy50cyIsIi9jb2RlL3RzL3VzZXItcGhvdG8udHN4IiwiL2NvZGUvdHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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