System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, useLoader, Image, __beyond_pkg, hmr;
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
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_4 = _pragmateUi100Beta7Base;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
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
        hash: 1868347123,
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
            console.log(2);
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
        hash: 962642697,
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
              const onLoad = () => {
                setStatus('ready');
              };
              const onError = e => {
                setStatus('error');
              };
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
        hash: 3412446156,
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
              alt,
              status
            } = (0, _context.useImageContext)();
            if (status === 'loading') return _react.default.createElement("div", {
              className: "pui-image-loading"
            });
            if (status === 'error') return _react.default.createElement("div", {
              className: "pui-image-error"
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
        hash: 591830889,
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
          var _framerMotion = require("framer-motion");
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
            }, _react.default.createElement(_framerMotion.motion.picture, {
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
        hash: 769792670,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwidXNlTG9hZGVyIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbWciLCJnbG9iYWxUaGlzIiwiSW1hZ2UiLCJvbkxvYWQiLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJbWciLCJzZXRTdGF0ZSIsInN0YXRlIiwiYWx0IiwiX2Vycm9yIiwiX3VzZUxvYWRlciIsIl9pbWciLCJfc291cmNlcyIsIl9mcmFtZXJNb3Rpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZUxvYWRpbmciLCJjbHMiLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlcyIsImhlaWdodCIsIndpZHRoIiwiQ29udGVudCIsIlByb3ZpZGVyIiwibW90aW9uIiwicGljdHVyZSIsInN0eWxlIiwiU291cmNlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2l0ZW0iLCJzb3VyY2VzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJrZXkiLCJzcmNTZXQiLCJGcmFnbWVudCIsIm1lZGlhIiwibWF4V2lkdGgiLCJtaW5XaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2Vycm9yL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGVyLnRzeCIsIi90cy9pbWcudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBNEJGLEtBQUssQ0FBQ0ksYUFBYSxDQUFDLEVBQWMsQ0FBQztVQUNqRixNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBZ0JMLEtBQUssQ0FBQ00sVUFBVSxDQUFDSixZQUFZLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSjlFLElBQUFFLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUVNLFNBQVVTLEtBQUtBLENBQUE7WUFDcEIsTUFBTTtjQUFFQyxHQUFHO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUgsZUFBZSxHQUFFO1lBQzFDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNQyxZQUFZLEdBQUlDLEtBQXFDLElBQVU7Y0FDcEVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUlMLE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUssVUFBVSxFQUFFQSxPQUFPLENBQUNJLEtBQUssQ0FBQztZQUM3RCxDQUFDO1lBQ0QsT0FDQ1QsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBQSxZQUFlUixHQUFHO2NBQUVTLFNBQVMsRUFBQztZQUE0QyxHQUN4RVIsT0FBTyxJQUFJTCxNQUFBLENBQUFX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