System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi006Icons) {
      dependency_2 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/reactive", "1.1.6"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.2.37"], ["@types/react-dom", "18.2.15"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/image"
        },
        "type": "code",
        "name": "image"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/image');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkaW5nIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJnbG9iYWxUaGlzIiwiSW1hZ2UiLCJvbmxvYWQiLCJlcnJvciIsIm9uZXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3JjIiwidW5kZWZpbmVkIiwiSW1nIiwibG9hZGluZyIsImFsdCIsIm9uTG9hZCIsImh0bWxMb2FkZWQiLCJsb2FkaW5nSU1HIiwiYWx0SU1HIiwiX2Vycm9yIiwiX2ltZyIsIl9zb3VyY2VzIiwiX3VzZUxvYWRpbmciLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiY2xzIiwiQ29udGVudCIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsInZhbHVlIiwic3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJQcm92aWRlciIsInN0eWxlIiwiU291cmNlcyIsIl9pdGVtIiwic291cmNlcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJJdGVtIiwia2V5Iiwic3JjU2V0IiwiRnJhZ21lbnQiLCJtZWRpYSIsIm1heFdpZHRoIiwibWluV2lkdGgiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9lcnJvci9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWxvYWRpbmcudHMiLCIvdHMvaW1nLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaW50ZXJmYWNlcy9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUE0QkYsS0FBSyxDQUFDSSxhQUFhLENBQUMsRUFBRSxDQUFDO1VBQ3JFLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFnQkwsS0FBSyxDQUFDTSxVQUFVLENBQUNKLFlBQVksQ0FBQztVQUFDQyxPQUFBLENBQUFFLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKOUUsSUFBQUUsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBRU0sU0FBVVMsS0FBS0EsQ0FBQTtZQUNqQixNQUFNO2NBQUVDLEdBQUc7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSCxlQUFlLEdBQUU7WUFDMUMsTUFBTVEsWUFBWSxHQUFJQyxLQUFxQyxJQUFVO2NBQ2pFQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFJSCxPQUFPLElBQUksT0FBT0EsT0FBTyxLQUFLLFVBQVUsRUFBRUEsT0FBTyxDQUFDRSxLQUFLLENBQUM7WUFDaEUsQ0FBQztZQUNELE9BQ0lQLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUEsWUFBZU4sR0FBRztjQUFFTyxTQUFTLEVBQUM7WUFBZSxHQUN4Q04sT0FBTyxJQUFJTCxN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