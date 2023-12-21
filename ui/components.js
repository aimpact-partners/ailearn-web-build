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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['pragmate-ui/alert', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/tabs', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/ui/components');
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
        hash: 3760538140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          function Alerts() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Alerts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "success"
            }, " Success alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, " error alert"), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, " info alert"), _react.default.createElement(_alert.Alert, {
              type: "warning"
            }, " warning alert"))));
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
        hash: 1649869800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Buttons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("span", {
              className: "h3"
            }, "Normal state"), _react.default.createElement(_components.Button, null, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "Disabled Buttons"), _react.default.createElement(_components.Button, {
              disabled: true
            }, "Primary disabled button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: true
            }, "Secondary disable button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              disabled: true
            }, "Tertiary disable button"), _react.default.createElement("span", {
              className: "h3"
            }, "Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "ButtonGroup"), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "btn 1"), _react.default.createElement(_components.Button, null, "btn 2"), _react.default.createElement(_components.Button, null, "btn 3")))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/cards
      ****************************************/

      ims.set('./views/components/cards', {
        hash: 263639254,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Cards"), _react.default.createElement("span", {
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
            }, _react.default.createElement("span", {
              className: "cart__text-non-hover p2"
            }, _template.activity.data.activities?.count, " Actividad"), _react.default.createElement("span", {
              className: "card__text-hover p2"
            }, "Acceder")))))), _react.default.createElement("span", {
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
        hash: 2006490327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Empty() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "EmptyList"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.EmptyCard, {
              text: "This is a text field to explain what data is missing.",
              icon: "generate"
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/forms
      ****************************************/

      ims.set('./views/components/forms', {
        hash: 730311099,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Forms"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
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
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/icons
      ****************************************/

      ims.set('./views/components/icons', {
        hash: 2311052754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icons = Icons;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Icons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Icons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
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
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
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
        hash: 2842405251,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Lists"), _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement(_ui.ListContainer, {
              items: exampleItems,
              control: Item
            }))));
          }
          function Item({
            data
          }) {
            return _react.default.createElement("span", {
              className: "p2"
            }, data.text);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/typography
      *********************************************/

      ims.set('./views/components/typography', {
        hash: 2202033890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Typography() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Fonts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h1", null, "h1: Title with h1"), _react.default.createElement("h2", null, "h2: Title with h2"), _react.default.createElement("h3", null, "h3: Title with h3"), _react.default.createElement("h4", null, "h4: Title with h4"), _react.default.createElement("h5", null, "h5: Title with h5"))), _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Paragraph"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiZGF0YSIsImlkIiwicGljdHVyZSIsImxhbmd1YWdlIiwidHlwZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwiY291bnQiLCJhY3Rpdml0eSIsIl9hbGVydCIsIl9yZWFjdCIsIkFsZXJ0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBbGVydCIsIl91aSIsIkJhbm5lcnMiLCJoZWFkZXJMaXN0IiwidXJsIiwic3RhdHVzIiwiSGVhZGVyQ2FyZCIsImFsdCIsImltYWdlIiwib3B0aW9uIiwib3B0aW9uYWwiLCJsaXN0IiwiX2NvbXBvbmVudHMiLCJCdXR0b25zIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwiYm9yZGVyZWQiLCJCdXR0b25Hcm91cCIsIl90ZW1wbGF0ZSIsIkNhcmRzIiwiQ2FyZCIsIkNhcmRJbWFnZSIsInNyYyIsIkNhcmRDb250ZW50IiwiaHJlZiIsInZpZXdCb3giLCJkIiwidHJhbnNmb3JtIiwiZmlsbCIsIkVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImljb24iLCJGb3JtcyIsImRlZmF1bHRWYWx1ZXMiLCJkZWZhdWx0TmFtZSIsImV4YW1wbGVQYXNzd29yZCIsImV4YW1wbGVFbWFpbCIsImhvdmVyVGV4dCIsImRlZmF1bHRUZXh0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwiSW5wdXQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsIl9pY29ucyIsIkljb25zIiwiSWNvbiIsIl9pbWFnZSIsIklsbHVzdHJhdGlvbnMiLCJJbWFnZSIsImV4YW1wbGVJdGVtcyIsIkxpc3RzIiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkl0ZW0iLCJUeXBvZ3JhcGh5IiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCIsIl90eXBvZ3JhcGh5IiwiX2J1dHRvbnMiLCJfY2FyZHMiLCJfdGFicyIsIl9hbGVydHMiLCJfZm9ybXMiLCJfbGlzdHMiLCJfYmFubmVycyIsIl9pbGx1c3RyYXRpb25zIiwiX2VtcHR5IiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJQYW5lcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2RhdGEvdGVtcGxhdGUudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYmFubmVycy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9idXR0b25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvcm1zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lsbHVzdHJhdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvbGlzdHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHlwb2dyYXBoeS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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