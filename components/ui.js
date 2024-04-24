System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, useTextsCallback, __beyond_pkg, hmr;
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
    EmptyCard: void 0,
    ErrorRenderer: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    ListContainer: void 0,
    NotFound: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    RotatingMessage: void 0,
    SubDivider: void 0,
    useTextsCallback: void 0
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
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Image) {
      dependency_6 = _pragmateUi011Image;
    }, function (_pragmateUi011Toast) {
      dependency_7 = _pragmateUi011Toast;
    }, function (_pragmateUi011Modal) {
      dependency_8 = _pragmateUi011Modal;
    }, function (_pragmateUi011Empty) {
      dependency_9 = _pragmateUi011Empty;
    }, function (_pragmateUi011Alert) {
      dependency_10 = _pragmateUi011Alert;
    }, function (_pragmateUi011Link) {
      dependency_11 = _pragmateUi011Link;
    }, function (_pragmateUi011List) {
      dependency_12 = _pragmateUi011List;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Texts) {
      dependency_14 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/toast', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/link', dependency_11], ['pragmate-ui/list', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/kernel/texts', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/ui');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/
      ims.set('./ai-button', {
        hash: 1999958034,
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
          /*bundle*/ // import { LayoutBroker } from '@aimpact/ailearn-app/coins-layout.widget';
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            // const handleClick = () => LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            // const handleClick = () => LayoutBroker.ensureCredits(onClick);
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
        hash: 2632451254,
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
            return _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "percentage"
            })));
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
        hash: 1978660169,
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
            data: item,
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
            }, item?.image && _react.default.createElement(_image.CardImage, {
              src: item.image,
              alt: item.title
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
        hash: 3128296525,
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
            error,
            variant = 'error'
          }) {
            if (!error) return null;
            return _react.default.createElement(_alert.Alert, {
              type: variant
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
        hash: 2560044227,
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
            return _react.default.createElement("header", {
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
        hash: 1862752652,
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
            title,
            children
          }) {
            return _react.default.createElement("div", {
              className: "subdivider__container"
            }, _react.default.createElement("h3", null, title), children);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./use-texts-callback
      ************************************/

      ims.set('./use-texts-callback', {
        hash: 2445678329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTextsCallback = useTextsCallback;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTextsCallback(specifier, callback) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                setTexts(value);
                setReady(modelTexts.ready);
                if (modelTexts.ready) callback(value);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
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
      }, {
        "im": "./use-texts-callback",
        "from": "useTextsCallback",
        "name": "useTextsCallback"
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
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'ListContainer') && _export("ListContainer", ListContainer = require ? require('./list-container').ListContainer : value);
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./not-found').NotFound : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'RotatingMessage') && _export("RotatingMessage", RotatingMessage = require ? require('./rotating-message').RotatingMessage : value);
        (require || prop === 'SubDivider') && _export("SubDivider", SubDivider = require ? require('./sub-divider').SubDivider : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./use-texts-callback').useTextsCallback : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJCYXR0ZXJ5IiwicGVyY2VudCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NOYW1lIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJzaW1wbGUiLCJjbHMiLCJDYXJkRm9vdGVyIiwiX2ltYWdlIiwiQ2FyZEltYWdlIiwic3JjIiwiYWx0IiwiSW1hZ2UiLCJDYXJkIiwibGluayIsImRhdGEiLCJpdGVtIiwiZGlzYWJsZWQiLCJDb250YWluZXIiLCJMaW5rIiwiRnJhZ21lbnQiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJpbWFnZSIsInRpdGxlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50IiwidG9hc3QiLCJjb25zb2xlIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsIm5hbWUiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ2YWx1ZSIsInRleHRDb250ZW50Iiwic3BlY3MiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJleHBvcnRzIiwiX2VtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3N3b3JrcyIsIkVtcHR5IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJBbGVydCIsInR5cGUiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwiSWNvbiIsInVybCIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsImtleSIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiX2xpc3QiLCJMaXN0Q29udGFpbmVyIiwiaXRlbXMiLCJjb250cm9sIiwiTGlzdCIsIk5vdEZvdW5kIiwidGV4dHMiLCJ0ZXh0c1JlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInN1YnRpdGxlIiwibm90Rm91bmQiLCJQYWdlQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJzaXplIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsIlJvdGF0aW5nTWVzc2FnZSIsImNvbnRlbnQiLCJ0aW1lIiwiaW50ZXJ2YWxEb3RzIiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJkb3RzIiwibGVuZ3RoIiwiU3ViRGl2aWRlciIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwicmVhZHkiLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSJdLCJzb3VyY2VzIjpbIi90cy9haS1idXR0b24udHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9saXN0LWNvbnRhaW5lci50c3giLCIvdHMvbm90LWZvdW5kLnRzeCIsIi90cy9wYWdlL2NvbnRhaW5lci50c3giLCIvdHMvcGFnZS9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS90aXRsZS50c3giLCIvdHMvcm90YXRpbmctbWVzc2FnZS50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4IiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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