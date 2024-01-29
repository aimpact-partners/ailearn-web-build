System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/image"
        },
        "type": "code",
        "name": "image"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/image');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3459801359,
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
        hash: 1634346444,
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
              className: 'content-error'
            }, onError && _react.default.createElement(_icons.IconButton, {
              onClick: onClickError,
              icon: 'refresh'
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./hooks/use-loading
      ***********************************/

      ims.set('./hooks/use-loading', {
        hash: 971814615,
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
              newImage.onerror = () => setState({
                ...state,
                error: true,
                loaded: false
              });
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
          ;
        }
      });

      /*********************
      INTERNAL MODULE: ./img
      *********************/

      ims.set('./img', {
        hash: 2913122704,
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
              alt
            } = (0, _context.useImageContext)();
            const onLoad = () => setState({
              ...state,
              error: false,
              htmlLoaded: true
            });
            const loadingIMG = loading && loading === 'eager' || loading === 'lazy' ? loading : 'eager';
            const altIMG = alt ?? ' ';
            return _react.default.createElement("img", {
              src: src,
              onLoad: onLoad,
              loading: loadingIMG,
              alt: altIMG
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3317177455,
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
          var _useLoading = require("./hooks/use-loading");
          /*bundle*/
          function Image(props) {
            const {
              className,
              onClick,
              children,
              sizeLoading
            } = props;
            const [state, setState] = (0, _useLoading.useLoading)(props);
            const {
              error,
              loaded,
              htmlLoaded
            } = state;
            let cls = `pui-image ${className ? ` ${className}` : ''}`;
            if (!loaded && !htmlLoaded) cls += ' pui-image-preload';
            if (error) cls += ' pui-image-error';
            const Content = error ? _error.Error : _img.Img;
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            ['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources', 'sizeLoading'].forEach(prop => delete properties[prop]);
            const value = {
              ...props,
              state,
              setState
            };
            const styles = {};
            if ((!loaded || !htmlLoaded || error) && !!sizeLoading && typeof sizeLoading === 'object' && sizeLoading.height && sizeLoading.width) {
              styles.height = sizeLoading.height;
              styles.width = sizeLoading.width;
            }
            return _react.default.createElement(_context.ImageContext.Provider, {
              value: value
            }, _react.default.createElement("picture", {
              ...properties,
              style: styles
            }, _react.default.createElement(_sources.Sources, null), _react.default.createElement(Content, null), children));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 2835420986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
        }
      });

      /*******************************
      INTERNAL MODULE: ./sources/index
      *******************************/

      ims.set('./sources/index', {
        hash: 1128300086,
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
            return output;
          }
          ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkaW5nIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJnbG9iYWxUaGlzIiwiSW1hZ2UiLCJvbmxvYWQiLCJlcnJvciIsIm9uZXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3JjIiwidW5kZWZpbmVkIiwiSW1nIiwibG9hZGluZyIsImFsdCIsIm9uTG9hZCIsImh0bWxMb2FkZWQiLCJsb2FkaW5nSU1HIiwiYWx0SU1HIiwiX2Vycm9yIiwiX2ltZyIsIl9zb3VyY2VzIiwiX3VzZUxvYWRpbmciLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiY2xzIiwiQ29udGVudCIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsInZhbHVlIiwic3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJQcm92aWRlciIsInN0eWxlIiwiU291cmNlcyIsIl9pdGVtIiwic291cmNlcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJJdGVtIiwia2V5Iiwic3JjU2V0IiwibWVkaWEiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvZXJyb3IvaW5kZXgudHN4IiwiL3RzL2hvb2tzL3VzZS1sb2FkaW5nLnRzIiwiL3RzL2ltZy50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvc291cmNlcy9pbmRleC50c3giLCIvdHMvc291cmNlcy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBNEJGLEtBQUssQ0FBQ0ksYUFBYSxDQUFDLEVBQUUsQ0FBQztVQUNyRSxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBZ0JMLEtBQUssQ0FBQ00sVUFBVSxDQUFDSixZQUFZLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSjlFLElBQUFFLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUVNLFNBQVVTLEtBQUtBLENBQUE7WUFDakIsTUFBTTtjQUFFQyxHQUFHO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUgsZUFBZSxHQUFFO1lBQzFDLE1BQU1RLFlBQVksR0FBSUMsS0FBcUMsSUFBVTtjQUNqRUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBSUgsT0FBTyxJQUFJLE9BQU9BLE9BQU8sS0FBSyxVQUFVLEVBQUVBLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDO1lBQ2hFLENBQUM7WUFDRCxPQUNJUCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLFlBQWVOLEdBQUc7Y0FBRU8sU0FBUyxFQUFDO1lBQWUsR0FDeENOLE9BQU8sSUFBSUwsTUFBQSxDQUFBUyxP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