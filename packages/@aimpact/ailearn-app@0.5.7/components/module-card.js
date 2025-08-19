System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.5.7/shared/hooks", "@aimpact/ailearn-app@0.5.7/components/icons", "@aimpact/ailearn-app@0.5.7/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.6/components", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/model/wrapper", "pragmate-ui@1.0.6/toast", "pragmate-ui@1.0.6/base", "framer-motion@10.18.0", "pragmate-ui@1.0.6/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/list", "pragmate-ui@1.0.6/tooltip", "pragmate-ui@1.0.6/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentActionsCard, AssignmentFigcaptionCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, SectionCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
  _export({
    ActivityCard: void 0,
    AssignmentActionsCard: void 0,
    AssignmentFigcaptionCard: void 0,
    AssignmentCard: void 0,
    BaseCard: void 0,
    BaseFooterCard: void 0,
    BaseCardHeader: void 0,
    BaseHoverFooterCard: void 0,
    ClassroomCard: void 0,
    Container: void 0,
    DraftCard: void 0,
    ModuleCardActionsFooter: void 0,
    ModuleCardFooter: void 0,
    ModuleCard: void 0,
    OrganizationCard: void 0,
    SectionCard: void 0,
    ClassroomHeader: void 0,
    CardOwnerSection: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_2 = _aimpactAilearnApp057SharedHooks;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_4 = _aimpactAilearnApp057ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi106Components) {
      dependency_6 = _pragmateUi106Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_8 = _aimpactAilearnApp057ModelWrapper;
    }, function (_pragmateUi106Toast) {
      dependency_9 = _pragmateUi106Toast;
    }, function (_pragmateUi106Base) {
      dependency_10 = _pragmateUi106Base;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi106Modal) {
      dependency_12 = _pragmateUi106Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106List) {
      dependency_14 = _pragmateUi106List;
    }, function (_pragmateUi106Tooltip) {
      dependency_15 = _pragmateUi106Tooltip;
    }, function (_pragmateUi106Image) {
      dependency_16 = _pragmateUi106Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/shared/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/base', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 2544710784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCard = ActivityCard;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _actions = require("./footer/actions");
          var _language = require("./sections/language");
          /*bundle*/
          function ActivityCard(props) {
            const {
              item,
              texts,
              entity,
              disabled,
              className,
              href,
              children,
              classroom,
              type
            } = props;
            const attrs = href && !disabled ? {
              href
            } : {};
            const Parent = href && !disabled ? _components.Link : React.Fragment;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card activity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (type) cls += ` activity-card--${type}`;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            const picture = item?.picture;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: picture,
              entity: entity,
              alt: title,
              size: "sm"
            }, React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top-content"
            }, React.createElement(_icons.AppIcon, {
              icon: type
            }), texts?.types?.[type]))), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children, React.createElement("footer", {
              className: clsFooter
            }, React.createElement("div", {
              className: "normal__footer"
            }, React.createElement("span", {
              className: "footer-detail"
            }, date), React.createElement("div", {
              className: "show-on-normal"
            }, React.createElement(_language.Language, {
              language: item.language
            }))), React.createElement(_actions.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "go",
              title: texts?.actions?.link,
              href: href
            })))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./assignment/actions
      ************************************/

      ims.set('./assignment/actions', {
        hash: 178668737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActionsCard = AssignmentActionsCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _actions = require("../footer/actions");
          /*bundle*/
          function AssignmentActionsCard(props) {
            const {
              texts,
              mode,
              id
            } = props;
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/assignments/${id}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            const goAction = mode === 'teacher' ? 'watch' : 'frontArrow';
            return React.createElement(_actions.ModuleCardActionsFooter, null, mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "copy",
              title: texts?.actions?.copy,
              onClick: copyToClipboard
            }), React.createElement(_icons.AppIconButton, {
              icon: goAction,
              title: texts?.actions?.link,
              href: `/assignments/${id}`
            }), !props.archived && mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "dashboard",
              title: texts?.actions?.link,
              href: `/dashboard/${id}`
            }), props.archived && React.createElement(_icons.AppIconButton, {
              icon: "restore",
              title: texts?.actions?.restore,
              onClick: props.actions.restore
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./assignment/figcaption
      ***************************************/

      ims.set('./assignment/figcaption', {
        hash: 1965672428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentFigcaptionCard = AssignmentFigcaptionCard;
          var React = require("react");
          var _audience = require("../sections/audience");
          var _classroomHeader = require("../sections/classroom-header");
          /*bundle*/
          function AssignmentFigcaptionCard(props) {
            const {
              href,
              children,
              classroom,
              mode = 'student'
            } = props;
            if (!props.id) {
              console.warn('AssignmentCard: id is required', props);
            }
            const {
              item,
              audience = true
            } = props;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            if (!classroom && !audience) return null;
            return React.createElement("figcaption", null, classroom ? React.createElement(_classroomHeader.ClassroomHeader, {
              classroom: classroom
            }) : null, audience ? React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            })) : null);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignment/index
      **********************************/

      ims.set('./assignment/index', {
        hash: 4179463776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCard = AssignmentCard;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _activities = require("../sections/activities");
          var _language = require("../sections/language");
          var _actions = require("./actions");
          var _figcaption = require("./figcaption");
          /*bundle*/
          function AssignmentCard(props) {
            const {
              href,
              children,
              classroom,
              mode = 'student'
            } = props;
            if (!props.id) {
              console.warn('AssignmentCard: id is required', props);
            }
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            const {
              item,
              audience = true,
              texts,
              entity,
              type,
              disabled,
              className
            } = props;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card assignments-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (props.archived) cls += ' entity-card--archived';
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              "data-id": props.id,
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, React.createElement(_figcaption.AssignmentFigcaptionCard, {
              ...props
            })), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })), React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children, React.createElement("footer", {
              className: clsFooter
            }, React.createElement("div", {
              className: "normal__footer"
            }, React.createElement("span", {
              className: "footer-detail"
            }, date), React.createElement("div", {
              className: "show-on-normal"
            }, React.createElement(_language.Language, {
              language: item.language
            }))), React.createElement(_actions.AssignmentActionsCard, {
              ...props
            }))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./base/card
      ***************************/

      ims.set('./base/card', {
        hash: 1671780138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseCard = BaseCard;
          var React = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function BaseCard(props) {
            const {
              className,
              children,
              prefix,
              href
            } = props;
            const cls = className ? `${prefix}-card ${className}` : `${prefix}-card`;
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : 'div';
            if (href) {
              attrs.className = `card--link ${className}`;
            }
            return React.createElement(_context.CardContext.Provider, {
              value: {
                prefix: props.prefix ? props.prefix : 'base-card'
              }
            }, React.createElement(Parent, {
              ...attrs
            }, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./base/context
      ******************************/

      ims.set('./base/context', {
        hash: 3221221966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCardContext = exports.CardContext = void 0;
          var React = require("react");
          const CardContext = exports.CardContext = React.createContext({});
          const useCardContext = () => React.useContext(CardContext);
          exports.useCardContext = useCardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./base/footer
      *****************************/

      ims.set('./base/footer', {
        hash: 1972849629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFooterCard = BaseFooterCard;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseFooterCard(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            const cls = className ? `${prefix}-card__footer ${className}` : `${prefix}-card__footer`;
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./base/header
      *****************************/

      ims.set('./base/header', {
        hash: 2168355870,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseCardHeader = BaseCardHeader;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseCardHeader(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            const cls = className ? `${prefix}-card__header ${className}` : `${prefix}-card__header`;
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./base/hover-footer
      ***********************************/

      ims.set('./base/hover-footer', {
        hash: 3959746808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseHoverFooterCard = BaseHoverFooterCard;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseHoverFooterCard(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            return React.createElement("div", {
              className: "footer-on-hover"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./classrooms/index
      **********************************/

      ims.set('./classrooms/index', {
        hash: 3829472711,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCard = ClassroomCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _card = require("../base/card");
          var _footer = require("../base/footer");
          var _header = require("../base/header");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function ClassroomCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = className ? `classroom-card ${className}` : 'classroom-card';
            if (isMobile) cls += ' mobile-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "classroom",
              href: `/classrooms/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIconButton, {
              name: "copy",
              title: texts.actions.copy,
              className: "circle"
            }), React.createElement("div", {
              className: "copy-content"
            }, React.createElement("span", null, texts.classrooms?.code), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, props.actions?.delete && React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "trash",
              onClick: props.actions.delete,
              title: texts.actions.delete
            })))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./container
      ***************************/

      ims.set('./container', {
        hash: 2729461566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = Container;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _audience = require("./sections/audience");
          var _language = require("./sections/language");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function Container({
            item,
            audience = true,
            texts,
            children,
            entity,
            type,
            onClick,
            disabled,
            archived,
            className
          }) {
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const [hasMounted, setHasMounted] = React.useState(false);
            React.useEffect(() => {
              setHasMounted(true);
            }, []);
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (isMobile) cls += ' mobile-card';
            if (archived) cls += ' entity-card--archived';
            return React.createElement(_framerMotion.motion.article, {
              onClick: onClick,
              initial: !hasMounted ? {
                opacity: 0,
                y: 15
              } : false,
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.25,
                ease: 'easeOut'
              },
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "xs",
              type: type
            }, audience ? React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            }), React.createElement(_language.Language, {
              language: item.language
            }))) : null), React.createElement("section", {
              className: "entity-card__content"
            }, types?.length > 0 ? React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              texts: texts,
              types: types
            })) : null, React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 4085276206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _audience = require("./sections/audience");
          var _language = require("./sections/language");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function DraftCard({
            href,
            children,
            ...props
          }) {
            const attrs = href ? {
              href
            } : {};
            const [hasMounted, setHasMounted] = React.useState(false);
            React.useEffect(() => {
              setHasMounted(true);
            }, []);
            if (href) {
              attrs.className = `card--link ${attrs.className}`;
            }
            const {
              item,
              audience = true,
              texts,
              entity,
              type,
              onClick,
              disabled,
              className
            } = props;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (isMobile) cls += ' mobile-card';
            return React.createElement(_components.Link, {
              ...attrs
            }, React.createElement("article", {
              onClick: onClick,
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, audience ? React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            }), React.createElement(_language.Language, {
              language: item.language
            }))) : null), React.createElement("section", {
              className: "entity-card__content"
            }, types?.length > 0 ? React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })) : null, React.createElement("header", null, React.createElement("span", {
              className: "p3 primary-text"
            }, texts.item.draftTitle), React.createElement("h5", {
              className: "card__title"
            }, title)), React.createElement("span", {
              className: "item__description p2"
            }, description)), children));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./footer/actions
      ********************************/

      ims.set('./footer/actions', {
        hash: 4146059452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardActionsFooter = ModuleCardActionsFooter;
          var React = require("react");
          /*bundle*/
          function ModuleCardActionsFooter({
            children
          } = {
            showUser: true
          }) {
            return React.createElement("div", {
              className: "actions-container hover__footer"
            }, React.createElement(React.Fragment, null, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./footer/index
      ******************************/

      ims.set('./footer/index', {
        hash: 3790137842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardFooter = ModuleCardFooter;
          var React = require("react");
          var _dayjs = require("dayjs");
          var _userData = require("../sections/user-data");
          /*bundle*/
          function ModuleCardFooter({
            item,
            className,
            showUser = true,
            children
          } = {
            showUser: true
          }) {
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const cls = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement("footer", {
              className: cls
            }, React.createElement("div", {
              className: "normal__footer"
            }, showUser && React.createElement(_userData.UserData, {
              data: ownerData,
              date: date
            })), React.createElement(React.Fragment, null, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3263317803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCard = ModuleCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _container = require("./container");
          /*bundle*/
          function ModuleCard({
            href,
            children,
            ...props
          }) {
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            if (href) {
              attrs.className = `card--link ${attrs.className}`;
            }
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement(_container.Container, {
              ...props
            }, children));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./organizations/confirm-action
      **********************************************/

      ims.set('./organizations/confirm-action', {
        hash: 152144149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ConfirmAction({
            icon,
            callback,
            title,
            description
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/l18n');
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: onClickButton
            }), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./organizations/index
      *************************************/

      ims.set('./organizations/index', {
        hash: 2742523097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationCard = OrganizationCard;
          var React = require("react");
          var _card = require("../base/card");
          var _header = require("../base/header");
          var _footer = require("../base/footer");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OrganizationCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            const cls = className ? `organization-card ${className}` : 'organization-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "organization",
              href: `/organizations/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIcon, {
              name: "copy"
            }), React.createElement("div", null, React.createElement("span", null, "Codigo del Aula"), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "delete"
            })))));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./sections
      **************************/

      ims.set('./sections', {
        hash: 2436272387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionCard = SectionCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _card = require("./base/card");
          var _footer = require("./base/footer");
          var _header = require("./base/header");
          var _hoverFooter = require("./base/hover-footer");
          var _owner = require("./sections/owner");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function SectionCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = className ? `classroom-card ${className}` : 'classroom-card';
            if (isMobile) cls += ' mobile-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "classroom",
              href: `/kb/sections/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIconButton, {
              name: "copy",
              title: texts.actions.copy,
              className: "circle"
            }), React.createElement("div", {
              className: "copy-content"
            }, React.createElement("span", null, texts.classrooms?.code), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, props.actions?.delete && React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "trash",
              onClick: props.actions.delete,
              title: texts.actions.delete
            })))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./sections/activities
      *************************************/

      ims.set('./sections/activities', {
        hash: 732547299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          function ModuleActivities({
            types,
            texts
          }) {
            if (!types) return null;
            const TOTAL_ACTIVITIES = 5;
            const [plus, setPlus] = _react.default.useState(types.length > TOTAL_ACTIVITIES);
            if (types.length > TOTAL_ACTIVITIES) {}
            const Item = ({
              item
            }) => {
              const cls = `activity-type__icon activity--${item}`;
              return _react.default.createElement("li", {
                className: cls
              }, _react.default.createElement(_icons.AppIcon, {
                icon: item,
                title: item
              }));
            };
            return _react.default.createElement("ul", {
              className: "activity-types__list"
            }, types.slice(0, 4).map((item, index) => _react.default.createElement(Item, {
              key: `${item}-${index}`,
              item: item
            })), plus ? _react.default.createElement("li", null, _react.default.createElement("div", {
              className: "activity-types__number"
            }, " +", types.length - TOTAL_ACTIVITIES)) : null);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/audience
      ***********************************/

      ims.set('./sections/audience', {
        hash: 2996597710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audience = Audience;
          var React = require("react");
          function Audience({
            audience
          }) {
            if (!audience) return null;
            return React.createElement("span", {
              className: "card__chip card__chip-right"
            }, audience?.level);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./sections/classroom-header
      *******************************************/

      ims.set('./sections/classroom-header', {
        hash: 4096292498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomHeader = ClassroomHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          var React = require("react");
          /*bundle*/
          function ClassroomHeader({
            classroom
          }) {
            if (!classroom) return null;
            const {
              name
            } = classroom;
            return React.createElement("div", {
              className: "classroom-data__section"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement("div", {
              className: "icon__container"
            }, React.createElement(_icons.AppIcon, {
              icon: "classroom"
            }))), React.createElement("span", {
              className: "classroom-data__name p3"
            }, name));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/language
      ***********************************/

      ims.set('./sections/language', {
        hash: 3594550563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Language = Language;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Language({
            language
          }) {
            if (!language) return null;
            return React.createElement("span", {
              className: "card__chip text-upper"
            }, language, " ", React.createElement(_icons.AppIcon, {
              name: `languages-${language}`
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./sections/owner
      ********************************/

      ims.set('./sections/owner', {
        hash: 1694535384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardOwnerSection = CardOwnerSection;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function CardOwnerSection({
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "owner-data__section"
            }, React.createElement("section", {
              className: "owner-data__detail"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "owner-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
              className: "owner-data__name"
            }, name))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./sections/user-data
      ************************************/

      ims.set('./sections/user-data', {
        hash: 869122493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function UserData({
            label,
            date,
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
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
              className: "user-data__name"
            }, name), React.createElement("span", {
              className: "user-data__date"
            }, date))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1920801957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity",
        "from": "ActivityCard",
        "name": "ActivityCard"
      }, {
        "im": "./assignment/actions",
        "from": "AssignmentActionsCard",
        "name": "AssignmentActionsCard"
      }, {
        "im": "./assignment/figcaption",
        "from": "AssignmentFigcaptionCard",
        "name": "AssignmentFigcaptionCard"
      }, {
        "im": "./assignment/index",
        "from": "AssignmentCard",
        "name": "AssignmentCard"
      }, {
        "im": "./base/card",
        "from": "BaseCard",
        "name": "BaseCard"
      }, {
        "im": "./base/footer",
        "from": "BaseFooterCard",
        "name": "BaseFooterCard"
      }, {
        "im": "./base/header",
        "from": "BaseCardHeader",
        "name": "BaseCardHeader"
      }, {
        "im": "./base/hover-footer",
        "from": "BaseHoverFooterCard",
        "name": "BaseHoverFooterCard"
      }, {
        "im": "./classrooms/index",
        "from": "ClassroomCard",
        "name": "ClassroomCard"
      }, {
        "im": "./container",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./draft",
        "from": "DraftCard",
        "name": "DraftCard"
      }, {
        "im": "./footer/actions",
        "from": "ModuleCardActionsFooter",
        "name": "ModuleCardActionsFooter"
      }, {
        "im": "./footer/index",
        "from": "ModuleCardFooter",
        "name": "ModuleCardFooter"
      }, {
        "im": "./index",
        "from": "ModuleCard",
        "name": "ModuleCard"
      }, {
        "im": "./organizations/index",
        "from": "OrganizationCard",
        "name": "OrganizationCard"
      }, {
        "im": "./sections",
        "from": "SectionCard",
        "name": "SectionCard"
      }, {
        "im": "./sections/classroom-header",
        "from": "ClassroomHeader",
        "name": "ClassroomHeader"
      }, {
        "im": "./sections/owner",
        "from": "CardOwnerSection",
        "name": "CardOwnerSection"
      }, {
        "im": "./sections/user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityCard') && _export("ActivityCard", ActivityCard = require ? require('./activity').ActivityCard : value);
        (require || prop === 'AssignmentActionsCard') && _export("AssignmentActionsCard", AssignmentActionsCard = require ? require('./assignment/actions').AssignmentActionsCard : value);
        (require || prop === 'AssignmentFigcaptionCard') && _export("AssignmentFigcaptionCard", AssignmentFigcaptionCard = require ? require('./assignment/figcaption').AssignmentFigcaptionCard : value);
        (require || prop === 'AssignmentCard') && _export("AssignmentCard", AssignmentCard = require ? require('./assignment/index').AssignmentCard : value);
        (require || prop === 'BaseCard') && _export("BaseCard", BaseCard = require ? require('./base/card').BaseCard : value);
        (require || prop === 'BaseFooterCard') && _export("BaseFooterCard", BaseFooterCard = require ? require('./base/footer').BaseFooterCard : value);
        (require || prop === 'BaseCardHeader') && _export("BaseCardHeader", BaseCardHeader = require ? require('./base/header').BaseCardHeader : value);
        (require || prop === 'BaseHoverFooterCard') && _export("BaseHoverFooterCard", BaseHoverFooterCard = require ? require('./base/hover-footer').BaseHoverFooterCard : value);
        (require || prop === 'ClassroomCard') && _export("ClassroomCard", ClassroomCard = require ? require('./classrooms/index').ClassroomCard : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./container').Container : value);
        (require || prop === 'DraftCard') && _export("DraftCard", DraftCard = require ? require('./draft').DraftCard : value);
        (require || prop === 'ModuleCardActionsFooter') && _export("ModuleCardActionsFooter", ModuleCardActionsFooter = require ? require('./footer/actions').ModuleCardActionsFooter : value);
        (require || prop === 'ModuleCardFooter') && _export("ModuleCardFooter", ModuleCardFooter = require ? require('./footer/index').ModuleCardFooter : value);
        (require || prop === 'ModuleCard') && _export("ModuleCard", ModuleCard = require ? require('./index').ModuleCard : value);
        (require || prop === 'OrganizationCard') && _export("OrganizationCard", OrganizationCard = require ? require('./organizations/index').OrganizationCard : value);
        (require || prop === 'SectionCard') && _export("SectionCard", SectionCard = require ? require('./sections').SectionCard : value);
        (require || prop === 'ClassroomHeader') && _export("ClassroomHeader", ClassroomHeader = require ? require('./sections/classroom-header').ClassroomHeader : value);
        (require || prop === 'CardOwnerSection') && _export("CardOwnerSection", CardOwnerSection = require ? require('./sections/owner').CardOwnerSection : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./sections/user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2xhbmd1YWdlIiwiQWN0aXZpdHlDYXJkIiwicHJvcHMiLCJpdGVtIiwidGV4dHMiLCJlbnRpdHkiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhyZWYiLCJjaGlsZHJlbiIsImNsYXNzcm9vbSIsInR5cGUiLCJhdHRycyIsIlBhcmVudCIsIkxpbmsiLCJGcmFnbWVudCIsInRpdGxlIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJ0eXBlcyIsImFjdGl2aXRpZXMiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsInB1c2giLCJjbHMiLCJkYXRlIiwiZGVmYXVsdCIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiY2xzRm9vdGVyIiwicGljdHVyZSIsImNyZWF0ZUVsZW1lbnQiLCJFbnRpdHlJbWFnZSIsInNyYyIsImFsdCIsInNpemUiLCJBcHBJY29uIiwiaWNvbiIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl93cmFwcGVyIiwiX3RvYXN0IiwiQXNzaWdubWVudEFjdGlvbnNDYXJkIiwibW9kZSIsImlkIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb3B5RXJyb3IiLCJnb0FjdGlvbiIsIm9uQ2xpY2siLCJhcmNoaXZlZCIsInJlc3RvcmUiLCJfYXVkaWVuY2UiLCJfY2xhc3Nyb29tSGVhZGVyIiwiQXNzaWdubWVudEZpZ2NhcHRpb25DYXJkIiwid2FybiIsImF1ZGllbmNlIiwiQ2xhc3Nyb29tSGVhZGVyIiwiQXVkaWVuY2UiLCJfYWN0aXZpdGllcyIsIl9maWdjYXB0aW9uIiwiQXNzaWdubWVudENhcmQiLCJNb2R1bGVBY3Rpdml0aWVzIiwiX2NvbnRleHQiLCJCYXNlQ2FyZCIsInByZWZpeCIsIkNhcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FyZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQmFzZUZvb3RlckNhcmQiLCJCYXNlQ2FyZEhlYWRlciIsIkJhc2VIb3ZlckZvb3RlckNhcmQiLCJfY2FyZCIsIl9mb290ZXIiLCJfaGVhZGVyIiwiX2hvdmVyRm9vdGVyIiwiX293bmVyIiwiQ2xhc3Nyb29tQ2FyZCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvcGllZCIsIm5hbWUiLCJDYXJkT3duZXJTZWN0aW9uIiwiZGF0YSIsIm93bmVyIiwiY29kZSIsImNsYXNzcm9vbXMiLCJkZWxldGUiLCJfZnJhbWVyTW90aW9uIiwiQ29udGFpbmVyIiwiaGFzTW91bnRlZCIsInNldEhhc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsImFydGljbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImxlbmd0aCIsIkRyYWZ0Q2FyZCIsImRyYWZ0VGl0bGUiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwic2hvdyIsIm9uQ2FuY2VsIiwiT3JnYW5pemF0aW9uQ2FyZCIsIlNlY3Rpb25DYXJkIiwiVE9UQUxfQUNUSVZJVElFUyIsInBsdXMiLCJzZXRQbHVzIiwiSXRlbSIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJsZXZlbCIsIl90b29sdGlwIiwiVG9vbHRpcCIsIl9pbWFnZSIsInBob3RvVXJsIiwiSW1hZ2UiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9hY3Rpdml0eS50c3giLCIvL3RzL2Fzc2lnbm1lbnQvYWN0aW9ucy50c3giLCIvL3RzL2Fzc2lnbm1lbnQvZmlnY2FwdGlvbi50c3giLCIvL3RzL2Fzc2lnbm1lbnQvaW5kZXgudHN4IiwiLy90cy9iYXNlL2NhcmQudHN4IiwiLy90cy9iYXNlL2NvbnRleHQudHMiLCIvL3RzL2Jhc2UvZm9vdGVyLnRzeCIsIi8vdHMvYmFzZS9oZWFkZXIudHN4IiwiLy90cy9iYXNlL2hvdmVyLWZvb3Rlci50c3giLCIvL3RzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiLy90cy9jb250YWluZXIudHN4IiwiLy90cy9kcmFmdC50c3giLCIvL3RzL2Zvb3Rlci9hY3Rpb25zLnRzeCIsIi8vdHMvZm9vdGVyL2luZGV4LnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9vcmdhbml6YXRpb25zL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi8vdHMvb3JnYW5pemF0aW9ucy9pbmRleC50c3giLCIvL3RzL3NlY3Rpb25zLnRzeCIsIi8vdHMvc2VjdGlvbnMvYWN0aXZpdGllcy50c3giLCIvL3RzL3NlY3Rpb25zL2F1ZGllbmNlLnRzeCIsIi8vdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvL3RzL3NlY3Rpb25zL2xhbmd1YWdlLnRzeCIsIi8vdHMvc2VjdGlvbnMvb3duZXIudHN4IiwiLy90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxHQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFFQSxJQUFBTyxTQUFBLEdBQUFQLE9BQUE7VUFHTztVQUFVLFNBQVVRLFlBQVlBLENBQUNDLEtBQXVCO1lBQzlELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDO1lBQUksQ0FBRSxHQUFHVCxLQUFLO1lBQzNGLE1BQU1VLEtBQUssR0FBR0osSUFBSSxJQUFJLENBQUNGLFFBQVEsR0FBRztjQUFFRTtZQUFJLENBQUUsR0FBRyxFQUFFO1lBQy9DLE1BQU1LLE1BQU0sR0FBR0wsSUFBSSxJQUFJLENBQUNGLFFBQVEsR0FBR1QsV0FBQSxDQUFBaUIsSUFBSSxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUTtZQUN4RCxNQUFNQyxLQUFLLEdBQUdiLElBQUksQ0FBQ2EsS0FBSyxJQUFJYixJQUFJLENBQUNjLFNBQVM7WUFDMUMsTUFBTUMsV0FBVyxHQUFHZixJQUFJLENBQUNl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