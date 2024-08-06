System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/base"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta1Icons) {
      dependency_3 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Base) {
      dependency_4 = _pragmateUi100Beta1Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.1/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.1/collapsible');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./accordion
      ***************************/
      ims.set('./accordion', {
        hash: 722315164,
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

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 1477433231,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2386687551,
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
        hash: 440499593,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImNsb25lRWxlbWVudCIsIlByb3ZpZGVyIiwiQWNjb3JkaW9uIiwiX2NvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvcGVuIiwidXNlQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRvZ2dsZVRpdGxlIiwic2V0T3BlbiIsIm9uVG9nZ2xlIiwiY2xzQnV0dG9uIiwiQ29sbGFwc2libGVDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvYWNjb3JkaW9uLnRzeCIsIi90cy9jb250ZW50LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi9kZWZpbml0aW9ucy50cyIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR08sTUFBTUUsZ0JBQWdCLEdBQUFDLE9BQUEsQ0FBQUQsZ0JBQUEsR0FBR0gsTUFBQSxDQUFBSyxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUF1QixDQUFDO1VBQ3JFLE1BQU1DLG1CQUFtQixHQUFHQSxDQUFBLEtBQU1QLE1BQUEsQ0FBQUssT0FBSyxDQUFDRyxVQUFVLENBQUNMLGdCQUFnQixDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsbUJBQUEsR0FBQUEsbUJBQUE7VUFFckU7VUFBVyxTQUFVRSxNQUFNQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsUUFBUTtZQUFFQztVQUFLLENBQUU7WUFDL0QsTUFBTTtjQUFFQyxTQUFTO2NBQUVDO1lBQU0sQ0FBRSxHQUFHUCxtQkFBbUIsRUFBRTtZQUNuRCxNQUFNUSxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsYUFBYSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQztjQUMzRVAsU0FBUyxDQUFDRCxLQUFLLEtBQUtFLE1BQU0sR0FBRyxLQUFLLEdBQUdGLEtBQUssQ0FBQztZQUM1QyxDQUFDO1lBQ0QsTUFBTVMsS0FBSyxHQUF1QyxFQUFFO1lBQ3BELElBQUksQ0FBQ1gsUUFBUSxFQUFFVyxLQUFLLENBQUNOLE9BQU8sR0FBR0EsT0FBTztZQUV0QyxPQUNDZixNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBQSxHQUFZRCxLQUFLO2NBQUVFLFNBQVMsRUFBQztZQUF3QixHQUNuRFosUUFBUSxFQUNUWCxNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTZCLEdBQzNDdkIsTUFBQSxDQUFBSyxPQUFBLENBQUFpQixhQUFBLENBQUNwQixNQUFBLENBQUFzQixVQUFVO2NBQUNDLElBQUksRUFBQyxjQUFjO2NBQUNGLFNBQVMsRUFBQztZQUFRLEVBQUcsQ0FDaEQsQ0FDRTtVQUVYO1VBRU87VUFBVyxTQUFVRyxJQUFJQSxDQUFDO1lBQUVoQixRQUFRO1lBQUVDLFFBQVE7WUFBRWdCLEtBQUs7WUFBRWY7VUFBSyxDQUFrQjtZQUNwRixNQUFNO2NBQUVFO1lBQU0sQ0FBRSxHQUFHUCxtQkFBbUIsRUFBRTtZQUV4QyxJQUFJcUIsR0FBRyxHQUFHLGlCQUFpQmhCLEtBQUssS0FBS0UsTUFBTSxHQUFHLHlCQUF5QixHQUFHLEVBQUUsRUFBRTtZQUM5RSxJQUFJSixRQUFRLEVBQUVrQixHQUFHLElBQUksMkJBQTJCO1lBRWhELE9BQ0M1QixNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBU0MsU0FBUyxFQUFFSztZQUFHLEdBQ3JCRCxLQUFLLElBQ0wzQixNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUEsQ0FBQ2IsTUFBTTtjQUFDQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRUUsS0FBSyxFQUFFQTtZQUFLLEdBQ3RDZSxLQUFLLENBRVAsRUFDRDNCLE1BQUEsQ0FBQUssT0FBQSxDQUFBaUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FBRVosUUFBUSxDQUFPLENBQ2hEO1VBRVo7VUFFTztVQUFXLFNBQVVrQixTQUFTQSxDQUFDO1lBQUVsQixRQUFRO1lBQUVtQixNQUFNLEdBQUc7VUFBQyxDQUFFO1lBQzdELE1BQU0sQ0FBQ2hCLE1BQU0sRUFBRUQsU0FBUyxDQUFDLEdBQUdiLE1BQUEsQ0FBQUssT0FBSyxDQUFDMEIsUUFBUSxDQUFDRCxNQUFNLENBQUM7WUFDbEQsTUFBTUUsUUFBUSxHQUFHaEIsS0FBSyxJQUFHLENBQUUsQ0FBQztZQUU1QixNQUFNaUIsS0FBSyxHQUFHO2NBQUVELFFBQVE7Y0FBRWxCLE1BQU07Y0FBRUQ7WUFBUyxDQUFFO1lBQzdDYixNQUFBLENBQUFLLE9BQUssQ0FBQzZCLFNBQVMsQ0FBQyxNQUFNckIsU0FBUyxDQUFDaUIsTUFBTSxDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDLENBQUM7WUFDbEQsTUFBTUssTUFBTSxHQUFHbkMsTUFBQSxDQUFBSyxPQUFLLENBQUMrQixRQUFRLENBQUNDLEdBQUcsQ0FBQzFCLFFBQVEsRUFBRSxDQUFDMkIsS0FBSyxFQUFFMUIsS0FBSyxLQUFJO2NBQzVELE9BQU9aLE1BQUEsQ0FBQUssT0FBSyxDQUFDa0MsWUFBWSxDQUFDRCxLQUFLLEVBQUU7Z0JBQUUxQjtjQUFLLENBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFFRixPQUNDWixNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUEsQ0FBQ25CLGdCQUFnQixDQUFDcUMsUUFBUTtjQUFDUCxLQUFLLEVBQUVBO1lBQUssR0FDdENqQyxNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FBRVksTUFBTSxDQUFPLENBQ2Q7VUFFOUI7VUFFTztVQUFZLE1BQU1NLFNBQVMsR0FBQXJDLE9BQUEsQ0FBQXFDLFNBQUEsR0FBRztZQUFFaEMsTUFBTTtZQUFFaUIsSUFBSTtZQUFFRztVQUFTLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURoRSxJQUFBN0IsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlDLFFBQUEsR0FBQXpDLE9BQUE7VUFHTztVQUFXLFNBQVUwQyxrQkFBa0JBLENBQUM7WUFBQ3BCLFNBQVM7WUFBRVo7VUFBUSxDQUFZO1lBQzlFLE1BQU07Y0FBQ2lDO1lBQUksQ0FBQyxHQUFHLElBQUFGLFFBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFDdEMsTUFBTWpCLEdBQUcsR0FBRyx1QkFBdUJMLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQ2xFcUIsSUFBSSxHQUFHLCtCQUErQixHQUFHLEVBQzFDLEVBQUU7WUFDRixPQUFPNUMsTUFBQSxDQUFBSyxPQUFBLENBQUFpQixhQUFBO2NBQVNDLFNBQVMsRUFBRUs7WUFBRyxHQUFHakIsUUFBUSxDQUFXO1VBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUFYLE1BQUEsR0FBQUMsT0FBQTtVQU9PLE1BQU02QyxrQkFBa0IsR0FBQTFDLE9BQUEsQ0FBQTBDLGtCQUFBLEdBQUc5QyxNQUFBLENBQUFLLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztVQUNwRCxNQUFNdUMscUJBQXFCLEdBQUdBLENBQUEsS0FBTTdDLE1BQUEsQ0FBQUssT0FBSyxDQUFDRyxVQUFVLENBQUNzQyxrQkFBa0IsQ0FBQztVQUFDMUMsT0FBQSxDQUFBeUMscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7O1VDUmhGOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQTVDLE9BQUE7WUFDQTZCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBakMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlDLFFBQUEsR0FBQXpDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFHTztVQUFXLFNBQVVnRCxpQkFBaUJBLENBQUM7WUFDN0N0QyxRQUFRO1lBQ1JZLFNBQVM7WUFDVDJCLFdBQVcsR0FBRztVQUFJLENBQ0U7WUFDcEIsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLFFBQVE7Y0FBRVI7WUFBSSxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUUzRCxNQUFNOUIsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQixJQUFJLENBQUNxQyxRQUFRLEVBQUU7Z0JBQ2RELE9BQU8sQ0FBQyxDQUFDUCxJQUFJLENBQUM7Z0JBQ2Q7O2NBR0QsSUFBSSxNQUFNUSxRQUFRLENBQUMsQ0FBQ1IsSUFBSSxDQUFDLEVBQUVPLE9BQU8sQ0FBQyxDQUFDUCxJQUFJLENBQUM7WUFDMUMsQ0FBQztZQUNELE1BQU1oQixHQUFHLEdBQUcsdUJBQXVCTCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJcUIsSUFBSSxHQUFHLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDM0YsTUFBTVMsU0FBUyxHQUFHLHVCQUF1QlQsSUFBSSxHQUFHLDhCQUE4QixHQUFHLEVBQUUsRUFBRTtZQUNyRixNQUFNdkIsS0FBSyxHQUFnRDtjQUFFRSxTQUFTLEVBQUVLO1lBQUcsQ0FBRTtZQUM3RSxJQUFJc0IsV0FBVyxFQUFFO2NBQ2hCN0IsS0FBSyxDQUFDTixPQUFPLEdBQUdBLE9BQU87O1lBRXhCLE9BQ0NmLE1BQUEsQ0FBQUssT0FBQSxDQUFBaUIsYUFBQTtjQUFBLEdBQVlEO1lBQUssR0FDaEJyQixNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTZCLEdBQUVaLFFBQVEsQ0FBTyxFQUM3RFgsTUFBQSxDQUFBSyxPQUFBLENBQUFpQixhQUFBLENBQUNwQixNQUFBLENBQUFzQixVQUFVO2NBQUNULE9BQU8sRUFBRUEsT0FBTztjQUFFUSxTQUFTLEVBQUU4QixTQUFTO2NBQUU1QixJQUFJLEVBQUU7WUFBTSxFQUFJLENBQzVEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUF6QixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUMsUUFBQSxHQUFBekMsT0FBQTtVQUdPO1VBQVcsU0FBVXFELG9CQUFvQkEsQ0FBQztZQUNoRDNDLFFBQVE7WUFDUnlDLFFBQVE7WUFDUlIsSUFBSSxHQUFHLEtBQUs7WUFDWnJCO1VBQVMsQ0FDUTtZQUNqQnFCLElBQUk7WUFDSixNQUFNLENBQUM5QixNQUFNLEVBQUVxQyxPQUFPLENBQUMsR0FBR25ELE1BQUEsQ0FBQUssT0FBSyxDQUFDMEIsUUFBUSxDQUFDYSxJQUFJLENBQUM7WUFDOUMsTUFBTVgsS0FBSyxHQUFHO2NBQUVXLElBQUksRUFBRTlCLE1BQU07Y0FBRXFDLE9BQU87Y0FBRUM7WUFBUSxDQUFFO1lBQ2pELE1BQU14QixHQUFHLEdBQUcsMEJBQTBCTCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBRXpFLE9BQ0N2QixNQUFBLENBQUFLLE9BQUEsQ0FBQWlCLGFBQUEsQ0FBQ29CLFFBQUEsQ0FBQUksa0JBQWtCLENBQUNOLFFBQVE7Y0FBQ1AsS0FBSyxFQUFFQTtZQUFLLEdBQ3hDakMsTUFBQSxDQUFBSyxPQUFBLENBQUFpQixhQUFBO2NBQVNDLFNBQVMsRUFBRUs7WUFBRyxHQUFHakIsUUFBUSxDQUFXLENBQ2hCO1VBRWhDIiwiaWdub3JlTGlzdCI6W119