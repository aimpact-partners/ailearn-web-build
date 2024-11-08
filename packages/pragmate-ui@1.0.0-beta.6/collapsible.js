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
        hash: 3924633205,
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
              className: 'accordion-item__header'
            }, children, _react.default.createElement("div", {
              className: 'accordion-item__header-icon'
            }, _react.default.createElement(_icons.IconButton, {
              icon: icon,
              className: 'circle'
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
              className: 'accordion-item__content'
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
              className: 'accordion'
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