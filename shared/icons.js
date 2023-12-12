System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ICONS, AppIcon, AppIconButton, AppButton, __beyond_pkg, hmr;
  _export({
    ICONS: void 0,
    AppIcon: void 0,
    AppIconButton: void 0,
    AppButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_pragmateUi003Components) {
      dependency_3 = _pragmateUi003Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/shared/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/components', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./icons
      ***********************/
      ims.set('./icons', {
        hash: 4271561616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          /* bundle */
          const ICONS = exports.ICONS = {
            classworks: {
              icon: `<g>
    
    <path id="Unión_4" data-name="Unión 4" d="M2.507,24A2.6,2.6,0,0,1,0,21.335V2.67A2.6,2.6,0,0,1,2.507,0h20.8a2.6,2.6,0,0,1,2.507,2.67v4H23.312v-4H2.507V21.335H9.521V24Zm9.08-.011V19.535l7.764-8.2,1.667-1.763a1.862,1.862,0,0,1,2.743,0l1.486,1.573a2.114,2.114,0,0,1,0,2.9l-.878.93L24.344,15l-.751.792-7.759,8.2ZM13.6,20.424V21.9h1.4L22.159,14.3l-1.386-1.465ZM5.573,14V11.335h6.91V14Zm0-5.333V6H20.179V8.669Z" transform="translate(1.179 1.998)"/>
  </g>`,
              viewBox: '0 0 28 28'
            },
            classes: {
              viewBox: '0 0 28 28',
              icon: `<g>
    
    <path id="Unión_8" data-name="Unión 8" d="M11.792,18.936V17.314c0-2.16,4.362-3.244,6.545-3.244s6.55,1.084,6.55,3.244v1.622Zm-3.426,0H0V15.695c0-1.2.654-2.888,3.766-4.123a16.065,16.065,0,0,1,3.254-.879,9.577,9.577,0,0,1,1.767-.117c1.259,0,2.511.1,2.533.117a15.677,15.677,0,0,1,3.25.879c.229.089.453.187.673.292a16.243,16.243,0,0,0-4.254,1.407A11.47,11.47,0,0,0,9.175,13.1a13.274,13.274,0,0,0-4.432.879c-1.31.525-2.124,1.186-2.124,1.717v.642H8.372c0,.043,0,.086,0,.132v2.467Zm6.7-9.732a3.273,3.273,0,1,1,3.271,3.244A3.257,3.257,0,0,1,15.066,9.2ZM3.875,4.642a4.689,4.689,0,0,1,9.378,0,4.689,4.689,0,0,1-9.378,0Zm2.348,0A2.343,2.343,0,1,0,8.567,2.322,2.339,2.339,0,0,0,6.222,4.642Z" transform="translate(1.555 4.532)"/>
  </g>
  `
            }
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 733975510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppButton = AppButton;
          exports.AppIcon = AppIcon;
          exports.AppIconButton = AppIconButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("./icons");
          /*bundle*/
          function AppIcon({
            icon
          }) {
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
            return _react.default.createElement(_icons.Icon, {
              icon: icon
            });
          }
          /*bundle*/
          function AppIconButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
          /*bundle */
          function AppButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return _react.default.createElement(_components.Button, {
              ...attrs
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons",
        "from": "ICONS",
        "name": "ICONS"
      }, {
        "im": "./index",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./index",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./index",
        "from": "AppButton",
        "name": "AppButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ICONS') && _export("ICONS", ICONS = require ? require('./icons').ICONS : value);
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./index').AppIcon : value);
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./index').AppIconButton : value);
        (require || prop === 'AppButton') && _export("AppButton", AppButton = require ? require('./index').AppButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJQ09OUyIsImV4cG9ydHMiLCJjbGFzc3dvcmtzIiwiaWNvbiIsInZpZXdCb3giLCJjbGFzc2VzIiwiX3JlYWN0IiwicmVxdWlyZSIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFwcEljb24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbiIsIkFwcEljb25CdXR0b24iLCJwcm9wcyIsImF0dHJzIiwiY2hpbGRyZW4iLCJJY29uQnV0dG9uIiwiQXBwQnV0dG9uIiwiQnV0dG9uIl0sInNvdXJjZXMiOlsiL2ljb25zLnRzIiwiL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBYSxNQUFNQSxLQUFLLEdBQUFDLE9BQUEsQ0FBQUQsS0FBQSxHQUFHO1lBQ2pDRSxVQUFVLEVBQUU7Y0FDWEMsSUFBSSxFQUFFOzs7T0FHRDtjQUNMQyxPQUFPLEVBQUU7YUFDVDtZQUNEQyxPQUFPLEVBQUU7Y0FDUkQsT0FBTyxFQUFFLFdBQVc7Y0FDcEJELElBQUksRUFBRTs7Ozs7O1dBTVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkQsSUFBQUcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBRU87VUFBVSxTQUFVSSxPQUFPQSxDQUFDO1lBQUVSO1VBQUksQ0FBRTtZQUMxQ0EsSUFBSSxHQUFHTyxPQUFBLENBQUFWLEtBQUssQ0FBQ1ksY0FBYyxDQUFDVCxJQUFJLENBQUMsR0FBR08sT0FBQSxDQUFBVixLQUFLLENBQUNHLElBQUksQ0FBQyxHQUFHQSxJQUFJO1lBRXRELE9BQU9HLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLE1BQUEsQ0FBQU8sSUFBSTtjQUFDWixJQUFJLEVBQUVBO1lBQUksRUFBSTtVQUM1QjtVQUVPO1VBQVUsU0FBVWEsYUFBYUEsQ0FBQ0MsS0FBSztZQUM3QyxNQUFNQyxLQUFLLEdBQUc7Y0FBRSxHQUFHRDtZQUFLLENBQUU7WUFDMUIsT0FBT0MsS0FBSyxDQUFDQyxRQUFRO1lBQ3JCLElBQUlGLEtBQUssQ0FBQ2QsSUFBSSxFQUFFO2NBQ2YsSUFBSTtnQkFBRUE7Y0FBSSxDQUFFLEdBQUdjLEtBQUs7Y0FDcEJkLElBQUksR0FBR08sT0FBQSxDQUFBVixLQUFLLENBQUNZLGNBQWMsQ0FBQ1QsSUFBSSxDQUFDLEdBQUdPLE9BQUEsQ0FBQVYsS0FBSyxDQUFDRyxJQUFJLENBQUMsR0FBR0EsSUFBSTtjQUN0RGUsS0FBSyxDQUFDZixJQUFJLEdBQUdBLElBQUk7O1lBR2xCLE9BQU9HLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLE1BQUEsQ0FBQVksVUFBVTtjQUFBLEdBQUtGO1lBQUssRUFBSTtVQUNqQztVQUVPO1VBQVcsU0FBVUcsU0FBU0EsQ0FBQ0osS0FBSztZQUMxQyxNQUFNQyxLQUFLLEdBQUc7Y0FBRSxHQUFHRDtZQUFLLENBQUU7WUFDMUIsT0FBT0MsS0FBSyxDQUFDQyxRQUFRO1lBQ3JCLElBQUlGLEtBQUssQ0FBQ2QsSUFBSSxFQUFFO2NBQ2YsSUFBSTtnQkFBRUE7Y0FBSSxDQUFFLEdBQUdjLEtBQUs7Y0FDcEJkLElBQUksR0FBR08sT0FBQSxDQUFBVixLQUFLLENBQUNZLGNBQWMsQ0FBQ1QsSUFBSSxDQUFDLEdBQUdPLE9BQUEsQ0FBQVYsS0FBSyxDQUFDRyxJQUFJLENBQUMsR0FBR0EsSUFBSTtjQUN0RGUsS0FBSyxDQUFDZixJQUFJLEdBQUdBLElBQUk7O1lBR2xCLE9BQU9HLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNMLFdBQUEsQ0FBQWEsTUFBTTtjQUFBLEdBQUtKO1lBQUssR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQVU7VUFDcEQifQ==