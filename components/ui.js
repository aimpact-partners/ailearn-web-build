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

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 2161224394,
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
              console.log(20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJCYXR0ZXJ5IiwicGVyY2VudCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NOYW1lIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJzaW1wbGUiLCJjbHMiLCJDYXJkRm9vdGVyIiwiX2ltYWdlIiwiQ2FyZEltYWdlIiwic3JjIiwiYWx0IiwiSW1hZ2UiLCJDYXJkIiwibGluayIsImRhdGEiLCJpdGVtIiwiZGlzYWJsZWQiLCJDb250YWluZXIiLCJMaW5rIiwiRnJhZ21lbnQiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJpbWFnZSIsInRpdGxlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50IiwidG9hc3QiLCJjb25zb2xlIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImFzIiwibGluZUJyZWFrIiwibmFtZSIsIm9uRWRpdCIsIkNvbnRyb2wiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJ0b2dnbGVFZGl0IiwibG9nIiwic2V0VGltZW91dCIsImVsIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJoYW5kbGVLZXlEb3duIiwia2V5Iiwib25CbHVyIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvblBhc3RlIiwib25LZXlEb3duIiwiSWNvbiIsImV4cG9ydHMiLCJpc091dFNpZGUiLCJzZXRJc091dFNpZGUiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwicGF0aFRhcmdldCIsImxlbmd0aCIsImlzU2FtZU5vZGUiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiZ2xvYmFsVGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3N3b3JrcyIsIkVtcHR5IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJBbGVydCIsInR5cGUiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm9jZXNzQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiUm90YXRpbmdNZXNzYWdlIiwiY29udGVudCIsInRpbWUiLCJpbnRlcnZhbERvdHMiLCJpIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS9jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3JvdGF0aW5nLW1lc3NhZ2UudHN4IiwiL3RzL3N1Yi1kaXZpZGVyLnRzeCIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBRU8sV0FEUDtVQUNpQixTQUFVSSxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRTtZQUNBLE9BQ0NSLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNQLFdBQUEsQ0FBQVEsTUFBTTtjQUFBLEdBQUtILEtBQUs7Y0FBRUksSUFBSSxFQUFFVixNQUFBLENBQUFXLEtBQUssQ0FBQ0M7WUFBTyxHQUNwQ1IsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVVTLFlBQVlBLENBQUM7WUFBRVQsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ3RFO1lBQ0EsT0FDQ1IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sT0FBQSxDQUFBWSxVQUFVO2NBQUEsR0FBS1IsS0FBSztjQUFFSSxJQUFJLEVBQUVWLE1BQUEsQ0FBQVcsS0FBSyxDQUFDQztZQUFPLEdBQ3hDUixRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQU4sTUFBQSxHQUFB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