System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/breadcrumb"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, CardContent, CardFooter, CardImage, Card, Divider, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, PageHeader, SubDivider, __beyond_pkg, hmr;
  _export({
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    Divider: void 0,
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
    }, function (_pragmateUi003Icons) {
      dependency_5 = _pragmateUi003Icons;
    }, function (_pragmateUi003Link) {
      dependency_6 = _pragmateUi003Link;
    }, function (_pragmateUi003List) {
      dependency_7 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_8 = _pragmateUi003Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Breadcrumb) {
      dependency_10 = _pragmateUi003Breadcrumb;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/link', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/breadcrumb', dependency_10]]);
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

      /********************************************
      INTERNAL MODULE: ./header-card/header-counter
      ********************************************/

      ims.set('./header-card/header-counter', {
        hash: 4123852089,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCounter = HeaderCounter;
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _react = require("react");
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
                    className: 'counter-list__number status-done'
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
                    className: 'lg',
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
        hash: 827232566,
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
            children,
            image,
            alt,
            option = 'dark',
            title,
            list
          }) {
            return _react.default.createElement("div", {
              className: `header-card__container option-${option}`
            }, _react.default.createElement("section", {
              className: "header-card__text"
            }, title && _react.default.createElement(_headerTitle.HeaderTitle, {
              title: title
            }), children), list && _react.default.createElement(_headerCounter.HeaderCounter, {
              list: list,
              className: 'header-card__counter'
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
        hash: 3100279630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageContainer = PageContainer;
          var _react = require("react");
          /*bundle */
          function PageContainer({
            children
          }) {
            return _react.default.createElement("div", {
              className: "page__container"
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page-header
      *****************************/

      ims.set('./page-header', {
        hash: 1417645184,
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
            breadcrumb
          }) {
            return _react.default.createElement("header", {
              className: "page__header"
            }, children, breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              separator: ":",
              items: breadcrumb
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ2FyZENvbnRlbnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm9wdGlvbiIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsInNyYyIsImFsdCIsIkltYWdlIiwiX2NvbXBvbmVudHMiLCJDYXJkIiwibGluayIsImRhdGEiLCJkaXNhYmxlZCIsInNpbXBsZSIsIkNvbnRhaW5lciIsIkxpbmsiLCJGcmFnbWVudCIsImF0dHJzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImltYWdlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwic3R5bGUiLCJleHBvcnRzIiwiX2ljb25zIiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsIml0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJJY29uIiwiaWNvbiIsInVybCIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsImtleSIsIkhlYWRlclRpdGxlIiwidGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiX2FsZXJ0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiQWxlcnQiLCJ0eXBlIiwiUGFnZUNvbnRhaW5lciIsIl9icmVhZGNydW1iIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9kaXZpZGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UtaGVhZGVyLnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLFNBQVVDLFdBQVdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxTQUFTO1lBQUVDLE1BQU0sR0FBRztVQUFDLENBQUU7WUFDMUUsTUFBTUMsR0FBRyxHQUFHLHdCQUF3QkQsTUFBTSxJQUFJRCxTQUFTLEdBQUcsR0FBR0EsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9FLE9BQU9KLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtKLFNBQVMsRUFBRUU7WUFBRyxHQUFHSCxRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEEsSUFBQUgsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVUSxVQUFVQSxDQUFDO1lBQUVOLFFBQVE7WUFBRUM7VUFBUyxDQUFFO1lBQzdELE1BQU1FLEdBQUcsR0FBRyxnQkFBZ0JGLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FB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