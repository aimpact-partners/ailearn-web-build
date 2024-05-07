System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/breadcrumb", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Icons) {
      dependency_3 = _pragmateUi011Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Image) {
      dependency_6 = _pragmateUi011Image;
    }, function (_pragmateUi011Breadcrumb) {
      dependency_7 = _pragmateUi011Breadcrumb;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_11 = _pragmateUi011Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_12 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/dropdown', dependency_11], ['@beyond-js/widgets/render', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/navbar-header.code');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./closable
      **************************/
      ims.set('./closable', {
        hash: 1939443868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClosableIcon = ClosableIcon;
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          /**
           * Renders an icon button that conditionally handles navigation based on the user's history state and provided backlink.
           * This component determines if the user can navigate back in their browsing history safely (i.e., the user did not land directly via URL).
           * If navigating back is deemed unsafe or if the history is inadequate, it redirects to a provided backlink URL, thus avoiding potential navigation errors.
           *
           * @param {object} props - The properties passed to the ClosableIcon component.
           * @param {Function} props.apply - A flag to determine if the IconButton should be rendered. If falsy, the component renders nothing.
           * @param {string} props.backlink - A URL string to redirect to if there is no adequate history to go back to. This is used to replace the current state in history, ensuring the user does not navigate back to an erroneous or unintended page.
           * @returns {JSX.Element|null} A clickable icon that conditionally manipulates the navigation history based on the session's state, or null if `apply` is falsy.
           *
           * Usage Example:
           * <ClosableIcon apply={true} backlink="/home" />
           *
           * In this scenario, if sessionStorage indicates that the user did not start their session from the current view, and if there is a sufficient history, it will trigger a back navigation. Otherwise, it will redirect to the `/home` URL provided in `backlink`.
           */
          function ClosableIcon({
            apply,
            backlink
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              //back button is not working, so, we always replace the state here.
              _routing.routing.replaceState({}, null, backlink);
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onClick
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1377720157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 823309563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("./closable");
          /*bundle*/
          function NavbarHeader({
            children,
            detail,
            className,
            closable = false,
            breadcrumb,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, !closable && _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_closable.ClosableIcon, {
              apply: closable,
              backlink: backlink
            }), !closable && _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/RVD.AI.Branding.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: "desktop-breadcrumb",
              items: breadcrumb,
              separator: ":"
            })), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/context
      ******************************/

      ims.set('./menu/context', {
        hash: 617749427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOffCanvasMenuContext = exports.OffCanvasMenuContext = void 0;
          var _react = require("react");
          const OffCanvasMenuContext = exports.OffCanvasMenuContext = _react.default.createContext({});
          const useOffCanvasMenuContext = () => _react.default.useContext(OffCanvasMenuContext);
          exports.useOffCanvasMenuContext = useOffCanvasMenuContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 1460243133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _teacher = require("./teacher");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _student = require("./student");
          var _context2 = require("./context");
          function AsideMenu() {
            const {
              toggleMenu,
              menuOpened,
              texts
            } = (0, _context.useModuleContext)();
            const [isTeacher, setTeacher] = _react.default.useState(!!_session.sessionWrapper?.user?.teacher);
            const ref = (0, _react.useRef)(null);
            (0, _hooks.useBinder)([_session.sessionWrapper.user], () => {
              setTeacher(!!_session.sessionWrapper.user?.teacher);
            }, 'user.loaded');
            const cls = `off-canvas-menu${menuOpened ? ' open' : ''}`;
            const clsContainer = `off-canvas-menu-container${menuOpened ? ' opened' : ''}`;
            const Menu = isTeacher ? _teacher.TeacherMenu : _student.StudentMenu;
            const clickOnBackdrop = event => {
              if (ref.current.isSameNode(event.target)) toggleMenu(!menuOpened);
            };
            return _react.default.createElement(_context2.OffCanvasMenuContext.Provider, {
              value: {
                texts,
                menuOpened,
                toggleMenu
              }
            }, _react.default.createElement("div", {
              className: clsContainer,
              onClick: clickOnBackdrop,
              ref: ref
            }, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("header", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "menu__header"
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars",
              onClick: toggleMenu
            }), "RVD.AI Rivadavia"), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement(Menu, null))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./menu/item
      ***************************/

      ims.set('./menu/item', {
        hash: 2000838927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("./context");
          function MenuItem({
            icon,
            href,
            children,
            ...props
          }) {
            const Control = href ? _components.Link : 'div';
            const {
              toggleMenu,
              menuOpened
            } = (0, _context.useOffCanvasMenuContext)();
            const attrs = {
              className: 'container__item'
            };
            if (href) {
              attrs['href'] = href;
            }
            const onClick = () => toggleMenu(!menuOpened);
            return _react.default.createElement("li", {
              ...props
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick
            }, icon && _react.default.createElement(_icons.AppIcon, {
              src: icon
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 3576162767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentMenu = StudentMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function StudentMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "entities/classrooms",
              href: "/classrooms/join"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 125803342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function TeacherMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "entities/module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "entities/schools",
              href: "/organizations/join"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classrooms",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./menu/use-session
      **********************************/

      ims.set('./menu/use-session', {
        hash: 4175025227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSession = useSession;
          function useSession() {}
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 85630236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _item = require("./item");
          var _themeButton = require("./theme-button");
          var _profile = require("./profile");
          var _context = require("../context");
          function UserMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "user-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "content-user"
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_item.UserMenuItem, {
              href: "/users/me",
              icon: "user"
            }, texts.userMenu.preferences), _react.default.createElement(_themeButton.ThemeSwitcher, null), _react.default.createElement(_item.UserMenuItem, {
              onClick: logout,
              icon: "exit"
            }, texts.userMenu.logout)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./user-menu/item
      ********************************/

      ims.set('./user-menu/item', {
        hash: 1711784581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenuItem = UserMenuItem;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _icons = require("pragmate-ui/icons");
          function UserMenuItem({
            icon,
            children,
            ...props
          }) {
            return _react.default.createElement(_dropdown.DropdownItem, {
              ...props
            }, _react.default.createElement("div", {
              className: "container__item"
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./user-menu/profile
      ***********************************/

      ims.set('./user-menu/profile', {
        hash: 2952732086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const [userProps, setProps] = _react.default.useState(_session.sessionWrapper.user?.getProperties() ?? {});
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: "dropdown-menu__user-icon"
            }, !loadError ? _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /****************************************
      INTERNAL MODULE: ./user-menu/theme-button
      ****************************************/

      ims.set('./user-menu/theme-button', {
        hash: 1023347963,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          var _item = require("./item");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement(_item.UserMenuItem, {
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }), _react.default.createElement("span", null, "Theme"));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./user-menu/user-item
      *************************************/

      ims.set('./user-menu/user-item', {
        hash: 1679571895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = UserItem;
          var _react = require("react");
          function UserItem() {
            return _react.default.createElement("div", null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./user-menu/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./user-menu/theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./index').NavbarHeader : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./user-menu/profile').ProfileIcon : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./user-menu/theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9pbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfYnJlYWRjcnVtYiIsIl9jbG9zYWJsZSIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiZGV0YWlsIiwiY2xhc3NOYW1lIiwiY2xvc2FibGUiLCJicmVhZGNydW1iIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvZ2dsZU1lbnUiLCJ2YWx1ZSIsImdvSG9tZSIsInB1c2hTdGF0ZSIsIlByb3ZpZGVyIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJzZXBhcmF0b3IiLCJVc2VyTWVudSIsIkFzaWRlTWVudSIsIk9mZkNhbnZhc01lbnVDb250ZXh0IiwidXNlT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJpc1RlYWNoZXIiLCJzZXRUZWFjaGVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidGVhY2hlciIsInVzZUJpbmRlciIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwiX2l0ZW0iLCJtZW51IiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwidXNlU2Vzc2lvbiIsIl9kcm9wZG93biIsIl90aGVtZUJ1dHRvbiIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIlRoZW1lU3dpdGNoZXIiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfcmVuZGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2Nsb3NhYmxlLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JNLFNBQVVHLFlBQVlBLENBQUM7WUFBRUMsS0FBSztZQUFFQztVQUFRLENBQUU7WUFDL0MsSUFBSSxDQUFDRCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1FLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QjtjQUNBVCxRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVMLFFBQVEsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsT0FBT0gsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBWSxVQUFVO2NBQUNDLElBQUksRUFBQyxPQUFPO2NBQUNSLE9BQU8sRUFBRUE7WUFBTyxFQUFJO1VBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBSixNQUFBLEdBQUFGLE9BQUE7VUFPTyxNQUFNZSxhQUFhLEdBQUFDLE9B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