System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.3-test.03/components/icons", "@aimpact/ailearn-app@0.1.3-test.03/components/ui", "pragmate-ui@1.0.0-beta.1/components", "dayjs@1.11.10", "pragmate-ui@1.0.0-beta.1/image"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta1List) {
      dependency_3 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp013Test03ComponentsIcons) {
      dependency_4 = _aimpactAilearnApp013Test03ComponentsIcons;
    }, function (_aimpactAilearnApp013Test03ComponentsUi) {
      dependency_5 = _aimpactAilearnApp013Test03ComponentsUi;
    }, function (_pragmateUi100Beta1Components) {
      dependency_6 = _pragmateUi100Beta1Components;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_pragmateUi100Beta1Image) {
      dependency_8 = _pragmateUi100Beta1Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.03"], ["@aimpact/ailearn-app", "0.1.3-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/components/module-card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/icons', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/components', dependency_6], ['dayjs', dependency_7], ['pragmate-ui/image', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.03/components/module-card');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./activities
      ****************************/
      ims.set('./activities', {
        hash: 492192634,
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
        hash: 2993138320,
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
            const ownerData = item.owner ?? item.creator;
            return React.createElement("article", {
              className: "entity__item"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), React.createElement("section", {
              className: "card__header-container"
            }, React.createElement(_activities.ModuleActivities, {
              types: item?.activities?.types
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
        hash: 4091591037,
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
            const title = item.title ?? item.objective;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfaWNvbnMiLCJNb2R1bGVBY3Rpdml0aWVzIiwidHlwZXMiLCJJdGVtIiwiaXRlbSIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsImljb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiUmVhY3QiLCJfdWkiLCJfYWN0aXZpdGllcyIsIkNvbnRhaW5lciIsInRleHRzIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwib3duZXJEYXRhIiwib3duZXIiLCJjcmVhdG9yIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiYWx0IiwiYWN0aXZpdGllcyIsImF1ZGllbmNlIiwiX2RheWpzIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsInNob3dVc2VyIiwiZGF0ZSIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiVXNlckRhdGEiLCJkYXRhIiwiX2NvbXBvbmVudHMiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsImhyZWYiLCJMaW5rIiwiX2ltYWdlIiwibGFiZWwiLCJwaG90b1VybCIsIm5hbWUiLCJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzLnRzeCIsIi90cy9jb250YWluZXIudHN4IiwiL3RzL2Zvb3Rlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsZ0JBQWdCQSxDQUFDO1lBQUVDO1VBQUssQ0FBRTtZQUN6QyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsTUFBTUMsSUFBSSxHQUFHQSxDQUFDO2NBQUVDO1lBQUksQ0FBRSxLQUFJO2NBQ3pCLE1BQU1DLEdBQUcsR0FBRyxpQ0FBaUNELElBQUksRUFBRTtjQUNuRCxPQUNDUCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtnQkFBU0MsU0FBUyxFQUFFSDtjQUFHLEdBQ3RCUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxNQUFBLENBQUFTLE9BQU87Z0JBQUNDLElBQUksRUFBRU47Y0FBSSxFQUFJLENBQ2Q7WUFFWixDQUFDO1lBQ0QsT0FBT1AsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsS0FBQSxDQUFBWSxJQUFJO2NBQUNILFNBQVMsRUFBQyxzQkFBc0I7Y0FBQ0ksS0FBSyxFQUFFVixLQUFLO2NBQUVXLE9BQU8sRUFBRVY7WUFBSSxFQUFJO1VBQzlFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFXLEtBQUEsR0FBQWhCLE9BQUE7VUFFQSxJQUFBaUIsR0FBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixXQUFBLEdBQUFsQixPQUFBO1VBR087VUFBVSxTQUFVbUIsU0FBU0EsQ0FBQztZQUFFYixJQUFJO1lBQUVjLEtBQUs7WUFBRUM7VUFBUSxDQUFFO1lBQzdELE1BQU1DLEtBQUssR0FBR2hCLElBQUksQ0FBQ2dCLEtBQUssSUFBSWhCLElBQUksQ0FBQ2lCLFNBQVM7WUFFMUMsTUFBTUMsV0FBVyxHQUFHbEIsSUFBSSxDQUFDa0IsV0FBVyxJQUFJSixLQUFLLENBQUNkLElBQUksQ0FBQ2tCLFdBQVc7WUFDOUQsTUFBTUMsU0FBUyxHQUFHbkIsSUFBSSxDQUFDb0IsS0FBSyxJQUFJcEIsSUFBSSxDQUFDcUIsT0FBTztZQUU1QyxPQUNDWCxLQUFBLENBQUFQLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDaENNLEtBQUEsQ0FBQVAsYUFBQSxDQUFDUSxHQUFBLENBQUFXLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFdkIsSUFBSSxDQUFDd0IsT0FBTztjQUFFQyxNQUFNLEVBQUMsUUFBUTtjQUFDQyxHQUFHLEVBQUVWO1lBQUssRUFBSSxFQUM5RE4sS0FBQSxDQUFBUCxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUF3QixHQUMxQ00sS0FBQSxDQUFBUCxhQUFBLENBQUNTLFdBQUEsQ0FBQWYsZ0JBQWdCO2NBQUNDLEtBQUssRUFBRUUsSUFBSSxFQUFFMkIsVUFBVSxFQUFFN0I7WUFBSyxFQUFJLEVBQ25ERSxJQUFJLENBQUM0QixRQUFRLENBQ0wsRUFDVmxCLEtBQUEsQ0FBQVAsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBc0IsR0FDeENNLEtBQUEsQ0FBQVAsYUFBQSxhQUFLYSxLQUFLLENBQU0sRUFDaEJOLEtBQUEsQ0FBQVAsYUFBQSxlQUFPZSxXQUFXLENBQVEsQ0FDakIsRUFDVEgsUUFBUSxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUFMLEtBQUEsR0FBQWhCLE9BQUE7VUFHQSxJQUFBbUMsTUFBQSxHQUFBbkMsT0FBQTtVQUNBLElBQUFvQyxTQUFBLEdBQUFwQyxPQUFBO1VBU087VUFBVSxTQUFVcUMsZ0JBQWdCQSxDQUFDO1lBQUUvQixJQUFJO1lBQUVJLFNBQVM7WUFBRTRCLFFBQVE7WUFBRWpCO1VBQVEsSUFBYTtZQUFFaUIsUUFBUSxFQUFFO1VBQUksQ0FBRTtZQUMvRyxNQUFNYixTQUFTLEdBQUduQixJQUFJLENBQUNvQixLQUFLLElBQUlwQixJQUFJLENBQUNxQixPQUFPO1lBQzVDLE1BQU1ZLElBQUksR0FBRyxJQUFBSixNQUFBLENBQUEzQixPQUFLLEVBQUNGLElBQUksQ0FBQ2tDLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3pELE1BQU1sQyxHQUFHLEdBQUcsaUJBQWlCRyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9ELE9BQ0NNLEtBQUEsQ0FBQVAsYUFBQTtjQUFRQyxTQUFTLEVBQUVIO1lBQUcsR0FDckJTLEtBQUEsQ0FBQVAsYUFBQSxDQUFDMkIsU0FBQSxDQUFBTSxRQUFRO2NBQUNDLElBQUksRUFBRWxCLFNBQVM7Y0FBRWMsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDekN2QixLQUFBLENBQUFQLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQUVXLFFBQVEsQ0FBTyxDQUMzQztVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBTCxLQUFBLEdBQUFoQixPQUFBO1VBRUEsSUFBQTRDLFdBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBNkMsVUFBQSxHQUFBN0MsT0FBQTtVQUVPO1VBQVUsU0FBVThDLFVBQVVBLENBQUM7WUFBRXhDLElBQUk7WUFBRWMsS0FBSztZQUFFMkIsSUFBSTtZQUFFMUI7VUFBUSxDQUFFO1lBQ3BFLE1BQU1DLEtBQUssR0FBR2hCLElBQUksQ0FBQ2dCLEtBQUssSUFBSWhCLElBQUksQ0FBQ2lCLFNBQVM7WUFFMUMsSUFBSXdCLElBQUksRUFBRTtjQUNULE9BQ0MvQixLQUFBLENBQUFQLGFBQUEsQ0FBQ21DLFdBQUEsQ0FBQUksSUFBSTtnQkFBQ0QsSUFBSSxFQUFFQTtjQUFJLEdBQ2YvQixLQUFBLENBQUFQLGFBQUEsQ0FBQ29DLFVBQUEsQ0FBQTFCLFNBQVM7Z0JBQUNiLElBQUksRUFBRUEsSUFBSTtnQkFBRWMsS0FBSyxFQUFFQTtjQUFLLEdBQ2pDQyxRQUFRLENBQ0UsQ0FDTjs7WUFJVCxPQUNDTCxLQUFBLENBQUFQLGFBQUEsQ0FBQ29DLFVBQUEsQ0FBQTFCLFNBQVM7Y0FBQ2IsSUFBSSxFQUFFQSxJQUFJO2NBQUVjLEtBQUssRUFBRUE7WUFBSyxHQUNqQ0MsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFMLEtBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUQsTUFBQSxHQUFBakQsT0FBQTtVQWVPO1VBQVUsU0FBVTBDLFFBQVFBLENBQUM7WUFBRVEsS0FBSztZQUFFWCxJQUFJO1lBQUVJO1VBQUksQ0FBaUQ7WUFDdkcsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRVEsUUFBUTtjQUFFQztZQUFJLENBQUUsR0FBR1QsSUFBSTtZQUUvQixPQUNDM0IsS0FBQSxDQUFBUCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQixHQUNqQ3dDLEtBQUssSUFBSWxDLEtBQUEsQ0FBQVAsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBa0IsR0FBRXdDLEtBQUssQ0FBTSxFQUN2RGxDLEtBQUEsQ0FBQVAsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBbUIsR0FDckNNLEtBQUEsQ0FBQVAsYUFBQSxDQUFDd0MsTUFBQSxDQUFBSSxLQUFLO2NBQUMzQyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNtQixHQUFHLEVBQUVzQjtZQUFRLEVBQUksRUFDbkRuQyxLQUFBLENBQUFQLGFBQUEsY0FDQ08sS0FBQSxDQUFBUCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQixHQUFFMEMsSUFBSSxDQUFRLEVBQy9DcEMsS0FBQSxDQUFBUCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQixHQUFFNkIsSUFBSSxDQUFRLENBQzFDLENBQ0csQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119