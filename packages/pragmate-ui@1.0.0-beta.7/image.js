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
        hash: 3780936939,
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
                console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwidXNlTG9hZGVyIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbWciLCJnbG9iYWxUaGlzIiwiSW1hZ2UiLCJvbkxvYWQiLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJbWciLCJzZXRTdGF0ZSIsInN0YXRlIiwiYWx0IiwiX2Vycm9yIiwiX3VzZUxvYWRlciIsIl9pbWciLCJfc291cmNlcyIsIl9mcmFtZXJNb3Rpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwic2l6ZUxvYWRpbmciLCJjbHMiLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlcyIsImhlaWdodCIsIndpZHRoIiwiQ29udGVudCIsIlByb3ZpZGVyIiwibW90aW9uIiwicGljdHVyZSIsInN0eWxlIiwiU291cmNlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2l0ZW0iLCJzb3VyY2VzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIkl0ZW0iLCJrZXkiLCJzcmNTZXQiLCJGcmFnbWVudCIsIm1lZGlhIiwibWF4V2lkdGgiLCJtaW5XaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2Vycm9yL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtbG9hZGVyLnRzeCIsIi90cy9pbWcudHN4IiwiL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi90cy9zb3VyY2VzL2luZGV4LnRzeCIsIi90cy9zb3VyY2VzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBNEJGLEtBQUssQ0FBQ0ksYUFBYSxDQUFDLEVBQWMsQ0FBQztVQUNqRixNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBZ0JMLEtBQUssQ0FBQ00sVUFBVSxDQUFDSixZQUFZLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSjlFLElBQUFFLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUVNLFNBQVVTLEtBQUtBLENBQUE7WUFDcEIsTUFBTTtjQUFFQyxHQUFHO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUgsZUFBZSxHQUFFO1lBQzFDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNQyxZQUFZLEdBQUlDLEtBQXFDLElBQVU7Y0FDcEVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUlMLE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUssVUFBVSxFQUFFQSxPQUFPLENBQUNJLEtBQUssQ0FBQztZQUM3RCxDQUFDO1lBQ0QsT0FDQ1QsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBQSxZQUFlUixHQUFHO2NBQUVTLFNBQVMsRUFBQztZQUE0QyxHQUN4RVIsT0FBTyxJQUFJTCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixNQUFBLENBQUFZLFVBQVU7Y0FBQ0MsT0FBTyxFQUFFUCxZQUFZO2NBQUVRLElBQUksRUFBQztZQUFTLEVBQUcsQ0FDM0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWhCLE1BQUEsR0FBQU4sT0FBQTtVQUVPO1VBQVUsU0FBVXVCLFNBQVNBLENBQUNiLEdBQUc7WUFDdkMsTUFBTSxDQUFDYyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHbkIsTUFBQSxDQUFBVyxPQUFLLENBQUNTLFFBQVEsQ0FBZ0MsU0FBUyxDQUFDO1lBRXBGcEIsTUFBQSxDQUFBVyxPQUFLLENBQUNVLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2pCLEdBQUcsRUFBRTtnQkFDVDtnQkFDQTs7Y0FHRCxNQUFNa0IsR0FBRyxHQUFHLElBQUlDLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFO2NBQ2xDLE1BQU1DLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2dCQUNuQk4sU0FBUyxDQUFDLE9BQU8sQ0FBQztjQUNuQixDQUFDO2NBQ0QsTUFBTWQsT0FBTyxHQUFHcUIsQ0FBQyxJQUFHO2dCQUNuQnBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbUIsQ0FBQyxDQUFDO2dCQUNkUCxTQUFTLENBQUMsT0FBTyxDQUFDO2NBQ25CLENBQUM7Y0FFREcsR0FBRyxDQUFDSyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVGLE1BQU0sQ0FBQztjQUNwQ0gsR0FBRyxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV0QixPQUFPLENBQUM7Y0FDdENpQixHQUFHLENBQUNsQixHQUFHLEdBQUdBLEdBQUc7Y0FFYixPQUFPLE1BQUs7Z0JBQ1hrQixHQUFHLENBQUNNLG1CQUFtQixDQUFDLE1BQU0sRUFBRUgsTUFBTSxDQUFDO2dCQUN2Q0gsR0FBRyxDQUFDTSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUV2QixPQUFPLENBQUM7Y0FDMUMsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDRCxHQUFHLENBQUMsQ0FBQztZQUVULE9BQU87Y0FBRWM7WUFBTSxDQUFFO1VBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBbEIsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBRU0sU0FBVW1DLEdBQUdBLENBQUE7WUFDbEIsTUFBTTtjQUFFekIsR0FBRztjQUFFMEIsUUFBUTtjQUFFQyxLQUFLO2NBQUVDLEdBQUc7Y0FBRWQ7WUFBTSxDQUFFLEdBQUcsSUFBQWpCLFFBQUEsQ0FBQUgsZUFBZSxHQUFFO1lBRS9ELElBQUlvQixNQUFNLEtBQUssU0FBUyxFQUFFLE9BQU9sQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsRUFBRztZQUN0RSxJQUFJSyxNQUFNLEtBQUssT0FBTyxFQUFFLE9BQU9sQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FBRW1CLEdBQUcsQ0FBTztZQUUzRSxPQUFPaEMsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS1IsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQUosTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQXVDLE1BQUEsR0FBQXZDLE9BQUE7VUFDQSxJQUFBd0MsVUFBQSxHQUFBeEMsT0FBQTtVQUNBLElBQUF5QyxJQUFBLEdBQUF6QyxPQUFBO1VBRUEsSUFBQTBDLFFBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBMkMsYUFBQSxHQUFBM0MsT0FBQTtVQUVPO1VBQVUsU0FDUjhCLEtBQUtBLENBQUNjLEtBQUEsR0FBZ0IsRUFBRTtZQUNoQyxNQUFNO2NBQUV6QixTQUFTO2NBQUVFLE9BQU87Y0FBRXdCLFFBQVE7Y0FBRUM7WUFBVyxDQUFFLEdBQUdGLEtBQUs7WUFFM0QsTUFBTTtjQUFFcEI7WUFBTSxDQUFFLEdBQUcsSUFBQWdCLFVBQUEsQ0FBQWpCLFNBQVMsRUFBQ3FCLEtBQUssQ0FBQ2xDLEdBQUcsQ0FBQztZQUV2QyxJQUFJcUMsR0FBRyxHQUFXLGFBQWE1QixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRWpFLElBQUlLLE1BQU0sS0FBSyxTQUFTLEVBQUV1QixHQUFHLElBQUksb0JBQW9CO1lBQ3JELElBQUl2QixNQUFNLEtBQUssT0FBTyxFQUFFdUIsR0FBRyxJQUFJLGtCQUFrQjtZQUNqRCxNQUFNQyxVQUFVLEdBQVc7Y0FBRSxHQUFHSixLQUFLO2NBQUV6QixTQUFTLEVBQUU0QixHQUFHO2NBQUUxQjtZQUFPLENBQUU7WUFDaEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDNEIsT0FBTyxDQUNsR0MsSUFBSSxJQUFJLE9BQU9GLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQy9CO1lBRUQsTUFBTUMsS0FBSyxHQUFhO2NBQ3ZCLEdBQUdQLEtBQUs7Y0FDUmxDLEdBQUcsRUFBRWtDLEtBQUssQ0FBQ2xDLEdBQUc7Y0FDZGM7YUFDQTtZQUNELE1BQU00QixNQUFNLEdBQXdCLEVBQUU7WUFDdEMsSUFDQzVCLE1BQU0sS0FBSyxPQUFPLElBQ2xCLENBQUMsQ0FBQ3NCLFdBQVcsSUFDYixPQUFPQSxXQUFXLEtBQUssUUFBUSxJQUMvQkEsV0FBVyxDQUFDTyxNQUFNLElBQ2xCUCxXQUFXLENBQUNRLEtBQUssRUFDaEI7Y0FDREYsTUFBTSxDQUFDQyxNQUFNLEdBQUdQLFdBQVcsQ0FBQ08sTUFBTTtjQUNsQ0QsTUFBTSxDQUFDRSxLQUFLLEdBQUdSLFdBQVcsQ0FBQ1EsS0FBSzs7WUFHakMsTUFBTUMsT0FBTyxHQUFHL0IsTUFBTSxLQUFLLE9BQU8sR0FBR2UsTUFBQSxDQUFBOUIsS0FBSyxHQUFHZ0MsSUFBQSxDQUFBTixHQUFHO1lBQ2hELE9BQ0M3QixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxRQUFBLENBQUFOLFlBQVksQ0FBQ3VELFFBQVE7Y0FBQ0wsS0FBSyxFQUFFQTtZQUFLLEdBQ2xDN0MsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lCLGFBQUEsQ0FBQWMsTUFBTSxDQUFDQyxPQUFPO2NBQUEsR0FBS1YsVUFBVTtjQUFFVyxLQUFLLEVBQUVQLE1BQU07Y0FBQSxZQUFZUixLQUFLLENBQUNsQztZQUFHLEdBQ2pFSixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsUUFBQSxDQUFBa0IsT0FBTyxPQUFHLEVBQ1h0RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUMsT0FBTztjQUFBLEdBQUtQO1lBQVUsRUFBSSxFQUMxQkgsUUFBUSxDQUNPLENBQ007VUFFMUI7Ozs7Ozs7Ozs7O1VDbkRBOztVQUVBZ0IsTUFBQSxDQUFBQyxjQUFBLENBQUE1RCxPQUFBO1lBQ0FpRCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTdDLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUErRCxLQUFBLEdBQUEvRCxPQUFBO1VBRU0sU0FBVTRELE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUFFSTtZQUFPLENBQUUsR0FBRyxJQUFBekQsUUFBQSxDQUFBSCxlQUFlLEdBQUU7WUFDckMsSUFBSSxDQUFDNEQsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixPQUFPLENBQUMsSUFBSSxDQUFDQSxPQUFPLENBQUNHLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDdkUsTUFBTUMsTUFBTSxHQUFrQkosT0FBTyxDQUFDSyxHQUFHLENBQUNDLElBQUksSUFBSWhFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUM2QyxLQUFBLENBQUFRLElBQUk7Y0FBQ0MsR0FBRyxFQUFFRixJQUFJLENBQUNHLE1BQU07Y0FBQSxHQUFNSDtZQUFJLEVBQUksQ0FBQztZQUN2RixPQUFPaEUsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQVosTUFBQSxDQUFBVyxPQUFBLENBQUF5RCxRQUFBLFFBQUdOLE1BQU0sQ0FBSTtVQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBOUQsTUFBQSxHQUFBTixPQUFBO1VBR00sU0FBVXVFLElBQUlBLENBQUMzQixLQUFjO1lBQy9CLElBQUksQ0FBQ0EsS0FBSyxDQUFDNkIsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUM5QixJQUFJRSxLQUFLLEdBQVcsRUFBRTtZQUN0QixNQUFNO2NBQUVDLFFBQVE7Y0FBRUM7WUFBUSxDQUFFLEdBQUdqQyxLQUFLO1lBQ3BDLElBQUksQ0FBQ2dDLFFBQVEsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBRUYsS0FBSyxHQUFHLGVBQWVFLFFBQVEsS0FBSztZQUNqRSxJQUFJLENBQUMsQ0FBQ0QsUUFBUSxJQUFJLENBQUNDLFFBQVEsRUFBRUYsS0FBSyxHQUFHLGVBQWVDLFFBQVEsS0FBSztZQUNqRSxJQUFJLENBQUMsQ0FBQ0EsUUFBUSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFFRixLQUFLLEdBQUcsZUFBZUUsUUFBUSx1QkFBdUJELFFBQVEsS0FBSztZQUNqRyxNQUFNNUIsVUFBVSxHQUFHO2NBQUUsR0FBR0o7WUFBSyxDQUFFO1lBQy9CLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDSyxPQUFPLENBQUNxQixJQUFJLElBQUksT0FBT3RCLFVBQVUsQ0FBQ3NCLElBQUksQ0FBQyxDQUFDO1lBQ2pFLE9BQU9oRSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFReUQsS0FBSyxFQUFFQSxLQUFLO2NBQUEsR0FBTTNCO1lBQVUsRUFBSTtVQUNuRDtVQUFDIiwiaWdub3JlTGlzdCI6W119