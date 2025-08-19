System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/list", "pragmate-ui@1.0.6/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BulletPointsInputContext, useBulletPointsInputContext, Control, useBulletPoints, BulletPointsInput, ActionsContainer, BulletPointsInputItem, __beyond_pkg, hmr;
  _export({
    BulletPointsInputContext: void 0,
    useBulletPointsInputContext: void 0,
    Control: void 0,
    useBulletPoints: void 0,
    BulletPointsInput: void 0,
    ActionsContainer: void 0,
    BulletPointsInputItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi106Components) {
      dependency_3 = _pragmateUi106Components;
    }, function (_pragmateUi106List) {
      dependency_4 = _pragmateUi106List;
    }, function (_pragmateUi106Icons) {
      dependency_5 = _pragmateUi106Icons;
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
          "vspecifier": "@aimpact/ailearn-app@0.5.7/components/ui/bullet-points-input"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/list', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/components/ui/bullet-points-input');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 323603441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPointsInputContext = exports.BulletPointsInputContext = void 0;
          var _react = require("react");
          /*bundle */
          const BulletPointsInputContext = exports.BulletPointsInputContext = _react.default.createContext({});
          /*bundle */
          const useBulletPointsInputContext = () => _react.default.useContext(BulletPointsInputContext);
          exports.useBulletPointsInputContext = useBulletPointsInputContext;
        }
      });

      /*************************
      INTERNAL MODULE: ./control
      *************************/

      ims.set('./control', {
        hash: 1043499290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-bullet-points
      *****************************************/

      ims.set('./hooks/use-bullet-points', {
        hash: 273495920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPoints = useBulletPoints;
          var _react = require("react");
          /*bundle */
          function useBulletPoints(handleChange, name, {
            minBulletPoints,
            maxBulletPoints,
            values = ['']
          }) {
            const bulletPoints = !!values.length ? values : [''];
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => {
              handleChange({
                currentTarget: {
                  name,
                  value: updatedBulletPoints
                }
              });
            };
            const handleDragStart = (_, index) => {
              setDraggedIndex(index);
            };
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) setDroppedIndex(droppedPosition);
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              handleBulletPointsChange(updatedBulletPoints);
            };
            const handleKeyDown = (index, event) => {
              const isLastBulletPoint = index === bulletPoints.length - 1;
              const isNotEmpty = bulletPoints[index].trim() !== '';
              if (event.key === 'Tab') {
                event.preventDefault();
                if (isLastBulletPoint && isNotEmpty) {
                  addBulletPoint();
                } else if (!event.shiftKey && event.key === 'Tab') {
                  focusBulletPoint(index + 1);
                } else if (event.key === 'Tab' && event.shiftKey) {
                  focusBulletPoint(index - 1);
                }
              } else if (event.key === 'Backspace' && bulletPoints[index] === '' && bulletPoints.length > 1) {
                event.preventDefault();
                removeBulletPoint(index);
              }
            };
            const addBulletPoint = () => {
              if (bulletPoints.length < maxBulletPoints) {
                handleBulletPointsChange([...bulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                const updatedBulletPoints = [...bulletPoints];
                updatedBulletPoints.splice(index, 1);
                focusBulletPoint(updatedBulletPoints.length - 1);
                handleBulletPointsChange(updatedBulletPoints);
              }
            };
            const focusBulletPoint = index => {
              const inputElement = bulletPointRefs.current[index];
              if (inputElement) {
                inputElement.focus();
                inputElement.setSelectionRange(0, inputElement.value.length);
              }
            };
            const registerBulletPointRef = (index, element) => {
              bulletPointRefs.current[index] = element;
            };
            const canRemoveBulletPoint = bulletPoints.length > minBulletPoints;
            return {
              bulletPoints,
              handleInputChange,
              handleKeyDown,
              addBulletPoint,
              removeBulletPoint,
              registerBulletPointRef,
              canRemoveBulletPoint,
              handleDragOver,
              handleDragEnd,
              handleDragStart
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 112770758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsInput = void 0;
          var _react = require("react");
          var _useBulletPoints = require("./hooks/use-bullet-points");
          var _context = require("./context");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          /* bundle */
          const BulletPointsInput = ({
            children,
            values = [],
            actions,
            className,
            specs,
            // aditional specs to use in Items
            handleChange,
            Item = _item.BulletPointsInputItem,
            disabled = false,
            minBulletPoints = 1,
            maxBulletPoints = 10,
            fieldName
          }) => {
            const hook = (0, _useBulletPoints.useBulletPoints)(handleChange, fieldName, {
              maxBulletPoints,
              minBulletPoints,
              values
            });
            const {
              bulletPoints,
              addBulletPoint
            } = hook;
            const value = {
              hook,
              disabled,
              actions,
              addBulletPoint,
              specs
            };
            const cls = `bullet-points-form${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.BulletPointsInputContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
              className: cls
            }, children, _react.default.createElement(_list.List, {
              className: "bullet-point-items__list list-unstyled",
              items: bulletPoints,
              control: Item,
              container: "div"
            })));
          };
          exports.BulletPointsInput = BulletPointsInput;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 1562726509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 718966097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionsContainer = ActionsContainer;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function ActionsContainer({
            index,
            fetching,
            setFetching,
            data
          }) {
            const {
              hook,
              actions
            } = (0, _context.useBulletPointsInputContext)();
            const {
              removeBulletPoint,
              canRemoveBulletPoint
            } = hook;
            const items = [];
            if (actions) {
              const keys = Object.keys(actions);
              keys.forEach(key => {
                const attrs = {
                  ...actions[key]
                };
                attrs.disabled = fetching || attrs.requireValue && !data;
                delete attrs.requireValue;
                delete attrs.onClick;
                //@ts-ignore
                const onClick = async event => {
                  try {
                    event.preventDefault();
                    setFetching(true);
                    //@ts-ignore
                    await actions[key].onClick(event, index, data);
                    setFetching(false);
                  } catch (e) {
                    console.error(e);
                  }
                };
                //@ts-ignore
                items.push(_react.default.createElement(_icons.IconButton, {
                  className: "circle",
                  key: `action.${index}.${key}`,
                  ...attrs,
                  onClick: onClick
                }));
              });
            }
            return _react.default.createElement("section", {
              className: "bullet-point__actions flex-container flex-center"
            }, items, canRemoveBulletPoint && _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              title: "Delete",
              className: "delete-bullet-point circle",
              onClick: () => removeBulletPoint(index)
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1969141284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsInputItem = BulletPointsInputItem;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _actions = require("./actions");
          /*bundle */
          function BulletPointsInputItem({
            data,
            index
          }) {
            const {
              hook,
              disabled
            } = (0, _context.useBulletPointsInputContext)();
            const {
              handleInputChange,
              handleKeyDown,
              registerBulletPointRef,
              handleDragEnd,
              handleDragOver,
              handleDragStart
            } = hook;
            const [fetching, setFetching] = _react.default.useState(false);
            const cls = `bullet-points-item${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement("div", {
              key: index,
              className: cls,
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            }), _react.default.createElement("label", {
              className: "bullet-point-item__content"
            }, _react.default.createElement("span", null, index + 1, "."), _react.default.createElement("input", {
              className: "bullet-points-input",
              type: "text",
              value: data ?? '',
              disabled: disabled,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            })), _react.default.createElement(_actions.ActionsContainer, {
              index: index,
              fetching: fetching,
              setFetching: setFetching,
              data: data
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "BulletPointsInputContext",
        "name": "BulletPointsInputContext"
      }, {
        "im": "./context",
        "from": "useBulletPointsInputContext",
        "name": "useBulletPointsInputContext"
      }, {
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./hooks/use-bullet-points",
        "from": "useBulletPoints",
        "name": "useBulletPoints"
      }, {
        "im": "./index",
        "from": "BulletPointsInput",
        "name": "BulletPointsInput"
      }, {
        "im": "./item/actions",
        "from": "ActionsContainer",
        "name": "ActionsContainer"
      }, {
        "im": "./item/index",
        "from": "BulletPointsInputItem",
        "name": "BulletPointsInputItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BulletPointsInputContext') && _export("BulletPointsInputContext", BulletPointsInputContext = require ? require('./context').BulletPointsInputContext : value);
        (require || prop === 'useBulletPointsInputContext') && _export("useBulletPointsInputContext", useBulletPointsInputContext = require ? require('./context').useBulletPointsInputContext : value);
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'useBulletPoints') && _export("useBulletPoints", useBulletPoints = require ? require('./hooks/use-bullet-points').useBulletPoints : value);
        (require || prop === 'BulletPointsInput') && _export("BulletPointsInput", BulletPointsInput = require ? require('./index').BulletPointsInput : value);
        (require || prop === 'ActionsContainer') && _export("ActionsContainer", ActionsContainer = require ? require('./item/actions').ActionsContainer : value);
        (require || prop === 'BulletPointsInputItem') && _export("BulletPointsInputItem", BulletPointsInputItem = require ? require('./item/index').BulletPointsInputItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRyb2wiLCJjb25zdHJ1Y3RvciIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJsZW5ndGgiLCJidWxsZXRQb2ludFJlZnMiLCJ1c2VSZWYiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJ1c2VTdGF0ZSIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJ0cmltIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50Iiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIl91c2VCdWxsZXRQb2ludHMiLCJfY29udGV4dCIsIl9saXN0IiwiX2l0ZW0iLCJCdWxsZXRQb2ludHNJbnB1dCIsImNoaWxkcmVuIiwiYWN0aW9ucyIsImNsYXNzTmFtZSIsInNwZWNzIiwiSXRlbSIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiaG9vayIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJjb250YWluZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIkFjdGlvbnNDb250YWluZXIiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGF0YSIsImtleXMiLCJmb3JFYWNoIiwiYXR0cnMiLCJyZXF1aXJlVmFsdWUiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInB1c2giLCJJY29uQnV0dG9uIiwiaWNvbiIsInRpdGxlIiwiX2FjdGlvbnMiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIl0sInNvdXJjZXMiOlsiLy90cy9jb250ZXh0LnRzIiwiLy90cy9jb250cm9sLnRzIiwiLy90cy9ob29rcy91c2UtYnVsbGV0LXBvaW50cy50cyIsIi8vdHMvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2VzLnRzLyIsIi8vdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi8vdHMvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVlPO1VBQVksTUFBTUMsd0JBQXdCLEdBQUFDLE9BQUEsQ0FBQUQsd0JBQUEsR0FBR0YsTUFBQSxD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