System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/image"
        },
        "type": "code",
        "name": "image"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/image');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./image
      ***********************/
      ims.set('./image', {
        hash: 4222461655,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiSW1hZ2UiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJvbkVycm9yIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJnbG9iYWxUaGlzIiwib25sb2FkIiwib25lcnJvciIsInVzZUVmZmVjdCIsImN1cnJlbnRTcmMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkxvYWRlZCIsImxvYWRpbmciLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3AiXSwic291cmNlcyI6WyIvdHMvaW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQXdCTztVQUFVLFNBQ1JFLEtBQUtBLENBQUNDLEtBQVk7WUFDMUIsTUFBTUMsWUFBWSxHQUFpQjtjQUFFQyxJQUFJLEVBQUUsU0FBUztjQUFFQyxNQUFNLEVBQUU7WUFBSyxDQUFFO1lBQ3JFLE1BQU07Y0FBRUMsU0FBUztjQUFFQyxPQUFPO2NBQUVDLFFBQVE7Y0FBRUMsR0FBRztjQUFFQyxHQUFHO2NBQUVDO1lBQU8sQ0FBRSxHQUFHVCxLQUFLO1lBQ2pFLE1BQU0sQ0FBQ1UsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBZixNQUFBLENBQUFnQixRQUFRLEdBQW1DO1lBQ3JFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBbEIsTUFBQSxDQUFBZ0IsUUFBUSxFQUFlWCxZQUFZLENBQUM7WUFDOUQsTUFBTWMsTUFBTSxHQUFlQSxDQUFBLEtBQVlELFFBQVEsQ0FBQztjQUFFLEdBQUdELEtBQUs7Y0FBRUcsS0FBSyxFQUFFLEtBQUs7Y0FBRUMsVUFBVSxFQUFFO1lBQUksQ0FBRSxDQUFDO1lBQzdGLE1BQU1DLFNBQVMsR0FBR0EsQ0FBQ0MsR0FBVyxFQUFFakIsSUFBWSxLQUFVO2NBQ3JELElBQUlrQixRQUFRLEdBQVdELEdBQUc7Y0FFMUIsTUFBTUUsUUFBUSxHQUFxQixJQUFJQyxVQUFVLENBQUN2QixLQUFLLEVBQUU7Y0FDekRzQixRQUFRLENBQUNFLE1BQU0sR0FBRyxNQUFZVCxRQUFRLENBQUM7Z0JBQUUsR0FBR0QsS0FBSztnQkFBRVYsTUFBTSxFQUFFLElBQUk7Z0JBQUVhLEtBQUssRUFBRTtjQUFLLENBQUUsQ0FBQztjQUNoRkssUUFBUSxDQUFDRyxPQUFPLEdBQUcsTUFBWVYsUUFBUSxDQUFDO2dCQUFFLEdBQUdELEtBQUs7Z0JBQUVHLEtBQUssRUFBRSxJQUFJO2dCQUFFYixNQUFNLEVBQUU7Y0FBSyxDQUFFLENBQUM7Y0FDakZrQixRQUFRLENBQUNkLEdBQUcsR0FBR2EsUUFBUTtjQUN2QlQsUUFBUSxDQUFDVSxRQUFRLENBQUM7Y0FDbEJQLFFBQVEsQ0FBQztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTSxHQUFHO2dCQUFFakIsSUFBSTtnQkFBRUssR0FBRyxFQUFFYSxRQUFRO2dCQUFFakIsTUFBTSxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQy9ELENBQUM7WUFFRCxJQUFBUCxNQUFBLENBQUE2QixTQUFTLEVBQUMsTUFBSztjQUNkLE1BQU1DLFVBQVUsR0FBV25CLEdBQUc7Y0FDOUIsSUFBSU0sS0FBSyxDQUFDTSxHQUFHLEtBQUtPLFVBQVUsRUFBRTtnQkFDN0IsSUFBSXhCLElBQUksR0FBV0YsS0FBSyxDQUFDRSxJQUFJLElBQUlXLEtBQUssQ0FBQ1gsSUFBSTtnQkFDM0NnQixTQUFTLENBQUNRLFVBQVUsRUFBRXhCLElBQUksQ0FBQzs7Y0FHNUIsT0FBTyxNQUFZUyxRQUFRLENBQUM7Z0JBQUUsR0FBR0UsS0FBSztnQkFBRVUsTUFBTSxFQUFFSSxTQUFTO2dCQUFFSCxPQUFPLEVBQUVHO2NBQVMsQ0FBRSxDQUFDO2NBQ2hGO1lBQ0QsQ0FBQyxFQUFFLENBQUNwQixHQUFHLENBQUMsQ0FBQztZQUVULE1BQU07Y0FBRVMsS0FBSztjQUFFYixNQUFNO2NBQUVjO1lBQVUsQ0FBRSxHQUFHSixLQUFLO1lBQzNDLElBQUllLE1BQW1CO1lBQ3ZCLE1BQU1DLFlBQVksR0FBSUMsS0FBcUMsSUFBVTtjQUNwRUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBSXRCLE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUssVUFBVSxFQUFFQSxPQUFPLENBQUNxQixLQUFLLENBQUM7WUFDN0QsQ0FBQztZQUVELElBQUlFLEdBQUcsR0FBVyxhQUFhNUIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUNELE1BQU0sSUFBSSxDQUFDYyxVQUFVLEVBQUVlLEdBQUcsSUFBSSxvQkFBb0I7WUFDdkQsSUFBSWhCLEtBQUssRUFBRWdCLEdBQUcsSUFBSSxrQkFBa0I7WUFDcEMsTUFBTUMsS0FBSyxHQUNWckMsTUFBQSxDQUFBc0MsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLEdBQUcsRUFBQyxPQUFPO2NBQUEsWUFBVzdCLEdBQUc7Y0FBRUgsU0FBUyxFQUFDO1lBQWUsR0FDdkRLLE9BQU8sSUFBSWIsTUFBQSxDQUFBc0MsT0FBQSxDQUFBQyxhQUFBLENBQUNyQyxNQUFBLENBQUF1QyxVQUFVO2NBQUNoQyxPQUFPLEVBQUV3QixZQUFZO2NBQUVTLElBQUksRUFBQztZQUFTLEVBQUcsQ0FFakU7WUFDRCxNQUFNQyxNQUFNLEdBQWdCM0MsTUFBQSxDQUFBc0MsT0FBQSxDQUFBQyxhQUFBO2NBQUs1QixHQUFHLEVBQUVBLEdBQUc7Y0FBRVEsTUFBTSxFQUFFQSxNQUFNO2NBQUV5QixPQUFPLEVBQUV4QyxLQUFLLENBQUN3QyxPQUFPLElBQUksT0FBTztjQUFFaEMsR0FBRyxFQUFFQTtZQUFHLEVBQUk7WUFDMUdvQixNQUFNLEdBQUdaLEtBQUssR0FBR2lCLEtBQUssR0FBR00sTUFBTTtZQUUvQixNQUFNRSxVQUFVLEdBQVU7Y0FBRSxHQUFHekMsS0FBSztjQUFFSSxTQUFTLEVBQUU0QixHQUFHO2NBQUUzQjtZQUFPLENBQUU7WUFDL0QsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ3FDLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJLE9BQU9GLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFFMUcsT0FDQy9DLE1BQUEsQ0FBQXNDLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLFlBQWtCNUIsR0FBRztjQUFBLEdBQU1rQztZQUFVLEdBQ25DYixNQUFNLEVBQ050QixRQUFRLENBQ0Q7VUFFWCJ9