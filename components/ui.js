System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/breadcrumb"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, CardContent, CardFooter, CardImage, Card, Divider, EmptyCard, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, PageHeader, SubDivider, __beyond_pkg, hmr;
  _export({
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    Divider: void 0,
    EmptyCard: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    ListContainer: void 0,
    NotFound: void 0,
    PageContainer: void 0,
    PageHeader: void 0,
    SubDivider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Image) {
      dependency_3 = _pragmateUi003Image;
    }, function (_pragmateUi003Components) {
      dependency_4 = _pragmateUi003Components;
    }, function (_pragmateUi003Empty) {
      dependency_5 = _pragmateUi003Empty;
    }, function (_pragmateUi003Icons) {
      dependency_6 = _pragmateUi003Icons;
    }, function (_pragmateUi003Link) {
      dependency_7 = _pragmateUi003Link;
    }, function (_pragmateUi003List) {
      dependency_8 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_9 = _pragmateUi003Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Breadcrumb) {
      dependency_11 = _pragmateUi003Breadcrumb;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/link', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/alert', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/breadcrumb', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/components/ui');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./card/content
      ******************************/
      ims.set('./card/content', {
        hash: 959606189,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardContent = CardContent;
          var _react = require("react");
          /*bundle */
          function CardContent({
            children,
            className,
            option = 0
          }) {
            const cls = `card__content option-${option} ${className ? `${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./card/footer
      *****************************/

      ims.set('./card/footer', {
        hash: 2748010536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardFooter = CardFooter;
          var _react = require("react");
          /*bundle */
          function CardFooter({
            children,
            className
          }) {
            const cls = `card__footer ${className ? ` ${className}` : ''}`;
            return _react.default.createElement("footer", {
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/image
      ****************************/

      ims.set('./card/image', {
        hash: 876726093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardImage = CardImage;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function CardImage({
            src,
            className,
            alt,
            children
          }) {
            const cls = `card__top ${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/index
      ****************************/

      ims.set('./card/index', {
        hash: 1050326749,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _image = require("./image");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          /*bundle*/
          function Card({
            link,
            data,
            children,
            disabled,
            simple
          }) {
            const Container = !disabled && link ? _components.Link : _react.default.Fragment;
            const attrs = disabled || [undefined, null, ''].includes(link) ? {} : {
              href: link,
              className: 'unstyled'
            };
            let clsCard = 'card';
            if (disabled) clsCard += ' is-disabled';
            if (simple) clsCard += ' is-simple';
            return _react.default.createElement(Container, {
              ...attrs
            }, _react.default.createElement("div", {
              className: clsCard
            }, data?.image && _react.default.createElement(_image.CardImage, {
              src: data.image,
              alt: "Card"
            }), children));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./divider
      *************************/

      ims.set('./divider', {
        hash: 4262225144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Divider = void 0;
          var _react = require("react");
          /* bundle */ /**
                        * @todo: @carlos: review this component.
                        *
                        */
          const Divider = ({
            color,
            height,
            margin
          }) => {
            const styles = {
              borderBottom: `1px solid ${color}`,
              height,
              margin
            };
            return _react.default.createElement("div", {
              className: "divider-section",
              style: styles
            });
          };
          exports.Divider = Divider;
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 387460233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            icon,
            className,
            description,
            children
          }) {
            const cls = `empty-section__container ${className ? `${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              icon: icon,
              className: "empty-section__container",
              text: text
            }, _react.default.createElement("p", {
              className: "p2"
            }, description), children);
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./header-card/header-counter
      ********************************************/

      ims.set('./header-card/header-counter', {
        hash: 2611877207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCounter = HeaderCounter;
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _react = require("react");
          /**
           * TODO: Review this component @carlos
           * @param param0
           * @returns
           */
          const HeaderCounterItem = ({
            item,
            index
          }) => {
            const StatusHeaderContent = ({
              status
            }) => {
              switch (status) {
                case 'done':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-done"
                  }, index);
                case 'waiting':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-waiting"
                  }, index);
                case 'current':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-current"
                  }, index);
                default:
                  return _react.default.createElement(_icons.Icon, {
                    className: "lg",
                    icon: 'refresh'
                  });
              }
            };
            return _react.default.createElement(_link.Link, {
              className: "unstyled",
              href: item.url
            }, _react.default.createElement(StatusHeaderContent, {
              status: item.status
            }));
          };
          /*bundle */
          function HeaderCounter({
            list,
            className
          }) {
            const cls = `header-counter__container ${className ? ` ${className}` : ''}`;
            const renderedItems = list.map((item, index) => _react.default.createElement(HeaderCounterItem, {
              item: item,
              key: index,
              index: index + 1
            }));
            return _react.default.createElement("div", {
              className: cls
            }, renderedItems);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./header-card/header-title
      ******************************************/

      ims.set('./header-card/header-title', {
        hash: 1777028730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          /*bundle*/
          function HeaderTitle({
            title
          }) {
            return _react.default.createElement("section", {
              className: "header-card__title-container"
            }, _react.default.createElement("h3", {
              className: "h1 header-card__title-text"
            }, title));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./header-card/index
      ***********************************/

      ims.set('./header-card/index', {
        hash: 1274014296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCard = HeaderCard;
          var _headerCounter = require("./header-counter");
          var _headerTitle = require("./header-title");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function HeaderCard({
            className,
            children,
            image,
            alt,
            option = 'dark',
            title,
            list
          }) {
            const cls = `header-card__container option-${option}${className ? ` ${className}` : ``}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-card__text"
            }, title && _react.default.createElement(_headerTitle.HeaderTitle, {
              title: title
            }), _react.default.createElement("section", {
              className: "header-card__content"
            }, children)), list && _react.default.createElement(_headerCounter.HeaderCounter, {
              list: list,
              className: "header-card__counter"
            }), image && _react.default.createElement(_image.Image, {
              src: image,
              alt: alt,
              className: "header-card__image"
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./list-container
      ********************************/

      ims.set('./list-container', {
        hash: 2773191906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListContainer = ListContainer;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function ListContainer({
            items,
            control
          }) {
            return _react.default.createElement(_list.List, {
              className: "list__container",
              items: items,
              control: control
            });
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./not-found
      ***************************/

      ims.set('./not-found', {
        hash: 3110362631,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _alert = require("pragmate-ui/alert");
          var _image = require("pragmate-ui/image");
          var _components = require("@aimpact/chat/shared/components");
          var _react = require("react");
          /*bundle */
          function NotFound({
            texts,
            textsReady
          }) {
            if (!textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              title,
              subtitle,
              description
            } = texts.notFound;
            return _react.default.createElement("article", {
              className: "container__error place-center"
            }, _react.default.createElement("div", {
              className: 'container-top__error'
            }, _react.default.createElement("div", {
              className: 'panel-top__text'
            }, _react.default.createElement("h3", {
              className: 'h2 mb-15'
            }, title), _react.default.createElement("span", {
              className: 'h4'
            }, subtitle)), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_200/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            })), _react.default.createElement("div", {
              className: 'container-bot__error'
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, description)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./page-container
      ********************************/

      ims.set('./page-container', {
        hash: 3957827650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageContainer = PageContainer;
          var _react = require("react");
          /*bundle */
          function PageContainer({
            children,
            className
          }) {
            const cls = `page__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page-header
      *****************************/

      ims.set('./page-header', {
        hash: 2672050613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          /*bundle*/
          function PageHeader({
            children,
            className,
            breadcrumb
          }) {
            const cls = `page__header${className ? ` ${className}` : ''}`;
            return _react.default.createElement("header", {
              className: cls
            }, breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              separator: ":",
              items: breadcrumb
            }), children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./sub-divider
      *****************************/

      ims.set('./sub-divider', {
        hash: 3832966304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubDivider = SubDivider;
          var _react = require("react");
          /*bundle*/ /**
                      *
                      * @param param0
                      * @returns
                      *
                      * todo: @carlos: review this component. It is not used in the app
                      */
          function SubDivider({
            titleText,
            children
          }) {
            return _react.default.createElement("div", {
              className: "divider__container"
            }, _react.default.createElement("div", {
              className: "divider-container__text-section"
            }, _react.default.createElement("h5", {
              className: "divider__title h2"
            }, titleText), children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./card/content",
        "from": "CardContent",
        "name": "CardContent"
      }, {
        "im": "./card/footer",
        "from": "CardFooter",
        "name": "CardFooter"
      }, {
        "im": "./card/image",
        "from": "CardImage",
        "name": "CardImage"
      }, {
        "im": "./card/index",
        "from": "Card",
        "name": "Card"
      }, {
        "im": "./divider",
        "from": "Divider",
        "name": "Divider"
      }, {
        "im": "./empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./header-card/header-counter",
        "from": "HeaderCounter",
        "name": "HeaderCounter"
      }, {
        "im": "./header-card/header-title",
        "from": "HeaderTitle",
        "name": "HeaderTitle"
      }, {
        "im": "./header-card/index",
        "from": "HeaderCard",
        "name": "HeaderCard"
      }, {
        "im": "./list-container",
        "from": "ListContainer",
        "name": "ListContainer"
      }, {
        "im": "./not-found",
        "from": "NotFound",
        "name": "NotFound"
      }, {
        "im": "./page-container",
        "from": "PageContainer",
        "name": "PageContainer"
      }, {
        "im": "./page-header",
        "from": "PageHeader",
        "name": "PageHeader"
      }, {
        "im": "./sub-divider",
        "from": "SubDivider",
        "name": "SubDivider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'Divider') && _export("Divider", Divider = require ? require('./divider').Divider : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'ListContainer') && _export("ListContainer", ListContainer = require ? require('./list-container').ListContainer : value);
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./not-found').NotFound : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page-container').PageContainer : value);
        (require || prop === 'PageHeader') && _export("PageHeader", PageHeader = require ? require('./page-header').PageHeader : value);
        (require || prop === 'SubDivider') && _export("SubDivider", SubDivider = require ? require('./sub-divider').SubDivider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ2FyZENvbnRlbnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm9wdGlvbiIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsInNyYyIsImFsdCIsIkltYWdlIiwiX2NvbXBvbmVudHMiLCJDYXJkIiwibGluayIsImRhdGEiLCJkaXNhYmxlZCIsInNpbXBsZSIsIkNvbnRhaW5lciIsIkxpbmsiLCJGcmFnbWVudCIsImF0dHJzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImltYWdlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwic3R5bGUiLCJleHBvcnRzIiwiX2VtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImljb24iLCJkZXNjcmlwdGlvbiIsIkVtcHR5IiwiX2ljb25zIiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsIml0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJJY29uIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwia2V5IiwiSGVhZGVyVGl0bGUiLCJ0aXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJfYWxlcnQiLCJOb3RGb3VuZCIsInRleHRzIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiQWxlcnQiLCJ0eXBlIiwiUGFnZUNvbnRhaW5lciIsIl9icmVhZGNydW1iIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9kaXZpZGVyLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2xpc3QtY29udGFpbmVyLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlLWhlYWRlci50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLFNBQVVDLFdBQVdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxTQUFTO1lBQUVDLE1BQU0sR0FBRztVQUFDLENBQUU7WUFDMUUsTUFBTUMsR0FBRyxHQUFHLHdCQUF3QkQsTUFBTSxJQUFJRCxTQUFTLEdBQUcsR0FBR0EsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9FLE9BQU9KLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtKLFNBQVMsRUFBRUU7WUFBRyxHQUFHSCxRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEEsSUFBQUgsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVUSxVQUFVQSxDQUFDO1lBQUVOLFFBQVE7WUFBRUM7VUFBUyxDQUFF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