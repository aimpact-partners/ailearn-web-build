System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/alert", "pragmate-ui@0.0.37/tabs"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_5 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Alert) {
      dependency_6 = _pragmateUi0037Alert;
    }, function (_pragmateUi0037Tabs) {
      dependency_7 = _pragmateUi0037Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/alert', dependency_6], ['pragmate-ui/tabs', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/ui/components');
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
        hash: 3973317295,
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
              href: "/lessons/management/5c47e4e4-61a6-4ee7-83e1-6b206f89a990"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBRUpBLHVEQUFvQixFQUNwQkEseURBQ2NBLG1FQUFvQyxDQUM5QyxFQUNKQSxpREFBYyxFQUNkQSx5Q0FDQ0Esa0RBQWUsRUFDZkEsa0RBQWUsRUFDZkEsa0RBQWUsRUFDZkEsa0RBQWUsRUFDZkEsa0RBQWUsQ0FDWCxDQUNJLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ087VUFBVSxTQUNSTCxJQUFJO1lBQ1osT0FDQ0ssMkNBQ0NBLDZCQUFDaUIsbUJBQWEsUUFDYmpCLDZCQUFDa0IsVUFBSSxRQUNKbEIsNkJBQUNtQixTQUFHLG1CQUFlLEVBQ25CbkIsNkJBQUNtQixTQUFHLGtCQUFjLENBQ1osRUFDUG5CLDZCQUFDb0IsV0FBSyxRQUNMcEIsMENBQ0NBLDZCQUFDZ0Isc0JBQVUsT0FBRyxFQUNkaEIsNkJBQUNJLGdCQUFPLE9BQUcsRUFDWEosNkJBQUNTLFlBQUssT0FBRyxFQUNUVCw2QkFBQ0QsY0FBTSxPQUFHLENBQ0wsRUFDTkMsOERBQTRCLENBQ3JCLENBQ08sQ0FDVjtVQUVUIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsImV4cG9ydHMiLCJBbGVydHMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkFsZXJ0IiwidHlwZSIsIkJ1dHRvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJCdXR0b25Hcm91cCIsIkNhcmRzIiwiaHJlZiIsInZpZXdCb3giLCJpZCIsImQiLCJ0cmFuc2Zvcm0iLCJmaWxsIiwiVHlwb2dyYXBoeSIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwiUGFuZXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnRzLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvYnV0dG9ucy50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2NhcmRzLnRzeCIsInRzL3ZpZXdzL2NvbXBvbmVudHMvdHlwb2dyYXBoeS50c3giLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=