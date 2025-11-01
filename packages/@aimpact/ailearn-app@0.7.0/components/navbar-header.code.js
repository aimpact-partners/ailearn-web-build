System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "react@18.3.1", "pragmate-ui@1.0.8/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/components/icons", "@radix-ui/react-accordion@1.2.12", "pragmate-ui@1.0.8/dropdown", "@aimpact/chat-sdk@1.5.5/users", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Environment, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    Environment: void 0,
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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

      /*****************************
      INTERNAL MODULE: ./environment
      *****************************/

      ims.set('./environment', {
        hash: 3183393909,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Environment = Environment;
          var _react = require("react");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function Environment() {
            const {
              environment
            } = _wrapper.settings;
            if (!['local', 'development', 'testing', 'quality'].includes(environment)) return null;
            let label = environment === 'quality' ? 'Beta' : environment;
            return _react.default.createElement("div", {
              className: "environment-header"
            }, label, " environment");
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2912096874,
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
          var _environment = require("./environment");
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
            }, _react.default.createElement("div", {
              className: "navbar-sticky-container"
            }, _react.default.createElement(_environment.Environment, null), _react.default.createElement(_framerMotion.motion.header, {
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
            }, children, _react.default.createElement(_userMenu.UserMenu, null))))), _react.default.createElement(_notification.NotificationBar, {
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
        "im": "./environment",
        "from": "Environment",
        "name": "Environment"
      }, {
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
        (require || prop === 'Environment') && _export("Environment", Environment = require ? require('./environment').Environment : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3dyYXBwZXIiLCJFbnZpcm9ubWVudCIsImVudmlyb25tZW50Iiwic2V0dGluZ3MiLCJpbmNsdWRlcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfY2xvc2FibGUiLCJfbm90aWZpY2F0aW9uIiwiX3ByZWxvYWQiLCJfY29udGV4dCIsIl9tZW51IiwiX3VzZXJNZW51IiwiX2Vudmlyb25tZW50IiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbG9zYWJsZSIsInN0b3JlIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidG9nZ2xlTWVudSIsInZhbHVlIiwiZ29Ib21lIiwicHVzaFN0YXRlIiwiUHJvdmlkZXIiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJBUFBfTE9HTyIsImFsdCIsIkFQUF9OQU1FIiwiVXNlck1lbnUiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3Nlc3Npb24iLCJfY29udGV4dDIiLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwidXNlU3RvcmUiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiSWNvbiIsIm1lbnUiLCJzdXBwb3J0IiwiQVBQX1NVUFBPUlRfRU1BSUwiLCJNZW51SXRlbSIsInByb3BzIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsImhvbWUiLCJjbGFzc3Jvb21zIiwiQWNjb3JkaW9uIiwiY29tbXVuaXR5IiwibW9kdWxlcyIsImtiIiwiUm9vdCIsInR5cGUiLCJjb2xsYXBzaWJsZSIsIkl0ZW0iLCJUcmlnZ2VyIiwia25vd2xlZGdlQm94ZXMiLCJDb250ZW50Iiwic2VjdGlvbnMiLCJhcnRpY2xlcyIsIm9yZ2FuaXphdGlvbnMiLCJhcmNoaXZlIiwidXNlU2Vzc2lvbiIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsImhhbmRsZUxvYWRFcnJvciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJvbkVycm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2NvbXBvbmVudHMvY2xvc2FibGUudHN4IiwiL3RzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLnRzeCIsIi90cy9jb21wb25lbnRzL3ByZWxvYWQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Vudmlyb25tZW50LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3VzZXItbWVudS9pdGVtLnRzeCIsIi90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvdHMvdXNlci1tZW51L3VzZXItaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztVQWdCTSxTQUFVRyxZQUFZQSxDQUFDO1lBQUVDLE1BQU07WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDO1VBQUssQ0FBRTtZQUM5RCxJQUFJLENBQUNGLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsTUFBTUcsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUtKLFFBQVEsSUFBSUYsTUFBTSxDQUFDRyxLQUFLLElBQUtSLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMvRTtnQkFDQSxJQUFJLE9BQU9ULFFBQVEsS0FBSyxVQUFVLEVBQUUsT0FBT0EsUUFBUSxFQUFFO2dCQUNyRFAsUUFBQSxDQUFBWSxPQUFPLENBQUNLLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFVixRQUFRLENBQUM7O2NBR3pDLE9BQU9QLFFBQUEsQ0FBQVksT0FBTyxDQUFDTSxJQUFJLEVBQUU7WUFDdEIsQ0FBQztZQUNELE9BQU9mLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFB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