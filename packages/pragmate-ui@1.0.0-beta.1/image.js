System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta1Icons) {
      dependency_2 = _pragmateUi100Beta1Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.5-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/image"
        },
        "type": "code",
        "name": "image"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/image');
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

      /**********************************
      INTERNAL MODULE: ./hooks/use-loader
      **********************************/

      ims.set('./hooks/use-loader', {
        hash: 2637852723,
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
                setStatus('error');
                return;
              }
              const img = new globalThis.Image();
              const manager = event => {
                const methods = {
                  add: 'addEventListener',
                  remove: 'removeEventListener'
                };
                const states = {
                  load: 'ready',
                  error: 'error'
                };
                const events = ['load', 'error'];
                const method = methods[event];
                events.forEach(event => img[method](event, () => setStatus(states[event])));
              };
              manager('add');
              img.src = src;
              return () => {
                manager('remove');
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
        hash: 1800321396,
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
        hash: 1445573776,
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
          var _useLoader = require("./hooks/use-loader");
          /*bundle*/
          function Image(props = {}) {
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
            const {
              status
            } = (0, _useLoader.useLoader)(props.src);
            let cls = `pui-image ${className ? ` ${className}` : ''}`;
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            if (!loaded && !htmlLoaded) cls += ' pui-image-preload';
            if (error) cls += ' pui-image-error';
            ['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources', 'sizeLoading'].forEach(prop => delete properties[prop]);
            const value = {
              ...props,
              state,
              src: props.src,
              status,
              setState
            };
            const styles = {};
            if ((!loaded || !htmlLoaded || error) && !!sizeLoading && typeof sizeLoading === 'object' && sizeLoading.height && sizeLoading.width) {
              styles.height = sizeLoading.height;
              styles.width = sizeLoading.width;
            }
            const Content = error ? _error.Error : _img.Img;
            return _react.default.createElement(_context.ImageContext.Provider, {
              value: value
            }, _react.default.createElement("picture", {
              ...properties,
              style: styles,
              "data-src": props.src
            }, _react.default.createElement(_sources.Sources, null), _react.default.createElement(Content, null), children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltZyIsImdsb2JhbFRoaXMiLCJJbWFnZSIsIm1hbmFnZXIiLCJtZXRob2RzIiwiYWRkIiwicmVtb3ZlIiwic3RhdGVzIiwibG9hZCIsImVycm9yIiwiZXZlbnRzIiwibWV0aG9kIiwiZm9yRWFjaCIsInVzZUxvYWRpbmciLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiY3VycmVudFNyYyIsInVuZGVmaW5lZCIsIkltZyIsImxvYWRpbmciLCJhbHQiLCJfZXJyb3IiLCJfaW1nIiwiX3NvdXJjZXMiLCJfdXNlTG9hZGluZyIsIl91c2VMb2FkZXIiLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiaHRtbExvYWRlZCIsImNscyIsInByb3BlcnRpZXMiLCJwcm9wIiwidmFsdWUiLCJzdHlsZXMiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbnRlbnQiLCJQcm92aWRlciIsInN0eWxlIiwiU291cmNlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2l0ZW0iLCJzb3VyY2VzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJrZXkiLCJzcmNTZXQiLCJGcmFnbWVudCIsIm1lZGlhIiwibWF4V2lkdGgiLCJtaW5XaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2Vycm9yL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGVyLnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGluZy50cyIsIi90cy9pbWcudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUdPLE1BQU1DLFlBQVksR0FBQUMsT0FBQSxDQUFBRCxZQUFBLEdBQTRCRixLQUFLLENBQUNJLGFBQWEsQ0FBQyxFQUFjLENBQUM7VUFDakYsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQWdCTCxLQUFLLENBQUNNLFVBQVUsQ0FBQ0osWUFBWSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0o5RSxJQUFBRSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFFTSxTQUFVUyxLQUFLQSxDQUFBO1lBQ2pCLE1BQU07Y0FBRUMsR0FBRztjQUFFQztZQUFPLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFILGVBQWUsR0FBRTtZQUMxQyxNQUFNUSxZQUFZLEdBQUlDLEtBQXFDLElBQVU7Y0FDakVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUlILE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUss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