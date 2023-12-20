System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/icons", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/tooltip", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.0.3/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
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
    }, function (_pragmateUi003Icons) {
      dependency_4 = _pragmateUi003Icons;
    }, function (_aimpactChat101SharedIcons) {
      dependency_5 = _aimpactChat101SharedIcons;
    }, function (_pragmateUi003Link) {
      dependency_6 = _pragmateUi003Link;
    }, function (_pragmateUi003Tooltip) {
      dependency_7 = _pragmateUi003Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_9 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_aimpactChat101Extensions) {
      dependency_11 = _aimpactChat101Extensions;
    }, function (_pragmateUi003Image) {
      dependency_12 = _pragmateUi003Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/chat/shared/icons', dependency_5], ['pragmate-ui/link', dependency_6], ['pragmate-ui/tooltip', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/chat/extensions', dependency_11], ['pragmate-ui/image', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
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
        hash: 436944484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemControl = ItemControl;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          function ItemControl({
            item,
            isActive
          }) {
            const cls = `nav__item circle md ${isActive ? ' nav__item--active' : ''}`;
            if (item.control) {
              return _react.default.createElement(item.control, {
                icon: item.icon,
                lassName: cls
              });
            }
            const icon = _icons2.ICONS.hasOwnProperty(item.icon) ? _icons2.ICONS[item.icon] : item.icon;
            return _react.default.createElement(_icons.IconButton, {
              icon: icon,
              className: cls
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activity-bar/item/index
      *****************************************/

      ims.set('./activity-bar/item/index', {
        hash: 4184320029,
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
              href,
              Explorer,
              action,
              link,
              id
            } = item;
            const isLink = !Explorer && !action;
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => {
              const isActive = _routing.routing.uri.pathname.includes(href) || _routing.routing.uri.pathname.includes(id);
              setIsActive(isActive);
            });
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
            const Control = link === false ? 'span' : _link.Link;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title,
              placement: 'right'
            }, _react.default.createElement(Control, {
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
          const SidebarContext = exports.SidebarContext = _react.default.createContext({});
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
        hash: 1631617552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = AppLogo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          var _extensions = require("@aimpact/chat/extensions");
          var _image = require("pragmate-ui/image");
          /* bundle */
          function AppLogo() {
            const [ready, setReady] = _react.default.useState();
            const [logo, setLogo] = _react.default.useState({
              type: 'icon',
              icon: _icons2.ICONS['logo']
            });
            _react.default.useEffect(() => {
              _extensions.extensions.load(['app-menu-icon']).then(extensions => {
                setReady(true);
                if (!extensions.length) return;
                setLogo(extensions[0]);
              });
            }, []);
            if (!ready) {
              return _react.default.createElement("div", {
                className: 'aside-item'
              }, _react.default.createElement(_image.Image, {
                src: '#'
              }));
            }
            const Control = logo.type === 'icon' ? _icons.Icon : _image.Image;
            const attrs = {};
            if (logo.type === 'img') attrs.src = logo.src;else if (logo.type === 'icon') attrs.icon = logo.icon;
            return _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.Link, {
              href: '/'
            }, _react.default.createElement(Control, {
              ...attrs,
              className: 'lg'
            })));
          }
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
        hash: 1067153692,
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
              id: 'themeSwitcher',
              link: false
            }, {
              icon: 'exit',
              id: 'logout',
              title: 'Logout',
              link: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfYXBwTG9nbyIsIl9tYW5hZ2VyIiwiQWN0aXZpdHlCYXIiLCJ0b3BJdGVtcyIsIkFycmF5IiwiZnJvbSIsIlNpZGViYXJNYW5hZ2VyIiwiaXRlbXMiLCJ2YWx1ZXMiLCJib3R0b21JdGVtcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1Db250cm9sIiwiaXRlbSIsImlzQWN0aXZlIiwiY2xzIiwiY29udHJvbCIsImljb24iLCJsYXNzTmFtZSIsIklDT05TIiwiaGFzT3duUHJvcGVydHkiLCJJY29uQnV0dG9uIiwiX2xpbmsiLCJfdG9vbHRpcCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaWQiLCJpc0xpbmsiLCJzZXRJc0FjdGl2ZSIsInVzZVN0YXRlIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b2dnbGVBY3Rpb25NZW51IiwidXNlU2lkZWJhckNvbnRleHQiLCJ1c2VCaW5kZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImF0dHJzIiwiYXR0cmlidXRlcyIsInRpdGxlIiwiQ29udHJvbCIsIkxpbmsiLCJUb29sdGlwIiwiY29udGVudCIsInBsYWNlbWVudCIsImV4cG9ydHMiLCJfaXRlbSIsIm1hcCIsImkiLCJrZXkiLCJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXhwbG9yZXJWaWV3Iiwib3BlbiIsImFjdGl2ZSIsIl9jb21wb25lbnRzIiwiX2V4dGVuc2lvbnMiLCJfaW1hZ2UiLCJyZWFkeSIsInNldFJlYWR5IiwibG9nbyIsInNldExvZ28iLCJ0eXBlIiwidXNlRWZmZWN0IiwiZXh0ZW5zaW9ucyIsImxvYWQiLCJ0aGVuIiwibGVuZ3RoIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJhbHQiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfYWN0aXZpdHlCYXIiLCJfZXhwbG9yZXIiLCJTaWRlYmFyIiwic2V0T3BlbiIsInNldEFjdGl2ZSIsIm1vZHVsZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJfcHJvZmlsZSIsInJlZ2lzdGVyIiwiZW1haWwiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vY29udHJvbC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2V4cGxvcmVyLnRzeCIsIi90cy9pY29ucy9hcHAtbG9nby50c3giLCIvdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUVjLFNBQVVJLFdBQVdBLENBQUE7WUFDbEMsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ0osUUFBQSxDQUFBSyxjQUFjLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxFQUFFLENBQUM7WUFDMUQsTUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNDLElBQUksQ0FBQ0osUUFBQSxDQUFBSyxjQUFjLENBQUNHLFdBQVcsQ0FBQ0QsTUFBTSxFQUFFLENBQUM7WUFFbkUsT0FDQ1gsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFFLFFBQUEsUUFDQ2YsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT0UsU0FBUyxFQUFDO1lBQVcsR0FDM0JoQixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRSxTQUFTLEVBQUM7WUFBWSxHQUM5QmhCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNYLFFBQUEsQ0FBQWMsT0FBTyxPQUFHLENBQ0YsRUFDVmpCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNaLEtBQUEsQ0FBQWdCLFNBQVM7Y0FBQ1IsS0FBSyxFQUFFSixRQUFRO2NBQUVVLFNBQVMsRUFBQztZQUFZLEVBQUcsRUFDckRoQixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWixLQUFBLENBQUFnQixTQUFTO2NBQUNSLEtBQUssRUFBRUUsV0FBVztjQUFFSSxTQUFTLEVBQUM7WUFBZSxFQUFHLENBQ3BELENBQ047VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQWhCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE9BQUEsR0FBQW5CLE9BQUE7VUFDTSxTQUFVb0IsV0FBV0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDO1VBQVEsQ0FBRTtZQUM3QyxNQUFNQyxHQUFHLEdBQUcsdUJBQXVCRCxRQUFRLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxFQUFFO1lBQ3pFLElBQUlELElBQUksQ0FBQ0csT0FBTyxFQUFFO2NBQ2pCLE9BQU96QixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxJQUFJLENBQUNHLE9BQU87Z0JBQUNDLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFJO2dCQUFFQyxRQUFRLEVBQUVIO2NBQUcsRUFBSTs7WUFHeEQsTUFBTUUsSUFBSSxHQUFHTixPQUFBLENBQUFRLEtBQUssQ0FBQ0MsY0FBYyxDQUFDUCxJQUFJLENBQUNJLElBQUksQ0FBQyxHQUFHTixPQUFBLENBQUFRLEtBQUssQ0FBQ04sSUFBSSxDQUFDSSxJQUFJLENBQUMsR0FBR0osSUFBSSxDQUFDSSxJQUFJO1lBRTNFLE9BQU8xQixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxNQUFBLENBQUFXLFVBQVU7Y0FBQ0osSUFBSSxFQUFFQSxJQUFJO2NBQUVWLFNBQVMsRUFBRVE7WUFBRyxFQUFJO1VBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUF4QixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEIsS0FBQSxHQUFBOUIsT0FBQTtVQUVBLElBQUErQixRQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWdDLFFBQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBaUMsTUFBQSxHQUFBakMsT0FBQTtVQUNBLElBQUFrQyxRQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQW1DLFFBQUEsR0FBQW5DLE9BQUE7VUFNTyxNQUFNb0MsZUFBZSxHQUFHQSxDQUFDO1lBQUVmO1VBQUksQ0FBRSxLQUFJO1lBQzNDLE1BQU07Y0FBRWdCLElBQUk7Y0FBRUMsSUFBSTtjQUFFQyxRQUFRO2NBQUVDLE1BQU07Y0FBRUMsSUFBSTtjQUFFQztZQUFFLENBQUUsR0FBR3JCLElBQXdCO1lBQzNFLE1BQU1zQixNQUFNLEdBQUcsQ0FBQ0osUUFBUSxJQUFJLENBQUNDLE1BQU07WUFDbkMsTUFBTSxDQUFDbEIsUUFBUSxFQUFFc0IsV0FBVyxDQUFDLEdBQUc3QyxNQUFBLENBQUFhLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBQ2IsUUFBQSxDQUFBYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNYLElBQUksQ0FBQyxDQUFDO1lBQ25GLE1BQU07Y0FBRVk7WUFBZ0IsQ0FBRSxHQUFHLElBQUFoQixRQUFBLENBQUFpQixpQkFBaUIsR0FBRTtZQUVoRCxJQUFBbEIsTUFBQSxDQUFBbUIsU0FBUyxFQUFDLENBQUNwQixRQUFBLENBQUFjLE9BQU8sQ0FBQyxFQUFFLE1BQUs7Y0FDekIsTUFBTXhCLFFBQVEsR0FBR1UsUUFBQSxDQUFBYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNYLElBQUksQ0FBQyxJQUFJTixRQUFBLENBQUFjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ1AsRUFBRSxDQUFDO2NBRXpGRSxXQUFXLENBQUN0QixRQUFRLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsTUFBTStCLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkQsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Y0FDdEIsTUFBTUgsT0FBTyxHQUFHaEMsSUFBSSxDQUFDZ0MsT0FBTyxJQUFJaEMsSUFBSSxDQUFDbUIsTUFBTTtjQUMzQyxJQUFJYSxPQUFPLEVBQUU7Z0JBQ1osT0FBT0EsT0FBTyxDQUFDQyxLQUFLLENBQUM7O2NBR3RCSixnQkFBZ0IsQ0FBQzdCLElBQUksQ0FBQztZQUN2QixDQUFDO1lBRUQsSUFBSW9DLEtBQUssR0FBZ0I7Y0FBRTFDLFNBQVMsRUFBRTtZQUFFLENBQUU7WUFDMUMsSUFBSU0sSUFBSSxDQUFDcUMsVUFBVSxFQUFFRCxLQUFLLEdBQUc7Y0FBRSxHQUFHcEMsSUFBSSxDQUFDcUM7WUFBVSxDQUFFO1lBQ25ELElBQUlmLE1BQU0sRUFBRWMsS0FBSyxDQUFDbkIsSUFBSSxHQUFHLEdBQUcsR0FBR0EsSUFBSTtZQUNuQyxNQUFNcUIsS0FBSyxHQUFHdEMsSUFBSSxDQUFDc0MsS0FBSyxJQUFJdEIsSUFBSTtZQUNoQyxNQUFNdUIsT0FBTyxHQUFHbkIsSUFBSSxLQUFLLEtBQUssR0FBRyxNQUFNLEdBQUdYLEtBQUEsQ0FBQStCLElBQUk7WUFDOUMsT0FDQzlELE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNrQixRQUFBLENBQUErQixPQUFPO2NBQUNDLE9BQU8sRUFBRUosS0FBSztjQUFFSyxTQUFTLEVBQUM7WUFBTyxHQUN6Q2pFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUMrQyxPQUFPO2NBQUEsR0FBS0gsS0FBSztjQUFFSixPQUFPLEVBQUVBLE9BQU87Y0FBRXRDLFNBQVMsRUFBQztZQUFZLEdBQzNEaEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NCLFFBQUEsQ0FBQWYsV0FBVztjQUFDRSxRQUFRLEVBQUVBLFFBQVE7Y0FBRUQsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDdEMsQ0FDRDtVQUVaLENBQUM7VUFBQzRDLE9BQUEsQ0FBQTdCLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREYsSUFBQXJDLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFrRSxLQUFBLEdBQUFsRSxPQUFBO1VBRU0sU0FBVWlCLFNBQVNBLENBQUM7WUFBRVIsS0FBSztZQUFFTTtVQUFTLENBQUU7WUFDN0MsT0FDQ2hCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQVNFLFNBQVMsRUFBRUE7WUFBUyxHQUMzQk4sS0FBSyxDQUFDMEQsR0FBRyxDQUFDLENBQUM5QyxJQUFJLEVBQUUrQyxDQUFDLEtBQUk7Y0FDdEIsT0FBT3JFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNxRCxLQUFBLENBQUE5QixlQUFlO2dCQUFDZixJQUFJLEVBQUVBLElBQUk7Z0JBQUVnRCxHQUFHLEVBQUVEO2NBQUMsRUFBSTtZQUMvQyxDQUFDLENBQUMsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFyRSxNQUFBLEdBQUFDLE9BQUE7VUFPTyxNQUFNc0UsY0FBYyxHQUFBTCxPQUFBLENBQUFLLGNBQUEsR0FBR3ZFLE1BQUEsQ0FBQWEsT0FBSyxDQUFDMkQsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTXBCLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1wRCxNQUFBLENBQUFhLE9BQUssQ0FBQzRELFVBQVUsQ0FBQ0YsY0FBYyxDQUFDO1VBQUNMLE9BQUEsQ0FBQWQsaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUnhFLElBQUFwRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0MsUUFBQSxHQUFBaEMsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQWtDLFFBQUEsR0FBQWxDLE9BQUE7VUFFTSxTQUFVeUUsWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVDLElBQUk7Y0FBRXhCLGdCQUFnQjtjQUFFeUI7WUFBTSxDQUFFLEdBQUcsSUFBQXpDLFFBQUEsQ0FBQWlCLGlCQUFpQixHQUFFO1lBRTlELE1BQU07Y0FBRUg7WUFBUSxDQUFFLEdBQUdoQixRQUFBLENBQUFjLE9BQU8sQ0FBQ0MsR0FBRztZQUVoQyxNQUFNeEIsR0FBRyxHQUFHLFdBQVdtRCxJQUFJLEdBQUcsT0FBTyxHQUFHLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUNDLE1BQU0sRUFBRXBDLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFbEMsTUFBTTtjQUFFQSxRQUFRO2NBQUVEO1lBQUksQ0FBRSxHQUFHcUMsTUFBTTtZQUVqQyxPQUNDNUUsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQWQsTUFBQSxDQUFBYSxPQUFBLENBQUFFLFFBQUEsUUFDQ2YsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBT0UsU0FBUyxFQUFFUTtZQUFHLEdBQ3BCeEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CaEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBCLFFBQVEsT0FBRyxDQUNQLENBQ0MsRUFDUnhDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRSxtQkFBbUIyRCxJQUFJLEtBQUtwQyxJQUFJLEdBQUcsTUFBTSxHQUFHLEVBQUU7WUFBRSxHQUMvRHZDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBLENBQUNLLE1BQUEsQ0FBQVcsVUFBVTtjQUFDZCxTQUFTLEVBQUMsSUFBSTtjQUFDVSxJQUFJLEVBQUMsWUFBWTtjQUFDNEIsT0FBTyxFQUFFQSxDQUFBLEtBQU1ILGdCQUFnQixDQUFDWixJQUFJO1lBQUMsRUFBSSxDQUNqRixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUF2QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEUsV0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE9BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBNkUsV0FBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE4RSxNQUFBLEdBQUE5RSxPQUFBO1VBU087VUFBWSxTQUFVZ0IsT0FBT0EsQ0FBQTtZQUNuQyxNQUFNLENBQUMrRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHakYsTUFBQSxDQUFBYSxPQUFLLENBQUNpQyxRQUFRLEVBQVc7WUFDbkQsTUFBTSxDQUFDb0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR25GLE1BQUEsQ0FBQWEsT0FBSyxDQUFDaUMsUUFBUSxDQUFRO2NBQzdDc0MsSUFBSSxFQUFFLE1BQU07Y0FDWjFELElBQUksRUFBRU4sT0FBQSxDQUFBUSxLQUFLLENBQUMsTUFBTTthQUNsQixDQUFDO1lBQ0Y1QixNQUFBLENBQUFhLE9BQUssQ0FBQ3dFLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCUCxXQUFBLENBQUFRLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixVQUFVLElBQUc7Z0JBQ3BETCxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNkLElBQUksQ0FBQ0ssVUFBVSxDQUFDRyxNQUFNLEVBQUU7Z0JBQ3hCTixPQUFPLENBQUNHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUN2QixDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSSxDQUFDTixLQUFLLEVBQUU7Y0FDWCxPQUNDaEYsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Z0JBQUtFLFNBQVMsRUFBQztjQUFZLEdBQzFCaEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lFLE1BQUEsQ0FBQVcsS0FBSztnQkFBQ0MsR0FBRyxFQUFDO2NBQUcsRUFBRyxDQUNaOztZQUdSLE1BQU05QixPQUFPLEdBQUdxQixJQUFJLENBQUNFLElBQUksS0FBSyxNQUFNLEdBQUdqRSxNQUFBLENBQUF5RSxJQUFJLEdBQUdiLE1BQUEsQ0FBQVcsS0FBSztZQUNuRCxNQUFNaEMsS0FBSyxHQUFXLEVBQUU7WUFFeEIsSUFBSXdCLElBQUksQ0FBQ0UsSUFBSSxLQUFLLEtBQUssRUFBRTFCLEtBQUssQ0FBQ2lDLEdBQUcsR0FBR1QsSUFBSSxDQUFDUyxHQUFHLENBQUMsS0FDekMsSUFBSVQsSUFBSSxDQUFDRSxJQUFJLEtBQUssTUFBTSxFQUFFMUIsS0FBSyxDQUFDaEMsSUFBSSxHQUFHd0QsSUFBSSxDQUFDeEQsSUFBSTtZQUVyRCxPQUNDMUIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVksR0FDMUJoQixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0QsV0FBQSxDQUFBZixJQUFJO2NBQUN2QixJQUFJLEVBQUM7WUFBRyxHQUNidkMsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQytDLE9BQU87Y0FBQSxHQUFLSCxLQUFLO2NBQUUxQyxTQUFTLEVBQUM7WUFBSSxFQUFHLENBQy9CLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoREEsSUFBQWhCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBRUEsSUFBQTRGLFFBQUEsR0FBQTVGLE9BQUE7VUFFTztVQUFhLE1BQU02RixXQUFXLEdBQUdBLENBQUM7WUFBRXhDO1VBQU8sQ0FBRSxLQUFJO1lBQ3ZELE1BQU0sQ0FBQ3lDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdoRyxNQUFBLENBQUFhLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsSUFBSSxDQUFDK0MsUUFBQSxDQUFBSSxjQUFjLENBQUNDLElBQUksRUFBRTtZQUMxQixNQUFNQyxTQUFTLEdBQUdOLFFBQUEsQ0FBQUksY0FBYyxDQUFDQyxJQUFJLENBQUNFLGFBQWEsRUFBRTtZQUNyRCxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTUwsWUFBWSxDQUFDLElBQUksQ0FBQztZQUVoRCxPQUNDaEcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDLFlBQVk7Y0FBQ3NDLE9BQU8sRUFBRUE7WUFBTyxHQUMxQyxDQUFDeUMsU0FBUyxHQUNWL0YsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUE7Y0FBS3dGLEdBQUcsRUFBQyxvQkFBb0I7Y0FBQ1gsR0FBRyxFQUFFUSxTQUFTLENBQUNJLFFBQVE7Y0FBRUMsT0FBTyxFQUFFSDtZQUFlLEVBQUksR0FFbkZyRyxNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxNQUFBLENBQUF5RSxJQUFJO2NBQUM1RSxTQUFTLEVBQUMsSUFBSTtjQUFDVSxJQUFJLEVBQUU7WUFBTSxFQUNqQyxDQUNJO1VBRVIsQ0FBQztVQUFDd0MsT0FBQSxDQUFBNEIsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRixJQUFBOUYsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXdHLFlBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBeUcsU0FBQSxHQUFBekcsT0FBQTtVQUNBLElBQUFrQyxRQUFBLEdBQUFsQyxPQUFBO1VBRU87VUFBVSxTQUFVMEcsT0FBT0EsQ0FBQTtZQUNqQyxNQUFNLENBQUNoQyxJQUFJLEVBQUVpQyxPQUFPLENBQUMsR0FBRzVHLE1BQUEsQ0FBQWEsT0FBSyxDQUFDaUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUM4QixNQUFNLEVBQUVpQyxTQUFTLENBQUMsR0FBRzdHLE1BQUEsQ0FBQWEsT0FBSyxDQUFDaUMsUUFBUSxFQUFnQztZQUMxRSxNQUFNSyxnQkFBZ0IsR0FBSTJELE1BQXdCLElBQUk7Y0FDckQsSUFBSSxDQUFDbEMsTUFBTSxJQUFJQSxNQUFNLENBQUNqQyxFQUFFLEtBQUttRSxNQUFNLENBQUNuRSxFQUFFLEVBQUVpRSxPQUFPLENBQUMsQ0FBQ2pDLElBQUksQ0FBQztjQUN0RGtDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFFRCxPQUNDOUcsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLFFBQUEsQ0FBQW9DLGNBQWMsQ0FBQ3dDLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFO2dCQUFFckMsSUFBSTtnQkFBRXhCLGdCQUFnQjtnQkFBRXlCO2NBQU07WUFBRSxHQUNqRTVFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFhLEdBQzNCaEIsTUFBQSxDQUFBYSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFlBQUEsQ0FBQTVGLE9BQVcsT0FBRyxFQUNmYixNQUFBLENBQUFhLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEYsU0FBQSxDQUFBaEMsWUFBWSxPQUFHLENBQ1gsQ0FDbUI7VUFFNUI7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQXRFLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFnSCxRQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQWdDLFFBQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBNEYsUUFBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUE0RSxXQUFBLEdBQUE1RSxPQUFBO1VBQ0EsQ0FBQyxNQUFLO1lBQ0xHLFFBQUEsQ0FBQUssY0FBYyxDQUFDeUcsUUFBUSxDQUN0QixDQUNDO2NBQ0N2RSxFQUFFLEVBQUUsU0FBUztjQUNibEIsT0FBTyxFQUFFd0YsUUFBQSxDQUFBbkIsV0FBVztjQUNwQnRELFFBQVEsRUFBRSwyQkFBMkI7Y0FDckNvQixLQUFLLEVBQUVpQyxRQUFBLENBQUFJLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRSxhQUFhLEVBQUUsQ0FBQ2U7YUFDM0MsRUFDRDtjQUNDMUYsT0FBTyxFQUFFb0QsV0FBQSxDQUFBdUMsYUFBYTtjQUN0QnhELEtBQUssRUFBRSxPQUFPO2NBQ2RqQixFQUFFLEVBQUUsZUFBZTtjQUNuQkQsSUFBSSxFQUFFO2FBQ04sRUFDRDtjQUNDaEIsSUFBSSxFQUFFLE1BQU07Y0FDWmlCLEVBQUUsRUFBRSxRQUFRO2NBQ1ppQixLQUFLLEVBQUUsUUFBUTtjQUNmbEIsSUFBSSxFQUFFLEtBQUs7Y0FDWFksT0FBTyxFQUFFLE1BQU1DLEtBQUssSUFBRztnQkFDdEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QixNQUFNcUMsUUFBQSxDQUFBSSxjQUFjLENBQUNvQixNQUFNLEVBQUU7Z0JBQzdCcEYsUUFBQSxDQUFBYyxPQUFPLENBQUN1RSxTQUFTLENBQUMsYUFBYSxDQUFDO2NBQ2pDO2FBQ0EsQ0FDRCxFQUNELFFBQVEsQ0FDUjtVQUNGLENBQUMsRUFBQyxDQUFFIn0=