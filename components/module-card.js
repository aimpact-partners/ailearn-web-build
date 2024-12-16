System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.2.17/components/icons", "@aimpact/ailearn-app@0.2.17/components/ui", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/tooltip"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Container, ModuleCardFooter, ModuleCard, UserData, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_4 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0217ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0217ComponentsIcons;
    }, function (_aimpactAilearnApp0217ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0217ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_7 = _pragmateUi100Beta7Components;
    }, function (_dayjs2) {
      dependency_8 = _dayjs2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_10 = _pragmateUi100Beta7Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.17"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.17/components/module-card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/list', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['dayjs', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/tooltip', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.17/components/module-card');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2326613943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Actions = Actions;
          var React = require("react");
          function Actions({
            actions
          }) {
            return React.createElement("div", null, actions);
          }
        }
      });

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
        hash: 2324248553,
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
            date,
            item,
            audience = true,
            texts,
            children,
            entity,
            type,
            disabled,
            actions
          }) {
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            const cls = `entity__item ${disabled ? 'entity__item--disabled' : ''}`;
            return React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }), types?.length || audience ? React.createElement("section", {
              className: "card__header-container"
            }, React.createElement(_activities.ModuleActivities, {
              types: types
            }), audience && React.createElement("span", null, item.audience)) : null, React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h6", null, title), React.createElement("span", {
              className: "item__description"
            }, description)), children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./footer
      ************************/

      ims.set('./footer', {
        hash: 990897762,
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
            showUser = true,
            children
          } = {
            showUser: true
          }) {
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const cls = `entity__footer${className ? ` ${className}` : ''}`;
            return React.createElement("footer", {
              className: cls
            }, showUser && React.createElement(_userData.UserData, {
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
        hash: 859404995,
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
            date = true,
            audience = true,
            type,
            href,
            children,
            disabled,
            actions,
            entity = 'module'
          }) {
            if (href) {
              return React.createElement(_components.Link, {
                href: href
              }, React.createElement(_container.Container, {
                date: date,
                item: item,
                texts: texts,
                audience: audience,
                actions: actions,
                type: type,
                entity: entity,
                disabled: disabled
              }, children));
            }
            return React.createElement(_container.Container, {
              showDate: true,
              item: item,
              texts: texts,
              actions: actions,
              disabled: disabled,
              type: type,
              entity: entity
            }, children);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 869122493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
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
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBY3Rpb25zIiwiYWN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJfcmVhY3QiLCJfbGlzdCIsIl9pY29ucyIsIk1vZHVsZUFjdGl2aXRpZXMiLCJ0eXBlcyIsIkl0ZW0iLCJpdGVtIiwiY2xzIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIl91aSIsIl9hY3Rpdml0aWVzIiwiQ29udGFpbmVyIiwiZGF0ZSIsImF1ZGllbmNlIiwidGV4dHMiLCJjaGlsZHJlbiIsImVudGl0eSIsInR5cGUiLCJkaXNhYmxlZCIsInRpdGxlIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwicHVzaCIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsInNpemUiLCJsZW5ndGgiLCJfZGF5anMiLCJfdXNlckRhdGEiLCJNb2R1bGVDYXJkRm9vdGVyIiwic2hvd1VzZXIiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJ0aW1lQ3JlYXRlZCIsImZvcm1hdCIsIlVzZXJEYXRhIiwiZGF0YSIsIl9jb21wb25lbnRzIiwiX2NvbnRhaW5lciIsIk1vZHVsZUNhcmQiLCJocmVmIiwiTGluayIsInNob3dEYXRlIiwiX2ltYWdlIiwiX3Rvb2x0aXAiLCJsYWJlbCIsInBob3RvVXJsIiwibmFtZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiSW1hZ2UiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9mb290ZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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