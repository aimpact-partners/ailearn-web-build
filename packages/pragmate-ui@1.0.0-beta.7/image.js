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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.2.14"]]);
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
        hash: 1716663147,
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
            if (!loaded && !htmlLoaded) cls += ' pui-image-preload';
            if (error) cls += ' pui-image-error';
            const properties = {
              ...props,
              className: cls,
              onClick
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltZyIsImdsb2JhbFRoaXMiLCJJbWFnZSIsIm1hbmFnZXIiLCJtZXRob2RzIiwiYWRkIiwicmVtb3ZlIiwic3RhdGVzIiwibG9hZCIsImVycm9yIiwiZXZlbnRzIiwibWV0aG9kIiwiZm9yRWFjaCIsInVzZUxvYWRpbmciLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiY3VycmVudFNyYyIsInVuZGVmaW5lZCIsIkltZyIsImxvYWRpbmciLCJhbHQiLCJfZXJyb3IiLCJfaW1nIiwiX3NvdXJjZXMiLCJfdXNlTG9hZGluZyIsIl91c2VMb2FkZXIiLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiaHRtbExvYWRlZCIsImNscyIsInByb3BlcnRpZXMiLCJwcm9wIiwidmFsdWUiLCJzdHlsZXMiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbnRlbnQiLCJQcm92aWRlciIsInN0eWxlIiwiU291cmNlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2l0ZW0iLCJzb3VyY2VzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJrZXkiLCJzcmNTZXQiLCJGcmFnbWVudCIsIm1lZGlhIiwibWF4V2lkdGgiLCJtaW5XaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2Vycm9yL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGVyLnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGluZy50cyIsIi90cy9pbWcudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUdPLE1BQU1DLFlBQVksR0FBQUMsT0FBQSxDQUFBRCxZQUFBLEdBQTRCRixLQUFLLENBQUNJLGFBQWEsQ0FBQyxFQUFjLENBQUM7VUFDakYsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQWdCTCxLQUFLLENBQUNNLFVBQVUsQ0FBQ0osWUFBWSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0o5RSxJQUFBRSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFFTSxTQUFVUyxLQUFLQSxDQUFBO1lBQ3BCLE1BQU07Y0FBRUMsR0FBRztjQUFFQztZQUFPLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFILGVBQWUsR0FBRTtZQUMxQyxNQUFNUSxZQUFZLEdBQUlDLEtBQXFDLElBQVU7Y0FDcEVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUlILE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUss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