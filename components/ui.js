System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ActivityHeader, EntityImage, AIButton, AIIconButton, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, RotatingMessage, SubDivider, useTextsCallback, __beyond_pkg, hmr;
  _export({
    AnimatedContainer: void 0,
    ActivityAudio: void 0,
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
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Image) {
      dependency_6 = _pragmateUi011Image;
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_8 = _pragmateUi011Icons;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/modal', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/alert', dependency_12], ['pragmate-ui/link', dependency_13], ['pragmate-ui/list', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/kernel/texts', dependency_16]]);
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
        hash: 2704680106,
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
        hash: 3772292573,
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
        "im": "./activities/animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
        "im": "./activities/audio",
        "from": "ActivityAudio",
        "name": "ActivityAudio"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2NvbmZpZyIsIkFjdGl2aXR5QXVkaW8iLCJpZCIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjb250cm9scyIsInByZWxvYWQiLCJzcmMiLCJfaWNvbnMiLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImljb24iLCJjbHMiLCJBcHBJY29uIiwiX2ltYWdlIiwiRW50aXR5SW1hZ2UiLCJhbHQiLCJlbnRpdHkiLCJlbnRpdGllcyIsImFzc2lnbm1lbnQiLCJhY3Rpdml0eSIsImNsYXNzcm9vbSIsIm1vZHVsZSIsImluc3RpdHV0aW9uIiwiSW1hZ2UiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsIm9uQ2xpY2siLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJCYXR0ZXJ5IiwicGVyY2VudCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIkNhcmRJbWFnZSIsIl9waWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsImRpc2FibGVkIiwiQ29udGFpbmVyIiwiTGluayIsIkZyYWdtZW50IiwiYXR0cnMiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImltYWdlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJjb25zb2xlIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImxpbmVCcmVhayIsIm5hbWUiLCJvbkVkaXQiLCJDb250cm9sIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsImZvY3VzIiwiY29udHJvbENscyIsImhhbmRsZVBhc3RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsInRleHRDb250ZW50Iiwic3BlY3MiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIkljb24iLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwic2V0SXNPdXRTaWRlIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInBhdGhUYXJnZXQiLCJsZW5ndGgiLCJpc1NhbWVOb2RlIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VtcHR5IiwiRW1wdHlDYXJkIiwiY2xhc3N3b3JrcyIsIkVtcHR5IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJBbGVydCIsIl9saW5rIiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJ1cmwiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJOb3RGb3VuZCIsInRleHRzIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiUGFnZUNvbnRhaW5lciIsImZldGNoaW5nIiwic2l6ZSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb2Nlc3NDb250YWluZXIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJSb3RhdGluZ01lc3NhZ2UiLCJjb250ZW50IiwidGltZSIsImludGVydmFsRG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsIlN1YkRpdmlkZXIiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9waWN0dXJlLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2xpc3QtY29udGFpbmVyLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UvY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQs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