System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.04/config", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/form", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/image", "pragmate-ui@1.0.0-beta.2/toast", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/empty", "pragmate-ui@1.0.0-beta.2/alert", "pragmate-ui@1.0.0-beta.2/link", "js-confetti@0.12.0", "driver.js@1.3.1", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.2/spinner", "@aimpact/chat@1.0.2/shared/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useDriverTour, useTextsCallback, AppLoader, PreloadScreen, NotFound, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, RotatingMessage, SkeletonText, SubDivider, TourStep, UserData, __beyond_pkg, hmr;
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
    CoinsModal: void 0,
    OwnerImage: void 0,
    RequestCreditsForm: void 0,
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
    RadioButton: void 0,
    RadioGroup: void 0,
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
    }, function (_aimpactAilearnApp016Dev04Config) {
      dependency_4 = _aimpactAilearnApp016Dev04Config;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_5 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Form) {
      dependency_6 = _pragmateUi100Beta2Form;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp016Dev04ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_8 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Image) {
      dependency_9 = _pragmateUi100Beta2Image;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_10 = _pragmateUi100Beta2Toast;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_11 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Base) {
      dependency_12 = _pragmateUi100Beta2Base;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_13 = _pragmateUi100Beta2Empty;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_14 = _pragmateUi100Beta2Alert;
    }, function (_pragmateUi100Beta2Link) {
      dependency_15 = _pragmateUi100Beta2Link;
    }, function (_jsConfetti2) {
      dependency_16 = _jsConfetti2;
    }, function (_driverJs) {
      dependency_17 = _driverJs;
    }, function (_beyondJsKernel019Texts) {
      dependency_18 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta2Spinner) {
      dependency_19 = _pragmateUi100Beta2Spinner;
    }, function (_aimpactChat102SharedComponents) {
      dependency_20 = _aimpactChat102SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/base', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['pragmate-ui/link', dependency_15], ['js-confetti', dependency_16], ['driver.js', dependency_17], ['@beyond-js/kernel/texts', dependency_18], ['pragmate-ui/spinner', dependency_19], ['@aimpact/chat/shared/components', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/components/ui');
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
        hash: 1193312247,
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
            const cls = `percentage ${percent < 20 ? 'low' : percent < 60 ? 'medium' : 'high'}`;
            return _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: cls
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
        hash: 2478664013,
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
              className: "beauty-modal"
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 2281896928,
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

      /***********************************
      INTERNAL MODULE: ./credits/ai-button
      ***********************************/

      ims.set('./credits/ai-button', {
        hash: 2003207470,
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
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./credits/coins-modal
      *************************************/

      ims.set('./credits/coins-modal', {
        hash: 2895864722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _requestCredits = require("./request-credits");
          /*bundle*/ //the nexts are in the same bundle

          function CoinsModal({
            owner,
            globalTexts,
            show,
            onClose,
            onConsume
          }) {
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement(_requestCredits.RequestCreditsForm, {
              onSuccess: onClose,
              onClose: onClose,
              onConsume: onConsume,
              globalTexts: globalTexts,
              owner: owner
            }));
          }
          0;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/image
      *******************************/

      ims.set('./credits/image', {
        hash: 4082702591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerImage = OwnerImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OwnerImage({
            owner
          }) {
            if (!owner.photoUrl) {
              return _react.default.createElement(_icons.AppIcon, {
                icon: "school",
                className: "pui-image"
              });
            }
            return _react.default.createElement(_image.Image, {
              src: owner.photoUrl,
              className: "circle"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./credits/request-credits
      *****************************************/

      ims.set('./credits/request-credits', {
        hash: 3296607068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsForm = RequestCreditsForm;
          var _react = require("react");
          var _errorRenderer = require("../error-renderer");
          var _aiButton = require("../ai-button");
          var _components = require("pragmate-ui/components");
          var _processContainer = require("../page/process-container");
          var _image = require("./image");
          /*bundle*/
          function RequestCreditsForm({
            onClose,
            globalTexts,
            owner,
            onConsume,
            onCancel,
            onSuccess
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const actionTexts = globalTexts.actions;
            const texts = globalTexts.requestCredits;
            onCancel = onCancel ?? onClose;
            // texts = texts.coins.modal;
            const onConfirm = async () => {
              try {
                setFetching(true);
                const answer = await onConsume();
                if (!answer.status) {
                  const errors = {
                    48: 'NO_CREDITS'
                  };
                  throw new Error(errors[answer.error.code]);
                }
                if (onSuccess) onSuccess();
              } catch (e) {
                console.error(e);
                setError(texts.alerts.noCredits);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("div", {
              className: "modal__form request__container text-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("span", null, owner.name), _react.default.createElement("span", null, texts.ownerDescription))), _react.default.createElement("h6", null, texts.action), _react.default.createElement("section", {
              className: "flex-container actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actionTexts.cancel), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onConfirm
            }, actionTexts.continue)), _react.default.createElement("div", {
              className: "mt-2 text-center"
            }, _react.default.createElement("span", {
              className: "small-text"
            }, texts.detail)), _react.default.createElement(_processContainer.ProcessContainer, {
              fetching: fetching,
              key: "processing"
            }));
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
        hash: 3565138335,
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
        hash: 183968273,
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

      /*****************************
      INTERNAL MODULE: ./radio/index
      *****************************/

      ims.set('./radio/index', {
        hash: 2799162414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/ // components/radioButton.tsx

          function RadioButton({
            label,
            onChange,
            ...rest
          }) {
            const inputRef = React.useRef(null);
            const handleLabelChange = event => {
              if (inputRef.current) {
                const changeEvent = new Event('change', {
                  bubbles: true,
                  cancelable: true
                });
                inputRef.current.dispatchEvent(changeEvent);
              }
            };
            return React.createElement("label", {
              className: "radio-button",
              onChange: handleLabelChange
            }, React.createElement("span", null, React.createElement("input", {
              type: "radio",
              ref: inputRef,
              onChange: onChange,
              ...rest
            }), React.createElement(_framerMotion.motion.div, {
              className: "radio-button__custom",
              animate: {
                scale: rest.checked ? 1.1 : 1
              },
              transition: {
                duration: 0.2
              }
            }, rest.checked && React.createElement(_framerMotion.motion.div, {
              className: "radio-button__inner",
              layout: true
            }))), label);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./radio/radio-group
      ***********************************/

      ims.set('./radio/radio-group', {
        hash: 40498085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioGroup = RadioGroup;
          var React = require("react");
          /*bundle*/ // components/radio-group.tsx

          function RadioGroup({
            children,
            value,
            onChange
          }) {
            return React.createElement("div", null, React.Children.map(children, child => {
              // Check if child is a valid element and if it conforms to the RadioButtonWithProps type
              if (React.isValidElement(child) && typeof child.props.value === 'string') {
                // Clone the element with new props
                return React.cloneElement(child, {
                  checked: child.props.value === value,
                  onChange: () => onChange(child.props.value)
                });
              }
              return child;
            }));
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
        "im": "./credits/ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./credits/ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./credits/coins-modal",
        "from": "CoinsModal",
        "name": "CoinsModal"
      }, {
        "im": "./credits/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
      }, {
        "im": "./credits/request-credits",
        "from": "RequestCreditsForm",
        "name": "RequestCreditsForm"
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
        "im": "./radio/index",
        "from": "RadioButton",
        "name": "RadioButton"
      }, {
        "im": "./radio/radio-group",
        "from": "RadioGroup",
        "name": "RadioGroup"
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
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./credits/ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./credits/ai-button').AIIconButton : value);
        (require || prop === 'CoinsModal') && _export("CoinsModal", CoinsModal = require ? require('./credits/coins-modal').CoinsModal : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./credits/image').OwnerImage : value);
        (require || prop === 'RequestCreditsForm') && _export("RequestCreditsForm", RequestCreditsForm = require ? require('./credits/request-credits').RequestCreditsForm : value);
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
        (require || prop === 'RadioButton') && _export("RadioButton", RadioButton = require ? require('./radio/index').RadioButton : value);
        (require || prop === 'RadioGroup') && _export("RadioGroup", RadioGroup = require ? require('./radio/radio-group').RadioGroup : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdG9hc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwiZGVzY3JpcHRpb24iLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWwiLCJoYW5kbGVDb25maXJtIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsIkZyYWdtZW50IiwiQ29uZmlybU1vZGFsIiwiX3VzZUNvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY29udGVudCIsInBsYWNlaG9sZGVyIiwibGluZUJyZWFrIiwiZWRpdGFibGUiLCJuYW1lIiwiQ29udHJvbCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiY29udHJvbENscyIsIm9yaWdpbmFsIiwic2V0T3JpZ2luYWwiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaXNPdXRTaWRlIiwic2V0VmFsdWUiLCJlZGl0ZWQiLCJjb250ZW50VmFsdWUiLCJ0b1Nob3ciLCJlbnN1cmUiLCJoYW5kbGVDbGljayIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwib25DbG9zZSIsIm9uQ29uc3VtZSIsIk1vZGFsIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25TdWNjZXNzIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIm9uQ2FuY2VsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwidGV4dHMiLCJyZXF1ZXN0Q3JlZGl0cyIsImFuc3dlciIsInN0YXR1cyIsImVycm9ycyIsIkVycm9yIiwiY29kZSIsImFsZXJ0cyIsIm5vQ3JlZGl0cyIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJvd25lckRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsImRldGFpbCIsIlByb2Nlc3NDb250YWluZXIiLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5IiwiX2FsZXJ0IiwiQWxlcnQiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50IiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9qc0NvbmZldHRpIiwidXNlQ29uZmV0dGkiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpQ29sb3JzIiwiZW1vamlzIiwiZW1vamlTaXplIiwianNDb25mZXR0aSIsImFkZENvbmZldHRpIiwiX2RyaXZlciIsInVzZURyaXZlclRvdXIiLCJyZWFkeSIsInNhdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImZvckVhY2giLCJkYXRhc2V0IiwicHVzaCIsImVsZW1lbnQiLCJwb3BvdmVyIiwib2JqIiwiZHJpdmVyIiwicG9wb3ZlckNsYXNzIiwib25OZXh0Q2xpY2siLCJoYXNOZXh0U3RlcCIsImRlc3Ryb3kiLCJtb3ZlTmV4dCIsImRyaXZlIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsIkFwcExvYWRlciIsIl9zcGlubmVyIiwiUHJlbG9hZFNjcmVlbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJOb3RGb3VuZCIsInRleHRzUmVhZHkiLCJub3RGb3VuZCIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIl9za2VsZXRvblRleHQiLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJQYWdlU3VidGl0bGUiLCJQcm9jZXNzQnV0dG9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSYWRpb0J1dHRvbiIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJkaXYiLCJzY2FsZSIsImNoZWNrZWQiLCJSYWRpb0dyb3VwIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImludGVydmFsRG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInJhZGlvIiwiZGlzcGxheSIsInN0b3BBbmltYXRpb24iLCJTdWJEaXZpZGVyIiwiVG91clN0ZXAiLCJrZXlzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiVXNlckRhdGEiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvdHMvY29udGVudC1lZGl0YWJsZS91c2UtY29udGFpbmVyLnRzeCIsIi90cy9jcmVkaXRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY3JlZGl0cy9jb2lucy1tb2RhbC50c3giLCIvdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvdHMvY3JlZGl0cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtZHJpdmVyLXRvdXIudHMiLCIvdHMvaG9va3MvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL2xvYWRlcnMvbG9hZGVyLnRzeCIsIi90cy9sb2FkZXJzL3ByZS1sb2FkLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giLCIvdHMvdG91ci1zdGVwLnRzeCIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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