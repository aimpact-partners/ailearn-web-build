System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/empty", "@aimpact/ailearn-app@0.0.24/shared/icons", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/alert", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/breadcrumb"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, Divider, EmptyCard, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, NavbarHeader, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, __beyond_pkg, hmr;
  _export({
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    ConfirmAction: void 0,
    ContentEditable: void 0,
    Divider: void 0,
    EmptyCard: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    ListContainer: void 0,
    NotFound: void 0,
    PageContainer: void 0,
    NavbarHeader: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    RotatingMessage: void 0,
    SubDivider: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi006Image) {
      dependency_3 = _pragmateUi006Image;
    }, function (_pragmateUi006Components) {
      dependency_4 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_5 = _pragmateUi006Icons;
    }, function (_pragmateUi006Toast) {
      dependency_6 = _pragmateUi006Toast;
    }, function (_pragmateUi006Modal) {
      dependency_7 = _pragmateUi006Modal;
    }, function (_pragmateUi006Empty) {
      dependency_8 = _pragmateUi006Empty;
    }, function (_aimpactAilearnApp0024SharedIcons) {
      dependency_9 = _aimpactAilearnApp0024SharedIcons;
    }, function (_pragmateUi006Link) {
      dependency_10 = _pragmateUi006Link;
    }, function (_pragmateUi006List) {
      dependency_11 = _pragmateUi006List;
    }, function (_pragmateUi006Alert) {
      dependency_12 = _pragmateUi006Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Breadcrumb) {
      dependency_14 = _pragmateUi006Breadcrumb;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/toast', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/empty', dependency_8], ['@aimpact/ailearn-app/shared/icons', dependency_9], ['pragmate-ui/link', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/alert', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['pragmate-ui/breadcrumb', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/components/ui');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./battery
      *************************/
      ims.set('./battery', {
        hash: 1268469881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Battery = Battery;
          var _react = require("react");
          /*bundle*/
          function Battery({
            percent = 20
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              ref.current.style.width = `${percent}%`;
            }, [percent]);
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "percentage"
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./card/content
      ******************************/

      ims.set('./card/content', {
        hash: 822507004,
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
            option = 'row',
            simple
          }) {
            const cls = `card__content display-${option} ${className && ` ${className}`} ${simple && ' is-simple'}`;
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
        hash: 1147762825,
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
            className,
            simple
          }) {
            const cls = `card__footer ${className && ` ${className}`} ${simple && ' is-simple'}`;
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
        hash: 2258848946,
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
            simple,
            className
          }) {
            const Container = !disabled && link ? _components.Link : _react.default.Fragment;
            const attrs = disabled || [undefined, null, ''].includes(link) ? {} : {
              href: link,
              className: 'unstyled'
            };
            let clsCard = `card ${className}`;
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

      /********************************
      INTERNAL MODULE: ./confirm-action
      ********************************/

      ims.set('./confirm-action', {
        hash: 3449925826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _modal = require("pragmate-ui/modal");
          /*bundle */
          function ConfirmAction({
            textPopUp = '',
            onConfirm,
            icon = 'delete',
            className = 'circle',
            toastText = {
              success: 'Module Deleted Successfully!',
              error: 'Error Deleting Module. Please try again.'
            },
            modalText = {
              title: 'Confirm Deletion',
              description: 'Are you sure you want to delete this?'
            }
          }) {
            const [show, setShow] = _react.default.useState(false);
            function handleModal() {
              setShow(!show);
            }
            const handleConfirm = async event => {
              try {
                await onConfirm();
                _toast.toast.success(toastText.success);
                setShow(!show);
              } catch (error) {
                _toast.toast.error(toastText.error);
                console.error(error);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              title: textPopUp,
              icon: icon,
              onClick: handleModal,
              className: className
            }), show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "beauty-modal",
              title: modalText.title,
              text: modalText.description,
              onClose: handleModal,
              onCancel: handleModal,
              onConfirm: handleConfirm
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./content-editable
      **********************************/

      ims.set('./content-editable', {
        hash: 552434685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const ContentEditable = ({
            onSave,
            selector: Control = 'div',
            className,
            children,
            name,
            onEdit
          }) => {
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const [content, setContent] = (0, _react.useState)(typeof children === 'string' ? children : '');
            const contentRef = _react.default.useRef(null);
            // Toggle the editable state
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              setTimeout(() => {
                const el = contentRef.current;
                if (el) {
                  const range = document.createRange();
                  const sel = globalThis.getSelection();
                  range.selectNodeContents(el);
                  range.collapse(false);
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                  el.focus();
                }
              }, 0);
            };
            const handleSave = async () => {
              toggleEdit();
              console.log(40, isEditable);
              if (!isEditable) return;
              const data = {
                name,
                value: contentRef.current?.textContent
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              await onSave(specs);
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const constrolCls = isEditable ? `pui-editable-selector` : '';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: constrolCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true
            }, content), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, isEditable && _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: toggleEdit
            }), _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: handleSave
            })));
          };
          exports.ContentEditable = ContentEditable;
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
        hash: 1008288713,
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
            className,
            items,
            control
          }) {
            const cls = `list__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_list.List, {
              className: cls,
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
        hash: 2782054676,
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
              className: "container-top__error"
            }, _react.default.createElement("div", {
              className: "panel-top__text"
            }, _react.default.createElement("h3", {
              className: "h2 mb-15"
            }, title), _react.default.createElement("span", {
              className: "h4"
            }, subtitle)), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_200/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            })), _react.default.createElement("div", {
              className: "container-bot__error"
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, description)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./page/container
      ********************************/

      ims.set('./page/container', {
        hash: 3109714643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageContainer = PageContainer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function PageContainer({
            children,
            className,
            fetching
          }) {
            const cls = `page__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, children, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./page/navbar-header
      ************************************/

      ims.set('./page/navbar-header', {
        hash: 1261114567,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          /*bundle*/
          function NavbarHeader({
            children,
            className,
            breadcrumb
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              separator: ":",
              items: breadcrumb
            }), children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./page/process-container
      ****************************************/

      ims.set('./page/process-container', {
        hash: 1981715107,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function ProcessContainer({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = `process-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_components.Spinner, {
              active: true
            }), children)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./page/title
      ****************************/

      ims.set('./page/title', {
        hash: 2229940538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSubtitle = PageSubtitle;
          exports.PageTitle = PageTitle;
          var _react = require("react");
          /*bundle*/
          function PageTitle({
            title,
            children
          }) {
            return _react.default.createElement("section", {
              className: "page-title__section"
            }, _react.default.createElement("h1", null, title), children);
          }
          /*bundle*/
          function PageSubtitle({
            children
          }) {
            return _react.default.createElement("span", {
              className: "post-title"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./rotating-message
      **********************************/

      ims.set('./rotating-message', {
        hash: 3462340237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RotatingMessage = RotatingMessage;
          var _react = require("react");
          /*bundle*/
          function RotatingMessage({
            content,
            time = 2000
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const text = ref.current;
              let intervalDots;
              let i = 0;
              const interval = globalThis.setInterval(() => {
                text.classList.remove('fade-in-up');
                text.classList.add('fade-out-up');
                setTimeout(() => {
                  text.innerHTML = content[i];
                  text.classList.remove('fade-out-up');
                  text.classList.add('fade-in-up');
                }, time / 2);
                let dots = '.';
                if (i === content.length - 1) i = 0;
                i++;
              }, time);
            }, []);
            return _react.default.createElement("span", {
              ref: ref,
              className: "rotating-message"
            }, content[0]);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./sub-divider
      *****************************/

      ims.set('./sub-divider', {
        hash: 1062975904,
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
                      *
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
        "im": "./battery",
        "from": "Battery",
        "name": "Battery"
      }, {
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
        "im": "./confirm-action",
        "from": "ConfirmAction",
        "name": "ConfirmAction"
      }, {
        "im": "./content-editable",
        "from": "ContentEditable",
        "name": "ContentEditable"
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
        "im": "./page/container",
        "from": "PageContainer",
        "name": "PageContainer"
      }, {
        "im": "./page/navbar-header",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./page/process-container",
        "from": "ProcessContainer",
        "name": "ProcessContainer"
      }, {
        "im": "./page/title",
        "from": "PageTitle",
        "name": "PageTitle"
      }, {
        "im": "./page/title",
        "from": "PageSubtitle",
        "name": "PageSubtitle"
      }, {
        "im": "./rotating-message",
        "from": "RotatingMessage",
        "name": "RotatingMessage"
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
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'ConfirmAction') && _export("ConfirmAction", ConfirmAction = require ? require('./confirm-action').ConfirmAction : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable').ContentEditable : value);
        (require || prop === 'Divider') && _export("Divider", Divider = require ? require('./divider').Divider : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'ListContainer') && _export("ListContainer", ListContainer = require ? require('./list-container').ListContainer : value);
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./not-found').NotFound : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/container').PageContainer : value);
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./page/navbar-header').NavbarHeader : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'RotatingMessage') && _export("RotatingMessage", RotatingMessage = require ? require('./rotating-message').RotatingMessage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwid2lkdGgiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ2FyZENvbnRlbnQiLCJjaGlsZHJlbiIsIm9wdGlvbiIsInNpbXBsZSIsImNscyIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJzcmMiLCJhbHQiLCJJbWFnZSIsIl9jb21wb25lbnRzIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiZGlzYWJsZWQiLCJDb250YWluZXIiLCJMaW5rIiwiRnJhZ21lbnQiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJpbWFnZSIsIl9pY29ucyIsIl90b2FzdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJpY29uIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJoYW5kbGVNb2RhbCIsImhhbmRsZUNvbmZpcm0iLCJldmVudCIsInRvYXN0IiwiY29uc29sZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsIm5hbWUiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsImxvZyIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsImV4cG9ydHMiLCJEaXZpZGVyIiwiY29sb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJzdHlsZXMiLCJib3JkZXJCb3R0b20iLCJfZW1wdHkiLCJFbXB0eUNhcmQiLCJJQ09OUyIsImNsYXNzd29ya3MiLCJFbXB0eSIsIl9saW5rIiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwiSWNvbiIsInVybCIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsImtleSIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiX2xpc3QiLCJMaXN0Q29udGFpbmVyIiwiaXRlbXMiLCJjb250cm9sIiwiTGlzdCIsIl9hbGVydCIsIk5vdEZvdW5kIiwidGV4dHMiLCJ0ZXh0c1JlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInN1YnRpdGxlIiwibm90Rm91bmQiLCJBbGVydCIsInR5cGUiLCJQYWdlQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJTcGlubmVyIiwiYWN0aXZlIiwic2l6ZSIsIl9icmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkJyZWFkQ3J1bWIiLCJzZXBhcmF0b3IiLCJQcm9jZXNzQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImludGVydmFsRG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsIlN1YkRpdmlkZXIiLCJ0aXRsZVRleHQiXSwic291cmNlcyI6WyIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL2RpdmlkZXIudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS9jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvbmF2YmFyLWhlYWRlci50c3giLCIvdHMvcGFnZS9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS90aXRsZS50c3giLCIvdHMvcm90YXRpbmctbWVzc2FnZS50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVQyxPQUFPQSxDQUFDO1lBQUVDLE9BQU8sR0FBRztVQUFFLENBQUU7WUFDbEQsTUFB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