System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Image) {
      dependency_6 = _pragmateUi100Beta6Image;
    }, function (_aimpactChatSdk130Session) {
      dependency_7 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Components) {
      dependency_8 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_11 = _pragmateUi100Beta6Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_12 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/dropdown', dependency_11], ['@beyond-js/widgets/render', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/components/navbar-header.code');
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
        hash: 4066031702,
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
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("./closable");
          var _preload = require("./preload");
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
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null)), _react.default.createElement("section", {
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
        hash: 3690413341,
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
            }, ['user.loaded', 'login']);
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
        hash: 2183568391,
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
              name: icon
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 2338361162,
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
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/classrooms/join"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 2417268694,
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
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "community",
              href: "/community"
            }, texts.community), _react.default.createElement(_item.MenuItem, {
              icon: "entities/module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "entities/school",
              href: "/organizations/list"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
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
        hash: 1471099294,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9pbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfY2xvc2FibGUiLCJfcHJlbG9hZCIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiZGV0YWlsIiwiY2xhc3NOYW1lIiwiY2xvc2FibGUiLCJ1cGRhdGVkIiwiYnJlYWRjcnVtYiIsInVuZGVmaW5lZCIsImNscyIsInJlZiIsInVzZVJlZiIsIm1lbnVPcGVuZWQiLCJzZXRPcGVuTWVudSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJQcmVsb2FkIiwidG9nZ2xlTWVudSIsInZhbHVlIiwiZ29Ib21lIiwicHVzaFN0YXRlIiwiUHJvdmlkZXIiLCJJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJNZW51IiwiQXNpZGVNZW51IiwiT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJ1c2VPZmZDYW52YXNNZW51Q29udGV4dCIsIl90ZWFjaGVyIiwiX3Nlc3Npb24iLCJfc3R1ZGVudCIsIl9jb250ZXh0MiIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZUJpbmRlciIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwibmFtZSIsIl9pdGVtIiwibWVudSIsImhvbWUiLCJjbGFzc3Jvb21zIiwiY29tbXVuaXR5IiwibW9kdWxlcyIsIm9yZ2FuaXphdGlvbnMiLCJ1c2VTZXNzaW9uIiwiX3VpIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfZHJvcGRvd24iLCJfcHJvZmlsZSIsImxvZ291dCIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jbG9zYWJsZS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvbWVudS91c2Utc2Vzc2lvbi50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JNLFNBQVVHLFlBQVlBLENBQUM7WUFBRUMsS0FBSztZQUFFQztVQUFRLENBQUU7WUFDL0MsSUFBSSxDQUFDRCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1FLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QjtjQUNBLElBQUksT0FBT0gsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPQSxRQUFRLEVBQUU7Y0FDckROLFFBQUEsQ0FBQVUsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRUwsUUFBUSxDQUFDO1lBQ3pDLENBQUM7WUFDRCxPQUFPSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENBQUFZLFVBQVU7Y0FBQ0Ms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