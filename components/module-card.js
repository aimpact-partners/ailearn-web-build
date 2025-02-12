System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_15 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 407433167,
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
        hash: 2655525384,
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
        hash: 2947409397,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwibW9kdWxlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9jbGFzc3Jvb21IZWFkZXIiLCJBc3NpZ25tZW50Q2FyZCIsImF1ZGllbmNlIiwiQ2xhc3Nyb29tSGVhZGVyIiwiX2NvbnRleHQiLCJCYXNlQ2FyZCIsInByZWZpeCIsIkNhcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FyZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQmFzZUZvb3RlckNhcmQiLCJCYXNlQ2FyZEhlYWRlciIsIkJhc2VIb3ZlckZvb3RlckNhcmQiLCJfdG9hc3QiLCJfY2FyZCIsIl9mb290ZXIiLCJfaGVhZGVyIiwiX2hvdmVyRm9vdGVyIiwiX293bmVyIiwiQ2xhc3Nyb29tQ2FyZCIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwiaWQiLCJuYW1lIiwiQ2FyZE93bmVyU2VjdGlvbiIsImRhdGEiLCJvd25lciIsImNvZGUiLCJvbkNsaWNrIiwiY2xhc3Nyb29tcyIsImRlbGV0ZSIsIl9hdWRpZW5jZSIsIl93cmFwcGVyIiwiX2ZyYW1lck1vdGlvbiIsIkNvbnRhaW5lciIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsImluY2x1ZGVzIiwiQWlMZWFybldyYXBwZXIiLCJkZXZpY2UiLCJtb3Rpb24iLCJhcnRpY2xlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJBdWRpZW5jZSIsImxlbmd0aCIsIkRyYWZ0Q2FyZCIsImRyYWZ0VGl0bGUiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwic2hvdyIsIm9uQ2FuY2VsIiwiT3JnYW5pemF0aW9uQ2FyZCIsIl9saXN0IiwiSXRlbSIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJsZXZlbCIsIl90b29sdGlwIiwiVG9vbHRpcCIsIl9pbWFnZSIsInBob3RvVXJsIiwiSW1hZ2UiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LnRzeCIsIi90cy9hc2lnbm1lbnQudHN4IiwiL3RzL2Jhc2UvY2FyZC50c3giLCIvdHMvYmFzZS9jb250ZXh0LnRzIiwiL3RzL2Jhc2UvZm9vdGVyLnRzeCIsIi90cy9iYXNlL2hlYWRlci50c3giLCIvdHMvYmFzZS9ob3Zlci1mb290ZXIudHN4IiwiL3RzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL2NvbnRhaW5lci50c3giLCIvdHMvZHJhZnQudHN4IiwiL3RzL2Zvb3Rlci9hY3Rpb25zLnRzeCIsIi90cy9mb290ZXIvaW5kZXgudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2luZGV4LnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFB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