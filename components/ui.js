System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "framer-motion@10.18.0", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/spinner", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, AnimatedContainer, Battery, ConfirmAction, EmptyCard, ErrorRenderer, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, EntityImage, PreloadScreen, ProcessButton, ProcessIconButton, RotatingMessage, SkeletonText, SubDivider, useTextsCallback, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    AnimatedContainer: void 0,
    Battery: void 0,
    ConfirmAction: void 0,
    EmptyCard: void 0,
    ErrorRenderer: void 0,
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
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0045ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi011Toast) {
      dependency_7 = _pragmateUi011Toast;
    }, function (_pragmateUi011Modal) {
      dependency_8 = _pragmateUi011Modal;
    }, function (_pragmateUi011Empty) {
      dependency_9 = _pragmateUi011Empty;
    }, function (_pragmateUi011Alert) {
      dependency_10 = _pragmateUi011Alert;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_pragmateUi011Image) {
      dependency_12 = _pragmateUi011Image;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Spinner) {
      dependency_14 = _pragmateUi011Spinner;
    }, function (_beyondJsKernel019Texts) {
      dependency_15 = _beyondJsKernel019Texts;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/icons', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/toast', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/alert', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/image', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['pragmate-ui/spinner', dependency_14], ['@beyond-js/kernel/texts', dependency_15]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/components/ui');
      ims = new Map();
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
        hash: 2404366703,
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
        "im": "./confirm-action",
        "from": "ConfirmAction",
        "name": "ConfirmAction"
      }, {
        "im": "./empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./error-renderer",
        "from": "ErrorRenderer",
        "name": "ErrorRenderer"
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
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./animation-container').AnimatedContainer : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'ConfirmAction') && _export("ConfirmAction", ConfirmAction = require ? require('./confirm-action').ConfirmAction : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwib25DbGljayIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJjbGFzc05hbWUiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJ3aWR0aCIsIkJhdHRlcnkiLCJwZXJjZW50IiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiX3RvYXN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsInRleHRQb3BVcCIsIm9uQ29uZmlybSIsInRvYXN0VGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1vZGFsVGV4dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWwiLCJoYW5kbGVDb25maXJtIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsImNvbnNvbGUiLCJGcmFnbWVudCIsIkNvbmZpcm1Nb2RhbCIsInRleHQiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJfZW1wdHkiLCJFbXB0eUNhcmQiLCJjbGFzc3dvcmtzIiwiY2xzIiwiRW1wdHkiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIkFsZXJ0IiwidHlwZSIsIl9saXN0IiwiTGlzdENvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIkxpc3QiLCJfaW1hZ2UiLCJOb3RGb3VuZCIsInRleHRzIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJQYWdlQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJzaXplIiwidW5kZWZpbmVkIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJTcGlubmVyIiwiYWN0aXZlIiwiTG9hZGVyIiwiX2xvYWRlciIsIlByb2Nlc3NDb250YWluZXIiLCJQYWdlVGl0bGUiLCJDb250cm9sIiwiUGFnZVN1YnRpdGxlIiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJlbnRpdGllcyIsImFzc2lnbm1lbnQiLCJhY3Rpdml0eSIsImNsYXNzcm9vbSIsIm1vZHVsZSIsImluc3RpdHV0aW9uIiwiX3NwaW5uZXIiLCJQcm9jZXNzQnV0dG9uIiwiZGlzYWJsZWQiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImhhbmRsZUNsaWNrIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJzZXRUaW1lb3V0IiwiQXBwSWNvbkJ1dHRvbiIsIlJvdGF0aW5nTWVzc2FnZSIsImNvbnRlbnQiLCJ0aW1lIiwiaW50ZXJ2YWxEb3RzIiwiaSIsImludGVydmFsIiwiZ2xvYmFsVGhpcyIsInNldEludGVydmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW5uZXJIVE1MIiwiZG90cyIsImxlbmd0aCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInJhZGlvIiwiZGlzcGxheSIsInN0b3BBbmltYXRpb24iLCJTdWJEaXZpZGVyIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwidmFsdWUiLCJvbiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9saXN0LWNvbnRhaW5lci50c3giLCIvdHMvbm90LWZvdW5kLnRzeCIsIi90cy9wYWdlL2NvbnRhaW5lci50c3giLCIvdHMvcGFnZS9sb2FkZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3BpY3R1cmUudHN4IiwiL3RzL3ByZS1sb2FkLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcm90YXRpbmctbWVzc2FnZS50c3giLCIvdHMvc2tlbGV0b24tdGV4dC50c3giLCIvdHMvc3ViLWRpdmlkZXIudHN4IiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLFNBQVVJLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUN6RCxPQUNDUCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixXQUFBLENBQUFPLE1BQU07Y0FBQSxHQUFLSCxLQUFLO2NBQUVJLElBQUksRUFBRVQsTUFBQSxDQUFBVSxLQUFLLENBQUNDO1lBQU8s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