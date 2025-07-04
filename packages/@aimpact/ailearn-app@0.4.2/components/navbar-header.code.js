System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.2/icons", "react@18.3.1", "pragmate-ui@1.0.2/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/image", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/components/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.2/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, NavbarHeader, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    DefaultNavbar: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsKernel0112Routing) {
      dependency_2 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi102Icons) {
      dependency_3 = _pragmateUi102Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi102Components) {
      dependency_5 = _pragmateUi102Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_7 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Image) {
      dependency_8 = _pragmateUi102Image;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_9 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_10 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactChatSdk154Session) {
      dependency_11 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_pragmateUi102Dropdown) {
      dependency_15 = _pragmateUi102Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_16 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['framer-motion', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@beyond-js/widgets/render', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/components/navbar-header.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/closable
      *************************************/
      ims.set('./components/closable', {
        hash: 1683162156,
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
            broker,
            apply,
            backlink,
            force
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              if (backlink && broker.force || _routing.routing.history.records.entries.length === 1) {
                //back button is not working, so, we always replace the state here.
                if (typeof backlink === 'function') return backlink();
                _routing.routing.replaceState({}, null, backlink);
              }
              return _routing.routing.back();
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              className: "circle",
              onClick: onClick
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/notification
      *****************************************/

      ims.set('./components/notification', {
        hash: 3113318078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationBar = NotificationBar;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dayjs = require("dayjs");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /**
           * Checks if the current date is at most 7 days after the given date.
           * @param {string | Date} date - The input date to compare.
           * @returns {boolean} - Returns true if the current date is at most 7 days after the input date, otherwise false.
           */
          function isWithinSevenDays(date) {
            const inputDate = (0, _dayjs.default)(date);
            const maxDate = inputDate.add(7, 'day');
            return !(0, _dayjs.default)().isAfter(maxDate);
          }
          function NotificationBar({
            texts
          }) {
            const isVisible = !localStorage.getItem('app.version.notification');
            const canBeShowed = isWithinSevenDays('2024-12-01');
            const [mostBeShowed, setMostBeShowed] = _react.default.useState(isVisible && canBeShowed);
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!mostBeShowed) return null;
            const onClose = event => {
              event.stopPropagation();
              localStorage.setItem('app.version.notification', 'true');
              setMostBeShowed(false);
            };
            return _react.default.createElement("div", {
              className: "notification__bar--container"
            }, _react.default.createElement("div", {
              className: "notification__bar--content"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize === 'xs',
              ternary: true,
              options: {
                true: _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, _react.default.createElement("div", {
                  className: "notification__message"
                }, texts.newVersion.xs)),
                false: _react.default.createElement("div", {
                  className: "notification__message"
                }, _react.default.createElement("h6", null, texts.newVersion.desktop.title), _react.default.createElement("span", null, texts.newVersion.desktop.label), _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, texts.newVersion.desktop.link))
              }
            }), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./components/preload
      ************************************/

      ims.set('./components/preload', {
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

      /************************
      INTERNAL MODULE: ./global
      ************************/

      ims.set('./global', {
        hash: 3098530438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3551831174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _default = require("./navbars/default");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_default.DefaultNavbar, {
              ...props,
              closable: props.closable
            });
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
        hash: 2710892935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../context");
          var _context2 = require("./context");
          var _student = require("./student");
          var _teacher = require("./teacher");
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
            //@ts-ignore
            const isTeacher = !!user?.teacher || !!user?.roles?.includes('teacher');
            (0, _hooks.useStore)(user, ['user.loaded', 'login']);
            if (!user) return null;
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
            }), _wrapper.settings.APP_NAME), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement("div", {
              className: "menu__inner-content"
            }, _react.default.createElement(Menu, null), _react.default.createElement("div", {
              className: "menu__footer"
            }, _react.default.createElement("div", {
              className: "icon__container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "email"
            })), texts.menu.support, ": ", _wrapper.settings.APP_SUPPORT_EMAIL)))));
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
        hash: 3943653979,
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
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 1130199880,
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
            }, texts.classrooms), _react.default.createElement(_item.MenuItem, {
              icon: "archive",
              href: "/archive"
            }, texts.archive));
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
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 3697988557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultNavbar = DefaultNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("../components/closable");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function DefaultNavbar({
            children,
            detail,
            className,
            closable = false,
            store,
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
              toggleMenu
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, closable ? _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink,
              force: store?.broker?.force
            }) : _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 1953972172,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _dropdown = require("pragmate-ui/dropdown");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _image = require("pragmate-ui/image");
          var _profile = require("./profile");
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
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement("section", {
              className: "user-menu__user-data"
            }, _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: _session.sessionWrapper.user.photoURL
            }), _react.default.createElement("span", null, _session.sessionWrapper.user.displayName), _react.default.createElement("span", null, _session.sessionWrapper.user.email)), _react.default.createElement(_item.UserMenuItem, {
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
        hash: 4170625474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const [userProps, setProps] = _react.default.useState(_session.sessionWrapper.user?.getProperties() ?? {});
            const handleLoadError = () => setLoadError(true);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
            return _react.default.createElement("div", {
              className: "dropdown-menu__user-icon"
            }, !loadError ? _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.AppIcon, {
              icon: "user"
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
        "im": "./navbars/default",
        "from": "DefaultNavbar",
        "name": "DefaultNavbar"
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
        (require || prop === 'DefaultNavbar') && _export("DefaultNavbar", DefaultNavbar = require ? require('./navbars/default').DefaultNavbar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwiTmF2YmFySGVhZGVyIiwicHJvcHMiLCJEZWZhdWx0TmF2YmFyIiwiY2xvc2FibGUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3dyYXBwZXIiLCJfc2Vzc2lvbiIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiX3N0dWRlbnQiLCJfdGVhY2hlciIsIkFzaWRlTWVudSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbmVkIiwicmVmIiwidXNlUmVmIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VTdG9yZSIsImNscyIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJQcm92aWRlciIsIkljb24iLCJzZXR0aW5ncyIsIkFQUF9OQU1FIiwibWVudSIsInN1cHBvcnQiLCJBUFBfU1VQUE9SVF9FTUFJTCIsIk1lbnVJdGVtIiwiY2hpbGRyZW4iLCJDb250cm9sIiwiYXR0cnMiLCJBcHBJY29uIiwibmFtZSIsIl9pdGVtIiwiaG9tZSIsImNsYXNzcm9vbXMiLCJjb21tdW5pdHkiLCJtb2R1bGVzIiwib3JnYW5pemF0aW9ucyIsImFyY2hpdmUiLCJ1c2VTZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJfY2xvc2FibGUiLCJfbm90aWZpY2F0aW9uIiwiX3ByZWxvYWQiLCJfZnJhbWVyTW90aW9uIiwiZGV0YWlsIiwic3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRPcGVuTWVudSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdvSG9tZSIsInB1c2hTdGF0ZSIsIm1vdGlvbiIsImhlYWRlciIsInNyYyIsIkFQUF9MT0dPIiwiYWx0IiwiVXNlck1lbnUiLCJfZHJvcGRvd24iLCJfcHJvZmlsZSIsImxvZ291dCIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJ1c2VCaW5kZXIiLCJvbkVycm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2xvc2FibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3ByZWxvYWQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvbWVudS91c2Utc2Vzc2lvbi50c3giLCIvdHMvbmF2YmFycy9kZWZhdWx0LnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUFnQk0sU0FBVUcsWUFBWUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQztVQUFLLENBQUU7WUFDOUQsSUFBSSxDQUFDRixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFLSixRQUFRLElBQUlGLE1BQU0sQ0FBQ0csS0FBSyxJQUFLUixRQUFBLENBQUFZLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0U7Z0JBQ0EsSUFBSSxPQUFPVCxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU9BLFFBQVEsRUFBRTtnQkFDckRQLFFBQUEsQ0FBQVksT0FBTyxDQUFDSyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRVYsUUFBUSxDQUFDOztjQUd6QyxPQUFPUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUFPZixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQW1CLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQ0MsU0FBUyxF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