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
        hash: 2712138520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Image = Image;
          var _react = require("react");
          var _context = require("./context");
          var _error = require("./error");
          var _useLoader = require("./hooks/use-loader");
          var _img = require("./img");
          var _sources = require("./sources");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltZyIsImdsb2JhbFRoaXMiLCJJbWFnZSIsIm9uTG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSW1nIiwic2V0U3RhdGUiLCJzdGF0ZSIsImxvYWRpbmciLCJhbHQiLCJfZXJyb3IiLCJfdXNlTG9hZGVyIiwiX2ltZyIsIl9zb3VyY2VzIiwicHJvcHMiLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiY2xzIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wIiwidmFsdWUiLCJzdHlsZXMiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbnRlbnQiLCJQcm92aWRlciIsInN0eWxlIiwiU291cmNlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2l0ZW0iLCJzb3VyY2VzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJrZXkiLCJzcmNTZXQiLCJGcmFnbWVudCIsIm1lZGlhIiwibWF4V2lkdGgiLCJtaW5XaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2Vycm9yL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGVyLnRzeCIsIi90cy9pbWcudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUE0QkYsS0FBSyxDQUFDSSxhQUFhLENBQUMsRUFBYyxDQUFDO1VBQ2pGLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFnQkwsS0FBSyxDQUFDTSxVQUFVLENBQUNKLFlBQVksQ0FBQztVQUFDQyxPQUFBLENBQUFFLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKOUUsSUFBQUUsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBRU0sU0FBVVMsS0FBS0EsQ0FBQTtZQUNwQixNQUFNO2NBQUVDLEdBQUc7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSCxlQUFlLEdBQUU7WUFDMUMsTUFBTVEsWUFBWSxHQUFJQyxLQUFxQyxJQUFVO2NBQ3BFQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFJSCxPQUFPLElBQUksT0FBT0EsT0FBTyxLQUFLLFVBQVUsRUFBRUEsT0FBTyxDQUFDRSxLQUFLLENBQUM7WUFDN0QsQ0FBQztZQUNELE9BQ0NQLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUEsWUFBZU4sR0FBRztjQUFFTyxTQUFTLEVBQUM7WUFBNEMsR0FDeEVOLE9BQU8sSUFBSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBVSxVQUFVO2NBQUNDLE9BQU8sRUFBRVAsWUFBWTtjQUFFUSxJQUFJLEVBQUM7WUFBUyxFQUFH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