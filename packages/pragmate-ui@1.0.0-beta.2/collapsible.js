System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/base"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta2Icons) {
      dependency_3 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Base) {
      dependency_4 = _pragmateUi100Beta2Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/ailearn-app", "0.1.6-dev.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.2/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.2/collapsible');
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
        hash: 3570574823,
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
        hash: 2188432536,
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
              open
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (!onToggle) {
                setOpen(!open);
                return;
              }
              if (await onToggle(!open)) setOpen(!open);
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
        hash: 2343854048,
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
        hash: 1442723110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsInB1c2giLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJQcm92aWRlciIsIkFjY29yZGlvbiIsIl9jb250ZXh0IiwiQ29sbGFwc2libGVDb250ZW50Iiwib3BlbiIsInVzZUNvbGxhcHNpYmxlQ29udGV4dCIsIkNvbGxhcHNpYmxlQ29udGV4dCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidG9nZ2xlVGl0bGUiLCJzZXRPcGVuIiwib25Ub2dnbGUiLCJjbHNCdXR0b24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjY29yZGlvbi50c3giLCIvdHMvY29udGVudC50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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