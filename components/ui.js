System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-beta.13/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-beta.13/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, EntityImage, ProcessButton, ProcessIconButton, RotatingMessage, SubDivider, useTextsCallback, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Beta13Config) {
      dependency_3 = _aimpactAilearnApp0032Beta13Config;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_5 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Beta13ComponentsIcons) {
      dependency_6 = _aimpactAilearnApp0032Beta13ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_8 = _pragmateUi011Image;
    }, function (_pragmateUi011Toast) {
      dependency_9 = _pragmateUi011Toast;
    }, function (_pragmateUi011Modal) {
      dependency_10 = _pragmateUi011Modal;
    }, function (_pragmateUi011Empty) {
      dependency_11 = _pragmateUi011Empty;
    }, function (_pragmateUi011Alert) {
      dependency_12 = _pragmateUi011Alert;
    }, function (_pragmateUi011Link) {
      dependency_13 = _pragmateUi011Link;
    }, function (_pragmateUi011List) {
      dependency_14 = _pragmateUi011List;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Texts) {
      dependency_16 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2], ['@aimpact/ailearn-app/config', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/form', dependency_5], ['@aimpact/ailearn-app/components/icons', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/modal', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/alert', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/kernel/texts', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.13/components/ui');
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