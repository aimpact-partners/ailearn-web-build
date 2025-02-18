System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
  _export({
    ActivityCard: void 0,
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
    ClassroomHeader: void 0,
    CardOwnerSection: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_4 = _aimpactAilearnApp031ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_8 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ModelWrapper) {
      dependency_10 = _aimpactAilearnApp031ModelWrapper;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_15 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['pragmate-ui/base', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 555535927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCard = ActivityCard;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _actions = require("./footer/actions");
          var _activities = require("./sections/activities");
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
            const picture = item?.module?.picture ?? item?.picture;
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
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types
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
            }))), React.createElement(_actions.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "go",
              title: texts?.actions?.link,
              href: href
            })))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./asignment
      ***************************/

      ims.set('./asignment', {
        hash: 1295882299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCard = AssignmentCard;
          var React = require("react");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _language = require("./sections/language");
          var _classroomHeader = require("./sections/classroom-header");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _actions = require("./footer/actions");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /*bundle*/
          function AssignmentCard(props) {
            const {
              href,
              children,
              classroom
            } = props;
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
            const onRestore = event => {
              event.stopPropagation();
              props;
            };
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, classroom ? React.createElement("figcaption", null, React.createElement(_classroomHeader.ClassroomHeader, {
              classroom: classroom
            })) : null), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types
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
            }))), React.createElement(_actions.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "go",
              title: texts?.actions?.link,
              href: href
            }), props.archived && React.createElement(_icons.AppIconButton, {
              icon: "unarchive",
              title: texts?.actions?.restore,
              onClick: props.actions.restore
            })))));
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
        hash: 576687865,
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
          /*bundle*/
          function ClassroomCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            const cls = className ? `classroom-card ${className}` : 'classroom-card';
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
        hash: 3648335869,
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
        hash: 2381664302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
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
            }, React.createElement(_framerMotion.motion.article, {
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
              types: types
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

      /*************************************
      INTERNAL MODULE: ./sections/activities
      *************************************/

      ims.set('./sections/activities', {
        hash: 3786105609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          function ModuleActivities({
            types
          }) {
            if (!types) return null;
            const Item = ({
              item
            }) => {
              const cls = `activity-type__icon activity--${item}`;
              return _react.default.createElement("section", {
                className: cls
              }, _react.default.createElement(_icons.AppIcon, {
                icon: item
              }));
            };
            return _react.default.createElement(_list.List, {
              className: "activity-types__list",
              items: types,
              control: Item
            });
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
        hash: 2070913135,
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
        "im": "./asignment",
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
        (require || prop === 'AssignmentCard') && _export("AssignmentCard", AssignmentCard = require ? require('./asignment').AssignmentCard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwibW9kdWxlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9jbGFzc3Jvb21IZWFkZXIiLCJBc3NpZ25tZW50Q2FyZCIsImF1ZGllbmNlIiwiYXJjaGl2ZWQiLCJvblJlc3RvcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkNsYXNzcm9vbUhlYWRlciIsInJlc3RvcmUiLCJvbkNsaWNrIiwiX2NvbnRleHQiLCJCYXNlQ2FyZCIsInByZWZpeCIsIkNhcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FyZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQmFzZUZvb3RlckNhcmQiLCJCYXNlQ2FyZEhlYWRlciIsIkJhc2VIb3ZlckZvb3RlckNhcmQiLCJfdG9hc3QiLCJfY2FyZCIsIl9mb290ZXIiLCJfaGVhZGVyIiwiX2hvdmVyRm9vdGVyIiwiX293bmVyIiwiQ2xhc3Nyb29tQ2FyZCIsImNvcHkiLCJjb250ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcGllZCIsImlkIiwibmFtZSIsIkNhcmRPd25lclNlY3Rpb24iLCJkYXRhIiwib3duZXIiLCJjb2RlIiwiY2xhc3Nyb29tcyIsImRlbGV0ZSIsIl9hdWRpZW5jZSIsIl93cmFwcGVyIiwiX2ZyYW1lck1vdGlvbiIsIkNvbnRhaW5lciIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsImluY2x1ZGVzIiwiQWlMZWFybldyYXBwZXIiLCJkZXZpY2UiLCJtb3Rpb24iLCJhcnRpY2xlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJBdWRpZW5jZSIsImxlbmd0aCIsIkRyYWZ0Q2FyZCIsImRyYWZ0VGl0bGUiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwic2hvdyIsIm9uQ2FuY2VsIiwiT3JnYW5pemF0aW9uQ2FyZCIsIl9saXN0IiwiSXRlbSIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJsZXZlbCIsIl90b29sdGlwIiwiVG9vbHRpcCIsIl9pbWFnZSIsInBob3RvVXJsIiwiSW1hZ2UiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LnRzeCIsIi90cy9hc2lnbm1lbnQudHN4IiwiL3RzL2Jhc2UvY2FyZC50c3giLCIvdHMvYmFzZS9jb250ZXh0LnRzIiwiL3RzL2Jhc2UvZm9vdGVyLnRzeCIsIi90cy9iYXNlL2hlYWRlci50c3giLCIvdHMvYmFzZS9ob3Zlci1mb290ZXIudHN4IiwiL3RzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL2NvbnRhaW5lci50c3giLCIvdHMvZHJhZnQudHN4IiwiL3RzL2Zvb3Rlci9hY3Rpb25zLnRzeCIsIi90cy9mb290ZXIvaW5kZXgudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2luZGV4LnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VB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