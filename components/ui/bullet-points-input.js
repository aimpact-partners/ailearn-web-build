System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/icons"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_3 = _pragmateUi006Components;
    }, function (_pragmateUi006List) {
      dependency_4 = _pragmateUi006List;
    }, function (_pragmateUi006Icons) {
      dependency_5 = _pragmateUi006Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/list', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input');
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
        hash: 1271577729,
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
              console.log(20, index);
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
        hash: 2336411136,
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
              control: Item
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
        hash: 1490857816,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRyb2wiLCJjb25zdHJ1Y3RvciIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJsZW5ndGgiLCJidWxsZXRQb2ludFJlZnMiLCJ1c2VSZWYiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJ1c2VTdGF0ZSIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wcGVkUG9zaXRpb24iLCJoYW5kbGVEcmFnRW5kIiwibmV3QnVsbGV0UG9pbnRzIiwibW92ZWRCdWxsZXRQb2ludCIsInNwbGljZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwiaXNMYXN0QnVsbGV0UG9pbnQiLCJpc05vdEVtcHR5IiwidHJpbSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlZ2lzdGVyQnVsbGV0UG9pbnRSZWYiLCJlbGVtZW50IiwiY2FuUmVtb3ZlQnVsbGV0UG9pbnQiLCJfdXNlQnVsbGV0UG9pbnRzIiwiX2NvbnRleHQiLCJfbGlzdCIsIl9pdGVtIiwiQnVsbGV0UG9pbnRzSW5wdXQiLCJjaGlsZHJlbiIsImFjdGlvbnMiLCJjbGFzc05hbWUiLCJzcGVjcyIsIkl0ZW0iLCJCdWxsZXRQb2ludHNJbnB1dEl0ZW0iLCJkaXNhYmxlZCIsImZpZWxkTmFtZSIsImhvb2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJBY3Rpb25zQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImRhdGEiLCJrZXlzIiwiZm9yRWFjaCIsImF0dHJzIiwib25DbGljayIsImUiLCJlcnJvciIsInB1c2giLCJJY29uQnV0dG9uIiwiaWNvbiIsInRpdGxlIiwiX2FjdGlvbnMiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udHJvbC50cyIsIi90cy9ob29rcy91c2UtYnVsbGV0LXBvaW50cy50cyIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFZTztVQUFZLE1BQU1DLHdCQUF3QixHQUFBQyxPQUFBLENBQUFELHdCQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFB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