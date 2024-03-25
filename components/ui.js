System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.31/components/icons", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/list", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/breadcrumb"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, Divider, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, NavbarHeader, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    ConfirmAction: void 0,
    ContentEditable: void 0,
    Divider: void 0,
    EmptyCard: void 0,
    ErrorRenderer: void 0,
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
    }, function (_aimpactAilearnApp0031ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0031ComponentsIcons;
    }, function (_pragmateUi006Components) {
      dependency_4 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_5 = _pragmateUi006Icons;
    }, function (_pragmateUi006Image) {
      dependency_6 = _pragmateUi006Image;
    }, function (_pragmateUi006Toast) {
      dependency_7 = _pragmateUi006Toast;
    }, function (_pragmateUi006Modal) {
      dependency_8 = _pragmateUi006Modal;
    }, function (_pragmateUi006Empty) {
      dependency_9 = _pragmateUi006Empty;
    }, function (_pragmateUi006Alert) {
      dependency_10 = _pragmateUi006Alert;
    }, function (_pragmateUi006Link) {
      dependency_11 = _pragmateUi006Link;
    }, function (_pragmateUi006List) {
      dependency_12 = _pragmateUi006List;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Breadcrumb) {
      dependency_14 = _pragmateUi006Breadcrumb;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.31"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.31/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/toast', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/link', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['pragmate-ui/breadcrumb', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.31/components/ui');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/
      ims.set('./ai-button', {
        hash: 3061523251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          /*bundle*/
          function AIButton({
            children,
            ...props
          }) {
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            ...props
          }) {
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars
            }, children);
          }
        }
      });

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
        hash: 4112193599,
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
            }, children), _react.default.createElement("div", {
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
        hash: 924448838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle */
          function EmptyCard({
            text,
            icon = _icons.ICONS.classworks,
            className,
            description,
            children
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              icon: icon,
              className: cls,
              text: text
            }, _react.default.createElement("p", {
              className: "p2"
            }, description), children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 755720276,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          /*bundle */
          function ErrorRenderer({
            error
          }) {
            if (!error) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error);
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
        hash: 2975860987,
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
            fetching,
            size = undefined
          }) {
            const SIZES = {
              sm: 'container-sm',
              default: ''
            };
            const clsSize = SIZES[size] || SIZES.default;
            const cls = `page__container ${clsSize}${className ? ` ${className}` : ''}`;
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
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
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
        "im": "./error-renderer",
        "from": "ErrorRenderer",
        "name": "ErrorRenderer"
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
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'ConfirmAction') && _export("ConfirmAction", ConfirmAction = require ? require('./confirm-action').ConfirmAction : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable').ContentEditable : value);
        (require || prop === 'Divider') && _export("Divider", Divider = require ? require('./divider').Divider : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkJhdHRlcnkiLCJwZXJjZW50IiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwid2lkdGgiLCJjbGFzc05hbWUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsImNscyIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJzcmMiLCJhbHQiLCJJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsImRpc2FibGVkIiwiQ29udGFpbmVyIiwiTGluayIsIkZyYWdtZW50IiwiYXR0cnMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiaW1hZ2UiLCJfdG9hc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJoYW5kbGVNb2RhbCIsImhhbmRsZUNvbmZpcm0iLCJldmVudCIsInRvYXN0IiwiY29uc29sZSIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJ0ZXh0Iiwib25DbG9zZSIsIm9uQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJDb250cm9sIiwibmFtZSIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsImV4cG9ydHMiLCJEaXZpZGVyIiwiY29sb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJzdHlsZXMiLCJib3JkZXJCb3R0b20iLCJfZW1wdHkiLCJFbXB0eUNhcmQiLCJjbGFzc3dvcmtzIiwiRW1wdHkiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJ0eXBlIiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsIml0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJJY29uIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwia2V5IiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfYnJlYWRjcnVtYiIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsIlJvdGF0aW5nTWVzc2FnZSIsImNvbnRlbnQiLCJ0aW1lIiwiaW50ZXJ2YWxEb3RzIiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJkb3RzIiwibGVuZ3RoIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCJdLCJzb3VyY2VzIjpbIi90cy9haS1idXR0b24udHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9kaXZpZGVyLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9saXN0LWNvbnRhaW5lci50c3giLCIvdHMvbm90LWZvdW5kLnRzeCIsIi90cy9wYWdlL2NvbnRhaW5lci50c3giLCIvdHMvcGFnZS9uYXZiYXItaGVhZGVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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