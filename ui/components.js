System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "pragmate-ui@0.0.3/alert", "react@18.2.0", "@aimpact/ailearn-app@0.0.23/components/ui", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_pragmateUi003Alert) {
      dependency_4 = _pragmateUi003Alert;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0023ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0023ComponentsUi;
    }, function (_pragmateUi003Components) {
      dependency_7 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Icons) {
      dependency_9 = _pragmateUi003Icons;
    }, function (_pragmateUi003Image) {
      dependency_10 = _pragmateUi003Image;
    }, function (_pragmateUi003Tabs) {
      dependency_11 = _pragmateUi003Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.23"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.23/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/alert', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/tabs', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.23/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.23/ui/components');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data/template
      *******************************/

      ims.set('./data/template', {
        hash: 2178830968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.activity = void 0;
          const data = {
            id: 'example-ID',
            picture: 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/umiatpnb6l4vzuqrwi5f',
            language: 'es',
            type: 'example',
            title: 'Example of a title for any card',
            description: 'Example of a description designed for any type of card. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            data: {
              activities: {
                count: 5
              }
            }
          };
          const activity = exports.activity = {
            id: data.id,
            data
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/alerts
      *****************************************/

      ims.set('./views/components/alerts', {
        hash: 1457966519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          function Alerts() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Alerts"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "success"
            }, " Success alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, " error alert"), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, " info alert"), _react.default.createElement(_alert.Alert, {
              type: "warning"
            }, " warning alert")));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/banners
      ******************************************/

      ims.set('./views/components/banners', {
        hash: 3095340695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Banners = Banners;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Banners() {
            const headerList = [{
              url: '',
              status: 'waiting'
            }, {
              url: '',
              status: 'current'
            }, {
              url: '',
              status: 'done'
            }];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Banners"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h4", null, "Default"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default Light"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default with Numbers/List"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              optional: "light",
              list: headerList,
              title: "Let's keep evolving"
            }, _react.default.createElement("p", {
              className: "p1 mb-20"
            }, "Here you have a space to list multiple pages and follow up with a nice dynamic header.", _react.default.createElement("br", null), _react.default.createElement("br", null), "Showing the different possibilities that have redirections through links and multiple colours such as the following:", ' '), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "current: var(--on-primary)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "waiting: var(--tertiary-20)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "success: var(--success-70)")))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/buttons
      ******************************************/

      ims.set('./views/components/buttons', {
        hash: 139363837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Buttons"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h3", null, "Normal state"), _react.default.createElement(_components.Button, null, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Tertiary button"), _react.default.createElement("h3", null, "Disabled Buttons"), _react.default.createElement(_components.Button, {
              disabled: true
            }, "Primary disabled button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: true
            }, "Secondary disable button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              disabled: true
            }, "Tertiary disable button"), _react.default.createElement("h3", null, "Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "tertiary button"), _react.default.createElement("h3", null, "ButtonGroup"), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "btn 1"), _react.default.createElement(_components.Button, null, "btn 2"), _react.default.createElement(_components.Button, null, "btn 3"))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/cards
      ****************************************/

      ims.set('./views/components/cards', {
        hash: 2236851374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Cards = Cards;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _template = require("../../data/template");
          function Cards() {
            console.log(_template.activity);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Cards"), _react.default.createElement("p", {
              className: "p1"
            }, "New Cards"), _react.default.createElement("div", {
              className: "list-example__container"
            }, _react.default.createElement(_ui.Card, null, _react.default.createElement(_ui.CardImage, {
              src: _template.activity.data.picture,
              alt: _template.activity.data.title
            }, _react.default.createElement("div", {
              className: "card__top_text secondary"
            }, "Classroom")), _react.default.createElement(_ui.CardContent, {
              option: "column",
              className: "theme-0"
            }, _react.default.createElement("h5", {
              className: "card__title h3"
            }, _template.activity.data.title), _react.default.createElement("span", {
              className: "card__subtitle disabled-text p2"
            }, _template.activity.data.description), _react.default.createElement("div", {
              className: "card__footer-actions"
            }, _react.default.createElement("hr", {
              className: "card__divider"
            }), _react.default.createElement("div", {
              className: "card__details"
            }, _react.default.createElement("p", {
              className: "cart__text-non-hover"
            }, _template.activity.data.activities?.count, " Actividad"), _react.default.createElement("p", {
              className: "card__text-hover"
            }, "Acceder")))))), _react.default.createElement("p", {
              className: "p1"
            }, "Old card"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement("section", {
              className: "list__item__header curriculum-objective"
            }, _react.default.createElement("header", null, _react.default.createElement("a", {
              href: "/classworks/management/5c47e4e4-61a6-4ee7-83e1-6b206f89a990"
            }, _react.default.createElement("h4", null, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              className: "pragmate-icon"
            }, _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
              id: "Trazado_229",
              "data-name": "Trazado 229",
              d: "M0,0H24V24H0Z",
              transform: "translate(0)",
              fill: "none"
            }), _react.default.createElement("path", {
              id: "Trazado_230",
              "data-name": "Trazado 230",
              d: "M13,3,1,9.545l4.364,2.378v6.545L13,22.636l7.636-4.167V11.924l2.182-1.189v7.538H25V9.545Zm7.44,6.545L13,13.6,5.56,9.545,13,5.487Zm-1.985,7.625L13,20.149,7.545,17.171V13.113L13,16.091l5.455-2.978Z",
              transform: "translate(-1 -0.818)"
            })))), "Card title"))), _react.default.createElement("section", {
              className: "class-actions"
            }, _react.default.createElement("button", {
              type: "button",
              className: "pragmate-icon-button btn-default ripple"
            }, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              className: "pragmate-icon"
            }, _react.default.createElement("g", null, _react.default.createElement("g", null, ' ', _react.default.createElement("path", {
              id: "Trazado_175",
              "data-name": "Trazado 175",
              d: "M0,0H24V24H0Z",
              fill: "none"
            }), _react.default.createElement("path", {
              id: "Trazado_176",
              "data-name": "Trazado 176",
              d: "M51.375,38.33a2.912,2.912,0,0,0-1.96.77l-7.13-4.15a2.767,2.767,0,0,0,0-1.4l7.05-4.11a2.993,2.993,0,1,0-.96-2.19,3.274,3.274,0,0,0,.09.7l-7.05,4.11a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65,2.92,2.92,0,1,0,2.92-2.92Zm0-12.08a1,1,0,1,1-1,1A1,1,0,0,1,51.375,26.25Zm-12,9a1,1,0,1,1,1-1A1,1,0,0,1,39.375,35.25Zm12,7.02a1,1,0,1,1,1-1A1,1,0,0,1,51.375,42.27Z",
              transform: "translate(-33.375 -22.25)"
            }))))), _react.default.createElement("button", {
              type: "button",
              className: "pragmate-icon-button btn-default ripple"
            }, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              className: "pragmate-icon"
            }, _react.default.createElement("g", null, _react.default.createElement("g", {
              id: "delete"
            }, _react.default.createElement("path", {
              d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            }))))))), _react.default.createElement("article", {
              className: "collapsible__container  topics "
            }, _react.default.createElement("header", {
              className: "collapsible__header  topics-header "
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, _react.default.createElement("h5", null, "Any content")))))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/empty
      ****************************************/

      ims.set('./views/components/empty', {
        hash: 1495696455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Empty() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "EmptyList"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.EmptyCard, {
              text: "This is a text field to explain what data is missing.",
              icon: "generate"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/forms
      ****************************************/

      ims.set('./views/components/forms', {
        hash: 4005563620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Forms = Forms;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          function Forms() {
            const defaultValues = {
              defaultName: '',
              examplePassword: '',
              exampleEmail: '',
              hoverText: '',
              defaultText: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
            };
            const {
              defaultName,
              examplePassword,
              exampleEmail,
              hoverText,
              defaultText
            } = values;
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Forms"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_components.Input, {
              label: "Full Name - Default State",
              type: "text",
              name: "defaultName",
              value: defaultName,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: "Full Password - Default State",
              type: "password",
              name: "examplePassword",
              value: examplePassword,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "hoverText",
              value: hoverText,
              onChange: handleChange,
              placeholder: "This is a placeholder example. Complete State"
            }), _react.default.createElement(_components.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "defaultText",
              value: defaultText,
              onChange: handleChange,
              placeholder: "Input user name and surname. Complete State"
            }), _react.default.createElement(_components.Input, {
              placeholder: "Default Disabled Input State",
              type: "email",
              name: "exampleEmail",
              disabled: true,
              value: exampleEmail,
              onChange: handleChange,
              required: true
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/icons
      ****************************************/

      ims.set('./views/components/icons', {
        hash: 2772787824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icons = Icons;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Icons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Icons"), _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Default"), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "chat"
            })), _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Hover"), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "chat"
            })))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/illustrations
      ************************************************/

      ims.set('./views/components/illustrations', {
        hash: 2599249148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Illustrations = Illustrations;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function Illustrations() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Illustrations"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("div", {
              className: "images-list__container"
            }, _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/lwkztda1sq08ushwipmi",
              alt: "Happy Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_270/v1/AImpact/f7knfihku0pyr8eo2yqh",
              alt: "Neutral Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/etq89fualhdkhkpeofat",
              alt: "Neutral Explorer"
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/lists
      ****************************************/

      ims.set('./views/components/lists', {
        hash: 2580355163,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lists = Lists;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const exampleItems = [{
            text: '3'
          }, {
            text: '2'
          }, {
            text: '1'
          }, {
            text: '...'
          }, {
            text: '🚀'
          }];
          function Lists() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Lists"), _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement(_ui.ListContainer, {
              items: exampleItems,
              control: Item
            })));
          }
          function Item({
            data
          }) {
            return _react.default.createElement("p", {
              className: "p2"
            }, data.text);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/typography
      *********************************************/

      ims.set('./views/components/typography', {
        hash: 234921537,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Typography() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Fonts"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h1", null, "h1: Title with h1"), _react.default.createElement("h2", null, "h2: Title with h2"), _react.default.createElement("h3", null, "h3: Title with h3"), _react.default.createElement("h4", null, "h4: Title with h4"), _react.default.createElement("h5", null, "h5: Title with h5"))), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Paragraph"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.SubDivider, {
              titleText: "Example of a subtitle divider"
            }), _react.default.createElement("p", {
              className: "p1"
            }, "P1. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p2"
            }, "P2. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p1 disabled-text"
            }, "P1 Disable text"), _react.default.createElement("p", {
              className: "p2 disabled-text"
            }, "P2 Disable text"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1878888243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _typography = require("./components/typography");
          var _buttons = require("./components/buttons");
          var _cards = require("./components/cards");
          var _tabs = require("pragmate-ui/tabs");
          var _alerts = require("./components/alerts");
          var _icons = require("./components/icons");
          var _forms = require("./components/forms");
          var _lists = require("./components/lists");
          var _banners = require("./components/banners");
          var _illustrations = require("./components/illustrations");
          var _empty = require("./components/empty");
          /*bundle*/
          function View() {
            return _react.default.createElement("main", null, _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, "Elements"), _react.default.createElement(_tabs.Tab, null, "Pallete"), _react.default.createElement(_tabs.Tab, null, "Forms & Lists"), _react.default.createElement(_tabs.Tab, null, "Cards & Banners"), _react.default.createElement(_tabs.Tab, null, "Illustrations")), _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_typography.Typography, null), _react.default.createElement(_icons.Icons, null), _react.default.createElement(_buttons.Buttons, null), _react.default.createElement(_alerts.Alerts, null)), _react.default.createElement("pui-template-view-widget", null), _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_forms.Forms, null), _react.default.createElement(_lists.Lists, null), _react.default.createElement(_empty.Empty, null)), _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_cards.Cards, null), _react.default.createElement(_banners.Banners, null)), _react.default.createElement("div", {
              className: "elements-general__container"
            }, _react.default.createElement(_illustrations.Illustrations, null)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiZGF0YSIsImlkIiwicGljdHVyZSIsImxhbmd1YWdlIiwidHlwZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJhY3Rpdml0eSIsIl9hbGVydCIsIl9yZWFjdCIsIkFsZXJ0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJfdWkiLCJCYW5uZXJzIiwiaGVhZGVyTGlzdCIsInVybCIsInN0YXR1cyIsIkZyYWdtZW50IiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwib3B0aW9uIiwib3B0aW9uYWwiLCJsaXN0IiwiX2NvbXBvbmVudHMiLCJCdXR0b25zIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwiYm9yZGVyZWQiLCJCdXR0b25Hcm91cCIsIl90ZW1wbGF0ZSIsIkNhcmRzIiwiY29uc29sZSIsImxvZyIsIkNhcmQiLCJDYXJkSW1hZ2UiLCJzcmMiLCJDYXJkQ29udGVudCIsImhyZWYiLCJ2aWV3Qm94IiwiZCIsInRyYW5zZm9ybSIsImZpbGwiLCJFbXB0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiRm9ybXMiLCJkZWZhdWx0VmFsdWVzIiwiZGVmYXVsdE5hbWUiLCJleGFtcGxlUGFzc3dvcmQiLCJleGFtcGxlRW1haWwiLCJob3ZlclRleHQiLCJkZWZhdWx0VGV4dCIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm5hbWUiLCJ2YWx1ZSIsIklucHV0IiwibGFiZWwiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJfaWNvbnMiLCJJY29ucyIsIkljb24iLCJfaW1hZ2UiLCJJbGx1c3RyYXRpb25zIiwiSW1hZ2UiLCJleGFtcGxlSXRlbXMiLCJMaXN0cyIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiVHlwb2dyYXBoeSIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiLCJfdHlwb2dyYXBoeSIsIl9idXR0b25zIiwiX2NhcmRzIiwiX3RhYnMiLCJfYWxlcnRzIiwiX2Zvcm1zIiwiX2xpc3RzIiwiX2Jhbm5lcnMiLCJfaWxsdXN0cmF0aW9ucyIsIl9lbXB0eSIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwiUGFuZXMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9kYXRhL3RlbXBsYXRlLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Jhbm5lcnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYnV0dG9ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb3Jtcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbGx1c3RyYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2xpc3RzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3R5cG9ncmFwaHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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