System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, useLoader, Image, __beyond_pkg, hmr;
  _export({
    useLoader: void 0,
    Image: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/image"
        },
        "type": "code",
        "name": "image"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/image');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 818759056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useImageContext = exports.ImageContext = void 0;
          var React = require("react");
          const ImageContext = exports.ImageContext = React.createContext({});
          const useImageContext = () => React.useContext(ImageContext);
          exports.useImageContext = useImageContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./error/index
      *****************************/

      ims.set('./error/index', {
        hash: 3929794275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Error() {
            const {
              src,
              onError
            } = (0, _context.useImageContext)();
            const onClickError = event => {
              event.stopPropagation();
              if (onError && typeof onError === 'function') onError(event);
            };
            return _react.default.createElement("div", {
              "data-src": src,
              className: "pui_image__error-container pui-image-error"
            }, onError && _react.default.createElement(_icons.IconButton, {
              onClick: onClickError,
              icon: "refresh"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./hooks/use-loader
      **********************************/

      ims.set('./hooks/use-loader', {
        hash: 3017136548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLoader = useLoader;
          var _react = require("react");
          /*bundle*/
          function useLoader(src) {
            const [status, setStatus] = _react.default.useState('loading');
            _react.default.useEffect(() => {
              if (!src) {
                // setStatus('error');
                return;
              }
              const img = new globalThis.Image();
              const onLoad = () => setStatus('ready');
              const onError = () => setStatus('error');
              img.addEventListener('load', onLoad);
              img.addEventListener('error', onError);
              img.src = src;
              return () => {
                img.removeEventListener('load', onLoad);
                img.removeEventListener('error', onError);
              };
            }, [src]);
            return {
              status
            };
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./hooks/use-loading
      ***********************************/

      ims.set('./hooks/use-loading', {
        hash: 1048736422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLoading = useLoading;
          var _react = require("react");
          function useLoading(props) {
            const initialState = {
              size: '200x200',
              loaded: false
            };
            const [image, setImage] = (0, _react.useState)();
            const [state, setState] = (0, _react.useState)(initialState);
            const loadImage = (url, size) => {
              let finalSrc = url;
              const newImage = new globalThis.Image();
              newImage.onload = () => setState({
                ...state,
                loaded: true,
                error: false
              });
              newImage.onerror = () => {
                setState({
                  ...state,
                  error: true,
                  loaded: false
                });
              };
              newImage.src = finalSrc;
              setImage(newImage);
              setState({
                ...state,
                url,
                size,
                src: finalSrc,
                loaded: true
              });
            };
            (0, _react.useEffect)(() => {
              const currentSrc = props.src;
              // console.log(0.4, props.src);
              if (state.url !== currentSrc) {
                let size = props.size ?? state.size;
                loadImage(currentSrc, size);
              }
              return () => setImage({
                ...state,
                onload: undefined,
                onerror: undefined
              });
            }, [props.src]);
            return [state, setState];
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./img
      *********************/

      ims.set('./img', {
        hash: 189586207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Img = Img;
          var _react = require("react");
          var _context = require("./context");
          function Img() {
            const {
              src,
              setState,
              state,
              loading,
              alt,
              status
            } = (0, _context.useImageContext)();
            if (status === 'loading') return _react.default.createElement("div", {
              className: 'pui-image-loading'
            }, loading);
            if (status === 'error') return _react.default.createElement("div", {
              className: 'pui-image-error'
            }, alt);
            return _react.default.createElement("img", {
              src: src
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1335327046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Image = Image;
          var _react = require("react");
          var _context = require("./context");
          var _error = require("./error");
          var _img = require("./img");
          var _sources = require("./sources");
          var _useLoader = require("./hooks/use-loader");
          /*bundle*/
          function Image(props = {}) {
            const {
              className,
              onClick,
              children,
              sizeLoading
            } = props;
            const {
              status
            } = (0, _useLoader.useLoader)(props.src);
            let cls = `pui-image ${className ? ` ${className}` : ''}`;
            if (status === 'loading') cls += ' pui-image-preload';
            if (status === 'error') cls += ' pui-image-error';
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            ['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources', 'sizeLoading'].forEach(prop => delete properties[prop]);
            const value = {
              ...props,
              src: props.src,
              status
            };
            const styles = {};
            if (status !== 'ready' && !!sizeLoading && typeof sizeLoading === 'object' && sizeLoading.height && sizeLoading.width) {
              styles.height = sizeLoading.height;
              styles.width = sizeLoading.width;
            }
            const Content = status === 'error' ? _error.Error : _img.Img;
            return _react.default.createElement(_context.ImageContext.Provider, {
              value: value
            }, _react.default.createElement("picture", {
              ...properties,
              style: styles,
              "data-src": props.src
            }, _react.default.createElement(_sources.Sources, null), _react.default.createElement(Content, {
              ...properties
            }), children));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 3751520118,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./sources/index
      *******************************/

      ims.set('./sources/index', {
        hash: 1995365142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sources = Sources;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function Sources() {
            const {
              sources
            } = (0, _context.useImageContext)();
            if (!sources || !Array.isArray(sources) || !sources.length) return null;
            const output = sources.map(item => _react.default.createElement(_item.Item, {
              key: item.srcSet,
              ...item
            }));
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./sources/item
      ******************************/

      ims.set('./sources/item', {
        hash: 377065182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          function Item(props) {
            if (!props.srcSet) return null;
            let media = "";
            const {
              maxWidth,
              minWidth
            } = props;
            if (!maxWidth && !!minWidth) media = `(min-width: ${minWidth}px)`;
            if (!!maxWidth && !minWidth) media = `(max-width: ${maxWidth}px)`;
            if (!!maxWidth && !!minWidth) media = `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
            const properties = {
              ...props
            };
            ["maxWidth", "minWidth"].forEach(item => delete properties[item]);
            return _react.default.createElement("source", {
              media: media,
              ...properties
            });
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./hooks/use-loader",
        "from": "useLoader",
        "name": "useLoader"
      }, {
        "im": "./index",
        "from": "Image",
        "name": "Image"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useLoader') && _export("useLoader", useLoader = require ? require('./hooks/use-loader').useLoader : value);
        (require || prop === 'Image') && _export("Image", Image = require ? require('./index').Image : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltZyIsImdsb2JhbFRoaXMiLCJJbWFnZSIsIm9uTG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlTG9hZGluZyIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwic2l6ZSIsImxvYWRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsIm9ubG9hZCIsImVycm9yIiwib25lcnJvciIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJJbWciLCJsb2FkaW5nIiwiYWx0IiwiX2Vycm9yIiwiX2ltZyIsIl9zb3VyY2VzIiwiX3VzZUxvYWRlciIsImNoaWxkcmVuIiwic2l6ZUxvYWRpbmciLCJjbHMiLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlcyIsImhlaWdodCIsIndpZHRoIiwiQ29udGVudCIsIlByb3ZpZGVyIiwic3R5bGUiLCJTb3VyY2VzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaXRlbSIsInNvdXJjZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImtleSIsInNyY1NldCIsIkZyYWdtZW50IiwibWVkaWEiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvZXJyb3IvaW5kZXgudHN4IiwiL3RzL2hvb2tzL3VzZS1sb2FkZXIudHN4IiwiL3RzL2hvb2tzL3VzZS1sb2FkaW5nLnRzIiwiL3RzL2ltZy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2luZGV4LnRzIiwiL3RzL3NvdXJjZXMvaW5kZXgudHN4IiwiL3RzL3NvdXJjZXMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBNEJGLEtBQUssQ0FBQ0ksYUFBYSxDQUFDLEVBQWMsQ0FBQztVQUNqRixNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBZ0JMLEtBQUssQ0FBQ00sVUFBVSxDQUFDSixZQUFZLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSjlFLElBQUFFLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUVNLFNBQVVTLEtBQUtBLENBQUE7WUFDcEIsTUFBTTtjQUFFQyxHQUFHO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUgsZUFBZSxHQUFFO1lBQzFDLE1BQU1RLFlBQVksR0FBSUMsS0FBcUMsSUFBVTtjQUNwRUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBSUgsT0FBTyxJQUFJLE9BQU9BLE9BQU8sS0FBSyxVQUFVLEVBQUVBLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDO1lBQzdELENBQUM7WUFD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QSxDQUFBO1lBQ3RCLE1BQU07Y0FBRUk7WUFBTyxDQUFFLEdBQUcsSUFBQW5FLFFBQUEsQ0FBQUgsZUFBZSxHQUFFO1lBQ3JDLElBQUksQ0FBQ3NFLE9BQU8sSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQ0EsT0FBTyxDQUFDRyxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBQ3ZFLE1BQU1DLE1BQU0sR0FBa0JKLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDQyxJQUFJLElBQUkxRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsS0FBQSxDQUFBUSxJQUFJO2NBQUNDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxNQUFNO2NBQUEsR0FBTUg7WUFBSSxFQUFJLENBQUM7WUFDdkYsT0FBTzFFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUFWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBcUUsUUFBQSxRQUFHTixNQUFNLENBQUk7VUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQXhFLE1BQUEsR0FBQU4sT0FBQTtVQUdNLFNBQVVpRixJQUFJQSxDQUFDaEQsS0FBYztZQUMvQixJQUFJLENBQUNBLEtBQUssQ0FBQ2tELE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDOUIsSUFBSUUsS0FBSyxHQUFXLEVBQUU7WUFDdEIsTUFBTTtjQUFFQyxRQUFRO2NBQUVDO1lBQVEsQ0FBRSxHQUFHdEQsS0FBSztZQUNwQyxJQUFJLENBQUNxRCxRQUFRLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUVGLEtBQUssR0FBRyxlQUFlRSxRQUFRLEtBQUs7WUFDakUsSUFBSSxDQUFDLENBQUNELFFBQVEsSUFBSSxDQUFDQyxRQUFRLEVBQUVGLEtBQUssR0FBRyxlQUFlQyxRQUFRLEtBQUs7WUFDakUsSUFBSSxDQUFDLENBQUNBLFFBQVEsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBRUYsS0FBSyxHQUFHLGVBQWVFLFFBQVEsdUJBQXVCRCxRQUFRLEtBQUs7WUFDakcsTUFBTTFCLFVBQVUsR0FBRztjQUFFLEdBQUczQjtZQUFLLENBQUU7WUFDL0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM0QixPQUFPLENBQUNtQixJQUFJLElBQUksT0FBT3BCLFVBQVUsQ0FBQ29CLElBQUksQ0FBQyxDQUFDO1lBQ2pFLE9BQU8xRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRcUUsS0FBSyxFQUFFQSxLQUFLO2NBQUEsR0FBTXpCO1lBQVUsRUFBSTtVQUNuRDtVQUFDIiwiaWdub3JlTGlzdCI6W119