System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.1/components/icons", "@aimpact/ailearn-app@0.2.1/components/ui", "pragmate-ui@1.0.0-beta.6/components", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/tooltip"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_6 = _aimpactAilearnApp021ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/components/module-card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/list', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['pragmate-ui/components', dependency_7], ['dayjs', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/tooltip', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/components/module-card');
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
        hash: 797796284,
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
            const dateToShow = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
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
            }), React.createElement("span", null, item.audience)), React.createElement("section", {
              className: "entity__item-content"
            }, React.createElement("h6", null, title), date && React.createElement("span", {
              className: "user-data__date"
            }, dateToShow), React.createElement("span", {
              className: "item__description"
            }, description)), children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./footer
      ************************/

      ims.set('./footer', {
        hash: 1109706552,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBY3Rpb25zIiwiYWN0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJfcmVhY3QiLCJfbGlzdCIsIl9pY29ucyIsIk1vZHVsZUFjdGl2aXRpZXMiLCJ0eXBlcyIsIkl0ZW0iLCJpdGVtIiwiY2xzIiwiZGVmYXVsdCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJpY29uIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIl91aSIsIl9hY3Rpdml0aWVzIiwiX2RheWpzIiwiQ29udGFpbmVyIiwiZGF0ZSIsImF1ZGllbmNlIiwidGV4dHMiLCJjaGlsZHJlbiIsImVudGl0eSIsInR5cGUiLCJkaXNhYmxlZCIsInRpdGxlIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJhY3Rpdml0aWVzIiwicHVzaCIsImRhdGVUb1Nob3ciLCJ0aW1lQ3JlYXRlZCIsImZvcm1hdCIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImFsdCIsInNpemUiLCJfdXNlckRhdGEiLCJNb2R1bGVDYXJkRm9vdGVyIiwic2hvd1VzZXIiLCJvd25lckRhdGEiLCJvd25lciIsImNyZWF0b3IiLCJVc2VyRGF0YSIsImRhdGEiLCJfY29tcG9uZW50cyIsIl9jb250YWluZXIiLCJNb2R1bGVDYXJkIiwiaHJlZiIsIkxpbmsiLCJzaG93RGF0ZSIsIl9pbWFnZSIsIl90b29sdGlwIiwibGFiZWwiLCJwaG90b1VybCIsIm5hbWUiLCJUb29sdGlwIiwiY29udGVudCIsIkltYWdlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMudHN4IiwiL3RzL2NvbnRhaW5lci50c3giLCIvdHMvZm9vdGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVQyxPQUFPQSxDQUFDO1lBQUVDO1VBQU8sQ0FBRTtZQUNsQyxPQUFPSCxLQUFBLENBQUFJLGFBQUEsY0FBTUQsT0FBTyxDQUFPO1VBQzVCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFFLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLEtBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUVNLFNBQVVPLGdCQUFnQkEsQ0FBQztZQUFFQztVQUFLLENBQUU7WUFDekMsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE1BQU1DLElBQUksR0FBR0EsQ0FBQztjQUFFQztZQUFJLENBQUUsS0FBSTtjQUN6QixNQUFNQyxHQUFHLEdBQUcsaUNBQWlDRCxJQUFJLEVBQUU7Y0FDbkQsT0FDQ04sTUFBQSxDQUFBUSxPQUFBLENBQUFULGFBQUE7Z0JBQVNVLFNBQVMsRUFBRUY7Y0FBRyxHQUN0QlAsTUFBQSxDQUFBUSxPQUFBLENBQUFULGFBQUEsQ0FBQ0csTUFBQSxDQUFBUSxPQUFPO2dCQUFDQyxJQUFJLEVBQUVMO2NBQUksRUFBSSxDQUNkO1lBRVosQ0FBQztZQUVELE9BQU9OLE1BQUEsQ0FBQVEsT0FBQSxDQUFBVCxhQUFBLENBQUNFLEtBQUEsQ0FBQVcsSUFBSTtjQUFDSCxTQUFTLEVBQUMsc0JBQXNCO2NBQUNJLEtBQUssRUFBRVQsS0FBSztjQUFFVSxPQUFPLEVBQUVUO1lBQUksRUFBSTtVQUM5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQVYsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQW1CLEdBQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsV0FBQSxHQUFBcEIsT0FBQTtVQUVBLElBQUFxQixNQUFBLEdBQUFyQixPQUFBO1VBRU87VUFBVSxTQUFVc0IsU0FBU0EsQ0FBQztZQUNwQ0MsSUFBSTtZQUNKYixJQUFJO1lBQ0pjLFFBQVEsR0FBRyxJQUFJO1lBQ2ZDLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsUUFBUTtZQUNSM0I7VUFBTyxDQUNQO1lBQ0EsTUFBTTRCLEtBQUssR0FBR3BCLElBQUksQ0FBQ29CLEtBQUssSUFBSXBCLElBQUksQ0FBQ3FCLFNBQVM7WUFFMUMsTUFBTUMsV0FBVyxHQUFHdEIsSUFBSSxDQUFDc0IsV0FBVyxJQUFJUCxLQUFLLENBQUNmLElBQUksQ0FBQ3NCLFdBQVc7WUFFOUQsTUFBTXhCLEtBQUssR0FBR0UsSUFBSSxFQUFFdUIsVUFBVSxFQUFFekIsS0FBSyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDRSxJQUFJLEVBQUV1QixVQUFVLEVBQUV6QixLQUFLLElBQUlFLElBQUksQ0FBQ2tCLElBQUksRUFBRTtjQUMxQztjQUNBcEIsS0FBSyxDQUFDMEIsSUFBSSxDQUFDeEIsSUFBSSxDQUFDa0IsSUFBSSxDQUFDOztZQUV0QixNQUFNTyxVQUFVLEdBQUcsSUFBQWQsTUFBQSxDQUFBVCxPQUFLLEVBQUNGLElBQUksQ0FBQzBCLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQy9ELE1BQU0xQixHQUFHLEdBQUcsZ0JBQWdCa0IsUUFBUSxHQUFHLHdCQUF3QixHQUFHLEVBQUUsRUFBRTtZQUV0RSxPQUNDOUIsS0FBQSxDQUFBSSxhQUFBO2NBQVNVLFNBQVMsRUFBRUY7WUFBRyxHQUN0QlosS0FBQSxDQUFBSSxhQUFBLENBQUNnQixHQUFBLENBQUFtQixXQUFXO2NBQUNDLEdBQUcsRUFBRTdCLElBQUksQ0FBQzhCLE9BQU87Y0FBRWIsTUFBTSxFQUFFQSxNQUFNO2NBQUVjLEdBQUcsRUFBRVgsS0FBSztjQUFFWSxJQUFJLEVBQUMsSUFBSTtjQUFDZCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUNwRjdCLEtBQUEsQ0FBQUksYUFBQTtjQUFTVSxTQUFTLEVBQUM7WUFBd0IsR0FDMUNkLEtBQUEsQ0FBQUksYUFBQSxDQUFDaUIsV0FBQSxDQUFBYixnQkFBZ0I7Y0FBQ0MsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDbENULEtBQUEsQ0FBQUksYUFBQSxlQUFPTyxJQUFJLENBQUNjLFFBQVEsQ0FBUSxDQUNuQixFQUNWekIsS0FBQSxDQUFBSSxhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFzQixHQUN4Q2QsS0FBQSxDQUFBSSxhQUFBLGFBQUsyQixLQUFLLENBQU0sRUFDZlAsSUFBSSxJQUFJeEIsS0FBQSxDQUFBSSxhQUFBO2NBQU1VLFNBQVMsRUFBQztZQUFpQixHQUFFc0IsVUFBVSxDQUFRLEVBQzlEcEMsS0FBQSxDQUFBSSxhQUFBO2NBQU1VLFNBQVMsRUFBQztZQUFtQixHQUFFbUIsV0FBVyxDQUFRLENBQy9DLEVBQ1ROLFFBQVEsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBM0IsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBMkMsU0FBQSxHQUFBM0MsT0FBQTtVQVNPO1VBQVUsU0FBVTRDLGdCQUFnQkEsQ0FDMUM7WUFBRWxDLElBQUk7WUFBRUcsU0FBUztZQUFFZ0MsUUFBUSxHQUFHLElBQUk7WUFBRW5CO1VBQVEsSUFBYTtZQUFFbUIsUUFBUSxFQUFFO1VBQUksQ0FBRTtZQUUzRSxNQUFNQyxTQUFTLEdBQUdwQyxJQUFJLENBQUNxQyxLQUFLLElBQUlyQyxJQUFJLENBQUNzQyxPQUFPO1lBQzVDLE1BQU16QixJQUFJLEdBQUcsSUFBQUYsTUFBQSxDQUFBVCxPQUFLLEVBQUNGLElBQUksQ0FBQzBCLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3pELE1BQU0xQixHQUFHLEdBQUcsaUJBQWlCRSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9ELE9BQ0NkLEtBQUEsQ0FBQUksYUFBQTtjQUFRVSxTQUFTLEVBQUVGO1lBQUcsR0FDcEJrQyxRQUFRLElBQUk5QyxLQUFBLENBQUFJLGFBQUEsQ0FBQ3dDLFNBQUEsQ0FBQU0sUUFBUTtjQUFDQyxJQUFJLEVBQUVKO1lBQVMsRUFBSSxFQUMxQy9DLEtBQUEsQ0FBQUksYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBbUIsR0FBRWEsUUFBUSxDQUFPLENBQzNDO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUEzQixLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBbUQsV0FBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFvRCxVQUFBLEdBQUFwRCxPQUFBO1VBRU87VUFBVSxTQUFVcUQsVUFBVUEsQ0FBQztZQUNyQzNDLElBQUk7WUFDSmUsS0FBSztZQUNMRixJQUFJLEdBQUcsSUFBSTtZQUNYQyxRQUFRLEdBQUcsSUFBSTtZQUNmSSxJQUFJO1lBQ0owQixJQUFJO1lBQ0o1QixRQUFRO1lBQ1JHLFFBQVE7WUFDUjNCLE9BQU87WUFDUHlCLE1BQU0sR0FBRztVQUFRLENBQ2pCO1lBQ0EsSUFBSTJCLElBQUksRUFBRTtjQUNULE9BQ0N2RCxLQUFBLENBQUFJLGFBQUEsQ0FBQ2dELFdBQUEsQ0FBQUksSUFBSTtnQkFBQ0QsSUFBSSxFQUFFQTtjQUFJLEdBQ2Z2RCxLQUFBLENBQUFJLGFBQUEsQ0FBQ2lELFVBQUEsQ0FBQTlCLFNBQVM7Z0JBQ1RDLElBQUksRUFBRUEsSUFBSTtnQkFDVmIsSUFBSSxFQUFFQSxJQUFJO2dCQUNWZSxLQUFLLEVBQUVBLEtBQUs7Z0JBQ1pELFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJ0QixPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCMEIsSUFBSSxFQUFFQSxJQUFJO2dCQUNWRCxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RFLFFBQVEsRUFBRUE7Y0FBUSxHQUVqQkgsUUFBUSxDQUNFLENBQ047O1lBSVQsT0FDQzNCLEtBQUEsQ0FBQUksYUFBQSxDQUFDaUQsVUFBQSxDQUFBOUIsU0FBUztjQUFDa0MsUUFBUTtjQUFDOUMsSUFBSSxFQUFFQSxJQUFJO2NBQUVlLEtBQUssRUFBRUEsS0FBSztjQUFFdkIsT0FBTyxFQUFFQSxPQUFPO2NBQUUyQixRQUFRLEVBQUVBLFFBQVE7Y0FBRUQsSUFBSSxFQUFFQSxJQUFJO2NBQUVELE1BQU0sRUFBRUE7WUFBTSxHQUM1R0QsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUEzQixLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUQsTUFBQSxHQUFBekQsT0FBQTtVQUNBLElBQUEwRCxRQUFBLEdBQUExRCxPQUFBO1VBY087VUFBVSxTQUFVaUQsUUFBUUEsQ0FBQztZQUFFVSxLQUFLO1lBQUVwQyxJQUFJO1lBQUUyQjtVQUFJLENBQWtEO1lBQ3hHLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUVVLFFBQVE7Y0FBRUM7WUFBSSxDQUFFLEdBQUdYLElBQUk7WUFFL0IsT0FDQ25ELEtBQUEsQ0FBQUksYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBb0IsR0FDakM4QyxLQUFLLElBQUk1RCxLQUFBLENBQUFJLGFBQUE7Y0FBSVUsU0FBUyxFQUFDO1lBQWtCLEdBQUU4QyxLQUFLLENBQU0sRUFDdkQ1RCxLQUFBLENBQUFJLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDZCxLQUFBLENBQUFJLGFBQUEsQ0FBQ3VELFFBQUEsQ0FBQUksT0FBTztjQUFDQyxPQUFPLEVBQUVGO1lBQUksR0FDckI5RCxLQUFBLENBQUFJLGFBQUEsQ0FBQ3NELE1BQUEsQ0FBQU8sS0FBSztjQUFDbkQsU0FBUyxFQUFDLGdCQUFnQjtjQUFDMEIsR0FBRyxFQUFFcUI7WUFBUSxFQUFJLENBQzFDLENBTUQsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119