System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/breadcrumb", "@aimpact/ailearn-app@0.0.40/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.40/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0040ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0040ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0040ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0040ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_12 = _pragmateUi011Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_13 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.40"], ["@aimpact/ailearn-app", "0.0.40"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.40/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/dropdown', dependency_12], ['@beyond-js/widgets/render', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.40/components/navbar-header.code');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./closable
      **************************/
      ims.set('./closable', {
        hash: 4203241015,
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
              if (typeof backlink === 'function') return backlink();
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
        hash: 4080033145,
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
          var _preload = require("./preload");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function NavbarHeader({
            children,
            detail,
            className,
            closable = false,
            updated,
            breadcrumb,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu,
              updated
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
            }, detail), breadcrumb && _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: "desktop-breadcrumb",
              items: breadcrumb,
              separator: ":"
            }))), _react.default.createElement("section", {
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
        hash: 3939455983,
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
            const [isTeacher, setTeacher] = _react.default.useState(!!_session.sessionWrapper?.user?.roles?.includes('teacher'));
            const ref = (0, _react.useRef)(null);
            (0, _hooks.useBinder)([_session.sessionWrapper.user], () => {
              setTeacher(!!_session.sessionWrapper.user?.user?.roles.includes('teacher'));
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

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 3972098412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("header", {
              className: "navbar-header preload"
            }, _react.default.createElement("div", {
              className: "left-section"
            }), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_image.Image, {
              className: "profile-img preload"
            }))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 2656601671,
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
            }, texts.userMenu.preferences), _react.default.createElement(_item.UserMenuItem, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9pbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfYnJlYWRjcnVtYiIsIl9jbG9zYWJsZSIsIl9wcmVsb2FkIiwiX3VpIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbGFzc05hbWUiLCJjbG9zYWJsZSIsInVwZGF0ZWQiLCJicmVhZGNydW1iIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWQiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJQcm92aWRlciIsIkltYWdlIiwic3JjIiwiYWx0IiwiQW5pbWF0ZWRDb250YWluZXIiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJzZXBhcmF0b3IiLCJVc2VyTWVudSIsIkFzaWRlTWVudSIsIk9mZkNhbnZhc01lbnVDb250ZXh0IiwidXNlT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJpc1RlYWNoZXIiLCJzZXRUZWFjaGVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZUJpbmRlciIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwiX2l0ZW0iLCJtZW51IiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwidXNlU2Vzc2lvbiIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2Nsb3NhYmxlLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztVQWdCTSxTQUFVRyxZQUFZQSxDQUFDO1lBQUVDLEtBQUs7WUFBRUM7VUFBUSxDQUFFO1lBQy9DLElBQUksQ0FBQ0QsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNRSxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkI7Y0FDQSxJQUFJLE9BQU9ILFFBQVEsS0FBSyxVQUFVLEVBQUUsT0FBT0EsUUFBUSxFQUFFO2NBQ3JETixRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVMLFFBQVEsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsT0FBT0gsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFB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