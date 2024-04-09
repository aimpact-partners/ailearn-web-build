System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.0/components", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/image", "pragmate-ui@0.1.0/toast", "pragmate-ui@0.1.0/modal", "pragmate-ui@0.1.0/empty", "pragmate-ui@0.1.0/alert", "pragmate-ui@0.1.0/link", "pragmate-ui@0.1.0/list", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.0/breadcrumb", "pragmate-ui@0.1.0/dropdown", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, Divider, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, NavbarHeader, ProfileIcon, ThemeSwitcher, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, __beyond_pkg, hmr;
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
    ProfileIcon: void 0,
    ThemeSwitcher: void 0,
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
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi010Components) {
      dependency_4 = _pragmateUi010Components;
    }, function (_pragmateUi010Icons) {
      dependency_5 = _pragmateUi010Icons;
    }, function (_pragmateUi010Image) {
      dependency_6 = _pragmateUi010Image;
    }, function (_pragmateUi010Toast) {
      dependency_7 = _pragmateUi010Toast;
    }, function (_pragmateUi010Modal) {
      dependency_8 = _pragmateUi010Modal;
    }, function (_pragmateUi010Empty) {
      dependency_9 = _pragmateUi010Empty;
    }, function (_pragmateUi010Alert) {
      dependency_10 = _pragmateUi010Alert;
    }, function (_pragmateUi010Link) {
      dependency_11 = _pragmateUi010Link;
    }, function (_pragmateUi010List) {
      dependency_12 = _pragmateUi010List;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi010Breadcrumb) {
      dependency_14 = _pragmateUi010Breadcrumb;
    }, function (_pragmateUi010Dropdown) {
      dependency_15 = _pragmateUi010Dropdown;
    }, function (_aimpactChatSdk100Session) {
      dependency_16 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_18 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/toast', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/link', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['pragmate-ui/breadcrumb', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/widgets/render', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/ui');
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

      /******************************************
      INTERNAL MODULE: ./page/navbar-header/index
      ******************************************/

      ims.set('./page/navbar-header/index', {
        hash: 127376826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _icons = require("pragmate-ui/icons");
          var _dropdown = require("pragmate-ui/dropdown");
          var _session = require("@aimpact/chat-sdk/session");
          var _themeButton = require("./theme-button");
          var _profile = require("./profile");
          var _item = require("./item");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function NavbarHeader({
            children,
            className,
            breadcrumb
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [isClose, setIsClose] = _react.default.useState(true);
            const onToggle = () => setIsClose(!isClose);
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars"
            }), breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              separator: ":",
              items: breadcrumb
            })), _react.default.createElement(_dropdown.Dropdown, {
              className: "user-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "content-user"
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_themeButton.ThemeSwitcher, null), _react.default.createElement(_item.MenuItem, null))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./page/navbar-header/item
      *****************************************/

      ims.set('./page/navbar-header/item', {
        hash: 3242005726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          function MenuItem({
            children,
            ...props
          }) {
            return _react.default.createElement(_dropdown.DropdownItem, {
              ...props
            }, _react.default.createElement("div", {
              className: "container__item"
            }, children));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./page/navbar-header/profile
      ********************************************/

      ims.set('./page/navbar-header/profile', {
        hash: 519580558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          /* bundle */
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
            if (!_session.sessionWrapper.user) return;
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: "dropdown-menu__user-icon",
              onClick: onClick
            }, !loadError ? _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./page/navbar-header/theme-button
      *************************************************/

      ims.set('./page/navbar-header/theme-button', {
        hash: 2654254395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          var _item = require("./item");
          /*bundle*/
          function ThemeSwitcher({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement(_item.MenuItem, {
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }), _react.default.createElement("span", null, "Theme"));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./page/navbar-header/user-item
      **********************************************/

      ims.set('./page/navbar-header/user-item', {
        hash: 1679571895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = UserItem;
          var _react = require("react");
          function UserItem() {
            return _react.default.createElement("div", null);
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
        "im": "./page/navbar-header/index",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./page/navbar-header/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./page/navbar-header/theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
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
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./page/navbar-header/index').NavbarHeader : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./page/navbar-header/profile').ProfileIcon : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./page/navbar-header/theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkJhdHRlcnkiLCJwZXJjZW50IiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwid2lkdGgiLCJjbGFzc05hbWUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsImNscyIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJzcmMiLCJhbHQiLCJJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsImRpc2FibGVkIiwiQ29udGFpbmVyIiwiTGluayIsIkZyYWdtZW50IiwiYXR0cnMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiaW1hZ2UiLCJfdG9hc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJoYW5kbGVNb2RhbCIsImhhbmRsZUNvbmZpcm0iLCJldmVudCIsInRvYXN0IiwiY29uc29sZSIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJ0ZXh0Iiwib25DbG9zZSIsIm9uQ2FuY2VsIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJDb250cm9sIiwibmFtZSIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsImV4cG9ydHMiLCJEaXZpZGVyIiwiY29sb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJzdHlsZXMiLCJib3JkZXJCb3R0b20iLCJfZW1wdHkiLCJFbXB0eUNhcmQiLCJjbGFzc3dvcmtzIiwiRW1wdHkiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJ0eXBlIiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsIml0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJJY29uIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwia2V5IiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfYnJlYWRjcnVtYiIsIl9kcm9wZG93biIsIl9zZXNzaW9uIiwiX3RoZW1lQnV0dG9uIiwiX3Byb2ZpbGUiLCJfaXRlbSIsIl9yb3V0aW5nIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsImlzQ2xvc2UiLCJzZXRJc0Nsb3NlIiwib25Ub2dnbGUiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXNzaW9uV3JhcHBlciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVGhlbWVTd2l0Y2hlciIsIk1lbnVJdGVtIiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfcmVuZGVyIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIlVzZXJJdGVtIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsIlJvdGF0aW5nTWVzc2FnZSIsImNvbnRlbnQiLCJ0aW1lIiwiaW50ZXJ2YWxEb3RzIiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJkb3RzIiwibGVuZ3RoIiwiU3ViRGl2aWRlciIsInRpdGxlVGV4dCJdLCJzb3VyY2VzIjpbIi90cy9haS1idXR0b24udHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9kaXZpZGVyLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9saXN0LWNvbnRhaW5lci50c3giLCIvdHMvbm90LWZvdW5kLnRzeCIsIi90cy9wYWdlL2NvbnRhaW5lci50c3giLCIvdHMvcGFnZS9uYXZiYXItaGVhZGVyL2luZGV4LnRzeCIsIi90cy9wYWdlL25hdmJhci1oZWFkZXIvaXRlbS50c3giLCIvdHMvcGFnZS9uYXZiYXItaGVhZGVyL3Byb2ZpbGUudHN4IiwiL3RzL3BhZ2UvbmF2YmFyLWhlYWRlci90aGVtZS1idXR0b24udHN4IiwiL3RzL3BhZ2UvbmF2YmFyLWhlYWRlci91c2VyLWl0ZW0udHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3JvdGF0aW5nLW1lc3NhZ2UudHN4IiwiL3RzL3N1Yi1kaXZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxP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