System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
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
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/collapsible');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./accordion
      ***************************/
      ims.set('./accordion', {
        hash: 3055160805,
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
            return _react.default.createElement("header", {
              ...attrs,
              className: 'accordion-item__header'
            }, children, _react.default.createElement("div", {
              className: 'accordion-item__header-icon'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'chevronRight',
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
            const output = _react.default.Children.map(children, (child, index) => {
              return _react.default.cloneElement(child, {
                index
              });
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
        hash: 878084793,
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
              open
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
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
        hash: 2311174834,
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
            key,
            toggleTitle = true
          }) {
            const {
              setOpen,
              onToggle,
              open
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (onToggle) await onToggle(!open);
              setOpen(!open);
            };
            const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
            const clsButton = `collapsible__button ${open ? ' collapsible__button--opened' : ''}`;
            const attrs = {
              className: cls
            };
            if (toggleTitle) {
              attrs.onClick = onClick;
            }
            return _react.default.createElement("header", {
              ...attrs
            }, _react.default.createElement("div", {
              className: 'collapsible__header-content'
            }, children), _react.default.createElement(_icons.IconButton, {
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
        hash: 1632548621,
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
            className
          }) {
            open;
            const [opened, setOpen] = _react.default.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            console.log(23, opened);
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
              className: cls
            }, children));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImNsb25lRWxlbWVudCIsIlByb3ZpZGVyIiwiQWNjb3JkaW9uIiwiX2NvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvcGVuIiwidXNlQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJrZXkiLCJ0b2dnbGVUaXRsZSIsInNldE9wZW4iLCJvblRvZ2dsZSIsImNsc0J1dHRvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VzIjpbIi90cy9hY2NvcmRpb24udHN4IiwiL3RzL2NvbnRlbnQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFB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