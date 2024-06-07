System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-13/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-13/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/spinner", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, PreloadScreen, ProcessButton, ProcessIconButton, RotatingMessage, SkeletonText, SubDivider, useTextsCallback, __beyond_pkg, hmr;
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
    ListContainer: void 0,
    NotFound: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
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
    }, function (_aimpactAilearnApp0046Dev13Config) {
      dependency_4 = _aimpactAilearnApp0046Dev13Config;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev13ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0046Dev13ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/texts', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/components/ui');
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
        hash: 2107988220,
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
            content,
            placeholder,
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
            } = (0, _useContainer.useClickContainer)(content, placeholder, isEditable);
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              if (!isEditable) {
                setTimeout(() => {
                  const el = contentRef.current;
                  const range = document.createRange();
                  range.selectNodeContents(el);
                  const selection = globalThis.getSelection();
                  if (!content && placeholder) {
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                  }
                  range.collapse(false); // Co
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

            const onBlur = async event => {
              event.stopPropagation();
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
        hash: 2428972639,
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
        hash: 4241695527,
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
            let toShow = isEditable ? content ? content : '' : content || placeholder || '';
            toShow = toShow === '' ? placeholder : toShow;
            const [value, setValue] = _react.default.useState(toShow);
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
        (require || prop === 'ListContainer') && _export("ListContainer", ListContainer = require ? require('./list-container').ListContainer : value);
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./not-found').NotFound : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdG9hc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwiZGVzY3JpcHRpb24iLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWwiLCJoYW5kbGVDb25maXJtIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsIkZyYWdtZW50IiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsIm5hbWUiLCJvbkVkaXQiLCJDb250cm9sIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50UmVmIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29sbGFwc2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJoYW5kbGVLZXlEb3duIiwia2V5Iiwib25CbHVyIiwidGV4dENvbnRlbnQiLCJzcGVjcyIsImN1cnJlbnRUYXJnZXQiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvblBhc3RlIiwib25LZXlEb3duIiwiSWNvbiIsImV4cG9ydHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImlzT3V0U2lkZSIsInRvU2hvdyIsIkVtcHR5IiwicmF0aW8iLCJlbnRpdHkiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJ2YXJpYW50IiwiQWxlcnQiLCJfbGluayIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50Iiwic3RhdHVzIiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJOb3RGb3VuZCIsInRleHRzUmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwic3VidGl0bGUiLCJub3RGb3VuZCIsIlBhZ2VDb250YWluZXIiLCJmZXRjaGluZyIsInNpemUiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJMb2FkZXIiLCJfbG9hZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9za2VsZXRvblRleHQiLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJQYWdlU3VidGl0bGUiLCJfc3Bpbm5lciIsIlByb2Nlc3NCdXR0b24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImhhbmRsZUNsaWNrIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImludGVydmFsRG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInJhZGlvIiwiZGlzcGxheSIsInN0b3BBbmltYXRpb24iLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jaGF0LXByZWxvYWQudHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2VudGl0eS1pbWFnZS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9saXN0LWNvbnRhaW5lci50c3giLCIvdHMvbm90LWZvdW5kLnRzeCIsIi90cy9wYWdlL2NvbnRhaW5lci50c3giLCIvdHMvcGFnZS9sb2FkZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3ByZS1sb2FkLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcm90YXRpbmctbWVzc2FnZS50c3giLCIvdHMvc2tlbGV0b24tdGV4dC50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4IiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUN6RyxNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tC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