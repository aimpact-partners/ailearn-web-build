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
        hash: 2315952625,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkZXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltZyIsImdsb2JhbFRoaXMiLCJJbWFnZSIsIm9uTG9hZCIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkltZyIsInNldFN0YXRlIiwic3RhdGUiLCJhbHQiLCJfZXJyb3IiLCJfdXNlTG9hZGVyIiwiX2ltZyIsIl9zb3VyY2VzIiwiX2ZyYW1lck1vdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplTG9hZGluZyIsImNscyIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsInZhbHVlIiwic3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJDb250ZW50IiwiUHJvdmlkZXIiLCJtb3Rpb24iLCJwaWN0dXJlIiwic3R5bGUiLCJTb3VyY2VzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaXRlbSIsInNvdXJjZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImtleSIsInNyY1NldCIsIkZyYWdtZW50IiwibWVkaWEiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvZXJyb3IvaW5kZXgudHN4IiwiL3RzL2hvb2tzL3VzZS1sb2FkZXIudHN4IiwiL3RzL2ltZy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2luZGV4LnRzIiwiL3RzL3NvdXJjZXMvaW5kZXgudHN4IiwiL3RzL3NvdXJjZXMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUE0QkYsS0FBSyxDQUFDSSxhQUFhLENBQUMsRUFBYyxDQUFDO1VBQ2pGLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFnQkwsS0FBSyxDQUFDTSxVQUFVLENBQUNKLFlBQVksQ0FBQztVQUFDQyxPQUFBLENBQUFFLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKOUUsSUFBQUUsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBRU0sU0FBVVMsS0FBS0EsQ0FBQTtZQUNwQixNQUFNO2NBQUVDLEdBQUc7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSCxlQUFlLEdBQUU7WUFFMUMsTUFBTVEsWUFBWSxHQUFJQyxLQUFxQyxJQUFVO2NBQ3BFQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFJSCxPQUFPLElBQUksT0FBT0EsT0FBTyxLQUFLLFVBQVUsRUFBRUEsT0FBTyxDQUFDRSxLQUFLLENBQUM7WUFDN0QsQ0FBQztZQUNELE9BQ0NQLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUEsWUFBZU4sR0FBRztjQUFFTyxTQUFTLEVBQUM7WUFBNEMsR0FDeEVOLE9BQU8sSUFBSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBVSxVQUFVO2NBQUNDLE9BQU8sRUFB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