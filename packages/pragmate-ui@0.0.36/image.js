System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/image"
        },
        "type": "code",
        "name": "image"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./image
      ***********************/
      ims.set('./image', {
        hash: 3578672948,
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
              size: "200x200",
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
              if (onError && typeof onError === "function") onError(event);
            };
            let cls = `beyond-element-image ${className ? ` ${className}` : ""}`;
            if (1 === 1 || !loaded && !htmlLoaded) cls += " beyond-element-image-preload";
            if (error) cls += " beyond-element-image-error";
            const Error = _react.default.createElement("div", {
              key: "error",
              "data-src": src,
              className: "content-error"
            }, onError && _react.default.createElement(_icons.IconButton, {
              onClick: onClickError,
              icon: "refresh"
            }));
            const Loaded = _react.default.createElement("img", {
              src: src,
              onLoad: onLoad,
              loading: props.loading ?? "eager",
              alt: alt
            });
            output = error ? Error : Loaded;
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            ["src", "alt", "onError", "children", "size", "loading", "error"].forEach(prop => delete properties[prop]);
            return _react.default.createElement("figure", {
              "data-src": src,
              ...properties
            }, output, children);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiSW1hZ2UiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJvbkVycm9yIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJnbG9iYWxUaGlzIiwib25sb2FkIiwib25lcnJvciIsInVzZUVmZmVjdCIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkxvYWRlZCIsImxvYWRpbmciLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiXSwic291cmNlcyI6WyIvY29kZS90cy9pbWFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFPQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUF3Qk87VUFBVSxTQUNSRSxLQUFLQSxDQUFDQyxLQUFZO1lBQ3pCLE1BQU1DLFlBQVksR0FBaUI7Y0FBRUMsSUFBSSxFQUFFLFNBQVM7Y0FBRUMsTUFBTSxFQUFFO1lBQUssQ0FBRTtZQUNyRSxNQUFNO2NBQUVDLFNBQVM7Y0FBRUMsT0FBTztjQUFFQyxRQUFRO2NBQUVDLEdBQUc7Y0FBRUMsR0FBRztjQUFFQztZQUFPLENBQUUsR0FBR1QsS0FBSztZQUNqRSxNQUFNLENBQUNVLEtBQUssRUFBRUMs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