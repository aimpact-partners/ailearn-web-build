System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.40/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.40/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/spinner", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0040Config) {
      dependency_4 = _aimpactAilearnApp0040Config;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0040ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0040ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.40"], ["@aimpact/ailearn-app", "0.0.40"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.40/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/texts', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.40/components/ui');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2NvbmZpZyIsIkFjdGl2aXR5QXVkaW8iLCJpZCIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJjb250cm9scyIsInByZWxvYWQiLCJzcmMiLCJfZW1wdHkiLCJfaWNvbnMiLCJfZm9ybSIsIkNoYXRQcmVsb2FkIiwib25DbGljayIsIkVtcHR5Q2FyZCIsInRleHQiLCJpY29uIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNscyIsIkFwcEljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsInByb3BzIiwiQnV0dG9uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9waWN0dXJlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJhdHRycyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsImRlc2NyaXB0aW9uIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ29uZmlybSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9hc3QiLCJjb25zb2xlIiwiRnJhZ21lbnQiLCJDb25maXJtTW9kYWwiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJfdXNlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJsaW5lQnJlYWsiLCJuYW1lIiwib25FZGl0IiwiQ29udHJvbCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VDbGlja0NvbnRhaW5lciIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJ0ZXh0Q29udGVudCIsInNwZWNzIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsInNldElzT3V0U2lkZSIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJwYXRoVGFyZ2V0IiwibGVuZ3RoIiwiaXNTYW1lTm9kZSIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzd29ya3MiLCJFbXB0eSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiQWxlcnQiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwidXJsIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJOb3RGb3VuZCIsInRleHRzIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiUGFnZUNvbnRhaW5lciIsImZldGNoaW5nIiwic2l6ZSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxvYWRlciIsIl9sb2FkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwiZW50aXR5IiwiZW50aXRpZXMiLCJhc3NpZ25tZW50IiwiYWN0aXZpdHkiLCJjbGFzc3Jvb20iLCJtb2R1bGUiLCJpbnN0aXR1dGlvbiIsIl9zcGlubmVyIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaGFuZGxlQ2xpY2siLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSb3RhdGluZ01lc3NhZ2UiLCJjb250ZW50IiwidGltZSIsImludGVydmFsRG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInJhZGlvIiwiZGlzcGxheSIsInN0b3BBbmltYXRpb24iLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jaGF0LXByZWxvYWQudHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2xpc3QtY29udGFpbmVyLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UvY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL2xvYWRlci50c3giLCIvdHMvcGFnZS9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS90aXRsZS50c3giLCIvdHMvcGljdHVyZS50c3giLCIvdHMvcHJlLWxvYWQudHN4IiwiL3RzL3Byb2Nlc3MtYnV0dG9uLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUN6RyxNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxD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