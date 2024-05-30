System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/spinner", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, EntityImage, PreloadScreen, ProcessButton, ProcessIconButton, RotatingMessage, SkeletonText, SubDivider, useTextsCallback, __beyond_pkg, hmr;
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
    PreloadScreen: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
    RotatingMessage: void 0,
    SkeletonText: void 0,
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
    }, function (_aimpactAilearnApp0045Config) {
      dependency_4 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0045ComponentsIcons;
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
    }, function (_pragmateUi011Spinner) {
      dependency_17 = _pragmateUi011Spinner;
    }, function (_beyondJsKernel019Texts) {
      dependency_18 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/texts', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/components/ui');
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
        hash: 1694808603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAudio = ActivityAudio;
          var _react = require("react");
          /*bundle*/
          function ActivityAudio({
            src
          }) {
            console.log(21, src);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src
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
        hash: 3147089097,
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

      /*************************************
      INTERNAL MODULE: ./animation-container
      *************************************/

      ims.set('./animation-container', {
        hash: 1302846374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/
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
        hash: 1097678782,
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
              className: cls
            }, _react.default.createElement("h3", {
              className: "p1"
            }, text), _react.default.createElement("p", {
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
        hash: 4150814031,
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
              className: cls,
              as: "main"
            }, children, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page/loader
      *****************************/

      ims.set('./page/loader', {
        hash: 3078422322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loader = Loader;
          var _react = require("react");
          function Loader() {
            return _react.default.createElement("div", {
              className: "process__loader"
            }, _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square "
            }), _react.default.createElement("div", {
              className: "square last"
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./page/process-container
      ****************************************/

      ims.set('./page/process-container', {
        hash: 1682709248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _loader = require("./loader");
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
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.Loader, null), children)));
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
        hash: 4078448146,
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

      /**************************
      INTERNAL MODULE: ./pre-load
      **************************/

      ims.set('./pre-load', {
        hash: 2462171743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return _react.default.createElement("div", {
              className: 'preload-screen active'
            }, _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: 'primary'
            }));
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

      /*******************************
      INTERNAL MODULE: ./skeleton-text
      *******************************/

      ims.set('./skeleton-text', {
        hash: 1426306877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SkeletonText = SkeletonText;
          var _react = require("react");
          /*bundle*/
          function SkeletonText(props) {
            return _react.default.createElement("span", {
              className: "skeleton-text",
              style: {
                width: props.width || '100%',
                height: props.height || '14px',
                background: props.color || '',
                borderRadius: props.radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: props.stopAnimation ? 'none' : 'block'
              }
            }));
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
        "im": "./animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
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
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
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
        "im": "./skeleton-text",
        "from": "SkeletonText",
        "name": "SkeletonText"
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
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./animation-container').AnimatedContainer : value);
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
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
        (require || prop === 'RotatingMessage') && _export("RotatingMessage", RotatingMessage = require ? require('./rotating-message').RotatingMessage : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9scyIsInByZWxvYWQiLCJfZW1wdHkiLCJfaWNvbnMiLCJfZm9ybSIsIkNoYXRQcmVsb2FkIiwib25DbGljayIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNscyIsIkFwcEljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsInByb3BzIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9waWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJGcmFnbWVudCIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImxpbmVCcmVhayIsIm5hbWUiLCJvbkVkaXQiLCJDb250cm9sIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsImZvY3VzIiwiY29udHJvbENscyIsImhhbmRsZVBhc3RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsInRleHRDb250ZW50Iiwic3BlY3MiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIkljb24iLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwic2V0SXNPdXRTaWRlIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInBhdGhUYXJnZXQiLCJsZW5ndGgiLCJpc1NhbWVOb2RlIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3N3b3JrcyIsIkVtcHR5IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJBbGVydCIsIl9saW5rIiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJ1cmwiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2xpc3QiLCJMaXN0Q29udGFpbmVyIiwiaXRlbXMiLCJjb250cm9sIiwiTGlzdCIsIk5vdEZvdW5kIiwidGV4dHMiLCJ0ZXh0c1JlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInN1YnRpdGxlIiwibm90Rm91bmQiLCJQYWdlQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJzaXplIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJTcGlubmVyIiwiYWN0aXZlIiwiTG9hZGVyIiwiX2xvYWRlciIsIlByb2Nlc3NDb250YWluZXIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJlbnRpdHkiLCJlbnRpdGllcyIsImFzc2lnbm1lbnQiLCJhY3Rpdml0eSIsImNsYXNzcm9vbSIsIm1vZHVsZSIsImluc3RpdHV0aW9uIiwiX3NwaW5uZXIiLCJQcm9jZXNzQnV0dG9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJoYW5kbGVDbGljayIsIlByb2Nlc3NJY29uQnV0dG9uIiwiQXBwSWNvbkJ1dHRvbiIsIlJvdGF0aW5nTWVzc2FnZSIsImNvbnRlbnQiLCJ0aW1lIiwiaW50ZXJ2YWxEb3RzIiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJkb3RzIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iLCJkaXNwbGF5Iiwic3RvcEFuaW1hdGlvbiIsIlN1YkRpdmlkZXIiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS9jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9waWN0dXJlLnRzeCIsIi90cy9wcmUtbG9hZC50c3giLCIvdHMvcHJvY2Vzcy1idXR0b24udHN4IiwiL3RzL3JvdGF0aW5nLW1lc3NhZ2UudHN4IiwiL3RzL3NrZWxldG9uLXRleHQudHN4IiwiL3RzL3N1Yi1kaXZpZGVyLnRzeCIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU87VUFBVyxTQUFVRSxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDLEVBQUUsR0FBRztVQUFNLENBQTBCO1lBQ3pHLE1BQU1DLFNBQVMsR0FBRyxJQUFBTCxhQUFBLENBQUFNLE1BQU0sRUFBQ0YsRUFBRSxDQUFDO1lBQzVCLE9BQ0NOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNILFNBQVM7Y0FDVEksTUFBTTtjQUNOUCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJRLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7O2VBRVg7Y0FDREMsSUFBSSxFQUFFO2dCQUNMRixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2tCQUNiRSxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RMLE9BQU8sRUFBRTs7WUFDVCxHQUVBUixRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQUwsTUFBQSxHQUFB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QUUrSyxPQUFPLEVBQUUxTCxLQUFLLENBQUMyTCxhQUFhLEdBQUcsTUFBTSxHQUFHO2NBQU87WUFBRSxFQUFTLENBQ25FO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUF2TyxNQUFBLEdBQUFDLE9BQUE7VUFTTyxXQVJQOzs7Ozs7O1VBUWlCLFNBQVV1TyxVQUFVQSxDQUFDO1lBQUVsTSxLQUFLO1lBQUVqQztVQUFRLENBQUU7WUFDeEQsT0FDQ0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQXVCLEdBQ3JDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLNEIsS0FBSyxDQUFNLEVBQ2ZqQyxRQUFRLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQW9PLEtBQUEsR0FBQXhPLE9BQUE7VUFDQSxJQUFBeU8sTUFBQSxHQUFBek8sT0FBQTtVQUVPO1VBQVUsU0FBVTBPLGdCQUFnQkEsQ0FBQ0MsU0FBUyxFQUFFQyxRQUFRO1lBQzlELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR04sS0FBSyxDQUFDNUksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN1RixLQUFLLEVBQUU0RCxRQUFRLENBQUMsR0FBR1AsS0FBSyxDQUFDNUksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QzRJLEtBQUssQ0FBQ3BMLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU00TCxVQUFVLEdBQUcsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNOLFNBQVMsQ0FBQztjQUM5QyxNQUFNTyxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsSUFBSWpJLEtBQUssR0FBRytILFVBQVUsQ0FBQy9ILEtBQUs7Z0JBQzVCOEgsUUFBUSxDQUFDOUgsS0FBSyxDQUFDO2dCQUNmNkgsUUFBUSxDQUFDRSxVQUFVLENBQUNILEtBQUssQ0FBQztnQkFDMUIsSUFBSUcsVUFBVSxDQUFDSCxLQUFLLEVBQUVELFFBQVEsQ0FBQzNILEtBQUssQ0FBQztjQUN0QyxDQUFDO2NBQ0QrSCxVQUFVLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUNyQ0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNYRixVQUFVLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUN0QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1FLE9BQU8sR0FBR1AsS0FBSyxJQUFJLENBQUMsQ0FBQzFELEtBQUs7WUFDaEMsT0FBTyxDQUFDaUUsT0FBTyxFQUFFakUsS0FBSyxDQUFDO1VBQ3hCIiwiaWdub3JlTGlzdCI6W119