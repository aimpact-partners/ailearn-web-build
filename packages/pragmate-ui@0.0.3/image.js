System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.23"]]);
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
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./image
      ***********************/
      ims.set('./image', {
        hash: 2620036535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Image = Image;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Image(props) {
            const initialState = {
              size: '200x200',
              loaded: false
            };
            const {
              className,
              onClick,
              children,
              src,
              alt,
              onError
            } = props;
            const [image, setImage] = (0, _react.useState)();
            const [state, setState] = (0, _react.useState)(initialState);
            const onLoad = () => setState({
              ...state,
              error: false,
              htmlLoaded: true
            });
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
              const currentSrc = src;
              if (state.url !== currentSrc) {
                let size = props.size ?? state.size;
                loadImage(currentSrc, size);
              }
              return () => setImage({
                ...state,
                onload: undefined,
                onerror: undefined
              });
              // eslint-disable-next-line
            }, [src]);
            const {
              error,
              loaded,
              htmlLoaded
            } = state;
            let output;
            const onClickError = event => {
              event.stopPropagation();
              if (onError && typeof onError === 'function') onError(event);
            };
            let cls = `pui-image ${className ? ` ${className}` : ''}`;
            if (!loaded && !htmlLoaded) cls += ' pui-image-preload';
            if (error) cls += ' pui-image-error';
            const Error = _react.default.createElement("div", {
              key: 'error',
              "data-src": src,
              className: 'content-error'
            }, onError && _react.default.createElement(_icons.IconButton, {
              onClick: onClickError,
              icon: 'refresh'
            }));
            const Loaded = _react.default.createElement("img", {
              src: src,
              onLoad: onLoad,
              loading: props.loading ?? 'eager',
              alt: alt
            });
            output = error ? Error : Loaded;
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            ['src', 'alt', 'onError', 'children', 'size', 'loading', 'error'].forEach(prop => delete properties[prop]);
            return _react.default.createElement("figure", {
              ...properties
            }, output, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2547389877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./image",
        "from": "Image",
        "name": "Image"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Image') && _export("Image", Image = require ? require('./image').Image : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiSW1hZ2UiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJvbkVycm9yIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJnbG9iYWxUaGlzIiwib25sb2FkIiwib25lcnJvciIsInVzZUVmZmVjdCIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkxvYWRlZCIsImxvYWRpbmciLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9pbWFnZS50c3giLCIvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxTQUNSRSxLQUFLQSxDQUFDQyxLQUFhO1lBQzNCLE1BQU1DLFlBQVksR0FBa0I7Y0FBRUMsSUFBSSxFQUFFLFNBQVM7Y0FBRUMsTUFBTSxFQUFFO1lBQUssQ0FBRTtZQUN0RSxNQUFNO2NBQUVDLFNBQVM7Y0FBRUMsT0FBTztjQUFFQyxRQUFRO2NBQUVDLEdBQUc7Y0FBRUMs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