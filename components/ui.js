System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-dev.46/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-dev.46/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, EntityImage, ProcessButton, ProcessIconButton, RotatingMessage, SubDivider, useTextsCallback, __beyond_pkg, hmr;
  _export({
    AnimatedContainer: void 0,
    ActivityAudio: void 0,
    ChatPreload: void 0,
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
    EntityImage: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
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
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Dev46Config) {
      dependency_4 = _aimpactAilearnApp0032Dev46Config;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Dev46ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0032Dev46ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_9 = _pragmateUi011Image;
    }, function (_pragmateUi011Toast) {
      dependency_10 = _pragmateUi011Toast;
    }, function (_pragmateUi011Modal) {
      dependency_11 = _pragmateUi011Modal;
    }, function (_pragmateUi011Empty) {
      dependency_12 = _pragmateUi011Empty;
    }, function (_pragmateUi011Alert) {
      dependency_13 = _pragmateUi011Alert;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_pragmateUi011List) {
      dependency_15 = _pragmateUi011List;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Texts) {
      dependency_17 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.46"], ["@aimpact/ailearn-app", "0.0.32-dev.46"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.46/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['@beyond-js/kernel/texts', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.46/components/ui');
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/animation-container
      ************************************************/
      ims.set('./activities/animation-container', {
        hash: 584485339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle */
          function AnimatedContainer({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/audio
      **********************************/

      ims.set('./activities/audio', {
        hash: 1326570659,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAudio = ActivityAudio;
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function ActivityAudio({
            id
          }) {
            const audioUrl = `${_config.default?.params.apis.ailearn}/activities/${id}/materials/article/audio`;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: audioUrl
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/chat-preload
      *****************************************/

      ims.set('./activities/chat-preload', {
        hash: 1279374288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatPreload = ChatPreload;
          var _react = require("react");
          var _empty = require("../empty");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function ChatPreload({
            onClick
          }) {
            return _react.default.createElement("div", {
              className: "chat__preload-container"
            }, _react.default.createElement(_empty.EmptyCard, {
              className: "empty-section__container",
              text: "empty",
              icon: "info"
            }), _react.default.createElement("div", {
              className: "input-container ",
              onClick: onClick
            }, _react.default.createElement("form", {
              className: "chat-input-form"
            }, _react.default.createElement(_form.Textarea, {
              disabled: true,
              className: "input__textarea"
            }), _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "send",
              disabled: true
            })))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./activities/header
      ***********************************/

      ims.set('./activities/header', {
        hash: 823467044,
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
            return _react.default.createElement("div", {
              className: "header-container"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title), children));
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
        hash: 3092109062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _picture = require("../picture");
          /*bundle*/
          function Card({
            link,
            data: item,
            children,
            disabled,
            simple,
            className,
            type
          }) {
            const Container = !disabled && link ? _components.Link : 'span';
            const attrs = disabled || [undefined, null, ''].includes(link) ? {} : {
              href: link,
              className: 'unstyled'
            };
            let clsCard = `card ${className}`;
            if (disabled) clsCard += ' is-disabled';
            if (simple) clsCard += ' is-simple';
            const onClick = () => {
              globalThis?.sessionStorage.setItem('navigation.view', 'true');
            };
            return _react.default.createElement(Container, {
              ...attrs,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsCard
            }, item && _react.default.createElement(_picture.EntityImage, {
              className: "card__top",
              src: item.picture,
              alt: item.title,
              type: type
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
        hash: 2596647809,
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
        hash: 267622387,
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
            children,
            as = 'h1'
          }) {
            const Control = as;
            return _react.default.createElement("header", {
              className: "page-title__section"
            }, _react.default.createElement(Control, null, title), children);
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

      /*************************
      INTERNAL MODULE: ./picture
      *************************/

      ims.set('./picture', {
        hash: 4027118310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityImage = EntityImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function EntityImage({
            src,
            alt = '',
            entity = 'activity',
            type,
            className
          }) {
            const entities = {
              assignment: 'assignment',
              activity: 'activity',
              classroom: 'classroom',
              module: 'modules',
              institution: 'institution'
            };
            const cls = `entity-image ${className || ''} ${entity}`;
            console.log(20, src, entity, type);
            if (!src || src === '') {
              src = `/assets/images/entities/${entity}/${type ? `${type}/` : ''}700.jpg`;
            }
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            });
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./process-button
      ********************************/

      ims.set('./process-button', {
        hash: 3041374255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessButton = ProcessButton;
          exports.ProcessIconButton = ProcessIconButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ProcessButton({
            children,
            onClick,
            disabled,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async () => {
              setProcessing(true);
              await onClick();
              setProcessing(false);
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
          /*bundle*/
          function ProcessIconButton({
            children,
            disabled,
            className,
            onClick,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async event => {
              event.stopPropagation();
              setProcessing(true);
              await onClick();
              setTimeout(() => {
                setProcessing(false);
              }, 300);
            };
            if (processing) {
              return _react.default.createElement("button", {
                className: "process-button process-button--fetching"
              }, _react.default.createElement(_components.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const cls = className ? `${className} process-button` : 'process-button';
            return _react.default.createElement(_icons.AppIconButton, {
              className: cls,
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
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
        "im": "./activities/animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
        "im": "./activities/audio",
        "from": "ActivityAudio",
        "name": "ActivityAudio"
      }, {
        "im": "./activities/chat-preload",
        "from": "ChatPreload",
        "name": "ChatPreload"
      }, {
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
        "im": "./picture",
        "from": "EntityImage",
        "name": "EntityImage"
      }, {
        "im": "./process-button",
        "from": "ProcessButton",
        "name": "ProcessButton"
      }, {
        "im": "./process-button",
        "from": "ProcessIconButton",
        "name": "ProcessIconButton"
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
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./activities/animation-container').AnimatedContainer : value);
        (require || prop === 'ActivityAudio') && _export("ActivityAudio", ActivityAudio = require ? require('./activities/audio').ActivityAudio : value);
        (require || prop === 'ChatPreload') && _export("ChatPreload", ChatPreload = require ? require('./activities/chat-preload').ChatPreload : value);
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
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./picture').EntityImage : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2NvbmZpZyIsIkFjdGl2aXR5QXVkaW8iLCJpZCIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjb250cm9scyIsInByZWxvYWQiLCJzcmMiLCJfZW1wdHkiLCJfaWNvbnMiLCJfZm9ybSIsIkNoYXRQcmVsb2FkIiwib25DbGljayIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNscyIsIkFwcEljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsInByb3BzIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9waWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJjb25zb2xlIiwiRnJhZ21lbnQiLCJDb25maXJtTW9kYWwiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJfdXNlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJsaW5lQnJlYWsiLCJuYW1lIiwib25FZGl0IiwiQ29udHJvbCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VDbGlja0NvbnRhaW5lciIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJ0ZXh0Q29udGVudCIsInNwZWNzIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsInNldElzT3V0U2lkZSIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJwYXRoVGFyZ2V0IiwibGVuZ3RoIiwiaXNTYW1lTm9kZSIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzd29ya3MiLCJFbXB0eSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiQWxlcnQiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJOb3RGb3VuZCIsInRleHRzIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiUGFnZUNvbnRhaW5lciIsImZldGNoaW5nIiwic2l6ZSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb2Nlc3NDb250YWluZXIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJlbnRpdHkiLCJlbnRpdGllcyIsImFzc2lnbm1lbnQiLCJhY3Rpdml0eSIsImNsYXNzcm9vbSIsIm1vZHVsZSIsImluc3RpdHV0aW9uIiwibG9nIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaGFuZGxlQ2xpY2siLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSb3RhdGluZ01lc3NhZ2UiLCJjb250ZW50IiwidGltZSIsImludGVydmFsRG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsIlN1YkRpdmlkZXIiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS9jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3BpY3R1cmUudHN4IiwiL3RzL3Byb2Nlc3MtYnV0dG9uLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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