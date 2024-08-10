System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.4-test.02/config", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/form", "@aimpact/ailearn-app@0.1.4-test.02/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/toast", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/link", "js-confetti@0.12.0", "driver.js@1.3.1", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.1/spinner", "@aimpact/chat@1.0.2/shared/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useDriverTour, useTextsCallback, AppLoader, PreloadScreen, NotFound, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RotatingMessage, SkeletonText, SubDivider, TourStep, UserData, __beyond_pkg, hmr;
  _export({
    AnimatedContainer: void 0,
    ActivityAudio: void 0,
    ChatPreload: void 0,
    ActivityHeader: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    AudioPlayer: void 0,
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    ConfirmAction: void 0,
    ContentEditable: void 0,
    EmptyCard: void 0,
    EntityImage: void 0,
    ErrorRenderer: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    useConfetti: void 0,
    useDriverTour: void 0,
    useTextsCallback: void 0,
    AppLoader: void 0,
    PreloadScreen: void 0,
    NotFound: void 0,
    PageLoader: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
    RotatingMessage: void 0,
    SkeletonText: void 0,
    SubDivider: void 0,
    TourStep: void 0,
    UserData: void 0
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
    }, function (_aimpactAilearnApp014Test02Config) {
      dependency_4 = _aimpactAilearnApp014Test02Config;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_5 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Form) {
      dependency_6 = _pragmateUi100Beta1Form;
    }, function (_aimpactAilearnApp014Test02ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp014Test02ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_8 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Image) {
      dependency_9 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_10 = _pragmateUi100Beta1Toast;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_11 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_12 = _pragmateUi100Beta1Empty;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_13 = _pragmateUi100Beta1Alert;
    }, function (_pragmateUi100Beta1Link) {
      dependency_14 = _pragmateUi100Beta1Link;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_driverJs) {
      dependency_16 = _driverJs;
    }, function (_beyondJsKernel019Texts) {
      dependency_17 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta1Spinner) {
      dependency_18 = _pragmateUi100Beta1Spinner;
    }, function (_aimpactChat102SharedComponents) {
      dependency_19 = _aimpactChat102SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.02"], ["@aimpact/ailearn-app", "0.1.4-test.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.02/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['js-confetti', dependency_15], ['driver.js', dependency_16], ['@beyond-js/kernel/texts', dependency_17], ['pragmate-ui/spinner', dependency_18], ['@aimpact/chat/shared/components', dependency_19]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.4-test.02/components/ui');
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
        hash: 2399738441,
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
        hash: 2289740302,
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
              className: "empty-section__container"
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
        hash: 584318629,
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
            as = 'span',
            ...props
          }) {
            const Component = (0, _framerMotion.motion)(as);
            const attrs = {
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              initial: {
                opacity: 0
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              },
              ...props
            };
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              ...attrs
            }, children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./audio-player
      ******************************/

      ims.set('./audio-player', {
        hash: 1039808834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src,
            url
          }) {
            if (!src && !url) {
              console.warn('not audio to process');
              return null;
            }
            src = url ?? URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mpeg",
              ref: ref
            }), "Your browser does not support the audio element."));
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
        hash: 1698619199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _entityImage = require("../entity-image");
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
            }, item && _react.default.createElement(_entityImage.EntityImage, {
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
        hash: 1391401000,
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
            selector = 'div',
            as = 'div',
            className,
            content,
            placeholder,
            lineBreak = true,
            editable = true,
            name
          }) => {
            const Control = as || selector;
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const {
              ref: contentRef,
              value
            } = (0, _useContainer.useClickContainer)(content, placeholder, isEditable);
            if (!editable) {
              return _react.default.createElement(Control, {
                ref: contentRef
              }, value);
            }
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              if (!isEditable) {
                setTimeout(() => {
                  const el = contentRef.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? 'pui-editable-selector' : '';
            const attrs = {
              onClick: !isEditable ? toggleEdit : undefined
            };
            const [original, setOriginal] = _react.default.useState(content);
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
            const onBlur = async event => {
              event.stopPropagation();
              const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setIsEditable(false);
              if (content === original) return;
              const data = {
                name,
                value: content
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(content);
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
            }, value), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          };
          exports.ContentEditable = ContentEditable;
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/types
      ****************************************/

      ims.set('./content-editable/types', {
        hash: 250591186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./content-editable/use-container
      ************************************************/

      ims.set('./content-editable/use-container', {
        hash: 1642257852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer(content, placeholder, isEditable = false) {
            const ref = _react.default.useRef(null);
            const [isOutSide] = _react.default.useState(false);
            const [value, setValue] = _react.default.useState({
              edited: false,
              content: ''
            });
            const contentValue = value?.edited ? value.content : content;
            let toShow = isEditable ? contentValue ? contentValue : '' : contentValue === '' || contentValue === undefined ? placeholder : contentValue || placeholder || '';
            return {
              ref,
              isOutSide,
              value: toShow,
              setValue
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 941402273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className,
            description,
            children
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls
            }, _react.default.createElement("h3", null, text), _react.default.createElement("p", {
              className: "p1"
            }, description), children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./entity-image
      ******************************/

      ims.set('./entity-image', {
        hash: 1614160234,
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
            ratio,
            alt = '',
            entity = 'activity',
            type,
            preload,
            className
          }) {
            let cls = `entity-image ${className || ''} ${entity}`;
            if (ratio) cls += ` img--${ratio}`;
            if (!src || src === '') {
              src = `/assets/images/entities/${entity}/${type ? `${type}/` : ''}700.jpg`;
            }
            if (preload) return _react.default.createElement("div", {
              className: `${cls} entity-image--preload`
            });
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            });
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 1509422675,
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
            texts,
            variant = 'error'
          }) {
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

      /************************************
      INTERNAL MODULE: ./hooks/use-confetti
      ************************************/

      ims.set('./hooks/use-confetti', {
        hash: 679209707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConfetti = useConfetti;
          var _jsConfetti = require("js-confetti");
          var _react = require("react");
          /*bundle*/
          function useConfetti(props) {
            const specs = {
              confettiNumber: 300,
              confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
              emojis: ['🎉', '🎊'],
              emojiSize: 18
            };
            _react.default.useEffect(() => {
              const jsConfetti = new _jsConfetti.default();
              jsConfetti.addConfetti({
                ...specs,
                ...props
              });
            }, []);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/use-driver-tour
      ***************************************/

      ims.set('./hooks/use-driver-tour', {
        hash: 2915660010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDriverTour = useDriverTour;
          var _react = require("react");
          var _driver = require("driver.js");
          /*bundle*/
          function useDriverTour(name, ready, props = {}) {
            const ref = _react.default.useRef(null);
            const key = `ailearn.${name}.tour`;
            const saw = localStorage.getItem(key);
            _react.default.useEffect(() => {
              if (!ready || saw) return;
              const items = ref.current.querySelectorAll('[data-tour]');
              const steps = [];
              items?.forEach(item => {
                const {
                  title,
                  description
                } = item.dataset;
                steps.push({
                  element: item,
                  popover: {
                    title,
                    description
                  }
                });
              });
              const obj = (0, _driver.driver)({
                popoverClass: 'pui-popover-tour',
                steps,
                onNextClick: () => {
                  if (!obj.hasNextStep()) {
                    localStorage.setItem(key, 'done');
                    obj.destroy();
                    return;
                  }
                  obj.moveNext();
                  return true;
                },
                ...props
              });
              obj.drive();
            }, [ready]);
            return {
              ref
            };
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./hooks/use-texts-callback
      ******************************************/

      ims.set('./hooks/use-texts-callback', {
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

      /********************************
      INTERNAL MODULE: ./loaders/loader
      ********************************/

      ims.set('./loaders/loader', {
        hash: 1998167168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLoader = AppLoader;
          var _react = require("react");
          /*bundle*/
          function AppLoader() {
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

      /**********************************
      INTERNAL MODULE: ./loaders/pre-load
      **********************************/

      ims.set('./loaders/pre-load', {
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

      /*****************************
      INTERNAL MODULE: ./page/loader
      *****************************/

      ims.set('./page/loader', {
        hash: 1583197324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageLoader = PageLoader;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function PageLoader({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = `page-loader-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./page/page-container
      *************************************/

      ims.set('./page/page-container', {
        hash: 2947604960,
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
        hash: 3253109147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _loader = require("../loaders/loader");
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
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./page/title
      ****************************/

      ims.set('./page/title', {
        hash: 1304239518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSubtitle = PageSubtitle;
          exports.PageTitle = PageTitle;
          var _react = require("react");
          var _skeletonText = require("../skeleton-text");
          /*bundle*/
          function PageTitle({
            preload,
            title,
            children,
            as = 'h1'
          }) {
            const Control = as;
            if (preload) {
              return _react.default.createElement("header", {
                className: "page-title__section"
              }, _react.default.createElement(_skeletonText.SkeletonText, {
                height: "8px",
                width: "100px"
              }), children);
            }
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

      /***************************
      INTERNAL MODULE: ./tour-step
      ***************************/

      ims.set('./tour-step', {
        hash: 3613274651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TourStep = TourStep;
          var _react = require("react");
          /*bundle*/
          function TourStep({
            className,
            name,
            texts,
            children,
            as = 'span'
          }) {
            const keys = Object.keys(texts);
            if (!texts.hasOwnProperty(name) || !keys) {
              console.warn(`The text ${name} is not defined in the texts object`, texts);
              return null;
            }
            const index = keys.indexOf(name);
            const Control = as;
            const cls = `tour-step ${className || ''}`;
            return _react.default.createElement(Control, {
              className: cls,
              "data-description": texts[name].description,
              "data-title": texts[name].title,
              "data-tour": index
            }, children);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 1947842681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserData({
            label,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
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
        "im": "./audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
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
        "im": "./entity-image",
        "from": "EntityImage",
        "name": "EntityImage"
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
        "im": "./hooks/use-confetti",
        "from": "useConfetti",
        "name": "useConfetti"
      }, {
        "im": "./hooks/use-driver-tour",
        "from": "useDriverTour",
        "name": "useDriverTour"
      }, {
        "im": "./hooks/use-texts-callback",
        "from": "useTextsCallback",
        "name": "useTextsCallback"
      }, {
        "im": "./loaders/loader",
        "from": "AppLoader",
        "name": "AppLoader"
      }, {
        "im": "./loaders/pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./not-found",
        "from": "NotFound",
        "name": "NotFound"
      }, {
        "im": "./page/loader",
        "from": "PageLoader",
        "name": "PageLoader"
      }, {
        "im": "./page/page-container",
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
        "im": "./tour-step",
        "from": "TourStep",
        "name": "TourStep"
      }, {
        "im": "./user-data",
        "from": "UserData",
        "name": "UserData"
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./audio-player').AudioPlayer : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'ConfirmAction') && _export("ConfirmAction", ConfirmAction = require ? require('./confirm-action').ConfirmAction : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./entity-image').EntityImage : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'useConfetti') && _export("useConfetti", useConfetti = require ? require('./hooks/use-confetti').useConfetti : value);
        (require || prop === 'useDriverTour') && _export("useDriverTour", useDriverTour = require ? require('./hooks/use-driver-tour').useDriverTour : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./hooks/use-texts-callback').useTextsCallback : value);
        (require || prop === 'AppLoader') && _export("AppLoader", AppLoader = require ? require('./loaders/loader').AppLoader : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./loaders/pre-load').PreloadScreen : value);
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./not-found').NotFound : value);
        (require || prop === 'PageLoader') && _export("PageLoader", PageLoader = require ? require('./page/loader').PageLoader : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/page-container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
        (require || prop === 'RotatingMessage') && _export("RotatingMessage", RotatingMessage = require ? require('./rotating-message').RotatingMessage : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
        (require || prop === 'SubDivider') && _export("SubDivider", SubDivider = require ? require('./sub-divider').SubDivider : value);
        (require || prop === 'TourStep') && _export("TourStep", TourStep = require ? require('./tour-step').TourStep : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdG9hc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwiZGVzY3JpcHRpb24iLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWwiLCJoYW5kbGVDb25maXJtIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsIkZyYWdtZW50IiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsIkNvbnRyb2wiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaXNPdXRTaWRlIiwic2V0VmFsdWUiLCJlZGl0ZWQiLCJjb250ZW50VmFsdWUiLCJ0b1Nob3ciLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwidmFyaWFudCIsIkFsZXJ0IiwiX2xpbmsiLCJIZWFkZXJDb3VudGVySXRlbSIsImluZGV4IiwiU3RhdHVzSGVhZGVyQ29udGVudCIsInN0YXR1cyIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJfanNDb25mZXR0aSIsInVzZUNvbmZldHRpIiwiY29uZmV0dGlOdW1iZXIiLCJjb25mZXR0aUNvbG9ycyIsImVtb2ppcyIsImVtb2ppU2l6ZSIsImpzQ29uZmV0dGkiLCJhZGRDb25mZXR0aSIsIl9kcml2ZXIiLCJ1c2VEcml2ZXJUb3VyIiwicmVhZHkiLCJzYXciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJkcml2ZSIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiTm90Rm91bmQiLCJ0ZXh0c1JlYWR5Iiwic3VidGl0bGUiLCJub3RGb3VuZCIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJQYWdlQ29udGFpbmVyIiwic2l6ZSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9za2VsZXRvblRleHQiLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJQYWdlU3VidGl0bGUiLCJQcm9jZXNzQnV0dG9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJoYW5kbGVDbGljayIsIlByb2Nlc3NJY29uQnV0dG9uIiwiQXBwSWNvbkJ1dHRvbiIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJpbnRlcnZhbERvdHMiLCJpIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySFRNTCIsImRvdHMiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiU3ViRGl2aWRlciIsIlRvdXJTdGVwIiwia2V5cyIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsIlVzZXJEYXRhIiwibGFiZWwiLCJwaG90b1VybCJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhdC1wcmVsb2FkLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90eXBlcy50cyIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtZHJpdmVyLXRvdXIudHMiLCIvdHMvaG9va3MvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL2xvYWRlcnMvbG9hZGVyLnRzeCIsIi90cy9sb2FkZXJzL3ByZS1sb2FkLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcm90YXRpbmctbWVzc2FnZS50c3giLCIvdHMvc2tlbGV0b24tdGV4dC50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4IiwiL3RzL3RvdXItc3RlcC50c3giLCIvdHMvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUN6RyxNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUdPO1VBQVUsU0FBVWtCLGFBQWFBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUNyQixPQUNDcEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWMsR0FDNUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU9XLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakN0QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRVSxHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUViLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBcEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixLQUFBLEdBQUF4QixPQUFBO1VBRU87VUFBVSxTQUFVeUIsV0FBV0EsQ0FBQztZQUFFQztVQUFPLENBQUU7WUFDakQsT0FDQzNCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUF5QixHQUN2Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsTUFBQSxDQUFBSyxTQUFTO2NBQUN4QixTQUFTLEVBQUM7WUFBMEIsRUFBRyxFQUNsREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDLGtCQUFrQjtjQUFDdUIsT0FBTyxFQUFFQTtZQUFPLEdBQ2pEM0IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWlCLEdBQ2hDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZSxLQUFBLENBQUFJLFFBQVE7Y0FBQ0MsUUFBUTtjQUFDMUIsU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDakRKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1OLFNBQVMsRUFBQztZQUFpQyxHQUNoREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBTyxVQUFVO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNGLFFBQVEsRUFBRTtZQUFJLEVBQUksQ0FDcEMsQ0FDRCxDQUNGLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTlCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBR087VUFBVSxTQUFVZ0MsY0FBY0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUgsSUFBSTtZQUFFM0I7VUFBUSxDQUFFO1lBQ3hFLE1BQU0rQixHQUFHLEdBQUcsb0NBQW9DRixJQUFJLEVBQUU7WUFDdEQsT0FDQ2xDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFrQixHQUNoQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUU4sU0FBUyxFQUFFZ0M7WUFBRyxHQUNyQnBDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQWEsT0FBTztjQUFDTCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUN2QmhDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUt5QixLQUFLLENBQU0sRUFDZjlCLFFBQVEsQ0FDRCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXFDLFdBQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBc0MsT0FBQSxHQUFBdEMsT0FBQTtVQUVPO1VBQVUsU0FBVXVDLFFBQVFBLENBQUM7WUFBRW5DLFFBQVE7WUFBRSxHQUFHb0M7VUFBSyxDQUFFO1lBQ3pELE9BQ0N6QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFVCxJQUFJLEVBQUVSLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0M7WUFBTyxHQUNwQ3ZDLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVd0MsWUFBWUEsQ0FBQztZQUFFeEMsUUFBUTtZQUFFc0IsT0FBTztZQUFFLEdBQUdjO1VBQUssQ0FBRTtZQUN0RTtZQUNBLE9BQ0N6QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkIsT0FBQSxDQUFBUixVQUFVO2NBQUEsR0FBS1UsS0FBSztjQUFFVCxJQUFJLEVBQUVSLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0M7WUFBTyxHQUN4Q3ZDLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFNTztVQUFVLFNBQVVFLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHLE1BQU07WUFBRSxHQUFHbUM7VUFBSyxDQUEwQjtZQUNsSCxNQUFNbEMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsTUFBTXdDLEtBQUssR0FBRztjQUNiaEMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7O2VBRVg7Y0FDREosT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNESSxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JFLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFO2VBQ1Q7Y0FDRCxHQUFHNEI7YUFDSDtZQUNELE9BQ0N6QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQUNJLE1BQU07Y0FBQ1AsU0FBUyxFQUFFQSxTQUFTO2NBQUEsR0FBTTBDO1lBQUssR0FDL0N6QyxRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVThDLFdBQVdBLENBQUM7WUFBRTNCLEdBQUc7WUFBRTRCO1VBQUcsQ0FBRTtZQUNwRCxJQUFJLENBQUM1QixHQUFHLElBQUksQ0FBQzRCLEdBQUcsRUFBRTtjQUNqQkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaOUIsR0FBRyxHQUFHNEIsR0FBRyxJQUFJRyxHQUFHLENBQUNDLGVBQWUsQ0FBQ2hDLEdBQUcsQ0FBQztZQUNyQyxNQUFNaUMsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCdEQsTUFBQSxDQUFBUyxPQUFLLENBQUM4QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUMxQkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM5QyxJQUFJRixNQUFNLENBQUN4QyxRQUFRLEtBQUsyQyxRQUFRLEVBQUU7a0JBQ2pDSCxNQUFNLENBQUNJLFdBQVcsR0FBRyxLQUFLO2tCQUMxQkosTUFBTSxDQUFDSyxZQUFZLEdBQUcsTUFBSztvQkFDMUJMLE1BQU0sQ0FBQ0ssWUFBWSxHQUFHLElBQUk7b0JBQzFCTCxNQUFNLENBQUNJLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDeEMsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ3BCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFjLEdBQzVCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFPVyxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDdEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUVUsR0FBRyxFQUFFQSxHQUFHO2NBQUVjLElBQUksRUFBQyxZQUFZO2NBQUNtQixHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUV6QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFyRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVU2RCxPQUFPQSxDQUFDO1lBQUVDLE9BQU8sR0FBRztVQUFFLENBQUU7WUFDbEQsTUFBTVYsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUM5Q3RELE1BQUEsQ0FBQVMsT0FBSyxDQUFDOEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEJGLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxLQUFLLENBQUM5QyxLQUFLLEdBQUcsR0FBRzZDLE9BQU8sR0FBRztZQUN4QyxDQUFDLEVBQUUsQ0FBQ0EsT0FBTyxDQUFDLENBQUM7WUFDYixPQUNDL0QsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQW1CLEdBQ2pDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBTyxHQUNyQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBSzJDLEdBQUcsRUFBRUEsR0FBRztjQUFFakQsU0FBUyxFQUFDO1lBQVksRUFFL0IsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsU0FBVWdFLFdBQVdBLENBQUM7WUFBRTVELFFBQVE7WUFBRUQsU0FBUztZQUFFOEQsTUFBTSxHQUFHLEtBQUs7WUFBRUM7VUFBTSxDQUFFO1lBQ3RGLE1BQU0vQixHQUFHLEdBQUcseUJBQXlCOEIsTUFBTSxJQUFJOUQsU0FBUyxJQUFJLElBQUlBLFNBQVMsRUFBRSxJQUFJK0QsTUFBTSxJQUFJLFlBQVksRUFBRTtZQUV2RyxPQUFPbkUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0M7WUFBRyxHQUFHL0IsUUFBUSxDQUFPO1VBQzdDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05BLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsU0FBVW1FLFVBQVVBLENBQUM7WUFBRS9ELFFBQVE7WUFBRUQsU0FBUztZQUFFK0Q7VUFBTSxDQUFFO1lBQ3JFLE1BQU0vQixHQUFHLEdBQUcsZ0JBQWdCaEMsU0FBUyxJQUFJLElBQUlBLFNBQVMsRUFBRSxJQUFJK0QsTUFBTSxJQUFJLFlBQVksRUFBRTtZQUNwRixPQUFPbkUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUU4sU0FBUyxFQUFFZ0M7WUFBRyxHQUFHL0IsUUFBUSxDQUFVO1VBQ25EOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0xBLElBQUFnRSxNQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBT087VUFBVSxTQUFVcUUsU0FBU0EsQ0FBQztZQUFFbEQsR0FBRztZQUFFaEIsU0FBUztZQUFFbUUsR0FBRztZQUFFbEU7VUFBUSxDQUFlO1lBQ2xGLE1BQU0rQixHQUFHLEdBQUcsYUFBYWhDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFM0QsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJELE1BQUEsQ0FBQUcsS0FBSztjQUFDcEQsR0FBRyxFQUFFQSxHQUFHO2NBQUVtRCxHQUFHLEVBQUVBLEdBQUc7Y0FBRW5FLFNBQVMsRUFBRWdDO1lBQUcsR0FDdkMvQixRQUFRLENBQ0Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBaUMsV0FBQSxHQUFBckMsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3RSxZQUFBLEdBQUF4RSxPQUFBO1VBRU87VUFBVSxTQUFVeUUsSUFBSUEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLElBQUksRUFBRUMsSUFBSTtZQUFFeEUsUUFBUTtZQUFFeUIsUUFBUTtZQUFFcUMsTUFBTTtZQUFFL0QsU0FBUztZQUFFOEI7VUFBSSxDQUFFO1lBQ2hHLE1BQU00QyxTQUFTLEdBQUcsQ0FBQ2hELFFBQVEsSUFBSTZDLElBQUksR0FBR3JDLFdBQUEsQ0FBQXlDLElBQUksR0FBRyxNQUFNO1lBQ25ELE1BQU1qQyxLQUFLLEdBQUdoQixRQUFRLElBQUksQ0FBQ2tELFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUNDLFFBQVEsQ0FBQ04sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHO2NBQUVPLElBQUksRUFBRVAsSUFBSTtjQUFFdkUsU0FBUyxFQUFFO1lBQVUsQ0FBRTtZQUMzRyxJQUFJK0UsT0FBTyxHQUFHLFFBQVEvRSxTQUFTLEVBQUU7WUFFakMsSUFBSTBCLFFBQVEsRUFBRXFELE9BQU8sSUFBSSxjQUFjO1lBQ3ZDLElBQUloQixNQUFNLEVBQUVnQixPQUFPLElBQUksWUFBWTtZQUNuQyxNQUFNeEQsT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEJ5RCxVQUFVLEVBQUVDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQztZQUM5RCxDQUFDO1lBRUQsT0FDQ3RGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNvRSxTQUFTO2NBQUEsR0FBS2hDLEtBQUs7Y0FBRW5CLE9BQU8sRUFBRUE7WUFBTyxHQUNyQzNCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRStFO1lBQU8sR0FDckJOLElBQUksSUFBSTdFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRCxZQUFBLENBQUFjLFdBQVc7Y0FBQ25GLFNBQVMsRUFBQyxXQUFXO2NBQUNnQixHQUFHLEVBQUV5RCxJQUFJLENBQUNXLE9BQU87Y0FBRWpCLEdBQUcsRUFBRU0sSUFBSSxDQUFDMUMsS0FBSztjQUFFRCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUM3RjdCLFFBQVEsQ0FDSixDQUNLO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdGLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQVdPO1VBQVcsU0FBVTBGLGFBQWFBLENBQUM7WUFDekNDLFNBQVMsR0FBRyxFQUFFO1lBQ2RDLFNBQVM7WUFDVDdELElBQUksR0FBRyxRQUFRO1lBQ2Y1QixTQUFTLEdBQUcsUUFBUTtZQUNwQjBGLFNBQVMsR0FBRztjQUFFQyxPQUFPLEVBQUUsOEJBQThCO2NBQUVDLEtBQUssRUFBRTtZQUEwQyxDQUFFO1lBQzFHQyxTQUFTLEdBQUc7Y0FBRTlELEtBQUssRUFBRSxrQkFBa0I7Y0FBRStELFdBQVcsRUFBRTtZQUF1QztVQUFFLENBQzFFO1lBQ3JCLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR3BHLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNEYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxTQUFTQyxXQUFXQSxDQUFBO2NBQ25CRixPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQ2Y7WUFFQSxNQUFNSSxhQUFhLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ25DLElBQUk7Z0JBQ0hBLEtBQUssRUFBRUMsZUFBZSxFQUFFO2dCQUN4QixNQUFNWixTQUFTLEVBQUU7Z0JBQ2pCSixNQUFBLENBQUFpQixLQUFLLENBQUNYLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDQyxPQUFPLENBQUM7Z0JBQ2hDSyxPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO2VBQ2QsQ0FBQyxPQUFPSCxLQUFLLEVBQUU7Z0JBQ2ZQLE1BQUEsQ0FBQWlCLEtBQUssQ0FBQ1YsS0FBSyxDQUFDRixTQUFTLENBQUNFLEtBQUssQ0FBQztnQkFDNUIvQyxPQUFPLENBQUMrQyxLQUFLLENBQUNBLEtBQUssQ0FBQzs7WUFFdEIsQ0FBQztZQUVELE9BQ0NoRyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVixNQUFBLENBQUFTLE9BQUEsQ0FBQWtHLFFBQUEsUUFDQzNHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQU8sVUFBVTtjQUFDSSxLQUFLLEVBQUV5RCxTQUFTO2NBQUU1RCxJQUFJLEVBQUVBLElBQUk7Y0FBRUwsT0FBTyxFQUFFMkUsV0FBVztjQUFFbEcsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDdkYrRixJQUFJLElBQ0puRyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0YsTUFBQSxDQUFBa0IsWUFBWTtjQUNaVCxJQUFJO2NBQ0ovRixTQUFTLEVBQUMsY0FBYztjQUN4QitCLEtBQUssRUFBRThELFNBQVMsQ0FBQzlELEtBQUs7Y0FDdEIwRSxJQUFJLEVBQUVaLFNBQVMsQ0FBQ0MsV0FBVztjQUMzQlksT0FBTyxFQUFFUixXQUFXO2NBQ3BCUyxRQUFRLEVBQUVULFdBQVc7Y0FDckJULFNBQVMsRUFBRVU7WUFBYSxFQUV6QixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBLElBQUF2RyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUErRyxhQUFBLEdBQUEvRyxPQUFBO1VBR087VUFBVyxNQUFNZ0gsZUFBZSxHQUFvQ0EsQ0FBQztZQUMzRUMsTUFBTTtZQUNOQyxRQUFRLEdBQUcsS0FBSztZQUNoQjdHLEVBQUUsR0FBRyxLQUFLO1lBQ1ZGLFNBQVM7WUFDVGdILE9BQU87WUFDUEMsV0FBVztZQUNYQyxTQUFTLEdBQUcsSUFBSTtZQUNoQkMsUUFBUSxHQUFHLElBQUk7WUFDZkM7VUFBSSxDQUNKLEtBQUk7WUFDSixNQUFNQyxPQUFPLEdBQUduSCxFQUFFLElBQUk2RyxRQUFRO1lBQzlCLE1BQU0sQ0FBQ08sVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBM0gsTUFBQSxDQUFBcUcsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUVuRCxNQUFNO2NBQUVoRCxHQUFHLEVBQUV1RSxVQUFVO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFiLGFBQUEsQ0FBQWMsaUJBQWlCLEVBQUNWLE9BQU8sRUFBRUMsV0FBVyxFQUFFSyxVQUFVLENBQUM7WUFFdEYsSUFBSSxDQUFDSCxRQUFRLEVBQUU7Y0FDZCxPQUFPdkgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytHLE9BQU87Z0JBQUNwRSxHQUFHLEVBQUV1RTtjQUFVLEdBQUdDLEtBQUssQ0FBVzs7WUFHbkQsTUFBTUUsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJKLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7Y0FDMUIsSUFBSSxDQUFDQSxVQUFVLEVBQUU7Z0JBQ2hCTSxVQUFVLENBQUMsTUFBSztrQkFDZixNQUFNQyxFQUFFLEdBQUdMLFVBQVUsQ0FBQ25FLE9BQU87a0JBRTdCLElBQUl3RSxFQUFFLEVBQUU7b0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtvQkFDcENGLEtBQUssQ0FBQ0csa0JBQWtCLENBQUNKLEVBQUUsQ0FBQztvQkFDNUJDLEtBQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXZCLE1BQU1DLFNBQVMsR0FBR25ELFVBQVUsQ0FBQ29ELFlBQVksRUFBRTtvQkFFM0MsSUFBSUQsU0FBUyxFQUFFO3NCQUNkQSxTQUFTLENBQUNFLGVBQWUsRUFBRTtzQkFDM0JGLFNBQVMsQ0FBQ0csUUFBUSxDQUFDUixLQUFLLENBQUM7O29CQUcxQkQsRUFBRSxDQUFDVSxLQUFLLEVBQUU7O2dCQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRVAsQ0FBQztZQUVELE1BQU12RyxHQUFHLEdBQUcsdUJBQXVCaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxNQUFNNEIsSUFBSSxHQUFHMEYsVUFBVSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pDLE1BQU1rQixVQUFVLEdBQUdsQixVQUFVLEdBQUcsdUJBQXVCLEdBQUcsRUFBRTtZQUM1RCxNQUFNNUUsS0FBSyxHQUFHO2NBQUVuQixPQUFPLEVBQUUsQ0FBQytGLFVBQVUsR0FBR0ssVUFBVSxHQUFHL0M7WUFBUyxDQUFFO1lBQy9ELE1BQU0sQ0FBQzZELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc5SSxNQUFBLENBQUFTLE9BQUssQ0FBQzRGLFFBQVEsQ0FBQ2UsT0FBTyxDQUFDO1lBQ3ZELE1BQU0yQixXQUFXLEdBQUlDLENBQXVCLElBQUk7Y0FDL0NBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO2NBQ2xCLE1BQU1wQyxJQUFJLEdBQUdtQyxDQUFDLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQztjQUNsRGhCLFFBQVEsQ0FBQ2lCLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFdkMsSUFBSSxDQUFDO1lBQ2hELENBQUM7WUFFRCxNQUFNd0MsYUFBYSxHQUFJTCxDQUFzQixJQUFJO2NBQ2hELElBQUkxQixTQUFTLElBQUkwQixDQUFDLENBQUNNLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ25DTixDQUFDLENBQUNDLGNBQWMsRUFBRTtnQkFDbEI7Z0JBQ0E7O1lBRUYsQ0FBQztZQUVELE1BQU1NLE1BQU0sR0FBRyxNQUFPL0MsS0FBdUIsSUFBSTtjQUNoREEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsTUFBTVcsT0FBTyxHQUFHWixLQUFLLENBQUNnRCxhQUFhLENBQUNDLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7Y0FDNUUvQixhQUFhLENBQUMsS0FBSyxDQUFDO2NBRXBCLElBQUlQLE9BQU8sS0FBS3lCLFFBQVEsRUFBRTtjQUUxQixNQUFNakUsSUFBSSxHQUFHO2dCQUNaNEMsSUFBSTtnQkFDSkssS0FBSyxFQUFFVDtlQUNQO2NBQ0QsTUFBTXVDLEtBQUssR0FBaUI7Z0JBQzNCbkcsTUFBTSxFQUFFb0IsSUFBSTtnQkFDWjRFLGFBQWEsRUFBRTVFO2VBQ2Y7Y0FDRGtFLFdBQVcsQ0FBQzFCLE9BQU8sQ0FBQztjQUNwQixNQUFNRixNQUFNLENBQUN5QyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQ0MzSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQyxHQUFHO2NBQUEsR0FBTVUsS0FBSztjQUFFeUcsTUFBTSxFQUFFQTtZQUFNLEdBQzdDdkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytHLE9BQU87Y0FDUHBFLEdBQUcsRUFBRXVFLFVBQVU7Y0FDZnhILFNBQVMsRUFBRXdJLFVBQVU7Y0FDckJnQixlQUFlLEVBQUVsQyxVQUFVO2NBQzNCbUMsOEJBQThCLEVBQUUsSUFBSTtjQUNwQ0MsT0FBTyxFQUFFcEMsVUFBVSxHQUFHcUIsV0FBVyxHQUFHL0QsU0FBUztjQUM3QytFLFNBQVMsRUFBRXJDLFVBQVUsR0FBRzJCLGFBQWEsR0FBR3JFO1lBQVMsR0FFaEQ2QyxLQUFLLENBQ0csRUFDVjdILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUErQixHQUM3Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBd0ksSUFBSTtjQUFDaEksSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDZixDQUNEO1VBRVIsQ0FBQztVQUFDaUksT0FBQSxDQUFBaEQsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7OztVQ3hHRjs7VUFFQWlELE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FwQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTdILE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVU2SCxpQkFBaUJBLENBQUNWLE9BQU8sRUFBRUMsV0FBVyxFQUFFSyxVQUFVLEdBQUcsS0FBSztZQUN6RSxNQUFNckUsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUM5QyxNQUFNLENBQUM4RyxTQUFTLENBQUMsR0FBR3BLLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNEYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLENBQUN3QixLQUFLLEVBQUV3QyxRQUFRLENBQUMsR0FBR3JLLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNEYsUUFBUSxDQUF1QztjQUFFaUUsTUFBTSxFQUFFLEtBQUs7Y0FBRWxELE9BQU8sRUFBRTtZQUFFLENBQUUsQ0FBQztZQUM5RyxNQUFNbUQsWUFBWSxHQUFHMUMsS0FBSyxFQUFFeUMsTUFBTSxHQUFHekMsS0FBSyxDQUFDVCxPQUFPLEdBQUdBLE9BQU87WUFFNUQsSUFBSW9ELE1BQU0sR0FBRzlDLFVBQVUsR0FDcEI2QyxZQUFZLEdBQ1hBLFlBQVksR0FDWixFQUFFLEdBQ0hBLFlBQVksS0FBSyxFQUFFLElBQUlBLFlBQVksS0FBS3ZGLFNBQVMsR0FDakRxQyxXQUFXLEdBQ1hrRCxZQUFZLElBQUlsRCxXQUFXLElBQUksRUFBRTtZQUVwQyxPQUFPO2NBQUVoRSxHQUFHO2NBQUUrRyxTQUFTO2NBQUV2QyxLQUFLLEVBQUUyQyxNQUFNO2NBQUVIO1lBQVEsQ0FBRTtVQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXJLLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBVU87VUFBVyxTQUFVMkIsU0FBU0EsQ0FBQztZQUNyQ2lGLElBQUk7WUFFSnpHLFNBQVM7WUFDVDhGLFdBQVc7WUFDWDdGO1VBQVEsQ0FDSztZQUNiLE1BQU0rQixHQUFHLEdBQUcsMkJBQTJCaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUV6RSxPQUNDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxNQUFBLENBQUFrSixLQUFLO2NBQUNySyxTQUFTLEVBQUVnQztZQUFHLEdBQ3BCcEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS21HLElBQUksQ0FBTSxFQUNmN0csTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBR04sU0FBUyxFQUFDO1lBQUksR0FBRThGLFdBQVcsQ0FBSyxFQUNsQzdGLFFBQVEsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb0UsTUFBQSxHQUFBcEUsT0FBQTtVQVVPO1VBQVUsU0FBVXNGLFdBQVdBLENBQUM7WUFDdENuRSxHQUFHO1lBQ0hzSixLQUFLO1lBQ0xuRyxHQUFHLEdBQUcsRUFBRTtZQUNSb0csTUFBTSxHQUFHLFVBQVU7WUFDbkJ6SSxJQUFJO1lBQ0paLE9BQU87WUFDUGxCO1VBQVMsQ0FDVTtZQUNuQixJQUFJZ0MsR0FBRyxHQUFHLGdCQUFnQmhDLFNBQVMsSUFBSSxFQUFFLElBQUl1SyxNQUFNLEVBQUU7WUFFckQsSUFBSUQsS0FBSyxFQUFFdEksR0FBRyxJQUFJLFNBQVNzSSxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDdEosR0FBRyxJQUFJQSxHQUFHLEtBQUssRUFBRSxFQUFFO2NBQ3ZCQSxHQUFHLEdBQUcsMkJBQTJCdUosTUFBTSxJQUFJekksSUFBSSxHQUFHLEdBQUdBLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUzs7WUFHM0UsSUFBSVosT0FBTyxFQUFFLE9BQU90QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUUsR0FBR2dDLEdBQUc7WUFBd0IsRUFBSTtZQUN0RSxPQUFPcEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJELE1BQUEsQ0FBQUcsS0FBSztjQUFDcEQsR0FBRyxFQUFFQSxHQUFHO2NBQUVtRCxHQUFHLEVBQUVBLEdBQUc7Y0FBRW5FLFNBQVMsRUFBRWdDO1lBQUcsRUFBSTtVQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQXBDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEySyxNQUFBLEdBQUEzSyxPQUFBO1VBRU87VUFBVyxTQUFVNEssYUFBYUEsQ0FBQztZQUN6QzdFLEtBQUs7WUFDTDhFLEtBQUs7WUFDTEMsT0FBTyxHQUFHO1VBQU8sQ0FLakI7WUFDQSxPQUFPL0ssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tLLE1BQUEsQ0FBQUksS0FBSztjQUFDOUksSUFBSSxFQUFFNkk7WUFBTyxHQUFHL0UsS0FBSyxDQUFTO1VBQzdDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUF4RSxNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQWdMLEtBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQTs7Ozs7VUFLQSxNQUFNaUwsaUJBQWlCLEdBQUdBLENBQUM7WUFBRXJHLElBQUk7WUFBRXNHO1VBQUssQ0FBRSxLQUFJO1lBQzdDLE1BQU1DLG1CQUFtQixHQUFHQSxDQUFDO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQzFDLFFBQVFBLE1BQU07Z0JBQ2IsS0FBSyxNQUFNO2tCQUNWLE9BQU9yTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtvQkFBS04sU0FBUyxFQUFDO2tCQUFrQyxHQUFFK0ssS0FBSyxDQUFPO2dCQUV2RSxLQUFLLFNBQVM7a0JBQ2IsT0FBT25MLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO29CQUFLTixTQUFTLEVBQUM7a0JBQXFDLEdBQUUrSyxLQUFLLENBQU87Z0JBRTFFLEtBQUssU0FBUztrQkFDYixPQUFPbkwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7b0JBQUtOLFNBQVMsRUFBQztrQkFBcUMsR0FBRStLLEtBQUssQ0FBTztnQkFFMUU7a0JBQ0MsT0FBT25MLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQXdJLElBQUk7b0JBQUM1SixTQUFTLEVBQUMsSUFBSTtvQkFBQzRCLElBQUksRUFBRTtrQkFBUyxFQUFJOztZQUVsRCxDQUFDO1lBRUQsT0FDQ2hDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN1SyxLQUFBLENBQUFsRyxJQUFJO2NBQUMzRSxTQUFTLEVBQUMsVUFBVTtjQUFDOEUsSUFBSSxFQUFFTCxJQUFJLENBQUM3QjtZQUFHLEdBQ3hDaEQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBLLG1CQUFtQjtjQUFDQyxNQUFNLEVBQUV4RyxJQUFJLENBQUN3RztZQUFNLEVBQUksQ0FDdEM7VUFFVCxDQUFDO1VBRU07VUFBVyxTQUFVQyxhQUFhQSxDQUFDO1lBQUVDLElBQUk7WUFBRW5MO1VBQVMsQ0FBRTtZQUM1RCxNQUFNZ0MsR0FBRyxHQUFHLDZCQUE2QmhDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0UsTUFBTW9MLGFBQWEsR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQzVHLElBQUksRUFBRXNHLEtBQUssS0FBS25MLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3SyxpQkFBaUI7Y0FBQ3JHLElBQUksRUFBRUEsSUFBSTtjQUFFeUUsR0FBRyxFQUFFNkIsS0FBSztjQUFFQSxLQUFLLEVBQUVBLEtBQUssR0FBRztZQUFDLEVBQUksQ0FBQztZQUNoSCxPQUFPbkwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0M7WUFBRyxHQUFHb0osYUFBYSxDQUFPO1VBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBeEwsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVeUwsV0FBV0EsQ0FBQztZQUFFdko7VUFBSyxDQUFFO1lBQy9DLE9BQ0NuQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBOEIsR0FDaERKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUlOLFNBQVMsRUFBQztZQUE0QixHQUFFK0IsS0FBSyxDQUFNLENBQzlDO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXdKLGNBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBMkwsWUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUFvRSxNQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVNEwsVUFBVUEsQ0FBQztZQUFFekwsU0FBUztZQUFFQyxRQUFRO1lBQUV5TCxLQUFLO1lBQUV2SCxHQUFHO1lBQUVMLE1BQU0sR0FBRyxNQUFNO1lBQUUvQixLQUFLO1lBQUVvSjtVQUFJLENBQUU7WUFDdEcsTUFBTW5KLEdBQUcsR0FBRyxpQ0FBaUM4QixNQUFNLEdBQUc5RCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3hGLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FDbEJwQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBbUIsR0FDcEMrQixLQUFLLElBQUluQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0wsWUFBQSxDQUFBRixXQUFXO2NBQUN2SixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUN2Q25DLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVNOLFNBQVMsRUFBQztZQUFzQixHQUFFQyxRQUFRLENBQVcsQ0FDckQsRUFDVGtMLElBQUksSUFBSXZMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNpTCxjQUFBLENBQUFMLGFBQWE7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVuTCxTQUFTLEVBQUM7WUFBc0IsRUFBRyxFQUN0RTBMLEtBQUssSUFBSTlMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxNQUFBLENBQUFHLEtBQUs7Y0FBQ3BELEdBQUcsRUFBRTBLLEtBQUs7Y0FBRXZILEdBQUcsRUFBRUEsR0FBRztjQUFFbkUsU0FBUyxFQUFDO1lBQW9CLEVBQUcsQ0FDbkU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQTJMLFdBQUEsR0FBQTlMLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFVLFNBQVUrTCxXQUFXQSxDQUFDdkosS0FBSztZQUMzQyxNQUFNa0gsS0FBSyxHQUFHO2NBQ2JzQyxjQUFjLEVBQUUsR0FBRztjQUNuQkMsY0FBYyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Y0FDbEZDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Y0FDcEJDLFNBQVMsRUFBRTthQUNYO1lBQ0RwTSxNQUFBLENBQUFTLE9BQUssQ0FBQzhDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU04SSxVQUFVLEdBQUcsSUFBSU4sV0FBQSxDQUFBdEwsT0FBVSxFQUFFO2NBQ25DNEwsVUFBVSxDQUFDQyxXQUFXLENBQUM7Z0JBQUUsR0FBRzNDLEtBQUs7Z0JBQUUsR0FBR2xIO2NBQUssQ0FBRSxDQUFDO1lBQy9DLENBQUMsRUFBRSxFQUFFLENBQUM7VUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBekMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNNLE9BQUEsR0FBQXRNLE9BQUE7VUFFTztVQUFVLFNBQVV1TSxhQUFhQSxDQUFDaEYsSUFBSSxFQUFFaUYsS0FBSyxFQUFFaEssS0FBSyxHQUFHLEVBQUU7WUFDL0QsTUFBTVksR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU1nRyxHQUFHLEdBQUcsV0FBVzlCLElBQUksT0FBTztZQUNsQyxNQUFNa0YsR0FBRyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ3RELEdBQUcsQ0FBQztZQUVyQ3RKLE1BQUEsQ0FBQVMsT0FBSyxDQUFDOEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDa0osS0FBSyxJQUFJQyxHQUFHLEVBQUU7Y0FDbkIsTUFBTUcsS0FBSyxHQUFHeEosR0FBRyxDQUFDSSxPQUFPLENBQUNxSixnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7Y0FFekQsTUFBTUMsS0FBSyxHQUFHLEVBQUU7Y0FDaEJGLEtBQUssRUFBRUcsT0FBTyxDQUFFbkksSUFBaUIsSUFBSTtnQkFDcEMsTUFBTTtrQkFBRTFDLEtBQUs7a0JBQUUrRDtnQkFBVyxDQUFFLEdBQUdyQixJQUFJLENBQUNvSSxPQUFPO2dCQUMzQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUM7a0JBQ1ZDLE9BQU8sRUFBRXRJLElBQUk7a0JBQ2J1SSxPQUFPLEVBQUU7b0JBQ1JqTCxLQUFLO29CQUNMK0Q7O2lCQUVELENBQUM7Y0FDSCxDQUFDLENBQUM7Y0FDRixNQUFNbUgsR0FBRyxHQUFHLElBQUFkLE9BQUEsQ0FBQWUsTUFBTSxFQUFDO2dCQUNsQkMsWUFBWSxFQUFFLGtCQUFrQjtnQkFDaENSLEtBQUs7Z0JBRUxTLFdBQVcsRUFBRUEsQ0FBQSxLQUFLO2tCQUNqQixJQUFJLENBQUNILEdBQUcsQ0FBQ0ksV0FBVyxFQUFFLEVBQUU7b0JBQ3ZCZCxZQUFZLENBQUNySCxPQUFPLENBQUNnRSxHQUFHLEVBQUUsTUFBTSxDQUFDO29CQUNqQytELEdBQUcsQ0FBQ0ssT0FBTyxFQUFFO29CQUNiOztrQkFFREwsR0FBRyxDQUFDTSxRQUFRLEVBQUU7a0JBQ2QsT0FBTyxJQUFJO2dCQUNaLENBQUM7Z0JBRUQsR0FBR2xMO2VBQ0gsQ0FBQztjQUNGNEssR0FBRyxDQUFDTyxLQUFLLEVBQUU7WUFDWixDQUFDLEVBQUUsQ0FBQ25CLEtBQUssQ0FBQyxDQUFDO1lBRVgsT0FBTztjQUFFcEo7WUFBRyxDQUFFO1VBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUF3SyxLQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQTZOLE1BQUEsR0FBQTdOLE9BQUE7VUFFTztVQUFVLFNBQVU4TixnQkFBZ0JBLENBQUNDLFNBQVMsRUFBRUMsUUFBUTtZQUM5RCxNQUFNLENBQUN4QixLQUFLLEVBQUV5QixRQUFRLENBQUMsR0FBR0wsS0FBSyxDQUFDeEgsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN5RSxLQUFLLEVBQUVxRCxRQUFRLENBQUMsR0FBR04sS0FBSyxDQUFDeEgsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q3dILEtBQUssQ0FBQ3RLLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU02SyxVQUFVLEdBQUcsSUFBSU4sTUFBQSxDQUFBTyxZQUFZLENBQUNMLFNBQVMsQ0FBQztjQUM5QyxNQUFNTSxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsSUFBSXpHLEtBQUssR0FBR3VHLFVBQVUsQ0FBQ3ZHLEtBQUs7Z0JBQzVCc0csUUFBUSxDQUFDdEcsS0FBSyxDQUFDO2dCQUNmcUcsUUFBUSxDQUFDRSxVQUFVLENBQUMzQixLQUFLLENBQUM7Z0JBQzFCLElBQUkyQixVQUFVLENBQUMzQixLQUFLLEVBQUV3QixRQUFRLENBQUNwRyxLQUFLLENBQUM7Y0FDdEMsQ0FBQztjQUNEdUcsVUFBVSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWEYsVUFBVSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDdEMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNRSxPQUFPLEdBQUcvQixLQUFLLElBQUksQ0FBQyxDQUFDM0IsS0FBSztZQUNoQyxPQUFPLENBQUMwRCxPQUFPLEVBQUUxRCxLQUFLLENBQUM7VUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUE5SyxNQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFVLFNBQVV3TyxTQUFTQSxDQUFBO1lBQ25DLE9BQ0N6TyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBaUIsR0FDL0JKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFRLEVBQU8sRUFDOUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFRLEVBQU8sRUFDOUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFhLEVBQU8sRUFDbkNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFjLEVBQU8sRUFDcENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFRLEVBQU8sRUFDOUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFhLEVBQU8sRUFDbkNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFjLEVBQU8sRUFDcENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFTLEVBQU8sRUFDL0JKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFhLEVBQU8sQ0FDOUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeU8sUUFBQSxHQUFBek8sT0FBQTtVQUNPO1VBQVksU0FBVTBPLGFBQWFBLENBQUE7WUFDekMsT0FDQzNPLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUF1QixHQUNyQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dPLFFBQUEsQ0FBQUUsT0FBTztjQUFDQyxNQUFNO2NBQUMzTSxJQUFJLEVBQUM7WUFBUyxFQUFHLENBQzVCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQTBJLE1BQUEsR0FBQTNLLE9BQUE7VUFDQSxJQUFBb0UsTUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxQyxXQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVNk8sUUFBUUEsQ0FBQztZQUFFaEUsS0FBSztZQUFFaUU7VUFBVSxDQUFFO1lBQ3pELElBQUksQ0FBQ0EsVUFBVSxFQUFFLE9BQU8vTyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBcU0sYUFBYSxPQUFHO1lBQ3pDLE1BQU07Y0FBRXhNLEtBQUs7Y0FBRTZNLFFBQVE7Y0FBRTlJO1lBQVcsQ0FBRSxHQUFHNEUsS0FBSyxDQUFDbUUsUUFBUTtZQUV2RCxPQUNDalAsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQStCLEdBQ2pESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBc0IsR0FDcENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFpQixHQUMvQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBSU4sU0FBUyxFQUFDO1lBQVUsR0FBRStCLEtBQUssQ0FBTSxFQUNyQ25DLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1OLFNBQVMsRUFBQztZQUFJLEdBQUU0TyxRQUFRLENBQVEsQ0FDakMsRUFDTmhQLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxNQUFBLENBQUFHLEtBQUs7Y0FDTHBELEdBQUcsRUFBQyxvR0FBb0c7Y0FDeEdtRCxHQUFHLEVBQUM7WUFBYyxFQUNqQixDQUNHLEVBQ052RSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBc0IsR0FDcENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrSyxNQUFBLENBQUFJLEtBQUs7Y0FBQzlJLElBQUksRUFBQztZQUFNLEdBQUVnRSxXQUFXLENBQVMsQ0FDbkMsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBbEcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWlQLE9BQUEsR0FBQWpQLE9BQUE7VUFFTztVQUFXLFNBQVVrUCxVQUFVQSxDQUFDO1lBQUU5TyxRQUFRO1lBQUVELFNBQVM7WUFBRWdQO1VBQVEsQ0FBRTtZQUN2RSxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsTUFBTWhOLEdBQUcsR0FBRyx3QkFBd0JoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3RFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FDakJnTixRQUFRLElBQ1JwUCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBMkIsR0FDekNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3TyxPQUFBLENBQUFULFNBQVMsT0FBRyxFQUNacE8sUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUVPO1VBQVcsU0FBVW9QLGFBQWFBLENBQUM7WUFBRWhQLFFBQVE7WUFBRUQsU0FBUztZQUFFZ1AsUUFBUTtZQUFFRSxJQUFJLEdBQUd0SztVQUFTLENBQUU7WUFDNUYsTUFBTXVLLEtBQUssR0FBRztjQUNiQyxFQUFFLEVBQUUsY0FBYztjQUNsQi9PLE9BQU8sRUFBRTthQUNUO1lBQ0QsTUFBTWdQLE9BQU8sR0FBR0YsS0FBSyxDQUFDRCxJQUFJLENBQUMsSUFBSUMsS0FBSyxDQUFDOU8sT0FBTztZQUM1QyxNQUFNMkIsR0FBRyxHQUFHLG1CQUFtQnFOLE9BQU8sR0FBR3JQLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFM0UsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0M7WUFBRyxHQUNqQi9CLFFBQVEsRUFDUitPLFFBQVEsSUFDUnBQLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUEyQixHQUN6Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQXNNLE9BQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRVMsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUVwQyxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUF0UCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBaVAsT0FBQSxHQUFBalAsT0FBQTtVQUVPO1VBQVcsU0FBVXlQLGdCQUFnQkEsQ0FBQztZQUFFclAsUUFBUTtZQUFFRCxTQUFTO1lBQUVnUDtVQUFRLENBQUU7WUFDN0UsSUFBSSxDQUFDQSxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBQzFCLE1BQU1oTixHQUFHLEdBQUcsb0JBQW9CaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsRSxPQUNDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQztZQUFHLEdBQ2pCZ04sUUFBUSxJQUNScFAsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQTJCLEdBQ3pDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd08sT0FBQSxDQUFBVCxTQUFTLE9BQUcsRUFDWnBPLFFBQVEsQ0FDSixDQUVQLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwUCxhQUFBLEdBQUExUCxPQUFBO1VBRU87VUFBVSxTQUFVMlAsU0FBU0EsQ0FBQztZQUFFdE8sT0FBTztZQUFFYSxLQUFLO1lBQUU5QixRQUFRO1lBQUVDLEVBQUUsR0FBRztVQUFJLENBQUU7WUFDM0UsTUFBTW1ILE9BQU8sR0FBR25ILEVBQXVCO1lBRXZDLElBQUlnQixPQUFPLEVBQUU7Y0FDWixPQUNDdEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Z0JBQVFOLFNBQVMsRUFBQztjQUFxQixHQUN0Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lQLGFBQUEsQ0FBQUUsWUFBWTtnQkFBQ0MsTUFBTSxFQUFDLEtBQUs7Z0JBQUM1TyxLQUFLLEVBQUM7Y0FBTyxFQUFHLEVBQzFDYixRQUFRLENBQ0Q7O1lBR1gsT0FDQ0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUU4sU0FBUyxFQUFDO1lBQXFCLEdBQ3RDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0csT0FBTyxRQUFFdEYsS0FBSyxDQUFXLEVBQ3pCOUIsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVUwUCxZQUFZQSxDQUFDO1lBQUUxUDtVQUFRLENBQUU7WUFDbkQsT0FBT0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQVksR0FBRUMsUUFBUSxDQUFRO1VBQ3REOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXFDLFdBQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUVPO1VBQVUsU0FBVStQLGFBQWFBLENBQUM7WUFBRTNQLFFBQVE7WUFBRXNCLE9BQU87WUFBRUcsUUFBUTtZQUFFLEdBQUdXO1VBQUssQ0FBRTtZQUNqRixNQUFNLENBQUN3TixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbFEsTUFBQSxDQUFBUyxPQUFLLENBQUM0RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU04SixXQUFXLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzlCRCxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU12TyxPQUFPLEVBQUU7Y0FDZnVPLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE9BQ0NsUSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFZCxPQUFPLEVBQUV3TyxXQUFXO2NBQUVyTyxRQUFRLEVBQUVBLFFBQVEsSUFBSW1PO1lBQVUsR0FDdkU1UCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVStQLGlCQUFpQkEsQ0FBQztZQUFFL1AsUUFBUTtZQUFFeUIsUUFBUTtZQUFFMUIsU0FBUztZQUFFdUIsT0FBTztZQUFFLEdBQUdjO1VBQUssQ0FBRTtZQUNoRyxNQUFNLENBQUN3TixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbFEsTUFBQSxDQUFBUyxPQUFLLENBQUM0RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU04SixXQUFXLEdBQUcsTUFBTTNKLEtBQUssSUFBRztjQUNqQ0EsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJ5SixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU12TyxPQUFPLEVBQUU7Y0FFZnFHLFVBQVUsQ0FBQyxNQUFLO2dCQUNma0ksYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1IsQ0FBQztZQUNELElBQUlELFVBQVUsRUFBRTtjQUNmLE9BQ0NqUSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUU4sU0FBUyxFQUFDO2NBQXlDLEdBQzFESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBc00sT0FBTztnQkFBQ0MsTUFBTTtnQkFBQzNNLElBQUksRUFBQztjQUFTLEVBQUcsQ0FDekI7O1lBR1gsTUFBTUUsR0FBRyxHQUFHaEMsU0FBUyxHQUFHLEdBQUdBLFNBQVMsaUJBQWlCLEdBQUcsZ0JBQWdCO1lBQ3hFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQTZPLGFBQWE7Y0FBQ2pRLFNBQVMsRUFBRWdDLEdBQUc7Y0FBQSxHQUFNSyxLQUFLO2NBQUVkLE9BQU8sRUFBRXdPLFdBQVc7Y0FBRXJPLFFBQVEsRUFBRUEsUUFBUSxJQUFJbU87WUFBVSxHQUM5RjVQLFFBQVEsQ0FDTTtVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVcVEsZUFBZUEsQ0FBQztZQUFFbEosT0FBTztZQUFFbUosSUFBSSxHQUFHO1VBQUksQ0FBRTtZQUNsRSxNQUFNbE4sR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCdEQsTUFBQSxDQUFBUyxPQUFLLENBQUM4QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNc0QsSUFBSSxHQUFHeEQsR0FBRyxDQUFDSSxPQUFPO2NBQ3hCLElBQUkrTSxZQUFZO2NBQ2hCLElBQUlDLENBQUMsR0FBRyxDQUFDO2NBQ1QsTUFBTUMsUUFBUSxHQUFHdEwsVUFBVSxDQUFDdUwsV0FBVyxDQUFDLE1BQUs7Z0JBQzVDOUosSUFBSSxDQUFDK0osU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUVuQ2hLLElBQUksQ0FBQytKLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQkFFakM5SSxVQUFVLENBQUMsTUFBSztrQkFDZm5CLElBQUksQ0FBQ2tLLFNBQVMsR0FBRzNKLE9BQU8sQ0FBQ3FKLENBQUMsQ0FBQztrQkFDM0I1SixJQUFJLENBQUMrSixTQUFTLENBQUNDLE1BQU0sQ0FBQyxhQUFhLENBQUM7a0JBQ3BDaEssSUFBSSxDQUFDK0osU0FBUyxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxDQUFDLEVBQUVQLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBRVosSUFBSVMsSUFBSSxHQUFHLEdBQUc7Z0JBRWQsSUFBSVAsQ0FBQyxLQUFLckosT0FBTyxDQUFDNkosTUFBTSxHQUFHLENBQUMsRUFBRVIsQ0FBQyxHQUFHLENBQUM7Z0JBQ25DQSxDQUFDLEVBQUU7Y0FDSixDQUFDLEVBQUVGLElBQUksQ0FBQztZQUNULENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixPQUNDdlEsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTTJDLEdBQUcsRUFBRUEsR0FBRztjQUFFakQsU0FBUyxFQUFDO1lBQWtCLEdBQzFDZ0gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNMO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFwSCxNQUFBLEdBQUFDLE9BQUE7VUFVTztVQUFVLFNBQVU0UCxZQUFZQSxDQUFDcE4sS0FBeUI7WUFDaEUsT0FDQ3pDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQ0NOLFNBQVMsRUFBQyxlQUFlO2NBQ3pCNEQsS0FBSyxFQUFFO2dCQUNOOUMsS0FBSyxFQUFFdUIsS0FBSyxDQUFDdkIsS0FBSyxJQUFJLE1BQU07Z0JBQzVCNE8sTUFBTSxFQUFFck4sS0FBSyxDQUFDcU4sTUFBTSxJQUFJLE1BQU07Z0JBQzlCb0IsVUFBVSxFQUFFek8sS0FBSyxDQUFDME8sS0FBSyxJQUFJLEVBQUU7Z0JBQzdCQyxZQUFZLEVBQUUzTyxLQUFLLENBQUM0TyxLQUFLLElBQUk7O1lBQzdCLEdBRURyUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNc0QsS0FBSyxFQUFFO2dCQUFFc04sT0FBTyxFQUFFN08sS0FBSyxDQUFDOE8sYUFBYSxHQUFHLE1BQU0sR0FBRztjQUFPO1lBQUUsRUFBUyxDQUNuRTtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBdlIsTUFBQSxHQUFBQyxPQUFBO1VBU08sV0FSUDs7Ozs7OztVQVFpQixTQUFVdVIsVUFBVUEsQ0FBQztZQUFFclAsS0FBSztZQUFFOUI7VUFBUSxDQUFFO1lBQ3hELE9BQ0NMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUF1QixHQUNyQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS3lCLEtBQUssQ0FBTSxFQUNmOUIsUUFBUSxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQVVPO1VBQVUsU0FBVXdSLFFBQVFBLENBQUM7WUFBRXJSLFNBQVM7WUFBRW9ILElBQUk7WUFBRXNELEtBQUs7WUFBRXpLLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQU0sQ0FBaUI7WUFDbkcsTUFBTW9SLElBQUksR0FBR3hILE1BQU0sQ0FBQ3dILElBQUksQ0FBQzVHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUNBLEtBQUssQ0FBQzZHLGNBQWMsQ0FBQ25LLElBQUksQ0FBQyxJQUFJLENBQUNrSyxJQUFJLEVBQUU7Y0FDekN6TyxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFZc0UsSUFBSSxxQ0FBcUMsRUFBRXNELEtBQUssQ0FBQztjQUMxRSxPQUFPLElBQUk7O1lBRVosTUFBTUssS0FBSyxHQUFHdUcsSUFBSSxDQUFDRSxPQUFPLENBQUNwSyxJQUFJLENBQUM7WUFDaEMsTUFBTUMsT0FBTyxHQUFHbkgsRUFBRTtZQUNsQixNQUFNOEIsR0FBRyxHQUFHLGFBQWFoQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzFDLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRyxPQUFPO2NBQ1BySCxTQUFTLEVBQUVnQyxHQUFHO2NBQUEsb0JBQ0kwSSxLQUFLLENBQUN0RCxJQUFJLENBQUMsQ0FBQ3RCLFdBQVc7Y0FBQSxjQUM3QjRFLEtBQUssQ0FBQ3RELElBQUksQ0FBQyxDQUFDckYsS0FBSztjQUFBLGFBQ2xCZ0o7WUFBSyxHQUVmOUssUUFBUSxDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUF3TixLQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQW9FLE1BQUEsR0FBQXBFLE9BQUE7VUFjTztVQUFVLFNBQVU0UixRQUFRQSxDQUFDO1lBQUVDLEtBQUs7WUFBRWxOO1VBQUksQ0FBa0M7WUFDbEYsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRW1OLFFBQVE7Y0FBRXZLO1lBQUksQ0FBRSxHQUFHNUMsSUFBSTtZQUMvQixPQUNDaUosS0FBQSxDQUFBbk4sYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBb0IsR0FDakMwUixLQUFLLElBQUlqRSxLQUFBLENBQUFuTixhQUFBO2NBQUlOLFNBQVMsRUFBQztZQUFrQixHQUFFMFIsS0FBSyxDQUFNLEVBQ3ZEakUsS0FBQSxDQUFBbk4sYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBbUIsR0FDckN5TixLQUFBLENBQUFuTixhQUFBLENBQUMyRCxNQUFBLENBQUFHLEtBQUs7Y0FBQ3BFLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ2dCLEdBQUcsRUFBRTJRO1lBQVEsRUFBSSxFQUNuRGxFLEtBQUEsQ0FBQW5OLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWlCLEdBQUVvSCxJQUFJLENBQVEsQ0FDdEMsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119