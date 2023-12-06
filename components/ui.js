System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/empty", "@aimpact/ailearn-app@0.0.21/shared/icons", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/breadcrumb"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, CardContent, CardFooter, CardImage, Card, Divider, EmptyCard, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, PageHeader, SubDivider, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0021SharedIcons) {
      dependency_6 = _aimpactAilearnApp0021SharedIcons;
    }, function (_pragmateUi003Icons) {
      dependency_7 = _pragmateUi003Icons;
    }, function (_pragmateUi003Link) {
      dependency_8 = _pragmateUi003Link;
    }, function (_pragmateUi003List) {
      dependency_9 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_10 = _pragmateUi003Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Breadcrumb) {
      dependency_12 = _pragmateUi003Breadcrumb;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.19/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/empty', dependency_5], ['@aimpact/ailearn-app/shared/icons', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['pragmate-ui/breadcrumb', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.19/components/ui');
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./card/content
      ******************************/
      ims.set('./card/content', {
        hash: 310274364,
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
            option = 'row'
          }) {
            const cls = `card__content display-${option} ${className ? `${className}` : ''}`;
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
        hash: 2847587763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _icons = require("@aimpact/ailearn-app/shared/icons");
          /*bundle */
          function EmptyCard({
            text,
            icon = _icons.ICONS.classworks,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ2FyZENvbnRlbnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm9wdGlvbiIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsInNyYyIsImFsdCIsIkltYWdlIiwiX2NvbXBvbmVudHMiLCJDYXJkIiwibGluayIsImRhdGEiLCJkaXNhYmxlZCIsInNpbXBsZSIsIkNvbnRhaW5lciIsIkxpbmsiLCJGcmFnbWVudCIsImF0dHJzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImltYWdlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwic3R5bGUiLCJleHBvcnRzIiwiX2VtcHR5IiwiX2ljb25zIiwiRW1wdHlDYXJkIiwidGV4dCIsImljb24iLCJJQ09OUyIsImNsYXNzd29ya3MiLCJkZXNjcmlwdGlvbiIsIkVtcHR5IiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsIml0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJJY29uIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwia2V5IiwiSGVhZGVyVGl0bGUiLCJ0aXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJfYWxlcnQiLCJOb3RGb3VuZCIsInRleHRzIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiQWxlcnQiLCJ0eXBlIiwiUGFnZUNvbnRhaW5lciIsIl9icmVhZGNydW1iIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9kaXZpZGVyLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2xpc3QtY29udGFpbmVyLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlLWhlYWRlci50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsU0FBVUMsV0FBV0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLFNBQVM7WUFBRUMsTUFBTSxHQUFHO1VBQUssQ0FBRTtZQUM5RSxNQUFNQyxHQUFHLEdBQUcseUJBQXlCRCxNQUFNLElBQUlELFNBQVMsR0FBRyxHQUFHQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEYsT0FBT0osTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0osU0FBUyxFQUFFRTtZQUFHLEdBQUdILFFBQVEsQ0FBTztVQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMQSxJQUFBSCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLFNBQVVRLFVBQVVBLENBQUM7WUFB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