System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_5 = _pragmateUi003Components;
    }, function (_pragmateUi003Alert) {
      dependency_6 = _pragmateUi003Alert;
    }, function (_pragmateUi003Tabs) {
      dependency_7 = _pragmateUi003Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/alert', dependency_6], ['pragmate-ui/tabs', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/ui/components');
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
        hash: 2126984049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function Alerts() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", null, "Alerts"), _react.default.createElement(_alert.Alert, {
              type: "success"
            }, " Success alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, " error alert"), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, " info alert"), _react.default.createElement(_alert.Alert, {
              type: "warning"
            }, " warning alert"));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/buttons
      ******************************************/

      ims.set('./views/components/buttons', {
        hash: 2260053961,
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
            }, _react.default.createElement("h3", null, "Normal state"), _react.default.createElement(_components.Button, null, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "tertiary button"), _react.default.createElement("h3", null, "Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "tertiary button"), _react.default.createElement("h3", null, "ButtonGroup"), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "btn 1"), _react.default.createElement(_components.Button, null, "btn 2"), _react.default.createElement(_components.Button, null, "btn 3")));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/cards
      ****************************************/

      ims.set('./views/components/cards', {
        hash: 139362965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Cards = Cards;
          var _react = require("react");
          function Cards() {
            return _react.default.createElement("div", {
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
            }, _react.default.createElement("h5", null, "Any content")))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/typography
      *********************************************/

      ims.set('./views/components/typography', {
        hash: 1213506188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function Typography() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", null, "Titles:"), _react.default.createElement("h1", null, "h1: Title with h1"), _react.default.createElement("h2", null, "h2: Title with h2"), _react.default.createElement("h3", null, "h3: Title with h3"), _react.default.createElement("h4", null, "h4: Title with h4"), _react.default.createElement("h5", null, "h5: Title with h5"), _react.default.createElement("h6", null, "h6: Title with h6")), _react.default.createElement("hr", null), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, "Elements to be removed or replaced"), _react.default.createElement("div", {
              className: "title-xl"
            }, "title ", _react.default.createElement("span", null, ".title-xl"))), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", null, "Paragraph"), _react.default.createElement("p", null, "Paragraph style of Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum? Consectetur id corporis optio similique."), _react.default.createElement("h3", null, "Strong text"), _react.default.createElement("p", null, "Content with ", _react.default.createElement("strong", null, "strong texts inline")), _react.default.createElement("h3", null, "Lists"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "item 1"), _react.default.createElement("li", null, "item 2"), _react.default.createElement("li", null, "item 3"), _react.default.createElement("li", null, "item 4"), _react.default.createElement("li", null, "item 5"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 254844313,
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
          /*bundle*/
          function View() {
            return _react.default.createElement("main", null, _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, "Elements"), _react.default.createElement(_tabs.Tab, null, "Pallete")), _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_typography.Typography, null), _react.default.createElement(_buttons.Buttons, null), _react.default.createElement(_cards.Cards, null), _react.default.createElement(_alerts.Alerts, null)), _react.default.createElement("pui-template-view-widget", null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX2FsZXJ0IiwiQWxlcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBbGVydCIsInR5cGUiLCJfY29tcG9uZW50cyIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJCdXR0b25Hcm91cCIsIkNhcmRzIiwiaHJlZiIsInZpZXdCb3giLCJpZCIsImQiLCJ0cmFuc2Zvcm0iLCJmaWxsIiwiVHlwb2dyYXBoeSIsIkZyYWdtZW50IiwiX3R5cG9ncmFwaHkiLCJfYnV0dG9ucyIsIl9jYXJkcyIsIl90YWJzIiwiX2FsZXJ0cyIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwiUGFuZXMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0cy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9idXR0b25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3R5cG9ncmFwaHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxH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