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
        hash: 2600165395,
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
              size: "sm",
              type: "activity"
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
        hash: 2605247645,
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
        hash: 3781405672,
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
            }, React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "trash",
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
        hash: 2853467246,
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
              name: "languages-es"
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
        hash: 1810715899,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwibW9kdWxlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9jbGFzc3Jvb21IZWFkZXIiLCJBc3NpZ25tZW50Q2FyZCIsImF1ZGllbmNlIiwiYXJjaGl2ZWQiLCJDbGFzc3Jvb21IZWFkZXIiLCJfY29udGV4dCIsIkJhc2VDYXJkIiwicHJlZml4IiwiQ2FyZENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYXJkQ29udGV4dCIsInVzZUNvbnRleHQiLCJCYXNlRm9vdGVyQ2FyZCIsIkJhc2VDYXJkSGVhZGVyIiwiQmFzZUhvdmVyRm9vdGVyQ2FyZCIsIl90b2FzdCIsIl9jYXJkIiwiX2Zvb3RlciIsIl9oZWFkZXIiLCJfaG92ZXJGb290ZXIiLCJfb3duZXIiLCJDbGFzc3Jvb21DYXJkIiwiY29weSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3BpZWQiLCJpZCIsIm5hbWUiLCJDYXJkT3duZXJTZWN0aW9uIiwiZGF0YSIsIm93bmVyIiwiY29kZSIsIm9uQ2xpY2siLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiX2F1ZGllbmNlIiwiX3dyYXBwZXIiLCJfZnJhbWVyTW90aW9uIiwiQ29udGFpbmVyIiwiaGFzTW91bnRlZCIsInNldEhhc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsIm1vdGlvbiIsImFydGljbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkF1ZGllbmNlIiwibGVuZ3RoIiwiRHJhZnRDYXJkIiwiZHJhZnRUaXRsZSIsInNob3dVc2VyIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsIm93bmVyRGF0YSIsImNyZWF0b3IiLCJVc2VyRGF0YSIsIl9jb250YWluZXIiLCJNb2R1bGVDYXJkIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93Iiwib25DYW5jZWwiLCJPcmdhbml6YXRpb25DYXJkIiwiX2xpc3QiLCJJdGVtIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImxldmVsIiwiX3Rvb2x0aXAiLCJUb29sdGlwIiwiX2ltYWdlIiwicGhvdG9VcmwiLCJJbWFnZSIsImxhYmVsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2FzaWdubWVudC50c3giLCIvdHMvYmFzZS9jYXJkLnRzeCIsIi90cy9iYXNlL2NvbnRleHQudHMiLCIvdHMvYmFzZS9mb290ZXIudHN4IiwiL3RzL2Jhc2UvaGVhZGVyLnRzeCIsIi90cy9iYXNlL2hvdmVyLWZvb3Rlci50c3giLCIvdHMvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9kcmFmdC50c3giLCIvdHMvZm9vdGVyL2FjdGlvbnMudHN4IiwiL3RzL2Zvb3Rlci9pbmRleC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL29yZ2FuaXphdGlvbnMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL29yZ2FuaXphdGlvbnMvaW5kZXgudHN4IiwiL3RzL3NlY3Rpb25zL2FjdGl2aXRpZXMudHN4IiwiL3RzL3NlY3Rpb25zL2F1ZGllbmNlLnRzeCIsIi90cy9zZWN0aW9ucy9jbGFzc3Jvb20taGVhZGVyLnRzeCIsIi90cy9zZWN0aW9ucy9sYW5ndWFnZS50c3giLCIvdHMvc2VjdGlvbnMvb3duZXIudHN4IiwiL3RzL3NlY3Rpb25zL3VzZXItZGF0YS50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxHQUFBLEdBQUFGLE9B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