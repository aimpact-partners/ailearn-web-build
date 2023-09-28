System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_2 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./image
      ***********************/
      ims.set('./image', {
        hash: 3218051898,
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
            if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUMsS0FBSyxHQUNUQztjQUFLQyxHQUFHLEVBQUMsT0FBTztjQUFBLFlBQVcxQixHQUFHO2NBQUVILFNBQVMsRUFBQztZQUFlLEdBQ3RESyxPQUFPLElBQUl1Qiw2QkFBQ0UsaUJBQVU7Y0FBQzdCLE9BQU8sRUFBRXNCLFlBQVk7Y0FBRVEsSUFBSSxFQUFDO1lBQVMsRUFBRyxDQUVuRTtZQUNELE1BQU1DLE1BQU0sR0FDVko7Y0FDRXpCLEdBQUcsRUFBRUEsR0FBRztjQUNSTyxNQUFNLEVBQUVBLE1BQU07Y0FDZHVCLE9BQU8sRUFBRXJDLEtBQUssQ0FBQ3FDLE9BQU8sSUFBSSxPQUFPO2NBQ2pDN0IsR0FBRyxFQUFFQTtZQUFHLEVBRVg7WUFDRGtCLE1BQU0sR0FBR1gsS0FBSyxHQUFHZ0IsS0FBSyxHQUFHSyxNQUFNO1lBRS9CLE1BQU1FLFVBQVUsR0FBVTtjQUFFLEdBQUd0QyxLQUFLO2NBQUVJLFNBQVMsRUFBRTBCLEdBQUc7Y0FBRXpCO1lBQU8sQ0FBRTtZQUMvRCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDa0MsT0FBTyxDQUN0RUMsSUFBSSxJQUFLLE9BQU9GLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQ2xDO1lBRUQsT0FDRVI7Y0FBQSxZQUFrQnpCLEdBQUc7Y0FBQSxHQUFNK0I7WUFBVSxHQUNsQ1osTUFBTSxFQUNOcEIsUUFBUSxDQUNGO1VBRWIiLCJuYW1lcyI6WyJJbWFnZSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwic2l6ZSIsImxvYWRlZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIm9uRXJyb3IiLCJpbWFnZSIsInNldEltYWdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJnbG9iYWxUaGlzIiwib25sb2FkIiwib25lcnJvciIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yIiwiUmVhY3QiLCJrZXkiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkxvYWRlZCIsImxvYWRpbmciLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvaW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19