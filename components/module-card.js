System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.9/components/icons", "@aimpact/ailearn-app@0.1.9/components/ui", "pragmate-ui@1.0.0-beta.6/components", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Container, ModuleCardFooter, ModuleCard, UserData, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6List) {
      dependency_4 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp019ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp019ComponentsIcons;
    }, function (_aimpactAilearnApp019ComponentsUi) {
      dependency_6 = _aimpactAilearnApp019ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_7 = _pragmateUi100Beta6Components;
    }, function (_dayjs2) {
      dependency_8 = _dayjs2;
    }, function (_pragmateUi100Beta6Image) {
      dependency_9 = _pragmateUi100Beta6Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.9"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.9/components/module-card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/list', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['dayjs', dependency_8], ['pragmate-ui/image', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.9/components/module-card');
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
        hash: 1708765179,
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
        hash: 1077979469,
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
                item: item,
                texts: texts,
                actions: actions,
                type: type,
                entity: entity,
                disabled: disabled
              }, children));
            }
            return React.createElement(_container.Container, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBY3Rpb25zIiwiYWN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJfcmVhY3QiLCJfbGlzdCIsIl9pY29ucyIsIk1vZHVsZUFjdGl2aXRpZXMiLCJ0eXBlcyIsIkl0ZW0iLCJpdGVtIiwiY2xzIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIl91aSIsIl9hY3Rpdml0aWVzIiwiQ29udGFpbmVyIiwidGV4dHMiLCJjaGlsZHJlbiIsImVudGl0eSIsInR5cGUiLCJkaXNhYmxlZCIsInRpdGxlIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwicHVzaCIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsInNpemUiLCJhdWRpZW5jZSIsIl9kYXlqcyIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJzaG93VXNlciIsIm93bmVyRGF0YSIsIm93bmVyIiwiY3JlYXRvciIsImRhdGUiLCJ0aW1lQ3JlYXRlZCIsImZvcm1hdCIsIlVzZXJEYXRhIiwiZGF0YSIsIl9jb21wb25lbnRzIiwiX2NvbnRhaW5lciIsIk1vZHVsZUNhcmQiLCJocmVmIiwiTGluayIsIl9pbWFnZSIsImxhYmVsIiwicGhvdG9VcmwiLCJuYW1lIiwiSW1hZ2UiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9mb290ZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7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