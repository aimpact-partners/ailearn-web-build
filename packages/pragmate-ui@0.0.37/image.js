System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Image, __beyond_pkg, hmr;
  _export("Image", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_2 = _pragmateUi0037Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEdBQ1ZDO2NBQUtDLEdBQUcsRUFBQyxPQUFPO2NBQUEsWUFBVzFCLEdBQUc7Y0FBRUgsU0FBUyxFQUFDO1lBQWUsR0FDdkRLLE9BQU8sSUFBSXVCLDZCQUFDRSxpQkFBVTtjQUFDN0IsT0FBTyxFQUFFc0IsWUFBWTtjQUFFUSxJQUFJLEVBQUM7WUFBUyxFQUFHLENBRWpFO1lBQ0QsTUFBTUMsTUFBTSxHQUFnQko7Y0FBS3pCLEdBQUcsRUFBRUEsR0FBRztjQUFFTyxNQUFNLEVBQUVBLE1BQU07Y0FBRXVCLE9BQU8sRUFBRXJDLEtBQUssQ0FBQ3FDLE9BQU8sSUFBSSxPQUFPO2NBQUU3QixHQUFHLEVBQUVBO1lBQUcsRUFBSTtZQUMxR2tCLE1BQU0sR0FBR1gsS0FBSyxHQUFHZ0IsS0FBSyxHQUFHSyxNQUFNO1lBRS9CLE1BQU1FLFVBQVUsR0FBVTtjQUFFLEdBQUd0QyxLQUFLO2NBQUVJLFNBQVMsRUFBRTBCLEdBQUc7Y0FBRXpCO1lBQU8sQ0FBRTtZQUMvRCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDa0MsT0FBTyxDQUFDQyxJQUFJLElBQUksT0FBT0YsVUFBVSxDQUFDRSxJQUFJLENBQUMsQ0FBQztZQUUxRyxPQUNDUjtjQUFBLFlBQWtCekIsR0FBRztjQUFBLEdBQU0rQjtZQUFVLEdBQ25DWixNQUFNLEVBQ05wQixRQUFRLENBQ0Q7VUFFWCIsIm5hbWVzIjpbIkltYWdlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwiY2xhc3NOYW1lIiwib25DbGljayIsImNoaWxkcmVuIiwic3JjIiwiYWx0Iiwib25FcnJvciIsImltYWdlIiwic2V0SW1hZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwib25Mb2FkIiwiZXJyb3IiLCJodG1sTG9hZGVkIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsImdsb2JhbFRoaXMiLCJvbmxvYWQiLCJvbmVycm9yIiwiY3VycmVudFNyYyIsInVuZGVmaW5lZCIsIm91dHB1dCIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xzIiwiRXJyb3IiLCJSZWFjdCIsImtleSIsIkljb25CdXR0b24iLCJpY29uIiwiTG9hZGVkIiwibG9hZGluZyIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvaW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19