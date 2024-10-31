System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.9/components/icons", "@aimpact/ailearn-app@0.1.9/components/ui", "pragmate-ui@1.0.0-beta.6/components", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.6/image"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp019ComponentsIcons) {
      dependency_4 = _aimpactAilearnApp019ComponentsIcons;
    }, function (_aimpactAilearnApp019ComponentsUi) {
      dependency_5 = _aimpactAilearnApp019ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_6 = _pragmateUi100Beta6Components;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_pragmateUi100Beta6Image) {
      dependency_8 = _pragmateUi100Beta6Image;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/icons', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/components', dependency_6], ['dayjs', dependency_7], ['pragmate-ui/image', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.9/components/module-card');
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
        hash: 406098800,
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
            disabled
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
        hash: 697607280,
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
            entity = 'module'
          }) {
            if (href) {
              return React.createElement(_components.Link, {
                href: href
              }, React.createElement(_container.Container, {
                item: item,
                texts: texts,
                type: type,
                entity: entity,
                disabled: disabled
              }, children));
            }
            return React.createElement(_container.Container, {
              item: item,
              texts: texts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfaWNvbnMiLCJNb2R1bGVBY3Rpdml0aWVzIiwidHlwZXMiLCJJdGVtIiwiaXRlbSIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImljb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiUmVhY3QiLCJfdWkiLCJfYWN0aXZpdGllcyIsIkNvbnRhaW5lciIsInRleHRzIiwiY2hpbGRyZW4iLCJlbnRpdHkiLCJ0eXBlIiwiZGlzYWJsZWQiLCJ0aXRsZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiYWN0aXZpdGllcyIsInB1c2giLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJzaXplIiwiYXVkaWVuY2UiLCJfZGF5anMiLCJfdXNlckRhdGEiLCJNb2R1bGVDYXJkRm9vdGVyIiwic2hvd1VzZXIiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJkYXRlIiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJVc2VyRGF0YSIsImRhdGEiLCJfY29tcG9uZW50cyIsIl9jb250YWluZXIiLCJNb2R1bGVDYXJkIiwiaHJlZiIsIkxpbmsiLCJfaW1hZ2UiLCJsYWJlbCIsInBob3RvVXJsIiwibmFtZSIsIkltYWdlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMudHN4IiwiL3RzL2NvbnRhaW5lci50c3giLCIvdHMvZm9vdGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdB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