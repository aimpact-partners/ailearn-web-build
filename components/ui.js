System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ActivityHeader, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, useTextsCallback, __beyond_pkg, hmr;
  _export({
    ActivityHeader: void 0,
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
      /***********************************
      INTERNAL MODULE: ./activities/header
      ***********************************/
      ims.set('./activities/header', {
        hash: 2812889679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ActivityHeader({
            type,
            title,
            icon,
            children
          }) {
            const cls = `activity-header activity-header--${type}`;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("div", {
              className: "container"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title), children)));
          }
        }
      });

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
        hash: 3826144859,
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
        hash: 2146707426,
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
            }, item && _react.default.createElement(_image.CardImage, {
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
        hash: 460923979,
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
                event?.stopPropagation();
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

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 1361124616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _useContainer = require("./use-container");
          /*bundle*/
          const ContentEditable = ({
            onSave,
            /**
             * deprecated
             */
            selector = 'div',
            as = 'div',
            className,
            lineBreak = true,
            children,
            name,
            onEdit
          }) => {
            const Control = as || selector;
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const {
              ref: contentRef,
              value,
              setValue
            } = (0, _useContainer.useClickContainer)(isEditable);
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              if (!isEditable) {
                setTimeout(() => {
                  const el = contentRef.current;
                  if (el) {
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? `pui-editable-selector` : '';
            const attrs = {
              onClick: !isEditable ? toggleEdit : undefined
            };
            const handlePaste = e => {
              e.preventDefault();
              const text = e.clipboardData.getData('text/plain');
              document.execCommand('insertText', false, text);
            };
            const handleKeyDown = e => {
              if (lineBreak && e.key === 'Enter') {
                e.preventDefault();
                // Optionally, trigger save or another action when Enter is pressed
                // handleSave();
              }
            };
            const onBlur = async () => {
              const textContent = contentRef.current.textContent || ''; // Only grab the text content
              setIsEditable(false);
              if (value === textContent) return;
              const data = {
                name,
                value: textContent
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              await onSave(specs);
            };
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: controlCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true,
              onPaste: isEditable ? handlePaste : undefined,
              onKeyDown: isEditable ? handleKeyDown : undefined
            }, children), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          };
          exports.ContentEditable = ContentEditable;
        }
      });

      /************************************************
      INTERNAL MODULE: ./content-editable/use-container
      ************************************************/

      ims.set('./content-editable/use-container', {
        hash: 1653149872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer(isEditable = false) {
            const ref = _react.default.useRef(null);
            const [isOutSide, setIsOutSide] = _react.default.useState(false);
            const [value, setValue] = _react.default.useState(ref.current?.textContent || '');
            _react.default.useEffect(() => {
              setValue(ref.current?.textContent || '');
              const onClick = event => {
                const {
                  current
                } = ref;
                const {
                  target,
                  currentTarget
                } = event;
                const path = event.composedPath ? event.composedPath() : [];
                const pathTarget = path.length > 0 ? path[0] : null;
                const isSameNode = current === target || current === currentTarget || pathTarget === current;
                const isAChildren = current?.contains(pathTarget);
                // console.log(isSameNode, isAChildren);
                // setIsOutSide(!isSameNode && !isAChildren);
                //if (observer && !isSameNode && !isAChildren) setClicked(false);
              };
              globalThis.document.addEventListener('click', onClick);
              return () => globalThis.document.removeEventListener('click', onClick);
            }, []);
            return {
              ref,
              isOutSide,
              value,
              setValue
            };
          }
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
        "im": "./activities/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
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
        "im": "./content-editable/index",
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
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./activities/header').ActivityHeader : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'ConfirmAction') && _export("ConfirmAction", ConfirmAction = require ? require('./confirm-action').ConfirmAction : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsIm9uQ2xpY2siLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJCYXR0ZXJ5IiwicGVyY2VudCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIndpZHRoIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJzaW1wbGUiLCJDYXJkRm9vdGVyIiwiX2ltYWdlIiwiQ2FyZEltYWdlIiwic3JjIiwiYWx0IiwiSW1hZ2UiLCJDYXJkIiwibGluayIsImRhdGEiLCJpdGVtIiwiZGlzYWJsZWQiLCJDb250YWluZXIiLCJMaW5rIiwiRnJhZ21lbnQiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJpbWFnZSIsIl90b2FzdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJ0ZXh0UG9wVXAiLCJvbkNvbmZpcm0iLCJ0b2FzdFRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJtb2RhbFRleHQiLCJkZXNjcmlwdGlvbiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJoYW5kbGVNb2RhbCIsImhhbmRsZUNvbmZpcm0iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0IiwiY29uc29sZSIsIkNvbmZpcm1Nb2RhbCIsInRleHQiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJfdXNlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJhcyIsImxpbmVCcmVhayIsIm5hbWUiLCJvbkVkaXQiLCJDb250cm9sIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsImZvY3VzIiwiY29udHJvbENscyIsImhhbmRsZVBhc3RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsInRleHRDb250ZW50Iiwic3BlY3MiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIkljb24iLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwic2V0SXNPdXRTaWRlIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInBhdGhUYXJnZXQiLCJsZW5ndGgiLCJpc1NhbWVOb2RlIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImdsb2JhbFRoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImNsYXNzd29ya3MiLCJFbXB0eSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiQWxlcnQiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm9jZXNzQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiUm90YXRpbmdNZXNzYWdlIiwiY29udGVudCIsInRpbWUiLCJpbnRlcnZhbERvdHMiLCJpIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2xpc3QtY29udGFpbmVyLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UvY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxjQUFjQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxJQUFJO1lBQUVDO1VBQVEsQ0FBRTtZQUN4RSxNQUFNQyxHQUFHLEdBQUcsb0NBQW9DSixJQUFJLEVBQUU7WUFDdEQsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFFSDtZQUFHLEdBQ3JCUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBVyxHQUN6QlgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBVSxPQUFPO2NBQUNOLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3ZCTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLTCxLQUFLLENBQU0sRUFDZkUsUUFBUSxDQUNKLENBQ0UsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQVAsTUFB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