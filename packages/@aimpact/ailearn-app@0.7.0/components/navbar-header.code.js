System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "react@18.3.1", "pragmate-ui@1.0.8/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/components/icons", "@radix-ui/react-accordion@1.2.12", "pragmate-ui@1.0.8/dropdown", "@aimpact/chat-sdk@1.5.5/users", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_beyondJsKernel0114Routing) {
      dependency_2 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_5 = _pragmateUi108Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_7 = _aimpactAilearnApp070SharedHooks;
    }, function (_pragmateUi108Image) {
      dependency_8 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_9 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_10 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactChatSdk155Session) {
      dependency_13 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_radixUiReactAccordion) {
      dependency_15 = _radixUiReactAccordion;
    }, function (_pragmateUi108Dropdown) {
      dependency_16 = _pragmateUi108Dropdown;
    }, function (_aimpactChatSdk155Users) {
      dependency_17 = _aimpactChatSdk155Users;
    }, function (_beyondJsWidgets112Render) {
      dependency_18 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/shared/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['framer-motion', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@radix-ui/react-accordion', dependency_15], ['pragmate-ui/dropdown', dependency_16], ['@aimpact/chat-sdk/users', dependency_17], ['@beyond-js/widgets/render', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/navbar-header.code');
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
        hash: 1878913676,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2601169210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _closable = require("./components/closable");
          var _notification = require("./components/notification");
          var _preload = require("./components/preload");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          /*bundle*/
          function NavbarHeader({
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
            }, detail), _react.default.createElement('app-breadcrumb'), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
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
        hash: 2465851343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 4270880512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var Accordion = require("@radix-ui/react-accordion");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _item = require("./item");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, texts.modules), _wrapper.settings.kb && _react.default.createElement("li", {
              className: "menu-item"
            }, _react.default.createElement(Accordion.Root, {
              type: "single",
              collapsible: true
            }, _react.default.createElement(Accordion.Item, {
              value: `1`
            }, _react.default.createElement(Accordion.Trigger, {
              className: "menu-trigger"
            }, _react.default.createElement("div", {
              className: "container__item"
            }, _react.default.createElement(_icons.AppIcon, {
              name: "entities/classroom"
            }), texts.knowledgeBoxes), _react.default.createElement("span", {
              className: "caret",
              "aria-hidden": true
            }, "\u25BE")), _react.default.createElement(Accordion.Content, {
              className: "menu-content "
            }, _react.default.createElement("ul", {
              className: "submenu"
            }, _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/kb/sections/list"
            }, texts.sections), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/kb/articles/list"
            }, texts.articles)))))), _react.default.createElement(_item.MenuItem, {
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
        hash: 3646206172,
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
        hash: 2932083971,
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
            const handleLoadError = () => setLoadError(true);
            const userProps = _session.sessionWrapper.user?.getProperties() ?? {};
            (0, _hooks.useStore)(_session.sessionWrapper, ['login']);
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
        hash: 4027481563,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3dyYXBwZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2Nsb3NhYmxlIiwiX25vdGlmaWNhdGlvbiIsIl9wcmVsb2FkIiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiZGV0YWlsIiwiY2xvc2FibGUiLCJzdG9yZSIsInVuZGVmaW5lZCIsImNscyIsInJlZiIsInVzZVJlZiIsIm1lbnVPcGVuZWQiLCJzZXRPcGVuTWVudSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvZ2dsZU1lbnUiLCJ2YWx1ZSIsImdvSG9tZSIsInB1c2hTdGF0ZSIsIlByb3ZpZGVyIiwibW90aW9uIiwiaGVhZGVyIiwic3JjIiwic2V0dGluZ3MiLCJBUFBfTE9HTyIsImFsdCIsIkFQUF9OQU1FIiwiVXNlck1lbnUiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3Nlc3Npb24iLCJfY29udGV4dDIiLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VTdG9yZSIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJJY29uIiwibWVudSIsInN1cHBvcnQiLCJBUFBfU1VQUE9SVF9FTUFJTCIsIk1lbnVJdGVtIiwicHJvcHMiLCJDb250cm9sIiwiYXR0cnMiLCJBcHBJY29uIiwibmFtZSIsIl9pdGVtIiwiaG9tZSIsImNsYXNzcm9vbXMiLCJBY2NvcmRpb24iLCJjb21tdW5pdHkiLCJtb2R1bGVzIiwia2IiLCJSb290IiwidHlwZSIsImNvbGxhcHNpYmxlIiwiSXRlbSIsIlRyaWdnZXIiLCJrbm93bGVkZ2VCb3hlcyIsIkNvbnRlbnQiLCJzZWN0aW9ucyIsImFydGljbGVzIiwib3JnYW5pemF0aW9ucyIsImFyY2hpdmUiLCJ1c2VTZXNzaW9uIiwiX2Ryb3Bkb3duIiwiX3Byb2ZpbGUiLCJsb2dvdXQiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiUHJvZmlsZUljb24iLCJEcm9wZG93bk1lbnUiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJVc2VyTWVudUl0ZW0iLCJ1c2VyTWVudSIsInByZWZlcmVuY2VzIiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwiaGFuZGxlTG9hZEVycm9yIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsIm9uRXJyb3IiLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvL3RzL2NvbXBvbmVudHMvY2xvc2FibGUudHN4IiwiLy90cy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi50c3giLCIvL3RzL2NvbXBvbmVudHMvcHJlbG9hZC50c3giLCIvL3RzL2NvbnRleHQudHN4IiwiLy90cy9pbmRleC50c3giLCIvL3RzL21lbnUvY29udGV4dC50c3giLCIvL3RzL21lbnUvaW5kZXgudHN4IiwiLy90cy9tZW51L2l0ZW0udHN4IiwiLy90cy9tZW51L3N0dWRlbnQudHN4IiwiLy90cy9tZW51L3RlYWNoZXIudHN4IiwiLy90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi8vdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi8vdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiLy90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiLy90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JNLFNBQVVHLFlBQVlBLENBQUM7WUFBRUMsTUFBTTtZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUM7VUFBSyxDQUFFO1lBQzlELElBQUksQ0FBQ0YsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNRyxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBS0osUUFBUSxJQUFJRixNQUFNLENBQUNHLEtBQUssSUFBS1IsUUFBQSxDQUFBWSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9FO2dCQUNBLElBQUksT0FBT1QsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPQSxRQUFRLEVBQUU7Z0JBQ3JEUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVWLFFBQVEsQ0FBQzs7Y0FHekMsT0FBT1AsUUFBQSxDQUFBWSxPQUFPLENBQUNNLElBQUksRUFBRTtZQUN0QixDQUFDO1lBQ0QsT0FBT2YsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixNQUFBLENBQUFtQixVQUFVO2NBQUNDLElBQUksRUFBQyxXQUFXO2NBQUNDLFNB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