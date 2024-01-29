System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, DropdownProvider, DropdownLink, DropDownMenu, DropdownToggle, __beyond_pkg, hmr;
  _export({
    DropdownProvider: void 0,
    DropdownLink: void 0,
    DropDownMenu: void 0,
    DropdownToggle: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/dropdown');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 4270738753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownProvider = DropdownProvider;
          exports.useDropdownContext = void 0;
          var _react = require("react");
          const DropdownContext = _react.default.createContext(null);
          const useDropdownContext = () => (0, _react.useContext)(DropdownContext);
          exports.useDropdownContext = useDropdownContext;
          /*bundle*/
          function DropdownProvider(props) {
            const {
              children,
              isToggle,
              onToggle,
              isClose
            } = props;
            const [showMenu, setShowMenu] = _react.default.useState(false);
            const value = {
              showMenu,
              setShowMenu,
              isToggle,
              onToggle,
              isClose
            };
            return _react.default.createElement(DropdownContext.Provider, {
              value: value
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 3487775132,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownLink = DropdownLink;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function DropdownLink(props) {
            const {
              setShowMenu
            } = (0, _context.useDropdownContext)();
            const {
              children,
              className,
              onClick,
              tag,
              id
            } = props;
            const handleClick = async event => {
              event.stopPropagation();
              if (!!onClick && typeof onClick === "function") await onClick(event);
              setShowMenu(false);
            };
            const TagLink = tag ?? "div";
            const cls = `${className ?? ""} dropdown-link`;
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.onClick;
            delete properties.tag;
            delete properties.id;
            return _react.default.createElement(TagLink, {
              id: id,
              className: cls,
              onClick: handleClick,
              ...properties
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./menu
      **********************/

      ims.set('./menu', {
        hash: 281379387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropDownMenu = DropDownMenu;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function DropDownMenu({
            children,
            className
          }) {
            const {
              showMenu,
              setShowMenu,
              isToggle,
              onToggle,
              isClose
            } = (0, _context.useDropdownContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const handleClick = event => {
                const {
                  current
                } = ref;
                const isSameNode = current === event.target || current === event.currentTarget || event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) {
                  setShowMenu(false);
                  if (!!onToggle && isToggle && typeof onToggle === 'function' && isClose) {
                    onToggle();
                  }
                }
              };
              document.addEventListener('click', handleClick);
              return () => document.removeEventListener('click', handleClick);
            }, [isClose]);
            if (!showMenu && !isToggle) return null;
            const cls = `${className ?? ''} dropdown-menu-container`;
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./toggle
      ************************/

      ims.set('./toggle', {
        hash: 2970189459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownToggle = DropdownToggle;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function DropdownToggle({
            children,
            className
          }) {
            const cls = `${className ?? ''} dropdown-toggle`;
            const {
              showMenu,
              setShowMenu,
              isToggle,
              onToggle
            } = (0, _context.useDropdownContext)();
            const handleClick = event => {
              event.stopPropagation();
              if (!isToggle) setShowMenu(!showMenu);
              if (!!onToggle && isToggle && typeof onToggle === 'function') onToggle();
            };
            return React.createElement("div", {
              onClick: handleClick,
              className: cls
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "DropdownProvider",
        "name": "DropdownProvider"
      }, {
        "im": "./link",
        "from": "DropdownLink",
        "name": "DropdownLink"
      }, {
        "im": "./menu",
        "from": "DropDownMenu",
        "name": "DropDownMenu"
      }, {
        "im": "./toggle",
        "from": "DropdownToggle",
        "name": "DropdownToggle"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownProvider') && _export("DropdownProvider", DropdownProvider = require ? require('./context').DropdownProvider : value);
        (require || prop === 'DropdownLink') && _export("DropdownLink", DropdownLink = require ? require('./link').DropdownLink : value);
        (require || prop === 'DropDownMenu') && _export("DropDownMenu", DropDownMenu = require ? require('./menu').DropDownMenu : value);
        (require || prop === 'DropdownToggle') && _export("DropdownToggle", DropdownToggle = require ? require('./toggle').DropdownToggle : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRHJvcGRvd25Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEcm9wZG93bkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZXhwb3J0cyIsIkRyb3Bkb3duUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaXNUb2dnbGUiLCJvblRvZ2dsZSIsImlzQ2xvc2UiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidXNlU3RhdGUiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIl9jb250ZXh0IiwiRHJvcGRvd25MaW5rIiwiY2xhc3NOYW1lIiwib25DbGljayIsInRhZyIsImlkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlRhZ0xpbmsiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiRHJvcERvd25NZW51IiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdCIsIkRyb3Bkb3duVG9nZ2xlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL3RzL2xpbmsudHN4IiwiL3RzL21lbnUudHN4IiwiL3RzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxNQUFNQyxlQUFlLEdBQUdGLE1BQUEsQ0FBQUcsT0FBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO1VBQzFDLE1BQU1DLGtCQUFrQixHQUFHQSxDQUFBLEtBQU0sSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLGVBQWUsQ0FBQztVQUFDSyxPQUFBLENBQUFGLGtCQUFBLEdBQUFBLGtCQUFBO1VBRzdEO1VBQVUsU0FBVUcsZ0JBQWdCQSxDQUFDQyxLQUErQjtZQUN6RSxNQUFNO2NBQUVDLFFBQVE7Y0FBRUMsUUFBUTtjQUFFQyxRQUFRO2NBQUVDO1lBQU8sQ0FBRSxHQUFHSixLQUFLO1lBQ3ZELE1BQU0sQ0FBQ0ssUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2YsTUFBQSxDQUFBRyxPQUFLLENBQUNhLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDOUQsTUFBTUMsS0FBSyxHQUFHO2NBQ1pILFFBQVE7Y0FDUkMsV0FBVztjQUNYSixRQUFRO2NBQ1JDLFFBQVE7Y0FDUkM7YUFDRDtZQUNELE9BQ0ViLE1BQUEsQ0FBQUcsT0FBQSxDQUFBZSxhQUFBLENBQUNoQixlQUFlLENBQUNpQixRQUFRO2NBQUNGLEtBQUssRUFBRUE7WUFBSyxHQUNuQ1AsUUFBUSxDQUNnQjtVQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQVYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1CLFFBQUEsR0FBQW5CLE9BQUE7VUFRTztVQUFVLFNBQVVvQixZQUFZQSxDQUNyQ1osS0FBcUM7WUFFckMsTUFBTTtjQUFFTTtZQUFXLENBQUUsR0FBRyxJQUFBSyxRQUFBLENBQUFmLGtCQUFrQixHQUFFO1lBQzVDLE1BQU07Y0FBRUssUUFBUTtjQUFFWSxTQUFTO2NBQUVDLE9BQU87Y0FBRUMsR0FBRztjQUFFQztZQUFFLENBQUUsR0FBR2hCLEtBQUs7WUFDdkQsTUFBTWlCLFdBQVcsR0FBRyxNQUFPQyxLQUF1QixJQUFtQjtjQUNuRUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUNMLE9BQU8sSUFBSSxPQUFPQSxPQUFPLEtBQUssVUFBVSxFQUFFLE1BQU1BLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDO2NBQ3BFWixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFDRCxNQUFNYyxPQUFPLEdBQVFMLEdBQUcsSUFBSSxLQUFLO1lBQ2pDLE1BQU1NLEdBQUcsR0FBVyxHQUFHUixTQUFTLElBQUksRUFBRSxnQkFBZ0I7WUFDdEQsTUFBTVMsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUV4QixLQUFLLENBQUM7WUFDbkQsT0FBT3NCLFVBQVUsQ0FBQ1QsU0FBUztZQUMzQixPQUFPUyxVQUFVLENBQUNSLE9BQU87WUFDekIsT0FBT1EsVUFBVSxDQUFDUCxHQUFHO1lBQ3JCLE9BQU9PLFVBQVUsQ0FBQ04sRUFBRTtZQUNwQixPQUNFekIsTUFBQSxDQUFBRyxPQUFBLENBQUFlLGFBQUEsQ0FBQ1csT0FBTztjQUFDSixFQUFFLEVBQUVBLEVBQUU7Y0FBRUgsU0FBUyxFQUFFUSxHQUFHO2NBQUVQLE9BQU8sRUFBRUcsV0FBVztjQUFBLEdBQU1LO1lBQVUsR0FDbEVyQixRQUFRLENBQ0Q7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQVYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1CLFFBQUEsR0FBQW5CLE9BQUE7VUFNTztVQUFVLFNBQVVpQyxZQUFZQSxDQUFDO1lBQUV4QixRQUFRO1lBQUVZO1VBQVMsQ0FBa0M7WUFDOUYsTUFBTTtjQUFFUixRQUFRO2NBQUVDLFdBQVc7Y0FBRUosUUFBUTtjQUFFQyxRQUFRO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFPLFFBQUEsQ0FBQWYsa0JBQWtCLEdBQUU7WUFDbkYsTUFBTThCLEdBQUcsR0FBR25DLE1BQUEsQ0FBQUcsT0FBSyxDQUFDaUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QnBDLE1BQUEsQ0FBQUcsT0FBSyxDQUFDa0MsU0FBUyxDQUFDLE1BQW1CO2NBQ2xDLE1BQU1YLFdBQVcsR0FBSUMsS0FBVSxJQUFVO2dCQUN4QyxNQUFNO2tCQUFFVztnQkFBTyxDQUFFLEdBQUdILEdBQUc7Z0JBQ3ZCLE1BQU1JLFVBQVUsR0FDZkQsT0FBTyxLQUFLWCxLQUFLLENBQUNhLE1BQU0sSUFBSUYsT0FBTyxLQUFLWCxLQUFLLENBQUNjLGFBQWEsSUFBSWQsS0FBSyxDQUFDZSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBS0osT0FBTztnQkFDbkcsTUFBTUssV0FBVyxHQUFZTCxPQUFPLEVBQUVNLFFBQVEsQ0FBQ2pCLEtBQUssQ0FBQ2UsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQ0gsVUFBVSxJQUFJLENBQUNJLFdBQVcsRUFBRTtrQkFDaEM1QixXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUNsQixJQUFJLENBQUMsQ0FBQ0gsUUFBUSxJQUFJRCxRQUFRLElBQUksT0FBT0MsUUFBUSxLQUFLLFVBQVUsSUFBSUMsT0FBTyxFQUFFO29CQUN4RUQsUUFBUSxFQUFFOzs7Y0FHYixDQUFDO2NBRURpQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRXBCLFdBQVcsQ0FBQztjQUMvQyxPQUFPLE1BQVltQixRQUFRLENBQUNFLG1CQUFtQixDQUFDLE9BQU8sRUFBRXJCLFdBQVcsQ0FBQztZQUN0RSxDQUFDLEVBQUUsQ0FBQ2IsT0FBTyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUNDLFFBQVEsSUFBSSxDQUFDSCxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBRXZDLE1BQU1tQixHQUFHLEdBQVcsR0FBR1IsU0FBUyxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hFLE9BQ0N0QixNQUFBLENBQUFHLE9BQUEsQ0FBQWUsYUFBQTtjQUFLaUIsR0FBRyxFQUFFQSxHQUFHO2NBQUViLFNBQVMsRUFBRVE7WUFBRyxHQUMzQnBCLFFBQVEsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBc0MsS0FBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFtQixRQUFBLEdBQUFuQixPQUFBO1VBS087VUFBVSxTQUFVZ0QsY0FBY0EsQ0FBQztZQUFFdkMsUUFBUTtZQUFFWTtVQUFTLENBQWtDO1lBQ2hHLE1BQU1RLEdBQUcsR0FBVyxHQUFHUixTQUFTLElBQUksRUFBRSxrQkFBa0I7WUFDeEQsTUFBTTtjQUFFUixRQUFRO2NBQUVDLFdBQVc7Y0FBRUosUUFBUTtjQUFFQztZQUFRLENBQUUsR0FBRyxJQUFBUSxRQUFBLENBQUFmLGtCQUFrQixHQUFFO1lBQzFFLE1BQU1xQixXQUFXLEdBQUlDLEtBQTJCLElBQVU7Y0FDekRBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUksQ0FBQ2pCLFFBQVEsRUFBRUksV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQ0YsUUFBUSxJQUFJRCxRQUFRLElBQUksT0FBT0MsUUFBUSxLQUFLLFVBQVUsRUFBRUEsUUFBUSxFQUFFO1lBQ3pFLENBQUM7WUFDRCxPQUNDb0MsS0FBQSxDQUFBOUIsYUFBQTtjQUFLSyxPQUFPLEVBQUVHLFdBQVc7Y0FBRUosU0FBUyxFQUFFUTtZQUFHLEdBQ3ZDcEIsUUFBUSxDQUNKO1VBRVIifQ==