System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.13/components/icons", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/components", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6List) {
      dependency_4 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_7 = _pragmateUi100Beta6Components;
    }, function (_dayjs2) {
      dependency_8 = _dayjs2;
    }, function (_pragmateUi100Beta6Image) {
      dependency_9 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Tooltip) {
      dependency_10 = _pragmateUi100Beta6Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/components/module-card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/list', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['dayjs', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/tooltip', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/components/module-card');
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
        hash: 2692700119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = Container;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./activities");
          var _dayjs = require("dayjs");
          /*bundle*/
          function Container({
            showDate,
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
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
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
            }, React.createElement("h4", null, title), React.createElement("span", {
              className: "user-data__date"
            }, date), React.createElement("span", null, description)), children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./footer
      ************************/

      ims.set('./footer', {
        hash: 663220849,
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
              data: ownerData
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
        hash: 3601894446,
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
            showDate,
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
                showDate: true,
                item: item,
                texts: texts,
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
        hash: 2025627125,
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
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBY3Rpb25zIiwiYWN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJfcmVhY3QiLCJfbGlzdCIsIl9pY29ucyIsIk1vZHVsZUFjdGl2aXRpZXMiLCJ0eXBlcyIsIkl0ZW0iLCJpdGVtIiwiY2xzIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIl91aSIsIl9hY3Rpdml0aWVzIiwiX2RheWpzIiwiQ29udGFpbmVyIiwic2hvd0RhdGUiLCJ0ZXh0cyIsImNoaWxkcmVuIiwiZW50aXR5IiwidHlwZSIsImRpc2FibGVkIiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsImFjdGl2aXRpZXMiLCJwdXNoIiwiZGF0ZSIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiYWx0Iiwic2l6ZSIsImF1ZGllbmNlIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsInNob3dVc2VyIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJkYXRhIiwiX2NvbXBvbmVudHMiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsImhyZWYiLCJMaW5rIiwiX2ltYWdlIiwiX3Rvb2x0aXAiLCJsYWJlbCIsInBob3RvVXJsIiwibmFtZSIsIlRvb2x0aXAiLCJjb250ZW50IiwiSW1hZ2UiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9mb290ZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVDLE9BQU9BLENBQUM7WUFBRUM7VUFBTyxDQUFFO1lBQ2xDLE9BQU9ILEtBQUEsQ0FBQUksYUFBQSxjQUFNRCxPQUFPLENBQU87VUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUUsTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBRU0sU0FBVU8sZ0JBQWdCQSxDQUFDO1lBQUVDO1VBQUssQ0FBRTtZQUN6QyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsTUFBTUMsSUFBSSxHQUFHQSxDQUFDO2NBQUVDO1lBQUksQ0FBRSxLQUFJO2NBQ3pCLE1BQU1DLEdBQUcsR0FBRyxpQ0FBaUNELElBQUksRUFBRTtjQUNuRCxPQUNDTixNQUFBLENBQUFRLE9BQUEsQ0FBQVQsYUFBQTtnQkFBU1UsU0FBUyxFQUFFRjtjQUFHLEdBQ3RCUCxNQUFBLENBQUFRLE9BQUEsQ0FBQVQsYUFBQSxDQUFDRyxNQUFBLENBQUFRLE9BQU87Z0JBQUNDLElBQUksRUFBRUw7Y0FBSSxFQUFJLENBQ2Q7WUFFWixDQUFDO1lBRUQsT0FBT04sTUFBQSxDQUFBUSxPQUFBLENBQUFULGFBQUEsQ0FBQ0UsS0FBQSxDQUFBVyxJQUFJO2NBQUNILFNBQVMsRUFBQyxzQkFBc0I7Y0FBQ0ksS0FBSyxFQUFFVCxLQUFLO2NBQUVVLE9BQU8sRUFBRVQ7WUFBSSxFQUFJO1VBQzlFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBVixLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBbUIsR0FBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixXQUFBLEdBQUFwQixPQUFBO1VBRUEsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFFTztVQUFVLFNBQVVzQixTQUFTQSxDQUFDO1lBQUVDLFFBQVE7WUFBRWIsSUFBSTtZQUFFYyxLQUFLO1lBQUVDLFFBQVE7WUFBRUMsTUFBTTtZQUFFQyxJQUFJO1lBQUVDLFFBQVE7WUFBRTFCO1VBQU8sQ0FBRTtZQUN4RyxNQUFNMkIsS0FBSyxHQUFHbkIsSUFBSSxDQUFDbUIsS0FBSyxJQUFJbkIsSUFBSSxDQUFDb0IsU0FBUztZQUUxQyxNQUFNQyxXQUFXLEdBQUdyQixJQUFJLENBQUNxQixXQUFXLElBQUlQLEtBQUssQ0FBQ2QsSUFBSSxDQUFDcUIsV0FBVztZQUU5RCxNQUFNdkIsS0FBSyxHQUFHRSxJQUFJLEVBQUVzQixVQUFVLEVBQUV4QixLQUFLLElBQUksRUFBRTtZQUMzQyxJQUFJLENBQUNFLElBQUksRUFBRXNCLFVBQVUsRUFBRXhCLEtBQUssSUFBSUUsSUFBSSxDQUFDaUIsSUFBSSxFQUFFO2NBQzFDO2NBQ0FuQixLQUFLLENBQUN5QixJQUFJLENBQUN2QixJQUFJLENBQUNpQixJQUFJLENBQUM7O1lBRXRCLE1BQU1PLElBQUksR0FBRyxJQUFBYixNQUFBLENBQUFULE9BQUssRUFBQ0YsSUFBSSxDQUFDeUIsV0FBVyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDekQsTUFBTXpCLEdBQUcsR0FBRyxnQkFBZ0JpQixRQUFRLEdBQUcsd0JBQXdCLEdBQUcsRUFBRSxFQUFFO1lBQ3RFLE9BQ0M3QixLQUFBLENBQUFJLGFBQUE7Y0FBU1UsU0FBUyxFQUFFRjtZQUFHLEdBQ3RCWixLQUFBLENBQUFJLGFBQUEsQ0FBQ2dCLEdBQUEsQ0FBQWtCLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFNUIsSUFBSSxDQUFDNkIsT0FBTztjQUFFYixNQUFNLEVBQUVBLE1BQU07Y0FBRWMsR0FBRyxFQUFFWCxLQUFLO2NBQUVZLElBQUksRUFBQyxJQUFJO2NBQUNkLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3BGNUIsS0FBQSxDQUFBSSxhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUF3QixHQUMxQ2QsS0FBQSxDQUFBSSxhQUFBLENBQUNpQixXQUFBLENBQUFiLGdCQUFnQjtjQUFDQyxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUNqQ0UsSUFBSSxDQUFDZ0MsUUFBUSxDQUNMLEVBQ1YzQyxLQUFBLENBQUFJLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDZCxLQUFBLENBQUFJLGFBQUEsYUFBSzBCLEtBQUssQ0FBTSxFQUNoQjlCLEtBQUEsQ0FBQUksYUFBQTtjQUFNVSxTQUFTLEVBQUM7WUFBaUIsR0FBRXFCLElBQUksQ0FBUSxFQUMvQ25DLEtBQUEsQ0FBQUksYUFBQSxlQUFPNEIsV0FBVyxDQUFRLENBQ2pCLEVBQ1ROLFFBQVEsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBMUIsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBMkMsU0FBQSxHQUFBM0MsT0FBQTtVQVNPO1VBQVUsU0FBVTRDLGdCQUFnQkEsQ0FBQztZQUFFbEMsSUFBSTtZQUFFRyxTQUFTO1lBQUVnQyxRQUFRO1lBQUVwQjtVQUFRLElBQWE7WUFBRW9CLFFBQVEsRUFBRTtVQUFJLENBQUU7WUFDL0csTUFBTUMsU0FBUyxHQUFHcEMsSUFBSSxDQUFDcUMsS0FBSyxJQUFJckMsSUFBSSxDQUFDc0MsT0FBTztZQUM1QyxNQUFNZCxJQUFJLEdBQUcsSUFBQWIsTUFBQSxDQUFBVCxPQUFLLEVBQUNGLElBQUksQ0FBQ3lCLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3pELE1BQU16QixHQUFHLEdBQUcsaUJBQWlCRSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9ELE9BQ0NkLEtBQUEsQ0FBQUksYUFBQTtjQUFRVSxTQUFTLEVBQUVGO1lBQUcsR0FDckJaLEtBQUEsQ0FBQUksYUFBQSxDQUFDd0MsU0FBQSxDQUFBTSxRQUFRO2NBQUNDLElBQUksRUFBRUo7WUFBUyxFQUFJLEVBQzdCL0MsS0FBQSxDQUFBSSxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFtQixHQUFFWSxRQUFRLENBQU8sQ0FDM0M7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQTFCLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFtRCxXQUFBLEdBQUFuRCxPQUFBO1VBQ0EsSUFBQW9ELFVBQUEsR0FBQXBELE9BQUE7VUFFTztVQUFVLFNBQVVxRCxVQUFVQSxDQUFDO1lBQ3JDM0MsSUFBSTtZQUNKYyxLQUFLO1lBQ0xELFFBQVE7WUFDUkksSUFBSTtZQUNKMkIsSUFBSTtZQUNKN0IsUUFBUTtZQUNSRyxRQUFRO1lBQ1IxQixPQUFPO1lBQ1B3QixNQUFNLEdBQUc7VUFBUSxDQUNqQjtZQUNBLElBQUk0QixJQUFJLEVBQUU7Y0FDVCxPQUNDdkQsS0FBQSxDQUFBSSxhQUFBLENBQUNnRCxXQUFBLENBQUFJLElBQUk7Z0JBQUNELElBQUksRUFBRUE7Y0FBSSxHQUNmdkQsS0FBQSxDQUFBSSxhQUFBLENBQUNpRCxVQUFBLENBQUE5QixTQUFTO2dCQUNUQyxRQUFRO2dCQUNSYixJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZjLEtBQUssRUFBRUEsS0FBSztnQkFDWnRCLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJ5QixJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZELE1BQU0sRUFBRUEsTUFBTTtnQkFDZEUsUUFBUSxFQUFFQTtjQUFRLEdBRWpCSCxRQUFRLENBQ0UsQ0FDTjs7WUFJVCxPQUNDMUIsS0FBQSxDQUFBSSxhQUFBLENBQUNpRCxVQUFBLENBQUE5QixTQUFTO2NBQUNDLFFBQVE7Y0FBQ2IsSUFBSSxFQUFFQSxJQUFJO2NBQUVjLEtBQUssRUFBRUEsS0FBSztjQUFFdEIsT0FBTyxFQUFFQSxPQUFPO2NBQUUwQixRQUFRLEVBQUVBLFFBQVE7Y0FBRUQsSUFBSSxFQUFFQSxJQUFJO2NBQUVELE1BQU0sRUFBRUE7WUFBTSxHQUM1R0QsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUExQixLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0QsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUF5RCxRQUFBLEdBQUF6RCxPQUFBO1VBY087VUFBVSxTQUFVaUQsUUFBUUEsQ0FBQztZQUFFUyxLQUFLO1lBQUV4QixJQUFJO1lBQUVnQjtVQUFJLENBQWtEO1lBQ3hHLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUVTLFFBQVE7Y0FBRUM7WUFBSSxDQUFFLEdBQUdWLElBQUk7WUFFL0IsT0FDQ25ELEtBQUEsQ0FBQUksYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBb0IsR0FDakM2QyxLQUFLLElBQUkzRCxLQUFBLENBQUFJLGFBQUE7Y0FBSVUsU0FBUyxFQUFDO1lBQWtCLEdBQUU2QyxLQUFLLENBQU0sRUFDdkQzRCxLQUFBLENBQUFJLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDZCxLQUFBLENBQUFJLGFBQUEsQ0FBQ3NELFFBQUEsQ0FBQUksT0FBTztjQUFDQyxPQUFPLEVBQUVGO1lBQUksR0FDckI3RCxLQUFBLENBQUFJLGFBQUEsQ0FBQ3FELE1BQUEsQ0FBQU8sS0FBSztjQUFDbEQsU0FBUyxFQUFDLGdCQUFnQjtjQUFDeUIsR0FBRyxFQUFFcUI7WUFBUSxFQUFJLENBQzFDLENBTUQsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119