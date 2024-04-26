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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJCYXR0ZXJ5IiwicGVyY2VudCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIndpZHRoIiwiY2xhc3NOYW1lIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJzaW1wbGUiLCJjbHMiLCJDYXJkRm9vdGVyIiwiX2ltYWdlIiwiQ2FyZEltYWdlIiwic3JjIiwiYWx0IiwiSW1hZ2UiLCJDYXJkIiwibGluayIsImRhdGEiLCJpdGVtIiwiZGlzYWJsZWQiLCJDb250YWluZXIiLCJMaW5rIiwiRnJhZ21lbnQiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJpbWFnZSIsInRpdGxlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJjb25zb2xlIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImFzIiwibGluZUJyZWFrIiwibmFtZSIsIm9uRWRpdCIsIkNvbnRyb2wiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJoYW5kbGVLZXlEb3duIiwia2V5Iiwib25CbHVyIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvblBhc3RlIiwib25LZXlEb3duIiwiSWNvbiIsImV4cG9ydHMiLCJpc091dFNpZGUiLCJzZXRJc091dFNpZGUiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwicGF0aFRhcmdldCIsImxlbmd0aCIsImlzU2FtZU5vZGUiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiZ2xvYmFsVGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3N3b3JrcyIsIkVtcHR5IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJBbGVydCIsInR5cGUiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm9jZXNzQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiUm90YXRpbmdNZXNzYWdlIiwiY29udGVudCIsInRpbWUiLCJpbnRlcnZhbERvdHMiLCJpIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS9jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3JvdGF0aW5nLW1lc3NhZ2UudHN4IiwiL3RzL3N1Yi1kaXZpZGVyLnRzeCIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBRU8sV0FEUDtVQUNpQixTQUFVSSxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRTtZQUNBLE9BQ0NSLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNQLFdBQUEsQ0FBQVEsTUFBTTtjQUFBLEdBQUtILEtBQUs7Y0FBRUksSUFBSSxFQUFFVixNQUFBLENBQUFXLEtBQUssQ0FBQ0M7WUFBTyxHQUNwQ1IsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVVTLFlBQVlBLENBQUM7WUFBRVQsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ3RFO1lBQ0EsT0FDQ1IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sT0FBQSxDQUFBWSxVQUFVO2NBQUEsR0FBS1IsS0FBSztjQUFFSSxJQUFJLEVBQUVWLE1BQUEsQ0FBQVcsS0FBSyxDQUFDQztZQUFPLEdBQ3hDUixRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFB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