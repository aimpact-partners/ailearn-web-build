System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/base"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    Item: void 0,
    Container: void 0,
    Accordion: void 0,
    CollapsibleContent: void 0,
    CollapsibleHeader: void 0,
    CollapsibleContainer: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Base) {
      dependency_4 = _pragmateUi100Beta6Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.2"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.6/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.6/collapsible');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./accordion
      ***************************/
      ims.set('./accordion', {
        hash: 2388911095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AccordionContext = exports.Accordion = void 0;
          exports.Container = Container;
          exports.Header = Header;
          exports.Item = Item;
          exports.useAccordionContext = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const AccordionContext = exports.AccordionContext = _react.default.createContext({});
          const useAccordionContext = () => _react.default.useContext(AccordionContext);
          exports.useAccordionContext = useAccordionContext;
          /*bundle */
          function Header({
            disabled,
            children,
            index
          }) {
            const {
              setOpened,
              opened
            } = useAccordionContext();
            const onClick = event => {
              event.stopPropagation();
              event.currentTarget.classList.toggle('accordion-item__header-icon--opened');
              setOpened(index === opened ? false : index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            const icon = opened ? 'expandMore' : 'chevronRight';
            return _react.default.createElement("header", {
              ...attrs,
              className: "accordion-item__header"
            }, children, _react.default.createElement("div", {
              className: "accordion-item__header-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: icon,
              className: "accordion-item__icon-button circle"
            })));
          }
          /*bundle */
          function Item({
            disabled,
            children,
            title,
            index
          }) {
            const {
              opened
            } = useAccordionContext();
            let cls = `accordion-item${index === opened ? ` accordion-item--opened` : ``}`;
            if (disabled) cls += ` accordion-item--disabled`;
            return _react.default.createElement("article", {
              className: cls
            }, title && _react.default.createElement(Header, {
              disabled: disabled,
              index: index
            }, title), _react.default.createElement("div", {
              className: "accordion-item__content"
            }, children));
          }
          /*bundle */
          function Container({
            children,
            active = 0
          }) {
            const [opened, setOpened] = _react.default.useState(active);
            const onChange = event => {};
            const value = {
              onChange,
              opened,
              setOpened
            };
            _react.default.useEffect(() => setOpened(active), [active]);
            const output = [];
            _react.default.Children.map(children, (child, index) => {
              if (!child) return null;
              output.push(_react.default.cloneElement(child, {
                index,
                key: `item$.${index}`
              }));
            });
            return _react.default.createElement(AccordionContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "accordion"
            }, output));
          }
          /*bundle */
          const Accordion = exports.Accordion = {
            Header,
            Item,
            Container
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 4052548813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContent({
            className,
            children
          }) {
            const {
              open,
              toggleable
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
            if (!toggleable) return null;
            return _react.default.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4042704803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var _react = require("react");
          const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
          const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1101998287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function CollapsibleHeader({
            children,
            className,
            toggleTitle = true
          }) {
            const {
              setOpen,
              onToggle,
              open,
              toggleable
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (!onToggle) {
                setOpen(!open);
                return;
              }
              if (await onToggle(!open)) setOpen(!open);
            };
            const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
            const clsButton = `collapsible__button circle ${open ? ' collapsible__button--opened' : ''}`;
            const attrs = {
              className: cls
            };
            if (toggleTitle) {
              attrs.onClick = onClick;
            }
            return _react.default.createElement("header", {
              ...attrs
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, children), toggleable && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              className: clsButton,
              icon: 'left'
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2936407715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContainer = CollapsibleContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContainer({
            children,
            onToggle,
            open = false,
            className,
            toggleable = true
          }) {
            open;
            const [opened, setOpen] = _react.default.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle,
              toggleable
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            _react.default.useEffect(() => {
              setOpen(open);
            }, [open]);
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
              className: cls
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1987405976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./accordion",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./accordion",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./accordion",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./accordion",
        "from": "Accordion",
        "name": "Accordion"
      }, {
        "im": "./content",
        "from": "CollapsibleContent",
        "name": "CollapsibleContent"
      }, {
        "im": "./header",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./index",
        "from": "CollapsibleContainer",
        "name": "CollapsibleContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./accordion').Header : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./accordion').Item : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./accordion').Container : value);
        (require || prop === 'Accordion') && _export("Accordion", Accordion = require ? require('./accordion').Accordion : value);
        (require || prop === 'CollapsibleContent') && _export("CollapsibleContent", CollapsibleContent = require ? require('./content').CollapsibleContent : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./header').CollapsibleHeader : value);
        (require || prop === 'CollapsibleContainer') && _export("CollapsibleContainer", CollapsibleContainer = require ? require('./index').CollapsibleContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsInB1c2giLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJQcm92aWRlciIsIkFjY29yZGlvbiIsIl9jb250ZXh0IiwiQ29sbGFwc2libGVDb250ZW50Iiwib3BlbiIsInRvZ2dsZWFibGUiLCJ1c2VDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRvZ2dsZVRpdGxlIiwic2V0T3BlbiIsIm9uVG9nZ2xlIiwiY2xzQnV0dG9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY2NvcmRpb24udHN4IiwiL3RzL2NvbnRlbnQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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