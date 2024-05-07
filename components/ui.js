System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, EntityImage, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, useTextsCallback, __beyond_pkg, hmr;
  _export({
    AnimatedContainer: void 0,
    ActivityAudio: void 0,
    ChatPreload: void 0,
    ActivityHeader: void 0,
    EntityImage: void 0,
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
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_4 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Image) {
      dependency_8 = _pragmateUi011Image;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['@beyond-js/kernel/texts', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/ui');
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
        hash: 1820452081,
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
            return _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("div", {
              className: "container"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title), children));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./activities/picture
      ************************************/

      ims.set('./activities/picture', {
        hash: 2231707013,
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
            if (!src || src === '') src = `/assets/images/entities/${entity}/700.jpg`;
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            });
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
        hash: 1051991793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _picture = require("../activities/picture");
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
        "im": "./activities/picture",
        "from": "EntityImage",
        "name": "EntityImage"
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
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./activities/animation-container').AnimatedContainer : value);
        (require || prop === 'ActivityAudio') && _export("ActivityAudio", ActivityAudio = require ? require('./activities/audio').ActivityAudio : value);
        (require || prop === 'ChatPreload') && _export("ChatPreload", ChatPreload = require ? require('./activities/chat-preload').ChatPreload : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./activities/header').ActivityHeader : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./activities/picture').EntityImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2NvbmZpZyIsIkFjdGl2aXR5QXVkaW8iLCJpZCIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjb250cm9scyIsInByZWxvYWQiLCJzcmMiLCJfZW1wdHkiLCJfaWNvbnMiLCJfZm9ybSIsIkNoYXRQcmVsb2FkIiwib25DbGljayIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNscyIsIkFwcEljb24iLCJfaW1hZ2UiLCJFbnRpdHlJbWFnZSIsImFsdCIsImVudGl0eSIsImVudGl0aWVzIiwiYXNzaWdubWVudCIsImFjdGl2aXR5IiwiY2xhc3Nyb29tIiwibW9kdWxlIiwiaW5zdGl0dXRpb24iLCJJbWFnZSIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwicHJvcHMiLCJCdXR0b24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJCYXR0ZXJ5IiwicGVyY2VudCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIkNhcmRJbWFnZSIsIl9waWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJGcmFnbWVudCIsImF0dHJzIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJwaWN0dXJlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJjb25zb2xlIiwiQ29uZmlybU1vZGFsIiwib25DbG9zZSIsIm9uQ2FuY2VsIiwiX3VzZUNvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwibGluZUJyZWFrIiwibmFtZSIsIm9uRWRpdCIsIkNvbnRyb2wiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJoYW5kbGVLZXlEb3duIiwia2V5Iiwib25CbHVyIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvblBhc3RlIiwib25LZXlEb3duIiwiSWNvbiIsImV4cG9ydHMiLCJpc091dFNpZGUiLCJzZXRJc091dFNpZGUiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwicGF0aFRhcmdldCIsImxlbmd0aCIsImlzU2FtZU5vZGUiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc3dvcmtzIiwiRW1wdHkiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIkFsZXJ0IiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsImluZGV4IiwiU3RhdHVzSGVhZGVyQ29udGVudCIsInN0YXR1cyIsInVybCIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJfbGlzdCIsIkxpc3RDb250YWluZXIiLCJpdGVtcyIsImNvbnRyb2wiLCJMaXN0IiwiTm90Rm91bmQiLCJ0ZXh0cyIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm9jZXNzQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiUm90YXRpbmdNZXNzYWdlIiwiY29udGVudCIsInRpbWUiLCJpbnRlcnZhbERvdHMiLCJpIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jaGF0LXByZWxvYWQudHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3BpY3R1cmUudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvbGlzdC1jb250YWluZXIudHN4IiwiL3RzL25vdC1mb3VuZC50c3giLCIvdHMvcGFnZS9jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3JvdGF0aW5nLW1lc3NhZ2UudHN4IiwiL3RzL3N1Yi1kaXZpZGVyLnRzeCIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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