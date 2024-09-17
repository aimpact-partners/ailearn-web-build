System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.6-dev.34/components/icons", "@aimpact/ailearn-app@0.1.6-dev.34/components/ui", "pragmate-ui@1.0.0-beta.6/components", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Container, ModuleCardFooter, ModuleCard, UserData, __beyond_pkg, hmr;
  _export({
    Container: void 0,
    ModuleCardFooter: void 0,
    ModuleCard: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta6List) {
      dependency_3 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp016Dev34ComponentsIcons) {
      dependency_4 = _aimpactAilearnApp016Dev34ComponentsIcons;
    }, function (_aimpactAilearnApp016Dev34ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev34ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_6 = _pragmateUi100Beta6Components;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_pragmateUi100Beta6Image) {
      dependency_8 = _pragmateUi100Beta6Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.34"], ["@aimpact/ailearn-app", "0.1.6-dev.34"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.34/components/module-card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/icons', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/components', dependency_6], ['dayjs', dependency_7], ['pragmate-ui/image', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.34/components/module-card');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./activities
      ****************************/
      ims.set('./activities', {
        hash: 1925520068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ModuleActivities({
            types
          }) {
            if (!types) return null;
            const Item = ({
              item
            }) => {
              const cls = `activity-type__icon activity--${item}`;
              return _react.default.createElement("section", {
                className: cls
              }, _react.default.createElement(_icons.AppIcon, {
                icon: item
              }));
            };
            return _react.default.createElement(_list.List, {
              className: "activity-types__list",
              items: types,
              control: Item
            });
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./container
      ***************************/

      ims.set('./container', {
        hash: 2999296064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = Container;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./activities");
          /*bundle*/
          function Container({
            item,
            texts,
            children
          }) {
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title,
              size: "sm"
            }), React.createElement("section", {
              className: "card__header-container"
            }, React.createElement(_activities.ModuleActivities, {
              types: types
            }), item.audience), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h4", null, title), React.createElement("span", null, description)), children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./footer
      ************************/

      ims.set('./footer', {
        hash: 3252565470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardFooter = ModuleCardFooter;
          var React = require("react");
          var _dayjs = require("dayjs");
          var _userData = require("./user-data");
          /*bundle*/
          function ModuleCardFooter({
            item,
            className,
            showUser,
            children
          } = {
            showUser: true
          }) {
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const cls = `entity__footer${className ? ` ${className}` : ''}`;
            return React.createElement("footer", {
              className: cls
            }, React.createElement(_userData.UserData, {
              data: ownerData,
              date: date
            }), React.createElement("div", {
              className: "actions-container"
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4198301023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCard = ModuleCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _container = require("./container");
          /*bundle*/
          function ModuleCard({
            item,
            texts,
            href,
            children
          }) {
            if (href) {
              return React.createElement(_components.Link, {
                href: href
              }, React.createElement(_container.Container, {
                item: item,
                texts: texts
              }, children));
            }
            return React.createElement(_container.Container, {
              item: item,
              texts: texts
            }, children);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 3207490455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserData({
            label,
            date,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("div", null, React.createElement("span", {
              className: "user-data__name"
            }, name), React.createElement("span", {
              className: "user-data__date"
            }, date))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./footer",
        "from": "ModuleCardFooter",
        "name": "ModuleCardFooter"
      }, {
        "im": "./index",
        "from": "ModuleCard",
        "name": "ModuleCard"
      }, {
        "im": "./user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Container') && _export("Container", Container = require ? require('./container').Container : value);
        (require || prop === 'ModuleCardFooter') && _export("ModuleCardFooter", ModuleCardFooter = require ? require('./footer').ModuleCardFooter : value);
        (require || prop === 'ModuleCard') && _export("ModuleCard", ModuleCard = require ? require('./index').ModuleCard : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfaWNvbnMiLCJNb2R1bGVBY3Rpdml0aWVzIiwidHlwZXMiLCJJdGVtIiwiaXRlbSIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImljb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiUmVhY3QiLCJfdWkiLCJfYWN0aXZpdGllcyIsIkNvbnRhaW5lciIsInRleHRzIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiYWN0aXZpdGllcyIsInR5cGUiLCJwdXNoIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiYWx0Iiwic2l6ZSIsImF1ZGllbmNlIiwiX2RheWpzIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsInNob3dVc2VyIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiZGF0ZSIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiVXNlckRhdGEiLCJkYXRhIiwiX2NvbXBvbmVudHMiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsImhyZWYiLCJMaW5rIiwiX2ltYWdlIiwibGFiZWwiLCJwaG90b1VybCIsIm5hbWUiLCJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzLnRzeCIsIi90cy9jb250YWluZXIudHN4IiwiL3RzL2Zvb3Rlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VB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