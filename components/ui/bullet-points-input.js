System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/icons"], function (_export, _context2) {
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
    }, function (_pragmateUi003Components) {
      dependency_3 = _pragmateUi003Components;
    }, function (_pragmateUi003List) {
      dependency_4 = _pragmateUi003List;
    }, function (_pragmateUi003Icons) {
      dependency_5 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 983233865,
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
              console.log(0.2, bulletPoints.length, maxBulletPoints);
              if (bulletPoints.length < maxBulletPoints) {
                handleBulletPointsChange([...bulletPoints, '']);
                console.log(0.3, [...bulletPoints, '']);
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