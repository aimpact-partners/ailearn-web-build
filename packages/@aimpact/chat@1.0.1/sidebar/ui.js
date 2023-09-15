System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/tooltip", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    ProfileIcon: void 0,
    Sidebar: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactChat101SidebarManager) {
      dependency_3 = _aimpactChat101SidebarManager;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_5 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Tooltip) {
      dependency_6 = _pragmateUi0036Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedIcons) {
      dependency_10 = _aimpactChat101SharedIcons;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/sidebar/ui"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/link', dependency_5], ['pragmate-ui/tooltip', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/chat/shared/components', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/sidebar/ui');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 2110201182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _react = require("react");
          var _list = require("./list");
          var _appLogo = require("../icons/app-logo");
          var _manager = require("@aimpact/chat/sidebar/manager");
          function ActivityBar() {
            const topItems = Array.from(_manager.SidebarManager.items.values());
            const bottomItems = Array.from(_manager.SidebarManager.bottomItems.values());
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(_appLogo.AppLogo, null)), _react.default.createElement(_list.ListItems, {
              items: topItems,
              className: 'aside__nav'
            }), _react.default.createElement(_list.ListItems, {
              items: bottomItems,
              className: 'aside__footer'
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activity-bar/item/control
      *******************************************/

      ims.set('./activity-bar/item/control', {
        hash: 1053101733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemControl = ItemControl;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function ItemControl({
            item,
            isActive
          }) {
            const variant = `${isActive ? 'active' : 'nav'}`;
            const cls = `nav__item circle md`;
            if (item.control) {
              return _react.default.createElement(item.control, {
                icon: item.icon,
                variant: variant,
                className: cls
              });
            }
            const icon = item.icon;
            return _react.default.createElement(_icons.IconButton, {
              icon: icon,
              variant: variant,
              className: cls
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activity-bar/item/index
      *****************************************/

      ims.set('./activity-bar/item/index', {
        hash: 587157768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBarLink = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _tooltip = require("pragmate-ui/tooltip");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _control = require("./control");
          const ActivityBarLink = ({
            item
          }) => {
            const {
              name,
              icon,
              href,
              Explorer,
              action
            } = item;
            const isLink = !Explorer && !action;
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(href)));
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const onClick = item.onClick ?? item.action;
              if (onClick) {
                return onClick(event);
              }
              toggleActionMenu(item);
            };
            let attrs = {
              className: ''
            };
            if (item.attributes) attrs = {
              ...item.attributes
            };
            if (isLink) attrs.href = '/' + href;
            const title = item.title ?? name;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title,
              placement: 'right'
            }, _react.default.createElement(_link.Link, {
              ...attrs,
              onClick: onClick,
              className: 'aside-item'
            }, _react.default.createElement(_control.ItemControl, {
              isActive: isActive,
              item: item
            })));
          };
          exports.ActivityBarLink = ActivityBarLink;
        }
      });

      /***********************************
      INTERNAL MODULE: ./activity-bar/list
      ***********************************/

      ims.set('./activity-bar/list', {
        hash: 1659812748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _item = require("./item");
          function ListItems({
            items,
            className
          }) {
            return _react.default.createElement("section", {
              className: className
            }, items.map((item, i) => {
              return _react.default.createElement(_item.ActivityBarLink, {
                item: item,
                key: i
              });
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2122402811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSidebarContext = exports.SidebarContext = void 0;
          var _react = require("react");
          const SidebarContext = _react.default.createContext({});
          exports.SidebarContext = SidebarContext;
          const useSidebarContext = () => _react.default.useContext(SidebarContext);
          exports.useSidebarContext = useSidebarContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./explorer
      **************************/

      ims.set('./explorer', {
        hash: 2145033942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExplorerView = ExplorerView;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function ExplorerView() {
            const {
              open,
              toggleActionMenu,
              active
            } = (0, _context.useSidebarContext)();
            const {
              pathname
            } = _routing.routing.uri;
            const cls = `explorer${open ? ' open' : ''}`;
            if (!active?.Explorer) return null;
            const {
              Explorer,
              href
            } = active;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("div", {
              className: 'sidebar-content'
            }, _react.default.createElement(Explorer, null))), _react.default.createElement("div", {
              className: `toggle-explorer ${open === href ? 'open' : ''}`
            }, _react.default.createElement(_icons.IconButton, {
              className: 'lg',
              icon: 'expandMore',
              onClick: () => toggleActionMenu(href)
            })));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./icons/app-logo
      ********************************/

      ims.set('./icons/app-logo', {
        hash: 2083629224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          /* bundle */
          const AppLogo = () => _react.default.createElement("div", {
            className: 'aside-item'
          }, _react.default.createElement(_components.Link, {
            href: '/'
          }, _react.default.createElement(_icons.Icon, {
            icon: _icons2.ICONS['logo'],
            className: 'lg'
          })));
          exports.AppLogo = AppLogo;
        }
      });

      /*******************************
      INTERNAL MODULE: ./icons/profile
      *******************************/

      ims.set('./icons/profile', {
        hash: 2058794887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          /* bundle */
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
            if (!_session.sessionWrapper.user) return;
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: 'aside-item',
              onClick: onClick
            }, !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3904242059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var _react = require("react");
          var _activityBar = require("./activity-bar");
          var _explorer = require("./explorer");
          var _context = require("./context");
          /*bundle*/
          function Sidebar() {
            const [open, setOpen] = _react.default.useState(false);
            const [active, setActive] = _react.default.useState();
            const toggleActionMenu = module => {
              if (!active || active.id === module.id) setOpen(!open);
              setActive(module);
            };
            return _react.default.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                toggleActionMenu,
                active
              }
            }, _react.default.createElement("div", {
              className: 'nav-wrapper'
            }, _react.default.createElement(_activityBar.default, null), _react.default.createElement(_explorer.ExplorerView, null)));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./registry
      **************************/

      ims.set('./registry', {
        hash: 1532892333,
        creator: function (require, exports) {
          "use strict";

          var _manager = require("@aimpact/chat/sidebar/manager");
          var _profile = require("./icons/profile");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          (() => {
            _manager.SidebarManager.register([{
              id: 'profile',
              control: _profile.ProfileIcon,
              Explorer: 'aimpact-chat-user-profile',
              title: _session.sessionWrapper.user.getProperties().email
            }, {
              control: _components.ThemeSwitcher,
              title: 'Theme',
              id: 'themeSwitcher'
            }, {
              icon: 'exit',
              id: 'logout',
              title: 'Logout',
              onClick: async event => {
                event.stopPropagation();
                await _session.sessionWrapper.logout();
                _routing.routing.pushState('/auth/login');
              }
            }], 'bottom');
          })();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons/app-logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./icons/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./index",
        "from": "Sidebar",
        "name": "Sidebar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./icons/app-logo').AppLogo : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./icons/profile').ProfileIcon : value);
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./index').Sidebar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfYXBwTG9nbyIsIl9tYW5hZ2VyIiwiQWN0aXZpdHlCYXIiLCJ0b3BJdGVtcyIsIkFycmF5IiwiZnJvbSIsIlNpZGViYXJNYW5hZ2VyIiwiaXRlbXMiLCJ2YWx1ZXMiLCJib3R0b21JdGVtcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiSXRlbUNvbnRyb2wiLCJpdGVtIiwiaXNBY3RpdmUiLCJ2YXJpYW50IiwiY2xzIiwiY29udHJvbCIsImljb24iLCJJY29uQnV0dG9uIiwiX2xpbmsiLCJfdG9vbHRpcCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJpc0xpbmsiLCJzZXRJc0FjdGl2ZSIsInVzZVN0YXRlIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b2dnbGVBY3Rpb25NZW51IiwidXNlU2lkZWJhckNvbnRleHQiLCJ1c2VCaW5kZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImF0dHJzIiwiYXR0cmlidXRlcyIsInRpdGxlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJMaW5rIiwiZXhwb3J0cyIsIl9pdGVtIiwibWFwIiwiaSIsImtleSIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFeHBsb3JlclZpZXciLCJvcGVuIiwiYWN0aXZlIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiSWNvbiIsIklDT05TIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJhbHQiLCJzcmMiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfYWN0aXZpdHlCYXIiLCJfZXhwbG9yZXIiLCJTaWRlYmFyIiwic2V0T3BlbiIsInNldEFjdGl2ZSIsIm1vZHVsZSIsImlkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl9wcm9maWxlIiwicmVnaXN0ZXIiLCJlbWFpbCIsIlRoZW1lU3dpdGNoZXIiLCJsb2dvdXQiLCJwdXNoU3RhdGUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktYmFyL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0eS1iYXIvaXRlbS9jb250cm9sLnRzeCIsIi90cy9hY3Rpdml0eS1iYXIvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2xpc3QudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZXhwbG9yZXIudHN4IiwiL3RzL2ljb25zL2FwcC1sb2dvLnRzeCIsIi90cy9pY29ucy9wcm9maWxlLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcmVnaXN0cnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFFYyxTQUFVSSxXQUFXQSxDQUFBO1lBQ2xDLE1BQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNKLFFBQUEsQ0FBQUssY0FBYyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sRUFBRSxDQUFDO1lBQzFELE1BQU1DLFdBQVcsR0FBR0wsS0FBSyxDQUFD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