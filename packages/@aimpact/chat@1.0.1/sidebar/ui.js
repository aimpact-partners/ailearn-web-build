System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/link", "pragmate-ui@0.0.37/tooltip", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat@1.0.1/extensions", "pragmate-ui@0.0.37/image", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
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
    }, function (_pragmateUi0037Icons) {
      dependency_4 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Link) {
      dependency_5 = _pragmateUi0037Link;
    }, function (_pragmateUi0037Tooltip) {
      dependency_6 = _pragmateUi0037Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedIcons) {
      dependency_10 = _aimpactChat101SharedIcons;
    }, function (_aimpactChat101Extensions) {
      dependency_11 = _aimpactChat101Extensions;
    }, function (_pragmateUi0037Image) {
      dependency_12 = _pragmateUi0037Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/link', dependency_5], ['pragmate-ui/tooltip', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat/extensions', dependency_11], ['pragmate-ui/image', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/chat/shared/components', dependency_14]]);
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
        hash: 3770310234,
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
              action,
              link
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW1zIiwidmFsdWVzIiwiYm90dG9tSXRlbXMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkFwcExvZ28iLCJMaXN0SXRlbXMiLCJJdGVtQ29udHJvbCIsIml0ZW0iLCJpc0FjdGl2ZSIsInZhcmlhbnQiLCJjbHMiLCJjb250cm9sIiwiaWNvbiIsIkljb25CdXR0b24iLCJBY3Rpdml0eUJhckxpbmsiLCJuYW1lIiwiaHJlZiIsIkV4cGxvcmVyIiwiYWN0aW9uIiwibGluayIsImlzTGluayIsInNldElzQWN0aXZlIiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsInRvZ2dsZUFjdGlvbk1lbnUiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImF0dHJzIiwiYXR0cmlidXRlcyIsInRpdGxlIiwiQ29udHJvbCIsIkxpbmsiLCJUb29sdGlwIiwiY29udGVudCIsInBsYWNlbWVudCIsImV4cG9ydHMiLCJtYXAiLCJpIiwia2V5IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU2lkZWJhckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXhwbG9yZXJWaWV3Iiwib3BlbiIsImFjdGl2ZSIsInJlYWR5Iiwic2V0UmVhZHkiLCJsb2dvIiwic2V0TG9nbyIsInR5cGUiLCJJQ09OUyIsInVzZUVmZmVjdCIsImV4dGVuc2lvbnMiLCJsb2FkIiwidGhlbiIsImxlbmd0aCIsIkltYWdlIiwic3JjIiwiSWNvbiIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsImFsdCIsInBob3RvVVJMIiwib25FcnJvciIsIlNpZGViYXIiLCJzZXRPcGVuIiwic2V0QWN0aXZlIiwibW9kdWxlIiwiaWQiLCJQcm92aWRlciIsInZhbHVlIiwicmVnaXN0ZXIiLCJlbWFpbCIsIlRoZW1lU3dpdGNoZXIiLCJsb2dvdXQiLCJwdXNoU3RhdGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCJ0cy9hY3Rpdml0eS1iYXIvaXRlbS9jb250cm9sLnRzeCIsInRzL2FjdGl2aXR5LWJhci9pdGVtL2luZGV4LnRzeCIsInRzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsInRzL2NvbnRleHQudHMiLCJ0cy9leHBsb3Jlci50c3giLCJ0cy9pY29ucy9hcHAtbG9nby50c3giLCJ0cy9pY29ucy9wcm9maWxlLnRzeCIsInRzL2luZGV4LnRzeCIsInRzL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19