System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.1/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_1 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_3 = _aimpactAilearnApp031ComponentsUi;
    }, function (_dayjs2) {
      dependency_4 = _dayjs2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_5 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_8 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp031ModelWrapper) {
      dependency_9 = _aimpactAilearnApp031ModelWrapper;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_12 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_14 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_15 = _pragmateUi100Beta7Image;
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/hooks', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['dayjs', dependency_4], ['pragmate-ui/components', dependency_5], ['react', dependency_6], ['pragmate-ui/base', dependency_7], ['pragmate-ui/toast', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['framer-motion', dependency_10], ['pragmate-ui/modal', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tooltip', dependency_14], ['pragmate-ui/image', dependency_15]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 126968190,
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
        hash: 1348886435,
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
        hash: 1914241138,
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
        hash: 2394508093,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9jbGFzc3Jvb21IZWFkZXIiLCJBc3NpZ25tZW50Q2FyZCIsImF1ZGllbmNlIiwiYXJjaGl2ZWQiLCJDbGFzc3Jvb21IZWFkZXIiLCJyZXN0b3JlIiwib25DbGljayIsIl9jb250ZXh0IiwiQmFzZUNhcmQiLCJwcmVmaXgiLCJDYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcmRDb250ZXh0IiwidXNlQ29udGV4dCIsIkJhc2VGb290ZXJDYXJkIiwiQmFzZUNhcmRIZWFkZXIiLCJCYXNlSG92ZXJGb290ZXJDYXJkIiwiX3RvYXN0IiwiX2NhcmQiLCJfZm9vdGVyIiwiX2hlYWRlciIsIl9ob3ZlckZvb3RlciIsIl9vd25lciIsIl93cmFwcGVyIiwiQ2xhc3Nyb29tQ2FyZCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwiaWQiLCJuYW1lIiwiQ2FyZE93bmVyU2VjdGlvbiIsImRhdGEiLCJvd25lciIsImNvZGUiLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiX2F1ZGllbmNlIiwiX2ZyYW1lck1vdGlvbiIsIkNvbnRhaW5lciIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJhcnRpY2xlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJBdWRpZW5jZSIsImxlbmd0aCIsIkRyYWZ0Q2FyZCIsImRyYWZ0VGl0bGUiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwic2hvdyIsIm9uQ2FuY2VsIiwiT3JnYW5pemF0aW9uQ2FyZCIsIl9saXN0IiwiSXRlbSIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJsZXZlbCIsIl90b29sdGlwIiwiVG9vbHRpcCIsIl9pbWFnZSIsInBob3RvVXJsIiwiSW1hZ2UiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LnRzeCIsIi90cy9hc2lnbm1lbnQudHN4IiwiL3RzL2Jhc2UvY2FyZC50c3giLCIvdHMvYmFzZS9jb250ZXh0LnRzIiwiL3RzL2Jhc2UvZm9vdGVyLnRzeCIsIi90cy9iYXNlL2hlYWRlci50c3giLCIvdHMvYmFzZS9ob3Zlci1mb290ZXIudHN4IiwiL3RzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL2NvbnRhaW5lci50c3giLCIvdHMvZHJhZnQudHN4IiwiL3RzL2Zvb3Rlci9hY3Rpb25zLnRzeCIsIi90cy9mb290ZXIvaW5kZXgudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2luZGV4LnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEdBQUEsR0FBQUYsT0FB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LEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ29ILFFBQUEsQ0FBQUMsT0FBTztjQUFDcEUsT0FBTyxFQUFFVztZQUFJLEdBQ3JCOUYsS0FBQSxDQUFBa0MsYUFBQSxDQUFDc0gsTUFBQSxDQUFBRSxLQUFLO2NBQUNoSixTQUFTLEVBQUMsaUJBQWlCO2NBQUMwQixHQUFHLEVBQUVxSDtZQUFRLEVBQUksQ0FDM0MsRUFFVnpKLEtBQUEsQ0FBQWtDLGFBQUEsY0FDQ2xDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUFrQixHQUFFb0YsSUFBSSxDQUFRLENBQzNDLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBOUYsS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQTZKLE1BQUEsR0FBQTdKLE9BQUE7VUFDQSxJQUFBMkosUUFBQSxHQUFBM0osT0FBQTtVQWNPO1VBQVUsU0FBVW1JLFFBQVFBLENBQUM7WUFBRTZCLEtBQUs7WUFBRS9ILElBQUk7WUFBRW9FO1VBQUksQ0FBa0Q7WUFDeEcsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXlELFFBQVE7Y0FBRTNEO1lBQUksQ0FBRSxHQUFHRSxJQUFJO1lBRS9CLE9BQ0NoRyxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBb0IsR0FDakNpSixLQUFLLElBQUkzSixLQUFBLENBQUFrQyxhQUFBO2NBQUl4QixTQUFTLEVBQUM7WUFBa0IsR0FBRWlKLEtBQUssQ0FBTSxFQUN2RDNKLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU3hCLFNBQVMsRUFBQztZQUFtQixHQUNyQ1YsS0FBQSxDQUFBa0MsYUFBQSxDQUFDb0gsUUFBQSxDQUFBQyxPQUFPO2NBQUNwRSxPQUFPLEVBQUVXO1lBQUksR0FDckI5RixLQUFBLENBQUFrQyxhQUFBLENBQUNzSCxNQUFBLENBQUFFLEtBQUs7Y0FBQ2hKLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQzBCLEdBQUcsRUFBRXFIO1lBQVEsRUFBSSxDQUMxQyxFQUVWekosS0FBQSxDQUFBa0MsYUFBQSxjQUNDbEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQWlCLEdBQUVvRixJQUFJLENBQVEsRUFDL0M5RixLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBaUIsR0FBRWtCLElBQUksQ0FBUSxDQUMxQyxDQUNHLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7VUNuQ0E7O1VBRUFnSSxNQUFBLENBQUFDLGNBQUEsQ0FBQWhHLE9BQUE7WUFDQUQsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119