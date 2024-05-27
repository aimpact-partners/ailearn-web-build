System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/breadcrumb", "@aimpact/ailearn-app@0.0.43/components/ui", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.43/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0043ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0043ComponentsUi;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0043ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0043ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_12 = _pragmateUi011Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_13 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.43"], ["@aimpact/ailearn-app", "0.0.43"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.43/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/dropdown', dependency_12], ['@beyond-js/widgets/render', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.43/components/navbar-header.code');
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
        hash: 2097684269,
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
            const ref = (0, _react.useRef)(null);
            const {
              user
            } = _session.sessionWrapper;
            const [isTeacher, setTeacher] = _react.default.useState(!!user.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user.teacher || !!user?.roles.includes('teacher'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9pbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfYnJlYWRjcnVtYiIsIl9jbG9zYWJsZSIsIl9wcmVsb2FkIiwiX3VpIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbGFzc05hbWUiLCJjbG9zYWJsZSIsInVwZGF0ZWQiLCJicmVhZGNydW1iIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWQiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJQcm92aWRlciIsIkltYWdlIiwic3JjIiwiYWx0IiwiQW5pbWF0ZWRDb250YWluZXIiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJzZXBhcmF0b3IiLCJVc2VyTWVudSIsIkFzaWRlTWVudSIsIk9mZkNhbnZhc01lbnVDb250ZXh0IiwidXNlT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpc1RlYWNoZXIiLCJzZXRUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwidGFyZ2V0IiwiSWNvbiIsIl9jb21wb25lbnRzIiwiTWVudUl0ZW0iLCJocmVmIiwicHJvcHMiLCJDb250cm9sIiwiTGluayIsImF0dHJzIiwiQXBwSWNvbiIsIl9pdGVtIiwibWVudSIsImNsYXNzcm9vbXMiLCJtb2R1bGVzIiwib3JnYW5pemF0aW9ucyIsInVzZVNlc3Npb24iLCJfZHJvcGRvd24iLCJfcHJvZmlsZSIsImxvZ291dCIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jbG9zYWJsZS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvbWVudS91c2Utc2Vzc2lvbi50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUFnQk0sU0FBVUcsWUFBWUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVDO1VBQVEsQ0FBRTtZQUMvQyxJQUFJLENBQUNELEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsTUFBTUUsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO2NBQ0EsSUFBSSxPQUFPSCxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU9BLFFBQVEsRUFBRTtjQUNyRE4sUUFBQSxDQUFBVSxPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFTCxRQUFRLENBQUM7WUFDekMsQ0FBQztZQUNELE9BQU9ILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNYLE1BQUEsQ0FBQVksVUFBVTtjQUFDQyxJQUFJLEVBQUMsT0FBTztjQUFDUixPQUFPLEVBQUVBO1lBQU8sRUFBSTtVQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQUosTUFBQSxHQUFBRixPQUFBO1VBT08sTUFBTWUsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR2IsTUFBQSxDQUFBUyxPQUFLLENBQUNNLGFBQWEsQ0FBVyxFQUFjLENBQUM7VUFDbkUsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTWhCLE1BQUEsQ0FBQVMsT0FBSyxDQUFDUSxVQUFVLENBQUNKLGFBQWEsQ0FBQztVQUFDQyxPQUFBLENBQUFFLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1J0RSxJQUFBaEIsTUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixlQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsS0FBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixTQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQTBCLFdBQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBRCxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkIsU0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLEdBQUEsR0FBQTdCLE9BQUE7VUFDTztVQUFVLFNBQVU4QixZQUFZQSxDQUFDO1lBQ3ZDQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxRQUFRLEdBQUcsS0FBSztZQUNoQkMsT0FBTztZQUNQQyxVQUFVO1lBQ1YvQixRQUFRLEdBQUdnQztVQUFTLENBQ3BCO1lBQ0EsTUFBTUMsR0FBRyxHQUFHLGdCQUFnQkwsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM5RCxNQUFNTSxHQUFHLEdBQUdyQyxNQUFBLENBQUFTLE9BQUssQ0FBQzZCLE1BQU0sRUFBRTtZQUMxQixNQUFNLENBQUNDLFVBQVUsRUFBRUMsV0FBVyxDQUFDLEdBQUd4QyxNQUFBLENBQUFTLE9BQUssQ0FBQ2dDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUF6QixNQUFBLENBQUEwQixRQUFRLEVBQUN4QixlQUFBLENBQUF5QixNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxJQUFJLENBQUNKLFVBQVUsRUFBRSxPQUFPMUMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dCLFFBQUEsQ0FBQXFCLE9BQU8sT0FBRztZQUVuQyxNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTVIsV0FBVyxDQUFDLENBQUNELFVBQVUsQ0FBQztZQUNqRCxNQUFNVSxLQUFLLEdBQUc7Y0FBRU4sS0FBSztjQUFFSixVQUFVO2NBQUVTLFVBQVU7Y0FBRWY7WUFBTyxDQUFFO1lBQ3hELE1BQU1pQixNQUFNLEdBQUdBLENBQUEsS0FBTXJELFFBQUEsQ0FBQVUsT0FBTyxDQUFDNEMsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUUzQyxPQUNDbkQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csUUFBQSxDQUFBUixhQUFhLENBQUN1QyxRQUFRO2NBQUNILEtBQUssRUFBRUE7WUFBSyxHQUNuQ2pELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQixTQUFTLEVBQUVLLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQTtZQUFHLEdBQy9CckMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU3FCLFNBQVMsRUFBQztZQUFjLEdBQy9CLENBQUNDLFFBQVEsSUFBSWhDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNYLE1BQUEsQ0FBQVksVUFBVTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDUixPQUFPLEVBQUU0QyxVQUFVO2NBQUVqQixTQUFTLEVBQUM7WUFBdUIsRUFBRyxFQUMvRi9CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNlLFNBQUEsQ0FBQXhCLFlBQVk7Y0FBQ0MsS0FBSyxFQUFFOEIsUUFBUTtjQUFFN0IsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFHcEQsQ0FBQzZCLFFBQVEsSUFDVGhDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNTLE1BQUEsQ0FBQWtDLEtBQUs7Y0FDTGpELE9BQU8sRUFBRThDLE1BQU07Y0FDZkksR0FBRyxFQUFDLGlDQUFpQztjQUNyQ0MsR0FBRyxFQUFDLFFBQVE7Y0FDWnhCLFNBQVMsRUFBQztZQUFhLEVBRXhCLEVBRUFDLFFBQVEsSUFBSUYsTUFBTSxJQUFJOUIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTXFCLFNBQVMsRUFBQztZQUFRLEdBQUVELE1BQU0sQ0FBUSxFQUM5REksVUFBVSxJQUNWbEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lCLEdBQUEsQ0FBQTZCLGlCQUFpQixRQUNqQnhELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLFdBQUEsQ0FBQWlDLFVBQVU7Y0FBQzFCLFNBQVMsRUFBQyxvQkFBb0I7Y0FBQzJCLEtBQUssRUFBRXhCLFVBQVU7Y0FBRXlCLFNBQVMsRUFBQztZQUFHLEVBQUcsQ0FFL0UsQ0FDUSxFQUNWM0QsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU3FCLFNBQVMsRUFBQztZQUFlLEdBQ2hDRixRQUFRLEVBQ1Q3QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxTQUFBLENBQUFxQyxRQUFRLE9BQUcsQ0FDSCxDQUNGLEVBRVQ1RCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUF1QyxTQUFTLE9BQUcsQ0FDVztVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRUEsSUFBQTdELE1BQUEsR0FBQUYsT0FBQTtVQU9PLE1BQU1nRSxvQkFBb0IsR0FBQWhELE9BQUEsQ0FBQWdELG9CQUFBLEdBQUc5RCxNQUFBLENBQUFTLE9BQUssQ0FBQ00sYUFBYSxDQUFlLEVBQWtCLENBQUM7VUFDbEYsTUFBTWdELHVCQUF1QixHQUFHQSxDQUFBLEtBQU0vRCxNQUFBLENBQUFTLE9BQUssQ0FBQ1EsVUFBVSxDQUFDNkMsb0JBQW9CLENBQUM7VUFBQ2hELE9BQUEsQ0FBQWlELHVCQUFBLEdBQUFBLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JwRixJQUFBL0QsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBa0UsUUFBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsUUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxTQUFBLEdBQUFyRSxPQUFBO1VBRU0sU0FBVStELFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFYixVQUFVO2NBQUVULFVBQVU7Y0FBRUk7WUFBSyxDQUFFLEdBQUcsSUFBQXRCLFFBQUEsQ0FBQUwsZ0JBQWdCLEdBQUU7WUFDNUQsTUFBTXFCLEdBQUcsR0FBRyxJQUFBckMsTUFBQSxDQUFBc0MsTUFBTSxFQUFpQixJQUFJLENBQUM7WUFDeEMsTUFBTTtjQUFFOEI7WUFBSSxDQUFFLEdBQUdILFFBQUEsQ0FBQUksY0FBYztZQUMvQixNQUFNLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxDQUFDLEdBQUd2RSxNQUFBLENBQUFTLE9BQUssQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDLENBQUMyQixJQUFJLENBQUNJLE9BQU8sSUFBSSxDQUFDLENBQUNKLElBQUksRUFBRUssS0FBSyxFQUFFQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEcsSUFBQXhELE1BQUEsQ0FBQXlELFNBQVMsRUFDUixDQUFDUCxJQUFJLENBQUMsRUFDTixNQUFLO2NBQ0pHLFVBQVUsQ0FBQyxDQUFDLENBQUNILElBQUksQ0FBQ0ksT0FBTyxJQUFJLENBQUMsQ0FBQ0osSUFBSSxFQUFFSyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQ0QsYUFBYSxDQUNiO1lBRUQsTUFBTXRDLEdBQUcsR0FBRyxrQkFBa0JHLFVBQVUsR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFO1lBQ3pELE1BQU1xQyxZQUFZLEdBQUcsNEJBQTRCckMsVUFBVSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDOUUsTUFBTXNDLElBQUksR0FBR1AsU0FBUyxHQUFHTixRQUFBLENBQUFjLFdBQVcsR0FBR1osUUFBQSxDQUFBYSxXQUFXO1lBQ2xELE1BQU1DLGVBQWUsR0FBRzNFLEtBQUssSUFBRztjQUMvQixJQUFJZ0MsR0FBRyxDQUFDNEMsT0FBTyxDQUFDQyxVQUFVLENBQUM3RSxLQUFLLENBQUM4RSxNQUFNLENBQUMsRUFBRW5DLFVBQVUsQ0FBQyxDQUFDVCxVQUFVLENBQUM7WUFDbEUsQ0FBQztZQUNELE9BQ0N2QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsU0FBQSxDQUFBTCxvQkFBb0IsQ0FBQ1YsUUFBUTtjQUFDSCxLQUFLLEVBQUU7Z0JBQUVOLEtBQUs7Z0JBQUVKLFVBQVU7Z0JBQUVTO2NBQVU7WUFBRSxHQUN0RWhELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQixTQUFTLEVBQUU2QyxZQUFZO2NBQUV4RSxPQUFPLEVBQUU0RSxlQUFlO2NBQUUzQyxHQUFHLEVBQUVBO1lBQUcsR0FDL0RyQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFPcUIsU0FBUyxFQUFFSztZQUFHLEdBQ3BCcEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUXFCLFNBQVMsRUFBQztZQUF3QyxHQUN6RC9CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQixTQUFTLEVBQUM7WUFBYyxHQUM1Qi9CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNYLE1BQUEsQ0FBQXFGLElBQUk7Y0FBQ3hFLElBQUksRUFBQyxNQUFNO2NBQUNSLE9BQU8sRUFBRTRDO1lBQVUsRUFBSSxFLG1CQUVwQyxFQUNOaEQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBcUYsSUFBSTtjQUFDeEUsSUFBSSxFQUFDLE9BQU87Y0FBQ1IsT0FBTyxFQUFFNEM7WUFBVSxFQUFJLENBQ2xDLEVBQ1RoRCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUUsSUFBSSxPQUFHLENBQ0QsQ0FDSCxDQUN5QjtVQUVsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTdFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF1RixXQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQXVCLFFBQUEsR0FBQXZCLE9BQUE7VUFNTSxTQUFVd0YsUUFBUUEsQ0FBQztZQUFFMUUsSUFBSTtZQUFFMkUsSUFBSTtZQUFFMUQsUUFBUTtZQUFFLEdBQUcyRDtVQUFLLENBQWM7WUFDdEUsTUFBTUMsT0FBTyxHQUFHRixJQUFJLEdBQUdGLFdBQUEsQ0FBQUssSUFBSSxHQUFHLEtBQUs7WUFDbkMsTUFBTTtjQUFFMUMsVUFBVTtjQUFFVDtZQUFVLENBQUUsR0FBRyxJQUFBbEIsUUFBQSxDQUFBMEMsdUJBQXVCLEdBQUU7WUFDNUQsTUFBTTRCLEtBQUssR0FBRztjQUFFNUQsU0FBUyxFQUFFO1lBQWlCLENBQUU7WUFDOUMsSUFBSXdELElBQUksRUFBRTtjQUNUSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUdKLElBQUk7O1lBR3JCLE1BQU1uRixPQUFPLEdBQUdBLENBQUEsS0FBTTRDLFVBQVUsQ0FBQyxDQUFDVCxVQUFVLENBQUM7WUFDN0MsT0FDQ3ZDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUEsR0FBUThFO1lBQUssR0FDWnhGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRSxPQUFPO2NBQUEsR0FBS0UsS0FBSztjQUFFdkYsT0FBTyxFQUFFQTtZQUFPLEdBQ2xDUSxJQUFJLElBQUlaLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNYLE1BQUEsQ0FBQTZGLE9BQUk7Y0FBQ3RDLEdBQUcsRUFBRTFDO1lBQUksRUFBSSxFQUMzQmlCLFFBQVEsQ0FDQSxDQUNOO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUE3QixNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsUUFBQSxHQUFBdkIsT0FBQTtVQUVBLElBQUErRixLQUFBLEdBQUEvRixPQUFBO1VBRU0sU0FBVWlGLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUNMcEMsS0FBSyxFQUFFO2dCQUFFbUQsSUFBSSxFQUFFbkQ7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQXRCLFFBQUEsQ0FBQUwsZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRixLQUFBLENBQUFQLFFBQVE7Y0FBQzFFLElBQUksRUFBQyxxQkFBcUI7Y0FBQzJFLElBQUksRUFBQztZQUFrQixHQUMxRDVDLEtBQUssQ0FBQ29ELFVBQVUsQ0FDUCxDQUNOO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUEvRixNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsUUFBQSxHQUFBdkIsT0FBQTtVQUVBLElBQUErRixLQUFBLEdBQUEvRixPQUFBO1VBRU0sU0FBVWdGLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUNMbkMsS0FBSyxFQUFFO2dCQUFFbUQsSUFBSSxFQUFFbkQ7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQXRCLFFBQUEsQ0FBQUwsZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ2hCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRixLQUFBLENBQUFQLFFBQVE7Y0FBQzFFLElBQUksRUFBQyxpQkFBaUI7Y0FBQzJFLElBQUksRUFBQztZQUFlLEdBQ25ENUMsS0FBSyxDQUFDcUQsT0FBTyxDQUNKLEVBQ1hoRyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUYsS0FBQSxDQUFBUCxRQUFRO2NBQUMxRSxJQUFJLEVBQUMsa0JBQWtCO2NBQUMyRSxJQUFJLEVBQUM7WUFBcUIsR0FDMUQ1QyxLQUFLLENBQUNzRCxhQUFhLENBQ1YsRUFDWGpHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRixLQUFBLENBQUFQLFFBQVE7Y0FBQzFFLElBQUksRUFBQyxxQkFBcUI7Y0FBQzJFLElBQUksRUFBQztZQUFrQixHQUMxRDVDLEtBQUssQ0FBQ29ELFVBQVUsQ0FDUCxDQUNOO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJNLFNBQVVHLFVBQVVBLENBQUEsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNGOUIsSUFBQWxHLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQTZCLEdBQUEsR0FBQTdCLE9BQUE7VUFDTSxTQUFVaUQsT0FBT0EsQ0FBQTtZQUN0QixPQUNDL0MsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lCLEdBQUEsQ0FBQTZCLGlCQUFpQixRQUNqQnhELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFxQixTQUFTLEVBQUM7WUFBdUIsR0FDeEMvQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUIsU0FBUyxFQUFDO1lBQWMsRUFBTyxFQUNwQy9CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQixTQUFTLEVBQUM7WUFBZSxHQUM3Qi9CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNTLE1BQUEsQ0FBQWtDLEtBQUs7Y0FBQ3RCLFNBQVMsRUFBQztZQUFxQixFQUFHLENBQ3BDLENBQ0UsQ0FDVTtVQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBL0IsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXFHLFNBQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFELFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErRixLQUFBLEdBQUEvRixPQUFBO1VBRUEsSUFBQXNHLFFBQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBdUIsUUFBQSxHQUFBdkIsT0FBQTtVQUVNLFNBQVU4RCxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRWpCO1lBQUssQ0FBRSxHQUFHLElBQUF0QixRQUFBLENBQUFMLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU1xRixNQUFNLEdBQUcsTUFBTWhHLEtBQUssSUFBRztjQUM1QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsTUFBTTJELFFBQUEsQ0FBQUksY0FBYyxDQUFDZ0MsTUFBTSxFQUFFO2NBQzdCeEcsUUFBQSxDQUFBVSxPQUFPLENBQUM0QyxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQ2pDLENBQUM7WUFFRCxPQUNDbkQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lGLFNBQUEsQ0FBQUcsUUFBUTtjQUFDdkUsU0FBUyxFQUFDO1lBQVcsR0FDOUIvQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUYsU0FBQSxDQUFBSSxjQUFjO2NBQUN4RSxTQUFTLEVBQUM7WUFBYyxHQUN2Qy9CLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwRixRQUFBLENBQUFJLFdBQVcsT0FBRyxDQUNDLEVBQ2pCeEcsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lGLFNBQUEsQ0FBQU0sWUFBWSxRQUNaekcsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21GLEtBQUEsQ0FBQWEsWUFBWTtjQUFDbkIsSUFBSSxFQUFDLFdBQVc7Y0FBQzNFLElBQUksRUFBQztZQUFNLEdBQ3hDK0IsS0FBSyxDQUFDZ0UsUUFBUSxDQUFDQyxXQUFXLENBQ2IsRUFFZjVHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRixLQUFBLENBQUFhLFlBQVk7Y0FBQ3RHLE9BQU8sRUFBRWlHLE1BQU07Y0FBRXpGLElBQUksRUFBQztZQUFNLEdBQ3hDK0IsS0FBSyxDQUFDZ0UsUUFBUSxDQUFDTixNQUFNLENBQ1IsQ0FDRCxDQUNMO1VBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFyRyxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBcUcsU0FBQSxHQUFBckcsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVU0RyxZQUFZQSxDQUFDO1lBQUU5RixJQUFJO1lBQUVpQixRQUFRO1lBQUUsR0FBRzJEO1VBQUssQ0FBRTtZQUN4RCxPQUNDeEYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lGLFNBQUEsQ0FBQVUsWUFBWTtjQUFBLEdBQUtyQjtZQUFLLEdBQ3RCeEYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS3FCLFNBQVMsRUFBQztZQUFpQixHQUM5Qm5CLElBQUksSUFBSVosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBcUYsSUFBSTtjQUFDeEUsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDNUJpQixRQUFRLENBQ0osQ0FDUTtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBN0IsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBRU87VUFBYSxNQUFNMEcsV0FBVyxHQUFHQSxDQUFBLEtBQUs7WUFDNUMsTUFBTSxDQUFDTSxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHL0csTUFBQSxDQUFBUyxPQUFLLENBQUNnQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQ3VFLFNBQVMsRUFBRUMsUUFBUSxDQUFDLEdBQUdqSCxNQUFBLENBQUFTLE9BQUssQ0FBQ2dDLFFBQVEsQ0FBQ3dCLFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJLEVBQUU4QyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDeEYsSUFBQWhHLE1BQUEsQ0FBQXlELFNBQVMsRUFBQyxDQUFDVixRQUFBLENBQUFJLGNBQWMsQ0FBQyxFQUFFLE1BQU00QyxRQUFRLENBQUNoRCxRQUFBLENBQUFJLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDOEMsYUFBYSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7WUFFekYsSUFBSSxDQUFDakQsUUFBQSxDQUFBSSxjQUFjLENBQUNELElBQUksRUFBRTtZQUUxQixNQUFNK0MsZUFBZSxHQUFHQSxDQUFBLEtBQU1KLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFaEQsT0FDQy9HLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtxQixTQUFTLEVBQUM7WUFBMEIsR0FDdkMsQ0FBQytFLFNBQVMsR0FDVjlHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNTLE1BQUEsQ0FBQWtDLEtBQUs7Y0FBQ0UsR0FBRyxFQUFDLG9CQUFvQjtjQUFDRCxHQUFHLEVBQUUwRCxTQUFTLENBQUNJLFFBQVE7Y0FBRUMsT0FBTyxFQUFFRjtZQUFlLEVBQUksR0FFckZuSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENBQUFxRixJQUFJO2NBQUNyRCxTQUFTLEVBQUMsSUFBSTtjQUFDbkIsSUFBSSxFQUFFO1lBQU0sRUFDakMsQ0FDSTtVQUVSLENBQUM7VUFBQ0UsT0FBQSxDQUFBMEYsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRixJQUFBeEcsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXdILE9BQUEsR0FBQXhILE9BQUE7VUFFQSxJQUFBK0YsS0FBQSxHQUFBL0YsT0FBQTtVQUVPO1VBQVUsU0FBVXlILGFBQWFBLENBQUE7WUFDdkMsTUFBTUMsS0FBSyxHQUFHQyxVQUFVLEVBQUVDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPO1lBQzVFLE1BQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xELE1BQU1DLFlBQVksR0FBV1AsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPO1lBQ3JELE1BQU1RLFNBQVMsR0FBV0osWUFBWSxJQUFJRyxZQUFZO1lBQ3RELE1BQU0sQ0FBQ25ILElBQUksRUFBRXFILE9BQU8sQ0FBQyxHQUFHakksTUFBQSxDQUFBUyxPQUFLLENBQUNnQyxRQUFRLENBQVN1RixTQUFTLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFFckYsU0FBU0UsWUFBWUEsQ0FBQ0MsQ0FBQztjQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Y0FFbEIsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaEQsTUFBTWYsS0FBSyxHQUFHNUcsSUFBSSxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUMvQ3lILFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFaEIsS0FBSyxDQUFDO2NBQ2pESyxZQUFZLENBQUNZLE9BQU8sQ0FBQyxPQUFPLEVBQUVqQixLQUFLLENBQUM7Y0FDcENGLE9BQUEsQ0FBQW9CLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVwQixLQUFLLENBQUM7Y0FFakRTLE9BQU8sQ0FBQ1QsS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzNDO1lBRUF4SCxNQUFBLENBQUFTLE9BQUssQ0FBQ29JLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2pCLFlBQVksRUFBRTtjQUNuQixNQUFNUyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoREYsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVaLFlBQVksQ0FBQztZQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQzVILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRixLQUFBLENBQUFhLFlBQVk7Y0FBQ3RHLE9BQU8sRUFBRThIO1lBQVksR0FDbENsSSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENBQUFxRixJQUFJO2NBQUN4RSxJQUFJLEVBQUVBLElBQUk7Y0FBRVIsT0FBTyxFQUFFOEg7WUFBWSxFQUFJLEVBQzNDbEksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsdUJBQWtCLENBQ0o7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFWLE1BQUEsR0FBQUYsT0FBQTtVQUNNLFNBQVVnSixRQUFRQSxDQUFBO1lBQ3ZCLE9BQU85SSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFXO1VBQ25CIn0=