System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.3.26/components/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.26/components/ui", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-app@0.3.26/components/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.1/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, NavbarHeader, CloasableNavbar, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    CloasableNavbar: void 0,
    DefaultNavbar: void 0,
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
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_5 = _pragmateUi100Beta7Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp0326ComponentsHooks) {
      dependency_7 = _aimpactAilearnApp0326ComponentsHooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp0326ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0326ComponentsUi;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactChatSdk141Session) {
      dependency_11 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnApp0326ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0326ComponentsIcons;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_14 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets111Render) {
      dependency_15 = _beyondJsWidgets111Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/widgets/render', dependency_15]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.26/components/navbar-header.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/closable
      *************************************/
      ims.set('./components/closable', {
        hash: 2604772544,
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
              // console.log(1, backlink, routing.history.records.entries.length, routing.history.records.entries[0]);
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
        hash: 2621145671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _closable = require("./navbars/closable");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_react.default.Fragment, null, props.closable ? _react.default.createElement(_closable.CloasableNavbar, {
              ...props
            }) : _react.default.createElement(DefaultNavbar, {
              ...props
            }));
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
        hash: 375223156,
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
            const [isTeacher, setTeacher] = _react.default.useState(!!user?.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user?.teacher || !!user?.roles.includes('teacher'));
            }, ['user.loaded', 'login']);
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

      /**********************************
      INTERNAL MODULE: ./navbars/closable
      **********************************/

      ims.set('./navbars/closable', {
        hash: 3482866284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloasableNavbar = CloasableNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("../components/closable");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function CloasableNavbar({
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
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
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
            }, _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
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
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 3075896655,
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
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function DefaultNavbar({
            children,
            className,
            store
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
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
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/logo.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
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
        hash: 842084235,
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
        "im": "./navbars/closable",
        "from": "CloasableNavbar",
        "name": "CloasableNavbar"
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
        (require || prop === 'CloasableNavbar') && _export("CloasableNavbar", CloasableNavbar = require ? require('./navbars/closable').CloasableNavbar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jbG9zYWJsZSIsIk5hdmJhckhlYWRlciIsInByb3BzIiwiRnJhZ21lbnQiLCJjbG9zYWJsZSIsIkNsb2FzYWJsZU5hdmJhciIsIkRlZmF1bHROYXZiYXIiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX2NvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJBc2lkZU1lbnUiLCJ0b2dnbGVNZW51IiwibWVudU9wZW5lZCIsInJlZiIsInVzZVJlZiIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZUJpbmRlciIsImNscyIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJQcm92aWRlciIsIkljb24iLCJNZW51SXRlbSIsImNoaWxkcmVuIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsIm1lbnUiLCJob21lIiwiY2xhc3Nyb29tcyIsImNvbW11bml0eSIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwiYXJjaGl2ZSIsInVzZVNlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9ub3RpZmljYXRpb24iLCJfcHJlbG9hZCIsIl9mcmFtZXJNb3Rpb24iLCJkZXRhaWwiLCJzdG9yZSIsInVuZGVmaW5lZCIsInNldE9wZW5NZW51IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJhbHQiLCJVc2VyTWVudSIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2Nsb3NhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi50c3giLCIvdHMvY29tcG9uZW50cy9wcmVsb2FkLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZW51L2NvbnRleHQudHN4IiwiL3RzL21lbnUvaW5kZXgudHN4IiwiL3RzL21lbnUvaXRlbS50c3giLCIvdHMvbWVudS9zdHVkZW50LnRzeCIsIi90cy9tZW51L3RlYWNoZXIudHN4IiwiL3RzL21lbnUvdXNlLXNlc3Npb24udHN4IiwiL3RzL25hdmJhcnMvY2xvc2FibGUudHN4IiwiL3RzL25hdmJhcnMvZGVmYXVsdC50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztVQWdCTSxTQUFVRyxZQUFZQSxDQUFDO1lBQUVDLE1BQU07WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDO1VBQUssQ0FBRTtZQUM5RCxJQUFJLENBQUNGLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsTUFBTUcsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO2NBQ0EsSUFBS0osUUFBUSxJQUFJRixNQUFNLENBQUNHLEtBQUssSUFBS1IsUUFBQSxDQUFBWSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9FO2dCQUNBLElBQUksT0FBT1QsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPQSxRQUFRLEVBQUU7Z0JBQ3JEUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVWLFFBQVEsQ0FBQzs7Y0FHekMsT0FBT1AsUUFBQSxDQUFBWSxPQUFPLENBQUNNLElBQUksRUFBRTtZQUN0QixDQUFDO1lBQ0QsT0FBT2YsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixNQUFBLENBQUFtQixVQUFVO2NBQUNDLElBQUksRUFBQyxXQUFXO2NBQUNDLFNBQVMsRUFBQyxRQUFRO2NBQUNkLE9B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